// Arena Duel — modelos 3D de todas las unidades, torres y objetos de hechizo.
// Se construyen con piezas simples (cápsulas, esferas, extrusiones) agrupadas en articulaciones
// con nombre (body, head, armL, armR…) que luego se animan y se dibujan con instancing.
import {
  Group, Mesh, Object3D, BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, DodecahedronGeometry,
  IcosahedronGeometry, OctahedronGeometry, TorusGeometry, CapsuleGeometry, LatheGeometry, ExtrudeGeometry, Shape,
  Vector2, Vector3, Color, Matrix4, MeshLambertMaterial, MeshBasicMaterial, BufferAttribute,
  mergeGeometries, RoundedBoxGeometry,
} from '../lib/three.js';

export const PI = Math.PI;

export const TEAMS = {
  me: { main: 0x2f6fe8, dark: 0x1b45a6, light: 0x8cc0ff, glow: 0x9fe0ff, trim: 0xf2c94c },
  foe: { main: 0xe0383b, dark: 0x981c1f, light: 0xff9e9e, glow: 0xffc08a, trim: 0xf2c94c },
};

const C = {
  skin: 0xf6cba5, skinDk: 0xe0a982, gob: 0x7ccf4a, gobDk: 0x5aa832, bone: 0xf1ead8, boneDk: 0xcfc6ad,
  metal: 0xc9d3de, metalDk: 0x8995a6, steel: 0xe8eef4, gold: 0xf2b631, goldDk: 0xc4861a,
  wood: 0xa86b38, woodDk: 0x6b4220, leather: 0x8a5a33, leatherDk: 0x5c3a1e, cloth: 0xefe6d2,
  ink: 0x1d1d24, white: 0xffffff, eye: 0xffffff, mouth: 0x6e2a2a, red: 0xd93838,
  hairOr: 0xe8862c, hairBr: 0x7a4a24, hairBl: 0xf2d27a, hairDk: 0x3a2a22, beard: 0xd7d2c8,
  rock: 0x968f84, rockDk: 0x6f695f, rockLt: 0xb7b0a3, moss: 0x5f9e3c, fur: 0x8b6f52, furLt: 0xc9b08f,
  wolf: 0x7f8794, wolfDk: 0x555c68, wolfLt: 0xc8ced6, horse: 0xf4efe6, horseDk: 0xcfc4b2, mane: 0xd9d0c0,
  ice: 0xbfeaff, iceDk: 0x7cc8f0, purple: 0x6b3fa0, purpleDk: 0x3f2366, dark: 0x2e2a36, black: 0x24222a,
  bomb: 0x2b2b33, fire: 0xff8a1a,
};

// ---------- Geometrías (con caché) ----------
const geos = new Map();
const G = (k, f) => { let g = geos.get(k); if (!g) { g = f(); geos.set(k, g); } return g; };
export const geo = {
  box: (w, h, d) => G(`b${w}|${h}|${d}`, () => new BoxGeometry(w, h, d)),
  rbox: (w, h, d, r = 0.03) => G(`rb${w}|${h}|${d}|${r}`, () => new RoundedBoxGeometry(w, h, d, 1, Math.min(r, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3))),
  cap: (r, len, rs = 8) => G(`cp${r}|${len}|${rs}`, () => new CapsuleGeometry(r, len, 2, rs)),
  sph: (r, w = 14, h = 10) => G(`s${r}|${w}|${h}`, () => new SphereGeometry(r, Math.max(5, Math.round(w * 0.72)), Math.max(4, Math.round(h * 0.72)))),
  hemi: (r, w = 14) => G(`hs${r}|${w}`, () => new SphereGeometry(r, Math.round(w * 0.75), 5, 0, PI * 2, 0, PI / 2)),
  cyl: (a, b, h, s = 12) => G(`c${a}|${b}|${h}|${s}`, () => new CylinderGeometry(a, b, h, Math.max(5, Math.round(s * 0.75)))),
  cone: (r, h, s = 10) => G(`k${r}|${h}|${s}`, () => new ConeGeometry(r, h, Math.max(4, Math.round(s * 0.8)))),
  rock: (r, d = 0) => G(`d${r}|${d}`, () => new DodecahedronGeometry(r, d)),
  ico: (r, d = 0) => G(`i${r}|${d}`, () => new IcosahedronGeometry(r, d)),
  oct: (r) => G(`o${r}`, () => new OctahedronGeometry(r, 0)),
  tor: (R, t, arc = PI * 2, rs = 6, ts = 16) => G(`t${R}|${t}|${arc}|${rs}|${ts}`, () => new TorusGeometry(R, t, Math.min(rs, 5), Math.max(6, Math.round(ts * 0.75)), arc)),
  lathe: (key, pts, seg = 14) => G(`l${key}`, () => new LatheGeometry(pts.map(([x, y]) => new Vector2(x, y)), Math.round(seg * 0.75))),
  ext: (key, shapeFn, depth, bevel = 0.01) => G(`e${key}`, () => {
    const g = new ExtrudeGeometry(shapeFn(), { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 5 });
    g.translate(0, 0, -depth / 2);
    return g;
  }),
};

// ---------- Siluetas para extrusiones ----------
const shapes = {
  blade: () => { const s = new Shape(); s.moveTo(-0.032, 0); s.lineTo(0.032, 0); s.lineTo(0.03, 0.4); s.lineTo(0, 0.48); s.lineTo(-0.03, 0.4); s.closePath(); return s; },
  dagger: () => { const s = new Shape(); s.moveTo(-0.025, 0); s.lineTo(0.025, 0); s.quadraticCurveTo(0.03, 0.15, 0, 0.22); s.quadraticCurveTo(-0.01, 0.12, -0.025, 0); return s; },
  heater: () => {
    const s = new Shape();
    s.moveTo(-0.17, 0.16); s.lineTo(0.17, 0.16); s.lineTo(0.17, 0.0);
    s.quadraticCurveTo(0.15, -0.16, 0, -0.24); s.quadraticCurveTo(-0.15, -0.16, -0.17, 0.0); s.closePath();
    return s;
  },
  axe: () => {
    const s = new Shape();
    s.moveTo(0, -0.05); s.lineTo(0.06, -0.08); s.quadraticCurveTo(0.2, -0.16, 0.22, 0.0);
    s.quadraticCurveTo(0.2, 0.16, 0.06, 0.08); s.lineTo(0, 0.05); s.closePath();
    return s;
  },
  dragonWing: () => {
    const s = new Shape();
    s.moveTo(0, 0); s.lineTo(0.1, 0.08); s.lineTo(0.78, 0.2); s.quadraticCurveTo(0.64, 0.02, 0.62, -0.12);
    s.quadraticCurveTo(0.5, -0.04, 0.42, -0.2); s.quadraticCurveTo(0.3, -0.08, 0.2, -0.2); s.quadraticCurveTo(0.12, -0.06, 0, -0.08); s.closePath();
    return s;
  },
  batWing: () => {
    const s = new Shape();
    s.moveTo(0, 0.02); s.lineTo(0.36, 0.12); s.quadraticCurveTo(0.3, 0.0, 0.32, -0.1);
    s.quadraticCurveTo(0.22, -0.04, 0.18, -0.12); s.quadraticCurveTo(0.1, -0.04, 0, -0.06); s.closePath();
    return s;
  },
  bolt: () => {
    const s = new Shape();
    s.moveTo(0.05, 0.5); s.lineTo(-0.2, 0.02); s.lineTo(-0.02, 0.04); s.lineTo(-0.12, -0.5); s.lineTo(0.2, 0.06); s.lineTo(0.02, 0.04); s.lineTo(0.16, 0.5); s.closePath();
    return s;
  },
  feather: () => { const s = new Shape(); s.moveTo(0, 0); s.quadraticCurveTo(0.05, 0.1, 0, 0.22); s.quadraticCurveTo(-0.05, 0.1, 0, 0); return s; },
  ear: () => { const s = new Shape(); s.moveTo(0, 0); s.lineTo(0.22, 0.05); s.quadraticCurveTo(0.08, 0.1, 0, 0.09); s.closePath(); return s; },
  tomb: () => { const s = new Shape(); s.moveTo(-0.3, 0); s.lineTo(0.3, 0); s.lineTo(0.3, 0.45); s.absarc(0, 0.45, 0.3, 0, PI, false); s.closePath(); return s; },
  arch: () => {
    const s = new Shape(); s.moveTo(-0.22, 0); s.lineTo(0.22, 0); s.lineTo(0.22, 0.3); s.absarc(0, 0.3, 0.22, 0, PI, false); s.closePath(); return s;
  },
};
const ext = (key, depth, bevel) => geo.ext(key + depth + bevel, shapes[key], depth, bevel);

// ---------- Materiales de construcción (solo se usan al montar; luego se fusionan) ----------
const buildMats = new Map();
function bmat(color, glow) {
  const k = (glow ? 'g' : 'l') + color;
  let m = buildMats.get(k);
  if (!m) {
    m = glow ? new MeshBasicMaterial({ color }) : new MeshLambertMaterial({ color });
    m.userData.glow = !!glow;
    buildMats.set(k, m);
  }
  return m;
}

// part(geometría, color, [x,y,z], [rx,ry,rz], [sx,sy,sz] | s, padre, brillo)
function P(g, color, pos, rot, scl, parent, glow = false) {
  const m = new Mesh(g, bmat(color, glow));
  if (pos) m.position.set(pos[0], pos[1], pos[2]);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  if (scl !== undefined && scl !== null) {
    if (typeof scl === 'number') m.scale.setScalar(scl); else m.scale.set(scl[0], scl[1], scl[2]);
  }
  if (parent) parent.add(m);
  return m;
}
function pivot(name, parent, x = 0, y = 0, z = 0) {
  const g = new Group();
  g.name = name;
  g.position.set(x, y, z);
  if (parent) parent.add(g);
  return g;
}

