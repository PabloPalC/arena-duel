// Arena Duel — dibujo de la arena, tropas y efectos (Canvas 2D)
import { W, H, RIVER_TOP, RIVER_BOT, BRIDGES, BRIDGE_HALF, CARDS, UNITS, UNIT_KEYS, TOWERS, TOWER_LAYOUT, DT } from './data.js';

// Adaptadores: la vista 2D (plan B sin WebGL) dibuja fichas con iconos
const SPELL_ICON = { fireball: '☄️', arrows: '🏹', lightning: '⚡', freeze: '❄️', rage: '📯' };
const UCARD = UNIT_KEYS.map(k => ({ unit: UNITS[k], icon: UNITS[k].icon, type: UNITS[k].building ? 'building' : 'troop', count: 1 }));
const DCARD = (i) => {
  const c = CARDS[i];
  if (c.type === 'spell') return { ...c, icon: SPELL_ICON[c.spell.kind] || '✨' };
  return { ...c, unit: UNITS[c.unit], icon: UNITS[c.unit].icon };
};
import { mirror } from './sim.js';

const EMOJI_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
const TEAM = {
  me: { main: '#3b82f6', light: '#7cb4ff', dark: '#1e4fb5', bar: '#4aa3ff' },
  foe: { main: '#ef4444', light: '#ff8a8a', dark: '#a61e1e', bar: '#ff5a5a' },
};

const emojiCache = new Map();
function emojiSprite(ch, px) {
  px = Math.max(8, Math.round(px));
  const key = ch + '|' + px;
  let c = emojiCache.get(key);
  if (c) return c;
  c = document.createElement('canvas');
  const s = Math.ceil(px * 1.35);
  c.width = c.height = s;
  const g = c.getContext('2d');
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `${px}px ${EMOJI_FONT}`;
  g.fillText(ch, s / 2, s / 2 + px * 0.06);
  emojiCache.set(key, c);
  return c;
}

function rng(seed) {
  return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
}

const lerp = (a, b, t) => a + (b - a) * t;
// radio visual de las fichas (algo mayor que el físico para que se lean bien en el móvil)
const tokenR = (card) => Math.max(0.5, card.unit.radius * 1.28);

export class View {
  constructor(canvas, me, onEvent) {
    this.cv = canvas;
    this.ctx = canvas.getContext('2d');
    this.me = me;
    this.flip = me === 1;
    this.onEvent = onEvent || (() => {});
    this.frames = [];
    this.queue = [];
    this.parts = [];
    this.rings = [];
    this.projs = [];
    this.spells = [];
    this.marks = [];
    this.texts = [];
    this.bubbles = [];
    this.pos = new Map();
    this.shake = 0;
    this.lastNow = performance.now();
    this.towerPos = [];
    for (const p of [0, 1]) TOWER_LAYOUT.forEach((L) => this.towerPos.push(mirror(p, L.x, L.y)));
    this.resize();
  }

  reset(me) {
    this.me = me; this.flip = me === 1;
    this.frames = []; this.queue = []; this.parts = []; this.rings = []; this.projs = [];
    this.spells = []; this.marks = []; this.texts = []; this.bubbles = []; this.pos.clear(); this.shake = 0;
    this.buildBg();
  }

  resize() {
    const r = this.cv.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    this.dpr = dpr;
    this.cssW = Math.max(100, r.width);
    this.cssH = Math.max(100, r.height);
    this.cv.width = Math.round(this.cssW * dpr);
    this.cv.height = Math.round(this.cssH * dpr);
    this.cv.style.width = this.cssW + 'px';
    this.cv.style.height = this.cssH + 'px';
    const S = Math.min(this.cssW / W, this.cssH / H);
    this.S = S;
    this.ox = (this.cssW - W * S) / 2;
    this.oy = (this.cssH - H * S) / 2;
    this.buildBg();
  }

  // ---------- Coordenadas ----------
  toScreen(x, y) {
    const vx = this.flip ? W - x : x, vy = this.flip ? H - y : y;
    return [this.ox + vx * this.S, this.oy + vy * this.S];
  }
  toWorld(px, py) {
    const vx = (px - this.ox) / this.S, vy = (py - this.oy) / this.S;
    return this.flip ? [W - vx, H - vy] : [vx, vy];
  }
  inArena(px, py) {
    return px >= this.ox && px <= this.ox + W * this.S && py >= this.oy && py <= this.oy + H * this.S;
  }

  // ---------- Fondo estático ----------
  buildBg() {
    const S = this.S, dpr = this.dpr;
    const bg = document.createElement('canvas');
    bg.width = Math.ceil(W * S * dpr);
    bg.height = Math.ceil(H * S * dpr);
    const g = bg.getContext('2d');
    g.scale(dpr, dpr);
    // césped a cuadros
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      g.fillStyle = (x + y) % 2 ? '#62b347' : '#6abb4e';
      g.fillRect(x * S, y * S, S + 0.5, S + 0.5);
    }
    // degradado de campo (lado propio más claro)
    const grd = g.createLinearGradient(0, 0, 0, H * S);
    grd.addColorStop(0, 'rgba(120,0,0,0.07)');
    grd.addColorStop(0.47, 'rgba(0,0,0,0)');
    grd.addColorStop(0.53, 'rgba(0,0,0,0)');
    grd.addColorStop(1, 'rgba(0,40,160,0.06)');
    g.fillStyle = grd;
    g.fillRect(0, 0, W * S, H * S);

