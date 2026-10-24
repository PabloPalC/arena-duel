// Arena Duel — simulación autoritativa (la ejecuta el anfitrión o el modo práctica)
import {
  W, H, RIVER_TOP, RIVER_BOT, MID_Y, BRIDGES, BRIDGE_HALF, DT,
  MATCH_TIME, DOUBLE_AT, OVERTIME, ELIXIR_MAX, ELIXIR_START, ELIXIR_RATE, DEPLOY_TIME,
  CARDS, TOWERS, TOWER_LAYOUT,
} from './data.js';

const PH = { normal: 0, double: 1, overtime: 2, over: 3 };
export const PHASE_CODE = PH;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function mirror(p, x, y) {
  return p === 0 ? [x, y] : [W - x, H - y];
}

export function snapPos(x, y) {
  const sx = Math.min(W - 0.5, Math.max(0.5, Math.floor(x) + 0.5));
  const sy = Math.min(H - 0.5, Math.max(0.5, Math.floor(y) + 0.5));
  return [sx, sy];
}

const dist = (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by);

// Regla de colocación compartida (la usa el anfitrión y también el invitado para la vista previa).
// towers: [{owner, tkind, lane, hp}], solids: [{kind, x, y, radius}] (torres y edificios vivos)
export function placementOk(p, cardIdx, x, y, towers, solids) {
  const card = CARDS[cardIdx];
  if (!card) return false;
  if (x < 0 || x > W || y < 0 || y > H) return false;
  if (card.type === 'spell') return true;
  if (y > RIVER_TOP && y < RIVER_BOT) return false;
  const own = p === 0 ? y > RIVER_BOT : y < RIVER_TOP;
  if (!own) {
    if (card.type === 'building') return false;
    const lane = x < W / 2 ? 0 : 1;
    const ep = towers.find(t => t.owner === 1 - p && t.tkind === 'princess' && t.lane === lane);
    if (ep && ep.hp > 0) return false;
    if (p === 0 ? y < RIVER_TOP - 4 : y > RIVER_BOT + 4) return false;
  }
  for (const t of solids) {
    if (t.kind === 'tower' && dist(x, y, t.x, t.y) < t.radius + 0.35) return false;
    if (t.kind === 'building' && card.type === 'building' && dist(x, y, t.x, t.y) < t.radius + 0.6) return false;
  }
  return true;
}
const edge = (a, b) => dist(a.x, a.y, b.x, b.y) - a.radius - b.radius;

function canTarget(a, t) {
  if (t.owner === a.owner || t.hp <= 0) return false;
  if (a.targets === 'buildings') return t.kind !== 'unit';
  if (a.targets === 'ground') return !t.air;
  return true;
}

export class Game {
  constructor() {
    this.tick = 0;
    this.time = MATCH_TIME;
    this.phase = 'normal';
    this.crowns = [0, 0];
    this.elixir = [ELIXIR_START, ELIXIR_START];
    this.players = [0, 1].map(() => {
      const order = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
      return { hand: order.slice(0, 4), queue: order.slice(4) };
    });
    this.entities = [];
    this.byId = new Map();
    this.projectiles = [];
    this.spells = [];
    this.events = [];
    this.nextId = 10;
    this.nextProj = 1;
    this.winner = -1;
    this.lastSeq = [0, 0];
    this.towers = [[], []];
    this.stats = [{ played: 0, elixirSpent: 0 }, { played: 0, elixirSpent: 0 }];

    let tid = 1;
    for (const p of [0, 1]) {
      TOWER_LAYOUT.forEach((L, idx) => {
        const T = TOWERS[L.kind];
        const [x, y] = mirror(p, L.x, L.y);
        const t = this.add({
          id: tid++, owner: p, kind: 'tower', tkind: L.kind, tidx: idx, card: -1,
          x, y, hp: T.hp, maxHp: T.hp, radius: T.radius, mass: 9999, air: false,
          targets: 'both', range: T.range, sight: T.range, dmg: T.dmg, hitSpeed: T.hitSpeed,
          proj: T.proj, projSpeed: T.projSpeed, speed: 0,
          lane: L.lane < 0 ? -1 : (x < W / 2 ? 0 : 1),
          active: L.kind !== 'king',
        });
        this.towers[p].push(t);
      });
    }
  }