// ---------- Cuerpo base chibi ----------
// Devuelve un rig con articulaciones: body, legL, legR, armL, armR, head
function chibi(o = {}) {
  const skin = o.skin ?? C.skin;
  const headR = o.headR ?? 0.21;
  const root = new Group();
  const body = pivot('body', root);
  const hip = o.hip ?? 0.27;
  const bw = o.bodyW ?? 1;
  const legL = pivot('legL', body, -0.075 * bw, hip, 0);
  const legR = pivot('legR', body, 0.075 * bw, hip, 0);
  for (const leg of [legL, legR]) {
    P(geo.cap(0.058 * bw, 0.1), o.pants ?? C.leather, [0, -0.1, 0], null, null, leg);
    P(geo.rbox(0.12 * bw, 0.08, 0.17, 0.035), o.boots ?? C.leatherDk, [0, -0.225, 0.025], null, null, leg);
  }
  // torso
  const tH = o.torsoH ?? 0.25;
  P(geo.cyl(0.14 * bw, 0.165 * bw, tH, 14), o.top ?? C.cloth, [0, hip + tH / 2 - 0.01, 0], null, [1, 1, 0.82], body);
  P(geo.sph(0.165 * bw, 14, 8), o.top ?? C.cloth, [0, hip + 0.01, 0], null, [1, 0.45, 0.82], body);
  if (o.belt !== false) P(geo.cyl(0.168 * bw, 0.168 * bw, 0.045, 14), o.belt ?? C.leatherDk, [0, hip + 0.04, 0], null, [1, 1, 0.84], body);
  if (o.buckle !== false && o.belt !== false) P(geo.rbox(0.06, 0.05, 0.02, 0.008), C.gold, [0, hip + 0.04, 0.14 * bw], null, null, body);
  // cabeza
  const head = pivot('head', body, 0, hip + tH + headR * 0.82, 0);
  P(geo.sph(headR, 18, 14), skin, [0, 0, 0], null, o.headScale ?? null, head);
  if (o.face !== false) face(head, headR, o);
  // brazos
  const sh = hip + tH - 0.04;
  const armL = pivot('armL', body, -(0.165 * bw + 0.04), sh, 0);
  const armR = pivot('armR', body, 0.165 * bw + 0.04, sh, 0);
  for (const [arm, k] of [[armL, -1], [armR, 1]]) {
    arm.rotation.z = k * 0.12;
    P(geo.cap(0.05 * bw, 0.1), o.sleeve ?? o.top ?? C.cloth, [0, -0.08, 0], null, null, arm);
    P(geo.sph(0.06 * bw, 10, 8), o.hands ?? skin, [0, -0.175, 0], null, null, arm);
  }
  return { root, body, head, armL, armR, legL, legR, headR, hand: -0.175, hip, top: hip + tH + headR * 1.8, anim: 'biped' };
}

function face(head, r, o) {
  const ex = r * 0.36, ey = o.eyeY ?? r * 0.06, ez = r * 0.86;
  if (o.eyes !== false) {
    for (const k of [-1, 1]) {
      P(geo.sph(r * 0.2, 10, 8), C.eye, [k * ex, ey, ez], null, [1, 1.15, 0.55], head);
      P(geo.sph(r * 0.11, 8, 6), o.pupil ?? C.ink, [k * ex, ey - r * 0.01, ez + r * 0.1], null, [1, 1.2, 0.5], head);
      P(geo.sph(r * 0.035, 6, 4), C.white, [k * ex + r * 0.04, ey + r * 0.05, ez + r * 0.15], null, null, head, true);
      if (o.brows !== false) P(geo.rbox(r * 0.36, r * 0.07, r * 0.06, r * 0.03), o.browColor ?? C.hairDk, [k * ex, ey + r * 0.32, ez - r * 0.02], [0, 0, k * (o.angry ? -0.35 : 0.12)], null, head);
    }
  }
  if (o.nose !== false) P(geo.sph(r * 0.12, 8, 6), o.noseColor ?? (o.skin ?? C.skin), [0, ey - r * 0.2, ez + r * 0.06], null, o.noseScale ?? null, head);
  if (o.mouth !== false) P(geo.rbox(r * 0.32, r * 0.08, r * 0.06, r * 0.035), C.mouth, [0, ey - r * 0.44, ez - r * 0.08], [0.25, 0, 0], null, head);
}

// Armas y accesorios
function sword(parent, len = 1, color = C.steel) {
  const g = pivot('swordP', parent, 0, -0.175, 0.02);
  g.rotation.x = PI / 2;
  P(ext('blade', 0.016, 0.006), color, [0, 0.07, 0], null, [len, len, 1], g);
  P(geo.rbox(0.16, 0.035, 0.04, 0.012), C.gold, [0, 0.06, 0], null, null, g);
  P(geo.cyl(0.018, 0.02, 0.09, 8), C.leatherDk, [0, 0.01, 0], null, null, g);
  P(geo.sph(0.026, 8, 6), C.gold, [0, -0.04, 0], null, null, g);
  return g;
}

// ---------- Personajes ----------
const builders = {};

builders.knight = (t) => {
  const r = chibi({ top: C.metal, sleeve: C.metal, pants: C.metalDk, boots: C.metalDk, hands: C.metalDk, belt: C.leatherDk, headR: 0.2, brows: false });
  const { head, body, armL, armR } = r;
  // tabardo con el color del equipo
  P(geo.rbox(0.22, 0.26, 0.03, 0.012), t.main, [0, r.hip + 0.11, 0.135], null, null, body);
  P(geo.rbox(0.05, 0.16, 0.035, 0.012), t.trim, [0, r.hip + 0.13, 0.15], null, null, body);
  P(geo.rbox(0.13, 0.04, 0.035, 0.012), t.trim, [0, r.hip + 0.16, 0.15], null, null, body);
  // hombreras
  for (const k of [-1, 1]) P(geo.hemi(0.08), C.steel, [k * 0.2, r.hip + 0.22, 0], [0, 0, -k * 0.5], [1, 0.8, 1], body);
  // yelmo (cubre la parte de arriba de la cara)
  const hr = r.headR;
  P(geo.lathe('kh2', [[0, 0.05], [0.222, 0.05], [0.235, 0.09], [0.22, 0.17], [0.16, 0.23], [0.08, 0.255], [0, 0.262]], 18), C.steel, [0, 0.0, 0], null, null, head);
  P(geo.tor(0.226, 0.018, PI * 2, 6, 24), C.metalDk, [0, 0.06, 0], [PI / 2, 0, 0], null, head);
  P(geo.sph(hr * 1.1, 16, 10), C.steel, [0, 0.0, -0.05], null, [1, 0.95, 0.85], head).scale.set(1.0, 0.95, 0.8);
  for (const k of [-1, 1]) P(geo.rbox(0.05, 0.16, 0.12, 0.02), C.steel, [k * 0.205, -0.03, 0.04], [0, 0, k * 0.08], null, head);
  P(geo.rbox(0.035, 0.12, 0.03, 0.012), C.metalDk, [0, 0.04, hr * 1.02], [-0.1, 0, 0], null, head);
  // penacho
  for (let i = 0; i < 5; i++) P(geo.sph(0.06, 8, 6), t.main, [0, 0.25 + Math.sin(i * 0.6) * 0.03, 0.08 - i * 0.07], null, [0.6, 1, 1.1], head);
  // espada y escudo
  sword(armR, 1.05);
  const sh = pivot('shield', armL, -0.05, -0.15, 0.06);
  sh.rotation.set(0, -PI / 2 + 0.25, 0);
  P(ext('heater', 0.035, 0.014), t.main, [0, 0, 0], null, 1.0, sh);
  P(ext('heater', 0.02, 0.006), t.trim, [0, 0, 0.012], null, [0.78, 0.78, 1.4], sh);
  P(ext('heater', 0.02, 0.006), t.main, [0, 0.0, 0.022], null, [0.62, 0.62, 1.4], sh);
  P(geo.rbox(0.04, 0.2, 0.02, 0.008), t.trim, [0, -0.02, 0.035], null, null, sh);
  P(geo.rbox(0.18, 0.04, 0.02, 0.008), t.trim, [0, 0.04, 0.035], null, null, sh);
  r.attack = 'swing';
  return r;
};

builders.archer = (t) => {
  const r = chibi({ top: t.main, sleeve: C.cloth, pants: C.leatherDk, boots: C.leather, belt: C.leather, headR: 0.21, browColor: 0xa85a1c });
  const { head, body, armL, armR } = r;
  const hr = r.headR;
  // pelo con flequillo y coleta
  P(geo.sph(hr * 1.06, 16, 12), C.hairOr, [0, 0.03, -0.02], null, [1, 0.98, 1], head).scale.set(1, 1, 1);
  P(geo.sph(hr * 0.55, 10, 8), C.hairOr, [0.08, hr * 0.62, hr * 0.62], [0, 0, -0.5], [1.2, 0.55, 0.6], head);
  P(geo.sph(hr * 0.5, 10, 8), C.hairOr, [-0.1, hr * 0.6, hr * 0.6], [0, 0, 0.6], [1.1, 0.5, 0.6], head);
  const tail = pivot('tail', head, 0, 0.04, -hr * 0.95);
  P(geo.cap(0.06, 0.18), C.hairOr, [0, -0.12, -0.04], [0.4, 0, 0], null, tail);
  P(geo.tor(0.05, 0.016), t.main, [0, -0.01, -0.02], [PI / 2, 0, 0], null, tail);
  // capucha (detrás) y capa corta
  P(geo.sph(hr * 1.12, 14, 10), t.dark, [0, -0.02, -0.1], null, [1, 0.9, 0.7], head);
  P(geo.cone(0.22, 0.3, 12), t.dark, [0, r.hip + 0.12, -0.08], [0.18, 0, 0], [1, 1, 0.45], body);
  // carcaj con flechas
  const q = pivot('quiver', body, 0.04, r.hip + 0.2, -0.15);
  q.rotation.set(0.2, 0, -0.45);
  P(geo.cyl(0.055, 0.045, 0.28, 10), C.leather, [0, 0, 0], null, null, q);
  for (let i = 0; i < 3; i++) P(ext('feather', 0.01, 0.003), [C.white, C.red, C.white][i], [(i - 1) * 0.03, 0.15, 0], null, 0.7, q);
  // arco en la mano izquierda
  const bow = pivot('bow', armL, 0, -0.175, 0.05);
  bow.rotation.set(0, PI / 2, 0);
  P(geo.tor(0.24, 0.016, PI * 0.95, 6, 18), C.woodDk, [0, 0, 0], [0, 0, PI * 0.525 - PI], null, bow);
  P(geo.cyl(0.004, 0.004, 0.47, 4), C.white, [-0.03, 0, 0], null, null, bow);
  P(geo.cyl(0.022, 0.022, 0.08, 8), C.leather, [0.235, 0, 0], null, null, bow);
  r.attack = 'bow';
  return r;
};

