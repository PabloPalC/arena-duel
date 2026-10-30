// Arena Duel — interfaz, perfil, mazos, bucle de juego y red
import {
  CARDS, UNITS, RARITY, DT, W, H, ELIXIR_RATE, EMOTES, PROTOCOL, TOWER_LAYOUT, TOWERS, TROOP_SPEED_LABEL,
  DEFAULT_DECK, DECK_SIZE, validDeck, rankOf,
} from './data.js';
import { Game, snapPos, placementOk, mirror } from './sim.js';
import { Bot, BOT_DECKS } from './bot.js';
import { View } from './render.js';
import { hostRoom, joinRoom, cleanCode } from './net.js';
import { unlockAudio, sfx, buzz as rawBuzz, setMuted } from './audio.js';

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
const LEVEL_NAMES = ['Escudero', 'Caballero', 'Rey Negro'];
const TICK_MS = DT * 1000;
const TROPHY_WIN = 30, TROPHY_LOSS = 20;

// ---------- Perfil guardado en el móvil ----------
const PROFILE_KEY = 'ad_profile_v2';
function loadProfile() {
  let p = null;
  try { p = JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null'); } catch { /* */ }
  if (!p || typeof p !== 'object') p = {};
  let oldName = '';
  try { oldName = localStorage.getItem('ad_name') || ''; } catch { /* */ }
  const def = {
    name: oldName, trophies: 0, best: 0, history: {}, decks: [DEFAULT_DECK.slice(), DEFAULT_DECK.slice(), DEFAULT_DECK.slice()],
    slot: 0, quality: 'auto', sound: true, vibe: true, wins: 0, losses: 0,
  };
  p = { ...def, ...p };
  p.decks = [0, 1, 2].map(i => (validDeck(p.decks && p.decks[i]) ? p.decks[i] : DEFAULT_DECK.slice()));
  if (![0, 1, 2].includes(p.slot)) p.slot = 0;
  if (!['alta', 'auto', 'ahorro'].includes(p.quality)) p.quality = 'auto';
  return p;
}
const PF = loadProfile();
function saveProfile() { try { localStorage.setItem(PROFILE_KEY, JSON.stringify(PF)); } catch { /* */ } }
const myDeck = () => PF.decks[PF.slot];
setMuted(!PF.sound);
const buzz = (ms) => { if (PF.vibe) rawBuzz(ms); };

// ---------- Estado ----------
const S = {
  state: 'menu',        // menu | lobby | countdown | playing | over
  mode: null,           // practice | host | guest
  me: 0, level: 1,
  game: null, bot: null, view: null, view3d: false,
  tr: null, room: null,
  acc: 0, lastT: 0, lastSimAt: 0, lastRenderAt: 0,
  outEv: [], sinceSend: 0,
  hud: { hand: [-1, -1, -1, -1], next: -1, el: 5, elAt: 0, tm: 1800, ph: 0, crowns: [0, 0] },
  pending: [], seq: 0,
  sel: -1, press: null, canvasPress: null, ghost: null,
  tickOff: null, jitter: 0, lastMsgAt: 0, rtt: 0,
  endHandled: false,
  rematch: { me: false, foe: false },
  foeName: 'Rival', myName: 'Tú', foeTrophies: null, foeDeck: null,
  emoteAt: 0, handKey: '', cardEls: [], wakeLock: null,
  lastCount: -1, swapCard: -1,
};
window.__ad = S;

// ---------- Utilidades de interfaz ----------
const SCREENS = ['menu', 'practice', 'lobby', 'join', 'deck', 'help', 'settings', 'versus', 'game'];
function show(id) {
  for (const s of SCREENS) $('#' + s).classList.toggle('hidden', s !== id);
  if (id !== 'game') $('#overlay').classList.add('hidden');
  $('#confirm').classList.add('hidden');
}
let toastT = 0;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.add('hidden'), 1400);
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
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const art = (c) => `art/${CARDS[c].id}.webp`;
function getName() { return (($('#nameInput').value || '').trim() || 'Jugador').slice(0, 14); }