  add(e) {
    e.cd = e.cd ?? 0;
    e.targetId = 0;
    e.atkT = 9;
    e.deploy = e.deploy ?? 0;
    e.inRange = false;
    e.locked = false;
    this.entities.push(e);
    this.byId.set(e.id, e);
    return e;
  }

  get(id) { return id ? this.byId.get(id) : undefined; }

  emit(ev) { ev.k = this.tick; this.events.push(ev); }

  hand(p) { return this.players[p].hand; }
  next(p) { return this.players[p].queue[0]; }

  // ---------- Colocación ----------
  canPlace(p, cardIdx, x, y) {
    const solids = this.entities.filter(e => e.kind !== 'unit' && e.hp > 0);
    return placementOk(p, cardIdx, x, y, this.towers.flat(), solids);
  }

  play(p, slot, cardIdx, x, y, seq = 0) {
    if (this.phase === 'over') return false;
    const pl = this.players[p];
    if (slot < 0 || slot > 3 || pl.hand[slot] !== cardIdx) return false;
    const card = CARDS[cardIdx];
    if (this.elixir[p] < card.cost - 1e-6) return false;
    [x, y] = card.type === 'spell' ? [Math.min(W, Math.max(0, x)), Math.min(H, Math.max(0, y))] : snapPos(x, y);
    if (!this.canPlace(p, cardIdx, x, y)) return false;

    this.elixir[p] -= card.cost;
    pl.queue.push(cardIdx);
    pl.hand[slot] = pl.queue.shift();
    if (seq) this.lastSeq[p] = Math.max(this.lastSeq[p], seq);
    this.stats[p].played++;
    this.stats[p].elixirSpent += card.cost;
    this.emit({ t: 'deploy', o: p, c: cardIdx, x, y });

    if (card.type === 'spell') {
      const king = this.towers[p][2];
      const fx = king.x, fy = king.y;
      const dur = Math.max(0.45, dist(fx, fy, x, y) / card.spell.speed);
      this.spells.push({ owner: p, card: cardIdx, x, y, t: 0, dur });
      this.emit({ t: 'spell', o: p, c: cardIdx, fx, fy, x, y, dur });
    } else {
      this.spawn(p, cardIdx, x, y);
    }
    return true;
  }

  spawn(p, cardIdx, x, y) {
    const card = CARDS[cardIdx];
    const u = card.unit;
    const n = card.count || 1;
    const f = p === 0 ? 1 : -1; // "atrás" del jugador
    const offs = n === 1 ? [[0, 0]] : n === 2 ? [[-0.55, 0], [0.55, 0]] : [[0, -0.45], [-0.55, 0.4], [0.55, 0.4]];
    for (const [ox, oy] of offs) {
      this.add({
        id: this.nextId++, owner: p, kind: card.type === 'building' ? 'building' : 'unit', card: cardIdx,
        x: Math.min(W - u.radius, Math.max(u.radius, x + ox * f)), y: y + oy * f,
        hp: u.hp, maxHp: u.hp, radius: u.radius, mass: u.mass, air: !!u.air,
        targets: u.targets, range: u.range, sight: u.sight, dmg: u.dmg, hitSpeed: u.hitSpeed,
        splash: u.splash || 0, proj: u.proj, projSpeed: u.projSpeed, speed: u.speed,
        lifetime: u.lifetime || 0, deploy: DEPLOY_TIME, lane: x < W / 2 ? 0 : 1,
      });
    }
  }