builders.goblin = (t) => {
  const r = chibi({ skin: C.gob, top: t.main, sleeve: C.gob, pants: C.leatherDk, boots: C.leatherDk, belt: C.leather, headR: 0.24, bodyW: 0.85, hip: 0.22, torsoH: 0.2, angry: true, browColor: C.gobDk, noseColor: C.gobDk, noseScale: [1, 0.9, 2.2] });
  const { head, armR } = r;
  const hr = r.headR;
  for (const k of [-1, 1]) {
    const e = P(ext('ear', 0.025, 0.008), C.gob, [k * hr * 0.88, 0.02, -0.02], [0, k > 0 ? 0 : PI, 0.15], [1.3, 1.3, 1], head);
    e.rotation.y = k > 0 ? -0.25 : PI + 0.25;
  }
  // gorro de tela con el color del equipo
  P(geo.cone(hr * 0.75, 0.22, 10), t.main, [0, hr * 0.85, -0.03], [-0.35, 0, 0], null, head);
  P(geo.sph(0.035, 6, 5), t.trim, [0, hr * 0.85 + 0.09, -0.08], null, null, head);
  // dientes
  P(geo.cone(0.02, 0.04, 4), C.white, [-0.03, -hr * 0.36, hr * 0.84], [PI, 0, 0], null, head);
  P(geo.cone(0.02, 0.04, 4), C.white, [0.03, -hr * 0.36, hr * 0.84], [PI, 0, 0], null, head);
  // puñal
  const d = pivot('dagger', armR, 0, -0.175, 0.02);
  d.rotation.x = PI / 2;
  P(ext('dagger', 0.014, 0.005), C.steel, [0, 0.04, 0], null, 1.0, d);
  P(geo.cyl(0.016, 0.016, 0.07, 6), C.leatherDk, [0, 0.0, 0], null, null, d);
  r.attack = 'swing';
  return r;
};

builders.skeleton = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  const hip = 0.24;
  const legL = pivot('legL', body, -0.06, hip, 0), legR = pivot('legR', body, 0.06, hip, 0);
  for (const l of [legL, legR]) {
    P(geo.cyl(0.022, 0.018, 0.2, 6), C.bone, [0, -0.1, 0], null, null, l);
    P(geo.rbox(0.06, 0.04, 0.1, 0.015), C.bone, [0, -0.215, 0.02], null, null, l);
  }
  P(geo.rbox(0.18, 0.05, 0.09, 0.02), C.bone, [0, hip, 0], null, null, body);
  P(geo.cyl(0.02, 0.02, 0.2, 6), C.boneDk, [0, hip + 0.1, -0.01], null, null, body);
  for (let i = 0; i < 3; i++) P(geo.tor(0.075 - i * 0.008, 0.014, PI * 1.4, 4, 10), C.bone, [0, hip + 0.09 + i * 0.05, 0.0], [PI / 2, 0, PI * 0.3 - PI], [1, 0.8, 1], body);
  // pañuelo del equipo
  P(geo.tor(0.07, 0.025, PI * 2, 6, 12), t.main, [0, hip + 0.22, 0], [PI / 2, 0, 0], null, body);
  P(geo.cone(0.05, 0.1, 4), t.main, [0, hip + 0.17, -0.07], [-0.4 + PI, 0, 0], null, body);
  const head = pivot('head', body, 0, hip + 0.37, 0);
  P(geo.sph(0.15, 14, 12), C.bone, [0, 0.02, 0], null, [1, 0.95, 1], head);
  P(geo.rbox(0.17, 0.09, 0.14, 0.04), C.bone, [0, -0.08, 0.03], null, null, head);
  for (const k of [-1, 1]) {
    P(geo.sph(0.045, 8, 6), C.ink, [k * 0.055, 0.0, 0.12], null, [1, 1.1, 0.6], head);
    P(geo.sph(0.016, 6, 4), t.glow, [k * 0.055, 0.0, 0.145], null, null, head, true);
  }
  P(geo.cone(0.022, 0.04, 3), C.ink, [0, -0.05, 0.14], [PI, 0, 0], null, head);
  for (let i = -2; i <= 2; i++) P(geo.rbox(0.022, 0.03, 0.02, 0.006), C.white, [i * 0.028, -0.1, 0.1], null, null, head);
  const armL = pivot('armL', body, -0.11, hip + 0.2, 0), armR = pivot('armR', body, 0.11, hip + 0.2, 0);
  for (const [a, k] of [[armL, -1], [armR, 1]]) {
    a.rotation.z = k * 0.15;
    P(geo.cyl(0.018, 0.016, 0.17, 6), C.bone, [0, -0.085, 0], null, null, a);
    P(geo.sph(0.03, 6, 5), C.bone, [0, -0.175, 0], null, null, a);
  }
  const s = pivot('blade', armR, 0, -0.17, 0.02);
  s.rotation.x = PI / 2;
  P(ext('dagger', 0.012, 0.004), C.metal, [0, 0.03, 0], null, 1.1, s);
  P(geo.rbox(0.07, 0.02, 0.02, 0.006), C.goldDk, [0, 0.03, 0], null, null, s);
  return { root, body, head, armL, armR, legL, legR, headR: 0.15, hand: -0.175, hip, top: 0.72, anim: 'biped', attack: 'swing' };
};

builders.bat = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  P(geo.sph(0.13, 12, 10), 0x4a3a5e, [0, 0, 0], null, [1, 1.05, 0.95], body);
  P(geo.sph(0.09, 10, 8), 0x6d5a86, [0, -0.03, 0.06], null, [1, 1, 0.7], body);
  for (const k of [-1, 1]) {
    P(geo.cone(0.045, 0.12, 4), 0x4a3a5e, [k * 0.07, 0.13, 0], [0, 0, -k * 0.3], null, body);
    P(geo.sph(0.032, 8, 6), t.glow, [k * 0.045, 0.03, 0.11], null, null, body, true);
    P(geo.cone(0.012, 0.035, 4), C.white, [k * 0.025, -0.05, 0.11], [PI, 0, 0], null, body);
  }
  const wingL = pivot('wingL', body, -0.09, 0.02, -0.02), wingR = pivot('wingR', body, 0.09, 0.02, -0.02);
  P(ext('batWing', 0.012, 0.004), t.dark, [0, 0, 0], [PI / 2, PI, 0], 1, wingL);
  P(ext('batWing', 0.012, 0.004), t.dark, [0, 0, 0], [PI / 2, 0, 0], 1, wingR);
  return { root, body, wingL, wingR, top: 0.25, lift: 1.25, anim: 'bat' };
};

builders.grenadier = (t) => {
  const r = chibi({ top: t.main, sleeve: t.dark, pants: C.leatherDk, boots: C.black, belt: C.leatherDk, headR: 0.22, bodyW: 1.12, browColor: C.hairDk, angry: true });
  const { head, body, armR } = r;
  const hr = r.headR;
  // pañuelo y gafas
  P(geo.sph(hr * 1.04, 16, 10), t.main, [0, 0.04, -0.01], null, [1, 0.75, 1], head);
  P(geo.cone(0.06, 0.12, 6), t.main, [0, 0.05, -hr - 0.03], [-PI / 2 - 0.4, 0, 0], null, head);
  P(geo.tor(hr * 0.98, 0.02, PI * 2, 6, 20), C.leatherDk, [0, hr * 0.42, 0], [PI / 2 - 0.15, 0, 0], null, head);
  for (const k of [-1, 1]) {
    P(geo.cyl(0.055, 0.055, 0.05, 12), C.goldDk, [k * 0.08, hr * 0.5, hr * 0.78], [PI / 2 - 0.3, 0, 0], null, head);
    P(geo.cyl(0.042, 0.042, 0.052, 12), 0x9fdcff, [k * 0.08, hr * 0.5, hr * 0.79], [PI / 2 - 0.3, 0, 0], null, head, true);
  }
  // bigote
  P(geo.cap(0.025, 0.1, 6), C.hairDk, [0, -hr * 0.28, hr * 0.92], [0, 0, PI / 2], null, head);
  // cinturón de bombas
  for (const k of [-1, 0, 1]) P(geo.sph(0.045, 10, 8), C.bomb, [k * 0.1, r.hip + 0.04, 0.15 - Math.abs(k) * 0.03], null, null, body);
  // bomba en la mano
  const b = pivot('bomb', armR, 0, -0.2, 0.03);
  P(geo.sph(0.075, 12, 10), C.bomb, [0, 0, 0], null, null, b);
  P(geo.cyl(0.012, 0.012, 0.06, 6), C.leather, [0, 0.08, 0], null, null, b);
  P(geo.sph(0.025, 6, 5), 0xffd36e, [0, 0.12, 0], null, null, b, true);
  r.attack = 'throw';
  return r;
};

builders.barbarian = (t) => {
  const r = chibi({ top: C.skin, sleeve: C.skin, pants: t.main, boots: C.fur, belt: C.leatherDk, headR: 0.21, bodyW: 1.15, angry: true, browColor: 0xb8862a });
  const { head, body, armR } = r;
  const hr = r.headR;
  // casco con cuernos
  P(geo.hemi(hr * 1.02, 16), C.metal, [0, 0.04, 0], null, [1, 0.85, 1], head);
  P(geo.tor(hr * 1.0, 0.025, PI * 2, 6, 18), C.goldDk, [0, 0.05, 0], [PI / 2, 0, 0], null, head);
  for (const k of [-1, 1]) {
    const h = pivot('horn', head, k * hr * 0.9, 0.1, 0);
    h.rotation.z = -k * 0.9;
    P(geo.cone(0.045, 0.2, 8), C.bone, [0, 0.08, 0], null, null, h);
  }
  // pelo, bigote y barba rubios
  P(geo.sph(hr * 0.9, 12, 8), C.hairBl, [0, -0.02, -0.08], null, [1.1, 0.9, 0.8], head);
  P(geo.sph(hr * 0.75, 12, 10), C.hairBl, [0, -hr * 0.55, hr * 0.42], null, [1.05, 0.8, 0.7], head);
  for (const k of [-1, 1]) P(geo.cap(0.03, 0.1, 6), C.hairBl, [k * 0.07, -hr * 0.25, hr * 0.92], [0, 0, k * 1.2], null, head);
  // piel sobre los hombros y faja
  P(geo.tor(0.15, 0.05, PI * 2, 8, 16), C.fur, [0, r.hip + 0.24, 0], [PI / 2, 0, 0], [1, 0.85, 1], body);
  P(geo.rbox(0.05, 0.3, 0.05, 0.02), C.leatherDk, [0, r.hip + 0.12, 0.13], [0, 0, 0.7], null, body);
  // hacha
  const a = pivot('axe', armR, 0, -0.18, 0.02);
  a.rotation.x = PI / 2;
  P(geo.cyl(0.018, 0.018, 0.42, 8), C.wood, [0, 0.12, 0], null, null, a);
  P(ext('axe', 0.02, 0.006), C.steel, [0.0, 0.3, 0], null, 1.0, a);
  r.attack = 'swing';
  return r;
};