// ---------- Menú ----------
function renderProfile() {
  $('#pfName').textContent = PF.name || 'Jugador';
  $('#pfTrophies').textContent = PF.trophies;
  $('#pfRank').textContent = rankOf(PF.trophies).name;
  const d = myDeck();
  $('#deckMini').innerHTML = d.map(c => `<div class="dm r-${CARDS[c].rarity}" style="background-image:url(${art(c)})"><em>${CARDS[c].cost}</em></div>`).join('');
  $('#deckAvg').textContent = avgCost(d);
  const hist = Object.values(PF.history).sort((a, b) => (b.last || 0) - (a.last || 0)).slice(0, 4);
  $('#historyBox').innerHTML = hist.length
    ? `<h3>Tus duelos</h3>` + hist.map(h => `<div class="hrow"><span>contra <b>${esc(h.name)}</b></span><span class="rec"><i class="w">${h.w}V</i> · <i class="l">${h.l}D</i>${h.d ? ` · ${h.d}E` : ''}</span></div>`).join('')
    : '';
}
const avgCost = (d) => (d.reduce((s, c) => s + CARDS[c].cost, 0) / d.length).toFixed(1);

function initMenu() {
  $('#nameInput').value = PF.name;
  $('#nameInput2').value = PF.name;
  const onName = (src, dst) => src.addEventListener('input', () => { dst.value = src.value; PF.name = src.value.trim().slice(0, 14); saveProfile(); $('#pfName').textContent = PF.name || 'Jugador'; });
  onName($('#nameInput'), $('#nameInput2'));
  onName($('#nameInput2'), $('#nameInput'));

  $('#btnHost').onclick = () => { unlockAudio(); sfx('select'); startHost(); };
  $('#btnJoin').onclick = () => { unlockAudio(); sfx('select'); openJoin(''); };
  $('#btnPractice').onclick = () => { unlockAudio(); sfx('select'); show('practice'); };
  $('#btnDeck').onclick = () => { unlockAudio(); sfx('select'); openDeck(); };
  $('#btnHelp').onclick = () => { unlockAudio(); show('help'); };
  $('#btnSettings').onclick = () => { unlockAudio(); renderSettings(); show('settings'); };

  document.querySelectorAll('#practice [data-level]').forEach(b => {
    b.onclick = () => { unlockAudio(); goFullscreen(); startPractice(+b.dataset.level); };
  });
  document.querySelectorAll('.back').forEach(b => {
    if (b.id === 'lobbyCancel') return;
    b.onclick = () => { sfx('select'); renderProfile(); show('menu'); };
  });
  $('#lobbyCancel').onclick = () => { leaveRoom(); S.mode = null; S.state = 'menu'; show('menu'); };
  $('#btnShare').onclick = shareLink;
  $('#btnCopy').onclick = copyLink;

  const ci = $('#codeInput');
  ci.addEventListener('input', () => { ci.value = cleanCode(ci.value); $('#joinError').textContent = ''; });
  ci.addEventListener('keydown', (e) => { if (e.key === 'Enter') doJoin(); });
  $('#btnJoinGo').onclick = () => { unlockAudio(); goFullscreen(); doJoin(); };

  initDeckEditor();
  initSettings();
  renderProfile();
  const sala = cleanCode(params.get('sala'));
  if (sala.length === 4) openJoin(sala);
}

// ---------- Ajustes ----------
function renderSettings() {
  document.querySelectorAll('#qualitySeg button').forEach(b => b.classList.toggle('on', b.dataset.q === PF.quality));
  document.querySelectorAll('#soundSeg button').forEach(b => b.classList.toggle('on', (b.dataset.s === '1') === PF.sound));
  document.querySelectorAll('#vibeSeg button').forEach(b => b.classList.toggle('on', (b.dataset.v === '1') === PF.vibe));
}
function initSettings() {
  $('#qualitySeg').onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    PF.quality = b.dataset.q; saveProfile(); renderSettings(); sfx('select');
    if (S.view) S.view.setQuality(PF.quality);
  };
  $('#soundSeg').onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    PF.sound = b.dataset.s === '1'; setMuted(!PF.sound); saveProfile(); renderSettings(); sfx('select');
  };
  $('#vibeSeg').onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    PF.vibe = b.dataset.v === '1'; saveProfile(); renderSettings(); buzz(30);
  };
}

