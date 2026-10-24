// Arena Duel — datos del juego (cartas, torres, constantes)

export const W = 18;            // ancho de la arena en casillas
export const H = 32;            // alto de la arena en casillas
export const RIVER_TOP = 15;    // el río ocupa y ∈ (15, 17)
export const RIVER_BOT = 17;
export const MID_Y = 16;
export const BRIDGES = [3.5, 14.5];
export const BRIDGE_HALF = 1.0;

export const TICK_RATE = 20;    // ticks de simulación por segundo
export const DT = 1 / TICK_RATE;

export const MATCH_TIME = 180;      // 3 minutos
export const DOUBLE_AT = 60;        // elixir x2 en el último minuto
export const OVERTIME = 60;         // muerte súbita
export const ELIXIR_MAX = 10;
export const ELIXIR_START = 5;
export const ELIXIR_RATE = 1 / 2.8; // elixir por segundo (x1)
export const DEPLOY_TIME = 1.0;

export const PROTOCOL = 'ad1';

// Velocidades en casillas/segundo
const SLOW = 0.8, MED = 1.15, FAST = 1.6, VFAST = 2.1;

// type: troop | spell | building
// targets: ground | both | buildings
export const CARDS = [
  {
    id: 'knight', name: 'Caballero', cost: 3, type: 'troop', count: 1,
    icon: '🤺', color: '#4f7cff',
    desc: 'Duro y valiente. Aguanta golpes y protege a los de atrás.',
    unit: { hp: 1450, dmg: 170, hitSpeed: 1.2, range: 0.7, sight: 5.5, speed: MED, radius: 0.5, mass: 6, targets: 'ground' },
  },
  {
    id: 'archers', name: 'Arqueras', cost: 3, type: 'troop', count: 2,
    icon: '🏹', unitIcon: '🧝‍♀️', color: '#3fb27f',
    desc: 'Dos tiradoras a distancia. Derriban voladores.',
    unit: { hp: 290, dmg: 95, hitSpeed: 1.0, range: 5, sight: 5.5, speed: MED, radius: 0.4, mass: 3, targets: 'both', proj: 'arrow', projSpeed: 14 },
  },
  {
    id: 'goblins', name: 'Duendes', cost: 2, type: 'troop', count: 3,
    icon: '👺', color: '#2fa84f',
    desc: 'Tres pillos rapidísimos. Baratos y molestos.',
    unit: { hp: 175, dmg: 100, hitSpeed: 1.0, range: 0.5, sight: 5.5, speed: VFAST, radius: 0.35, mass: 2, targets: 'ground' },
  },
  {
    id: 'golem', name: 'Gólem', cost: 5, type: 'troop', count: 1,
    icon: '🗿', color: '#8a7f73',
    desc: 'Montaña de piedra. Solo ataca edificios y torres.',
    unit: { hp: 3300, dmg: 220, hitSpeed: 1.5, range: 0.9, sight: 7, speed: SLOW, radius: 0.75, mass: 20, targets: 'buildings' },
  },
  {
    id: 'dragon', name: 'Dragoncito', cost: 4, type: 'troop', count: 1,
    icon: '🐉', color: '#e0703a',
    desc: 'Vuela y escupe fuego en área. Solo lo alcanzan tiradores.',
    unit: { hp: 950, dmg: 135, hitSpeed: 1.5, range: 3.5, sight: 5.5, speed: FAST, radius: 0.55, mass: 5, targets: 'both', air: true, splash: 1.2, proj: 'fire', projSpeed: 10 },
  },
  {
    id: 'wizard', name: 'Mago', cost: 5, type: 'troop', count: 1,
    icon: '🧙', color: '#9b5cff',
    desc: 'Lanza bolas mágicas que dañan en área. Frágil pero letal.',
    unit: { hp: 650, dmg: 240, hitSpeed: 1.4, range: 5.5, sight: 5.5, speed: MED, radius: 0.45, mass: 4, targets: 'both', splash: 1.5, proj: 'magic', projSpeed: 11 },
  },
  {
    id: 'fireball', name: 'Bola de fuego', cost: 4, type: 'spell',
    icon: '☄️', color: '#ff7a1a',
    desc: 'Cae en cualquier punto, quema todo en área y empuja tropas.',
    spell: { radius: 2.5, dmg: 600, towerMult: 0.35, knockback: 1.6, speed: 13 },
  },
  {
    id: 'ballista', name: 'Ballesta', cost: 3, type: 'building',
    icon: '🎯', color: '#b07a3c',
    desc: 'Defensa fija 30 s. Distrae y frena tropas terrestres.',
    unit: { hp: 950, dmg: 165, hitSpeed: 0.9, range: 5.5, sight: 5.5, speed: 0, radius: 0.85, mass: 999, targets: 'ground', lifetime: 30, proj: 'bolt', projSpeed: 16 },
  },
];

export const CARD_INDEX = Object.fromEntries(CARDS.map((c, i) => [c.id, i]));

// Torres. Jugador 0 abajo, jugador 1 arriba (simetría central).
export const TOWERS = {
  princess: { hp: 1900, dmg: 75, hitSpeed: 0.8, range: 7.0, radius: 1.45, proj: 'tower', projSpeed: 16 },
  king: { hp: 3200, dmg: 95, hitSpeed: 1.0, range: 7.0, radius: 1.9, proj: 'cannon', projSpeed: 13 },
};

// Posiciones del jugador 0 (abajo). Las del jugador 1 son (W-x, H-y).
export const TOWER_LAYOUT = [
  { kind: 'princess', x: 3.5, y: 25.5, lane: 0 },
  { kind: 'princess', x: 14.5, y: 25.5, lane: 1 },
  { kind: 'king', x: 9, y: 29, lane: -1 },
];

export const EMOTES = ['😂', '😡', '👍', '😭', '😱', '🤫'];

export const TROOP_SPEED_LABEL = (s) => s === 0 ? '—' : s <= SLOW ? 'Lenta' : s <= MED ? 'Media' : s <= FAST ? 'Rápida' : 'Muy rápida';