    // caminos de tierra (en coordenadas de vista: son simétricos)
    const path = (x0, y0, x1, y1) => {
      g.fillStyle = '#d9c28d';
      roundRect(g, x0 * S, y0 * S, (x1 - x0) * S, (y1 - y0) * S, S * 0.6);
      g.fill();
      g.strokeStyle = 'rgba(120,90,40,0.25)';
      g.lineWidth = Math.max(1, S * 0.06);
      g.stroke();
    };
    for (const bx of BRIDGES) { path(bx - 0.85, 5.2, bx + 0.85, RIVER_TOP + 0.2); path(bx - 0.85, RIVER_BOT - 0.2, bx + 0.85, 26.8); }
    path(3.2, 27.9, 14.8, 30.0);
    path(3.2, 2.0, 14.8, 4.1);
    path(2.65, 25.6, 4.35, 29.5);
    path(13.65, 25.6, 15.35, 29.5);
    path(2.65, 2.5, 4.35, 6.4);
    path(13.65, 2.5, 15.35, 6.4);

    // decoración
    const R = rng(7);
    for (let i = 0; i < 70; i++) {
      const x = R() * W, y = R() * H;
      if (y > RIVER_TOP - 0.6 && y < RIVER_BOT + 0.6) continue;
      if (BRIDGES.some(b => Math.abs(x - b) < 1.4)) continue;
      if (Math.abs(x - 9) < 6.2 && (y < 5 || y > 27)) continue;
      const k = R();
      if (k < 0.55) {
        g.fillStyle = ['#f6e05e', '#ffffff', '#f687b3', '#c3a6ff'][Math.floor(R() * 4)];
        for (let j = 0; j < 4; j++) {
          g.beginPath();
          g.arc(x * S + Math.cos(j * 1.57) * S * 0.07, y * S + Math.sin(j * 1.57) * S * 0.07, S * 0.06, 0, 7);
          g.fill();
        }
      } else if (k < 0.8) {
        g.fillStyle = 'rgba(40,90,30,0.55)';
        for (let j = 0; j < 3; j++) { g.fillRect(x * S + j * S * 0.09, y * S - S * 0.18 + (j % 2) * S * 0.05, S * 0.04, S * 0.2); }
      } else {
        g.fillStyle = '#9aa0a6';
        g.beginPath(); g.ellipse(x * S, y * S, S * 0.16, S * 0.11, 0, 0, 7); g.fill();
        g.fillStyle = 'rgba(255,255,255,0.35)';
        g.beginPath(); g.ellipse(x * S - S * 0.04, y * S - S * 0.03, S * 0.06, S * 0.04, 0, 0, 7); g.fill();
      }
    }

    // río
    const rv = g.createLinearGradient(0, RIVER_TOP * S, 0, RIVER_BOT * S);
    rv.addColorStop(0, '#2f86c9');
    rv.addColorStop(0.5, '#47a7e6');
    rv.addColorStop(1, '#2f86c9');
    g.fillStyle = rv;
    g.fillRect(0, RIVER_TOP * S, W * S, (RIVER_BOT - RIVER_TOP) * S);
    g.fillStyle = '#4a8a3a';
    g.fillRect(0, RIVER_TOP * S - S * 0.12, W * S, S * 0.14);
    g.fillRect(0, RIVER_BOT * S - S * 0.02, W * S, S * 0.14);
    g.fillStyle = 'rgba(255,255,255,0.18)';
    g.fillRect(0, RIVER_TOP * S + S * 0.02, W * S, S * 0.08);