// ---------- Editor de mazo ----------
const SORTED = CARDS.map((c, i) => i).sort((a, b) => CARDS[a].cost - CARDS[b].cost || Object.keys(RARITY).indexOf(CARDS[a].rarity) - Object.keys(RARITY).indexOf(CARDS[b].rarity));
function tileHTML(c, extra = '') {
  const card = CARDS[c];
  return `<div class="ctile r-${card.rarity} ${extra}" data-c="${c}" style="background-image:url(${art(c)})"><em>${card.cost}</em><span>${card.name}</span></div>`;
}
function openDeck() { S.swapCard = -1; renderDeck(); show('deck'); }
function renderDeck() {
  const d = myDeck();
  document.querySelectorAll('#deckTabs button').forEach(b => b.classList.toggle('on', +b.dataset.slot === PF.slot));
  $('#deckSlots').innerHTML = d.map((c, i) => tileHTML(c, S.swapCard >= 0 ? 'wiggle' : '').replace('<div ', `<div data-slot="${i}" `)).join('');
  $('#deckAvg2').textContent = avgCost(d);
  $('#collection').innerHTML = SORTED.map(c => tileHTML(c, d.includes(c) ? 'indeck' : '')).join('');
  $('#deckHint').textContent = S.swapCard >= 0 ? `Elige qué carta cambiar por ${CARDS[S.swapCard].name}` : 'Toca una carta para verla';
  $('#deckHint').classList.toggle('hot', S.swapCard >= 0);
}
function statRows(card) {
  if (card.type === 'spell') {
    const sp = card.spell;
    const rows = [];
    if (sp.dmg) rows.push(['Daño', sp.dmg], ['A torres', Math.round(sp.dmg * sp.towerMult)]);
    rows.push(['Radio', sp.radius + ' casillas']);
    if (sp.hits) rows.push(['Rayos', sp.hits]);
    if (sp.freeze) rows.push(['Congela', sp.freeze + ' s']);
    if (sp.boost) rows.push(['Furia', '+' + Math.round((sp.boost - 1) * 100) + ' % · ' + sp.duration + ' s']);
    return rows;
  }
  const u = UNITS[card.unit];
  const tg = u.targets === 'both' ? 'Tierra y aire' : u.targets === 'ground' ? 'Solo tierra' : u.targets === 'buildings' ? 'Solo edificios' : '—';
  const rows = [['Vida', u.hp + (card.count > 1 ? ` ×${card.count}` : '')]];
  if (u.dmg) rows.push(['Daño', u.dmg + (u.splash ? ' (área)' : u.spin ? ' (giro)' : u.ramp ? ' (sube hasta ×12)' : u.charge ? ' (×2 en carga)' : '')]);
  if (u.dmg) rows.push(['Ataque cada', u.hitSpeed + ' s']);
  if (u.dmg) rows.push(['Alcance', u.range >= 2 ? u.range + ' casillas' : 'Cuerpo a cuerpo']);
  if (u.dmg) rows.push(['Ataca a', tg]);
  rows.push(u.building ? ['Dura', u.lifetime + ' s'] : ['Velocidad', TROOP_SPEED_LABEL(u.speed) + (u.air ? ', vuela' : '') + (u.jump ? ', salta el río' : '')]);
  if (u.spawn) rows.push(['Invoca', `${u.spawn.count} esqueleto${u.spawn.count > 1 ? 's' : ''} cada ${u.spawn.every} s`]);
  if (u.slow) rows.push(['Ralentiza', u.slow + ' s']);
  return rows;
}
function openSheet(c, fromSlot) {
  const card = CARDS[c];
  const R = RARITY[card.rarity];
  $('#sheetArt').style.backgroundImage = `url(${art(c)})`;
  $('#sheetArt').innerHTML = `<em>${card.cost}</em>`;
  $('#sheetArt').className = 'sheet-art r-' + card.rarity;
  $('#sheetRarity').textContent = R.name + ' · ' + (card.type === 'spell' ? 'Hechizo' : card.type === 'building' ? 'Edificio' : 'Tropa');
  $('#sheetRarity').style.color = R.color;
  $('#sheetName').textContent = card.name;
  $('#sheetDesc').textContent = card.desc;
  $('#sheetStats').innerHTML = statRows(card).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  const inDeck = myDeck().includes(c);
  const btn = $('#sheetUse');
  btn.classList.toggle('hidden', inDeck);
  btn.onclick = () => {
    S.swapCard = c;
    $('#cardSheet').classList.add('hidden');
    sfx('select');
    renderDeck();
    $('#deckSlots').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  $('#cardSheet').classList.remove('hidden');
}
function initDeckEditor() {
  $('#deckTabs').onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    PF.slot = +b.dataset.slot; saveProfile(); S.swapCard = -1; sfx('select'); renderDeck();
  };
  $('#deckSlots').onclick = (e) => {
    const t = e.target.closest('.ctile'); if (!t) return;
    const slot = +t.dataset.slot;
    if (S.swapCard >= 0) {
      const d = myDeck();
      d[slot] = S.swapCard;
      S.swapCard = -1;
      saveProfile();
      sfx('deploy'); buzz(15);
      renderDeck();
      return;
    }
    openSheet(+t.dataset.c, slot);
  };
  $('#collection').onclick = (e) => {
    const t = e.target.closest('.ctile'); if (!t) return;
    sfx('select');
    openSheet(+t.dataset.c);
  };
  $('#cardSheet').onclick = (e) => { if (e.target.id === 'cardSheet' || e.target.closest('.sheet-close')) $('#cardSheet').classList.add('hidden'); };
}