  // ---------- Bucle ----------
  step() {
    if (this.phase === 'over') return;
    this.tick++;
    const mult = this.phase === 'normal' ? 1 : this.phase === 'double' ? 2 : 3;
    for (const p of [0, 1]) this.elixir[p] = Math.min(ELIXIR_MAX, this.elixir[p] + ELIXIR_RATE * mult * DT);

    for (const e of this.entities) {
      if (e.hp <= 0) continue;
      if (e.deploy > 0) { e.deploy -= DT; continue; }
      e.atkT += DT;
      if (e.cd > 0) e.cd -= DT;
      if (e.kind === 'building' && e.lifetime) e.hp -= (e.maxHp / e.lifetime) * DT;
      if (e.kind === 'tower' && !e.active) continue;
      this.think(e);
    }

    this.updateProjectiles();
    this.updateSpells();
    this.resolveCollisions();
    this.cleanup();
    this.updateClock();
  }

  defaultTarget(u) {
    const enemy = this.towers[1 - u.owner];
    if (u.targets === 'buildings') {
      // el gólem va al edificio más cercano (torre o ballesta)
      let best = null, bd = Infinity;
      for (const e of this.entities) {
        if (e.kind === 'unit' || !canTarget(u, e)) continue;
        if (e.kind === 'building' || e.tkind === 'princess' && e.lane === u.lane || e.tkind === 'king') {
          const d = edge(u, e) + (e.tkind === 'king' ? 6 : 0);
          if (d < bd) { bd = d; best = e; }
        }
      }
      if (best) return best;
    }
    const pr = enemy.find(t => t.tkind === 'princess' && t.lane === u.lane && t.hp > 0);
    if (pr) return pr;
    const king = enemy[2];
    if (king.hp > 0) return king;
    return enemy.find(t => t.hp > 0) || null;
  }

  acquire(e) {
    let best = null, bd = Infinity;
    for (const o of this.entities) {
      if (!canTarget(e, o)) continue;
      const d = edge(e, o);
      if (d <= e.sight && d < bd) { bd = d; best = o; }
    }
    return best;
  }

  think(e) {
    // carril con histéresis
    if (e.kind === 'unit' && Math.abs(e.x - W / 2) > 1.5) e.lane = e.x < W / 2 ? 0 : 1;

    let t = this.get(e.targetId);
    const valid = t && t.hp > 0 && canTarget(e, t);
    if (!(valid && e.locked && edge(e, t) <= e.range + 0.35)) {
      e.locked = false;
      let n = this.acquire(e);
      if (!n && e.kind === 'unit') n = this.defaultTarget(e);
      if (!n) { e.targetId = 0; e.inRange = false; return; }
      t = n;
      e.targetId = t.id;
    }

    const d = edge(e, t);
    if (d <= e.range) {
      if (!e.inRange) { e.inRange = true; e.cd = Math.max(e.cd, e.hitSpeed * 0.45); }
      e.locked = true;
      if (e.cd <= 0) this.attack(e, t);
    } else {
      e.inRange = false;
      if (e.speed > 0) this.move(e, t);
    }
  }

  attack(e, t) {
    e.cd = e.hitSpeed;
    e.atkT = 0;
    if (!e.proj) {
      this.damage(t, e.dmg, e);
      this.emit({ t: 'hit', x: t.x, y: t.y, a: t.air ? 1 : 0, c: e.card });
      return;
    }
    const sx = e.x, sy = e.y;
    const dur = Math.max(0.12, dist(sx, sy, t.x, t.y) / e.projSpeed);
    const pr = {
      id: this.nextProj++, owner: e.owner, kind: e.proj, tid: t.id, x0: sx, y0: sy, tx: t.x, ty: t.y,
      t: 0, dur, dmg: e.dmg, splash: e.splash || 0, targets: e.targets, fromTower: e.kind === 'tower',
    };
    this.projectiles.push(pr);
    this.emit({ t: 'proj', p: pr.kind, fx: sx, fy: sy, fa: e.air ? 1 : 0, tid: t.id, tx: t.x, ty: t.y, dur, o: e.owner });
  }

