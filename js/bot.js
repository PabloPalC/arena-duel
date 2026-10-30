// Arena Duel — rival controlado por la máquina (modo práctica)
// Juega con cualquier mazo: clasifica cada carta por su papel y decide por puntuación.
import { W, H, CARDS, UNITS, CARD_INDEX, ELIXIR_RATE, ELIXIR_MAX } from './data.js';
import { mirror } from './sim.js';

const LEVELS = [
  // Escudero: lento, despistado, sin hechizos con cabeza
  { react: 1.9, push: 10, jitter: 1.8, smart: 0, ignoreSmall: 0, bonus: 0 },
  // Caballero
  { react: 1.0, push: 8.5, jitter: 0.6, smart: 1, ignoreSmall: 300, bonus: 0 },
  // Rey Negro: rápido, combos, y recarga un 20 % más de elixir
  { react: 0.45, push: 7.5, jitter: 0.2, smart: 2, ignoreSmall: 380, bonus: 0.2 },
];

const ids = (...a) => a.map(id => CARD_INDEX[id]);
export const BOT_DECKS = [
  ids('knight', 'archers', 'goblins', 'skeletons', 'giant', 'fireball', 'arrows', 'ballista'),
  ids('knight', 'arquebusier', 'bats', 'wolfrider', 'pyromancer', 'fireball', 'arrows', 'crypt'),
  ids('golem', 'necromancer', 'draco', 'berserker', 'frost', 'lightning', 'arrows', 'rage'),
  ids('lancer', 'automaton', 'legion', 'grenadier', 'archers', 'freeze', 'fireball', 'arcane'),
  ids('giant', 'barbarians', 'draco', 'goblins', 'arquebusier', 'lightning', 'arrows', 'crypt'),
];

// Perfil de cada carta (se calcula una vez)
const PROFILE = CARDS.map((c) => {
  if (c.type === 'spell') return { spell: c.spell.kind, cost: c.cost };
  const u = UNITS[c.unit];
  const n = c.count || 1;
  const hpTotal = u.hp * n;
  const dps = (u.dmg / u.hitSpeed) * n * (u.ramp ? 6 : 1);
  return {
    cost: c.cost, n, u, hpTotal, dps,
    air: !!u.air,
    hitsAir: u.targets === 'both',
    building: !!u.building,
    winCon: u.targets === 'buildings',
    tank: hpTotal >= 1800,
    swarm: n >= 3,
    splash: !!(u.splash || u.spin),
    ranged: (u.range || 0) >= 3,
    spawner: !!u.spawn && !!u.building,
  };
});

export class Bot {
  constructor(game, p = 1, level = 1) {
    this.g = game;
    this.p = p;
    this.L = LEVELS[level] || LEVELS[1];
    this.cool = 2.5 + Math.random();
  }

  // Coordenadas relativas: el bot "juega abajo" como el jugador 0
  rel(x, y) { return mirror(this.p, x, y); }

  tryPlay(cardIdx, rx, ry) {
    const g = this.g, p = this.p;
    const slot = g.hand(p).indexOf(cardIdx);
    if (slot < 0 || g.elixir[p] < CARDS[cardIdx].cost) return false;
    const spell = CARDS[cardIdx].type === 'spell';
    const j = spell ? 0 : this.L.jitter;
    for (let tries = 0; tries < 6; tries++) {
      let x = rx + (Math.random() - 0.5) * j * 2;
      let y = ry + (Math.random() - 0.5) * j;
      if (!spell) {
        x = Math.min(W - 0.6, Math.max(0.6, x));
        y = Math.min(H - 0.6, Math.max(17.6, y));
      }
      const [ax, ay] = this.rel(x, y);
      if (g.play(p, slot, cardIdx, ax, ay)) return true;
    }
    return false;
  }

  update(dt) {
    const g = this.g;
    if (g.phase === 'over') return;
    if (this.L.bonus) {
      const mult = g.phase === 'normal' ? 1 : g.phase === 'double' ? 2 : 3;
      g.elixir[this.p] = Math.min(ELIXIR_MAX, g.elixir[this.p] + ELIXIR_RATE * mult * this.L.bonus * dt);
    }
    this.cool -= dt;
    if (this.cool > 0) return;
    this.cool = this.L.react * (0.6 + Math.random() * 0.8);
    this.think();
  }