// ---------- Red ----------
function roomLink(code) { return `${location.origin}${location.pathname}?sala=${code}`; }
async function shareLink() {
  const code = S.roomCode;
  if (!code) return;
  const url = roomLink(code);
  if (navigator.share) {
    try { await navigator.share({ title: 'Arena Duel', text: `Te reto a un duelo en Arena Duel. Código ${code}:`, url }); return; } catch { /* */ }
  }
  copyLink();
}
async function copyLink() {
  const code = S.roomCode;
  if (!code) return;
  try { await navigator.clipboard.writeText(roomLink(code)); $('#lobbyStatus').textContent = 'Enlace copiado. Esperando a tu rival…'; }
  catch { $('#lobbyStatus').textContent = 'Comparte el código ' + code; }
}

async function startHost() {
  goFullscreen();
  leaveRoom();
  S.mode = 'host';
  S.me = 0;
  S.myName = getName();
  S.state = 'lobby';
  S.roomCode = null;
  show('lobby');
  $('#roomCode').textContent = '····';
  $('#lobbyStatus').textContent = 'Preparando la sala…';
  try {
    const room = await hostRoom(
      (tr, hello) => { onTransport(tr); onNet(hello); },
      (via) => { if (!S.tr && S.mode === 'host') $('#lobbyStatus').textContent = via.length === 1 && via[0] === 'relay' ? 'Esperando a tu rival (modo relé)…' : 'Esperando a tu rival…'; },
      (code) => { S.roomCode = code; $('#roomCode').textContent = code; },
    );
    if (S.state !== 'lobby' || S.mode !== 'host') { room.close(); return; }
    S.room = room;
  } catch (e) {
    if (S.mode === 'host') $('#lobbyStatus').textContent = e.message || 'No se pudo crear la sala.';
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
    send({ t: 'hello', name: S.myName, v: PROTOCOL, deck: myDeck(), tr: PF.trophies });
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

function onPeerGone(msg, left = false) {
  if (S.mode === 'practice' || S.mode === null || S.state === 'menu') return;
  const tr = S.tr;
  S.tr = null;
  if (tr) { tr.onclose = null; tr.onmessage = null; try { tr.close(true); } catch { /* */ } }
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
  const wasPlaying = S.state === 'playing';
  if (S.state === 'countdown') S.state = 'over';
  if (S.state === 'playing' || S.state === 'over') {
    S.state = 'over';
    let delta = null;
    if (wasPlaying && !S.endHandled && left) delta = recordResult('win');
    S.endHandled = true;
    $('#countdown').classList.add('hidden');
    show('game');
    showOverlay({ title: left && wasPlaying ? '¡Victoria!' : 'Sin rival', lose: !(left && wasPlaying), text: msg, rematch: false, delta });
  }
}

function onNet(m) {
  if (!m || typeof m !== 'object') return;
  S.lastMsgAt = performance.now();
  switch (m.t) {
    case 'hello':
      if (S.mode !== 'host') return;
      if (m.v !== PROTOCOL) { send({ t: 'err', msg: 'Tenéis versiones distintas del juego. Recargad la página los dos.' }); return; }
      S.foeName = String(m.name || 'Rival').slice(0, 14);
      S.foeDeck = validDeck(m.deck) ? m.deck : DEFAULT_DECK.slice();
      S.foeTrophies = Number.isFinite(m.tr) ? m.tr : null;
      send({ t: 'welcome', name: S.myName, v: PROTOCOL, deck: myDeck(), tr: PF.trophies });
      if (S.state === 'lobby') beginCountdown();
      break;
    case 'welcome':
      if (S.mode !== 'guest') return;
      S.foeName = String(m.name || 'Rival').slice(0, 14);
      S.foeDeck = validDeck(m.deck) ? m.deck : DEFAULT_DECK.slice();
      S.foeTrophies = Number.isFinite(m.tr) ? m.tr : null;
      $('#joinStatus').textContent = '¡Dentro! Empezamos…';
      break;
    case 'err':
      $('#joinError').textContent = m.msg;
      $('#joinWait').classList.add('hidden');
      $('#btnJoinGo').disabled = false;
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
    case 'ping': send({ t: 'pong', ts: m.ts }); break;
    case 'pong': S.rtt = Math.round(performance.now() - m.ts); break;
    case 'leave': onPeerGone('Tu rival ha salido de la partida.', true); break;
  }
}

setInterval(() => {
  if (!S.tr || S.mode === 'practice') return;
  send({ t: 'ping', ts: performance.now() });
  if ((S.state === 'playing' || S.state === 'over' || S.state === 'countdown') && performance.now() - S.lastMsgAt > 10000) {
    onPeerGone('Tu rival no responde. Puede que haya cerrado el juego o se haya quedado sin cobertura.');
  }
  if (S.state === 'playing') $('#netInfo').textContent = `${S.rtt} ms · ${S.tr && S.tr.kind === 'relay' ? 'relé' : 'directo'}`;
}, 2000);

// ---------- Arranque de partida ----------
function beginCountdown() {
  S.rematch = { me: false, foe: false };
  send({ t: 'start' });
  countdown(startMatch);
}

function ensureView() {
  if (S.view) return;
  const wrap = $('#arenaWrap');
  if (View3D && !params.has('2d')) {
    try { S.view = new View3D($('#cv'), wrap, S.me, onViewEvent, { quality: PF.quality }); S.view3d = true; }
    catch (e) { console.warn('Sin 3D:', e); }
  }
  if (!S.view) S.view = new View($('#cv'), S.me, onViewEvent);
}

function countdown(then) {
  S.state = 'countdown';
  keepAwake();
  show('versus');
  $('#vsFoe').textContent = S.foeName;
  $('#vsMe').textContent = S.myName;
  $('#vsMeTr').textContent = S.mode === 'practice' ? '' : `🏆 ${PF.trophies}`;
  $('#vsFoeTr').textContent = S.foeTrophies != null && S.mode !== 'practice' ? `🏆 ${S.foeTrophies}` : '';
  // preparar el motor gráfico mientras dura la cuenta atrás
  setTimeout(() => {
    try {
      ensureView();
      const decks = [myDeck(), S.foeDeck || DEFAULT_DECK];
      if (S.view.warm) S.view.warm([...new Set([...decks[0], ...decks[1]])]);
    } catch (e) { console.warn(e); }
  }, 60);
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
  S.foeTrophies = null;
  const pool = level === 0 ? [0] : level === 1 ? [1, 4] : [2, 3];
  S.foeDeck = BOT_DECKS[pool[Math.floor(Math.random() * pool.length)]];
  countdown(startMatch);
}

function startMatch() {
  S.state = 'playing';
  S.endHandled = false;
  S.pending = []; S.seq = 0; S.tickOff = null; S.jitter = 0;
  S.sel = -1; S.ghost = null; S.press = null; S.canvasPress = null;
  S.outEv = []; S.sinceSend = 0; S.lastCount = -1;
  S.rematch = { me: false, foe: false };
  S.hud = { hand: [-1, -1, -1, -1], next: -1, el: 5, elAt: performance.now(), tm: 1800, ph: 0, crowns: [0, 0] };
  S.handKey = '';
  show('game');
  $('#foeName').textContent = S.foeName;
  $('#meName').textContent = S.myName;
  $('#netInfo').textContent = '';
  $('#emotePad').classList.add('hidden');
  $('#countdown').classList.add('hidden');
  ensureView();
  S.view.resize();
  S.view.reset(S.me);
  if (S.mode !== 'guest') {
    const decks = S.mode === 'practice' ? [myDeck(), S.foeDeck] : [myDeck(), S.foeDeck];
    S.game = new Game({ decks });
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

// ---------- Simulación (anfitrión y práctica) ----------
function simStep() {
  const g = S.game;
  if (!g || S.mode === 'guest' || (S.state !== 'playing' && S.state !== 'over')) return;
  const now = performance.now();
  S.lastSimAt = now;
  S.acc += (now - S.lastT) / 1000;
  S.lastT = now;
  if (S.acc > 0.5) S.acc = 0.5;
  const relay = S.tr && S.tr.kind === 'relay';
  const sendEvery = relay ? 2 : 1;
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
        // los mensajes no pueden pasar de ~16 KB: si hace falta se quitan efectos cosméticos
        if (JSON.stringify(gs).length > 14000) gs.ev = gs.ev.filter(e => e.t !== 'proj' && e.t !== 'hit' && e.t !== 'spawn');
        send(gs);
      }
    }
  }
  readLocalHud();
}
// respaldo por si el navegador pausa requestAnimationFrame (pantalla tapada, etc.)
setInterval(() => { if (performance.now() - S.lastSimAt > 120) simStep(); }, 50);

function readLocalHud() {
  const g = S.game;
  const h = g.hand(0);
  const key = h.join(',') + '|' + g.next(0);
  if (key !== S.handKey) { S.hud.hand = h.slice(); S.hud.next = g.next(0); renderHand(); }
  S.hud.tm = Math.round(g.time * 10);
  S.hud.ph = ['normal', 'double', 'overtime', 'over'].indexOf(g.phase);
  S.hud.crowns = g.crowns.slice();
}

// ---------- Invitado: instantáneas con búfer adaptativo ----------
function onSnapshot(m) {
  const now = performance.now();
  S.view.pushFrame(m);
  const off = m.k - now / TICK_MS;
  if (S.tickOff === null || Math.abs(off - S.tickOff) > 40) { S.tickOff = off; S.jitter = 1; }
  else {
    const dev = off - S.tickOff;
    S.jitter += (Math.abs(dev) - S.jitter) * 0.08;
    S.tickOff += dev * (dev > 0 ? 0.25 : 0.04);
  }
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
  if (m.w >= 0 && !S.endHandled) setTimeout(() => { if (!S.endHandled) handleEnd(m.w, ''); }, 2500);
}

function guestRenderTick() {
  if (S.tickOff === null) return 0;
  const relay = S.tr && S.tr.kind === 'relay';
  const delay = Math.min(9, Math.max(relay ? 3 : 2, 1.5 + S.jitter * 2.2 + (relay ? 1 : 0)));
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
function buildHandEls() {
  const hand = $('#hand');
  hand.innerHTML = '';
  S.cardEls = [];
  for (let i = 0; i < 4; i++) {
    const d = document.createElement('div');
    d.className = 'card';
    d.dataset.slot = i;
    d.innerHTML = '<div class="cost"><b></b></div><div class="cover"></div>';
    hand.appendChild(d);
    S.cardEls.push({ el: d, card: -2, cover: -1, na: null, costEl: d.querySelector('.cost b'), coverEl: d.querySelector('.cover') });
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
      if (ci >= 0) {
        const c = CARDS[ci];
        ce.el.style.backgroundImage = `url(${art(ci)})`;
        ce.el.className = 'card r-' + c.rarity;
        ce.costEl.textContent = c.cost;
      } else {
        ce.el.style.backgroundImage = '';
        ce.el.className = 'card used';
      }
      ce.cover = -1; ce.na = null;
      if (wasCard && ci >= 0) { ce.el.classList.remove('flash'); void ce.el.offsetWidth; ce.el.classList.add('flash'); }
    }
    ce.el.classList.toggle('sel', S.sel === i);
  });
  const nx = $('#nextCard');
  const n = S.hud.next;
  nx.style.backgroundImage = n >= 0 && n !== undefined ? `url(${art(n)})` : '';
}