  damage(t, dmg) {
    if (t.hp <= 0) return;
    t.hp -= dmg;
    if (t.kind === 'tower' && t.tkind === 'king' && !t.active) {
      t.active = true;
      this.emit({ t: 'king', o: t.owner });
    }
  }

  waypoint(u, tx, ty) {
    const inBand = (y) => y > RIVER_TOP - 0.45 && y < RIVER_BOT + 0.45;
    const uTop = u.y < MID_Y, tTop = ty < MID_Y;
    if (!inBand(u.y) && uTop === tTop) return [tx, ty];
    // elegir puente
    let bx = BRIDGES[0], bc = Infinity;
    for (const b of BRIDGES) {
      const c = Math.abs(u.x - b) + Math.abs(b - tx) * 0.6;
      if (c < bc) { bc = c; bx = b; }
    }
    if (inBand(u.y)) {
      if (inBand(ty) && Math.abs(tx - u.x) < 2) return [tx, ty];
      return [bx, tTop ? RIVER_TOP - 0.6 : RIVER_BOT + 0.6];
    }
    if (!uTop) { // abajo → arriba
      if (Math.abs(u.x - bx) < 0.6 && u.y < RIVER_BOT + 1.4) return [bx, RIVER_TOP - 0.6];
      return [bx, RIVER_BOT + 0.55];
    } else {
      if (Math.abs(u.x - bx) < 0.6 && u.y > RIVER_TOP - 1.4) return [bx, RIVER_BOT + 0.6];
      return [bx, RIVER_TOP - 0.55];
    }
  }

  move(u, t) {
    let gx = t.x, gy = t.y;
    if (!u.air) [gx, gy] = this.waypoint(u, t.x, t.y);
    let dx = gx - u.x, dy = gy - u.y;
    const L = Math.hypot(dx, dy);
    if (L < 1e-4) return;
    dx /= L; dy /= L;
    if (!u.air) [dx, dy] = this.avoid(u, t, dx, dy, L);
    const step = Math.min(L, u.speed * DT);
    u.x += dx * step;
    u.y += dy * step;
  }

  // Rodear torres y edificios que se interponen en el camino
  avoid(u, target, dx, dy, L) {
    let best = null, bt = Infinity;
    for (const s of this.entities) {
      if (s.kind === 'unit' || s.hp <= 0 || s === target) continue;
      const vx = s.x - u.x, vy = s.y - u.y;
      const along = vx * dx + vy * dy;
      if (along <= 0 || along > Math.min(L, 3.2) + s.radius) continue;
      const perp = vx * dy - vy * dx;
      const clear = s.radius * 0.9 + u.radius + 0.15;
      if (Math.abs(perp) < clear && along < bt) { bt = along; best = { s, perp }; }
    }
    if (!best) return [dx, dy];
    const { s } = best;
    // tangente: rodea por el lado en el que ya está la unidad (o hacia el centro si va de frente)
    const vx = u.x - s.x, vy = u.y - s.y;
    const vl = Math.hypot(vx, vy) || 1;
    const a = vx * dx + vy * dy;
    let lx = vx - a * dx, ly = vy - a * dy;
    let ll = Math.hypot(lx, ly);
    if (ll < 0.08) {
      lx = -dy; ly = dx;
      if (lx * ((W / 2 - s.x) || 1) < 0) { lx = -lx; ly = -ly; }
      ll = 1;
    }
    lx /= ll; ly /= ll;
    let tx = -vy / vl, ty = vx / vl;
    if (tx * lx + ty * ly + tx * dx + ty * dy < 0) { tx = -tx; ty = -ty; }
    const nx = tx * 0.85 + dx * 0.15, ny = ty * 0.85 + dy * 0.15;
    const nl = Math.hypot(nx, ny) || 1;
    return [nx / nl, ny / nl];
  }

