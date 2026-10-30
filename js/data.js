// Arena Duel — datos del juego: cartas, unidades, torres y constantes

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
export const DECK_SIZE = 8;

export const PROTOCOL = 'ad2';

// Velocidades en casillas/segundo
export const SPEED = { slow: 0.8, med: 1.15, fast: 1.6, vfast: 2.1 };
const { slow: SLOW, med: MED, fast: FAST, vfast: VFAST } = SPEED;

export const RARITY = {
  comun: { name: 'Común', color: '#8fb4d9', dark: '#3c5a7a' },
  especial: { name: 'Especial', color: '#ff9f3a', dark: '#8a4a0c' },
  epica: { name: 'Épica', color: '#c46bff', dark: '#5b1d8a' },
  legendaria: { name: 'Legendaria', color: '#5ff0d6', dark: '#0f6e60' },
};

// ---------- Unidades (tropas, edificios y fichas que salen de otras cartas) ----------
// targets: ground | both | buildings
// proj: tipo de proyectil (si ataca a distancia)
export const UNITS = {
  knight: { name: 'Caballero', icon: '🤺', hp: 1450, dmg: 170, hitSpeed: 1.2, range: 0.7, speed: MED, radius: 0.5, mass: 6, targets: 'ground' },
  archer: { name: 'Arquera', icon: '🏹', hp: 260, dmg: 90, hitSpeed: 1.0, range: 5, speed: MED, radius: 0.4, mass: 3, targets: 'both', proj: 'arrow', projSpeed: 14 },
  goblin: { name: 'Duende', icon: '👺', hp: 185, dmg: 105, hitSpeed: 1.0, range: 0.5, speed: VFAST, radius: 0.35, mass: 2, targets: 'ground' },
  skeleton: { name: 'Esqueleto', icon: '💀', hp: 85, dmg: 75, hitSpeed: 1.0, range: 0.5, speed: FAST, radius: 0.3, mass: 1, targets: 'ground' },
  bat: { name: 'Murciélago', icon: '🦇', hp: 80, dmg: 70, hitSpeed: 1.1, range: 0.6, speed: VFAST, radius: 0.3, mass: 1, targets: 'both', air: true },
  grenadier: { name: 'Granadero', icon: '💣', hp: 420, dmg: 180, hitSpeed: 1.8, range: 4.5, speed: MED, radius: 0.45, mass: 4, targets: 'ground', splash: 1.4, proj: 'bomb', projSpeed: 8 },
  barbarian: { name: 'Bárbaro', icon: '🪓', hp: 680, dmg: 145, hitSpeed: 1.4, range: 0.7, speed: MED, radius: 0.5, mass: 5, targets: 'ground' },
  giant: { name: 'Gigante', icon: '🧔', hp: 3800, dmg: 210, hitSpeed: 1.5, range: 0.9, speed: SLOW, radius: 0.75, mass: 18, targets: 'buildings', sight: 7 },
  pyromancer: { name: 'Piromante', icon: '🔥', hp: 600, dmg: 200, hitSpeed: 1.4, range: 5.5, speed: MED, radius: 0.45, mass: 4, targets: 'both', splash: 1.5, proj: 'fire', projSpeed: 11 },
  draco: { name: 'Draco', icon: '🐉', hp: 900, dmg: 125, hitSpeed: 1.5, range: 3.5, speed: FAST, radius: 0.55, mass: 5, targets: 'both', air: true, splash: 1.2, proj: 'breath', projSpeed: 10 },
  arquebusier: { name: 'Arcabucero', icon: '🔫', hp: 560, dmg: 165, hitSpeed: 1.1, range: 6, speed: MED, radius: 0.45, mass: 4, targets: 'both', proj: 'bullet', projSpeed: 20 },
  berserker: { name: 'Berserker', icon: '🪓', hp: 1250, dmg: 220, hitSpeed: 1.5, range: 0.9, speed: MED, radius: 0.5, mass: 6, targets: 'ground', spin: 2.0 },
  lancer: { name: 'Lancero', icon: '🐴', hp: 1550, dmg: 320, hitSpeed: 1.4, range: 1.0, speed: MED, radius: 0.7, mass: 10, targets: 'ground', charge: { dist: 2.5, speed: 2.0, dmg: 2 } },
  wolfrider: { name: 'Lobo Asaltante', icon: '🐺', hp: 1800, dmg: 300, hitSpeed: 1.6, range: 0.8, speed: VFAST, radius: 0.65, mass: 8, targets: 'buildings', jump: true, sight: 6 },
  automaton: { name: 'Autómata', icon: '🤖', hp: 1200, dmg: 560, hitSpeed: 1.8, range: 0.8, speed: FAST, radius: 0.5, mass: 6, targets: 'ground' },
  necromancer: { name: 'Nigromante', icon: '🧟', hp: 650, dmg: 110, hitSpeed: 1.1, range: 5, speed: MED, radius: 0.45, mass: 4, targets: 'both', splash: 0.8, proj: 'necro', projSpeed: 10, spawn: { unit: 'skeleton', count: 3, every: 9, first: 1 } },
  golem: { name: 'Gólem', icon: '🗿', hp: 4800, dmg: 260, hitSpeed: 2.5, range: 0.9, speed: SLOW, radius: 0.85, mass: 25, targets: 'buildings', sight: 7, deathSpawn: { unit: 'golemite', count: 2 }, deathDamage: { dmg: 260, radius: 2 } },
  golemite: { name: 'Guijarro', icon: '🪨', hp: 900, dmg: 60, hitSpeed: 2.5, range: 0.8, speed: SLOW, radius: 0.55, mass: 10, targets: 'buildings', sight: 7, deathDamage: { dmg: 60, radius: 1.5 } },
  frost: { name: 'Gélida', icon: '❄️', hp: 520, dmg: 100, hitSpeed: 1.0, range: 5, speed: MED, radius: 0.45, mass: 4, targets: 'both', proj: 'ice', projSpeed: 12, slow: 2.5 },
  ballista: { name: 'Ballesta', icon: '🎯', building: true, hp: 1050, dmg: 175, hitSpeed: 0.9, range: 5.5, speed: 0, radius: 0.85, mass: 999, targets: 'ground', lifetime: 30, proj: 'bolt', projSpeed: 16 },
  crypt: { name: 'Cripta', icon: '⚰️', building: true, hp: 520, dmg: 0, hitSpeed: 1, range: 0, speed: 0, radius: 0.85, mass: 999, targets: 'none', lifetime: 35, spawn: { unit: 'skeleton', count: 1, every: 3.2, first: 1 }, deathSpawn: { unit: 'skeleton', count: 4 } },
  arcane: { name: 'Torre Arcana', icon: '🔮', building: true, hp: 1300, dmg: 40, hitSpeed: 0.4, range: 6, speed: 0, radius: 0.85, mass: 999, targets: 'both', lifetime: 35, ramp: [1, 4, 12], rampEvery: 2 },
};
export const UNIT_KEYS = Object.keys(UNITS);
export const UNIT_INDEX = Object.fromEntries(UNIT_KEYS.map((k, i) => [k, i]));
for (const k of UNIT_KEYS) {
  const u = UNITS[k];
  u.key = k;
  u.sight = u.sight || Math.max(5.5, (u.range || 0) + 0.5);
}