const lastHud = {};
function updateHud(force) {
  const el = currentElixir();
  const pr = Math.round(Math.max(0, Math.min(100, el * 10)) * 2) / 2;
  if (force || lastHud.pct !== pr) { $('#elixirFill').style.width = pr + '%'; lastHud.pct = pr; }
  const ef = Math.floor(el + 1e-6);
  if (force || lastHud.ef !== ef) { $('#elixirNum').textContent = ef; lastHud.ef = ef; }
  for (const ce of S.cardEls) {
    if (ce.card < 0) continue;
    const cost = CARDS[ce.card].cost;
    const na = el < cost;
    if (ce.na !== na) { ce.el.classList.toggle('na', na); ce.na = na; }
    const cv = na ? Math.round((1 - el / cost) * 50) * 2 : 0;
    if (ce.cover !== cv) { ce.coverEl.style.height = cv + '%'; ce.cover = cv; }
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
    clock.classList.toggle('hurry', ph < 3 && secs <= 10);
    $('#elixir').classList.toggle('x2', ph === 1 || ph === 2);
    lastHud.txt = txt; lastHud.ph = ph;
  }
  // cuenta atrás final: últimos 10 segundos en grande, con 3-2-1
  if (S.state === 'playing' && ph < 3) {
    const show10 = secs <= 10 && secs > 0;
    const cd = $('#countdown');
    if (show10 && secs !== S.lastCount) {
      S.lastCount = secs;
      cd.textContent = secs;
      cd.className = secs <= 3 ? 'big' : '';
      void cd.offsetWidth;
      cd.classList.add('tickin');
      sfx(secs <= 3 ? 'count3' : 'count');
      if (secs <= 3) buzz(25);
    } else if (!show10 && S.lastCount !== -1) {
      S.lastCount = -1;
      cd.className = 'hidden';
    }
  }
  const c = S.hud.crowns, me = S.me;
  const cm = c[me], cf = c[1 - me];
  if (force || lastHud.cm !== cm) { $('#meCrowns b').textContent = cm; if (!force) bump('#meCrowns'); lastHud.cm = cm; }
  if (force || lastHud.cf !== cf) { $('#foeCrowns b').textContent = cf; if (!force) bump('#foeCrowns'); lastHud.cf = cf; }
}
function bump(sel) { const e = $(sel); e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); }