  updateProjectiles() {
    const keep = [];
    for (const p of this.projectiles) {
      p.t += DT;
      const t = this.get(p.tid);
      if (t && t.hp > 0) { p.tx = t.x; p.ty = t.y; }
      if (p.t < p.dur) { keep.push(p); continue; }
      if (p.splash > 0) {
        for (const e of this.entities) {
          if (e.hp <= 0 || e.owner === p.owner) continue;
          if (!canTarget({ owner: p.owner, targets: p.targets }, e)) continue;
          if (dist(p.tx, p.ty, e.x, e.y) <= p.splash + e.radius * 0.5) this.damage(e, p.dmg);
        }
        this.emit({ t: 'splash', x: p.tx, y: p.ty, r: p.splash, p: p.kind });
      } else if (t && t.hp > 0) {
        this.damage(t, p.dmg);
      }
    }
    this.projectiles = keep;
  }

  updateSpells() {
    const keep = [];
    for (const s of this.spells) {
      s.t += DT;
      if (s.t < s.dur) { keep.push(s); continue; }
      const sp = CARDS[s.card].spell;
      for (const e of this.entities) {
        if (e.hp <= 0 || e.owner === s.owner) continue;
        const d = dist(s.x, s.y, e.x, e.y);
        if (d > sp.radius + e.radius * 0.6) continue;
        this.damage(e, e.kind === 'tower' ? Math.round(sp.dmg * sp.towerMult) : sp.dmg);
        if (e.kind === 'unit' && e.mass < 10 && sp.knockback) {
          const L = d || 1;
          const k = sp.knockback * (1 - Math.min(1, d / (sp.radius + 1)) * 0.5);
          e.x += ((e.x - s.x) / L) * k * (d ? 1 : 0);
          e.y += ((e.y - s.y) / L) * k * (d ? 1 : 0) + (d ? 0 : (s.owner === 0 ? -k : k));
          e.locked = false;
        }
      }
      this.emit({ t: 'boom', x: s.x, y: s.y, r: sp.radius, c: s.card });
    }
    this.spells = keep;
  }

  resolveCollisions() {
    const units = this.entities.filter(e => e.kind === 'unit' && e.hp > 0);
    const solids = this.entities.filter(e => e.kind !== 'unit' && e.hp > 0);
    for (let it = 0; it < 2; it++) {
      for (let i = 0; i < units.length; i++) {
        const a = units[i];
        for (let j = i + 1; j < units.length; j++) {
          const b = units[j];
          if (a.air !== b.air) continue;
          let dx = b.x - a.x, dy = b.y - a.y;
          let d = Math.hypot(dx, dy);
          const min = (a.radius + b.radius) * 0.92;
          if (d >= min) continue;
          if (d < 1e-4) { dx = (a.id % 2 ? 1 : -1) * 0.01; dy = 0.01; d = Math.hypot(dx, dy); }
          const ov = min - d;
          const wa = b.mass / (a.mass + b.mass), wb = a.mass / (a.mass + b.mass);
          const nx = dx / d, ny = dy / d;
          a.x -= nx * ov * wa; a.y -= ny * ov * wa;
          b.x += nx * ov * wb; b.y += ny * ov * wb;
        }
      }
    }
    for (const u of units) {
      if (!u.air) {
        for (const s of solids) {
          const dx = u.x - s.x, dy = u.y - s.y;
          const d = Math.hypot(dx, dy);
          const min = u.radius + s.radius * 0.9;
          if (d < min) {
            const nx = d > 1e-4 ? dx / d : 0, ny = d > 1e-4 ? dy / d : (u.owner === 0 ? 1 : -1);
            u.x = s.x + nx * min; u.y = s.y + ny * min;
          }
        }
        // río: solo se cruza por los puentes
        if (u.y > RIVER_TOP && u.y < RIVER_BOT) {
          let bx = BRIDGES[0];
          for (const b of BRIDGES) if (Math.abs(u.x - b) < Math.abs(u.x - bx)) bx = b;
          if (Math.abs(u.x - bx) < BRIDGE_HALF + 0.25) {
            const lim = BRIDGE_HALF - 0.15;
            u.x = Math.min(bx + lim, Math.max(bx - lim, u.x));
          } else {
            u.y = u.y < MID_Y ? RIVER_TOP - 0.02 : RIVER_BOT + 0.02;
          }
        }
      }
      u.x = Math.min(W - u.radius * 0.6, Math.max(u.radius * 0.6, u.x));
      u.y = Math.min(H - u.radius * 0.6, Math.max(u.radius * 0.6, u.y));
    }
  }

