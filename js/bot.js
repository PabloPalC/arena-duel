// Arena Duel — rival controlado por la máquina (modo práctica)
import { W, H, CARDS, CARD_INDEX, ELIXIR_RATE, ELIXIR_MAX } from './data.js';
import { mirror } from './sim.js';

const LEVELS = [
  // fácil: lento, despistado, sin combos
  { react: 1.9, push: 10, jitter: 1.8, smart: 0, ignoreSmall: 0 },
  // normal
  { react: 1.0, push: 8.5, jitter: 0.6, smart: 1, ignoreSmall: 300 },
  // difícil: rápido, combos tanque + apoyo, hechizos con cabeza
  { react: 0.45, push: 7.5, jitter: 0.2, smart: 2, ignoreSmall: 380, bonus: 0.2 },
];

const C = CARD_INDEX;
const RANGED = [C.archers, C.wizard, C.dragon];

export class Bot {
  constructor(game, p = 1, level = 1) {
    this.g = game;
    this.p = p;
    this.L = LEVELS[level] || LEVELS[1];
    this.cool = 2.5 + Math.random();
    this.push = null;
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
      // el Rey Negro hace un poco de trampa: recarga elixir un 20 % más rápido
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

    const enemies = [], mine = [];
    for (const e of g.entities) {
      if (e.kind === 'tower' || e.hp <= 0) continue;
      const [x, y] = this.rel(e.x, e.y);
      (e.owner === p ? mine : enemies).push({ e, x, y, card: e.card });
    }

    // 1) Bola de fuego: grupos valiosos o rematar torre
    if (L.smart >= 1 && has(C.fireball)) {
      let best = null, bv = 0;
      for (const a of enemies) {
        let v = 0;
        for (const b of enemies) {
          if (Math.hypot(a.x - b.x, a.y - b.y) <= 2.3) v += Math.min(CARDS[b.card].cost / (CARDS[b.card].count || 1), b.e.hp / 120);
        }
        if (v > bv) { bv = v; best = a; }
      }
      if (best && bv >= (L.smart >= 2 ? 4.5 : 6)) {
        if (this.tryPlay(C.fireball, best.x, best.y - (best.e.speed ? 0.6 : 0))) return;
      }
      if (L.smart >= 2) {
        for (const t of g.towers[1 - p]) {
          if (t.hp > 0 && t.hp <= 210) { const [x, y] = this.rel(t.x, t.y); if (this.tryPlay(C.fireball, x, y)) return; }
        }
      }
    }

    // 2) Defensa
    const threats = enemies.filter(a => a.y > 13.5).sort((a, b) => b.y - a.y);
    if (threats.length) {
      const total = threats.reduce((s, a) => s + a.e.hp, 0);
      if (total < L.ignoreSmall && el < 8) return; // que la torre se encargue
      const t = threats[0];
      const air = threats.some(a => a.e.air);
      const big = threats.find(a => a.card === C.golem);
      const swarm = threats.filter(a => a.card === C.goblins || a.card === C.archers).length >= 2;
      const laneX = t.x < W / 2 ? 3.5 : 14.5;
      let order;
      if (L.smart === 0) {
        order = [C.knight, C.goblins, C.archers, C.dragon, C.wizard, C.ballista, C.golem].sort(() => Math.random() - 0.5);
      } else {
        order = [];
        if (air) order.push(C.archers, C.wizard, C.dragon);
        if (big) order.push(C.ballista, C.goblins, C.knight, C.wizard, C.archers);
        if (swarm) order.push(C.wizard, C.dragon, C.knight);
        order.push(C.knight, C.goblins, C.archers, C.dragon, C.wizard, C.ballista);
      }
      for (const c of order) {
        if (!has(c)) continue;
        if (air && L.smart >= 1 && !RANGED.includes(c) && threats.every(a => a.e.air)) continue;
        const card = CARDS[c];
        let x, y;
        if (c === C.ballista) { x = W / 2 + (laneX < 9 ? -1 : 1); y = 21.5; }
        else if (c === C.golem) { x = laneX; y = 29; }
        else if (card.unit.proj) { x = laneX + (laneX < 9 ? 1.5 : -1.5); y = Math.min(28.5, Math.max(t.y, 18) + 3.5); }
        else {
          // traer al rival hacia el centro para que disparen las dos torres
          x = L.smart >= 2 ? t.x + (W / 2 - t.x) * 0.25 : t.x;
          y = Math.max(17.6, Math.min(28.5, t.y + (L.smart >= 2 ? 2.5 : 1.5)));
        }
        if (this.tryPlay(c, x, y)) return;
      }
      if (L.smart >= 1) return;
    }

    // 3) Apoyar un ataque en marcha (contraataque o empuje con gólem)
    const tank = mine.find(a => a.card === C.golem || a.card === C.knight);
    const pushing = mine.filter(a => a.y < 22 && a.card !== C.ballista && !a.e.deploy);
    if (L.smart >= 1 && pushing.length && tank) {
      const laneX = tank.x < W / 2 ? 3.5 : 14.5;
      const need = L.smart >= 2 ? 0 : 1;
      for (const c of [C.wizard, C.archers, C.dragon, C.goblins]) {
        if (has(c, need) && mine.filter(a => a.card === c).length === 0) {
          if (this.tryPlay(c, laneX, Math.max(18, tank.y + 2.5))) return;
        }
      }
    }

    // 4) Iniciar ataque
    if (el >= L.push) {
      const et = g.towers[1 - p];
      // carril de la torre rival más débil (en mis coordenadas)
      const lanes = et.slice(0, 2).map(t => ({ x: this.rel(t.x, t.y)[0], hp: t.hp > 0 ? t.hp : 9e9 }));
      lanes.sort((a, b) => a.hp - b.hp);
      const target = Math.random() < 0.75 ? lanes[0] : lanes[1];
      const laneX = target.x < W / 2 ? 3.5 : 14.5;
      if (L.smart >= 1 && has(C.golem) && el >= (L.smart >= 2 ? 8 : 9.5)) {
        if (this.tryPlay(C.golem, laneX, 30)) return;
      }
      if (L.smart >= 2 && has(C.knight) && el >= 6) {
        if (this.tryPlay(C.knight, laneX, 17.6)) {
          const sup = [C.archers, C.wizard, C.goblins].find(c => has(c));
          if (sup !== undefined) this.tryPlay(sup, laneX, 20);
          return;
        }
      }
      const opts = [C.knight, C.dragon, C.goblins, C.archers, C.wizard].filter(c => has(c));
      if (opts.length) {
        const c = opts[Math.floor(Math.random() * opts.length)];
        if (this.tryPlay(c, laneX, CARDS[c].unit.proj ? 19.5 : 17.6)) return;
      }
    }

    // 5) No desperdiciar elixir
    if (el >= 9.8) {
      const cheap = hand.filter(c => CARDS[c].type === 'troop').sort((a, b) => CARDS[a].cost - CARDS[b].cost)[0];
      if (cheap !== undefined) this.tryPlay(cheap, Math.random() < 0.5 ? 6 : 12, 29);
    }
  }
}