// ---------- Eventos de la vista (sonido, carteles) ----------
function onViewEvent(ev) {
  const me = S.me;
  switch (ev.t) {
    case 'deploy': if (ev.o !== me) sfx('enemyDeploy'); break;
    case 'proj': sfx('shoot'); break;
    case 'hit': sfx('hit'); break;
    case 'splash': sfx('splash'); break;
    case 'spin': sfx('splash'); break;
    case 'lance': sfx('hit'); sfx('boom'); break;
    case 'spell': if (CARDS[ev.c].spell.kind === 'fireball') sfx('spell'); break;
    case 'boom': sfx('boom'); buzz(35); break;
    case 'volley': sfx('volley'); break;
    case 'zap': sfx('zap'); buzz(40); break;
    case 'freeze': sfx('freeze'); break;
    case 'rage': sfx('rage'); break;
    case 'charge': sfx('charge'); break;
    case 'spawn': sfx('spawn'); break;
    case 'quake': sfx('quake'); buzz(50); break;
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
      if (ev.ph === 1) { banner('¡Último minuto! Elixir x2', 'purple'); sfx('minute'); }
      else if (ev.ph === 2) { banner('¡Muerte súbita!', 'red'); sfx('horn'); S.lastCount = -1; $('#countdown').className = 'hidden'; }
      break;
    case 'end': handleEnd(ev.w, ev.r); break;
  }
}

