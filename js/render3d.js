// Arena Duel — render 3D con Three.js: arena, torres, tropas animadas y efectos.
// Misma interfaz que View (render.js), así que main.js puede usar cualquiera de los dos.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Color, Group, Mesh, InstancedMesh, Object3D,
  BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, DodecahedronGeometry,
  TorusGeometry, PlaneGeometry, CircleGeometry, RingGeometry,
  MeshLambertMaterial, MeshBasicMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace,
  HemisphereLight, DirectionalLight, Vector3, Vector2, Raycaster, Plane, Fog,
  BufferAttribute, mergeGeometries,
} from '../lib/three.js';
import { W, H, RIVER_TOP, RIVER_BOT, BRIDGES, BRIDGE_HALF, CARDS, TOWERS, TOWER_LAYOUT, DT, CARD_INDEX } from './data.js';
import { mirror } from './sim.js';

const C = CARD_INDEX;
const PI = Math.PI;
const EMOJI_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
const CSS = {
  me: { main: '#3b82f6', light: '#7cb4ff', bar: '#4aa3ff' },
  foe: { main: '#ef4444', light: '#ff8a8a', bar: '#ff5a5a' },
};
const TEAM3 = {
  me: { main: 0x2f6fe8, dark: 0x1d47a8, light: 0x8cc0ff, glow: 0x9fd0ff },
  foe: { main: 0xe23b3b, dark: 0x9c1d1d, light: 0xff9b9b, glow: 0xffb0a0 },
};
const COL = {
  skin: 0xf3c7a0, gob: 0x69c043, metal: 0xc9d1dc, metalDk: 0x7e8898, wood: 0x9a6634, woodDk: 0x5e3b1b,
  gold: 0xf2b631, stone: 0xc2bcb0, stoneDk: 0x8f897e, stoneLt: 0xdcd6cb, white: 0xf6f6f6, ink: 0x222222,
  hair: 0xe08a2e, beard: 0xeeeeee, rock: 0x8d877d, rockDk: 0x6f6a62, moss: 0x5e9a3a, belly: 0xffd36e, boot: 0x5a4030,
};

const lerp = (a, b, t) => a + (b - a) * t;
function lerpAngle(a, b, t) {
  let d = ((b - a + PI) % (2 * PI) + 2 * PI) % (2 * PI) - PI;
  return a + d * t;
}
const W2 = W / 2, H2 = H / 2;
const wx = (x) => x - W2;
const wz = (y) => y - H2;

// ---------- Cachés de geometrías y materiales ----------
const geos = new Map();
const G = (k, f) => { let g = geos.get(k); if (!g) { g = f(); geos.set(k, g); } return g; };
const box = (w, h, d) => G(`b${w}|${h}|${d}`, () => new BoxGeometry(w, h, d));
const cyl = (a, b, h, s = 8) => G(`c${a}|${b}|${h}|${s}`, () => new CylinderGeometry(a, b, h, s));
const sph = (r, w = 10, h = 8) => G(`s${r}|${w}|${h}`, () => new SphereGeometry(r, w, h));
const cone = (r, h, s = 8) => G(`k${r}|${h}|${s}`, () => new ConeGeometry(r, h, s));
const rock = (r, d = 0) => G(`d${r}|${d}`, () => new DodecahedronGeometry(r, d));
const torus = (R, t, a = PI) => G(`t${R}|${t}|${a}`, () => new TorusGeometry(R, t, 5, 12, a));

const mats = new Map();
function M(color) {
  const k = 'l' + color;
  let m = mats.get(k);
  if (!m) { m = new MeshLambertMaterial({ color, flatShading: true }); mats.set(k, m); }
  return m;
}
function Bm(color) {
  const k = 'b' + color;
  let m = mats.get(k);
  if (!m) { m = new MeshBasicMaterial({ color }); mats.set(k, m); }
  return m;
}
function BT(color, opacity) {
  const k = 't' + color + '|' + opacity;
  let m = mats.get(k);
  if (!m) { m = new MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }); mats.set(k, m); }
  return m;
}
let OVERRIDE = null; // material único al construir el "fantasma" de colocación
function part(geo, mat, x, y, z, parent) {
  const m = new Mesh(geo, OVERRIDE || (typeof mat === 'number' ? M(mat) : mat));
  m.position.set(x || 0, y || 0, z || 0);
  if (parent) parent.add(m);
  return m;
}

// ---------- Modelos ----------
function humanoid(o) {
  const s = o.s;
  const root = new Group(), body = new Group();
  root.add(body);
  const hip = 0.34 * s;
  const legL = new Group(), legR = new Group();
  body.name = 'body'; legL.name = 'legL'; legR.name = 'legR';
  legL.position.set(-0.1 * s, hip, 0); legR.position.set(0.1 * s, hip, 0);
  body.add(legL, legR);
  part(box(0.14 * s, 0.34 * s, 0.16 * s), o.legs, 0, -0.17 * s, 0, legL);
  part(box(0.14 * s, 0.34 * s, 0.16 * s), o.legs, 0, -0.17 * s, 0, legR);
  part(box(0.15 * s, 0.07 * s, 0.2 * s), COL.boot, 0, -0.32 * s, 0.03 * s, legL);
  part(box(0.15 * s, 0.07 * s, 0.2 * s), COL.boot, 0, -0.32 * s, 0.03 * s, legR);
  part(box(0.4 * s, 0.38 * s, 0.27 * s), o.top, 0, hip + 0.19 * s, 0, body);
  const head = new Group();
  head.name = 'head';
  head.position.set(0, hip + 0.38 * s + o.headR * s * 0.95, 0);
  body.add(head);
  part(sph(o.headR * s, 10, 8), o.skin, 0, 0, 0, head);
  part(box(0.045 * s, 0.06 * s, 0.03 * s), COL.ink, -0.065 * s, 0.02 * s, o.headR * s * 0.93, head);
  part(box(0.045 * s, 0.06 * s, 0.03 * s), COL.ink, 0.065 * s, 0.02 * s, o.headR * s * 0.93, head);
  const sh = hip + 0.34 * s;
  const armL = new Group(), armR = new Group();
  armL.name = 'armL'; armR.name = 'armR';
  armL.position.set(-0.26 * s, sh, 0); armR.position.set(0.26 * s, sh, 0);
  body.add(armL, armR);
  for (const a of [armL, armR]) {
    part(box(0.12 * s, 0.32 * s, 0.13 * s), o.arms ?? o.top, 0, -0.15 * s, 0, a);
    part(sph(0.07 * s, 6, 5), o.hands ?? o.skin, 0, -0.32 * s, 0, a);
  }
  return { root, body, legL, legR, armL, armR, head, s, hand: -0.32 * s, hip, height: hip + 0.38 * s + o.headR * s * 2 };
}

function buildKnight(t) {
  const r = humanoid({ s: 1.08, skin: COL.skin, top: COL.metal, legs: COL.metalDk, arms: COL.metal, headR: 0.17 });
  const s = r.s;
  part(box(0.3 * s, 0.33 * s, 0.03 * s), t.main, 0, r.hip + 0.19 * s, 0.14 * s, r.body);
  part(box(0.08 * s, 0.2 * s, 0.035 * s), COL.gold, 0, r.hip + 0.22 * s, 0.15 * s, r.body);
  part(cyl(0.19 * s, 0.2 * s, 0.24 * s, 10), COL.metal, 0, 0.04 * s, 0, r.head);
  part(box(0.22 * s, 0.045 * s, 0.04 * s), COL.ink, 0, 0.03 * s, 0.19 * s, r.head);
  part(box(0.05 * s, 0.14 * s, 0.26 * s), t.main, 0, 0.22 * s, -0.02 * s, r.head);
  // espada
  part(box(0.04 * s, 0.04 * s, 0.6 * s), 0xeef2f6, 0, r.hand, 0.3 * s, r.armR);
  part(box(0.18 * s, 0.045 * s, 0.045 * s), COL.gold, 0, r.hand, 0.03 * s, r.armR);
  // escudo
  const sh = part(cyl(0.22 * s, 0.22 * s, 0.05 * s, 12), t.main, -0.08 * s, -0.2 * s, 0.06 * s, r.armL);
  sh.rotation.z = PI / 2;
  part(sph(0.06 * s, 6, 5), COL.gold, -0.12 * s, -0.2 * s, 0.06 * s, r.armL);
  r.kind = 'knight';
  return r;
}

function buildArcher(t) {
  const r = humanoid({ s: 0.92, skin: COL.skin, top: t.main, legs: 0x5b4636, arms: t.main, headR: 0.17 });
  const s = r.s;
  part(box(0.3 * s, 0.26 * s, 0.14 * s), COL.hair, 0, -0.03 * s, -0.09 * s, r.head);
  part(cone(0.21 * s, 0.32 * s, 8), t.dark, 0, 0.16 * s, -0.02 * s, r.head);
  part(box(0.42 * s, 0.07 * s, 0.29 * s), COL.wood, 0, r.hip + 0.03 * s, 0, r.body);
  const q = part(box(0.11 * s, 0.32 * s, 0.11 * s), COL.woodDk, 0.06 * s, r.hip + 0.26 * s, -0.17 * s, r.body);
  q.rotation.z = 0.35;
  const bow = part(torus(0.27 * s, 0.024 * s), COL.woodDk, 0, r.hand, 0.05 * s, r.armL);
  bow.rotation.set(0, -PI / 2, -PI / 2);
  r.kind = 'archer';
  return r;
}

