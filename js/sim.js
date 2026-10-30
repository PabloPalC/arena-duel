// Arena Duel — simulación autoritativa (la ejecuta el anfitrión o el modo práctica)
import {
  W, H, RIVER_TOP, RIVER_BOT, MID_Y, BRIDGES, BRIDGE_HALF, DT,
  MATCH_TIME, DOUBLE_AT, OVERTIME, ELIXIR_MAX, ELIXIR_START, ELIXIR_RATE, DEPLOY_TIME,
  CARDS, UNITS, UNIT_INDEX, UNIT_KEYS, TOWERS, TOWER_LAYOUT, DEFAULT_DECK, validDeck,
} from './data.js';

const PH = { normal: 0, double: 1, overtime: 2, over: 3 };
export const PHASE_CODE = PH;
export const FLAG = { frozen: 1, slowed: 2, raged: 4, charging: 8, stunned: 16 };
const MAX_UNITS = 70; // por jugador

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

// Colocación de varias tropas de una misma carta alrededor del punto elegido
export function formation(n) {
  if (n <= 1) return [[0, 0]];
  const out = [];
  if (n <= 5) {
    const r = n === 2 ? 0.55 : n <= 4 ? 0.62 : 0.72;
    const a0 = n === 2 ? 0 : n === 3 ? -Math.PI / 2 : n === 4 ? Math.PI / 4 : -Math.PI / 2;
    for (let i = 0; i < n; i++) {
      const a = a0 + (i / n) * Math.PI * 2;
      out.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    return out;
  }
  const inner = Math.max(3, Math.floor(n / 3));
  for (let i = 0; i < inner; i++) {
    const a = (i / inner) * Math.PI * 2;
    out.push([Math.cos(a) * 0.55, Math.sin(a) * 0.55]);
  }
  const outer = n - inner;
  for (let i = 0; i < outer; i++) {
    const a = (i / outer) * Math.PI * 2 + 0.3;
    out.push([Math.cos(a) * 1.3, Math.sin(a) * 1.3]);
  }
  return out;
}

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
  if (a.targets === 'none') return false;
  if (a.targets === 'buildings') return t.kind !== 'unit';
  if (a.targets === 'ground') return !t.air;
  return true;
}

