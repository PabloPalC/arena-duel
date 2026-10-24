// Arena Duel — interfaz, bucle de juego y red
import { CARDS, DT, W, H, ELIXIR_RATE, EMOTES, PROTOCOL, TOWER_LAYOUT, TOWERS, TROOP_SPEED_LABEL } from './data.js';
import { Game, snapPos, placementOk, mirror } from './sim.js';
import { Bot } from './bot.js';
import { View } from './render.js';
import { hostRoom, joinRoom, cleanCode } from './net.js';
import { unlockAudio, sfx, buzz, isMuted, setMuted } from './audio.js';

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
const LEVEL_NAMES = ['Escudero', 'Caballero', 'Rey Negro'];
const TICK_MS = DT * 1000;

const S = {
  state: 'menu',        // menu | lobby | countdown | playing | over
  mode: null,           // practice | host | guest
  me: 0,
  level: 1,
  game: null, bot: null, view: null,
  tr: null, room: null,
  acc: 0, lastT: 0,
  outEv: [], sinceSend: 0,
  hud: { hand: [0, 1, 2, 3], next: 4, el: 5, elAt: 0, tm: 1800, ph: 0, crowns: [0, 0] },
  pending: [], seq: 0,
  sel: -1, press: null, canvasPress: null, ghost: null,
  tickOff: null, lastMsgAt: 0, rtt: 0,
  endHandled: false,
  rematch: { me: false, foe: false },
  foeName: 'Rival', myName: 'Tú',
  emoteAt: 0,
  handKey: '',
  cardEls: [],
  wakeLock: null,
};

// ---------- utilidades de interfaz ----------
const SCREENS = ['menu', 'practice', 'lobby', 'join', 'deck', 'help', 'versus', 'game'];
function show(id) {
  for (const s of SCREENS) $('#' + s).classList.toggle('hidden', s !== id);
  if (id !== 'game') $('#overlay').classList.add('hidden');
}

let toastT = 0;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.add('hidden'), 1300);
}

function banner(text, cls = '') {
  const b = $('#banner');
  b.textContent = text;
  b.className = cls;
  void b.offsetWidth;
  b.classList.remove('hidden');
  clearTimeout(banner.t);
  banner.t = setTimeout(() => b.classList.add('hidden'), 1900);
}

function goFullscreen() {
  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);
  const el = document.documentElement;
  if (!isIOS && el.requestFullscreen && !document.fullscreenElement && matchMedia('(pointer: coarse)').matches) {
    el.requestFullscreen({ navigationUI: 'hide' }).catch(() => {});
  }
}

async function keepAwake() {
  try {
    if ('wakeLock' in navigator && !S.wakeLock) {
      S.wakeLock = await navigator.wakeLock.request('screen');
      S.wakeLock.addEventListener('release', () => { S.wakeLock = null; });
    }
  } catch { /* */ }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && (S.state === 'playing' || S.state === 'countdown')) keepAwake();
});

function getName() {
  const v = ($('#nameInput').value || '').trim();
  return v || 'Jugador';
}
function saveName(v) {
  try { localStorage.setItem('ad_name', v); } catch { /* */ }
}

// ---------- Menú ----------
function initMenu() {
  let saved = '';
  try { saved = localStorage.getItem('ad_name') || ''; } catch { /* */ }
  $('#nameInput').value = saved;
  $('#nameInput2').value = saved;
  const sync = (src, dst) => src.addEventListener('input', () => { dst.value = src.value; saveName(src.value.trim()); });
  sync($('#nameInput'), $('#nameInput2'));
  sync($('#nameInput2'), $('#nameInput'));

  $('#btnHost').onclick = () => { unlockAudio(); sfx('select'); startHost(); };
  $('#btnJoin').onclick = () => { unlockAudio(); sfx('select'); openJoin(''); };
  $('#btnPractice').onclick = () => { unlockAudio(); sfx('select'); show('practice'); };
  $('#btnDeck').onclick = () => { unlockAudio(); show('deck'); };
  $('#btnHelp').onclick = () => { unlockAudio(); show('help'); };
  const sb = $('#btnSound');
  const paint = () => { sb.textContent = isMuted() ? '🔇' : '🔊'; };
  paint();
  sb.onclick = () => { unlockAudio(); setMuted(!isMuted()); paint(); sfx('select'); };

  document.querySelectorAll('#practice [data-level]').forEach(b => {
    b.onclick = () => { unlockAudio(); goFullscreen(); startPractice(+b.dataset.level); };
  });
  document.querySelectorAll('.back').forEach(b => {
    if (b.id === 'lobbyCancel') return;
    b.onclick = () => { sfx('select'); show('menu'); };
  });
  $('#lobbyCancel').onclick = () => { leaveRoom(); show('menu'); };

  $('#btnShare').onclick = shareLink;
  $('#btnCopy').onclick = copyLink;

  const ci = $('#codeInput');
  ci.addEventListener('input', () => { ci.value = cleanCode(ci.value); $('#joinError').textContent = ''; });
  ci.addEventListener('keydown', (e) => { if (e.key === 'Enter') doJoin(); });
  $('#btnJoinGo').onclick = () => { unlockAudio(); goFullscreen(); doJoin(); };

  buildDeckList();

  const sala = cleanCode(params.get('sala'));
  if (sala.length === 4) openJoin(sala);
}