function buildGoblin(t) {
  const r = humanoid({ s: 0.74, skin: COL.gob, top: t.main, legs: 0x6b4a2a, arms: COL.gob, headR: 0.22 });
  const s = r.s;
  for (const k of [-1, 1]) {
    const e = part(cone(0.08 * s, 0.26 * s, 4), COL.gob, k * 0.23 * s, 0.05 * s, -0.02 * s, r.head);
    e.rotation.z = -k * (PI / 2 - 0.35);
  }
  const n = part(cone(0.05 * s, 0.14 * s, 4), 0x4fa032, 0, -0.03 * s, 0.24 * s, r.head);
  n.rotation.x = PI / 2;
  part(box(0.035 * s, 0.035 * s, 0.3 * s), 0xdfe4ea, 0, r.hand, 0.15 * s, r.armR);
  r.kind = 'goblin';
  return r;
}

function buildGolem(t) {
  const root = new Group(), body = new Group();
  root.add(body);
  const legL = new Group(), legR = new Group();
  body.name = 'body'; legL.name = 'legL'; legR.name = 'legR';
  legL.position.set(-0.3, 0.5, 0); legR.position.set(0.3, 0.5, 0);
  body.add(legL, legR);
  part(rock(0.28), COL.rockDk, 0, -0.25, 0, legL);
  part(rock(0.28), COL.rockDk, 0, -0.25, 0, legR);
  const torso = part(rock(0.6), COL.rock, 0, 1.08, 0, body);
  torso.scale.set(1, 0.9, 0.85);
  part(rock(0.22), COL.moss, 0.25, 1.52, 0.05, body);
  part(rock(0.14), COL.moss, -0.3, 1.4, -0.2, body);
  part(box(0.2, 0.2, 0.04), Bm(t.glow), 0, 1.12, 0.5, body);
  const head = new Group();
  head.name = 'head';
  head.position.set(0, 1.65, 0.12);
  body.add(head);
  part(rock(0.28), COL.rock, 0, 0, 0, head);
  part(box(0.09, 0.05, 0.04), Bm(t.glow), -0.1, 0.03, 0.25, head);
  part(box(0.09, 0.05, 0.04), Bm(t.glow), 0.1, 0.03, 0.25, head);
  const armL = new Group(), armR = new Group();
  armL.name = 'armL'; armR.name = 'armR';
  armL.position.set(-0.68, 1.35, 0); armR.position.set(0.68, 1.35, 0);
  body.add(armL, armR);
  for (const a of [armL, armR]) {
    part(rock(0.22), COL.rockDk, 0, -0.25, 0, a);
    part(rock(0.3), COL.rock, 0, -0.62, 0.05, a);
  }
  return { root, body, legL, legR, armL, armR, head, kind: 'golem', height: 2.0, s: 1 };
}

function buildDragon(t) {
  const root = new Group(), body = new Group();
  root.add(body);
  body.name = 'body';
  const b = part(sph(0.34, 10, 8), t.main, 0, 0, 0, body);
  b.scale.set(1, 0.85, 1.3);
  const bl = part(sph(0.27, 8, 6), COL.belly, 0, -0.1, 0.08, body);
  bl.scale.set(0.85, 0.7, 1.15);
  const head = new Group();
  head.name = 'head';
  head.position.set(0, 0.24, 0.45);
  body.add(head);
  part(sph(0.21, 8, 7), t.main, 0, 0, 0, head);
  part(box(0.2, 0.13, 0.22), t.main, 0, -0.05, 0.18, head);
  for (const k of [-1, 1]) {
    const h = part(cone(0.04, 0.16, 5), COL.white, k * 0.09, 0.18, -0.05, head);
    h.rotation.x = -0.5;
    part(sph(0.055, 6, 5), COL.white, k * 0.1, 0.06, 0.15, head);
    part(box(0.03, 0.05, 0.02), COL.ink, k * 0.1, 0.06, 0.2, head);
  }
  const wingL = new Group(), wingR = new Group();
  wingL.name = 'wingL'; wingR.name = 'wingR';
  wingL.position.set(-0.22, 0.18, -0.02); wingR.position.set(0.22, 0.18, -0.02);
  body.add(wingL, wingR);
  for (const [w, k] of [[wingL, -1], [wingR, 1]]) {
    part(box(0.7, 0.03, 0.42), t.dark, k * 0.36, 0, 0, w);
    part(box(0.72, 0.05, 0.05), t.main, k * 0.36, 0.02, 0.2, w);
  }
  const tail = part(cone(0.13, 0.55, 6), t.main, 0, -0.05, -0.62, body);
  tail.rotation.x = -PI / 2;
  return { root, body, head, wingL, wingR, kind: 'dragon', lift: 1.2, height: 0.6, s: 1 };
}

function buildWizard(t) {
  const r = humanoid({ s: 1.0, skin: COL.skin, top: t.main, legs: t.dark, arms: t.main, headR: 0.16 });
  const s = r.s;
  part(cone(0.3 * s, 0.56 * s, 10), t.main, 0, 0.3 * s, 0, r.body);
  const beard = part(cone(0.12 * s, 0.28 * s, 6), COL.beard, 0, -0.16 * s, 0.1 * s, r.head);
  beard.rotation.x = PI;
  part(cyl(0.27 * s, 0.27 * s, 0.03 * s, 12), t.dark, 0, 0.11 * s, 0, r.head);
  part(cyl(0.18 * s, 0.2 * s, 0.07 * s, 10), COL.gold, 0, 0.15 * s, 0, r.head);
  const hat = part(cone(0.2 * s, 0.5 * s, 8), t.dark, 0, 0.42 * s, -0.02 * s, r.head);
  hat.rotation.x = -0.15;
  part(cyl(0.025 * s, 0.025 * s, 1.0 * s, 6), COL.woodDk, 0, r.hand + 0.2 * s, 0.06 * s, r.armR);
  r.orb = part(sph(0.1 * s, 8, 6), Bm(0xd59bff), 0, r.hand + 0.72 * s, 0.06 * s, r.armR);
  r.orb.name = 'orb';
  r.kind = 'wizard';
  return r;
}

function buildBallista(t) {
  const root = new Group(), body = new Group();
  root.add(body);
  body.name = 'body';
  part(box(1.45, 0.34, 1.45), COL.wood, 0, 0.17, 0, body);
  part(box(1.5, 0.06, 1.5), t.main, 0, 0.3, 0, body);
  part(box(1.4, 0.08, 1.4), COL.woodDk, 0, 0.37, 0, body);
  part(cyl(0.12, 0.16, 0.45, 8), COL.woodDk, 0, 0.6, 0, body);
  const turret = new Group();
  turret.name = 'turret';
  turret.position.set(0, 0.88, 0);
  body.add(turret);
  part(box(0.18, 0.16, 1.15), COL.wood, 0, 0, 0, turret);
  const bow = part(torus(0.58, 0.05), COL.woodDk, 0, 0.02, 0.32, turret);
  bow.rotation.x = PI / 2;
  const bolt = part(cyl(0.03, 0.03, 1.0, 5), 0x555a60, 0, 0.1, 0.12, turret);
  bolt.rotation.x = PI / 2;
  const tip = part(cone(0.06, 0.16, 5), COL.metal, 0, 0.1, 0.68, turret);
  tip.rotation.x = PI / 2;
  part(cyl(0.025, 0.025, 1.1, 5), COL.woodDk, 0.62, 0.85, -0.62, body);
  part(box(0.36, 0.22, 0.02), t.main, 0.8, 1.25, -0.62, body);
  return { root, body, turret, kind: 'ballista', height: 1.2, s: 1 };
}

// escala visual de cada tropa (las fichas físicas son pequeñas; así se leen bien en el móvil)
const VIS = { [C.knight]: 1.65, [C.archers]: 1.6, [C.goblins]: 1.7, [C.golem]: 1.45, [C.dragon]: 1.55, [C.wizard]: 1.6, [C.ballista]: 1.15 };

// Fusiona todas las piezas de un grupo en una sola malla con colores por vértice (menos llamadas de dibujo)
let vcMat = null;
function mergeGroup(tmp) {
  tmp.updateMatrixWorld(true);
  const list = [];
  tmp.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    const c = o.material.color, n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    g.setAttribute('color', new BufferAttribute(arr, 3));
    list.push(g);
  });
  const merged = mergeGeometries(list);
  for (const g of list) g.dispose();
  if (!vcMat) vcMat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  return new Mesh(merged, vcMat);
}

// Une las piezas opacas de cada articulación en una sola malla (de ~25 a ~8 llamadas de dibujo por tropa)
function mergeChildren(group) {
  const meshes = group.children.filter(c => c.isMesh && c.material && c.material.isMeshLambertMaterial && !c.material.vertexColors);
  if (meshes.length < 2) return;
  const list = meshes.map((m) => {
    m.updateMatrix();
    const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    g.applyMatrix4(m.matrix);
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    const c = m.material.color, n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    g.setAttribute('color', new BufferAttribute(arr, 3));
    return g;
  });
  const merged = mergeGeometries(list);
  for (const g of list) g.dispose();
  if (!vcMat) vcMat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  for (const m of meshes) group.remove(m);
  group.add(new Mesh(merged, vcMat));
}
function compact(rig) {
  const groups = [];
  rig.root.traverse((o) => { if (o.isGroup) groups.push(o); });
  for (const g of groups) mergeChildren(g);
  return rig;
}