// ---------- Cartas ----------
// type: troop | building | spell
export const CARDS = [
  // Comunes
  { id: 'knight', name: 'Caballero', cost: 3, type: 'troop', rarity: 'comun', unit: 'knight', count: 1,
    desc: 'Armadura gruesa y espada firme. Aguanta golpes mientras los de atrás hacen daño.' },
  { id: 'archers', name: 'Arqueras', cost: 3, type: 'troop', rarity: 'comun', unit: 'archer', count: 2,
    desc: 'Dos tiradoras certeras. Alcanzan a los que vuelan.' },
  { id: 'goblins', name: 'Duendes', cost: 2, type: 'troop', rarity: 'comun', unit: 'goblin', count: 3,
    desc: 'Tres pillos con puñal que corren muchísimo. Baratos y molestos.' },
  { id: 'skeletons', name: 'Esqueletos', cost: 1, type: 'troop', rarity: 'comun', unit: 'skeleton', count: 3,
    desc: 'Tres huesudos por un elixir. Perfectos para distraer.' },
  { id: 'bats', name: 'Murciélagos', cost: 2, type: 'troop', rarity: 'comun', unit: 'bat', count: 5,
    desc: 'Cinco murciélagos voladores que muerden rápido. Mueren de un soplo.' },
  { id: 'grenadier', name: 'Granadero', cost: 3, type: 'troop', rarity: 'comun', unit: 'grenadier', count: 1,
    desc: 'Lanza bombas que revientan grupos de tropas de tierra.' },
  { id: 'barbarians', name: 'Bárbaros', cost: 5, type: 'troop', rarity: 'comun', unit: 'barbarian', count: 4,
    desc: 'Cuatro brutos con hacha. Arrasan lo que pillan por delante.' },
  { id: 'arrows', name: 'Lluvia de Flechas', cost: 3, type: 'spell', rarity: 'comun',
    spell: { kind: 'arrows', radius: 4, dmg: 240, towerMult: 0.35, speed: 15 },
    desc: 'Una nube de flechas en una zona grande. Limpia enjambres.' },
  { id: 'ballista', name: 'Ballesta', cost: 3, type: 'building', rarity: 'comun', unit: 'ballista', count: 1,
    desc: 'Defensa fija durante 30 s. Atrae y frena a las tropas de tierra.' },

  // Especiales
  { id: 'giant', name: 'Gigante', cost: 5, type: 'troop', rarity: 'especial', unit: 'giant', count: 1,
    desc: 'Una mole que solo va a por torres y edificios. Escúdate detrás de él.' },
  { id: 'pyromancer', name: 'Piromante', cost: 5, type: 'troop', rarity: 'especial', unit: 'pyromancer', count: 1,
    desc: 'Lanza bolas de fuego que queman a todo un grupo, en tierra o en el aire.' },
  { id: 'arquebusier', name: 'Arcabucero', cost: 4, type: 'troop', rarity: 'especial', unit: 'arquebusier', count: 1,
    desc: 'Dispara desde muy lejos con su arcabuz. Ideal contra voladores.' },
  { id: 'berserker', name: 'Berserker', cost: 4, type: 'troop', rarity: 'especial', unit: 'berserker', count: 1,
    desc: 'Gira con su hacha doble y golpea a todos los que le rodean.' },
  { id: 'wolfrider', name: 'Lobo Asaltante', cost: 4, type: 'troop', rarity: 'especial', unit: 'wolfrider', count: 1,
    desc: 'Salta el río y corre directo a las torres. Solo ataca edificios.' },
  { id: 'automaton', name: 'Autómata', cost: 4, type: 'troop', rarity: 'especial', unit: 'automaton', count: 1,
    desc: 'Máquina de relojería con espada. Pocos golpes, pero cada uno destroza.' },
  { id: 'fireball', name: 'Bola de Fuego', cost: 4, type: 'spell', rarity: 'especial',
    spell: { kind: 'fireball', radius: 2.5, dmg: 600, towerMult: 0.35, knockback: 1.6, speed: 13 },
    desc: 'Cae donde quieras, quema todo en la zona y empuja a las tropas.' },
  { id: 'crypt', name: 'Cripta', cost: 3, type: 'building', rarity: 'especial', unit: 'crypt', count: 1,
    desc: 'Saca un esqueleto cada pocos segundos. Al romperse suelta cuatro más.' },
  { id: 'arcane', name: 'Torre Arcana', cost: 5, type: 'building', rarity: 'especial', unit: 'arcane', count: 1,
    desc: 'Un rayo que quema cada vez más fuerte cuanto más tiempo apunta al mismo objetivo.' },

  // Épicas
  { id: 'draco', name: 'Draco', cost: 4, type: 'troop', rarity: 'epica', unit: 'draco', count: 1,
    desc: 'Dragón volador que escupe fuego en área. Solo lo alcanzan tiradores.' },
  { id: 'lancer', name: 'Lancero', cost: 5, type: 'troop', rarity: 'epica', unit: 'lancer', count: 1,
    desc: 'Tras galopar un poco carga a doble velocidad y su primer lanzazo hace doble daño.' },
  { id: 'legion', name: 'Legión de Huesos', cost: 3, type: 'troop', rarity: 'epica', unit: 'skeleton', count: 12,
    desc: 'Doce esqueletos a la vez. Rodean y tumban a cualquier gigante.' },
  { id: 'lightning', name: 'Relámpago', cost: 6, type: 'spell', rarity: 'epica',
    spell: { kind: 'lightning', radius: 3.5, dmg: 900, towerMult: 0.3, hits: 3, stun: 0.5, delay: 0.3 },
    desc: 'Tres rayos caen sobre los tres objetivos con más vida de la zona.' },
  { id: 'freeze', name: 'Ventisca', cost: 4, type: 'spell', rarity: 'epica',
    spell: { kind: 'freeze', radius: 3, dmg: 90, towerMult: 0.3, freeze: 4, delay: 0.15 },
    desc: 'Congela tropas y torres durante 4 segundos.' },
  { id: 'rage', name: 'Grito de Guerra', cost: 2, type: 'spell', rarity: 'epica',
    spell: { kind: 'rage', radius: 4, duration: 6, boost: 1.4, delay: 0.1 },
    desc: 'Tus tropas en la zona se mueven y atacan un 40 % más rápido.' },

  // Legendarias
  { id: 'golem', name: 'Gólem', cost: 7, type: 'troop', rarity: 'legendaria', unit: 'golem', count: 1,
    desc: 'Coloso de roca que va a por torres. Al caer explota y se parte en dos guijarros.' },
  { id: 'necromancer', name: 'Nigromante', cost: 5, type: 'troop', rarity: 'legendaria', unit: 'necromancer', count: 1,
    desc: 'Lanza magia oscura y levanta tres esqueletos cada pocos segundos.' },
  { id: 'frost', name: 'Gélida', cost: 3, type: 'troop', rarity: 'legendaria', unit: 'frost', count: 1,
    desc: 'Sus carámbanos ralentizan el paso y los golpes de quien toquen.' },
];