builders.giant = (t) => {
  const r = chibi({ top: t.main, sleeve: C.skin, pants: C.leatherDk, boots: C.leatherDk, belt: C.leatherDk, headR: 0.2, bodyW: 1.45, hip: 0.27, torsoH: 0.3, angry: true, browColor: 0x8a4a1a });
  const { head, body, armL, armR } = r;
  const hr = r.headR;
  // calvo con moño, barba trenzada
  P(geo.sph(0.06, 8, 6), 0xb5651d, [0, hr * 0.98, -0.06], null, null, head);
  P(geo.cyl(0.03, 0.03, 0.05, 8), t.trim, [0, hr * 0.9, -0.05], null, null, head);
  P(geo.sph(hr * 0.78, 12, 10), 0xb5651d, [0, -hr * 0.55, hr * 0.38], null, [1.1, 0.85, 0.7], head);
  P(geo.cap(0.035, 0.12, 6), 0xb5651d, [0, -hr * 1.15, hr * 0.5], null, null, head);
  P(geo.tor(0.03, 0.012), t.trim, [0, -hr * 1.18, hr * 0.5], [PI / 2, 0, 0], null, head);
  // brazos enormes
  for (const a of [armL, armR]) {
    a.children.forEach((m) => m.scale.multiplyScalar(1.25));
    P(geo.rbox(0.13, 0.08, 0.13, 0.03), C.leather, [0, -0.13, 0], null, null, a);
  }
  // tirantes
  for (const k of [-1, 1]) P(geo.rbox(0.045, 0.32, 0.03, 0.015), C.leatherDk, [k * 0.1, r.hip + 0.16, 0.18], [0, 0, k * 0.15], null, body);
  r.attack = 'punch';
  return r;
};

builders.pyromancer = (t) => {
  const r = chibi({ top: t.main, sleeve: t.main, pants: t.dark, boots: C.black, belt: C.gold, headR: 0.2, eyes: false, angry: true });
  const { head, body, armR, armL } = r;
  const hr = r.headR;
  // túnica larga
  P(geo.cone(0.27, 0.42, 14), t.main, [0, 0.21, 0], null, null, body);
  P(geo.tor(0.25, 0.02, PI * 2, 6, 20), 0xff8a1a, [0, 0.03, 0], [PI / 2, 0, 0], [1, 1, 1], body);
  // capucha y máscara
  P(geo.sph(hr * 1.14, 16, 12), t.dark, [0, 0.03, -0.085], null, [1.02, 1.04, 1.0], head);
  P(geo.cone(hr * 0.7, 0.24, 10), t.dark, [0, hr * 0.95, -0.14], [-0.7, 0, 0], null, head);
  P(geo.tor(hr * 1.02, 0.03, PI * 1.25, 6, 18), 0xff8a1a, [0, 0.0, 0.02], [0, 0, -PI * 0.125], [1, 1.08, 1], head);
  P(geo.rbox(hr * 1.5, hr * 0.32, 0.05, 0.02), C.black, [0, hr * 0.06, hr * 0.82], null, null, head);
  for (const k of [-1, 1]) P(geo.sph(0.03, 8, 6), 0xffc02e, [k * 0.075, hr * 0.06, hr * 0.92], null, [1.3, 0.8, 0.6], head, true);
  // orbe de fuego
  const orb = pivot('orb', armR, 0, -0.24, 0.05);
  P(geo.sph(0.07, 12, 10), 0xffe28a, [0, 0, 0], null, null, orb, true);
  P(geo.ico(0.1, 0), 0xff7a1a, [0, 0, 0], null, null, orb, true);
  for (const k of [-1, 1]) P(geo.rbox(0.05, 0.08, 0.05, 0.02), C.gold, [0, -0.12, 0], null, null, k > 0 ? armR : armL);
  r.attack = 'cast';
  return r;
};

builders.draco = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  P(geo.sph(0.34, 16, 12), t.main, [0, 0, 0], null, [0.95, 0.85, 1.25], body);
  P(geo.sph(0.27, 14, 10), 0xffd88a, [0, -0.1, 0.1], null, [0.8, 0.68, 1.1], body);
  for (let i = 0; i < 4; i++) P(geo.cone(0.05, 0.12, 4), t.trim, [0, 0.28 - i * 0.02, 0.15 - i * 0.14], [-0.4, 0, 0], null, body);
  const head = pivot('head', body, 0, 0.28, 0.42);
  P(geo.sph(0.23, 16, 12), t.main, [0, 0, 0], null, null, head);
  P(geo.rbox(0.24, 0.16, 0.24, 0.07), t.main, [0, -0.06, 0.17], null, null, head);
  P(geo.rbox(0.2, 0.05, 0.18, 0.02), 0xffd88a, [0, -0.13, 0.2], null, null, head);
  for (const k of [-1, 1]) {
    P(geo.cone(0.045, 0.2, 8), C.bone, [k * 0.11, 0.2, -0.08], [-0.6, 0, k * 0.2], null, head);
    P(geo.sph(0.075, 10, 8), C.eye, [k * 0.1, 0.07, 0.16], null, [1, 1.15, 0.6], head);
    P(geo.sph(0.04, 8, 6), C.ink, [k * 0.1, 0.07, 0.2], null, [1, 1.3, 0.5], head);
    P(geo.sph(0.018, 6, 4), C.white, [k * 0.1 + 0.015, 0.09, 0.215], null, null, head, true);
    P(geo.sph(0.02, 6, 4), C.ink, [k * 0.05, -0.02, 0.3], null, null, head);
  }
  const wingL = pivot('wingL', body, -0.2, 0.18, -0.02), wingR = pivot('wingR', body, 0.2, 0.18, -0.02);
  P(ext('dragonWing', 0.02, 0.006), t.dark, [0, 0, 0], [PI / 2, PI, 0], 1, wingL);
  P(ext('dragonWing', 0.02, 0.006), t.dark, [0, 0, 0], [PI / 2, 0, 0], 1, wingR);
  P(geo.cap(0.03, 0.62, 6), t.main, [-0.33, 0.01, 0.08], [0, 0, PI / 2 + 0.15], null, wingL);
  P(geo.cap(0.03, 0.62, 6), t.main, [0.33, 0.01, 0.08], [0, 0, PI / 2 - 0.15], null, wingR);
  const tail = pivot('tail', body, 0, -0.05, -0.38);
  P(geo.cone(0.15, 0.6, 10), t.main, [0, 0, -0.27], [-PI / 2 - 0.15, 0, 0], null, tail);
  P(geo.cone(0.08, 0.12, 4), t.trim, [0, 0.06, -0.58], [-PI / 2, 0, 0], null, tail);
  for (const k of [-1, 1]) {
    P(geo.cap(0.06, 0.08, 8), t.main, [k * 0.16, -0.24, 0.14], null, null, body);
    P(geo.cap(0.06, 0.08, 8), t.main, [k * 0.16, -0.24, -0.16], null, null, body);
  }
  return { root, body, head, wingL, wingR, tail, top: 0.65, lift: 1.25, anim: 'dragon' };
};

builders.arquebusier = (t) => {
  const r = chibi({ top: t.main, sleeve: t.main, pants: C.leatherDk, boots: C.black, belt: C.leatherDk, headR: 0.21, browColor: C.hairDk });
  const { head, body, armL, armR } = r;
  const hr = r.headR;
  // casaca larga
  P(geo.cone(0.24, 0.3, 14), t.main, [0, r.hip + 0.0, 0], null, null, body);
  for (let i = 0; i < 3; i++) P(geo.sph(0.018, 6, 4), C.gold, [0, r.hip + 0.06 + i * 0.065, 0.145], null, null, body);
  P(geo.rbox(0.3, 0.06, 0.05, 0.02), C.cloth, [0, r.hip + 0.23, 0.1], null, null, body);
  // sombrero de ala ancha con pluma
  P(geo.cyl(hr * 1.45, hr * 1.45, 0.025, 20), C.black, [0, hr * 0.6, 0], [-0.1, 0, 0.12], null, head);
  P(geo.cyl(hr * 0.8, hr * 0.92, 0.17, 16), C.black, [0, hr * 0.72 + 0.06, 0], [-0.1, 0, 0.12], null, head);
  P(geo.cyl(hr * 0.93, hr * 0.93, 0.035, 16), t.trim, [0, hr * 0.72, 0], [-0.1, 0, 0.12], null, head);
  P(ext('feather', 0.012, 0.004), C.white, [-0.15, hr * 0.9, -0.05], [0.3, 0, 0.6], 1.6, head);
  // bigote y perilla
  for (const k of [-1, 1]) P(geo.cap(0.022, 0.09, 6), C.hairDk, [k * 0.06, -hr * 0.3, hr * 0.9], [0, 0, k * 1.0], null, head);
  P(geo.cone(0.03, 0.08, 6), C.hairDk, [0, -hr * 0.65, hr * 0.8], [PI, 0, 0], null, head);
  // arcabuz
  const gun = pivot('gun', armR, 0, -0.17, 0.05);
  gun.rotation.x = PI;
  P(geo.cyl(0.024, 0.026, 0.62, 10), C.metalDk, [0, 0.3, 0.02], null, null, gun);
  P(geo.cyl(0.032, 0.032, 0.04, 10), C.goldDk, [0, 0.6, 0.02], null, null, gun);
  P(geo.rbox(0.06, 0.3, 0.07, 0.025), C.wood, [0, 0.03, -0.02], null, null, gun);
  P(geo.rbox(0.05, 0.12, 0.1, 0.025), C.woodDk, [0, -0.13, -0.05], [0.4, 0, 0], null, gun);
  r.attack = 'gun';
  return r;
};