const RIG_PARTS = ['body', 'legL', 'legR', 'armL', 'armR', 'head', 'wingL', 'wingR', 'turret', 'orb'];
const templates = new Map();
function makeRig(ci, teamKey) {
  const key = ci + teamKey;
  let t = templates.get(key);
  if (!t) { t = compact(BUILDERS[ci](TEAM3[teamKey])); templates.set(key, t); }
  const root = t.root.clone(true);
  const rig = { ...t, root };
  for (const n of RIG_PARTS) if (t[n]) rig[n] = root.getObjectByName(n);
  return rig;
}

const BUILDERS = {
  [C.knight]: buildKnight, [C.archers]: buildArcher, [C.goblins]: buildGoblin, [C.golem]: buildGolem,
  [C.dragon]: buildDragon, [C.wizard]: buildWizard, [C.ballista]: buildBallista,
};

function buildKingFigure(t) {
  const r = humanoid({ s: 1.15, skin: COL.skin, top: t.main, legs: t.dark, arms: t.main, headR: 0.18 });
  const s = r.s;
  part(cone(0.32 * s, 0.5 * s, 10), t.main, 0, 0.28 * s, 0, r.body);
  part(box(0.44 * s, 0.1 * s, 0.3 * s), COL.white, 0, r.hip + 0.36 * s, 0, r.body);
  const beard = part(cone(0.13 * s, 0.24 * s, 6), 0xcf8a3a, 0, -0.15 * s, 0.1 * s, r.head);
  beard.rotation.x = PI;
  part(cyl(0.16 * s, 0.16 * s, 0.12 * s, 8), COL.gold, 0, 0.2 * s, 0, r.head);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * PI * 2;
    part(cone(0.04 * s, 0.1 * s, 4), COL.gold, Math.cos(a) * 0.14 * s, 0.3 * s, Math.sin(a) * 0.14 * s, r.head);
  }
  return r;
}

// ---------- Texturas pintadas ----------
function arenaTexture() {
  const P = 48;
  const c = document.createElement('canvas');
  c.width = W * P; c.height = H * P;
  const g = c.getContext('2d');
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    g.fillStyle = (x + y) % 2 ? '#63b548' : '#6dbf50';
    g.fillRect(x * P, y * P, P, P);
  }
  const path = (x0, y0, x1, y1) => {
    g.fillStyle = '#dcc590';
    rr(g, x0 * P, y0 * P, (x1 - x0) * P, (y1 - y0) * P, P * 0.6); g.fill();
    g.strokeStyle = 'rgba(120,90,40,0.22)'; g.lineWidth = 3; g.stroke();
  };
  for (const bx of BRIDGES) { path(bx - 0.85, 5.2, bx + 0.85, RIVER_TOP + 0.2); path(bx - 0.85, RIVER_BOT - 0.2, bx + 0.85, 26.8); }
  path(3.2, 27.9, 14.8, 30.0); path(3.2, 2.0, 14.8, 4.1);
  path(2.65, 25.6, 4.35, 29.5); path(13.65, 25.6, 15.35, 29.5);
  path(2.65, 2.5, 4.35, 6.4); path(13.65, 2.5, 15.35, 6.4);
  let seed = 11;
  const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 90; i++) {
    const x = R() * W, y = R() * H;
    if (y > RIVER_TOP - 0.6 && y < RIVER_BOT + 0.6) continue;
    if (BRIDGES.some(b => Math.abs(x - b) < 1.4)) continue;
    if (Math.abs(x - 9) < 6.2 && (y < 5 || y > 27)) continue;
    g.fillStyle = ['#f6e05e', '#ffffff', '#f687b3', '#c3a6ff', '#4f9a3a'][Math.floor(R() * 5)];
    for (let j = 0; j < 4; j++) { g.beginPath(); g.arc(x * P + Math.cos(j * 1.57) * 4, y * P + Math.sin(j * 1.57) * 4, 3.4, 0, 7); g.fill(); }
  }
  // lecho del río
  const rv = g.createLinearGradient(0, RIVER_TOP * P, 0, RIVER_BOT * P);
  rv.addColorStop(0, '#1f6aa8'); rv.addColorStop(0.5, '#2a85c9'); rv.addColorStop(1, '#1f6aa8');
  g.fillStyle = rv;
  g.fillRect(0, RIVER_TOP * P, W * P, (RIVER_BOT - RIVER_TOP) * P);
  return c;
}
function waterTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#4aa8e8';
  g.fillRect(0, 0, 128, 64);
  g.strokeStyle = 'rgba(255,255,255,0.55)';
  g.lineWidth = 3;
  for (let r = 0; r < 3; r++) {
    const y = 12 + r * 20;
    g.beginPath();
    for (let x = -10; x < 140; x += 32) {
      const xx = x + r * 11;
      g.moveTo(xx, y); g.quadraticCurveTo(xx + 8, y - 5, xx + 16, y);
    }
    g.stroke();
  }
  return c;
}
function plankTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#b07d45'; g.fillRect(0, 0, 64, 128);
  g.strokeStyle = '#7a5228'; g.lineWidth = 3;
  for (let y = 0; y < 128; y += 16) { g.beginPath(); g.moveTo(0, y); g.lineTo(64, y); g.stroke(); }
  return c;
}
function rr(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

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
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `${px}px ${EMOJI_FONT}`;
  g.fillText(ch, s / 2, s / 2 + px * 0.06);
  emojiCache.set(key, c);
  return c;
}

// ---------- Vista ----------
export class View3D {
  constructor(canvas, overlay, me, onEvent) {
    this.cv = canvas;
    this.ov = overlay;
    this.octx = overlay.getContext('2d');
    this.me = me;
    this.flip = me === 1;
    this.onEvent = onEvent || (() => {});
    this.frames = [];
    this.queue = [];
    this.parts = [];
    this.texts = [];
    this.bubbles = [];
    this.fx = [];
    this.projs = [];
    this.spells = [];
    this.marks = [];
    this.pos = new Map();
    this.units = new Map();
    this.shake = 0;
    this.lastNow = performance.now();
    this.towerPos = [];
    for (const p of [0, 1]) TOWER_LAYOUT.forEach((L) => this.towerPos.push(mirror(p, L.x, L.y)));

    this.renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.scene = new Scene();
    this.scene.background = new Color(0x2d5a2a);
    this.scene.fog = new Fog(0x2d5a2a, 38, 70);
    this.cam = new PerspectiveCamera(36, 1, 0.5, 200);
    this.ray = new Raycaster();
    this.ground = new Plane(new Vector3(0, 1, 0), 0);
    this.tmpV = new Vector3();
    this.tmpV2 = new Vector3();
    this.buildStatic();
    this.towers = [];
    this.buildTowers();
    this.buildGhostKit();
    this.resize();
  }

  reset(me) {
    this.me = me; this.flip = me === 1;
    this.frames = []; this.queue = []; this.parts = []; this.texts = []; this.bubbles = []; this.marks = [];
    for (const f of this.fx) this.scene.remove(f.obj);
    for (const p of this.projs) this.scene.remove(p.obj);
    for (const s of this.spells) { this.scene.remove(s.obj); this.scene.remove(s.shadow); }
    this.fx = []; this.projs = []; this.spells = [];
    for (const u of this.units.values()) this.scene.remove(u.rig.root);
    this.units.clear();
    this.pos.clear();
    this.shake = 0;
    this.buildTowers();
    this.fitCamera();
  }