    // puentes
    for (const bx of BRIDGES) {
      const x0 = (bx - BRIDGE_HALF - 0.15) * S, w = (BRIDGE_HALF * 2 + 0.3) * S;
      const y0 = (RIVER_TOP - 0.45) * S, h = (RIVER_BOT - RIVER_TOP + 0.9) * S;
      g.fillStyle = 'rgba(0,0,0,0.25)';
      g.fillRect(x0 + S * 0.12, y0 + S * 0.15, w, h);
      g.fillStyle = '#b07d45';
      g.fillRect(x0, y0, w, h);
      g.strokeStyle = '#7a5228';
      g.lineWidth = Math.max(1, S * 0.06);
      for (let yy = y0 + S * 0.38; yy < y0 + h; yy += S * 0.38) {
        g.beginPath(); g.moveTo(x0, yy); g.lineTo(x0 + w, yy); g.stroke();
      }
      g.fillStyle = '#6b4520';
      g.fillRect(x0 - S * 0.08, y0, S * 0.16, h);
      g.fillRect(x0 + w - S * 0.08, y0, S * 0.16, h);
    }
    this.bg = bg;
  }

  // ---------- Datos ----------
  pushFrame(snap) {
    const ents = new Map();
    for (const e of snap.e) ents.set(e[0], e);
    const f = { k: snap.k, ents, tw: snap.tw, ka: snap.ka };
    const fr = this.frames;
    if (snap.ev) for (const ev of snap.ev) this.queue.push(ev);
    if (fr.length && fr[fr.length - 1].k >= f.k) return;
    fr.push(f);
    if (fr.length > 60) fr.shift();
  }
  latest() { return this.frames[this.frames.length - 1]; }

  predict(card, x, y) { this.addLocalDeploy(card, x, y); }
  pushEvents(evs) { for (const ev of evs) this.queue.push(ev); }
  warm() {}
  setQuality() {}
  screenOfTower(i) { const [x, y] = this.towerPos[i]; const [sx, sy] = this.toScreen(x, y); return [sx, sy - this.S * 2]; }
  addLocalDeploy(card, x, y) {
    this.marks.push({ x, y, card, t: 0, max: 0.8, local: true, owner: this.me });
  }
  emote(owner, ch) {
    this.bubbles.push({ owner, ch, t: 0, max: 2.6 });
  }

  // ---------- Eventos ----------
  trigger(ev) {
    const S = this.S;
    switch (ev.t) {
      case 'deploy': {
        if (CARDS[ev.c].type === 'spell') this.marks.push({ x: ev.x, y: ev.y, card: ev.c, t: 0, max: 1.2, spell: true, owner: ev.o });
        else this.rings.push({ x: ev.x, y: ev.y, r0: 0.3, r1: 1.4, t: 0, max: 0.45, color: ev.o === this.me ? '#9cc8ff' : '#ffb0b0', w: 0.12 });
        break;
      }
      case 'proj':
        this.projs.push({ ...ev, start: ev.k });
        break;
      case 'hit':
        this.burst(ev.x, ev.y, 6, ['#ffffff', '#ffe08a'], 2.5, 0.25, 0.07, ev.a ? 0.6 : 0);
        break;
      case 'splash': {
        const col = ev.p === 'fire' ? ['#ffb347', '#ff6a00', '#ffd27a'] : ['#c79bff', '#8b5cf6', '#ffffff'];
        this.rings.push({ x: ev.x, y: ev.y, r0: 0.2, r1: ev.r, t: 0, max: 0.3, color: col[0], w: 0.15 });
        this.burst(ev.x, ev.y, 10, col, 3, 0.35, 0.09, 0);
        break;
      }
      case 'spell':
        this.spells.push({ ...ev, start: ev.k });
        break;
      case 'boom':
        this.rings.push({ x: ev.x, y: ev.y, r0: 0.4, r1: ev.r, t: 0, max: 0.45, color: '#ffcc66', w: 0.35 });
        this.rings.push({ x: ev.x, y: ev.y, r0: 0.2, r1: ev.r * 0.7, t: 0, max: 0.6, color: '#ff6a00', w: 0.6, fill: true });
        this.burst(ev.x, ev.y, 34, ['#ff6a00', '#ffb347', '#ffe08a', '#7a3b12'], 6, 0.7, 0.14, 0);
        this.smoke(ev.x, ev.y, 10, 1.6);
        this.shake = Math.max(this.shake, 0.5);
        this.marks = this.marks.filter(m => !(m.spell && Math.hypot(m.x - ev.x, m.y - ev.y) < 0.2));
        break;
      case 'death':
        this.smoke(ev.x, ev.y, 7, 0.7, ev.a ? 0.6 : 0);
        this.burst(ev.x, ev.y, 6, [ev.o === this.me ? TEAM.me.light : TEAM.foe.light, '#ffffff'], 2.5, 0.4, 0.08, ev.a ? 0.6 : 0);
        break;
      case 'tower': {
        this.burst(ev.x, ev.y, 50, ['#9a948a', '#c7c1b6', '#6e695f', '#ffb347', '#ff6a00'], 8, 1.0, 0.2, 0);
        this.smoke(ev.x, ev.y, 18, 2.5);
        this.rings.push({ x: ev.x, y: ev.y, r0: 0.5, r1: 4, t: 0, max: 0.6, color: '#fff3c4', w: 0.4 });
        this.shake = Math.max(this.shake, 1.1);
        const [sx, sy] = this.toScreen(ev.x, ev.y);
        this.texts.push({ sx, sy, txt: '👑', t: 0, max: 1.6, big: true });
        break;
      }
      case 'king': {
        const [x, y] = this.towerPos[ev.o * 3 + 2];
        const [sx, sy] = this.toScreen(x, y);
        this.texts.push({ sx, sy: sy - S * 2.2, txt: '❗', t: 0, max: 1.2 });
        break;
      }
    }
    this.onEvent(ev);
  }

  burst(x, y, n, colors, spd, life, size, lift) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = spd * (0.3 + Math.random() * 0.7);
      this.parts.push({
        x, y, z: lift || 0, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vz: 2 + Math.random() * 3,
        life: life * (0.6 + Math.random() * 0.6), t: 0, size: size * (0.6 + Math.random() * 0.8),
        color: colors[i % colors.length], grav: 9,
      });
    }
  }
  smoke(x, y, n, spread, lift) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = spread * Math.random();
      this.parts.push({
        x: x + Math.cos(a) * 0.2, y: y + Math.sin(a) * 0.2, z: lift || 0, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vz: 0.6,
        life: 0.7 + Math.random() * 0.5, t: 0, size: 0.25 + Math.random() * 0.3, color: 'smoke', grav: 0, grow: 0.9,
      });
    }
  }

  // ---------- Render ----------
  render(rt, ui) {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastNow) / 1000);
    this.lastNow = now;
    const ctx = this.ctx, S = this.S;

    // disparar eventos cuyo tick ya ha llegado
    if (this.queue.length) {
      const keep = [];
      for (const ev of this.queue) (ev.k <= rt + 0.01 ? this.trigger(ev) : keep.push(ev));
      this.queue = keep;
    }

    // interpolación
    const fr = this.frames;
    let A = null, B = null;
    for (let i = fr.length - 1; i >= 0; i--) {
      if (fr[i].k <= rt) { A = fr[i]; B = fr[i + 1] || null; break; }
    }
    if (!A) A = fr[0];
    const al = A && B ? Math.min(1, Math.max(0, (rt - A.k) / (B.k - A.k))) : 0;
    const cur = (B && al > 0.5) ? B : A;

    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.fillStyle = '#1d3a22';
    ctx.fillRect(0, 0, this.cssW, this.cssH);

    let shx = 0, shy = 0;
    if (this.shake > 0) {
      shx = (Math.random() - 0.5) * this.shake * S * 0.5;
      shy = (Math.random() - 0.5) * this.shake * S * 0.5;
      this.shake = Math.max(0, this.shake - dt * 2.5);
    }
    ctx.translate(shx, shy);

    // fondo (rotado 180° si soy el jugador de arriba: el campo es simétrico)
    ctx.drawImage(this.bg, this.ox, this.oy, W * S, H * S);
    this.drawRiver(now);

    if (!A) { ctx.setTransform(1, 0, 0, 1, 0, 0); return; }

    // posiciones interpoladas
    const pos = this.pos;
    const seen = new Set();
    const list = [];
    for (const [id, eb] of (cur === B ? B.ents : A.ents)) {
      const ea = A.ents.get(id), ebb = B ? B.ents.get(id) : null;
      let x, y, moving = 0;
      if (ea && ebb) {
        x = lerp(ea[3], ebb[3], al) / 20; y = lerp(ea[4], ebb[4], al) / 20;
        moving = Math.hypot(ebb[3] - ea[3], ebb[4] - ea[4]);
      } else { const e = ebb || ea; x = e[3] / 20; y = e[4] / 20; }
      const card = UCARD[eb[1]];
      const air = !!(card.unit && card.unit.air);
      pos.set(id, { x, y, air });
      seen.add(id);
      list.push({ e: eb, x, y, card, air, moving });
    }
    for (const id of pos.keys()) if (id > 6 && !seen.has(id)) pos.delete(id);
    for (let i = 0; i < 6; i++) {
      const [x, y] = this.towerPos[i];
      pos.set(i + 1, { x, y, air: false });
    }

    // zonas de despliegue
    if (ui && ui.ghost) this.drawZones(ui.ghost, A);

    // marcas de despliegue de hechizo
    for (const m of this.marks) this.drawMark(m, dt);
    this.marks = this.marks.filter(m => m.t < m.max);

    // orden de pintado por profundidad
    const draws = [];
    for (let i = 0; i < 6; i++) {
      const [x, y] = this.towerPos[i];
      const [, sy] = this.toScreen(x, y);
      draws.push({ z: sy + S * 0.8, f: () => this.drawTower(i, A, cur) });
    }
    for (const it of list) {
      const [, sy] = this.toScreen(it.x, it.y);
      draws.push({ z: sy + (it.air ? 10000 : 0), f: () => this.drawUnit(it, now) });
    }
    draws.sort((a, b) => a.z - b.z);
    for (const d of draws) d.f();

    // proyectiles
    this.projs = this.projs.filter(p => this.drawProj(p, rt));
    this.spells = this.spells.filter(s => this.drawSpell(s, rt));

    // partículas y anillos
    this.drawRings(dt);
    this.drawParts(dt);

    // HP de torres por encima de todo
    for (let i = 0; i < 6; i++) this.drawTowerBar(i, cur);

    if (ui && ui.ghost) this.drawGhost(ui.ghost);
    this.drawBubbles(dt);
    this.drawTexts(dt);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  drawRiver(now) {
    const ctx = this.ctx, S = this.S;
    const [, y0] = this.toScreen(0, this.flip ? RIVER_BOT : RIVER_TOP);
    const h = (RIVER_BOT - RIVER_TOP) * S;
    ctx.save();
    ctx.beginPath();
    ctx.rect(this.ox, y0, W * S, h);
    ctx.clip();
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = Math.max(1, S * 0.07);
    const t = now / 1000;
    for (let row = 0; row < 3; row++) {
      const yy = y0 + h * (0.25 + row * 0.25);
      ctx.beginPath();
      for (let k = -2; k < W + 2; k += 2.2) {
        const xx = this.ox + ((k + t * (0.6 + row * 0.25) + row * 0.7) % (W + 2.2)) * S;
        ctx.moveTo(xx, yy);
        ctx.quadraticCurveTo(xx + S * 0.35, yy - S * 0.12, xx + S * 0.7, yy);
      }
      ctx.stroke();
    }
    ctx.restore();
    // volver a pintar los puentes encima de las ondas
    for (const bx of BRIDGES) {
      const [sx] = this.toScreen(bx, 16);
      const x0 = sx - (BRIDGE_HALF + 0.15) * S;
      const w = (BRIDGE_HALF * 2 + 0.3) * S;
      ctx.drawImage(this.bg, (x0 - this.ox) * this.dpr, (y0 - this.oy - S * 0.45) * this.dpr, w * this.dpr, (h + S * 0.9) * this.dpr,
        x0, y0 - S * 0.45, w, h + S * 0.9);
    }
  }

  drawZones(ghost, frame) {
    const card = DCARD(ghost.card);
    if (card.type === 'spell') return;
    const ctx = this.ctx, S = this.S;
    ctx.fillStyle = 'rgba(230,40,40,0.22)';
    // en vista, el rival siempre está arriba: y < 17 (incluye río)
    const foe = 1 - this.me;
    const rects = [];
    const enemyLaneDown = [false, false]; // por carril de vista (0 izq, 1 der)
    if (card.type !== 'building') {
      for (let i = 0; i < 2; i++) {
        const tid = foe * 3 + i;
        if (frame.tw[tid] <= 0) {
          const [x] = this.towerPos[tid];
          const vx = this.flip ? W - x : x;
          enemyLaneDown[vx < W / 2 ? 0 : 1] = true;
        }
      }
    }
    for (let lane = 0; lane < 2; lane++) {
      const x0 = lane === 0 ? 0 : W / 2;
      if (enemyLaneDown[lane]) {
        rects.push([x0, 0, W / 2, RIVER_TOP - 4]);
        rects.push([x0, RIVER_TOP, W / 2, RIVER_BOT - RIVER_TOP]);
      } else rects.push([x0, 0, W / 2, RIVER_BOT]);
    }
    for (const [x, y, w, h] of rects) ctx.fillRect(this.ox + x * S, this.oy + y * S, w * S, h * S);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.setLineDash([S * 0.3, S * 0.25]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.ox, this.oy + RIVER_BOT * S);
    ctx.lineTo(this.ox + W * S, this.oy + RIVER_BOT * S);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  drawGhost(gh) {
    const ctx = this.ctx, S = this.S;
    const card = DCARD(gh.card);
    const [sx, sy] = this.toScreen(gh.x, gh.y);
    ctx.save();
    if (card.type === 'spell') {
      const r = card.spell.radius * S;
      ctx.fillStyle = 'rgba(255,140,40,0.22)';
      ctx.strokeStyle = 'rgba(255,220,150,0.9)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, 7); ctx.fill(); ctx.stroke();
      const sp = emojiSprite(card.icon, S * 1.4);
      ctx.globalAlpha = 0.8;
      ctx.drawImage(sp, sx - sp.width / 2, sy - sp.height / 2);
      ctx.restore();
      return;
    }
    const u = card.unit;
    if (u.proj || card.type === 'building') {
      ctx.strokeStyle = 'rgba(255,255,255,0.55)';
      ctx.setLineDash([S * 0.25, S * 0.2]);
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(sx, sy, (u.range + u.radius) * S, 0, 7); ctx.stroke();
      ctx.setLineDash([]);
    }
    // casilla
    ctx.fillStyle = gh.valid ? 'rgba(255,255,255,0.25)' : 'rgba(255,60,60,0.35)';
    ctx.fillRect(sx - S / 2, sy - S / 2, S, S);
    ctx.globalAlpha = 0.65;
    const n = card.count || 1;
    const offs = n === 1 ? [[0, 0]] : n === 2 ? [[-0.55, 0], [0.55, 0]] : [[0, -0.45], [-0.55, 0.4], [0.55, 0.4]];
    for (const [ox, oy] of offs) this.drawToken(sx + ox * S, sy + oy * S, card, true, 1, u.air ? 0.6 : 0);
    ctx.globalAlpha = 1;
    if (!gh.valid) {
      ctx.strokeStyle = '#ff4d4d';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(sx, sy, S * 0.7, 0, 7); ctx.stroke();
    }
    ctx.restore();
  }

  drawMark(m, dt) {
    m.t += dt;
    const ctx = this.ctx, S = this.S;
    const [sx, sy] = this.toScreen(m.x, m.y);
    const mine = m.owner === this.me;
    if (m.spell) {
      const r = CARDS[m.card].spell.radius * S;
      ctx.save();
      ctx.strokeStyle = mine ? 'rgba(160,200,255,0.8)' : 'rgba(255,150,150,0.85)';
      ctx.lineWidth = 2;
      ctx.setLineDash([S * 0.35, S * 0.25]);
      ctx.lineDashOffset = -m.t * S * 2;
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, 7); ctx.stroke();
      ctx.restore();
    } else if (m.local) {
      // eco local inmediato al soltar una carta (invitado)
      const k = m.t / m.max;
      ctx.save();
      ctx.globalAlpha = 1 - k;
      ctx.strokeStyle = '#bcd8ff';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(sx, sy, S * (0.4 + k * 0.9), 0, 7); ctx.stroke();
      const sp = emojiSprite(DCARD(m.card).icon, S * 1.0);
      ctx.globalAlpha = 0.6 * (1 - k);
      ctx.drawImage(sp, sx - sp.width / 2, sy - sp.height / 2 - S * 0.3 * (1 - k));
      ctx.restore();
    }
  }

  drawTower(i, frame, cur) {
    const ctx = this.ctx, S = this.S;
    const owner = i < 3 ? 0 : 1;
    const kind = TOWER_LAYOUT[i % 3].kind;
    const [x, y] = this.towerPos[i];
    const [sx, sy] = this.toScreen(x, y);
    const hp = cur.tw[i];
    const mine = owner === this.me;
    const team = mine ? TEAM.me : TEAM.foe;
    const h = (kind === 'king' ? 1.75 : 1.35) * S;

    if (hp <= 0) {
      // escombros
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath(); ctx.ellipse(sx, sy + h * 0.3, h * 1.0, h * 0.55, 0, 0, 7); ctx.fill();
      const R = rng(i * 97 + 13);
      for (let k = 0; k < 9; k++) {
        const a = R() * 7, d = R() * h * 0.75;
        ctx.fillStyle = ['#8d877d', '#a8a296', '#6e695f'][k % 3];
        ctx.beginPath();
        ctx.ellipse(sx + Math.cos(a) * d, sy + Math.sin(a) * d * 0.6, h * (0.16 + R() * 0.16), h * (0.11 + R() * 0.1), R() * 3, 0, 7);
        ctx.fill();
      }
      return;
    }
    // sombra
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.beginPath(); ctx.ellipse(sx + h * 0.1, sy + h * 0.9, h * 1.05, h * 0.42, 0, 0, 7); ctx.fill();
    // cuerpo de piedra (2.5D)
    const top = sy - h * 0.95, bot = sy + h * 0.75;
    ctx.fillStyle = '#6e695f';
    roundRect(ctx, sx - h, top + h * 0.2, h * 2, bot - top, h * 0.22); ctx.fill();
    const sg = ctx.createLinearGradient(0, top, 0, bot);
    sg.addColorStop(0, '#d6d0c4'); sg.addColorStop(1, '#a39d91');
    ctx.fillStyle = sg;
    roundRect(ctx, sx - h, top, h * 2, bot - top - h * 0.12, h * 0.22); ctx.fill();
    // piedras
    ctx.strokeStyle = 'rgba(80,72,60,0.35)';
    ctx.lineWidth = Math.max(1, S * 0.05);
    for (let r = 1; r < 4; r++) {
      const yy = top + (bot - top - h * 0.12) * (r / 4);
      ctx.beginPath(); ctx.moveTo(sx - h * 0.92, yy); ctx.lineTo(sx + h * 0.92, yy); ctx.stroke();
    }
    // almenas
    ctx.fillStyle = '#e4dfd4';
    const n = kind === 'king' ? 5 : 4;
    for (let k = 0; k < n; k++) {
      const bx = sx - h + (k + 0.5) * (h * 2 / n) - h * 0.17;
      ctx.fillRect(bx, top - h * 0.18, h * 0.34, h * 0.26);
    }
    // torreta con color del equipo
    const tr = h * (kind === 'king' ? 0.62 : 0.5);
    const ty = sy - h * 0.18;
    const tg = ctx.createRadialGradient(sx - tr * 0.3, ty - tr * 0.4, tr * 0.1, sx, ty, tr);
    tg.addColorStop(0, team.light); tg.addColorStop(1, team.dark);
    ctx.fillStyle = tg;
    ctx.beginPath(); ctx.arc(sx, ty, tr, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = Math.max(1.5, S * 0.08);
    ctx.stroke();
    const icon = kind === 'king' ? '👑' : '🏹';
    const sp = emojiSprite(icon, tr * 1.25);
    ctx.drawImage(sp, sx - sp.width / 2, ty - sp.height / 2);
    // rey dormido
    if (kind === 'king' && frame && !frame.ka[owner]) {
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.font = `bold ${Math.round(S * 0.55)}px system-ui, sans-serif`;
      const t = performance.now() / 600;
      ctx.fillText('z', sx + tr * 0.9, ty - tr * 0.8 - (t % 1) * S * 0.3);
      ctx.font = `bold ${Math.round(S * 0.4)}px system-ui, sans-serif`;
      ctx.fillText('z', sx + tr * 1.3, ty - tr * 1.3 - ((t + 0.5) % 1) * S * 0.3);
    }
  }

  drawTowerBar(i, cur) {
    const hp = cur.tw[i];
    if (hp <= 0) return;
    const ctx = this.ctx, S = this.S;
    const owner = i < 3 ? 0 : 1;
    const kind = TOWER_LAYOUT[i % 3].kind;
    const max = TOWERS[kind].hp;
    const [x, y] = this.towerPos[i];
    const [sx, sy] = this.toScreen(x, y);
    const mine = owner === this.me;
    const h = (kind === 'king' ? 1.75 : 1.35) * S;
    const bw = h * 1.9, bh = Math.max(9, S * 0.42);
    const bx = sx - bw / 2;
    const by = mine ? sy + h * 0.95 : sy - h * 1.55;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    roundRect(ctx, bx - 2, by - 2, bw + 4, bh + 4, 4); ctx.fill();
    ctx.fillStyle = mine ? TEAM.me.bar : TEAM.foe.bar;
    const k = Math.max(0, Math.min(1, hp / max));
    roundRect(ctx, bx, by, bw * k, bh, 3); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `800 ${Math.round(bh * 0.85)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(hp), sx, by + bh / 2 + 1);
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';
  }

  drawToken(sx, sy, card, mine, alpha, lift, squash = 0) {
    const ctx = this.ctx, S = this.S;
    const team = mine ? TEAM.me : TEAM.foe;
    const r = tokenR(card) * S;
    ctx.globalAlpha *= alpha;
    // sombra
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath(); ctx.ellipse(sx, sy + r * 0.45, r * (lift ? 0.7 : 0.95), r * (lift ? 0.3 : 0.42), 0, 0, 7); ctx.fill();
    const cy = sy - lift * S;
    const g = ctx.createRadialGradient(sx - r * 0.35, cy - r * 0.4, r * 0.1, sx, cy, r);
    g.addColorStop(0, team.light); g.addColorStop(1, team.dark);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(sx, cy, r * (1 + squash), r * (1 - squash), 0, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = Math.max(1.5, S * 0.07);
    ctx.stroke();
    const sp = emojiSprite(card.unitIcon || card.icon, r * 1.45);
    ctx.drawImage(sp, sx - sp.width / 2, cy - sp.height / 2);
    ctx.globalAlpha /= alpha;
  }

  drawUnit(it, now) {
    const ctx = this.ctx, S = this.S;
    const { e, card, air } = it;
    const [, , owner, , , hp, dep, atk, tid] = e;
    const mine = owner === this.me;
    let [sx, sy] = this.toScreen(it.x, it.y);
    const team = mine ? TEAM.me : TEAM.foe;
    const lift = air ? 0.6 + Math.sin(now / 300 + e[0]) * 0.06 : 0;

    if (card.type === 'building') {
      this.drawBallista(sx, sy, it, mine, team);
    } else {
      // pasos / ataque
      let squash = 0;
      if (it.moving > 0.2 && dep === 0) sy -= Math.abs(Math.sin(now / 90 + e[0])) * S * 0.08;
      if (atk < 3 && tid) {
        const tp = this.pos.get(tid);
        if (tp) {
          const [tx, ty] = this.toScreen(tp.x, tp.y);
          const L = Math.hypot(tx - sx, ty - sy) || 1;
          const k = (1 - atk / 3) * (card.unit.proj ? 0.08 : 0.28) * S;
          sx += (tx - sx) / L * k; sy += (ty - sy) / L * k;
          squash = (1 - atk / 3) * 0.12;
        }
      }
      const alpha = dep > 0 ? 0.55 : 1;
      this.drawToken(sx, sy, card, mine, alpha, lift, squash);
      if (dep > 0) {
        const r = tokenR(card) * S + 3;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(sx, sy - lift * S, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - dep / 10));
        ctx.stroke();
      }
    }
    // barra de vida
    const max = card.unit.hp;
    if (hp < max || card.type === 'building') {
      const r = tokenR(card) * S;
      const bw = Math.max(r * 2, S * 0.9), bh = Math.max(4, S * 0.16);
      const bx = sx - bw / 2, by = sy - lift * S - r - bh - S * 0.15;
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(bx - 1, by - 1, bw + 2, bh + 2);
      ctx.fillStyle = team.bar;
      ctx.fillRect(bx, by, bw * Math.max(0, hp / max), bh);
    }
  }

  drawBallista(sx, sy, it, mine, team) {
    const ctx = this.ctx, S = this.S;
    const r = 0.85 * S;
    const dep = it.e[6];
    ctx.save();
    if (dep > 0) ctx.globalAlpha = 0.55;
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath(); ctx.ellipse(sx, sy + r * 0.5, r * 1.05, r * 0.45, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#7a5228';
    roundRect(ctx, sx - r, sy - r * 0.8, r * 2, r * 1.75, r * 0.25); ctx.fill();
    ctx.fillStyle = '#a8743c';
    roundRect(ctx, sx - r, sy - r * 0.9, r * 2, r * 1.6, r * 0.25); ctx.fill();
    ctx.strokeStyle = team.main;
    ctx.lineWidth = Math.max(2, S * 0.12);
    ctx.stroke();
    // orientación hacia el objetivo
    let ang = mine ? -Math.PI / 2 : Math.PI / 2;
    const tp = this.pos.get(it.e[8]);
    if (tp) {
      const [tx, ty] = this.toScreen(tp.x, tp.y);
      ang = Math.atan2(ty - sy, tx - sx);
    }
    ctx.translate(sx, sy - r * 0.1);
    ctx.rotate(ang);
    const rec = it.e[7] < 3 ? (1 - it.e[7] / 3) * r * 0.25 : 0;
    ctx.translate(-rec, 0);
    ctx.strokeStyle = '#4a2f14';
    ctx.lineWidth = Math.max(2, S * 0.14);
    ctx.beginPath(); ctx.moveTo(-r * 0.6, 0); ctx.lineTo(r * 0.85, 0); ctx.stroke();
    ctx.strokeStyle = '#3a2410';
    ctx.lineWidth = Math.max(2, S * 0.1);
    ctx.beginPath(); ctx.arc(r * 0.05, 0, r * 0.75, -1.1, 1.1); ctx.stroke();
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(r * 0.05 + Math.cos(-1.1) * r * 0.75, Math.sin(-1.1) * r * 0.75);
    ctx.lineTo(-r * 0.35, 0); ctx.lineTo(r * 0.05 + Math.cos(1.1) * r * 0.75, Math.sin(1.1) * r * 0.75); ctx.stroke();
    ctx.restore();
  }

  projPos(p, rt) {
    const prog = Math.min(1, ((rt - p.start) * DT) / p.dur);
    const tp = this.pos.get(p.tid);
    if (tp) { p.tx = tp.x; p.ty = tp.y; p.ta = tp.air ? 1 : 0; }
    const x = lerp(p.fx, p.tx, prog), y = lerp(p.fy, p.ty, prog);
    const z = lerp(p.fa ? 0.6 : (p.p === 'tower' || p.p === 'cannon' ? 1.2 : 0.3), p.ta ? 0.6 : 0.3, prog);
    return { x, y, z, prog };
  }

  drawProj(p, rt) {
    if (rt < p.start) return true;
    const { x, y, z, prog } = this.projPos(p, rt);
    if (prog >= 1) {
      if (p.p === 'arrow' || p.p === 'tower' || p.p === 'bolt' || p.p === 'cannon') {
        this.burst(p.tx, p.ty, 3, ['#ffffff', '#ffe08a'], 1.5, 0.18, 0.05, p.ta ? 0.6 : 0.2);
      }
      return false;
    }
    const ctx = this.ctx, S = this.S;
    const [sx, sy0] = this.toScreen(x, y);
    const sy = sy0 - z * S;
    const [ex, ey] = this.toScreen(p.tx, p.ty);
    const ang = Math.atan2(ey - (ey - 0) - (sy - sy0) * 0 + 0 - sy0 + 0, ex - sx);
    ctx.save();
    switch (p.p) {
      case 'arrow': case 'tower': case 'bolt': {
        const len = (p.p === 'bolt' ? 0.9 : p.p === 'tower' ? 0.65 : 0.5) * S;
        const a = Math.atan2(ey - sy0, ex - sx);
        ctx.translate(sx, sy); ctx.rotate(a);
        ctx.strokeStyle = p.p === 'bolt' ? '#5a3a1a' : '#6b4520';
        ctx.lineWidth = Math.max(1.5, S * (p.p === 'bolt' ? 0.12 : 0.07));
        ctx.beginPath(); ctx.moveTo(-len / 2, 0); ctx.lineTo(len / 2, 0); ctx.stroke();
        ctx.fillStyle = '#e8e8e8';
        ctx.beginPath(); ctx.moveTo(len / 2 + S * 0.14, 0); ctx.lineTo(len / 2 - S * 0.04, -S * 0.08); ctx.lineTo(len / 2 - S * 0.04, S * 0.08); ctx.fill();
        ctx.fillStyle = p.o === this.me ? TEAM.me.light : TEAM.foe.light;
        ctx.fillRect(-len / 2, -S * 0.07, S * 0.14, S * 0.14);
        break;
      }
      case 'cannon': {
        ctx.fillStyle = '#2b2b2b';
        ctx.beginPath(); ctx.arc(sx, sy, S * 0.2, 0, 7); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.beginPath(); ctx.arc(sx - S * 0.06, sy - S * 0.06, S * 0.07, 0, 7); ctx.fill();
        break;
      }
      case 'fire': case 'magic': {
        const fire = p.p === 'fire';
        const r = S * (fire ? 0.28 : 0.24);
        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 2);
        g.addColorStop(0, fire ? '#fff3b0' : '#ffffff');
        g.addColorStop(0.35, fire ? '#ff9a2e' : '#b48cff');
        g.addColorStop(1, fire ? 'rgba(255,80,0,0)' : 'rgba(120,60,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(sx, sy, r * 2, 0, 7); ctx.fill();
        if (Math.random() < 0.6) {
          this.parts.push({ x, y, z, vx: (Math.random() - 0.5), vy: (Math.random() - 0.5), vz: 0.3, life: 0.3, t: 0, size: 0.09,
            color: fire ? '#ffb347' : '#c79bff', grav: 0 });
        }
        break;
      }
    }
    ctx.restore();
    return true;
  }

  drawSpell(s, rt) {
    if (rt < s.start) return true;
    const prog = ((rt - s.start) * DT) / s.dur;
    if (prog >= 1) return false;
    const ctx = this.ctx, S = this.S;
    const x = lerp(s.fx, s.x, prog), y = lerp(s.fy, s.y, prog);
    const z = Math.sin(prog * Math.PI) * 3.2 + 0.4 * (1 - prog);
    const [sx, sy0] = this.toScreen(x, y);
    const sy = sy0 - z * S;
    ctx.fillStyle = `rgba(0,0,0,${0.15 + prog * 0.2})`;
    ctx.beginPath(); ctx.ellipse(sx, sy0, S * (0.4 + prog * 0.5), S * (0.2 + prog * 0.25), 0, 0, 7); ctx.fill();
    const r = S * 0.65;
    const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 1.8);
    g.addColorStop(0, '#fff7c2'); g.addColorStop(0.3, '#ffb12e'); g.addColorStop(0.65, '#ff5a00'); g.addColorStop(1, 'rgba(255,60,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(sx, sy, r * 1.8, 0, 7); ctx.fill();
    for (let i = 0; i < 2; i++) {
      this.parts.push({ x, y, z, vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2, vz: 0.5, life: 0.45, t: 0,
        size: 0.18 + Math.random() * 0.12, color: ['#ff9a2e', '#ffd36e', '#ff5a00'][i % 3], grav: 0 });
    }
    return true;
  }

  drawRings(dt) {
    const ctx = this.ctx, S = this.S;
    this.rings = this.rings.filter(r => {
      r.t += dt;
      const k = r.t / r.max;
      if (k >= 1) return false;
      const [sx, sy] = this.toScreen(r.x, r.y);
      const rad = lerp(r.r0, r.r1, 1 - Math.pow(1 - k, 2)) * S;
      ctx.save();
      ctx.globalAlpha = 1 - k;
      if (r.fill) {
        ctx.fillStyle = r.color;
        ctx.beginPath(); ctx.arc(sx, sy, rad, 0, 7); ctx.fill();
      } else {
        ctx.strokeStyle = r.color;
        ctx.lineWidth = Math.max(1.5, r.w * S * (1 - k));
        ctx.beginPath(); ctx.arc(sx, sy, rad, 0, 7); ctx.stroke();
      }
      ctx.restore();
      return true;
    });
  }

  drawParts(dt) {
    const ctx = this.ctx, S = this.S;
    if (this.parts.length > 600) this.parts.splice(0, this.parts.length - 600);
    this.parts = this.parts.filter(p => {
      p.t += dt;
      if (p.t >= p.life) return false;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.z = Math.max(0, p.z + p.vz * dt);
      p.vz -= p.grav * dt;
      p.vx *= 0.96; p.vy *= 0.96;
      const k = p.t / p.life;
      const [sx, sy0] = this.toScreen(p.x, p.y);
      const sy = sy0 - p.z * S;
      const size = p.size * S * (p.grow ? 1 + k * 2 : 1 - k * 0.5);
      ctx.globalAlpha = 1 - k;
      ctx.fillStyle = p.color === 'smoke' ? 'rgba(235,235,235,0.65)' : p.color;
      ctx.beginPath(); ctx.arc(sx, sy, size, 0, 7); ctx.fill();
      return true;
    });
    ctx.globalAlpha = 1;
  }

  drawBubbles(dt) {
    const ctx = this.ctx, S = this.S;
    this.bubbles = this.bubbles.filter(b => {
      b.t += dt;
      if (b.t >= b.max) return false;
      const [x, y] = this.towerPos[b.owner * 3 + 2];
      let [sx, sy] = this.toScreen(x, y);
      const mine = b.owner === this.me;
      sx += mine ? -S * 3.4 : S * 3.4;
      sy += mine ? -S * 0.5 : S * 0.8;
      const pop = Math.min(1, b.t / 0.15) * (b.t > b.max - 0.25 ? (b.max - b.t) / 0.25 : 1);
      const r = S * 1.15 * pop;
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = mine ? TEAM.me.main : TEAM.foe.main;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, 7); ctx.fill(); ctx.stroke();
      const sp = emojiSprite(b.ch, r * 1.25);
      ctx.drawImage(sp, sx - sp.width / 2, sy - sp.height / 2);
      ctx.restore();
      return true;
    });
  }

  drawTexts(dt) {
    const ctx = this.ctx, S = this.S;
    this.texts = this.texts.filter(t => {
      t.t += dt;
      if (t.t >= t.max) return false;
      const k = t.t / t.max;
      const sz = (t.big ? 2.2 : 1.2) * S * (k < 0.15 ? k / 0.15 : 1);
      const sp = emojiSprite(t.txt, sz);
      ctx.globalAlpha = k > 0.7 ? (1 - k) / 0.3 : 1;
      ctx.drawImage(sp, t.sx - sp.width / 2, t.sy - sp.height / 2 - k * S * 1.5);
      ctx.globalAlpha = 1;
      return true;
    });
  }
}

export function roundRect(g, x, y, w, h, r) {
  r = Math.max(0, Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2));
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}