builders.berserker = (t) => {
  const r = chibi({ top: C.skin, sleeve: C.skin, pants: t.dark, boots: C.fur, belt: C.leatherDk, headR: 0.21, bodyW: 1.1, angry: true, browColor: 0xc4501a });
  const { head, body, armR, armL } = r;
  const hr = r.headR;
  // melena salvaje con trenzas
  P(geo.sph(hr * 1.08, 16, 12), 0xd2591c, [0, 0.05, -0.05], null, [1.05, 1, 1], head);
  for (let i = 0; i < 5; i++) P(geo.cone(0.06, 0.16, 6), 0xd2591c, [(i - 2) * 0.07, hr * 0.85, -0.05 - Math.abs(i - 2) * 0.03], [-0.3, 0, (i - 2) * 0.3], null, head);
  for (const k of [-1, 1]) {
    P(geo.cap(0.03, 0.18, 6), 0xd2591c, [k * hr * 0.9, -0.12, -0.02], null, null, head);
    P(geo.rbox(0.07, 0.02, 0.02, 0.008), t.main, [k * 0.08, 0.06, hr * 0.85], [0, 0, k * 0.2], null, head);
  }
  // capa de piel y tatuajes del equipo
  P(geo.tor(0.16, 0.055, PI * 2, 8, 16), C.fur, [0, r.hip + 0.24, -0.02], [PI / 2, 0, 0], null, body);
  P(geo.cone(0.24, 0.34, 12), C.fur, [0, r.hip + 0.08, -0.1], [0.15, 0, 0], [1, 1, 0.45], body);
  P(geo.rbox(0.2, 0.03, 0.02, 0.01), t.main, [0, r.hip + 0.16, 0.14], null, null, body);
  // hacha doble a dos manos
  const ax = pivot('greataxe', armR, -0.05, -0.18, 0.06);
  ax.rotation.set(PI / 2, 0, 0.2);
  P(geo.cyl(0.022, 0.022, 0.64, 8), C.woodDk, [0, 0.18, 0], null, null, ax);
  P(ext('axe', 0.022, 0.008), 0xb9c4cf, [0, 0.45, 0], null, 1.0, ax);
  P(ext('axe', 0.022, 0.008), 0xb9c4cf, [0, 0.45, 0], [0, PI, 0], 1.0, ax);
  P(geo.sph(0.04, 8, 6), C.gold, [0, 0.47, 0], null, null, ax);
  armL.rotation.set(-0.8, 0, 0.5);
  r.attack = 'spin';
  return r;
};

function horse(t) {
  const g = pivot('mount', null);
  const torso = pivot('mbody', g, 0, 0.62, 0);
  P(geo.cap(0.24, 0.5, 14), C.horse, [0, 0, 0], [PI / 2, 0, 0], null, torso);
  // gualdrapa del equipo
  P(geo.cyl(0.27, 0.27, 0.62, 16, 1), t.main, [0, -0.02, 0], [PI / 2, 0, 0], [1, 1, 1], torso).scale.set(1, 1, 0.8);
  P(geo.cyl(0.275, 0.275, 0.05, 16), t.trim, [0, -0.02, 0.3], [PI / 2, 0, 0], null, torso);
  P(geo.cyl(0.275, 0.275, 0.05, 16), t.trim, [0, -0.02, -0.3], [PI / 2, 0, 0], null, torso);
  const neck = pivot('neck', torso, 0, 0.12, 0.38);
  neck.rotation.x = -0.6;
  P(geo.cap(0.13, 0.26, 10), C.horse, [0, 0.17, 0], null, null, neck);
  for (let i = 0; i < 4; i++) P(geo.sph(0.06, 6, 5), C.mane, [0, 0.12 + i * 0.07, -0.1], null, [0.6, 1, 1], neck);
  const head = pivot('mhead', neck, 0, 0.36, 0.04);
  head.rotation.x = 1.0;
  P(geo.cap(0.1, 0.2, 10), C.horse, [0, 0.0, 0.08], [PI / 2, 0, 0], null, head);
  P(geo.sph(0.11, 10, 8), C.horseDk, [0, -0.02, 0.22], null, [0.9, 0.8, 0.8], head);
  for (const k of [-1, 1]) {
    P(geo.cone(0.035, 0.1, 6), C.horse, [k * 0.06, 0.1, -0.03], null, null, head);
    P(geo.sph(0.028, 8, 6), C.ink, [k * 0.085, 0.05, 0.09], null, null, head);
  }
  P(geo.rbox(0.05, 0.22, 0.14, 0.02), t.main, [0, 0.03, 0.05], null, null, head);
  for (const [n, x, z] of [['legFL', -0.13, 0.27], ['legFR', 0.13, 0.27], ['legBL', -0.13, -0.27], ['legBR', 0.13, -0.27]]) {
    const l = pivot(n, g, x, 0.55, z);
    P(geo.cap(0.06, 0.38, 8), C.horse, [0, -0.25, 0], null, null, l);
    P(geo.cyl(0.07, 0.075, 0.07, 10), C.ink, [0, -0.52, 0], null, null, l);
  }
  const tail = pivot('mtail', torso, 0, 0.1, -0.45);
  P(geo.cone(0.09, 0.4, 8), C.mane, [0, -0.15, -0.06], [0.5 + PI, 0, 0], null, tail);
  return g;
}

builders.lancer = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  const m = horse(t);
  body.add(m);
  const rider = builders.knight(t);
  rider.root.position.set(0, 0.58, -0.05);
  rider.root.scale.setScalar(0.95);
  // la espada se cambia por una lanza larga
  const sw = rider.armR.getObjectByName('swordP');
  rider.armR.remove(sw);
  const lance = pivot('lance', rider.armR, 0, -0.17, 0.0);
  lance.rotation.x = PI / 2 - 0.1;
  P(geo.cone(0.05, 1.1, 10), C.steel, [0, 0.62, 0], null, null, lance);
  P(geo.cone(0.09, 0.14, 12), t.main, [0, 0.1, 0], [PI, 0, 0], null, lance);
  P(geo.cyl(0.025, 0.025, 0.3, 8), C.woodDk, [0, -0.05, 0], null, null, lance);
  // renombra las articulaciones del jinete para no chocar con las del caballo
  for (const n of ['body', 'head', 'armL', 'armR', 'legL', 'legR']) rider[n].name = 'r' + n;
  rider.legL.rotation.set(0, 0, -0.7); rider.legR.rotation.set(0, 0, 0.7);
  body.add(rider.root);
  return { root, body, anim: 'mount', top: 1.45, attack: 'thrust', riderArm: 'rarmR' };
};

function wolf(t) {
  const g = pivot('mount', null);
  const torso = pivot('mbody', g, 0, 0.42, 0);
  P(geo.cap(0.2, 0.36, 12), C.wolf, [0, 0, 0], [PI / 2, 0, 0], null, torso);
  P(geo.sph(0.2, 12, 10), C.wolfLt, [0, -0.06, 0.12], null, [0.85, 0.8, 1.2], torso);
  P(geo.sph(0.24, 12, 10), C.wolfDk, [0, 0.08, 0.2], null, [1.1, 0.9, 0.9], torso);
  // montura
  P(geo.rbox(0.3, 0.06, 0.3, 0.03), t.main, [0, 0.19, -0.04], null, null, torso);
  const head = pivot('mhead', torso, 0, 0.12, 0.36);
  P(geo.sph(0.17, 12, 10), C.wolf, [0, 0, 0], null, null, head);
  P(geo.rbox(0.13, 0.11, 0.2, 0.05), C.wolfLt, [0, -0.05, 0.15], null, null, head);
  P(geo.sph(0.035, 6, 5), C.ink, [0, -0.01, 0.26], null, null, head);
  P(geo.rbox(0.11, 0.035, 0.15, 0.015), C.mouth, [0, -0.1, 0.15], null, null, head);
  for (const k of [-1, 1]) {
    P(geo.cone(0.06, 0.14, 4), C.wolfDk, [k * 0.09, 0.15, -0.02], [0, 0, -k * 0.2], null, head);
    P(geo.sph(0.03, 6, 5), 0xffe066, [k * 0.07, 0.04, 0.13], null, null, head, true);
    P(geo.cone(0.012, 0.04, 4), C.white, [k * 0.04, -0.11, 0.21], [PI, 0, 0], null, head);
  }
  for (const [n, x, z] of [['legFL', -0.1, 0.18], ['legFR', 0.1, 0.18], ['legBL', -0.1, -0.18], ['legBR', 0.1, -0.18]]) {
    const l = pivot(n, g, x, 0.36, z);
    P(geo.cap(0.055, 0.22, 8), C.wolf, [0, -0.16, 0], null, null, l);
    P(geo.sph(0.06, 8, 6), C.wolfDk, [0, -0.32, 0.02], null, [1, 0.6, 1.2], l);
  }
  const tail = pivot('mtail', torso, 0, 0.06, -0.32);
  P(geo.cone(0.08, 0.34, 8), C.wolf, [0, 0, -0.15], [-PI / 2 - 0.5, 0, 0], null, tail);
  P(geo.cone(0.05, 0.1, 6), C.wolfLt, [0, 0.12, -0.3], [-PI / 2 - 0.5, 0, 0], null, tail);
  return g;
}

builders.wolfrider = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  body.add(wolf(t));
  const rider = builders.goblin(t);
  rider.root.position.set(0, 0.47, -0.04);
  rider.root.scale.setScalar(0.9);
  const d = rider.armR.getObjectByName('dagger');
  rider.armR.remove(d);
  const club = pivot('club', rider.armR, 0, -0.17, 0.02);
  club.rotation.x = PI / 2 - 0.4;
  P(geo.cyl(0.05, 0.025, 0.32, 8), C.wood, [0, 0.15, 0], null, null, club);
  for (let i = 0; i < 3; i++) P(geo.cone(0.02, 0.05, 4), C.metal, [Math.cos(i * 2.1) * 0.045, 0.25, Math.sin(i * 2.1) * 0.045], [0, 0, Math.cos(i * 2.1) * -1.4], null, club);
  for (const n of ['body', 'head', 'armL', 'armR', 'legL', 'legR']) rider[n].name = 'r' + n;
  rider.legL.rotation.set(0, 0, -0.8); rider.legR.rotation.set(0, 0, 0.8);
  body.add(rider.root);
  return { root, body, anim: 'mount', top: 1.05, attack: 'swing', riderArm: 'rarmR', quadruped: 'wolf' };
};