export const CARD_INDEX = Object.fromEntries(CARDS.map((c, i) => [c.id, i]));
CARDS.forEach((c, i) => {
  c.idx = i;
  if (c.unit) c.unitIdx = UNIT_INDEX[c.unit];
});

export const DEFAULT_DECK = ['knight', 'archers', 'goblins', 'giant', 'pyromancer', 'fireball', 'arrows', 'ballista'].map(id => CARD_INDEX[id]);

export function validDeck(d) {
  if (!Array.isArray(d) || d.length !== DECK_SIZE) return false;
  const s = new Set(d);
  return s.size === DECK_SIZE && d.every(i => Number.isInteger(i) && i >= 0 && i < CARDS.length);
}

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

// Rangos según trofeos
export const RANKS = [
  { min: 0, name: 'Aldeano' },
  { min: 100, name: 'Escudero' },
  { min: 250, name: 'Soldado' },
  { min: 450, name: 'Caballero' },
  { min: 700, name: 'Capitán' },
  { min: 1000, name: 'Barón' },
  { min: 1400, name: 'Conde' },
  { min: 1900, name: 'Duque' },
  { min: 2500, name: 'Rey' },
  { min: 3200, name: 'Leyenda' },
];
export const rankOf = (t) => RANKS.reduce((r, x) => (t >= x.min ? x : r), RANKS[0]);