export class Game {
  constructor(opts = {}) {
    this.tick = 0;
    this.time = MATCH_TIME;
    this.phase = 'normal';
    this.crowns = [0, 0];
    this.elixir = [ELIXIR_START, ELIXIR_START];
    const decks = opts.decks || [DEFAULT_DECK, DEFAULT_DECK];
    this.decks = decks.map(d => (validDeck(d) ? d.slice() : DEFAULT_DECK.slice()));
    this.players = this.decks.map((d) => {
      const order = shuffle(d.slice());
      return { hand: order.slice(0, 4), queue: order.slice(4) };
    });
    this.entities = [];
    this.byId = new Map();
    this.projectiles = [];
    this.spells = [];
    this.zones = [];
    this.events = [];
    this.nextId = 10;
    this.nextProj = 1;
    this.winner = -1;
    this.lastSeq = [0, 0];
    this.towers = [[], []];
    this.unitCount = [0, 0];
    this.stats = [0, 1].map(() => ({ played: 0, elixirSpent: 0, towerDmg: 0, kills: 0 }));

    let tid = 1;
    for (const p of [0, 1]) {
      TOWER_LAYOUT.forEach((L, idx) => {
        const T = TOWERS[L.kind];
        const [x, y] = mirror(p, L.x, L.y);
        const t = this.add({
          id: tid++, owner: p, kind: 'tower', tkind: L.kind, tidx: idx, u: -1,
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
    e.slowT = 0; e.freezeT = 0; e.rageT = 0; e.stunT = 0; e.rageBoost = 1;
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
    if (!card || this.elixir[p] < card.cost - 1e-6) return false;
    if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
    [x, y] = card.type === 'spell' ? [Math.min(W, Math.max(0, x)), Math.min(H, Math.max(0, y))] : snapPos(x, y);
    if (!this.canPlace(p, cardIdx, x, y)) return false;

    this.elixir[p] -= card.cost;
    pl.queue.push(cardIdx);
    pl.hand[slot] = pl.queue.shift();
    if (seq) this.lastSeq[p] = Math.max(this.lastSeq[p], seq);
    this.stats[p].played++;
    this.stats[p].elixirSpent += card.cost;
    this.emit({ t: 'deploy', o: p, c: cardIdx, x, y });

    if (card.type === 'spell') this.castSpell(p, cardIdx, x, y);
    else {
      const f = p === 0 ? 1 : -1;
      for (const [ox, oy] of formation(card.count || 1)) this.spawnUnit(p, card.unit, x + ox * f, y + oy * f, DEPLOY_TIME);
    }
    return true;
  }

  spawnUnit(p, key, x, y, deploy = DEPLOY_TIME) {
    const u = UNITS[key];
    if (!u.building && this.unitCount[p] >= MAX_UNITS) return null;
    if (!u.building) this.unitCount[p]++;
    const r = u.radius;
    const e = this.add({
      id: this.nextId++, owner: p, kind: u.building ? 'building' : 'unit', u: UNIT_INDEX[key], def: u,
      x: Math.min(W - r * 0.6, Math.max(r * 0.6, x)), y: Math.min(H - r * 0.6, Math.max(r * 0.6, y)),
      hp: u.hp, maxHp: u.hp, radius: r, mass: u.mass, air: !!u.air,
      targets: u.targets, range: u.range, sight: u.sight, dmg: u.dmg, hitSpeed: u.hitSpeed,
      splash: u.splash || 0, proj: u.proj, projSpeed: u.projSpeed, speed: u.speed,
      lifetime: u.lifetime || 0, deploy, lane: x < W / 2 ? 0 : 1,
    });
    // en el río solo pueden quedarse los voladores
    if (!e.air && e.y > RIVER_TOP && e.y < RIVER_BOT && !u.jump) e.y = e.y < MID_Y ? RIVER_TOP - 0.05 : RIVER_BOT + 0.05;
    if (u.spawn) e.spawnT = u.spawn.first ?? u.spawn.every;
    if (u.charge) { e.run = 0; e.charging = false; }
    if (u.ramp) { e.rampT = 0; e.rampTarget = 0; e.stage = 0; }
    return e;
  }

  // ---------- Hechizos ----------
  castSpell(p, cardIdx, x, y) {
    const sp = CARDS[cardIdx].spell;
    const king = this.towers[p][2];
    let dur = sp.delay ?? 0.2, fx = x, fy = y;
    if (sp.speed) {
      fx = king.x; fy = king.y;
      dur = Math.max(0.45, dist(fx, fy, x, y) / sp.speed);
    }
    this.spells.push({ owner: p, card: cardIdx, sp, x, y, t: 0, dur });
    this.emit({ t: 'spell', o: p, c: cardIdx, fx, fy, x, y, dur });
  }

  resolveSpell(s) {
    const sp = s.sp, p = s.owner;
    const inArea = (e, extra = 0.6) => e.hp > 0 && e.owner !== p && dist(s.x, s.y, e.x, e.y) <= sp.radius + e.radius * extra;
    const hurt = (e, dmg) => this.damage(e, e.kind === 'tower' ? Math.round(dmg * sp.towerMult) : dmg, p);
    switch (sp.kind) {
      case 'fireball':
      case 'arrows': {
        for (const e of this.entities) {
          if (!inArea(e)) continue;
          hurt(e, sp.dmg);
          if (sp.knockback && e.kind === 'unit' && e.mass < 10) {
            const d = dist(s.x, s.y, e.x, e.y);
            const k = sp.knockback * (1 - Math.min(1, d / (sp.radius + 1)) * 0.5);
            if (d > 0.01) { e.x += ((e.x - s.x) / d) * k; e.y += ((e.y - s.y) / d) * k; }
            else e.y += p === 0 ? -k : k;
            e.locked = false;
            if (e.charging) { e.charging = false; e.run = 0; }
          }
        }
        this.emit({ t: sp.kind === 'fireball' ? 'boom' : 'volley', x: s.x, y: s.y, r: sp.radius });
        break;
      }
      case 'lightning': {
        const cand = this.entities.filter(e => inArea(e, 0.3)).sort((a, b) => b.hp - a.hp).slice(0, sp.hits);
        const hits = [];
        for (const e of cand) {
          hurt(e, sp.dmg);
          this.stun(e, sp.stun);
          hits.push([Math.round(e.x * 10) / 10, Math.round(e.y * 10) / 10, e.air ? 1 : 0, e.kind === 'tower' ? 1 : 0]);
        }
        this.emit({ t: 'zap', x: s.x, y: s.y, r: sp.radius, hits });
        break;
      }
      case 'freeze': {
        for (const e of this.entities) {
          if (!inArea(e)) continue;
          hurt(e, sp.dmg);
          e.freezeT = Math.max(e.freezeT, sp.freeze);
          if (e.charging) { e.charging = false; e.run = 0; }
          if (e.rampTarget) { e.rampT = 0; e.stage = 0; }
        }
        this.emit({ t: 'freeze', x: s.x, y: s.y, r: sp.radius, d: sp.freeze });
        break;
      }
      case 'rage': {
        this.zones.push({ owner: p, x: s.x, y: s.y, r: sp.radius, t: sp.duration, boost: sp.boost });
        this.emit({ t: 'rage', o: p, x: s.x, y: s.y, r: sp.radius, d: sp.duration });
        break;
      }
    }
  }

  stun(e, t) {
    e.stunT = Math.max(e.stunT, t);
    e.cd = Math.max(e.cd, e.hitSpeed * 0.5);
    e.locked = false;
    if (e.charging) { e.charging = false; e.run = 0; }
    if (e.rampTarget) { e.rampT = 0; e.stage = 0; }
  }

  // multiplicador por estados (congelado, ralentizado, furia)
  mult(e) {
    if (e.freezeT > 0 || e.stunT > 0) return 0;
    let m = 1;
    if (e.slowT > 0) m *= 0.65;
    if (e.rageT > 0) m *= e.rageBoost;
    return m;
  }

  // ---------- Bucle ----------
  step() {
    if (this.phase === 'over') return;
    this.tick++;
    const mult = this.phase === 'normal' ? 1 : this.phase === 'double' ? 2 : 3;
    for (const p of [0, 1]) this.elixir[p] = Math.min(ELIXIR_MAX, this.elixir[p] + ELIXIR_RATE * mult * DT);

    // zonas de furia
    if (this.zones.length) {
      for (const z of this.zones) {
        z.t -= DT;
        for (const e of this.entities) {
          if (e.owner !== z.owner || e.hp <= 0 || e.kind === 'tower') continue;
          if (dist(z.x, z.y, e.x, e.y) <= z.r + e.radius * 0.5) { e.rageT = 2; e.rageBoost = z.boost; }
        }
      }
      this.zones = this.zones.filter(z => z.t > 0);
    }

    for (const e of this.entities) {
      if (e.hp <= 0) continue;
      if (e.deploy > 0) { e.deploy = Math.max(0, e.deploy - DT); continue; }
      if (e.slowT > 0) e.slowT -= DT;
      if (e.rageT > 0) e.rageT -= DT;
      if (e.stunT > 0) e.stunT -= DT;
      if (e.kind === 'building' && e.lifetime) e.hp -= (e.maxHp / e.lifetime) * DT;
      if (e.freezeT > 0) { e.freezeT -= DT; continue; }
      const m = this.mult(e);
      e.atkT += DT;
      if (e.cd > 0) e.cd -= DT * m;
      if (e.kind === 'tower' && !e.active) continue;
      if (e.def && e.def.spawn) this.spawner(e, m);
      if (m === 0) continue;
      if (e.targets !== 'none') this.think(e, m);
    }

    this.updateProjectiles();
    this.updateSpells();
    this.resolveCollisions();
    this.cleanup();
    this.updateClock();
  }

  spawner(e, m) {
    if (m === 0) return;
    e.spawnT -= DT * m;
    if (e.spawnT > 0) return;
    const sp = e.def.spawn;
    e.spawnT = sp.every;
    const f = e.owner === 0 ? -1 : 1; // hacia el rival
    const offs = sp.count === 1 ? [[0, 1.1]] : formation(sp.count).map(([x, y]) => [x * 1.3, y * 1.3 + 0.2]);
    for (const [ox, oy] of offs) {
      const s = this.spawnUnit(e.owner, sp.unit, e.x + ox * f, e.y + oy * f, 0.35);
      if (s) this.emit({ t: 'spawn', o: e.owner, u: s.u, x: s.x, y: s.y });
    }
  }

  defaultTarget(u) {
    const enemy = this.towers[1 - u.owner];
    if (u.targets === 'buildings') {
      // va al edificio más cercano (torre o edificio)
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

  think(e, m) {
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
      if (e.targetId !== t.id && e.rampTarget) { e.rampT = 0; e.stage = 0; e.rampTarget = 0; }
      e.targetId = t.id;
    }

    const d = edge(e, t);
    if (d <= e.range) {
      if (!e.inRange) { e.inRange = true; e.cd = Math.max(e.cd, e.hitSpeed * (e.charging ? 0.15 : 0.45)); }
      e.locked = true;
      if (e.cd <= 0) this.attack(e, t);
    } else {
      e.inRange = false;
      if (e.speed > 0) this.move(e, t, m);
    }
  }

  attack(e, t) {
    e.cd = e.hitSpeed;
    e.atkT = 0;
    let dmg = e.dmg;
    if (e.charging) { dmg *= e.def.charge.dmg; e.charging = false; e.run = 0; this.emit({ t: 'lance', x: t.x, y: t.y }); }
    else if (e.def && e.def.charge) e.run = 0;
    if (e.def && e.def.ramp) {
      if (e.rampTarget !== t.id) { e.rampTarget = t.id; e.rampT = 0; }
      else e.rampT += e.hitSpeed;
      e.stage = Math.min(e.def.ramp.length - 1, Math.floor(e.rampT / e.def.rampEvery));
      this.damage(t, dmg * e.def.ramp[e.stage], e.owner);
      return;
    }
    if (e.def && e.def.spin) {
      for (const o of this.entities) {
        if (!canTarget(e, o)) continue;
        if (edge(e, o) <= e.def.spin - e.radius) this.damage(o, dmg, e.owner);
      }
      this.emit({ t: 'spin', x: e.x, y: e.y, r: e.def.spin });
      return;
    }
    if (!e.proj) {
      this.damage(t, dmg, e.owner);
      this.emit({ t: 'hit', x: t.x, y: t.y, a: t.air ? 1 : 0, u: e.u, tw: t.kind === 'tower' ? 1 : 0 });
      return;
    }
    const sx = e.x, sy = e.y;
    const dur = Math.max(0.12, dist(sx, sy, t.x, t.y) / e.projSpeed);
    const pr = {
      id: this.nextProj++, owner: e.owner, kind: e.proj, tid: t.id, x0: sx, y0: sy, tx: t.x, ty: t.y,
      t: 0, dur, dmg, splash: e.splash || 0, targets: e.targets, slow: e.def ? e.def.slow || 0 : 0,
    };
    this.projectiles.push(pr);
    this.emit({ t: 'proj', p: pr.kind, fx: sx, fy: sy, fa: e.air ? 1 : 0, ft: e.kind === 'tower' ? e.id : 0, tid: t.id, tx: t.x, ty: t.y, dur, o: e.owner });
  }

  damage(t, dmg, from = -1) {
    if (t.hp <= 0) return;
    const before = t.hp;
    t.hp -= dmg;
    if (t.kind === 'tower' && from >= 0) this.stats[from].towerDmg += Math.min(before, dmg);
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

  move(u, t, m) {
    let gx = t.x, gy = t.y;
    const jump = u.def && u.def.jump;
    if (!u.air && !jump) [gx, gy] = this.waypoint(u, t.x, t.y);
    let dx = gx - u.x, dy = gy - u.y;
    const L = Math.hypot(dx, dy);
    if (L < 1e-4) return;
    dx /= L; dy /= L;
    if (!u.air) [dx, dy] = this.avoid(u, t, dx, dy, L);
    let sp = u.speed * m;
    if (u.def && u.def.charge) {
      if (u.charging) sp *= u.def.charge.speed;
      else {
        u.run += u.speed * m * DT;
        if (u.run >= u.def.charge.dist) { u.charging = true; this.emit({ t: 'charge', x: u.x, y: u.y }); }
      }
    }
    const step = Math.min(L, sp * DT);
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
          if (dist(p.tx, p.ty, e.x, e.y) <= p.splash + e.radius * 0.5) {
            this.damage(e, p.dmg, p.owner);
            if (p.slow) e.slowT = Math.max(e.slowT, p.slow);
          }
        }
        this.emit({ t: 'splash', x: p.tx, y: p.ty, r: p.splash, p: p.kind });
      } else if (t && t.hp > 0) {
        this.damage(t, p.dmg, p.owner);
        if (p.slow && t.kind !== 'tower') t.slowT = Math.max(t.slowT, p.slow);
      }
    }
    this.projectiles = keep;
  }

  updateSpells() {
    if (!this.spells.length) return;
    const keep = [];
    for (const s of this.spells) {
      s.t += DT;
      if (s.t < s.dur) { keep.push(s); continue; }
      this.resolveSpell(s);
    }
    this.spells = keep;
  }

  resolveCollisions() {
    const units = this.entities.filter(e => e.kind === 'unit' && e.hp > 0);
    const solids = this.entities.filter(e => e.kind !== 'unit' && e.hp > 0);
    const n = units.length;
    for (let it = 0; it < 2; it++) {
      for (let i = 0; i < n; i++) {
        const a = units[i];
        for (let j = i + 1; j < n; j++) {
          const b = units[j];
          if (a.air !== b.air) continue;
          let dx = b.x - a.x, dy = b.y - a.y;
          const min = (a.radius + b.radius) * 0.92;
          if (dx > min || dx < -min || dy > min || dy < -min) continue;
          let d = Math.hypot(dx, dy);
          if (d >= min) continue;
          if (d < 1e-4) { dx = (a.id % 2 ? 1 : -1) * 0.01; dy = 0.01; d = Math.hypot(dx, dy); }
          const ov = min - d;
          // los que están desplegándose o congelados empujan menos
          const ma = a.deploy > 0 || a.freezeT > 0 ? a.mass * 3 : a.mass;
          const mb = b.deploy > 0 || b.freezeT > 0 ? b.mass * 3 : b.mass;
          const wa = mb / (ma + mb), wb = ma / (ma + mb);
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
          const min = u.radius + s.radius * 0.9;
          if (dx > min || dx < -min || dy > min || dy < -min) continue;
          const d = Math.hypot(dx, dy);
          if (d < min) {
            const nx = d > 1e-4 ? dx / d : 0, ny = d > 1e-4 ? dy / d : (u.owner === 0 ? 1 : -1);
            u.x = s.x + nx * min; u.y = s.y + ny * min;
          }
        }
        // río: solo se cruza por los puentes (salvo los que saltan)
        if (u.y > RIVER_TOP && u.y < RIVER_BOT && !(u.def && u.def.jump)) {
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
    const dead = [];
    for (const e of this.entities) {
      if (e.hp > 0 || e.gone) continue;
      e.gone = true;
      e.hp = 0;
      removed = true;
      this.byId.delete(e.id);
      dead.push(e);
    }
    if (!removed) return;
    this.entities = this.entities.filter(e => e.hp > 0 || e.kind === 'tower');
    for (const e of dead) {
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
        continue;
      }
      if (e.kind === 'unit') this.unitCount[e.owner] = Math.max(0, this.unitCount[e.owner] - 1);
      this.stats[1 - e.owner].kills++;
      this.emit({ t: 'death', x: e.x, y: e.y, u: e.u, a: e.air ? 1 : 0, o: e.owner });
      const d = e.def;
      if (!d) continue;
      if (d.deathDamage) {
        for (const o of this.entities) {
          if (o.hp <= 0 || o.owner === e.owner || o.air) continue;
          if (dist(e.x, e.y, o.x, o.y) <= d.deathDamage.radius + o.radius * 0.5) this.damage(o, d.deathDamage.dmg, e.owner);
        }
        this.emit({ t: 'quake', x: e.x, y: e.y, r: d.deathDamage.radius });
      }
      if (d.deathSpawn) {
        const f = e.owner === 0 ? 1 : -1;
        for (const [ox, oy] of formation(d.deathSpawn.count)) {
          const s = this.spawnUnit(e.owner, d.deathSpawn.unit, e.x + ox * f * 1.2, e.y + oy * f * 1.2, 0.3);
          if (s) this.emit({ t: 'spawn', o: e.owner, u: s.u, x: s.x, y: s.y });
        }
      }
    }
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
        if (this.crowns[0] !== this.crowns[1]) return this.finish(this.crowns[0] > this.crowns[1] ? 0 : 1, 'time');
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
  // e: [id, unidad, dueño, x*20, y*20, vida, despliegue*10, tiempoAtaque*10, objetivo, flags, fase]
  snapshot(p) {
    const e = [];
    for (const u of this.entities) {
      if (u.kind === 'tower' || u.hp <= 0) continue;
      let fl = 0;
      if (u.freezeT > 0) fl |= FLAG.frozen;
      if (u.slowT > 0) fl |= FLAG.slowed;
      if (u.rageT > 0) fl |= FLAG.raged;
      if (u.charging) fl |= FLAG.charging;
      if (u.stunT > 0) fl |= FLAG.stunned;
      e.push([
        u.id, u.u, u.owner, Math.round(u.x * 20), Math.round(u.y * 20), Math.ceil(u.hp),
        Math.max(0, Math.round(u.deploy * 10)), Math.min(30, Math.round(u.atkT * 10)), u.targetId || 0, fl, u.stage || 0,
      ]);
    }
    const tw = [], ka = [], tf = [];
    for (const q of [0, 1]) for (const t of this.towers[q]) { tw.push(Math.max(0, Math.ceil(t.hp))); tf.push(t.freezeT > 0 ? 1 : 0); }
    for (const q of [0, 1]) ka.push(this.towers[q][2].active ? 1 : 0);
    return {
      t: 's', k: this.tick, tm: Math.max(0, Math.round(this.time * 10)), ph: PH[this.phase],
      c: this.crowns.slice(), el: Math.round(this.elixir[p] * 100), h: this.players[p].hand.slice(),
      n: this.players[p].queue[0], ack: this.lastSeq[p], e, tw, ka, tf, w: this.winner,
    };
  }
}

export { UNIT_KEYS };