builders.automaton = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  const hip = 0.3;
  const legL = pivot('legL', body, -0.1, hip, 0), legR = pivot('legR', body, 0.1, hip, 0);
  for (const l of [legL, legR]) {
    P(geo.cyl(0.06, 0.05, 0.16, 10), C.metalDk, [0, -0.08, 0], null, null, l);
    P(geo.sph(0.055, 8, 6), C.goldDk, [0, -0.17, 0], null, null, l);
    P(geo.rbox(0.13, 0.08, 0.2, 0.03), C.metal, [0, -0.25, 0.03], null, null, l);
  }
  // barril de latón con remaches
  P(geo.cyl(0.2, 0.17, 0.34, 18), C.goldDk, [0, hip + 0.17, 0], null, null, body);
  P(geo.cyl(0.205, 0.205, 0.04, 18), C.metalDk, [0, hip + 0.32, 0], null, null, body);
  P(geo.cyl(0.18, 0.18, 0.04, 18), C.metalDk, [0, hip + 0.02, 0], null, null, body);
  P(geo.cyl(0.08, 0.08, 0.03, 12), t.main, [0, hip + 0.18, 0.19], [PI / 2, 0, 0], null, body);
  P(geo.cyl(0.035, 0.035, 0.04, 8), t.glow, [0, hip + 0.18, 0.2], [PI / 2, 0, 0], null, body, true);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * PI * 2;
    P(geo.sph(0.016, 5, 4), C.gold, [Math.sin(a) * 0.2, hip + 0.28, Math.cos(a) * 0.2], null, null, body);
  }
  // engranaje en la espalda
  const gear = pivot('gear', body, 0, hip + 0.2, -0.2);
  P(geo.cyl(0.12, 0.12, 0.03, 10), C.metal, [0, 0, 0], [PI / 2, 0, 0], null, gear);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * PI * 2;
    P(geo.box(0.04, 0.04, 0.03), C.metal, [Math.cos(a) * 0.14, Math.sin(a) * 0.14, 0], [0, 0, a], null, gear);
  }
  // cabeza con visor
  const head = pivot('head', body, 0, hip + 0.47, 0);
  P(geo.rbox(0.26, 0.22, 0.24, 0.06), C.metal, [0, 0, 0], null, null, head);
  P(geo.rbox(0.2, 0.06, 0.04, 0.02), t.glow, [0, 0.01, 0.12], null, null, head, true);
  P(geo.cyl(0.012, 0.012, 0.12, 6), C.metalDk, [0.08, 0.16, 0], null, null, head);
  P(geo.sph(0.03, 8, 6), t.main, [0.08, 0.23, 0], null, null, head, true);
  const armL = pivot('armL', body, -0.25, hip + 0.28, 0), armR = pivot('armR', body, 0.25, hip + 0.28, 0);
  for (const [a, k] of [[armL, -1], [armR, 1]]) {
    a.rotation.z = k * 0.15;
    P(geo.sph(0.07, 10, 8), C.metalDk, [0, 0, 0], null, null, a);
    P(geo.cyl(0.045, 0.04, 0.18, 8), C.metal, [0, -0.11, 0], null, null, a);
    P(geo.rbox(0.1, 0.09, 0.1, 0.03), C.goldDk, [0, -0.22, 0], null, null, a);
  }
  // brazo-espada
  const bl = pivot('armblade', armR, 0, -0.24, 0.04);
  bl.rotation.x = PI / 2;
  P(ext('blade', 0.022, 0.008), C.steel, [0, 0.02, 0], null, [1.5, 1.25, 1], bl);
  return { root, body, head, armL, armR, legL, legR, top: 1.0, hand: -0.22, anim: 'biped', attack: 'swing', heavy: true };
};

builders.necromancer = (t) => {
  const r = chibi({ skin: 0xd8d0c8, top: C.dark, sleeve: C.dark, pants: C.black, boots: C.black, belt: t.main, headR: 0.2, pupil: 0x7dff6a, browColor: 0x444444, angry: true });
  const { head, body, armR } = r;
  const hr = r.headR;
  P(geo.cone(0.28, 0.46, 14), C.dark, [0, 0.23, 0], null, null, body);
  P(geo.tor(0.26, 0.02, PI * 2, 6, 20), t.main, [0, 0.03, 0], [PI / 2, 0, 0], null, body);
  // capucha puntiaguda
  P(geo.sph(hr * 1.16, 16, 12), C.black, [0, 0.03, -0.09], null, [1.02, 1.06, 1.0], head);
  P(geo.cone(hr * 0.9, 0.36, 12), C.black, [0, hr * 1.0, -0.14], [-0.5, 0, 0], null, head);
  P(geo.tor(hr * 1.04, 0.026, PI * 1.25, 6, 18), t.main, [0, 0.0, 0.02], [0, 0, -PI * 0.125], [1, 1.1, 1], head);
  for (const k of [-1, 1]) P(geo.rbox(0.02, 0.09, 0.02, 0.008), 0x6a6070, [k * 0.075, -0.05, hr * 0.9], null, null, head);
  // collar de huesos
  for (let i = 0; i < 5; i++) {
    const a = -0.9 + i * 0.45;
    P(geo.sph(0.03, 6, 5), C.bone, [Math.sin(a) * 0.15, r.hip + 0.24, Math.cos(a) * 0.12], null, null, body);
  }
  // báculo con calavera
  const st = pivot('staff', armR, 0, -0.17, 0.04);
  P(geo.cyl(0.02, 0.02, 0.85, 8), C.woodDk, [0, 0.18, 0], null, null, st);
  P(geo.sph(0.07, 10, 8), C.bone, [0, 0.64, 0], null, null, st);
  P(geo.sph(0.02, 6, 4), 0x7dff6a, [-0.025, 0.65, 0.06], null, null, st, true);
  P(geo.sph(0.02, 6, 4), 0x7dff6a, [0.025, 0.65, 0.06], null, null, st, true);
  P(geo.tor(0.09, 0.012, PI * 2, 5, 14), t.glow, [0, 0.64, 0], [PI / 2, 0, 0], null, st, true);
  r.attack = 'cast';
  return r;
};

builders.golem = (t, small = false) => {
  const root = new Group();
  const body = pivot('body', root);
  const legL = pivot('legL', body, -0.3, 0.5, 0), legR = pivot('legR', body, 0.3, 0.5, 0);
  for (const l of [legL, legR]) {
    P(geo.rock(0.26), C.rockDk, [0, -0.2, 0], [0.3, 0.2, 0], [1, 1.2, 1], l);
    P(geo.rock(0.22), C.rock, [0, -0.42, 0.04], [0.5, 0.1, 0.2], [1.1, 0.6, 1.2], l);
  }
  const torso = P(geo.rock(0.62, 1), C.rock, [0, 1.05, 0], [0.2, 0.3, 0.1], [1.05, 0.88, 0.85], body);
  P(geo.rock(0.3), C.rockLt, [0.3, 1.38, 0.2], [0.4, 0.2, 0.3], null, body);
  P(geo.rock(0.28), C.rockDk, [-0.32, 1.32, -0.15], [0.1, 0.6, 0.3], null, body);
  P(geo.rock(0.22, 0), C.moss, [0.22, 1.56, -0.05], null, [1.2, 0.5, 1.1], body);
  P(geo.rock(0.16, 0), C.moss, [-0.35, 1.48, 0.1], null, [1.2, 0.5, 1.1], body);
  // grietas brillantes del equipo
  P(geo.oct(0.11), t.glow, [0, 1.05, 0.5], [0, 0, 0.3], [1, 1.6, 0.4], body, true);
  P(geo.oct(0.06), t.glow, [0.2, 0.86, 0.45], [0, 0, -0.5], [1, 2, 0.4], body, true);
  P(geo.oct(0.06), t.glow, [-0.24, 1.2, 0.42], [0, 0, 0.9], [1, 2, 0.4], body, true);
  const head = pivot('head', body, 0, 1.62, 0.2);
  P(geo.rock(0.27), C.rock, [0, 0, 0], [0.2, 0.4, 0], [1.1, 0.9, 1], head);
  P(geo.rbox(0.36, 0.06, 0.1, 0.02), C.rockDk, [0, 0.1, 0.18], null, null, head);
  for (const k of [-1, 1]) P(geo.rbox(0.09, 0.05, 0.04, 0.015), t.glow, [k * 0.1, 0.03, 0.25], null, null, head, true);
  const armL = pivot('armL', body, -0.68, 1.35, 0), armR = pivot('armR', body, 0.68, 1.35, 0);
  for (const a of [armL, armR]) {
    P(geo.rock(0.22), C.rockDk, [0, -0.2, 0], [0.4, 0.3, 0], null, a);
    P(geo.rock(0.32), C.rock, [0, -0.6, 0.06], [0.2, 0.7, 0.1], [1, 1.1, 1], a);
  }
  return { root, body, head, armL, armR, legL, legR, top: 2.0, anim: 'golem', attack: 'punch', heavy: true };
};
builders.golemite = (t) => builders.golem(t, true);