  cleanup() {
    let removed = false;
    for (const e of this.entities) {
      if (e.hp > 0 || e.gone) continue;
      e.gone = true;
      e.hp = 0;
      removed = true;
      this.byId.delete(e.id);
      if (e.kind === 'tower') {
        this.emit({ t: 'tower', o: e.owner, i: e.tidx, x: e.x, y: e.y, king: e.tkind === 'king' ? 1 : 0 });
        const opp = 1 - e.owner;
        if (e.tkind === 'king') {
          this.crowns[opp] = 3;
          this.finish(opp);
        } else {
          this.crowns[opp] = Math.min(3, this.crowns[opp] + 1);
          const king = this.towers[e.owner][2];
          if (!king.active && king.hp > 0) { king.active = true; this.emit({ t: 'king', o: e.owner }); }
          if (this.phase === 'overtime') this.finish(opp);
        }
      } else {
        this.emit({ t: 'death', x: e.x, y: e.y, c: e.card, a: e.air ? 1 : 0, o: e.owner });
      }
    }
    if (removed) this.entities = this.entities.filter(e => e.hp > 0 || e.kind === 'tower');
  }

  updateClock() {
    if (this.phase === 'over') return;
    this.time -= DT;
    if (this.phase === 'normal' && this.time <= DOUBLE_AT) {
      this.phase = 'double';
      this.emit({ t: 'phase', ph: PH.double });
    }
    if (this.time <= 0) {
      if (this.phase !== 'overtime') {
        if (this.crowns[0] !== this.crowns[1]) return this.finish(this.crowns[0] > this.crowns[1] ? 0 : 1);
        this.phase = 'overtime';
        this.time = OVERTIME;
        this.emit({ t: 'phase', ph: PH.overtime });
      } else {
        // desempate: gana quien tenga la torre más débil con más vida
        const weakest = (p) => Math.min(...this.towers[p].map(t => Math.max(0, t.hp) / t.maxHp).filter(v => v > 0), 1);
        const a = weakest(0), b = weakest(1);
        this.finish(Math.abs(a - b) < 1e-6 ? 2 : a > b ? 0 : 1, 'tiebreak');
      }
    }
  }

  finish(w, r = '') {
    if (this.phase === 'over') return;
    this.phase = 'over';
    this.winner = w;
    this.emit({ t: 'end', w, r });
  }

  drainEvents() {
    const ev = this.events;
    this.events = [];
    return ev;
  }

  // Estado compacto para el render / la red
  snapshot(p) {
    const e = [];
    for (const u of this.entities) {
      if (u.kind === 'tower' || u.hp <= 0) continue;
      e.push([
        u.id, u.card, u.owner, Math.round(u.x * 20), Math.round(u.y * 20), Math.ceil(u.hp),
        Math.max(0, Math.round(u.deploy * 10)), Math.min(30, Math.round(u.atkT * 10)), u.targetId || 0,
      ]);
    }
    const tw = [], ka = [];
    for (const q of [0, 1]) for (const t of this.towers[q]) tw.push(Math.max(0, Math.ceil(t.hp)));
    for (const q of [0, 1]) ka.push(this.towers[q][2].active ? 1 : 0);
    return {
      t: 's', k: this.tick, tm: Math.max(0, Math.round(this.time * 10)), ph: PH[this.phase],
      c: this.crowns.slice(), el: Math.round(this.elixir[p] * 100), h: this.players[p].hand.slice(),
      n: this.players[p].queue[0], ack: this.lastSeq[p], e, tw, ka, w: this.winner,
    };
  }
}