function buildDeckList() {
  const box = $('#deckList');
  box.innerHTML = '';
  for (const c of CARDS) {
    const d = document.createElement('div');
    d.className = 'deck-item';
    d.style.setProperty('--c', c.color);
    let rows = [];
    if (c.type === 'spell') {
      rows = [['Daño', c.spell.dmg], ['A torres', Math.round(c.spell.dmg * c.spell.towerMult)], ['Radio', c.spell.radius + ' casillas']];
    } else {
      const u = c.unit;
      const tg = u.targets === 'both' ? 'Tierra y aire' : u.targets === 'ground' ? 'Solo tierra' : 'Solo edificios';
      rows = [['Vida', u.hp + (c.count > 1 ? ` ×${c.count}` : '')], ['Daño', u.dmg + (u.splash ? ' (área)' : '')],
        ['Alcance', u.range >= 2 ? u.range + ' casillas' : 'Cuerpo a cuerpo'], ['Ataca', tg]];
      rows.push(c.type === 'building' ? ['Dura', u.lifetime + ' s'] : ['Velocidad', TROOP_SPEED_LABEL(u.speed) + (u.air ? ', vuela' : '')]);
    }
    d.innerHTML = `<div class="art"><em><span>${c.cost}</span></em>${c.icon}</div>
      <div><h3>${c.name}</h3><p>${c.desc}</p><dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
    box.appendChild(d);
  }
}

// ---------- Red ----------
function roomLink(code) {
  return `${location.origin}${location.pathname}?sala=${code}`;
}
async function shareLink() {
  const code = S.room && S.room.code;
  if (!code) return;
  const url = roomLink(code);
  if (navigator.share) {
    try { await navigator.share({ title: 'Arena Duel', text: `Te reto a un duelo en Arena Duel. Código ${code}:`, url }); return; } catch { /* */ }
  }
  copyLink();
}
async function copyLink() {
  const code = S.room && S.room.code;
  if (!code) return;
  try { await navigator.clipboard.writeText(roomLink(code)); $('#lobbyStatus').textContent = 'Enlace copiado. Esperando a tu rival…'; }
  catch { $('#lobbyStatus').textContent = 'Comparte el código ' + code; }
}

function viaLabel(via) {
  return !via.includes('relay') || via.length > 1 ? 'Esperando a tu rival…' : 'Esperando a tu rival (modo relé)…';
}

async function startHost() {
  goFullscreen();
  leaveRoom();
  S.mode = 'host';
  S.me = 0;
  S.myName = getName();
  S.state = 'lobby';
  show('lobby');
  $('#roomCode').textContent = '····';
  $('#lobbyStatus').textContent = 'Preparando la sala…';
  try {
    const room = await hostRoom((tr) => onTransport(tr));
    if (S.state !== 'lobby' || S.mode !== 'host') { room.close(); return; }
    S.room = room;
    $('#roomCode').textContent = room.code;
    if (!S.tr) $('#lobbyStatus').textContent = viaLabel(room.via);
  } catch (e) {
    $('#lobbyStatus').textContent = e.message || 'No se pudo crear la sala.';
  }
}

function openJoin(code) {
  show('join');
  $('#codeInput').value = code;
  $('#joinError').textContent = '';
  $('#joinWait').classList.add('hidden');
  $('#btnJoinGo').disabled = false;
  if (!code) setTimeout(() => $('#codeInput').focus(), 50);
}

async function doJoin() {
  const code = cleanCode($('#codeInput').value);
  if (code.length !== 4) { $('#joinError').textContent = 'El código tiene 4 caracteres.'; return; }
  leaveRoom();
  S.mode = 'guest';
  S.me = 1;
  S.myName = getName();
  S.state = 'lobby';
  $('#btnJoinGo').disabled = true;
  $('#joinError').textContent = '';
  $('#joinWait').classList.remove('hidden');
  $('#joinStatus').textContent = 'Buscando la sala…';
  try {
    const tr = await joinRoom(code, (s) => { $('#joinStatus').textContent = s; });
    if (S.mode !== 'guest' || S.state !== 'lobby') { tr.close(); return; }
    onTransport(tr);
    $('#joinStatus').textContent = 'Conectado. Saludando…';
    send({ t: 'hello', name: S.myName, v: PROTOCOL });
  } catch (e) {
    $('#joinWait').classList.add('hidden');
    $('#btnJoinGo').disabled = false;
    $('#joinError').textContent = e.message || 'No se pudo entrar.';
    S.mode = null;
    S.state = 'menu';
  }
}

function onTransport(tr) {
  S.tr = tr;
  S.lastMsgAt = performance.now();
  tr.onmessage = onNet;
  tr.onclose = () => onPeerGone('Se ha perdido la conexión con tu rival.');
  if (S.mode === 'host') $('#lobbyStatus').textContent = 'Rival conectado…';
}

function send(m) { if (S.tr) S.tr.send(m); }

function leaveRoom() {
  if (S.tr) { try { S.tr.send({ t: 'leave' }); } catch { /* */ } const t = S.tr; S.tr = null; t.onclose = null; setTimeout(() => t.close(), 150); }
  if (S.room) { const r = S.room; S.room = null; setTimeout(() => r.close(), 200); }
}

function onPeerGone(msg) {
  if (S.mode === 'practice' || S.mode === null || S.state === 'menu') return;
  const tr = S.tr;
  S.tr = null;
  if (tr) { tr.onclose = null; tr.onmessage = null; try { tr.close(); } catch { /* */ } }
  if (S.state === 'lobby' && S.mode === 'guest') {
    $('#joinError').textContent = msg;
    $('#joinWait').classList.add('hidden');
    $('#btnJoinGo').disabled = false;
    return;
  }
  if (S.state === 'lobby' && S.mode === 'host') {
    $('#lobbyStatus').textContent = 'Tu rival se ha ido. Cancela y crea otra sala.';
    return;
  }
  if (S.state === 'countdown') S.state = 'over';
  if (S.state === 'playing' || S.state === 'over') {
    S.state = 'over';
    S.endHandled = true;
    show('game');
    showOverlay({ title: 'Sin rival', lose: true, text: msg, rematch: false });
  }
}

function onNet(m) {
  S.lastMsgAt = performance.now();
  switch (m.t) {
    case 'hello':
      if (S.mode !== 'host') return;
      if (m.v !== PROTOCOL) { send({ t: 'err', msg: 'Tu versión del juego es distinta. Recarga la página.' }); return; }
      S.foeName = (m.name || 'Rival').slice(0, 14);
      send({ t: 'welcome', name: S.myName, v: PROTOCOL });
      if (S.state === 'lobby') beginCountdown();
      break;
    case 'welcome':
      if (S.mode !== 'guest') return;
      S.foeName = (m.name || 'Rival').slice(0, 14);
      $('#joinStatus').textContent = '¡Dentro! Empezamos…';
      break;
    case 'err':
      $('#joinError').textContent = m.msg;
      break;
    case 'full':
      $('#joinError').textContent = 'Esa sala ya tiene dos jugadores.';
      $('#joinWait').classList.add('hidden');
      $('#btnJoinGo').disabled = false;
      break;
    case 'start':
      if (S.mode === 'guest') countdown(startMatch);
      break;
    case 's':
      if (S.mode === 'guest' && (S.state === 'playing' || S.state === 'over')) onSnapshot(m);
      break;
    case 'play':
      if (S.mode === 'host' && S.game) {
        const ok = S.game.play(1, m.slot, m.c, m.x, m.y, m.s);
        if (!ok) send({ t: 'nack', s: m.s });
      }
      break;
    case 'nack':
      S.pending = S.pending.filter(p => p.seq !== m.s);
      S.handKey = '';
      break;
    case 'emote':
      if (S.view && EMOTES[m.i]) { S.view.emote(1 - S.me, EMOTES[m.i]); sfx('emote'); }
      break;
    case 'surrender':
      if (S.mode === 'host' && S.game && S.game.phase !== 'over') S.game.finish(0, 'surrender');
      break;
    case 'rematch':
      S.rematch.foe = true;
      updateRematchInfo();
      if (S.mode === 'host' && S.rematch.me) beginCountdown();
      break;
    case 'ping':
      send({ t: 'pong', ts: m.ts });
      break;
    case 'pong':
      S.rtt = Math.round(performance.now() - m.ts);
      break;
    case 'leave':
      onPeerGone('Tu rival ha salido de la partida.');
      break;
  }
}

setInterval(() => {
  if (!S.tr || S.mode === 'practice') return;
  send({ t: 'ping', ts: performance.now() });
  if ((S.state === 'playing' || S.state === 'over' || S.state === 'countdown') && performance.now() - S.lastMsgAt > 10000) {
    onPeerGone('Tu rival no responde. Puede que haya cerrado el juego o se haya quedado sin cobertura.');
  }
  const ni = $('#netInfo');
  if (S.state === 'playing') ni.textContent = `${S.rtt} ms · ${S.tr && S.tr.kind === 'relay' ? 'relé' : 'directo'}`;
}, 2000);

// ---------- Arranque de partida ----------
function beginCountdown() {
  S.rematch = { me: false, foe: false };
  send({ t: 'start' });
  countdown(startMatch);
}

function countdown(then) {
  S.state = 'countdown';
  keepAwake();
  show('versus');
  $('#vsFoe').textContent = S.foeName;
  $('#vsMe').textContent = S.myName;
  const el = $('#vsCount');
  let n = 3;
  const tick = () => {
    if (S.state !== 'countdown') return;
    el.textContent = n > 0 ? String(n) : '¡A luchar!';
    el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
    sfx(n > 0 ? 'tick' : 'go');
    if (n > 0) { n--; setTimeout(tick, 800); }
    else setTimeout(() => { if (S.state === 'countdown') then(); }, 450);
  };
  tick();
}

function startPractice(level) {
  leaveRoom();
  S.mode = 'practice';
  S.me = 0;
  S.level = level;
  S.myName = getName();
  S.foeName = LEVEL_NAMES[level];
  countdown(startMatch);
}

function startMatch() {
  S.state = 'playing';
  S.endHandled = false;
  S.pending = []; S.seq = 0; S.tickOff = null;
  S.sel = -1; S.ghost = null; S.press = null; S.canvasPress = null;
  S.outEv = []; S.sinceSend = 0;
  S.rematch = { me: false, foe: false };
  S.hud = { hand: [-1, -1, -1, -1], next: -1, el: 5, elAt: performance.now(), tm: 1800, ph: 0, crowns: [0, 0] };
  S.handKey = '';
  show('game');
  $('#foeName').textContent = S.foeName;
  $('#meName').textContent = S.myName;
  $('#netInfo').textContent = '';
  $('#emotePad').classList.add('hidden');
  if (!S.view) S.view = new View($('#cv'), S.me, onViewEvent);
  S.view.reset(S.me);
  requestAnimationFrame(() => S.view.resize());
  if (S.mode !== 'guest') {
    S.game = new Game();
    S.bot = S.mode === 'practice' ? new Bot(S.game, 1, S.level) : null;
    S.acc = 0; S.lastT = performance.now();
    const snap = S.game.snapshot(0); snap.ev = [];
    S.view.pushFrame(snap);
    readLocalHud();
  } else {
    S.game = null; S.bot = null;
  }
  renderHand();
  updateHud(true);
  setTimeout(() => { if (S.state === 'playing') toast('Arrastra una carta a tu mitad del campo'); }, 400);
}

// ---------- Bucle del anfitrión / práctica ----------
setInterval(simLoop, 15);
function simLoop() {
  const g = S.game;
  if (!g || S.mode === 'guest' || (S.state !== 'playing' && S.state !== 'over')) return;
  const now = performance.now();
  S.acc += (now - S.lastT) / 1000;
  S.lastT = now;
  if (S.acc > 0.5) S.acc = 0.5;
  const sendEvery = S.tr && S.tr.kind === 'relay' ? 2 : 1;
  while (S.acc >= DT) {
    S.acc -= DT;
    if (g.phase !== 'over') {
      if (S.bot) S.bot.update(DT);
      g.step();
    }
    const ev = g.drainEvents();
    if (g.phase === 'over' && !ev.length) { S.acc = 0; break; }
    const snap = g.snapshot(0);
    snap.ev = ev;
    S.view.pushFrame(snap);
    if (S.mode === 'host' && S.tr) {
      for (const e of ev) S.outEv.push(e);
      S.sinceSend++;
      if (S.sinceSend >= sendEvery || g.phase === 'over') {
        const gs = g.snapshot(1);
        gs.ev = S.outEv;
        S.outEv = [];
        S.sinceSend = 0;
        send(gs);
      }
    }
  }
  readLocalHud();
}

function readLocalHud() {
  const g = S.game;
  const h = g.hand(0);
  const key = h.join(',') + '|' + g.next(0);
  if (key !== S.handKey) { S.hud.hand = h.slice(); S.hud.next = g.next(0); renderHand(); }
  S.hud.tm = Math.round(g.time * 10);
  S.hud.ph = ['normal', 'double', 'overtime', 'over'].indexOf(g.phase);
  S.hud.crowns = g.crowns.slice();
}

// ---------- Invitado: instantáneas ----------
function onSnapshot(m) {
  const now = performance.now();
  S.view.pushFrame(m);
  const off = m.k - now / TICK_MS;
  if (S.tickOff === null || Math.abs(off - S.tickOff) > 40) S.tickOff = off;
  else S.tickOff += (off - S.tickOff) * (off > S.tickOff ? 0.25 : 0.04);
  S.pending = S.pending.filter(p => p.seq > m.ack && now - p.at < 2500);
  const owed = S.pending.reduce((s, p) => s + p.cost, 0);
  S.hud.el = m.el / 100 - owed;
  S.hud.elAt = now;
  S.hud.tm = m.tm;
  S.hud.ph = m.ph;
  S.hud.crowns = m.c;
  if (!S.pending.length) {
    const key = m.h.join(',') + '|' + m.n;
    if (key !== S.handKey) { S.hud.hand = m.h.slice(); S.hud.next = m.n; renderHand(); }
  }
  if (m.w >= 0 && !S.endHandled) setTimeout(() => { if (!S.endHandled) handleEnd(m.w); }, 2500);
}

function guestRenderTick() {
  if (S.tickOff === null) return 0;
  const delay = S.tr && S.tr.kind === 'relay' ? 5 : 3;
  const latest = S.view.latest();
  const rt = performance.now() / TICK_MS + S.tickOff - delay;
  return latest ? Math.min(rt, latest.k) : rt;
}

function currentElixir() {
  if (S.mode !== 'guest') return S.game ? S.game.elixir[0] : 0;
  const mult = S.hud.ph === 1 ? 2 : S.hud.ph === 2 ? 3 : S.hud.ph === 3 ? 0 : 1;
  return Math.min(10, S.hud.el + ELIXIR_RATE * mult * (performance.now() - S.hud.elAt) / 1000);
}

// ---------- HUD ----------
function cardInner(ci) {
  if (ci < 0 || ci === undefined) return '';
  const c = CARDS[ci];
  return `<div class="cost"><b>${c.cost}</b></div><div class="art">${c.icon}</div><div class="nm${c.name.length > 10 ? ' long' : ''}">${c.name}</div><div class="cover"></div>`;
}

function buildHandEls() {
  const hand = $('#hand');
  hand.innerHTML = '';
  S.cardEls = [];
  for (let i = 0; i < 4; i++) {
    const d = document.createElement('div');
    d.className = 'card';
    d.dataset.slot = i;
    hand.appendChild(d);
    S.cardEls.push({ el: d, card: -2, cover: -1, na: null });
  }
}

function renderHand() {
  if (!S.cardEls.length) buildHandEls();
  const h = S.hud.hand;
  S.handKey = h.join(',') + '|' + S.hud.next;
  h.forEach((ci, i) => {
    const ce = S.cardEls[i];
    if (ce.card !== ci) {
      const wasCard = ce.card >= 0;
      ce.card = ci;
      ce.el.innerHTML = cardInner(ci);
      ce.el.style.setProperty('--c', ci >= 0 ? CARDS[ci].color : '#444');
      ce.el.classList.toggle('used', ci < 0);
      ce.cover = -1; ce.na = null;
      if (wasCard && ci >= 0) { ce.el.classList.remove('flash'); void ce.el.offsetWidth; ce.el.classList.add('flash'); }
    }
    ce.el.classList.toggle('sel', S.sel === i);
  });
  const nx = $('#nextCard');
  const n = S.hud.next;
  nx.textContent = n >= 0 && n !== undefined ? CARDS[n].icon : '❔';
  nx.style.setProperty('--c', n >= 0 && n !== undefined ? CARDS[n].color : '#444');
}

let lastHud = {};
function updateHud(force) {
  const el = currentElixir();
  const pct = Math.max(0, Math.min(100, el * 10));
  const fill = $('#elixirFill');
  const pr = Math.round(pct * 2) / 2;
  if (force || lastHud.pct !== pr) { fill.style.width = pr + '%'; lastHud.pct = pr; }
  const ef = Math.floor(el + 1e-6);
  if (force || lastHud.ef !== ef) { $('#elixirNum').textContent = ef; lastHud.ef = ef; }
  for (const ce of S.cardEls) {
    if (ce.card < 0) continue;
    const cost = CARDS[ce.card].cost;
    const na = el < cost;
    if (ce.na !== na) { ce.el.classList.toggle('na', na); ce.na = na; }
    const cv = na ? Math.round((1 - el / cost) * 50) * 2 : 0;
    if (ce.cover !== cv) { const c = ce.el.querySelector('.cover'); if (c) c.style.height = cv + '%'; ce.cover = cv; }
  }
  const tm = Math.max(0, S.hud.tm);
  const secs = Math.ceil(tm / 10);
  const txt = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`;
  const ph = S.hud.ph;
  if (force || lastHud.txt !== txt || lastHud.ph !== ph) {
    $('#clockTime').textContent = txt;
    $('#clockLabel').textContent = ph === 1 ? 'Elixir x2' : ph === 2 ? 'Muerte súbita' : ph === 3 ? 'Final' : 'Tiempo';
    const clock = $('#clock');
    clock.classList.toggle('x2', ph === 1);
    clock.classList.toggle('ot', ph === 2);
    clock.classList.toggle('hurry', ph < 3 && secs <= 10 && (ph === 1 || ph === 2));
    $('#elixir').classList.toggle('x2', ph === 1 || ph === 2);
    if (lastHud.txt !== txt && secs <= 5 && secs > 0 && (ph === 1 || ph === 2) && S.state === 'playing') sfx('tick');
    lastHud.txt = txt; lastHud.ph = ph;
  }
  const c = S.hud.crowns, me = S.me;
  const cm = c[me], cf = c[1 - me];
  if (force || lastHud.cm !== cm) { $('#meCrowns b').textContent = cm; if (!force) bump('#meCrowns'); lastHud.cm = cm; }
  if (force || lastHud.cf !== cf) { $('#foeCrowns b').textContent = cf; if (!force) bump('#foeCrowns'); lastHud.cf = cf; }
}
function bump(sel) {
  const e = $(sel);
  e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump');
}

// ---------- Eventos de la vista (sonido, carteles) ----------
function onViewEvent(ev) {
  const me = S.me;
  switch (ev.t) {
    case 'deploy': if (ev.o !== me) sfx('enemyDeploy'); break;
    case 'proj': sfx('shoot'); break;
    case 'hit': sfx('hit'); break;
    case 'splash': sfx('splash'); break;
    case 'spell': sfx('spell'); break;
    case 'boom': sfx('boom'); buzz(35); break;
    case 'death': sfx('die'); break;
    case 'tower':
      sfx('tower');
      buzz(ev.o === me ? [80, 60, 120] : 90);
      if (S.mode === 'practice') {
        const ch = ev.o === me ? (Math.random() < 0.6 ? '😂' : '👍') : (Math.random() < 0.5 ? '😭' : '😡');
        setTimeout(() => { if (S.view && S.state === 'playing') { S.view.emote(1, ch); sfx('emote'); } }, 700);
      }
      break;
    case 'king': sfx('king'); break;
    case 'phase':
      sfx('phase');
      if (ev.ph === 1) banner('¡Elixir x2!', 'purple');
      else if (ev.ph === 2) banner('Muerte súbita', 'red');
      break;
    case 'end':
      handleEnd(ev.w, ev.r);
      break;
  }
}

function handleEnd(w, reason = '') {
  if (S.endHandled) return;
  S.endHandled = true;
  S.state = 'over';
  S.ghost = null; S.sel = -1;
  renderHand();
  setTimeout(() => {
    if (S.state !== 'over') return;
    const me = S.me;
    const c = S.hud.crowns;
    const win = w === me, draw = w === 2;
    sfx(win ? 'win' : draw ? 'draw' : 'lose');
    let text;
    if (reason === 'surrender') text = win ? `${S.foeName} se ha rendido.` : 'Te has rendido.';
    else if (reason === 'tiebreak') text = win ? 'Desempate: tu torre más dañada ha aguantado más.' : 'Desempate: a tu torre más dañada le quedaba menos vida.';
    else if (win) text = c[me] === 3 ? '¡Has tirado la torre del rey!' : `Ganas ${c[me]} a ${c[1 - me]} en coronas.`;
    else if (draw) text = 'Nadie ha conseguido ventaja. Toca revancha.';
    else text = c[1 - me] === 3 ? 'Han tirado tu torre del rey.' : `Pierdes ${c[me]} a ${c[1 - me]} en coronas.`;
    showOverlay({ title: win ? '¡Victoria!' : draw ? 'Empate' : 'Derrota', lose: !win && !draw, text, rematch: true });
  }, 1700);
}

function showOverlay({ title, lose, text, rematch }) {
  const c = S.hud.crowns, me = S.me;
  $('#resTitle').textContent = title;
  $('#resTitle').classList.toggle('lose', !!lose);
  $('#resCrowns').innerHTML = `<span style="color:#a8ceff">${esc(S.myName)} ${c[me]}</span><span class="vsx">contra</span><span style="color:#ff9a9a">${c[1 - me]} ${esc(S.foeName)}</span>`;
  $('#resText').textContent = text;
  const rb = $('#btnRematch');
  rb.classList.toggle('hidden', !rematch);
  rb.disabled = false;
  rb.textContent = 'Revancha';
  $('#rematchInfo').textContent = '';
  updateRematchInfo();
  $('#overlay').classList.remove('hidden');
}

function updateRematchInfo() {
  if (S.state !== 'over') return;
  const info = $('#rematchInfo');
  if (S.rematch.me && !S.rematch.foe) info.textContent = 'Esperando a que tu rival acepte…';
  else if (S.rematch.foe && !S.rematch.me) info.textContent = `${S.foeName} quiere la revancha.`;
  else info.textContent = '';
}

function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function initOverlay() {
  $('#btnRematch').onclick = () => {
    unlockAudio(); sfx('select');
    if (S.mode === 'practice') { $('#overlay').classList.add('hidden'); countdown(startMatch); return; }
    if (!S.tr) return;
    S.rematch.me = true;
    $('#btnRematch').disabled = true;
    $('#btnRematch').textContent = 'Revancha pedida';
    send({ t: 'rematch' });
    updateRematchInfo();
    if (S.mode === 'host' && S.rematch.foe) beginCountdown();
  };
  $('#btnMenu').onclick = () => {
    sfx('select');
    leaveRoom();
    S.state = 'menu'; S.mode = null; S.game = null; S.bot = null;
    show('menu');
  };
}

// ---------- Entrada: cartas y campo ----------
function canPlaceMe(ci, x, y) {
  if (S.game) return S.game.canPlace(S.me, ci, x, y);
  const f = S.view.latest();
  if (!f) return false;
  const towers = [], solids = [];
  for (let i = 0; i < 6; i++) {
    const owner = i < 3 ? 0 : 1;
    const L = TOWER_LAYOUT[i % 3];
    const [tx, ty] = mirror(owner, L.x, L.y);
    const t = { owner, tkind: L.kind, lane: L.lane < 0 ? -1 : (tx < W / 2 ? 0 : 1), hp: f.tw[i], x: tx, y: ty, radius: TOWERS[L.kind].radius, kind: 'tower' };
    towers.push(t);
    if (t.hp > 0) solids.push(t);
  }
  for (const e of f.ents.values()) {
    if (CARDS[e[1]].type === 'building') solids.push({ kind: 'building', x: e[3] / 20, y: e[4] / 20, radius: CARDS[e[1]].unit.radius });
  }
  return placementOk(S.me, ci, x, y, towers, solids);
}

function select(slot) {
  if (S.sel !== slot) sfx('select');
  S.sel = slot;
  for (const [i, ce] of S.cardEls.entries()) ce.el.classList.toggle('sel', i === slot);
}
function deselect() {
  S.sel = -1;
  S.ghost = null;
  for (const ce of S.cardEls) ce.el.classList.remove('sel');
}

function ghostAt(clientX, clientY, lift) {
  const slot = S.sel;
  const ci = S.hud.hand[slot];
  if (slot < 0 || ci < 0) { S.ghost = null; return; }
  const r = $('#cv').getBoundingClientRect();
  const px = clientX - r.left;
  const py = clientY - r.top - (lift ? S.view.S * 1.2 : 0);
  if (!S.view.inArena(px, py)) { S.ghost = null; return; }
  const [wx, wy] = S.view.toWorld(px, py);
  let x, y;
  if (CARDS[ci].type === 'spell') { x = Math.min(W, Math.max(0, wx)); y = Math.min(H, Math.max(0, wy)); }
  else [x, y] = snapPos(wx, wy);
  S.ghost = { card: ci, slot, x, y, valid: canPlaceMe(ci, x, y) };
}

function tryPlay(slot, x, y) {
  const ci = S.hud.hand[slot];
  if (S.state !== 'playing' || ci < 0) return false;
  const c = CARDS[ci];
  if (currentElixir() < c.cost) { toast('Te falta elixir'); sfx('error'); return false; }
  if (!canPlaceMe(ci, x, y)) {
    toast(c.type === 'building' ? 'Los edificios van en tu mitad' : 'Solo puedes soltarla en tu mitad');
    sfx('error');
    return false;
  }
  if (S.mode !== 'guest') {
    if (!S.game.play(0, slot, ci, x, y)) { sfx('error'); return false; }
    readLocalHud();
  } else {
    const seq = ++S.seq;
    send({ t: 'play', s: seq, slot, c: ci, x, y });
    S.pending.push({ seq, cost: c.cost, at: performance.now() });
    S.hud.el -= c.cost;
    S.view.addLocalDeploy(ci, x, y);
    S.hud.hand = S.hud.hand.slice();
    S.hud.hand[slot] = S.hud.next ?? -1;
    S.hud.next = -1;
  }
  sfx('deploy');
  buzz(15);
  deselect();
  renderHand();
  return true;
}

function initInput() {
  const handEl = $('#hand');
  const cv = $('#cv');
  handEl.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.card');
    if (!el || S.state !== 'playing') return;
    e.preventDefault();
    unlockAudio();
    const slot = +el.dataset.slot;
    if (S.hud.hand[slot] < 0) return;
    const wasSel = S.sel === slot;
    S.press = { slot, id: e.pointerId, x0: e.clientX, y0: e.clientY, drag: false, wasSel, touch: e.pointerType !== 'mouse' };
    select(slot);
  });
  window.addEventListener('pointermove', (e) => {
    if (S.press && e.pointerId === S.press.id) {
      if (!S.press.drag && Math.hypot(e.clientX - S.press.x0, e.clientY - S.press.y0) > 10) S.press.drag = true;
      if (S.press.drag) ghostAt(e.clientX, e.clientY, S.press.touch);
    } else if (S.canvasPress && e.pointerId === S.canvasPress.id) {
      ghostAt(e.clientX, e.clientY, false);
    }
  }, { passive: true });
  const up = (e) => {
    if (S.press && e.pointerId === S.press.id) {
      const p = S.press;
      S.press = null;
      if (p.drag) {
        if (S.ghost && e.type === 'pointerup') tryPlay(p.slot, S.ghost.x, S.ghost.y);
        S.ghost = null;
      } else if (p.wasSel) deselect();
    } else if (S.canvasPress && e.pointerId === S.canvasPress.id) {
      S.canvasPress = null;
      if (S.ghost && S.sel >= 0 && e.type === 'pointerup') tryPlay(S.sel, S.ghost.x, S.ghost.y);
      S.ghost = null;
    }
  };
  window.addEventListener('pointerup', up);
  window.addEventListener('pointercancel', up);
  cv.addEventListener('pointerdown', (e) => {
    $('#emotePad').classList.add('hidden');
    if (S.state !== 'playing' || S.sel < 0) return;
    e.preventDefault();
    S.canvasPress = { id: e.pointerId };
    ghostAt(e.clientX, e.clientY, false);
  });

  // emoticonos
  const pad = $('#emotePad');
  pad.innerHTML = EMOTES.map((e, i) => `<button data-i="${i}">${e}</button>`).join('');
  $('#emoteBtn').onclick = () => { unlockAudio(); pad.classList.toggle('hidden'); };
  pad.onclick = (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    pad.classList.add('hidden');
    const now = performance.now();
    if (now - S.emoteAt < 1500) return;
    S.emoteAt = now;
    const i = +b.dataset.i;
    S.view.emote(S.me, EMOTES[i]);
    sfx('emote');
    send({ t: 'emote', i });
  };

  $('#flagBtn').onclick = () => {
    if (S.state !== 'playing') return;
    if (!confirm('¿Rendirte y dar la partida por perdida?')) return;
    if (S.mode === 'guest') send({ t: 'surrender' });
    else if (S.game) S.game.finish(1, 'surrender');
  };

  window.addEventListener('resize', () => { if (S.view) S.view.resize(); });
  window.addEventListener('orientationchange', () => setTimeout(() => S.view && S.view.resize(), 300));
}

// ---------- Render ----------
function frame() {
  requestAnimationFrame(frame);
  if ((S.state !== 'playing' && S.state !== 'over') || !S.view) return;
  let rt;
  if (S.mode === 'guest') rt = guestRenderTick();
  else {
    const g = S.game;
    const extra = g.phase === 'over' ? 1 : (S.acc + (performance.now() - S.lastT) / 1000) / DT;
    rt = g.tick - 1 + Math.min(1, extra);
  }
  updateHud(false);
  S.view.render(rt, { ghost: S.ghost });
}

// ---------- Inicio ----------
initMenu();
initOverlay();
initInput();
buildHandEls();
requestAnimationFrame(frame);
window.addEventListener('pagehide', () => leaveRoom());

// Ganchos para pruebas automáticas
window.__ad = S;