function recordResult(res) {
  if (S.mode !== 'host' && S.mode !== 'guest') return null;
  const delta = res === 'win' ? TROPHY_WIN : res === 'loss' ? -Math.min(TROPHY_LOSS, PF.trophies) : 0;
  PF.trophies = Math.max(0, PF.trophies + delta);
  PF.best = Math.max(PF.best || 0, PF.trophies);
  if (res === 'win') PF.wins++; else if (res === 'loss') PF.losses++;
  const key = S.foeName.trim().toLowerCase() || 'rival';
  const h = PF.history[key] || { name: S.foeName, w: 0, l: 0, d: 0 };
  h.name = S.foeName;
  if (res === 'win') h.w++; else if (res === 'loss') h.l++; else h.d++;
  h.last = Date.now();
  PF.history[key] = h;
  saveProfile();
  return { delta, h };
}

function handleEnd(w, reason = '') {
  if (S.endHandled) return;
  S.endHandled = true;
  S.state = 'over';
  S.ghost = null; S.sel = -1;
  renderHand();
  $('#countdown').className = 'hidden';
  const me = S.me;
  const win = w === me, draw = w === 2;
  const rec = recordResult(win ? 'win' : draw ? 'draw' : 'loss');
  if (reason === 'time' || reason === 'tiebreak') { banner('¡Tiempo!', ''); sfx('horn'); }
  else if (reason !== 'surrender') { banner(win ? '¡Victoria!' : draw ? 'Empate' : 'Derrota', win ? '' : 'red'); }
  setTimeout(() => {
    if (S.state !== 'over') return;
    const c = S.hud.crowns;
    sfx(win ? 'win' : draw ? 'draw' : 'lose');
    let text;
    if (reason === 'surrender') text = win ? `${S.foeName} se ha rendido.` : 'Te has rendido.';
    else if (reason === 'tiebreak') text = win ? 'Desempate: tu torre más dañada ha aguantado más.' : draw ? 'Mismo daño en las torres. Toca revancha.' : 'Desempate: a tu torre más dañada le quedaba menos vida.';
    else if (win) text = c[me] === 3 ? '¡Has tirado la torre del rey!' : `Ganas ${c[me]} a ${c[1 - me]} en coronas.`;
    else if (draw) text = 'Nadie ha conseguido ventaja. Toca revancha.';
    else text = c[1 - me] === 3 ? 'Han tirado tu torre del rey.' : `Pierdes ${c[me]} a ${c[1 - me]} en coronas.`;
    showOverlay({ title: win ? '¡Victoria!' : draw ? 'Empate' : 'Derrota', lose: !win && !draw, text, rematch: true, delta: rec });
  }, 1900);
}