  think() {
    const g = this.g, p = this.p, L = this.L;
    const el = g.elixir[p], hand = g.hand(p);
    const has = (c, extra = 0) => hand.includes(c) && el >= CARDS[c].cost + extra;
    const avail = hand.filter(c => el >= CARDS[c].cost);

    const enemies = [], mine = [];
    for (const e of g.entities) {
      if (e.kind === 'tower' || e.hp <= 0) continue;
      const [x, y] = this.rel(e.x, e.y);
      (e.owner === p ? mine : enemies).push({ e, x, y });
    }
    const ucost = (e) => (e.def ? (CARDS.find(c => c.unit === e.def.key) || { cost: 2 }).cost / Math.max(1, (CARDS.find(c => c.unit === e.def.key) || { count: 1 }).count) : 1);

    // 1) Hechizos
    if (L.smart >= 1) {
      for (const c of avail) {
        const pr = PROFILE[c];
        if (!pr.spell) continue;
        const sp = CARDS[c].spell;
        if (pr.spell === 'fireball' || pr.spell === 'arrows' || pr.spell === 'lightning') {
          let best = null, bv = 0;
          for (const a of enemies) {
            let v = 0;
            const inR = enemies.filter(b => Math.hypot(a.x - b.x, a.y - b.y) <= sp.radius * 0.9);
            if (pr.spell === 'lightning') {
              inR.sort((m, n) => n.e.hp - m.e.hp);
              for (const b of inR.slice(0, 3)) v += Math.min(ucost(b.e) * 1.3, b.e.hp / 250);
            } else {
              for (const b of inR) v += Math.min(ucost(b.e), b.e.hp / (sp.dmg * 0.6)) * (b.e.hp <= sp.dmg ? 1.2 : 0.7);
            }
            if (v > bv) { bv = v; best = a; }
          }
          const need = CARDS[c].cost + (L.smart >= 2 ? 0.5 : 1.5);
          if (best && bv >= need) {
            const lead = best.e.speed && !best.e.inRange ? 0.7 : 0;
            if (this.tryPlay(c, best.x, best.y - lead)) return;
          }
          if (L.smart >= 2 && sp.dmg) {
            for (const t of g.towers[1 - p]) {
              if (t.hp > 0 && t.hp <= sp.dmg * sp.towerMult) {
                const [x, y] = this.rel(t.x, t.y);
                if (this.tryPlay(c, x, y)) return;
              }
            }
          }
        } else if (pr.spell === 'freeze') {
          // congelar defensores (y la torre) cuando mi ataque llega a la torre
          const attackers = mine.filter(a => a.y < 10.5 && !(a.e.deploy > 0));
          const atkHp = attackers.reduce((s, a) => s + a.e.hp, 0);
          if (attackers.length && atkHp >= 1000) {
            const lead = attackers.sort((a, b) => a.y - b.y)[0];
            if (this.tryPlay(c, lead.x, lead.y - 1.2)) return;
          }
          // o frenar en seco un ataque gordo contra mi torre
          const danger = enemies.filter(b => b.y > 20);
          if (danger.reduce((s, b) => s + b.e.hp, 0) >= 2500 && danger.length >= 2) {
            const cx = danger.reduce((s, b) => s + b.x, 0) / danger.length;
            const cy = danger.reduce((s, b) => s + b.y, 0) / danger.length;
            if (this.tryPlay(c, cx, cy)) return;
          }
        } else if (pr.spell === 'rage') {
          const pushing = mine.filter(a => a.y < 19 && !(a.e.deploy > 0) && a.e.kind === 'unit');
          const val = pushing.reduce((s, a) => s + a.e.hp, 0);
          if (pushing.length >= 2 && val >= 1500) {
            const cx = pushing.reduce((s, a) => s + a.x, 0) / pushing.length;
            const cy = pushing.reduce((s, a) => s + a.y, 0) / pushing.length - 1;
            if (this.tryPlay(c, cx, cy)) return;
          }
        }
      }
    }

    // 2) Defensa
    const threats = enemies.filter(a => a.y > 13.5).sort((a, b) => b.y - a.y);
    if (threats.length) {
      const total = threats.reduce((s, a) => s + a.e.hp, 0);
      if (total < L.ignoreSmall && el < 8) return; // que la torre se encargue
      const t = threats[0];
      const air = threats.some(a => a.e.air), allAir = threats.every(a => a.e.air);
      const big = threats.some(a => a.e.hp >= 1800);
      const winCon = threats.some(a => a.e.targets === 'buildings');
      const swarm = threats.length >= 3;
      let best = -1, bs = -1e9;
      for (const c of avail) {
        const pr = PROFILE[c];
        if (pr.spell) continue;
        if (allAir && !pr.hitsAir) continue;
        let s = 10 - pr.cost * 1.2;
        if (L.smart === 0) s = Math.random() * 10;
        else {
          if (air && pr.hitsAir) s += 6;
          if (swarm && pr.splash) s += 6;
          if (swarm && pr.n === 1 && !pr.splash && pr.hpTotal < 1200) s -= 4;
          if (big && (pr.dps > 250 || pr.swarm)) s += 5;
          if (winCon && pr.building) s += 6;
          if (winCon && pr.swarm) s += 3;
          if (pr.winCon) s -= 8; // un gigante no defiende
          if (pr.spawner) s -= 2;
        }
        if (s > bs) { bs = s; best = c; }
      }
      if (best >= 0) {
        const pr = PROFILE[best];
        const laneX = t.x < W / 2 ? 3.5 : 14.5;
        let x, y;
        if (pr.building) { x = W / 2 + (laneX < 9 ? -1 : 1); y = 21.5; }
        else if (pr.winCon) { x = laneX; y = 29; }
        else if (pr.ranged) { x = laneX + (laneX < 9 ? 1.5 : -1.5); y = Math.min(28.5, Math.max(t.y, 18) + 3.5); }
        else {
          // traer al rival hacia el centro para que disparen las dos torres
          x = L.smart >= 2 ? t.x + (W / 2 - t.x) * 0.25 : t.x;
          y = Math.max(17.6, Math.min(28.5, t.y + (L.smart >= 2 ? 2.5 : 1.5)));
        }
        if (this.tryPlay(best, x, y)) return;
      }
      if (L.smart >= 1) return;
    }

    // 3) Apoyar un ataque en marcha
    const tank = mine.find(a => PROFILE[CARDS.findIndex(c => c.unit === a.e.def?.key)]?.tank || a.e.targets === 'buildings');
    if (L.smart >= 1 && tank && !(tank.e.deploy > 0)) {
      const laneX = tank.x < W / 2 ? 3.5 : 14.5;
      const need = L.smart >= 2 ? 0 : 1;
      const support = avail.filter(c => { const pr = PROFILE[c]; return !pr.spell && !pr.winCon && !pr.building && (pr.ranged || pr.splash || pr.swarm); });
      for (const c of support) {
        if (!has(c, need)) continue;
        const unitKey = CARDS[c].unit;
        if (mine.some(a => a.e.def && a.e.def.key === unitKey)) continue;
        if (this.tryPlay(c, laneX, Math.max(18, tank.y + 2.5))) return;
      }
    }

    // 4) Edificio generador cuando sobra elixir
    if (L.smart >= 1 && el >= 7.5 && !mine.some(a => a.e.kind === 'building')) {
      const sp = avail.find(c => PROFILE[c].spawner);
      if (sp !== undefined && this.tryPlay(sp, W / 2 + (Math.random() < 0.5 ? -2 : 2), 23)) return;
    }

    // 5) Iniciar ataque
    if (el >= L.push) {
      const et = g.towers[1 - p];
      const lanes = et.slice(0, 2).map(t => ({ x: this.rel(t.x, t.y)[0], hp: t.hp > 0 ? t.hp : 9e9 }));
      lanes.sort((a, b) => a.hp - b.hp);
      const target = Math.random() < 0.75 ? lanes[0] : lanes[1];
      const laneX = target.x < W / 2 ? 3.5 : 14.5;
      const wc = avail.filter(c => PROFILE[c].winCon).sort((a, b) => CARDS[b].cost - CARDS[a].cost);
      for (const c of wc) {
        const heavy = CARDS[c].cost >= 6;
        if (heavy && el < (L.smart >= 2 ? 8.5 : 9.8)) continue;
        const fast = PROFILE[c].u.speed >= 2;
        if (this.tryPlay(c, laneX, fast ? 17.6 : 30)) return;
      }
      const opts = avail.filter(c => { const pr = PROFILE[c]; return !pr.spell && !pr.building; });
      if (opts.length) {
        const c = opts[Math.floor(Math.random() * opts.length)];
        if (this.tryPlay(c, laneX, PROFILE[c].ranged ? 19.5 : 17.6)) return;
      }
    }

    // 6) No desperdiciar elixir
    if (el >= 9.8) {
      const cheap = avail.filter(c => !PROFILE[c].spell).sort((a, b) => CARDS[a].cost - CARDS[b].cost)[0];
      if (cheap !== undefined) this.tryPlay(cheap, Math.random() < 0.5 ? 6 : 12, PROFILE[cheap].building ? 22 : 29);
    }
  }
}