builders.frost = (t) => {
  const r = chibi({ skin: 0xf7e2d6, top: 0x7cc4f2, sleeve: 0x9fd8ff, pants: 0x3f86c6, boots: 0x2e5f9a, belt: t.main, headR: 0.21, pupil: 0x1f6fc0, browColor: 0x9cc8e8 });
  const { head, body, armR } = r;
  const hr = r.headR;
  P(geo.cone(0.27, 0.44, 16), 0x7cc4f2, [0, 0.22, 0], null, null, body);
  P(geo.cone(0.28, 0.12, 16), 0xeaf7ff, [0, 0.06, 0], null, null, body);
  P(geo.rbox(0.06, 0.4, 0.03, 0.015), t.main, [0.0, 0.22, 0.2], [0.2, 0, 0], null, body);
  // melena blanco-azulada larga
  P(geo.sph(hr * 1.08, 16, 12), 0xdff1ff, [0, 0.04, -0.05], null, null, head);
  P(geo.cap(hr * 0.75, 0.3, 10), 0xdff1ff, [0, -0.2, -0.14], null, [1.2, 1, 0.6], head);
  P(geo.sph(hr * 0.5, 10, 8), 0xdff1ff, [0.1, hr * 0.62, hr * 0.62], [0, 0, -0.5], [1.3, 0.5, 0.6], head);
  // corona de hielo
  for (let i = 0; i < 5; i++) {
    const a = -0.9 + i * 0.45;
    P(geo.oct(0.06), C.ice, [Math.sin(a) * hr * 0.85, hr * 0.95, Math.cos(a) * hr * 0.6], [0, 0, 0], [0.6, i === 2 ? 2.2 : 1.5, 0.6], head, true);
  }
  // báculo con cristal
  const st = pivot('staff', armR, 0, -0.17, 0.04);
  P(geo.cyl(0.018, 0.018, 0.8, 8), 0xdfefff, [0, 0.16, 0], null, null, st);
  P(geo.oct(0.1), C.ice, [0, 0.63, 0], null, [0.8, 1.6, 0.8], st, true);
  P(geo.oct(0.05), C.iceDk, [0.06, 0.55, 0], [0, 0, 0.6], [0.7, 1.4, 0.7], st, true);
  P(geo.oct(0.05), C.iceDk, [-0.06, 0.55, 0], [0, 0, -0.6], [0.7, 1.4, 0.7], st, true);
  r.attack = 'cast';
  return r;
};

// ---------- Edificios ----------
builders.ballista = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  P(geo.rbox(1.5, 0.3, 1.5, 0.08), C.rockLt, [0, 0.15, 0], null, null, body);
  P(geo.rbox(1.38, 0.12, 1.38, 0.04), C.woodDk, [0, 0.33, 0], null, null, body);
  P(geo.rbox(1.52, 0.06, 1.52, 0.02), t.main, [0, 0.27, 0], null, null, body);
  P(geo.cyl(0.14, 0.2, 0.42, 10), C.woodDk, [0, 0.58, 0], null, null, body);
  const turret = pivot('turret', body, 0, 0.86, 0);
  P(geo.rbox(0.22, 0.16, 1.2, 0.04), C.wood, [0, 0, 0], null, null, turret);
  P(geo.tor(0.62, 0.05, PI * 0.9, 6, 18), C.woodDk, [0, 0.03, 0.34], [PI / 2, 0, PI * 0.05], null, turret);
  P(geo.cyl(0.006, 0.006, 1.1, 4), C.white, [0, 0.03, 0.06], [0, 0, PI / 2], null, turret);
  P(geo.cyl(0.03, 0.03, 1.0, 6), 0x5a5f66, [0, 0.11, 0.12], [PI / 2, 0, 0], null, turret);
  P(geo.cone(0.065, 0.18, 6), C.steel, [0, 0.11, 0.69], [PI / 2, 0, 0], null, turret);
  P(geo.cyl(0.08, 0.08, 0.3, 10), C.woodDk, [0, -0.03, -0.45], [0, 0, PI / 2], null, turret);
  // estandarte
  P(geo.cyl(0.025, 0.025, 1.1, 6), C.woodDk, [0.62, 0.85, -0.62], null, null, body);
  P(geo.rbox(0.38, 0.24, 0.02, 0.008), t.main, [0.82, 1.25, -0.62], null, null, body);
  P(geo.rbox(0.1, 0.1, 0.025, 0.008), t.trim, [0.82, 1.25, -0.61], [0, 0, PI / 4], null, body);
  return { root, body, turret, top: 1.3, anim: 'ballista' };
};

builders.crypt = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  P(geo.rbox(1.5, 0.22, 1.4, 0.06), C.rockDk, [0, 0.11, 0], null, null, body);
  P(geo.rbox(1.2, 0.9, 1.0, 0.06), C.rock, [0, 0.66, -0.05], null, null, body);
  // tejado a dos aguas
  for (const k of [-1, 1]) P(geo.rbox(0.78, 0.08, 1.12, 0.03), 0x4b4554, [k * 0.33, 1.25, -0.05], [0, 0, -k * 0.55], null, body);
  P(geo.rbox(0.08, 0.1, 1.14, 0.03), 0x3a3542, [0, 1.46, -0.05], null, null, body);
  // puerta en arco con luz del equipo
  P(ext('arch', 0.06, 0.02), C.rockDk, [0, 0.22, 0.46], null, [1.25, 1.25, 1], body);
  P(ext('arch', 0.06, 0.0), t.glow, [0, 0.24, 0.47], null, [1.0, 1.0, 1], body, true);
  // cruz y lápidas
  P(geo.rbox(0.08, 0.36, 0.08, 0.02), C.rockLt, [0, 1.68, -0.05], null, null, body);
  P(geo.rbox(0.24, 0.07, 0.08, 0.02), C.rockLt, [0, 1.74, -0.05], null, null, body);
  for (const k of [-1, 1]) {
    P(ext('tomb', 0.08, 0.02), C.rockLt, [k * 0.62, 0.2, 0.52], [0, 0, k * 0.12], 0.45, body);
    P(geo.cyl(0.04, 0.05, 0.08, 6), t.main, [k * 0.42, 0.26, 0.55], null, null, body);
    P(geo.sph(0.03, 6, 5), 0xffd36e, [k * 0.42, 0.33, 0.55], null, null, body, true);
  }
  return { root, body, top: 1.9, anim: 'static' };
};

builders.arcane = (t) => {
  const root = new Group();
  const body = pivot('body', root);
  P(geo.cyl(0.62, 0.72, 0.3, 8), C.rockLt, [0, 0.15, 0], null, null, body);
  P(geo.cyl(0.4, 0.55, 0.9, 8), C.rock, [0, 0.75, 0], null, null, body);
  P(geo.cyl(0.62, 0.42, 0.18, 8), C.rockLt, [0, 1.28, 0], null, null, body);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;
    P(geo.rbox(0.12, 0.45, 0.12, 0.03), C.rockDk, [Math.cos(a) * 0.5, 1.55, Math.sin(a) * 0.5], [Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25], null, body);
  }
  P(geo.tor(0.48, 0.035, PI * 2, 6, 24), t.main, [0, 0.8, 0], [PI / 2, 0, 0], null, body);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2;
    P(geo.oct(0.07), t.glow, [Math.cos(a) * 0.47, 0.8, Math.sin(a) * 0.47], null, [0.7, 1.2, 0.7], body, true);
  }
  const crystal = pivot('crystal', body, 0, 1.95, 0);
  P(geo.oct(0.32), t.glow, [0, 0, 0], null, [0.7, 1.35, 0.7], crystal, true);
  P(geo.oct(0.22), 0xffffff, [0, 0, 0], null, [0.55, 1.1, 0.55], crystal, true);
  const ring = pivot('ring', body, 0, 1.95, 0);
  P(geo.tor(0.42, 0.02, PI * 2, 4, 28), t.trim, [0, 0, 0], [PI / 2, 0, 0], null, ring, true);
  return { root, body, crystal, ring, top: 2.4, anim: 'arcane' };
};

// ---------- Figuras de las torres ----------
export function buildTowerArcher(t) {
  const r = builders.archer(t);
  r.anim = 'biped';
  return r;
}
export function buildKing(t) {
  const r = chibi({ top: t.main, sleeve: t.main, pants: t.dark, boots: C.black, belt: C.gold, headR: 0.22, bodyW: 1.2, browColor: 0x9a5a1c });
  const { head, body, armR } = r;
  const hr = r.headR;
  P(geo.cone(0.3, 0.42, 16), t.main, [0, 0.2, 0], null, null, body);
  P(geo.tor(0.24, 0.07, PI * 2, 8, 18), C.white, [0, r.hip + 0.24, 0], [PI / 2, 0, 0], null, body);
  for (let i = 0; i < 6; i++) P(geo.sph(0.018, 5, 4), C.ink, [Math.sin(i) * 0.2, r.hip + 0.26, Math.cos(i) * 0.2], null, null, body);
  // barba enorme y corona
  P(geo.sph(hr * 0.9, 14, 12), 0xd0782a, [0, -hr * 0.55, hr * 0.38], null, [1.15, 1.0, 0.75], head);
  for (const k of [-1, 1]) P(geo.cap(0.03, 0.12, 6), 0xd0782a, [k * 0.08, -hr * 0.22, hr * 0.92], [0, 0, k * 1.1], null, head);
  P(geo.cyl(hr * 0.72, hr * 0.78, 0.13, 14), C.gold, [0, hr * 0.85, 0], null, null, head);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2;
    P(geo.cone(0.04, 0.11, 4), C.gold, [Math.cos(a) * hr * 0.72, hr * 0.85 + 0.11, Math.sin(a) * hr * 0.72], null, null, head);
    P(geo.sph(0.022, 6, 4), [0xff3b3b, 0x3bb2ff, 0x5fe36b][i % 3], [Math.cos(a) * hr * 0.76, hr * 0.85, Math.sin(a) * hr * 0.76], null, null, head, true);
  }
  // cetro
  const sc = pivot('scepter', armR, 0, -0.17, 0.03);
  P(geo.cyl(0.018, 0.018, 0.5, 8), C.gold, [0, 0.12, 0], null, null, sc);
  P(geo.sph(0.055, 10, 8), t.glow, [0, 0.38, 0], null, null, sc, true);
  r.attack = 'cast';
  return r;
}