  // ---------- Escena fija ----------
  buildStatic() {
    const sc = this.scene;
    sc.add(new HemisphereLight(0xeef6ff, 0x5a7a3a, 1.6));
    const sun = new DirectionalLight(0xfff1dc, 2.1);
    sun.position.set(-7, 16, 9);
    sc.add(sun);

    const aniso = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    const tex = new CanvasTexture(arenaTexture());
    tex.colorSpace = SRGBColorSpace;
    tex.anisotropy = aniso;
    const field = new Mesh(new PlaneGeometry(W, H), new MeshLambertMaterial({ map: tex }));
    field.rotation.x = -PI / 2;
    sc.add(field);

    const outside = new Mesh(new PlaneGeometry(400, 400), M(0x3f7f36));
    outside.rotation.x = -PI / 2;
    outside.position.y = -0.03;
    sc.add(outside);

    // agua animada
    const wt = new CanvasTexture(waterTexture());
    wt.colorSpace = SRGBColorSpace;
    wt.wrapS = wt.wrapT = RepeatWrapping;
    wt.repeat.set(W / 4, 1);
    this.waterTex = wt;
    const water = new Mesh(new PlaneGeometry(W, RIVER_BOT - RIVER_TOP), new MeshBasicMaterial({ map: wt, transparent: true, opacity: 0.72 }));
    water.rotation.x = -PI / 2;
    water.position.set(0, 0.03, 0);
    sc.add(water);
    for (const k of [-1, 1]) part(box(W, 0.14, 0.16), 0x3f7a30, 0, 0.05, k * 1.0, sc);

    // puentes
    const pt = new CanvasTexture(plankTexture());
    pt.colorSpace = SRGBColorSpace;
    const deckMat = new MeshLambertMaterial({ map: pt });
    for (const bx of BRIDGES) {
      const L = RIVER_BOT - RIVER_TOP + 1.0;
      const deck = new Mesh(box(BRIDGE_HALF * 2 + 0.3, 0.16, L), deckMat);
      deck.position.set(wx(bx), 0.12, 0);
      sc.add(deck);
      for (const k of [-1, 1]) {
        part(box(0.12, 0.12, L), COL.woodDk, wx(bx) + k * (BRIDGE_HALF + 0.12), 0.36, 0, sc);
        for (const z of [-L / 2 + 0.1, 0, L / 2 - 0.1]) part(box(0.14, 0.32, 0.14), COL.woodDk, wx(bx) + k * (BRIDGE_HALF + 0.12), 0.28, z, sc);
      }
    }

    // murete alrededor
    for (const k of [-1, 1]) {
      part(box(0.35, 0.45, H + 0.7), COL.stoneDk, k * (W2 + 0.18), 0.22, 0, sc);
      part(box(W + 0.7, 0.45, 0.35), COL.stoneDk, 0, 0.22, k * (H2 + 0.18), sc);
    }

    // árboles y rocas fuera de la arena
    let seed = 5;
    const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const spots = [];
    for (let i = 0; i < 140; i++) {
      const side = R() < 0.5 ? -1 : 1;
      let x, z;
      if (R() < 0.8) { x = side * (W2 + 1.3 + R() * 9); z = (R() - 0.5) * (H + 14); }
      else { x = (R() - 0.5) * (W + 18); z = side * (H2 + 1.4 + R() * 7); }
      if (Math.abs(x) < W2 + 0.9 && Math.abs(z) < H2 + 0.9) continue;
      spots.push([x, z, 0.75 + R() * 0.6, R()]);
    }
    const trunk = new InstancedMesh(cyl(0.14, 0.2, 0.7, 6), M(COL.woodDk), spots.length);
    const leaf1 = new InstancedMesh(cone(0.85, 1.4, 7), M(0xffffff), spots.length);
    const leaf2 = new InstancedMesh(cone(0.65, 1.1, 7), M(0xffffff), spots.length);
    const o = new Object3D();
    const tint = new Color();
    spots.forEach(([x, z, s, v], i) => {
      o.position.set(x, 0.35 * s, z); o.scale.set(s, s, s); o.rotation.y = v * 6; o.updateMatrix();
      trunk.setMatrixAt(i, o.matrix);
      o.position.y = 1.2 * s; o.updateMatrix(); leaf1.setMatrixAt(i, o.matrix);
      o.position.y = 1.85 * s; o.updateMatrix(); leaf2.setMatrixAt(i, o.matrix);
      tint.setHSL(0.3 + v * 0.06, 0.45, 0.28 + v * 0.1);
      leaf1.setColorAt(i, tint);
      tint.offsetHSL(0, 0, 0.06);
      leaf2.setColorAt(i, tint);
    });
    sc.add(trunk, leaf1, leaf2);

    // marcadores del suelo reutilizables (zonas prohibidas, casilla, alcance)
    this.zoneMat = new MeshBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.22, depthWrite: false });
    this.zones = [];
    for (let i = 0; i < 4; i++) {
      const z = new Mesh(new PlaneGeometry(1, 1), this.zoneMat);
      z.rotation.x = -PI / 2; z.position.y = 0.06; z.visible = false;
      sc.add(z); this.zones.push(z);
    }
    this.lineMesh = new Mesh(new PlaneGeometry(W, 0.08), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false }));
    this.lineMesh.rotation.x = -PI / 2; this.lineMesh.position.y = 0.07; this.lineMesh.visible = false;
    sc.add(this.lineMesh);
    this.tileMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false });
    this.tile = new Mesh(new PlaneGeometry(1, 1), this.tileMat);
    this.tile.rotation.x = -PI / 2; this.tile.position.y = 0.08; this.tile.visible = false;
    sc.add(this.tile);
    this.rangeMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false });
    this.range = new Mesh(new RingGeometry(0.96, 1, 48), this.rangeMat);
    this.range.rotation.x = -PI / 2; this.range.position.y = 0.09; this.range.visible = false;
    sc.add(this.range);
    this.spellArea = new Mesh(new CircleGeometry(1, 40), new MeshBasicMaterial({ color: 0xff8a2a, transparent: true, opacity: 0.25, depthWrite: false }));
    this.spellArea.rotation.x = -PI / 2; this.spellArea.position.y = 0.09; this.spellArea.visible = false;
    sc.add(this.spellArea);

    this.shadowGeo = new CircleGeometry(1, 20);
    this.shadowMat = new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false });
  }

  shadow(r, parent) {
    const s = new Mesh(this.shadowGeo, this.shadowMat);
    s.rotation.x = -PI / 2; s.position.y = 0.04; s.scale.set(r, r, r);
    parent.add(s);
    return s;
  }

  buildTowers() {
    for (const t of this.towers) {
      this.scene.remove(t.group, t.rubble);
      for (const o of [t.group, t.rubble]) o.traverse((m) => { if (m.isMesh && m.material === vcMat) m.geometry.dispose(); });
    }
    this.towers = [];
    for (let i = 0; i < 6; i++) {
      const owner = i < 3 ? 0 : 1;
      const kind = TOWER_LAYOUT[i % 3].kind;
      const team = owner === this.me ? TEAM3.me : TEAM3.foe;
      const [x, y] = this.towerPos[i];
      const g = new Group();
      g.position.set(wx(x), 0, wz(y));
      // mirar hacia el centro del campo
      g.rotation.y = owner === 0 ? PI : 0;
      const king = kind === 'king';
      const w = king ? 3.3 : 2.5, h = king ? 2.4 : 2.0;
      this.shadow(w * 0.78, g);
      const st = new Group();
      part(box(w + 0.25, 0.4, w + 0.25), COL.stoneDk, 0, 0.2, 0, st);
      part(box(w, h, w), COL.stone, 0, h / 2, 0, st);
      for (let r = 1; r < 4; r++) part(box(w + 0.02, 0.05, w + 0.02), COL.stoneDk, 0, (h * r) / 4, 0, st);
      part(box(w + 0.35, 0.26, w + 0.35), COL.stoneLt, 0, h + 0.1, 0, st);
      const n = king ? 4 : 3;
      for (let a = 0; a < n; a++) {
        const off = -w / 2 + (a + 0.5) * (w / n);
        for (const [cx, cz] of [[off, w / 2 + 0.05], [off, -w / 2 - 0.05], [w / 2 + 0.05, off], [-w / 2 - 0.05, off]]) {
          part(box(0.38, 0.38, 0.38), COL.stoneLt, cx, h + 0.42, cz, st);
        }
      }
      // estandartes y puerta
      for (const k of [-1, 1]) {
        part(box(king ? 0.9 : 0.7, king ? 1.25 : 1.0, 0.04), team.main, 0, h * 0.58, k * (w / 2 + 0.03), st);
        part(box(king ? 0.9 : 0.7, 0.1, 0.05), COL.gold, 0, h * 0.58 + (king ? 0.62 : 0.5), k * (w / 2 + 0.04), st);
        part(cone(0.12, 0.25, 4), COL.gold, 0, h * 0.58 - 0.2, k * (w / 2 + 0.07), st).rotation.x = k * PI / 2;
      }
      part(box(0.65, 0.85, 0.05), COL.woodDk, 0, 0.62, w / 2 + 0.04, st);
      g.add(mergeGroup(st));
      // figura en lo alto
      let fig, cannon = null;
      if (king) {
        fig = compact(buildKingFigure(team));
        fig.root.scale.setScalar(1.3);
        fig.root.position.set(0, h + 0.23, -0.55);
        cannon = new Group();
        cannon.position.set(0, h + 0.5, 0.75);
        part(box(0.5, 0.3, 0.5), COL.woodDk, 0, -0.12, 0, cannon);
        const barrel = part(cyl(0.16, 0.2, 0.9, 8), 0x3a3a3a, 0, 0.08, 0.3, cannon);
        barrel.rotation.x = PI / 2 - 0.2;
        g.add(cannon);
      } else {
        fig = compact(buildArcher(team));
        fig.root.scale.setScalar(1.4);
        fig.root.position.set(0, h + 0.23, 0);
      }
      g.add(fig.root);
      this.scene.add(g);
      // escombros
      const rubble = new Group();
      rubble.position.copy(g.position);
      this.shadow(w * 0.8, rubble);
      let seed = i * 31 + 7;
      const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      const rb = new Group();
      for (let k = 0; k < 10; k++) {
        const a = R() * 7, d = R() * w * 0.5;
        const m = part(rock(0.25 + R() * 0.3), [COL.stone, COL.stoneDk, COL.stoneLt][k % 3], Math.cos(a) * d, 0.12 + R() * 0.2, Math.sin(a) * d, rb);
        m.rotation.set(R() * 3, R() * 3, R() * 3);
      }
      rubble.add(mergeGroup(rb));
      rubble.visible = false;
      this.scene.add(rubble);
      this.towers.push({ group: g, rubble, fig, cannon, king, owner, h, alive: true, aim: null, shootT: -9, baseRot: g.rotation.y });
    }
  }

  buildGhostKit() {
    this.ghostMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45, depthWrite: false });
    this.ghostRigs = new Map();
  }
  ghostRig(card, n) {
    const key = card + ':' + n;
    let r = this.ghostRigs.get(key);
    if (!r) {
      OVERRIDE = this.ghostMat;
      r = BUILDERS[card](TEAM3.me);
      OVERRIDE = null;
      r.root.scale.setScalar(VIS[card] || 1.4);
      this.scene.add(r.root);
      this.ghostRigs.set(key, r);
    }
    return r;
  }

  // ---------- Cámara ----------
  resize() {
    const r = this.cv.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.dpr = dpr;
    this.cssW = Math.max(100, r.width);
    this.cssH = Math.max(100, r.height);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(this.cssW, this.cssH, false);
    this.cv.style.width = this.cssW + 'px';
    this.cv.style.height = this.cssH + 'px';
    const odpr = Math.min(window.devicePixelRatio || 1, 2.5);
    this.odpr = odpr;
    this.ov.width = Math.round(this.cssW * odpr);
    this.ov.height = Math.round(this.cssH * odpr);
    this.ov.style.width = this.cssW + 'px';
    this.ov.style.height = this.cssH + 'px';
    this.fitCamera();
  }

  fitCamera() {
    const cam = this.cam;
    cam.aspect = this.cssW / this.cssH;
    cam.fov = cam.aspect < 0.62 ? 40 : 36;
    cam.updateProjectionMatrix();
    const sg = this.flip ? -1 : 1;
    const pitch = (56 * PI) / 180;
    const dir = new Vector3(0, Math.sin(pitch), sg * Math.cos(pitch));
    const pts = [];
    for (const x of [-W2, W2]) {
      pts.push(new Vector3(x, 0, sg * H2), new Vector3(x, 0, -sg * H2), new Vector3(x, 2.6, -sg * (H2 - 3)));
    }
    pts.push(new Vector3(0, 4.4, -sg * (H2 - 3)));
    let tz = 0, d = 45;
    const v = new Vector3();
    for (let it = 0; it < 90; it++) {
      const tgt = new Vector3(0, 0, tz);
      cam.position.copy(tgt).addScaledVector(dir, d);
      cam.lookAt(tgt);
      cam.updateMatrixWorld();
      let x0 = 9, x1 = -9, y0 = 9, y1 = -9;
      for (const p of pts) {
        v.copy(p).project(cam);
        x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
      }
      const k = Math.max((x1 - x0) / 2 / 0.99, (y1 - y0) / 2 / 0.985);
      d *= 1 + (k - 1) * 0.7;
      tz -= sg * ((y1 + y0) / 2) * 4;
    }
    this.camBase = cam.position.clone();
    const dFar = cam.position.distanceTo(new Vector3(0, 0, -sg * H2));
    this.scene.fog.near = dFar + 6;
    this.scene.fog.far = dFar + 45;
    this.camTarget = new Vector3(0, 0, tz);
    // píxeles por casilla en el centro del campo
    const a = this.screenOf(9, 16, 0), b = this.screenOf(10, 16, 0);
    this.S = Math.hypot(b[0] - a[0], b[1] - a[1]);
  }

  screenOf(x, y, h = 0) {
    const v = this.tmpV.set(wx(x), h, wz(y)).project(this.cam);
    return [(v.x * 0.5 + 0.5) * this.cssW, (-v.y * 0.5 + 0.5) * this.cssH, v.z];
  }
  toScreen(x, y) { const s = this.screenOf(x, y, 0); return [s[0], s[1]]; }
  toWorld(px, py) {
    const ndc = new Vector2((px / this.cssW) * 2 - 1, -(py / this.cssH) * 2 + 1);
    this.ray.setFromCamera(ndc, this.cam);
    const hit = this.ray.ray.intersectPlane(this.ground, this.tmpV2);
    if (!hit) return [-99, -99];
    return [hit.x + W2, hit.z + H2];
  }
  inArena(px, py) {
    const [x, y] = this.toWorld(px, py);
    return x >= 0 && x <= W && y >= 0 && y <= H;
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
  addLocalDeploy(card, x, y) {
    this.ring(x, y, 0.3, 1.2, 0x9cc8ff, 0.5, 0.8);
  }
  emote(owner, ch) { this.bubbles.push({ owner, ch, t: 0, max: 2.6 }); }

  // ---------- Efectos ----------
  ring(x, y, r0, r1, color, dur, op = 0.8, h = 0.1) {
    const m = new Mesh(G('ring', () => new RingGeometry(0.82, 1, 40)), new MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false }));
    m.rotation.x = -PI / 2;
    m.position.set(wx(x), h, wz(y));
    m.scale.setScalar(r0);
    this.scene.add(m);
    this.fx.push({ obj: m, t: 0, dur, update: (k) => { m.scale.setScalar(lerp(r0, r1, 1 - (1 - k) ** 2)); m.material.opacity = op * (1 - k); } });
  }
  flash(x, y, h, r0, r1, color, dur, op = 0.85) {
    const m = new Mesh(sph(1, 14, 10), new MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false }));
    m.position.set(wx(x), h, wz(y));
    m.scale.setScalar(r0);
    this.scene.add(m);
    this.fx.push({ obj: m, t: 0, dur, update: (k) => { m.scale.setScalar(lerp(r0, r1, 1 - (1 - k) ** 3)); m.material.opacity = op * (1 - k); } });
  }
  burst(x, y, z, n, colors, spd, life, size) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * PI * 2, v = spd * (0.3 + Math.random() * 0.7);
      this.parts.push({
        x, y, z, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vz: 2 + Math.random() * 3.5,
        life: life * (0.6 + Math.random() * 0.6), t: 0, size: size * (0.6 + Math.random() * 0.8), color: colors[i % colors.length], grav: 9,
      });
    }
  }
  dust(x, y) {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * PI * 2;
      this.parts.push({ x: x + Math.cos(a) * 0.3, y: y + Math.sin(a) * 0.3, z: 0.05, vx: Math.cos(a) * 1.6, vy: Math.sin(a) * 1.6, vz: 0.4,
        life: 0.4, t: 0, size: 0.1, color: 'dust', grav: 0, grow: true });
    }
  }
  smoke(x, y, z, n, spread) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * PI * 2, v = spread * Math.random();
      this.parts.push({
        x: x + Math.cos(a) * 0.2, y: y + Math.sin(a) * 0.2, z, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vz: 0.8,
        life: 0.55 + Math.random() * 0.4, t: 0, size: 0.16 + Math.random() * 0.2, color: 'smoke', grav: 0, grow: true,
      });
    }
  }

  trigger(ev, now) {
    switch (ev.t) {
      case 'deploy':
        if (CARDS[ev.c].type === 'spell') this.marks.push({ x: ev.x, y: ev.y, card: ev.c, t: 0, owner: ev.o });
        else this.ring(ev.x, ev.y, 0.3, 1.5, ev.o === this.me ? 0x9cc8ff : 0xffb0b0, 0.45);
        break;
      case 'proj': this.addProj(ev); break;
      case 'hit': this.burst(ev.x, ev.y, ev.a ? 1.2 : 0.6, 6, ['#ffffff', '#ffe08a'], 2.5, 0.25, 0.07); break;
      case 'splash': {
        const fire = ev.p === 'fire';
        this.ring(ev.x, ev.y, 0.2, ev.r, fire ? 0xffa040 : 0xc79bff, 0.3);
        this.flash(ev.x, ev.y, 0.4, 0.2, ev.r * 0.6, fire ? 0xff8a2a : 0xb070ff, 0.25, 0.6);
        this.burst(ev.x, ev.y, 0.5, 10, fire ? ['#ffb347', '#ff6a00', '#ffd27a'] : ['#c79bff', '#8b5cf6', '#ffffff'], 3, 0.35, 0.09);
        break;
      }
      case 'spell': this.addSpell(ev); break;
      case 'boom':
        this.flash(ev.x, ev.y, 0.3, 0.4, ev.r * 0.9, 0xffa62a, 0.45, 0.9);
        this.flash(ev.x, ev.y, 0.3, 0.2, ev.r * 0.55, 0xfff1a8, 0.3, 0.95);
        this.ring(ev.x, ev.y, 0.5, ev.r, 0xffcc66, 0.5, 0.9);
        this.burst(ev.x, ev.y, 0.4, 34, ['#ff6a00', '#ffb347', '#ffe08a', '#7a3b12'], 6, 0.7, 0.14);
        this.smoke(ev.x, ev.y, 0.5, 10, 1.6);
        this.shake = Math.max(this.shake, 0.5);
        this.marks = this.marks.filter(m => Math.hypot(m.x - ev.x, m.y - ev.y) > 0.2);
        break;
      case 'death':
        this.smoke(ev.x, ev.y, ev.a ? 1.2 : 0.4, 7, 0.7);
        this.burst(ev.x, ev.y, ev.a ? 1.2 : 0.5, 6, [ev.o === this.me ? CSS.me.light : CSS.foe.light, '#ffffff'], 2.5, 0.4, 0.08);
        break;
      case 'tower': {
        const tw = this.towers[ev.o * 3 + ev.i];
        this.flash(ev.x, ev.y, 1.5, 0.5, 3.2, 0xffd27a, 0.5, 0.9);
        this.burst(ev.x, ev.y, 1.5, 50, ['#9a948a', '#c7c1b6', '#6e695f', '#ffb347', '#ff6a00'], 8, 1.0, 0.2);
        this.smoke(ev.x, ev.y, 1.2, 18, 2.5);
        this.ring(ev.x, ev.y, 0.5, 4.2, 0xfff3c4, 0.6, 0.9);
        this.shake = Math.max(this.shake, 1.1);
        const [sx, sy] = this.screenOf(ev.x, ev.y, tw ? tw.h + 1 : 3);
        this.texts.push({ sx, sy, txt: '👑', t: 0, max: 1.6, big: true });
        break;
      }
      case 'king': {
        const [x, y] = this.towerPos[ev.o * 3 + 2];
        const [sx, sy] = this.screenOf(x, y, 4.6);
        this.texts.push({ sx, sy, txt: '❗', t: 0, max: 1.2 });
        break;
      }
    }
    this.onEvent(ev);
  }

  addProj(ev) {
    let obj;
    const kind = ev.p;
    const team = ev.o === this.me ? TEAM3.me : TEAM3.foe;
    if (kind === 'arrow' || kind === 'tower' || kind === 'bolt') {
      obj = new Group();
      const L = kind === 'bolt' ? 0.95 : kind === 'tower' ? 0.75 : 0.6;
      const th = kind === 'bolt' ? 0.045 : 0.028;
      part(cyl(th, th, L, 4), COL.woodDk, 0, 0, 0, obj).rotation.x = PI / 2;
      part(cone(th * 2.2, 0.16, 4), COL.metal, 0, 0, L / 2 + 0.06, obj).rotation.x = PI / 2;
      part(box(0.14, 0.015, 0.12), team.main, 0, 0, -L / 2 + 0.06, obj);
    } else if (kind === 'cannon') {
      obj = part(sph(0.17, 8, 6), 0x2d2d2d, 0, 0, 0, null);
    } else {
      const fire = kind === 'fire';
      obj = new Group();
      part(sph(0.15, 8, 6), Bm(fire ? 0xffe6a0 : 0xffffff), 0, 0, 0, obj);
      const halo = new Mesh(sph(0.28, 10, 8), BT(fire ? 0xff7a1a : 0xa060ff, 0.55));
      obj.add(halo);
    }
    this.scene.add(obj);
    // altura de salida
    let h0 = ev.fa ? 1.25 : 0.65;
    const tw = this.towerAt(ev.fx, ev.fy);
    if (tw) { h0 = tw.h + (tw.king ? 1.1 : 0.95); tw.shootT = performance.now(); tw.aim = [ev.tx, ev.ty]; }
    else {
      const card = this.cardAt(ev.fx, ev.fy);
      if (card === C.ballista) h0 = 0.95;
    }
    this.projs.push({ ...ev, start: ev.k, obj, h0 });
  }

  towerAt(x, y) {
    for (let i = 0; i < 6; i++) {
      const [tx, ty] = this.towerPos[i];
      if (Math.abs(tx - x) < 0.05 && Math.abs(ty - y) < 0.05) return this.towers[i];
    }
    return null;
  }
  cardAt(x, y) {
    let best = -1, bd = 0.4;
    for (const u of this.units.values()) {
      const d = Math.hypot(u.x - x, u.y - y);
      if (d < bd) { bd = d; best = u.card; }
    }
    return best;
  }

  addSpell(ev) {
    const obj = new Group();
    part(sph(0.42, 10, 8), Bm(0xfff1a8), 0, 0, 0, obj);
    obj.add(new Mesh(sph(0.62, 12, 10), BT(0xff8a1a, 0.75)));
    obj.add(new Mesh(sph(0.85, 12, 10), BT(0xff4a00, 0.3)));
    const shadow = new Mesh(this.shadowGeo, BT(0x000000, 0.2));
    shadow.rotation.x = -PI / 2;
    shadow.position.y = 0.05;
    this.scene.add(obj, shadow);
    this.spells.push({ ...ev, start: ev.k, obj, shadow });
  }

  // ---------- Render ----------
  render(rt, ui) {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastNow) / 1000);
    this.lastNow = now;
    const tsec = now / 1000;

    if (this.queue.length) {
      const keep = [];
      for (const ev of this.queue) (ev.k <= rt + 0.01 ? this.trigger(ev, now) : keep.push(ev));
      this.queue = keep;
    }

    const fr = this.frames;
    let A = null, B = null;
    for (let i = fr.length - 1; i >= 0; i--) {
      if (fr[i].k <= rt) { A = fr[i]; B = fr[i + 1] || null; break; }
    }
    if (!A) A = fr[0];
    const al = A && B ? Math.min(1, Math.max(0, (rt - A.k) / (B.k - A.k))) : 0;
    const cur = (B && al > 0.5) ? B : A;

    // agua
    if (this.waterTex) this.waterTex.offset.x = (tsec * 0.12) % 1;

    // cámara con temblor
    const cam = this.cam;
    cam.position.copy(this.camBase);
    if (this.shake > 0) {
      cam.position.x += (Math.random() - 0.5) * this.shake * 0.5;
      cam.position.z += (Math.random() - 0.5) * this.shake * 0.5;
      this.shake = Math.max(0, this.shake - dt * 2.5);
    }
    cam.lookAt(this.camTarget);

    const list = [];
    if (A) {
      const seen = new Set();
      for (const [id, eb] of (cur === B ? B.ents : A.ents)) {
        const ea = A.ents.get(id), ebb = B ? B.ents.get(id) : null;
        let x, y, mx = 0, my = 0;
        if (ea && ebb) {
          x = lerp(ea[3], ebb[3], al) / 20; y = lerp(ea[4], ebb[4], al) / 20;
          mx = (ebb[3] - ea[3]) / Math.max(1, B.k - A.k); my = (ebb[4] - ea[4]) / Math.max(1, B.k - A.k);
        } else { const e = ebb || ea; x = e[3] / 20; y = e[4] / 20; }
        const card = CARDS[eb[1]];
        const air = !!(card.unit && card.unit.air);
        this.pos.set(id, { x, y, air });
        seen.add(id);
        list.push({ id, e: eb, x, y, card, air, mx, my });
      }
      for (const id of this.pos.keys()) if (id > 6 && !seen.has(id)) this.pos.delete(id);
      for (let i = 0; i < 6; i++) { const [x, y] = this.towerPos[i]; this.pos.set(i + 1, { x, y, air: false }); }

      // tropas
      const alive = new Set();
      for (const it of list) { alive.add(it.id); this.updateUnit(it, dt, tsec); }
      for (const [id, u] of this.units) if (!alive.has(id)) { this.scene.remove(u.rig.root); this.units.delete(id); }

      // torres
      for (let i = 0; i < 6; i++) this.updateTower(i, cur, dt, tsec, now);
    }

    this.updateProjs(rt);
    this.updateSpells(rt);
    this.updateFx(dt);
    this.updateGhost(ui && ui.ghost, A);

    this.renderer.render(this.scene, cam);

    // ---------- capa 2D ----------
    const g = this.octx;
    g.setTransform(this.odpr, 0, 0, this.odpr, 0, 0);
    g.clearRect(0, 0, this.cssW, this.cssH);
    if (A) {
      for (const it of list) this.drawUnitHud(it);
      for (let i = 0; i < 6; i++) this.drawTowerHud(i, cur, now);
    }
    this.drawMarks(dt);
    this.drawParts(dt);
    this.drawBubbles(dt);
    this.drawTexts(dt);
  }

  updateUnit(it, dt, tsec) {
    const { id, e, card } = it;
    const [, ci, owner, , , , dep, atk, tid] = e;
    let u = this.units.get(id);
    if (!u) {
      const teamKey = owner === this.me ? 'me' : 'foe';
      const team = TEAM3[teamKey];
      const rig = makeRig(ci, teamKey);
      const vs = VIS[ci] || 1.4;
      rig.vs = vs;
      rig.root.scale.setScalar(vs);
      const r = Math.max(0.5, (card.unit.radius || 0.5) * 1.2) / vs;
      if (ci !== C.ballista) {
        const ringM = new Mesh(G('ring', () => new RingGeometry(0.82, 1, 40)), BT(team.main, 0.6));
        ringM.rotation.x = -PI / 2; ringM.position.y = 0.05 / vs; ringM.scale.setScalar(r);
        rig.root.add(ringM);
      }
      rig.shadow = this.shadow(rig.kind === 'dragon' ? 0.5 / vs * 1.2 : r * 0.95, rig.root);
      const ang = owner === 0 ? PI : 0;
      rig.root.rotation.y = ang;
      this.scene.add(rig.root);
      u = { rig, card: ci, owner, angle: ang, x: it.x, y: it.y, prevDep: dep, landT: -9 };
      this.units.set(id, u);
    }
    u.x = it.x; u.y = it.y;
    const rig = u.rig;
    rig.root.position.set(wx(it.x), 0, wz(it.y));
    const moving = Math.hypot(it.mx, it.my) > 0.25;

    // orientación
    let fx = 0, fz = 0;
    const tp = tid ? this.pos.get(tid) : null;
    if (atk < 8 && tp) { fx = tp.x - it.x; fz = tp.y - it.y; }
    else if (moving) { fx = it.mx; fz = it.my; }
    else if (tp) { fx = tp.x - it.x; fz = tp.y - it.y; }
    if (rig.kind === 'ballista') {
      if (tp) rig.turret.rotation.y = lerpAngle(rig.turret.rotation.y, Math.atan2(fx, fz) - rig.root.rotation.y, Math.min(1, dt * 8));
    } else if (fx || fz) {
      u.angle = lerpAngle(u.angle, Math.atan2(fx, fz), Math.min(1, dt * 9));
      rig.root.rotation.y = u.angle;
    }

    // caída al desplegar
    if (dep > 0) {
      const k = dep / 10;
      rig.body.position.y = (rig.lift || 0) + k * k * 3;
      rig.body.scale.setScalar(0.85 + 0.15 * (1 - k));
    } else {
      if (u.prevDep > 0) { u.landT = tsec; this.dust(it.x, it.y); }
      rig.body.scale.setScalar(1);
      rig.body.position.y = rig.lift || 0;
    }
    u.prevDep = dep;
    const a = atk < 3 ? 1 - atk / 3 : 0;
    this.animate(rig, tsec + id * 0.37, moving && dep === 0, a, dep > 0);
  }

  animate(rig, t, moving, a, deploying) {
    const k = rig.kind;
    if (k === 'dragon') {
      const f = Math.sin(t * 13);
      rig.wingL.rotation.z = -0.25 + f * 0.65;
      rig.wingR.rotation.z = 0.25 - f * 0.65;
      rig.body.position.y += Math.sin(t * 3) * 0.08;
      rig.head.rotation.x = -a * 0.6;
      rig.body.rotation.x = moving ? 0.12 : 0;
      return;
    }
    if (k === 'ballista') {
      rig.turret.position.z = -a * 0.2;
      return;
    }
    const sw = moving ? Math.sin(t * 11) : 0;
    rig.legL.rotation.x = sw * 0.7;
    rig.legR.rotation.x = -sw * 0.7;
    rig.armL.rotation.x = -sw * 0.5;
    rig.armR.rotation.x = sw * 0.5;
    rig.armL.rotation.z = 0; rig.armR.rotation.z = 0;
    if (moving) rig.body.position.y += Math.abs(Math.sin(t * 11)) * 0.06 * (rig.s || 1);
    else rig.body.position.y += Math.sin(t * 2.4) * 0.012;
    if (k === 'golem') {
      rig.legL.rotation.x *= 0.6; rig.legR.rotation.x *= 0.6;
      if (a > 0) { rig.armL.rotation.x = -2.2 * a; rig.armR.rotation.x = -2.2 * a; }
      rig.body.rotation.z = moving ? Math.sin(t * 5.5) * 0.05 : 0;
    } else if (k === 'archer') {
      if (a > 0 || rig.aiming) { rig.armL.rotation.x = -1.45; rig.armR.rotation.x = -1.2 - a * 0.4; rig.armR.rotation.z = 0.25; }
    } else if (k === 'wizard') {
      if (a > 0) { rig.armR.rotation.x = -2.4 * a; }
      if (rig.orb) rig.orb.scale.setScalar(1 + Math.sin(t * 6) * 0.15 + a * 0.6);
    } else if (a > 0) {
      // golpe de espada / puñal
      rig.armR.rotation.x = -2.3 * a + 0.4 * (1 - a);
      if (k === 'knight') rig.armL.rotation.x = -0.6;
    }
    if (deploying) { rig.armL.rotation.z = -0.6; rig.armR.rotation.z = 0.6; }
  }

  updateTower(i, cur, dt, tsec, now) {
    const tw = this.towers[i];
    const alive = cur.tw[i] > 0;
    if (alive !== tw.alive) {
      tw.alive = alive;
      tw.group.visible = alive;
      tw.rubble.visible = !alive;
    }
    if (!alive) return;
    const fig = tw.fig;
    const owner = i < 3 ? 0 : 1;
    const shooting = now - tw.shootT < 900;
    if (tw.aim && shooting) {
      const [x, y] = this.towerPos[i];
      const ang = Math.atan2(tw.aim[0] - x, tw.aim[1] - y) - tw.baseRot;
      fig.root.rotation.y = lerpAngle(fig.root.rotation.y, ang, Math.min(1, dt * 10));
      if (tw.cannon) tw.cannon.rotation.y = lerpAngle(tw.cannon.rotation.y, ang, Math.min(1, dt * 10));
    } else {
      fig.root.rotation.y = lerpAngle(fig.root.rotation.y, 0, Math.min(1, dt * 3));
    }
    const a = Math.max(0, 1 - (now - tw.shootT) / 300);
    if (tw.king) {
      const sleeping = !cur.ka[owner];
      fig.head.rotation.z = sleeping ? 0.45 : 0;
      fig.head.rotation.x = sleeping ? 0.25 : 0;
      fig.armR.rotation.x = sleeping ? 0 : -0.3 - a * 1.2;
      fig.body.position.y = Math.sin(tsec * (sleeping ? 1.2 : 2.4) + i) * 0.02;
      if (tw.cannon) tw.cannon.position.y = tw.h + 0.5 - a * 0.08;
    } else {
      fig.aiming = shooting;
      fig.body.position.y = 0;
      this.animate(fig, tsec + i, false, a, false);
    }
  }

  updateProjs(rt) {
    this.projs = this.projs.filter(p => {
      if (rt < p.start) { p.obj.visible = false; return true; }
      p.obj.visible = true;
      const prog = Math.min(1, ((rt - p.start) * DT) / p.dur);
      const tp = this.pos.get(p.tid);
      if (tp) { p.tx = tp.x; p.ty = tp.y; p.ta = tp.air ? 1 : 0; }
      const tw = this.towerAt(p.tx, p.ty);
      const h1 = tw && tw.alive ? 1.6 : p.ta ? 1.25 : 0.55;
      if (prog >= 1) {
        if (p.p !== 'fire' && p.p !== 'magic') this.burst(p.tx, p.ty, h1, 3, ['#ffffff', '#ffe08a'], 1.5, 0.18, 0.05);
        this.scene.remove(p.obj);
        return false;
      }
      const dist = Math.hypot(p.tx - p.fx, p.ty - p.fy);
      const arc = (p.p === 'cannon' ? 0.22 : p.p === 'arrow' || p.p === 'tower' ? 0.12 : 0.05) * dist;
      const pos = (q) => [lerp(p.fx, p.tx, q), lerp(p.fy, p.ty, q), lerp(p.h0, h1, q) + Math.sin(q * PI) * arc];
      const [x, y, h] = pos(prog);
      p.obj.position.set(wx(x), h, wz(y));
      const [x2, y2, h2] = pos(Math.min(1, prog + 0.05));
      this.tmpV.set(wx(x2), h2, wz(y2));
      if (this.tmpV.distanceToSquared(p.obj.position) > 1e-6) p.obj.lookAt(this.tmpV);
      if ((p.p === 'fire' || p.p === 'magic') && Math.random() < 0.6) {
        this.parts.push({ x, y, z: h, vx: Math.random() - 0.5, vy: Math.random() - 0.5, vz: 0.3, life: 0.3, t: 0, size: 0.09,
          color: p.p === 'fire' ? '#ffb347' : '#c79bff', grav: 0 });
      }
      return true;
    });
  }

  updateSpells(rt) {
    this.spells = this.spells.filter(s => {
      if (rt < s.start) { s.obj.visible = false; s.shadow.visible = false; return true; }
      const prog = ((rt - s.start) * DT) / s.dur;
      if (prog >= 1) { this.scene.remove(s.obj, s.shadow); return false; }
      s.obj.visible = s.shadow.visible = true;
      const x = lerp(s.fx, s.x, prog), y = lerp(s.fy, s.y, prog);
      const h = lerp(3.4, 0.3, prog) + Math.sin(prog * PI) * 3.5;
      s.obj.position.set(wx(x), h, wz(y));
      s.obj.rotation.y += 0.2;
      s.shadow.position.set(wx(x), 0.05, wz(y));
      s.shadow.scale.setScalar(0.4 + prog * 0.8);
      for (let i = 0; i < 2; i++) {
        this.parts.push({ x, y, z: h, vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2, vz: 0.6, life: 0.45, t: 0,
          size: 0.2 + Math.random() * 0.14, color: ['#ff9a2e', '#ffd36e', '#ff5a00'][i % 3], grav: 0 });
      }
      return true;
    });
  }

  updateFx(dt) {
    this.fx = this.fx.filter(f => {
      f.t += dt;
      const k = f.t / f.dur;
      if (k >= 1) { this.scene.remove(f.obj); f.obj.material && f.obj.material.dispose(); return false; }
      f.update(k);
      return true;
    });
  }

  updateGhost(gh, frame) {
    const hideAll = () => {
      for (const z of this.zones) z.visible = false;
      this.lineMesh.visible = this.tile.visible = this.range.visible = this.spellArea.visible = false;
      for (const r of this.ghostRigs.values()) r.root.visible = false;
    };
    hideAll();
    if (!gh || !frame) return;
    const card = CARDS[gh.card];
    if (card.type === 'spell') {
      const r = card.spell.radius;
      this.spellArea.visible = this.range.visible = true;
      this.spellArea.position.set(wx(gh.x), 0.09, wz(gh.y));
      this.spellArea.scale.setScalar(r);
      this.range.position.set(wx(gh.x), 0.1, wz(gh.y));
      this.range.scale.setScalar(r);
      this.rangeMat.color.set(0xffe0a0);
      return;
    }
    // zonas prohibidas (en coordenadas del mundo)
    const me = this.me, foe = 1 - me;
    const rects = [];
    for (let lane = 0; lane < 2; lane++) {
      const x0 = lane === 0 ? 0 : W2;
      let pocket = false;
      if (card.type !== 'building') {
        for (let i = 0; i < 2; i++) {
          const tid = foe * 3 + i;
          const [tx] = this.towerPos[tid];
          if ((tx < W2 ? 0 : 1) === lane && frame.tw[tid] <= 0) pocket = true;
        }
      }
      if (me === 0) {
        if (pocket) { rects.push([x0, 0, W2, RIVER_TOP - 4]); rects.push([x0, RIVER_TOP, W2, RIVER_BOT - RIVER_TOP]); }
        else rects.push([x0, 0, W2, RIVER_BOT]);
      } else {
        if (pocket) { rects.push([x0, RIVER_BOT + 4, W2, H - RIVER_BOT - 4]); rects.push([x0, RIVER_TOP, W2, RIVER_BOT - RIVER_TOP]); }
        else rects.push([x0, RIVER_TOP, W2, H - RIVER_TOP]);
      }
    }
    rects.forEach(([x, y, w, h], i) => {
      const z = this.zones[i];
      z.visible = true;
      z.position.set(wx(x + w / 2), 0.06, wz(y + h / 2));
      z.scale.set(w, h, 1);
    });
    this.lineMesh.visible = true;
    this.lineMesh.position.set(0, 0.07, wz(me === 0 ? RIVER_BOT : RIVER_TOP));
    this.tile.visible = true;
    this.tile.position.set(wx(gh.x), 0.08, wz(gh.y));
    this.tileMat.color.set(gh.valid ? 0xffffff : 0xff3030);
    const u = card.unit;
    if (u.proj || card.type === 'building') {
      this.range.visible = true;
      this.range.position.set(wx(gh.x), 0.1, wz(gh.y));
      this.range.scale.setScalar(u.range + u.radius);
      this.rangeMat.color.set(0xffffff);
    }
    const n = card.count || 1;
    const offs = n === 1 ? [[0, 0]] : n === 2 ? [[-0.55, 0], [0.55, 0]] : [[0, -0.45], [-0.55, 0.4], [0.55, 0.4]];
    const f = me === 0 ? 1 : -1;
    this.ghostMat.color.set(gh.valid ? 0xffffff : 0xff6060);
    offs.forEach(([ox, oy], i) => {
      const r = this.ghostRig(gh.card, i);
      r.root.visible = true;
      r.root.position.set(wx(gh.x + ox * f), 0, wz(gh.y + oy * f));
      r.root.rotation.y = me === 0 ? PI : 0;
      r.body.position.y = r.lift || 0;
    });
  }

  // ---------- Capa 2D ----------
  drawUnitHud(it) {
    const { e, card } = it;
    const [, ci, owner, , , hp, dep] = e;
    const u = this.units.get(it.id);
    const g = this.octx, S = this.S;
    const mine = owner === this.me;
    const rig = u && u.rig;
    const top = (rig ? ((rig.lift || 0) + rig.height * (rig.kind === 'golem' ? 0.95 : 1)) * (rig.vs || 1) : 1) + 0.25;
    const max = card.unit.hp;
    if (dep > 0) {
      const [sx, sy] = this.screenOf(it.x, it.y, 0.05);
      g.strokeStyle = '#fff'; g.lineWidth = 3;
      g.beginPath();
      g.ellipse(sx, sy, S * 0.55, S * 0.36, 0, -PI / 2, -PI / 2 + PI * 2 * (1 - dep / 10));
      g.stroke();
    }
    if (hp < max || ci === C.ballista) {
      const [sx, sy] = this.screenOf(it.x, it.y, top);
      const bw = Math.max(S * (card.unit.radius > 0.6 ? 1.4 : 0.95), 18), bh = Math.max(4, S * 0.15);
      g.fillStyle = 'rgba(0,0,0,0.6)';
      g.fillRect(sx - bw / 2 - 1, sy - bh - 1, bw + 2, bh + 2);
      g.fillStyle = mine ? CSS.me.bar : CSS.foe.bar;
      g.fillRect(sx - bw / 2, sy - bh, bw * Math.max(0, hp / max), bh);
    }
  }

  drawTowerHud(i, cur, now) {
    const hp = cur.tw[i];
    if (hp <= 0) return;
    const tw = this.towers[i];
    const g = this.octx, S = this.S;
    const owner = i < 3 ? 0 : 1;
    const kind = TOWER_LAYOUT[i % 3].kind;
    const max = TOWERS[kind].hp;
    const [x, y] = this.towerPos[i];
    const mine = owner === this.me;
    const bw = S * (tw.king ? 2.6 : 2.1), bh = Math.max(10, S * 0.42);
    let sx, sy, by;
    if (mine) {
      // las mías, en la base del lado de la cámara (no tapan a la arquera ni al rey)
      const half = (tw.king ? 3.3 : 2.5) / 2 + 0.55;
      [sx, sy] = this.screenOf(x, y + (this.me === 0 ? half : -half), 0);
      by = sy - bh * 0.3;
    } else {
      [sx, sy] = this.screenOf(x, y, tw.h + (tw.king ? 2.0 : 1.55));
      by = sy - bh;
    }
    const bx = sx - bw / 2;
    g.fillStyle = 'rgba(0,0,0,0.6)';
    rr(g, bx - 2, by - 2, bw + 4, bh + 4, 4); g.fill();
    g.fillStyle = mine ? CSS.me.bar : CSS.foe.bar;
    rr(g, bx, by, bw * Math.max(0, Math.min(1, hp / max)), bh, 3); g.fill();
    g.fillStyle = '#fff';
    g.font = `800 ${Math.round(bh * 0.82)}px Rubik, system-ui, sans-serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(String(hp), sx, by + bh / 2 + 1);
    g.textAlign = 'start'; g.textBaseline = 'alphabetic';
    if (tw.king && !cur.ka[owner]) {
      const [zx0, zy] = this.screenOf(x, y, tw.h + 3.3);
      const zx = zx0 + S * 1.1;
      const t = now / 700;
      g.fillStyle = 'rgba(255,255,255,0.95)';
      g.font = `800 ${Math.round(S * 0.6)}px Rubik, system-ui, sans-serif`;
      g.fillText('z', zx + S * 0.7, zy - (t % 1) * S * 0.5);
      g.font = `800 ${Math.round(S * 0.42)}px Rubik, system-ui, sans-serif`;
      g.fillText('z', zx + S * 1.1, zy - S * 0.4 - ((t + 0.5) % 1) * S * 0.5);
    }
  }

  drawMarks(dt) {
    const g = this.octx;
    this.marks = this.marks.filter(m => {
      m.t += dt;
      if (m.t > 2) return false;
      const r = CARDS[m.card].spell.radius;
      const mine = m.owner === this.me;
      g.save();
      g.strokeStyle = mine ? 'rgba(160,200,255,0.9)' : 'rgba(255,150,150,0.9)';
      g.lineWidth = 2.5;
      g.setLineDash([8, 6]);
      g.lineDashOffset = -m.t * 40;
      g.beginPath();
      for (let k = 0; k <= 40; k++) {
        const a = (k / 40) * PI * 2;
        const [sx, sy] = this.screenOf(m.x + Math.cos(a) * r, m.y + Math.sin(a) * r, 0.1);
        k ? g.lineTo(sx, sy) : g.moveTo(sx, sy);
      }
      g.stroke();
      g.restore();
      return true;
    });
  }

  drawParts(dt) {
    const g = this.octx, S = this.S;
    if (this.parts.length > 600) this.parts.splice(0, this.parts.length - 600);
    this.parts = this.parts.filter(p => {
      p.t += dt;
      if (p.t >= p.life) return false;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.z = Math.max(0, p.z + p.vz * dt);
      p.vz -= p.grav * dt;
      p.vx *= 0.96; p.vy *= 0.96;
      const k = p.t / p.life;
      const [sx, sy] = this.screenOf(p.x, p.y, p.z);
      const size = p.size * S * (p.grow ? 1 + k * 2 : 1 - k * 0.5);
      g.globalAlpha = 1 - k;
      g.fillStyle = p.color === 'smoke' ? 'rgba(235,235,235,0.5)' : p.color === 'dust' ? 'rgba(210,190,150,0.6)' : p.color;
      g.beginPath(); g.arc(sx, sy, size, 0, 7); g.fill();
      return true;
    });
    g.globalAlpha = 1;
  }

  drawBubbles(dt) {
    const g = this.octx, S = this.S;
    this.bubbles = this.bubbles.filter(b => {
      b.t += dt;
      if (b.t >= b.max) return false;
      const [x, y] = this.towerPos[b.owner * 3 + 2];
      const mine = b.owner === this.me;
      let [sx, sy] = this.screenOf(x, y, 3.5);
      sx += mine ? -S * 3.6 : S * 3.6;
      const pop = Math.min(1, b.t / 0.15) * (b.t > b.max - 0.25 ? (b.max - b.t) / 0.25 : 1);
      const r = S * 1.2 * pop;
      g.fillStyle = '#fff';
      g.strokeStyle = mine ? CSS.me.main : CSS.foe.main;
      g.lineWidth = 3;
      g.beginPath(); g.arc(sx, sy, r, 0, 7); g.fill(); g.stroke();
      const sp = emojiSprite(b.ch, r * 1.25);
      g.drawImage(sp, sx - sp.width / 2, sy - sp.height / 2);
      return true;
    });
  }

  drawTexts(dt) {
    const g = this.octx, S = this.S;
    this.texts = this.texts.filter(t => {
      t.t += dt;
      if (t.t >= t.max) return false;
      const k = t.t / t.max;
      const sz = (t.big ? 2.2 : 1.2) * S * (k < 0.15 ? k / 0.15 : 1);
      const sp = emojiSprite(t.txt, sz);
      g.globalAlpha = k > 0.7 ? (1 - k) / 0.3 : 1;
      g.drawImage(sp, t.sx - sp.width / 2, t.sy - sp.height / 2 - k * S * 1.5);
      g.globalAlpha = 1;
      return true;
    });
  }
}

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}