function showOverlay({ title, lose, text, rematch, delta }) {
  const c = S.hud.crowns, me = S.me;
  $('#resTitle').textContent = title;
  $('#resTitle').classList.toggle('lose', !!lose);
  $('#resCrowns').innerHTML = `<span class="me">${esc(S.myName)} ${c[me]}</span><span class="vsx">contra</span><span class="foe">${c[1 - me]} ${esc(S.foeName)}</span>`;
  const rt = $('#resTrophies');
  if (delta) {
    rt.classList.remove('hidden');
    const d = delta.delta;
    rt.innerHTML = `<b class="${d > 0 ? 'up' : d < 0 ? 'down' : ''}">${d > 0 ? '+' : ''}${d} 🏆</b><span>Ahora tienes ${PF.trophies} · ${rankOf(PF.trophies).name}</span><span>Contra ${esc(delta.h.name)}: ${delta.h.w}V · ${delta.h.l}D${delta.h.d ? ' · ' + delta.h.d + 'E' : ''}</span>`;
  } else rt.classList.add('hidden');
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
    renderProfile();
    show('menu');
  };
  $('#confirmNo').onclick = () => $('#confirm').classList.add('hidden');
  $('#confirmYes').onclick = () => {
    $('#confirm').classList.add('hidden');
    if (S.state !== 'playing') return;
    if (S.mode === 'guest') send({ t: 'surrender' });
    else if (S.game) S.game.finish(1, 'surrender');
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
    const u = UNITS[Object.keys(UNITS)[e[1]]];
    if (u && u.building) solids.push({ kind: 'building', x: e[3] / 20, y: e[4] / 20, radius: u.radius });
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
  const py = clientY - r.top - (lift ? S.view.S * 1.3 : 0);
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
    // predicción: la tropa empieza a caer ya, sin esperar al anfitrión
    if (S.view.predict) S.view.predict(ci, ...(c.type === 'spell' ? [x, y] : snapPos(x, y)));
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
  $('#flagBtn').onclick = () => { if (S.state === 'playing') $('#confirm').classList.remove('hidden'); };

  const relayout = () => { if (S.view && S.state !== 'menu') S.view.resize(); };
  window.addEventListener('resize', relayout);
  window.addEventListener('orientationchange', () => setTimeout(relayout, 300));
}

// ---------- Bucle de dibujo ----------
function frame(now) {
  requestAnimationFrame(frame);
  if (S.mode !== 'guest') simStep();
  if ((S.state !== 'playing' && S.state !== 'over') || !S.view) return;
  // modo ahorro: 30 FPS
  if (PF.quality === 'ahorro' && now - S.lastRenderAt < 30) return;
  S.lastRenderAt = now;
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
let View3D = null;
const load3D = params.has('2d') ? Promise.resolve() : import('./render3d.js')
  .then((m) => { if (m.webglAvailable()) View3D = m.View3D; })
  .catch((e) => console.warn('Sin 3D, uso el modo 2D', e));

initMenu();
initOverlay();
initInput();
buildHandEls();
requestAnimationFrame(frame);
window.addEventListener('pagehide', () => leaveRoom());
// el motor 3D se prepara en segundo plano mientras estás en el menú
load3D.then(() => {
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 300));
  idle(() => { if (!S.view) { try { ensureView(); } catch (e) { console.warn(e); } } });
});
// cartas de tu mazo precargadas
for (const c of myDeck()) { const i = new Image(); i.src = art(c); }
// caché para abrir al instante y jugar sin red de carga
if ('serviceWorker' in navigator && location.protocol === 'https:' && !params.has('nosw')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