// ---------- Objetos para el arte de los hechizos ----------
export function buildSpellArt(kind, t = TEAMS.me) {
  const root = new Group();
  switch (kind) {
    case 'fireball': {
      P(geo.sph(0.36, 18, 14), 0xfff4c2, [0, 0, 0], null, null, root, true);
      P(geo.ico(0.47, 1), 0xffb12e, [0, 0, 0], [0.3, 0.2, 0], null, root, true);
      P(geo.ico(0.56, 1), 0xff6a00, [0, 0, -0.06], [0.1, 0.5, 0.2], [1, 1, 1.05], root, true);
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * PI * 2;
        const len = 0.7 + (i % 3) * 0.25;
        P(geo.cone(0.17, len, 8), [0xff4a00, 0xff8a1a, 0xffc042][i % 3], [Math.cos(a) * 0.3, Math.sin(a) * 0.3, -0.3 - len / 2], [-PI / 2, 0, 0], null, root, true);
      }
      P(geo.cone(0.42, 1.5, 14), 0xd93a00, [0, 0, -0.9], [-PI / 2, 0, 0], null, root, true);
      for (let i = 0; i < 6; i++) P(geo.sph(0.05, 6, 5), 0xffe08a, [Math.sin(i * 2.3) * 0.6, Math.cos(i * 1.7) * 0.5, -0.8 - i * 0.18], null, null, root, true);
      break;
    }
    case 'arrows': {
      for (let i = 0; i < 5; i++) {
        const g = pivot('a', root, (i - 2) * 0.22, Math.abs(i - 2) * -0.08, 0);
        g.rotation.z = (i - 2) * 0.12;
        P(geo.cyl(0.025, 0.025, 1.2, 6), C.wood, [0, 0, 0], null, null, g);
        P(geo.cone(0.06, 0.18, 6), C.steel, [0, -0.68, 0], [PI, 0, 0], null, g);
        P(ext('feather', 0.012, 0.004), t.main, [0, 0.45, 0], null, 1.0, g);
        P(ext('feather', 0.012, 0.004), C.white, [0, 0.45, 0], [0, PI / 2, 0], 1.0, g);
      }
      break;
    }
    case 'lightning': {
      P(ext('bolt', 0.12, 0.03), 0xfff36a, [0, -0.1, 0], null, 1.9, root, true);
      P(ext('bolt', 0.14, 0.0), 0xffffff, [0, -0.1, 0.02], null, 1.25, root, true);
      for (let i = 0; i < 7; i++) {
        const x = (i - 3) * 0.24, y = 1.0 + Math.sin(i * 1.7) * 0.08;
        P(geo.sph(0.24 + (i % 3) * 0.06, 12, 10), i % 2 ? 0x59607a : 0x6c7391, [x, y, -0.25 - (i % 2) * 0.1], null, [1.2, 0.85, 1], root);
      }
      break;
    }
    case 'freeze': {
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * PI * 2;
        P(geo.oct(0.22), C.ice, [Math.cos(a) * 0.28, Math.sin(a) * 0.28, 0], [0, 0, a - PI / 2], [0.45, 1.8, 0.45], root, true);
      }
      P(geo.oct(0.28), 0xffffff, [0, 0, 0.05], null, [1, 1, 0.6], root, true);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * PI * 2 + PI / 6;
        P(geo.oct(0.1), C.iceDk, [Math.cos(a) * 0.55, Math.sin(a) * 0.55, 0], [0, 0, a - PI / 2], [0.5, 1.5, 0.5], root, true);
      }
      break;
    }
    case 'rage': {
      // cuerno de guerra curvado con estandarte
      const R = 0.5;
      for (let i = 0; i <= 10; i++) {
        const k = i / 10, a = PI * (1.15 + k * 0.75);
        const rad = 0.05 + k * k * 0.2;
        P(geo.cyl(rad, rad * 0.92, 0.13, 14), i === 10 ? C.gold : (i % 4 === 2 ? C.goldDk : C.bone), [Math.cos(a) * R, Math.sin(a) * R + 0.3, 0], [0, 0, a], null, root);
      }
      const end = PI * 1.9;
      P(geo.tor(0.24, 0.035, PI * 2, 6, 20), C.gold, [Math.cos(end) * R + 0.03, Math.sin(end) * R + 0.3, 0], [0, PI / 2, end], null, root);
      P(geo.cyl(0.03, 0.03, 0.1, 8), C.gold, [Math.cos(PI * 1.15) * R, Math.sin(PI * 1.15) * R + 0.3, 0], [0, 0, PI * 1.15], null, root);
      P(geo.rbox(0.42, 0.5, 0.02, 0.01), 0xd8283c, [0.0, -0.4, -0.05], [0, 0, 0.05], null, root);
      P(geo.cone(0.21, 0.18, 3), 0xd8283c, [0.0, -0.72, -0.05], [0, 0, PI], [1, 1, 0.1], root);
      P(geo.rbox(0.14, 0.14, 0.025, 0.01), t.trim, [0, -0.38, -0.03], [0, 0, PI / 4], null, root);
      P(geo.cyl(0.012, 0.012, 0.5, 4), C.leatherDk, [0, -0.05, -0.05], null, null, root);
      break;
    }
  }
  return root;
}

export const BUILDERS = builders;

// Escala visual en el juego (las fichas físicas son pequeñas; así se leen bien en el móvil)
export const VIS = {
  knight: 1.95, archer: 1.85, goblin: 1.9, skeleton: 1.8, bat: 1.65, grenadier: 1.9, barbarian: 1.92,
  giant: 2.4, pyromancer: 1.9, draco: 1.65, arquebusier: 1.9, berserker: 2.0, lancer: 1.4, wolfrider: 1.6,
  automaton: 1.78, necromancer: 1.95, golem: 1.25, golemite: 0.75, frost: 1.9, ballista: 1.1, crypt: 1.1, arcane: 1.05,
};

// ---------- Compilación: fusiona las piezas de cada articulación ----------
// Devuelve { skel: árbol de Object3D vacíos con las articulaciones, parts: [{pivot, lit, glow}], meta }
function bakeColors(g, color, aoFn) {
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  const pos = g.attributes.position.array;
  for (let i = 0; i < n; i++) {
    const ao = aoFn ? aoFn(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]) : 1;
    arr[i * 3] = color.r * ao; arr[i * 3 + 1] = color.g * ao; arr[i * 3 + 2] = color.b * ao;
  }
  g.setAttribute('color', new BufferAttribute(arr, 3));
}

function smooth01(a, b, x) { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

const ANIM = new Set(['body', 'head', 'armL', 'armR', 'legL', 'legR', 'wingL', 'wingR', 'tail', 'turret', 'crystal', 'ring', 'orb', 'gear', 'barrel',
  'mbody', 'mhead', 'legFL', 'legFR', 'legBL', 'legBR', 'mtail', 'rbody', 'rhead', 'rarmL', 'rarmR', 'rlegL', 'rlegR']);

export function compileRig(rig) {
  const root = rig.root;
  root.position.set(0, 0, 0); root.rotation.set(0, 0, 0); root.scale.set(1, 1, 1);
  root.updateMatrixWorld(true);
  const height = rig.top || 1;
  const v = new Vector3();
  const inv = new Matrix4(), rel = new Matrix4();
  // destino de cada grupo: él mismo si se anima, si no su antecesor animado más cercano
  const target = new Map();
  root.traverse((o) => {
    if (o === root) { target.set(o, root); return; }
    if (!o.isGroup) return;
    target.set(o, ANIM.has(o.name) ? o : target.get(o.parent));
  });
  // esqueleto con solo las articulaciones animadas
  const skel = new Object3D();
  skel.name = 'root';
  const map = new Map([[root, skel]]);
  root.traverse((o) => {
    if (o === root || !o.isGroup || target.get(o) !== o) return;
    const parentT = target.get(o.parent);
    const s = new Object3D();
    s.name = o.name;
    inv.copy(parentT.matrixWorld).invert();
    rel.multiplyMatrices(inv, o.matrixWorld);
    rel.decompose(s.position, s.quaternion, s.scale);
    map.get(parentT).add(s);
    map.set(o, s);
  });
  // piezas: todas las mallas bajo cada articulación animada, fusionadas en una
  const buckets = new Map();
  root.traverse((m) => {
    if (!m.isMesh) return;
    const t = target.get(m.parent);
    let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    inv.copy(t.matrixWorld).invert();
    rel.multiplyMatrices(inv, m.matrixWorld);
    g.applyMatrix4(rel);
    const isGlow = !!m.material.userData.glow;
    const col = m.material.color;
    const n = g.attributes.position.count;
    const pos = g.attributes.position.array, nrm = g.attributes.normal.array;
    const ca = new Float32Array(n * 3), ea = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let ao = 1;
      if (!isGlow) {
        // oclusión ambiental falsa: más oscuro cerca del suelo y en caras que miran hacia abajo
        v.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]).applyMatrix4(t.matrixWorld);
        const h = smooth01(-0.05, height * 0.55, v.y);
        ao = (0.6 + 0.4 * h) * (0.86 + 0.14 * (nrm[i * 3 + 1] * 0.5 + 0.5));
      }
      ca[i * 3] = col.r * ao; ca[i * 3 + 1] = col.g * ao; ca[i * 3 + 2] = col.b * ao;
      ea[i] = isGlow ? 1 : 0;
    }
    g.setAttribute('color', new BufferAttribute(ca, 3));
    g.setAttribute('emis', new BufferAttribute(ea, 1));
    if (!buckets.has(t)) buckets.set(t, []);
    buckets.get(t).push(g);
  });
  const parts = [];
  for (const [t, list] of buckets) {
    const mg = mergeGeometries(list);
    list.forEach(g => g.dispose());
    mg.computeBoundingSphere();
    parts.push({ pivot: map.get(t), lit: mg, glow: null });
  }
  return { skel, parts, meta: rig };
}

// Material de las tropas: colores por vértice + luz de contorno (rim) para que destaquen
let toonMat = null;
export function unitMaterials() {
  if (!toonMat) {
    toonMat = new MeshLambertMaterial({ vertexColors: true });
    toonMat.onBeforeCompile = (sh) => {
      sh.vertexShader = 'attribute float emis;\nvarying float vEmis;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvEmis = emis;');
      sh.fragmentShader = 'varying float vEmis;\n' + sh.fragmentShader.replace('#include <opaque_fragment>',
        `{ float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
           outgoingLight += vec3(1.0, 0.96, 0.88) * pow(rimF, 2.6) * 0.42 * (1.0 - vEmis);
           outgoingLight = mix(outgoingLight, diffuseColor.rgb, vEmis); }
         #include <opaque_fragment>`);
    };
    toonMat.customProgramCacheKey = () => 'ad-toon-2';
  }
  return { lit: toonMat, glow: toonMat };
}

export function buildUnit(key, team) {
  const rig = builders[key](team);
  rig.key = key;
  rig.vis = VIS[key] || 1.5;
  return rig;
}
