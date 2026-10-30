// Arena Duel — render 3D optimizado (Three.js)
// · Tropas con instancing por pieza: 12 esqueletos cuestan lo mismo que 1
// · Partículas, sombras, barras de vida, anillos y proyectiles: una llamada de dibujo cada uno
// · Resolución adaptativa según los FPS reales del móvil
import {
  Scene, PerspectiveCamera, WebGLRenderer, Color, Group, Mesh, InstancedMesh, Object3D,
  BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, PlaneGeometry, CircleGeometry, RingGeometry,
  MeshLambertMaterial, MeshBasicMaterial, ShaderMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace,
  HemisphereLight, DirectionalLight, Vector3, Vector2, Raycaster, Plane, Fog, Quaternion, Matrix4, Euler,
  BufferGeometry, BufferAttribute, InstancedBufferAttribute, DynamicDrawUsage, Points, AdditiveBlending,
  DodecahedronGeometry, mergeGeometries,
} from '../lib/three.js';
import {
  W, H, RIVER_TOP, RIVER_BOT, BRIDGES, BRIDGE_HALF, CARDS, UNITS, UNIT_KEYS, TOWERS, TOWER_LAYOUT, DT,
} from './data.js';
import { mirror, formation, FLAG } from './sim.js';
import { buildUnit, buildTowerArcher, buildKing, compileRig, unitMaterials, TEAMS, VIS, geo, PI } from './models.js';
import { arenaTexture, waterTexture, foamTexture, stoneTexture, woodTexture, roofTexture } from './textures.js';

const W2 = W / 2, H2 = H / 2;
const wx = (x) => x - W2;
const wz = (y) => y - H2;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.max(0, Math.min(1, v));
function lerpAngle(a, b, t) {
  const d = ((b - a + PI) % (2 * PI) + 2 * PI) % (2 * PI) - PI;
  return a + d * t;
}
// Fusiona las mallas fijas de un grupo por material (menos llamadas de dibujo)
function mergeStatic(group) {
  group.updateMatrixWorld(true);
  const inv = new Matrix4().copy(group.matrixWorld).invert();
  const byMat = new Map();
  const meshes = [];
  group.traverse((o) => { if (o.isMesh) meshes.push(o); });
  for (const m of meshes) {
    let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(new Matrix4().multiplyMatrices(inv, m.matrixWorld));
    if (!byMat.has(m.material)) byMat.set(m.material, []);
    byMat.get(m.material).push(g);
    m.parent.remove(m);
  }
  for (const [mat, list] of byMat) {
    const mg = mergeGeometries(list);
    list.forEach(g => g.dispose());
    group.add(new Mesh(mg, mat));
  }
  return group;
}

const TINT = {
  none: new Color(1, 1, 1), frozen: new Color(0.55, 0.85, 1.25), slowed: new Color(0.75, 0.9, 1.1),
  raged: new Color(1.25, 0.72, 0.72),
};
const BEAM_COL = [new Color(0.7, 0.9, 1.6), new Color(1.3, 0.8, 1.6), new Color(1.8, 0.5, 0.6)];

// ---------- Instancing de modelos articulados ----------
class Instancer {
  constructor(scene) {
    this.scene = scene;
    this.mats = unitMaterials();
    this.tpls = new Map();
  }
  template(key, team, builder) {
    const id = key + '|' + team;
    let T = this.tpls.get(id);
    if (T) return T;
    const rig = builder ? builder(TEAMS[team]) : buildUnit(key, TEAMS[team]);
    const c = compileRig(rig);
    c.skel.traverse((o) => { o.userData.b = [o.rotation.x, o.rotation.y, o.rotation.z, o.position.x, o.position.y, o.position.z]; });
    const order = [];
    c.skel.traverse((o) => order.push(o));
    T = { id, key, rig, skel: c.skel, cap: 8, count: 0, parts: [] };
    for (const p of c.parts) {
      const idx = order.indexOf(p.pivot);
      T.parts.push({ idx, lit: p.lit ? this.mk(p.lit, this.mats.lit, T.cap) : null, glow: p.glow ? this.mk(p.glow, this.mats.glow, T.cap) : null, litG: p.lit, glowG: p.glow });
    }
    this.tpls.set(id, T);
    return T;
  }
  mk(g, mat, cap) {
    const im = new InstancedMesh(g, mat, cap);
    im.instanceMatrix.setUsage(DynamicDrawUsage);
    im.instanceColor = new InstancedBufferAttribute(new Float32Array(cap * 3).fill(1), 3);
    im.instanceColor.setUsage(DynamicDrawUsage);
    im.frustumCulled = false;
    im.count = 0;
    im.visible = false;
    this.scene.add(im);
    return im;
  }
  grow(T) {
    T.cap *= 2;
    for (const p of T.parts) {
      for (const k of ['lit', 'glow']) {
        if (!p[k]) continue;
        this.scene.remove(p[k]);
        p[k].dispose();
        p[k] = this.mk(p[k + 'G'], k === 'lit' ? this.mats.lit : this.mats.glow, T.cap);
      }
    }
  }
  skeleton(T) {
    const root = T.skel.clone(true);
    const nodes = [];
    root.traverse((o) => nodes.push(o));
    const p = {};
    for (const o of nodes) if (o.name && !(o.name in p)) p[o.name] = o;
    return { root, nodes, p };
  }
  begin() { for (const T of this.tpls.values()) T.count = 0; }
  push(T, sk, tint) {
    if (T.count >= T.cap) this.grow(T);
    const i = T.count++;
    sk.root.updateMatrixWorld(true);
    for (const part of T.parts) {
      const m = sk.nodes[part.idx].matrixWorld;
      if (part.lit) { part.lit.setMatrixAt(i, m); part.lit.setColorAt(i, tint); }
      if (part.glow) { part.glow.setMatrixAt(i, m); part.glow.setColorAt(i, tint); }
    }
  }
  end() {
    for (const T of this.tpls.values()) {
      for (const part of T.parts) {
        for (const im of [part.lit, part.glow]) {
          if (!im) continue;
          im.count = T.count;
          im.visible = T.count > 0;
          if (T.count) { im.instanceMatrix.needsUpdate = true; im.instanceColor.needsUpdate = true; }
        }
      }
    }
  }
}

// ---------- Mallas instanciadas simples (sombras, anillos, barras, efectos) ----------
class Batch {
  constructor(scene, geometry, material, cap, order = 0) {
    this.cap = cap;
    this.im = new InstancedMesh(geometry, material, cap);
    this.im.instanceMatrix.setUsage(DynamicDrawUsage);
    this.im.instanceColor = new InstancedBufferAttribute(new Float32Array(cap * 3).fill(1), 3);
    this.im.instanceColor.setUsage(DynamicDrawUsage);
    this.im.frustumCulled = false;
    this.im.renderOrder = order;
    this.im.count = 0;
    scene.add(this.im);
    this.n = 0;
    this.m = new Matrix4();
    this.p = new Vector3(); this.q = new Quaternion(); this.s = new Vector3();
  }
  begin() { this.n = 0; }
  add(x, y, z, sx, sy, sz, q, color) {
    if (this.n >= this.cap) return;
    this.p.set(x, y, z); this.s.set(sx, sy, sz);
    this.m.compose(this.p, q || this.q.identity(), this.s);
    this.im.setMatrixAt(this.n, this.m);
    if (color) this.im.setColorAt(this.n, color);
    this.n++;
  }
  end() {
    this.im.count = this.n;
    this.im.visible = this.n > 0;
    if (this.n) { this.im.instanceMatrix.needsUpdate = true; this.im.instanceColor.needsUpdate = true; }
  }
}

// ---------- Partículas en GPU ----------
const PVS = `
attribute float size; attribute vec4 pcolor; varying vec4 vC; uniform float uScale;
void main() { vC = pcolor; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`;
const PFS = `
varying vec4 vC;
void main() { float d = length(gl_PointCoord - 0.5); float a = vC.a * smoothstep(0.5, 0.15, d); if (a < 0.01) discard; gl_FragColor = vec4(vC.rgb, a); }`;
class Particles {
  constructor(scene, cap, additive) {
    this.cap = cap;
    this.list = [];
    this.pos = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 4);
    this.size = new Float32Array(cap);
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(this.pos, 3).setUsage(DynamicDrawUsage));
    g.setAttribute('pcolor', new BufferAttribute(this.col, 4).setUsage(DynamicDrawUsage));
    g.setAttribute('size', new BufferAttribute(this.size, 1).setUsage(DynamicDrawUsage));
    const opts = { vertexShader: PVS, fragmentShader: PFS, uniforms: { uScale: { value: 400 } }, transparent: true, depthWrite: false };
    if (additive) opts.blending = AdditiveBlending;
    this.mat = new ShaderMaterial(opts);
    this.pts = new Points(g, this.mat);
    this.pts.frustumCulled = false;
    this.pts.renderOrder = additive ? 6 : 5;
    this.geo = g;
    scene.add(this.pts);
    this.c = new Color();
  }
  spawn(o) { if (this.list.length < this.cap) this.list.push(o); }
  update(dt) {
    let n = 0;
    const keep = [];
    for (const p of this.list) {
      p.t += dt;
      if (p.t >= p.life) continue;
      keep.push(p);
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.vy -= (p.g || 0) * dt;
      if (p.y < 0.02) { p.y = 0.02; p.vy *= -0.3; p.vx *= 0.6; p.vz *= 0.6; }
      const drag = p.drag ?? 0.97;
      p.vx *= drag; p.vz *= drag;
      const k = p.t / p.life;
      this.pos[n * 3] = p.x; this.pos[n * 3 + 1] = p.y; this.pos[n * 3 + 2] = p.z;
      this.c.set(p.color);
      const a = (p.a ?? 1) * (k < 0.1 ? k / 0.1 : 1 - Math.pow(Math.max(0, (k - 0.3) / 0.7), 1.5));
      this.col[n * 4] = this.c.r; this.col[n * 4 + 1] = this.c.g; this.col[n * 4 + 2] = this.c.b; this.col[n * 4 + 3] = a;
      this.size[n] = p.size * (p.grow ? 1 + k * p.grow : 1 - k * 0.4);
      n++;
    }
    this.list = keep;
    this.geo.setDrawRange(0, n);
    if (n) {
      this.geo.attributes.position.needsUpdate = true;
      this.geo.attributes.pcolor.needsUpdate = true;
      this.geo.attributes.size.needsUpdate = true;
    }
    this.pts.visible = n > 0;
  }
  clear() { this.list = []; }
}

// ---------- Proyectiles (modelitos simples) ----------
function projRig(kind) {
  const root = new Group();
  const body = new Group(); body.name = 'body'; root.add(body);
  const M = (g, c, p, r, s, glow) => {
    const m = new Mesh(g, glow ? new MeshBasicMaterial({ color: c }) : new MeshLambertMaterial({ color: c }));
    m.material.userData.glow = !!glow;
    if (p) m.position.set(p[0], p[1], p[2]);
    if (r) m.rotation.set(r[0], r[1], r[2]);
    if (s) { if (typeof s === 'number') m.scale.setScalar(s); else m.scale.set(s[0], s[1], s[2]); }
    body.add(m);
  };
  switch (kind) {
    case 'arrow': case 'tower': {
      const L = kind === 'tower' ? 0.8 : 0.62;
      M(geo.cyl(0.022, 0.022, L, 5), 0x8a5a2b, [0, 0, 0], [PI / 2, 0, 0]);
      M(geo.cone(0.05, 0.14, 5), 0xdfe6ee, [0, 0, L / 2 + 0.06], [PI / 2, 0, 0]);
      M(geo.box(0.12, 0.012, 0.12), 0xf5f5f5, [0, 0, -L / 2 + 0.06]);
      M(geo.box(0.012, 0.12, 0.12), 0xf5f5f5, [0, 0, -L / 2 + 0.06]);
      break;
    }
    case 'bolt':
      M(geo.cyl(0.035, 0.035, 1.0, 6), 0x5a5f66, [0, 0, 0], [PI / 2, 0, 0]);
      M(geo.cone(0.08, 0.2, 6), 0xdfe6ee, [0, 0, 0.58], [PI / 2, 0, 0]);
      break;
    case 'cannon': M(geo.sph(0.18, 10, 8), 0x2b2b30); break;
    case 'bomb':
      M(geo.sph(0.14, 10, 8), 0x2b2b33);
      M(geo.sph(0.05, 6, 5), 0xffd36e, [0, 0.16, 0], null, null, true);
      break;
    case 'bullet': M(geo.sph(0.07, 8, 6), 0xfff1b0, null, null, [1, 1, 2.2], true); break;
    case 'fire': case 'breath':
      M(geo.sph(0.16, 10, 8), 0xfff2b0, null, null, null, true);
      M(geo.cone(0.18, 0.5, 8), 0xff7a1a, [0, 0, -0.25], [-PI / 2, 0, 0], null, true);
      break;
    case 'necro':
      M(geo.sph(0.15, 10, 8), 0xcaffb8, null, null, null, true);
      M(geo.cone(0.16, 0.42, 8), 0x55d64a, [0, 0, -0.22], [-PI / 2, 0, 0], null, true);
      break;
    case 'ice':
      M(geo.oct(0.13), 0xdff6ff, null, null, [0.8, 0.8, 1.9], true);
      M(geo.cone(0.1, 0.3, 6), 0x8fd8ff, [0, 0, -0.22], [-PI / 2, 0, 0], null, true);
      break;
    case 'meteor':
      M(geo.sph(0.45, 14, 10), 0xfff1b0, null, null, null, true);
      M(geo.ico(0.6, 1), 0xff8a1a, null, null, null, true);
      M(geo.cone(0.55, 1.6, 12), 0xff4a00, [0, 0, -0.9], [-PI / 2, 0, 0], null, true);
      break;
    case 'iceSpike': M(geo.oct(0.3), 0xcff1ff, [0, 0.3, 0], null, [0.5, 1.6, 0.5], true); break;
    case 'boltSeg': M(geo.box(1, 1, 1), 0xfff9c4, null, null, null, true); break;
    case 'beam': M(geo.cyl(0.5, 0.5, 1, 8), 0xffffff, [0, 0.5, 0], null, null, true); break;
  }
  return { root, body, top: 0.4 };
}
const PROJ_ARC = { cannon: 0.22, bomb: 0.45, arrow: 0.12, tower: 0.12, bolt: 0.04, bullet: 0.0, fire: 0.06, breath: 0.03, necro: 0.06, ice: 0.05 };

function cannonRig(tm) {
  const root = new Group(); const body = new Group(); body.name = 'body'; root.add(body);
  const barrel = new Group(); barrel.name = 'barrel'; barrel.position.set(0, 0.25, 0); body.add(barrel);
  const mk = (gg, c, p, r) => { const m = new Mesh(gg, new MeshLambertMaterial({ color: c })); m.position.set(p[0], p[1], p[2]); if (r) m.rotation.set(r[0], r[1], r[2]); return m; };
  body.add(mk(geo.rbox(0.6, 0.3, 0.7, 0.06), 0x6b4220, [0, 0.1, 0]));
  for (const k of [-1, 1]) body.add(mk(geo.cyl(0.2, 0.2, 0.08, 12), 0x3a2410, [k * 0.33, 0.12, 0], [0, 0, PI / 2]));
  barrel.add(mk(geo.cyl(0.17, 0.22, 0.95, 12), 0x3a3a40, [0, 0, 0.35], [PI / 2 - 0.15, 0, 0]));
  barrel.add(mk(geo.tor(0.19, 0.04, PI * 2, 6, 14), tm.trim, [0, 0.07, 0.8], [0.15, 0, 0]));
  return { root, body, top: 0.6 };
}

// ---------- Vista ----------
export class View3D {
  constructor(canvas, wrap, me, onEvent, opts = {}) {
    this.cv = canvas;
    this.wrap = wrap;
    this.me = me;
    this.flip = me === 1;
    this.onEvent = onEvent || (() => {});
    this.quality = opts.quality || 'auto';
    this.frames = [];
    this.queue = [];
    this.units = new Map();
    this.pos = new Map();
    this.projs = [];
    this.spells = [];
    this.fx = [];
    this.zonesFx = [];
    this.bolts = [];
    this.preds = [];
    this.marks = [];
    this.shake = 0;
    this.lastNow = performance.now();
    this.towerPos = [];
    for (const p of [0, 1]) TOWER_LAYOUT.forEach((L) => this.towerPos.push(mirror(p, L.x, L.y)));

    const dpr = window.devicePixelRatio || 1;
    this.renderer = new WebGLRenderer({ canvas, antialias: dpr < 2, powerPreference: 'high-performance', stencil: false });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.scene = new Scene();
    this.scene.background = new Color(0x3f7a35);
    this.scene.fog = new Fog(0x3f7a35, 40, 80);
    this.cam = new PerspectiveCamera(36, 1, 0.5, 200);
    this.ray = new Raycaster();
    this.ground = new Plane(new Vector3(0, 1, 0), 0);
    this.tmpV = new Vector3(); this.tmpV2 = new Vector3(); this.tmpC = new Color(); this.ndc = new Vector2();
    this.flatQ = new Quaternion().setFromEuler(new Euler(-PI / 2, 0, 0));

    this.inst = new Instancer(this.scene);
    this.shadows = new Batch(this.scene, new CircleGeometry(1, 18), new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.24, depthWrite: false }), 260, 1);
    this.rings = new Batch(this.scene, new RingGeometry(0.8, 1, 28), new MeshBasicMaterial({ transparent: true, opacity: 0.6, depthWrite: false }), 220, 2);
    const add = () => new MeshBasicMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending });
    this.fxRings = new Batch(this.scene, new RingGeometry(0.82, 1, 36), add(), 96, 7);
    this.fxBalls = new Batch(this.scene, new SphereGeometry(1, 16, 12), add(), 64, 7);
    this.fxDisc = new Batch(this.scene, new CircleGeometry(1, 32), add(), 32, 3);
    this.barBg = new Batch(this.scene, new PlaneGeometry(1, 1), new MeshBasicMaterial({ color: 0x111111, depthTest: false, transparent: true, opacity: 0.8 }), 220, 20);
    this.barFg = new Batch(this.scene, new PlaneGeometry(1, 1), new MeshBasicMaterial({ depthTest: false, transparent: true }), 220, 21);
    this.sparks = new Particles(this.scene, 900, true);
    this.smoke = new Particles(this.scene, 600, false);

    this.buildArena();
    this.towers = [];
    this.buildTowers();
    this.ghostMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45, depthWrite: false });
    this.ghostPool = new Map();
    this.buildLabels();
    this.dprLevel = 0;
    this.fpsAcc = 0; this.fpsN = 0; this.fpsCheckAt = performance.now() + 2500; this.goodSince = 0;
    this.resize();
  }

  // ---------- Arena ----------
  buildArena() {
    const sc = this.scene;
    sc.add(new HemisphereLight(0xeef6ff, 0x5a7a3a, 1.55));
    const sun = new DirectionalLight(0xfff0d8, 2.15);
    sun.position.set(-8, 16, 7);
    sc.add(sun);
    const fill = new DirectionalLight(0xbcd6ff, 0.45);
    fill.position.set(6, 6, -10);
    sc.add(fill);

    const aniso = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    const tex = (canvasEl, rep) => {
      const t = new CanvasTexture(canvasEl);
      t.colorSpace = SRGBColorSpace;
      t.anisotropy = aniso;
      if (rep) { t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
      return t;
    };
    this.tex = { stone: stoneTexture(false), stoneL: stoneTexture(true), wood: woodTexture(), roof: roofTexture() };
    this.mkTex = tex;

    const field = new Mesh(new PlaneGeometry(W, H), new MeshLambertMaterial({ map: tex(arenaTexture(this.quality === 'ahorro' ? 40 : 56)) }));
    field.rotation.x = -PI / 2;
    sc.add(field);
    const outside = new Mesh(new PlaneGeometry(400, 400), new MeshLambertMaterial({ color: 0x4a8a3a }));
    outside.rotation.x = -PI / 2; outside.position.y = -0.04;
    sc.add(outside);

    // agua y espuma animadas
    this.waterTex = tex(waterTexture(), [W / 6, 1]);
    const water = new Mesh(new PlaneGeometry(W, RIVER_BOT - RIVER_TOP), new MeshBasicMaterial({ map: this.waterTex, transparent: true, opacity: 0.82 }));
    water.rotation.x = -PI / 2; water.position.y = 0.035;
    sc.add(water);
    this.foamTex = tex(foamTexture(), [W / 5, 1]);
    for (const k of [-1, 1]) {
      const f = new Mesh(new PlaneGeometry(W, 0.32), new MeshBasicMaterial({ map: this.foamTex, transparent: true, opacity: 0.7, depthWrite: false }));
      f.rotation.x = -PI / 2; f.position.set(0, 0.045, k * 0.92);
      sc.add(f);
    }

    // puentes de madera
    const woodMat = new MeshLambertMaterial({ map: tex(this.tex.wood, [1, 2]) });
    const darkWood = new MeshLambertMaterial({ color: 0x5e3b1b });
    const bridges = new Group();
    const scOrig = sc;
    for (const bx of BRIDGES) {
      const sc = bridges;
      const L = RIVER_BOT - RIVER_TOP + 1.1;
      const deck = new Mesh(new BoxGeometry(BRIDGE_HALF * 2 + 0.35, 0.16, L), woodMat);
      deck.position.set(wx(bx), 0.14, 0);
      sc.add(deck);
      for (const k of [-1, 1]) {
        const rail = new Mesh(new BoxGeometry(0.12, 0.1, L), darkWood);
        rail.position.set(wx(bx) + k * (BRIDGE_HALF + 0.12), 0.44, 0);
        sc.add(rail);
        for (const z of [-L / 2 + 0.1, -L / 6, L / 6, L / 2 - 0.1]) {
          const post = new Mesh(new BoxGeometry(0.14, 0.38, 0.14), darkWood);
          post.position.set(wx(bx) + k * (BRIDGE_HALF + 0.12), 0.32, z);
          sc.add(post);
        }
      }
    }
    scOrig.add(mergeStatic(bridges));

    // murete de piedra
    const wallMat = new MeshLambertMaterial({ map: tex(this.tex.stone, [10, 0.5]) });
    const wallMatZ = new MeshLambertMaterial({ map: tex(this.tex.stone, [6, 0.5]) });
    for (const k of [-1, 1]) {
      const a = new Mesh(new BoxGeometry(0.4, 0.55, H + 0.8), wallMat);
      a.position.set(k * (W2 + 0.2), 0.27, 0); sc.add(a);
      const b = new Mesh(new BoxGeometry(W + 0.8, 0.55, 0.4), wallMatZ);
      b.position.set(0, 0.27, k * (H2 + 0.2)); sc.add(b);
    }

    // árboles, rocas y arbustos alrededor (instanciados)
    let seed = 5;
    const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const spots = [];
    const nTrees = this.quality === 'ahorro' ? 70 : 150;
    for (let i = 0; i < nTrees * 2 && spots.length < nTrees; i++) {
      const side = R() < 0.5 ? -1 : 1;
      let x, z;
      if (R() < 0.8) { x = side * (W2 + 1.4 + R() * 10); z = (R() - 0.5) * (H + 16); }
      else { x = (R() - 0.5) * (W + 20); z = side * (H2 + 1.5 + R() * 8); }
      if (Math.abs(x) < W2 + 1.0 && Math.abs(z) < H2 + 1.0) continue;
      spots.push([x, z, 0.8 + R() * 0.7, R(), R() < 0.65]);
    }
    const pines = spots.filter(s => s[4]), rounds = spots.filter(s => !s[4]);
    const o = new Object3D();
    const col = new Color();
    const trunk = new InstancedMesh(new CylinderGeometry(0.13, 0.2, 0.8, 6), new MeshLambertMaterial({ color: 0x6b4423 }), spots.length);
    const pineIm = [new ConeGeometry(0.95, 1.3, 8), new ConeGeometry(0.75, 1.1, 8), new ConeGeometry(0.5, 0.9, 8)]
      .map(g => new InstancedMesh(g, new MeshLambertMaterial({ color: 0xffffff }), Math.max(1, pines.length)));
    const roundIm = [0, 1, 2].map(() => new InstancedMesh(new SphereGeometry(0.62, 10, 8), new MeshLambertMaterial({ color: 0xffffff }), Math.max(1, rounds.length)));
    spots.forEach(([x, z, s, v], i) => {
      o.position.set(x, 0.4 * s, z); o.scale.setScalar(s); o.rotation.set(0, v * 6, 0); o.updateMatrix();
      trunk.setMatrixAt(i, o.matrix);
    });
    pines.forEach(([x, z, s, v], i) => {
      [1.15, 1.75, 2.25].forEach((y, j) => {
        o.position.set(x, y * s, z); o.scale.setScalar(s); o.rotation.set(0, v * 6 + j, 0); o.updateMatrix();
        pineIm[j].setMatrixAt(i, o.matrix);
        col.setHSL(0.33 + v * 0.05, 0.42, 0.24 + j * 0.05 + v * 0.06);
        pineIm[j].setColorAt(i, col);
      });
    });
    rounds.forEach(([x, z, s, v], i) => {
      [[0, 1.25, 0, 1.15], [0.38, 1.0, 0.1, 0.85], [-0.3, 1.05, -0.2, 0.9]].forEach(([dx, y, dz, ss], j) => {
        o.position.set(x + dx * s, y * s, z + dz * s); o.scale.setScalar(s * ss); o.rotation.set(0, v * 6, 0); o.updateMatrix();
        roundIm[j].setMatrixAt(i, o.matrix);
        col.setHSL(0.25 + v * 0.07, 0.5, 0.32 + j * 0.04 + v * 0.05);
        roundIm[j].setColorAt(i, col);
      });
    });
    sc.add(trunk, ...pineIm, ...roundIm);
    const rocks = [];
    for (let i = 0; i < 40; i++) {
      const side = R() < 0.5 ? -1 : 1;
      rocks.push([side * (W2 + 0.9 + R() * 6), (R() - 0.5) * (H + 8), 0.25 + R() * 0.45, R()]);
    }
    const rockIm = new InstancedMesh(new DodecahedronGeometry(1, 0), new MeshLambertMaterial({ color: 0x9a948a, flatShading: true }), rocks.length);
    rocks.forEach(([x, z, s, v], i) => {
      o.position.set(x, s * 0.4, z); o.scale.set(s * 1.2, s * 0.8, s); o.rotation.set(v * 3, v * 6, 0); o.updateMatrix();
      rockIm.setMatrixAt(i, o.matrix);
    });
    sc.add(rockIm);
    // estandartes en las esquinas
    const poleMat = new MeshLambertMaterial({ color: 0x5e3b1b });
    const goldMat = new MeshLambertMaterial({ color: 0xf2b631 });
    const poles = new Group();
    this.cornerFlags = [];
    for (const [x, z, team] of [[-W2 - 0.2, -H2 - 0.2, 1], [W2 + 0.2, -H2 - 0.2, 1], [-W2 - 0.2, H2 + 0.2, 0], [W2 + 0.2, H2 + 0.2, 0]]) {
      const pole = new Mesh(new CylinderGeometry(0.06, 0.08, 3, 8), poleMat);
      pole.position.set(x, 1.5, z); poles.add(pole);
      const top = new Mesh(new SphereGeometry(0.12, 8, 6), goldMat);
      top.position.set(x, 3.05, z); poles.add(top);
      const f = new Mesh(new PlaneGeometry(1.0, 0.65, 6, 1), new MeshLambertMaterial({ color: 0xffffff, side: 2 }));
      f.position.set(x + (x < 0 ? 0.52 : -0.52), 2.65, z);
      f.userData.team = team;
      f.userData.base = f.geometry.attributes.position.array.slice();
      sc.add(f);
      this.cornerFlags.push(f);
    }
    sc.add(mergeStatic(poles));

    // marcadores de colocación
    this.zoneMat = new MeshBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.24, depthWrite: false });
    this.zones = [];
    for (let i = 0; i < 4; i++) {
      const z = new Mesh(new PlaneGeometry(1, 1), this.zoneMat);
      z.rotation.x = -PI / 2; z.position.y = 0.06; z.visible = false; z.renderOrder = 3;
      sc.add(z); this.zones.push(z);
    }
    this.lineMesh = new Mesh(new PlaneGeometry(W, 0.08), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75, depthWrite: false }));
    this.lineMesh.rotation.x = -PI / 2; this.lineMesh.position.y = 0.07; this.lineMesh.visible = false;
    sc.add(this.lineMesh);
    this.tileMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, depthWrite: false });
    this.tile = new Mesh(new PlaneGeometry(1, 1), this.tileMat);
    this.tile.rotation.x = -PI / 2; this.tile.position.y = 0.08; this.tile.visible = false;
    sc.add(this.tile);
    this.rangeMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, depthWrite: false });
    this.range = new Mesh(new RingGeometry(0.965, 1, 64), this.rangeMat);
    this.range.rotation.x = -PI / 2; this.range.position.y = 0.09; this.range.visible = false;
    sc.add(this.range);
    this.spellArea = new Mesh(new CircleGeometry(1, 48), new MeshBasicMaterial({ color: 0xff9a3a, transparent: true, opacity: 0.22, depthWrite: false }));
    this.spellArea.rotation.x = -PI / 2; this.spellArea.position.y = 0.09; this.spellArea.visible = false;
    sc.add(this.spellArea);
  }

  // ---------- Torres ----------
  buildTowers() {
    for (const t of this.towers) this.scene.remove(t.group, t.rubble);
    this.towers = [];
    if (!this.towerMats) {
      this.towerMats = {
        stone: new MeshLambertMaterial({ map: this.mkTex(this.tex.stone, [3, 1.5]) }),
        stone2: new MeshLambertMaterial({ map: this.mkTex(this.tex.stoneL, [4, 1]) }),
        top: new MeshLambertMaterial({ map: this.mkTex(this.tex.stoneL, [1, 1]) }),
        wood: new MeshLambertMaterial({ map: this.mkTex(this.tex.wood, [2, 2]) }),
        gold: new MeshLambertMaterial({ color: 0xf2b631 }),
        roofTex: this.mkTex(this.tex.roof, [3, 2]),
      };
    }
    const TM = this.towerMats;
    for (const f of this.cornerFlags) f.material.color.set(f.userData.team === this.me ? 0x2f6fe8 : 0xe0383b);
    for (let i = 0; i < 6; i++) {
      const owner = i < 3 ? 0 : 1;
      const kind = TOWER_LAYOUT[i % 3].kind;
      const teamKey = owner === this.me ? 'me' : 'foe';
      const team = TEAMS[teamKey];
      const teamMat = new MeshLambertMaterial({ color: team.main });
      const roofMat = new MeshLambertMaterial({ map: TM.roofTex, color: team.main });
      const [x, y] = this.towerPos[i];
      const g = new Group();
      g.position.set(wx(x), 0, wz(y));
      g.rotation.y = owner === 0 ? PI : 0;
      const king = kind === 'king';
      const M = (gg, mat, px, py, pz, rx = 0, ry = 0, rz = 0) => { const m = new Mesh(gg, mat); m.position.set(px, py, pz); m.rotation.set(rx, ry, rz); g.add(m); return m; };
      let figY;
      if (!king) {
        const h = 2.1;
        M(new CylinderGeometry(1.32, 1.42, 0.45, 14), TM.stone2, 0, 0.22, 0);
        M(new CylinderGeometry(1.08, 1.22, h, 14), TM.stone, 0, 0.45 + h / 2, 0);
        M(new CylinderGeometry(1.32, 1.12, 0.3, 14), TM.top, 0, 0.45 + h + 0.12, 0);
        M(new CylinderGeometry(1.2, 1.2, 0.08, 14), TM.wood, 0, 0.45 + h + 0.3, 0);
        for (let a = 0; a < 10; a++) {
          const ang = (a / 10) * PI * 2;
          M(new BoxGeometry(0.36, 0.36, 0.3), TM.top, Math.cos(ang) * 1.18, 0.45 + h + 0.45, Math.sin(ang) * 1.18, 0, -ang, 0);
        }
        M(new BoxGeometry(0.62, 0.9, 0.04), teamMat, 0, 0.45 + h * 0.6, 1.17, -0.08);
        M(new BoxGeometry(0.7, 0.08, 0.06), TM.gold, 0, 0.45 + h * 0.6 + 0.47, 1.17);
        M(new BoxGeometry(0.16, 0.16, 0.06), TM.gold, 0, 0.45 + h * 0.6, 1.21, 0, 0, PI / 4);
        M(new BoxGeometry(0.6, 0.85, 0.06), TM.wood, 0, 0.85, -1.18);
        figY = 0.45 + h + 0.34;
      } else {
        const h = 2.3;
        M(new BoxGeometry(3.6, 0.5, 3.6), TM.stone2, 0, 0.25, 0);
        M(new BoxGeometry(3.2, h, 3.2), TM.stone, 0, 0.5 + h / 2, 0);
        M(new BoxGeometry(3.45, 0.28, 3.45), TM.top, 0, 0.5 + h + 0.1, 0);
        M(new BoxGeometry(3.0, 0.08, 3.0), TM.wood, 0, 0.5 + h + 0.27, 0);
        for (let a = 0; a < 4; a++) {
          const off = -1.25 + a * (2.5 / 3);
          for (const [cx, cz] of [[off, 1.62], [off, -1.62], [1.62, off], [-1.62, off]]) M(new BoxGeometry(0.4, 0.4, 0.4), TM.top, cx, 0.5 + h + 0.44, cz);
        }
        for (const [cx, cz] of [[-1.6, -1.6], [1.6, -1.6], [-1.6, 1.6], [1.6, 1.6]]) {
          M(new CylinderGeometry(0.55, 0.6, h + 0.9, 12), TM.stone2, cx, 0.5 + (h + 0.9) / 2 - 0.25, cz);
          M(new ConeGeometry(0.75, 1.1, 12), roofMat, cx, 0.5 + h + 0.95, cz);
          M(new SphereGeometry(0.1, 8, 6), TM.gold, cx, 0.5 + h + 1.55, cz);
        }
        for (const k of [-1, 1]) {
          M(new BoxGeometry(0.8, 1.2, 0.04), teamMat, k * 0.75, 0.5 + h * 0.55, 1.62, -0.06);
          M(new BoxGeometry(0.86, 0.08, 0.06), TM.gold, k * 0.75, 0.5 + h * 0.55 + 0.62, 1.62);
        }
        M(new BoxGeometry(0.9, 1.2, 0.06), TM.wood, 0, 0.98, 1.62);
        figY = 0.5 + h + 0.31;
      }
      this.scene.add(mergeStatic(g));
      // escombros
      const rubble = new Group();
      rubble.position.copy(g.position);
      let seed = i * 31 + 7;
      const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      const w = king ? 3.2 : 2.4;
      for (let k = 0; k < 14; k++) {
        const a = R() * 7, d = R() * w * 0.5;
        const m = new Mesh(new DodecahedronGeometry(0.22 + R() * 0.35, 0), k % 3 ? TM.stone : TM.top);
        m.position.set(Math.cos(a) * d, 0.15 + R() * 0.25, Math.sin(a) * d);
        m.rotation.set(R() * 3, R() * 3, R() * 3);
        rubble.add(m);
      }
      const plank = new Mesh(new BoxGeometry(1.6, 0.1, 0.3), TM.wood);
      plank.position.set(0.2, 0.35, 0.1); plank.rotation.set(0.3, 0.8, 0.2);
      rubble.add(plank);
      mergeStatic(rubble);
      rubble.visible = false;
      this.scene.add(rubble);
      // figura de la torre (instanciada)
      const T = king ? this.inst.template('king', teamKey, buildKing) : this.inst.template('towerArcher', teamKey, buildTowerArcher);
      const tw = { group: g, rubble, king, owner, figY, alive: true, aim: null, shootT: -9, T, sk: this.inst.skeleton(T), baseRot: g.rotation.y, fig: g.rotation.y };
      if (king) {
        tw.cannonT = this.inst.template('cannonTop', teamKey, cannonRig);
        tw.cannonSk = this.inst.skeleton(tw.cannonT);
      }
      this.towers.push(tw);
    }
  }

  ghostRig(key, n) {
    const id = key + ':' + n;
    let r = this.ghostPool.get(id);
    if (!r) {
      const T = this.inst.template(key, 'me');
      const sk = this.inst.skeleton(T);
      for (const part of T.parts) {
        const node = sk.nodes[part.idx];
        if (part.litG) node.add(new Mesh(part.litG, this.ghostMat));
        if (part.glowG) node.add(new Mesh(part.glowG, this.ghostMat));
      }
      sk.root.scale.setScalar(VIS[key] || 1.5);
      sk.root.visible = false;
      this.scene.add(sk.root);
      r = { sk, rig: T.rig };
      this.ghostPool.set(id, r);
    }
    return r;
  }

  // ---------- Etiquetas HTML (vida de torres, zzz del rey) ----------
  buildLabels() {
    if (this.labelBox) this.labelBox.remove();
    const box = document.createElement('div');
    box.className = 'labels';
    this.wrap.appendChild(box);
    this.labelBox = box;
    this.labels = [];
    for (let i = 0; i < 6; i++) {
      const el = document.createElement('div');
      el.className = 'tlabel';
      el.innerHTML = '<div class="tbar"><i></i><b></b></div><span class="zzz">z<small>z</small></span>';
      box.appendChild(el);
      this.labels.push({ el, fill: el.querySelector('i'), num: el.querySelector('b'), zzz: el.querySelector('.zzz'), hp: -1, sleep: null });
    }
    this.layoutLabels();
  }
  layoutLabels() {
    if (!this.labels || !this.S) return;
    for (let i = 0; i < 6; i++) {
      const L = this.labels[i];
      const owner = i < 3 ? 0 : 1;
      const king = i % 3 === 2;
      const mine = owner === this.me;
      const [x, y] = this.towerPos[i];
      const tw = this.towers[i];
      let sx, sy;
      if (mine) {
        const half = (king ? 3.6 : 2.84) / 2 + 0.45;
        [sx, sy] = this.screenOf(x, y + (this.me === 0 ? half : -half), 0);
        sy -= 4;
      } else {
        [sx, sy] = this.screenOf(x, y, (tw ? tw.figY : 3) + (king ? 2.3 : 2.1));
        sy -= 12;
      }
      const w = this.S * (king ? 2.7 : 2.15);
      if (king) {
        // los "zzz" van sobre la cabeza del rey
        const back = owner === 0 ? 1 : -1;
        const [hx, hy] = this.screenOf(x, y + back * 0.65, (tw ? tw.figY : 3) + 1.4);
        L.zzz.style.left = (hx - sx + w / 2 + this.S * 0.5).toFixed(1) + 'px';
        L.zzz.style.top = (hy - sy - 18).toFixed(1) + 'px';
      }
      L.el.style.transform = `translate(${(sx - w / 2).toFixed(1)}px, ${sy.toFixed(1)}px)`;
      L.el.style.width = w.toFixed(1) + 'px';
      L.el.classList.toggle('mine', mine);
      L.el.classList.toggle('foe', !mine);
      L.el.classList.toggle('king', king);
    }
  }
  updateLabels(cur) {
    for (let i = 0; i < 6; i++) {
      const L = this.labels[i];
      const hp = cur.tw[i];
      if (hp !== L.hp) {
        L.hp = hp;
        const max = TOWERS[TOWER_LAYOUT[i % 3].kind].hp;
        L.el.style.display = hp > 0 ? '' : 'none';
        L.fill.style.width = (Math.max(0, hp / max) * 100).toFixed(1) + '%';
        L.num.textContent = hp;
      }
      const sleep = i % 3 === 2 ? !cur.ka[i < 3 ? 0 : 1] : false;
      if (sleep !== L.sleep) { L.sleep = sleep; L.zzz.style.display = sleep ? '' : 'none'; }
    }
  }

  reset(me) {
    this.me = me; this.flip = me === 1;
    this.frames = []; this.queue = []; this.projs = []; this.spells = []; this.fx = []; this.zonesFx = []; this.bolts = []; this.preds = []; this.marks = [];
    this.units.clear(); this.pos.clear(); this.shake = 0;
    this.sparks.clear(); this.smoke.clear();
    this.buildTowers();
    for (const L of this.labels) { L.hp = -1; L.sleep = null; }
    this.fitCamera();
    this.layoutLabels();
  }

  // Precompila las plantillas de los mazos para que la partida empiece sin tirones
  warm(cardIdxs) {
    for (const team of ['me', 'foe']) {
      for (const c of cardIdxs) {
        const card = CARDS[c];
        if (!card || !card.unit) continue;
        this.inst.template(card.unit, team);
        const u = UNITS[card.unit];
        if (u.spawn) this.inst.template(u.spawn.unit, team);
        if (u.deathSpawn) this.inst.template(u.deathSpawn.unit, team);
      }
    }
    for (const k of ['arrow', 'tower', 'cannon', 'fire', 'meteor', 'boltSeg', 'iceSpike', 'beam', 'bomb', 'bullet', 'breath', 'necro', 'ice', 'bolt']) this.projT(k);
    try { this.renderer.compile(this.scene, this.cam); } catch { /* */ }
  }
  projT(kind) { return this.inst.template('p_' + kind, 'me', () => projRig(kind)); }

  // ---------- Cámara ----------
  resize() {
    const r = this.wrap.getBoundingClientRect();
    this.cssW = Math.max(100, r.width);
    this.cssH = Math.max(100, r.height);
    this.cv.style.width = this.cssW + 'px';
    this.cv.style.height = this.cssH + 'px';
    this.fitCamera();
    this.layoutLabels();
  }
  dprTarget() {
    const dev = window.devicePixelRatio || 1;
    if (this.quality === 'ahorro') return Math.min(dev, 1);
    const levels = this.quality === 'alta' ? [2, 1.75, 1.5, 1.25] : [1.75, 1.5, 1.25, 1, 0.85];
    return Math.min(dev, levels[Math.min(this.dprLevel, levels.length - 1)]);
  }
  applyDpr() {
    const d = this.dprTarget();
    this.dpr = d;
    this.renderer.setPixelRatio(d);
    this.renderer.setSize(this.cssW, this.cssH, false);
    const s = this.cssH * d / (2 * Math.tan((this.cam.fov * PI / 180) / 2));
    this.sparks.mat.uniforms.uScale.value = s;
    this.smoke.mat.uniforms.uScale.value = s;
  }
  setQuality(q) { this.quality = q; this.dprLevel = 0; this.lockedUp = false; this.applyDpr(); }

  fitCamera() {
    const cam = this.cam;
    cam.aspect = this.cssW / this.cssH;
    cam.fov = cam.aspect < 0.62 ? 40 : 36;
    cam.updateProjectionMatrix();
    const sg = this.flip ? -1 : 1;
    const pitch = (56 * PI) / 180;
    const dir = new Vector3(0, Math.sin(pitch), sg * Math.cos(pitch));
    const pts = [];
    for (const x of [-W2, W2]) pts.push(new Vector3(x, 0, sg * H2), new Vector3(x, 0, -sg * H2), new Vector3(x, 2.6, -sg * (H2 - 3)));
    pts.push(new Vector3(0, 5.2, -sg * (H2 - 3)));
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
    this.camTarget = new Vector3(0, 0, tz);
    cam.updateMatrixWorld();
    const dFar = cam.position.distanceTo(new Vector3(0, 0, -sg * H2));
    this.scene.fog.near = dFar + 6;
    this.scene.fog.far = dFar + 45;
    const a = this.screenOf(9, 16, 0), b = this.screenOf(10, 16, 0);
    this.S = Math.hypot(b[0] - a[0], b[1] - a[1]);
    this.applyDpr();
  }

  screenOf(x, y, h = 0) {
    const v = this.tmpV.set(wx(x), h, wz(y)).project(this.cam);
    return [(v.x * 0.5 + 0.5) * this.cssW, (-v.y * 0.5 + 0.5) * this.cssH, v.z];
  }
  toScreen(x, y) { const s = this.screenOf(x, y, 0); return [s[0], s[1]]; }
  toWorld(px, py) {
    this.ndc.set((px / this.cssW) * 2 - 1, -(py / this.cssH) * 2 + 1);
    this.ray.setFromCamera(this.ndc, this.cam);
    const hit = this.ray.ray.intersectPlane(this.ground, this.tmpV2);
    if (!hit) return [-99, -99];
    return [hit.x + W2, hit.z + H2];
  }
  inArena(px, py) {
    const [x, y] = this.toWorld(px, py);
    return x >= 0 && x <= W && y >= 0 && y <= H;
  }
  screenOfTower(i) {
    const [x, y] = this.towerPos[i];
    return this.screenOf(x, y, this.towers[i] ? this.towers[i].figY + 1 : 3);
  }

  // ---------- Datos ----------
  pushFrame(snap) {
    const ents = new Map();
    for (const e of snap.e) ents.set(e[0], e);
    const f = { k: snap.k, ents, tw: snap.tw, ka: snap.ka, tf: snap.tf || [0, 0, 0, 0, 0, 0] };
    const fr = this.frames;
    if (snap.ev) for (const ev of snap.ev) this.queue.push(ev);
    if (fr.length && fr[fr.length - 1].k >= f.k) return;
    fr.push(f);
    if (fr.length > 60) fr.shift();
  }
  pushEvents(evs) { for (const ev of evs) this.queue.push(ev); }
  latest() { return this.frames[this.frames.length - 1]; }

  // predicción local: la tropa empieza a caer en cuanto sueltas la carta
  predict(cardIdx, x, y) {
    const card = CARDS[cardIdx];
    if (!card) return;
    if (card.type === 'spell') { this.marks.push({ x, y, r: card.spell.radius, t: 0, max: 1.4, mine: true }); return; }
    const f = this.me === 0 ? 1 : -1;
    const now = performance.now();
    for (const [ox, oy] of formation(card.count || 1)) this.preds.push({ key: card.unit, x: x + ox * f, y: y + oy * f, t0: now, matched: false });
    this.ring(x, y, 0.3, 1.4, 0x9cc8ff, 0.5);
  }
  emote(owner, ch) {
    const el = document.createElement('div');
    el.className = 'bubble ' + (owner === this.me ? 'mine' : 'foe');
    el.textContent = ch;
    const [sx, sy] = this.screenOfTower(owner * 3 + 2);
    const S = this.S;
    el.style.left = (sx + (owner === this.me ? -S * 3.8 : S * 3.8)) + 'px';
    el.style.top = (sy + (owner === this.me ? -S * 0.5 : S * 0.3)) + 'px';
    this.wrap.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }
  popText(x, y, h, txt, cls = '') {
    const [sx, sy] = this.screenOf(x, y, h);
    const el = document.createElement('div');
    el.className = 'poptext ' + cls;
    el.textContent = txt;
    el.style.left = sx + 'px'; el.style.top = sy + 'px';
    this.wrap.appendChild(el);
    setTimeout(() => el.remove(), 1700);
  }

  // ---------- Efectos ----------
  ring(x, y, r0, r1, color, dur, h = 0.1, op = 0.9) { this.fx.push({ kind: 'ring', x, y, h, r0, r1, c: new Color(color), dur, t: 0, op }); }
  flash(x, y, h, r0, r1, color, dur, op = 0.9) { this.fx.push({ kind: 'ball', x, y, h, r0, r1, c: new Color(color), dur, t: 0, op }); }
  disc(x, y, r, color, dur, op = 0.5) { this.fx.push({ kind: 'disc', x, y, h: 0.06, r0: r, r1: r, c: new Color(color), dur, t: 0, op }); }
  burst(x, y, h, n, colors, spd, life, size, g = 9) {
    if (this.quality === 'ahorro') n = Math.ceil(n / 2);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * PI * 2, v = spd * (0.3 + Math.random() * 0.7);
      this.sparks.spawn({ x: wx(x), y: h, z: wz(y), vx: Math.cos(a) * v, vy: 2 + Math.random() * 3.5, vz: Math.sin(a) * v, life: life * (0.6 + Math.random() * 0.6), t: 0, size: size * (0.6 + Math.random() * 0.8), color: colors[i % colors.length], g });
    }
  }
  puff(x, y, h, n, spread, color = 0xe6e6e6, size = 0.5, life = 0.8) {
    if (this.quality === 'ahorro') n = Math.ceil(n / 2);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * PI * 2, v = spread * Math.random();
      this.smoke.spawn({ x: wx(x) + Math.cos(a) * 0.2, y: h, z: wz(y) + Math.sin(a) * 0.2, vx: Math.cos(a) * v, vy: 0.6 + Math.random() * 0.6, vz: Math.sin(a) * v, life: life * (0.7 + Math.random() * 0.6), t: 0, size: size * (0.7 + Math.random() * 0.6), color, a: 0.7, grow: 1.6, drag: 0.94 });
    }
  }

  trigger(ev) {
    const mine = ev.o === this.me;
    switch (ev.t) {
      case 'deploy': {
        const card = CARDS[ev.c];
        if (card.type === 'spell') { if (!mine || !this.marks.some(m => Math.hypot(m.x - ev.x, m.y - ev.y) < 0.3)) this.marks.push({ x: ev.x, y: ev.y, r: card.spell.radius, t: 0, max: 1.4, mine }); }
        else this.ring(ev.x, ev.y, 0.3, 1.6, mine ? 0x8cc0ff : 0xff9e9e, 0.5);
        break;
      }
      case 'spawn': this.puff(ev.x, ev.y, 0.3, 5, 0.8, 0xcfc8ff, 0.4, 0.5); break;
      case 'proj': this.addProj(ev); break;
      case 'hit': this.burst(ev.x, ev.y, ev.a ? 1.7 : ev.tw ? 1.6 : 0.7, 6, [0xffffff, 0xffe08a], 2.5, 0.28, 0.16); break;
      case 'spin':
        this.ring(ev.x, ev.y, 0.4, ev.r, 0xdfe8ff, 0.3, 0.5);
        this.burst(ev.x, ev.y, 0.6, 10, [0xffffff, 0xcfd8e8], 4, 0.3, 0.14, 2);
        break;
      case 'lance':
        this.flash(ev.x, ev.y, 0.9, 0.2, 0.9, 0xfff1a8, 0.25, 0.8);
        this.burst(ev.x, ev.y, 0.8, 14, [0xffffff, 0xffe08a, 0xffb347], 5, 0.35, 0.18);
        this.shake = Math.max(this.shake, 0.25);
        break;
      case 'splash': {
        const fire = ev.p === 'fire' || ev.p === 'breath' || ev.p === 'bomb';
        const col = ev.p === 'necro' ? [0x7dff6a, 0x2f9a2a, 0xd8ffd0] : ev.p === 'ice' ? [0xbfeaff, 0xffffff, 0x7cc8f0] : fire ? [0xffb347, 0xff6a00, 0xffd27a] : [0xc79bff, 0x8b5cf6, 0xffffff];
        this.ring(ev.x, ev.y, 0.2, ev.r, col[0], 0.32);
        this.flash(ev.x, ev.y, 0.45, 0.2, ev.r * 0.65, col[1], 0.26, 0.7);
        this.burst(ev.x, ev.y, 0.5, 12, col, 3, 0.4, 0.16);
        if (ev.p === 'bomb') { this.puff(ev.x, ev.y, 0.3, 6, 1.2, 0x6a6a6a, 0.6, 0.9); this.shake = Math.max(this.shake, 0.15); }
        break;
      }
      case 'spell': this.spells.push({ ...ev, kind: CARDS[ev.c].spell.kind, start: ev.k }); break;
      case 'boom':
        this.flash(ev.x, ev.y, 0.3, 0.4, ev.r * 0.95, 0xff8a1a, 0.5, 0.95);
        this.flash(ev.x, ev.y, 0.3, 0.2, ev.r * 0.6, 0xfff1a8, 0.32, 1);
        this.ring(ev.x, ev.y, 0.5, ev.r * 1.1, 0xffcc66, 0.55, 0.12);
        this.disc(ev.x, ev.y, ev.r * 0.8, 0xff6a00, 0.6, 0.35);
        this.burst(ev.x, ev.y, 0.4, 40, [0xff6a00, 0xffb347, 0xffe08a, 0xff3a00], 7, 0.75, 0.24);
        this.puff(ev.x, ev.y, 0.5, 14, 1.8, 0x555555, 0.9, 1.1);
        this.shake = Math.max(this.shake, 0.55);
        break;
      case 'volley':
        this.ring(ev.x, ev.y, 0.5, ev.r, 0xfff3c4, 0.35, 0.1, 0.6);
        this.puff(ev.x, ev.y, 0.2, 10, ev.r * 0.5, 0xd8c8a8, 0.5, 0.7);
        break;
      case 'zap': {
        for (const [x, y, air, tower] of ev.hits) {
          const top = air ? 1.8 : tower ? 3.2 : 0.8;
          this.addBolt(x, y, top);
          this.flash(x, y, top, 0.3, 1.3, 0xfff6a8, 0.3, 1);
          this.burst(x, y, top, 14, [0xffffff, 0xfff36a, 0x9fd8ff], 5, 0.4, 0.18);
        }
        if (!ev.hits.length) this.addBolt(ev.x, ev.y, 0.1);
        this.shake = Math.max(this.shake, 0.4);
        break;
      }
      case 'freeze':
        this.ring(ev.x, ev.y, 0.4, ev.r, 0xbfeaff, 0.5, 0.12);
        this.flash(ev.x, ev.y, 0.4, 0.4, ev.r * 0.9, 0x9fe0ff, 0.35, 0.6);
        this.zonesFx.push({ kind: 'ice', x: ev.x, y: ev.y, r: ev.r, t: 0, dur: ev.d });
        this.burst(ev.x, ev.y, 0.6, 30, [0xffffff, 0xbfeaff, 0x7cc8f0], 5, 0.8, 0.18, 3);
        break;
      case 'rage':
        this.zonesFx.push({ kind: 'rage', x: ev.x, y: ev.y, r: ev.r, t: 0, dur: ev.d, mine });
        this.ring(ev.x, ev.y, 0.4, ev.r, 0xff3a6a, 0.5, 0.12);
        this.burst(ev.x, ev.y, 0.5, 26, [0xff3a6a, 0xc04dff, 0xff9ec8], 4, 0.7, 0.2, 2);
        break;
      case 'charge': this.puff(ev.x, ev.y, 0.2, 6, 1, 0xd8c8a8, 0.5, 0.6); break;
      case 'quake':
        this.ring(ev.x, ev.y, 0.5, ev.r * 1.2, 0xd8c8a8, 0.5, 0.1);
        this.puff(ev.x, ev.y, 0.3, 16, 2.2, 0x9a8f7f, 0.8, 1.0);
        this.burst(ev.x, ev.y, 0.4, 20, [0x9a948a, 0x6f695f, 0xc7c1b6], 5, 0.8, 0.22);
        this.shake = Math.max(this.shake, 0.6);
        break;
      case 'death': {
        const key = UNIT_KEYS[ev.u];
        const big = key === 'golem' || key === 'giant';
        this.puff(ev.x, ev.y, ev.a ? 1.6 : 0.4, big ? 12 : 6, big ? 1.6 : 0.8, 0xeeeeee, big ? 0.8 : 0.5, 0.8);
        this.burst(ev.x, ev.y, ev.a ? 1.6 : 0.6, big ? 14 : 7, [mine ? 0x8cc0ff : 0xff9e9e, 0xffffff], 3, 0.5, 0.16);
        break;
      }
      case 'tower': {
        const tw = this.towers[ev.o * 3 + ev.i];
        this.flash(ev.x, ev.y, 2, 0.6, 3.6, 0xffd27a, 0.55, 1);
        this.burst(ev.x, ev.y, 2, 60, [0x9a948a, 0xc7c1b6, 0x6f695f, 0xffb347, 0xff6a00], 9, 1.2, 0.3);
        this.puff(ev.x, ev.y, 1.5, 26, 3, 0x777777, 1.2, 1.6);
        this.ring(ev.x, ev.y, 0.5, 4.6, 0xfff3c4, 0.7, 0.12);
        this.shake = Math.max(this.shake, 1.2);
        this.popText(ev.x, ev.y, tw ? tw.figY + 1.5 : 4, '👑', 'crown ' + (ev.o === this.me ? 'foe' : 'mine'));
        break;
      }
      case 'king': {
        const [x, y] = this.towerPos[ev.o * 3 + 2];
        this.popText(x, y, this.towers[ev.o * 3 + 2].figY + 2.2, '❗', 'alert');
        break;
      }
    }
    this.onEvent(ev);
  }

  addProj(ev) {
    let h0 = ev.fa ? 1.9 : 0.75;
    if (ev.ft) {
      const tw = this.towers[ev.ft - 1];
      if (tw) { h0 = tw.figY + (tw.king ? 0.6 : 1.1); tw.shootT = performance.now(); tw.aim = [ev.tx, ev.ty]; }
    } else {
      const u = this.unitNear(ev.fx, ev.fy);
      if (u && u.key === 'ballista') h0 = 1.0;
    }
    this.projs.push({ ...ev, start: ev.k, h0, T: this.projT(ev.p) });
  }
  unitNear(x, y) {
    let best = null, bd = 0.5;
    for (const u of this.units.values()) {
      const d = Math.hypot(u.x - x, u.y - y);
      if (d < bd) { bd = d; best = u; }
    }
    return best;
  }
  addBolt(x, y, h) {
    const segs = [];
    let px = x + (Math.random() - 0.5) * 1.5, py = y + (Math.random() - 0.5) * 1.5, ph = 13;
    const n = 9;
    for (let i = 1; i <= n; i++) {
      const k = i / n;
      const nx = lerp(px, x, k) + (i < n ? (Math.random() - 0.5) * 0.9 : 0);
      const ny = lerp(py, y, k) + (i < n ? (Math.random() - 0.5) * 0.9 : 0);
      const nh = lerp(13, h, k);
      segs.push([px, py, ph, nx, ny, nh]);
      px = nx; py = ny; ph = nh;
    }
    this.bolts.push({ segs, t: 0, dur: 0.32 });
  }

  // ---------- Render principal ----------
  render(rt, ui) {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastNow) / 1000);
    this.lastNow = now;
    const tsec = now / 1000;
    this.adaptResolution(dt);

    if (this.queue.length) {
      const keep = [];
      for (const ev of this.queue) (ev.k <= rt + 0.01 ? this.trigger(ev) : keep.push(ev));
      this.queue = keep;
    }

    const fr = this.frames;
    let A = null, B = null;
    for (let i = fr.length - 1; i >= 0; i--) {
      if (fr[i].k <= rt) { A = fr[i]; B = fr[i + 1] || null; break; }
    }
    if (!A) A = fr[0];
    const al = A && B ? clamp01((rt - A.k) / (B.k - A.k)) : 0;
    const cur = (B && al > 0.5) ? B : A;

    // agua y banderas
    this.waterTex.offset.x = (tsec * 0.06) % 1;
    this.waterTex.offset.y = Math.sin(tsec * 0.6) * 0.02;
    this.foamTex.offset.x = (tsec * 0.1) % 1;
    for (const f of this.cornerFlags) {
      const a = f.geometry.attributes.position, b = f.userData.base;
      for (let i = 0; i < a.count; i++) {
        const x0 = b[i * 3];
        a.array[i * 3 + 2] = Math.sin(tsec * 4 + x0 * 5) * 0.08 * (x0 + 0.5);
      }
      a.needsUpdate = true;
    }

    // cámara con temblor
    const cam = this.cam;
    cam.position.copy(this.camBase);
    if (this.shake > 0) {
      cam.position.x += (Math.random() - 0.5) * this.shake * 0.45;
      cam.position.z += (Math.random() - 0.5) * this.shake * 0.45;
      this.shake = Math.max(0, this.shake - dt * 2.5);
    }
    cam.lookAt(this.camTarget);
    cam.updateMatrixWorld();

    this.inst.begin();
    this.shadows.begin(); this.rings.begin(); this.barBg.begin(); this.barFg.begin();
    this.fxRings.begin(); this.fxBalls.begin(); this.fxDisc.begin();

    if (A) {
      const list = [];
      for (const [id, eb] of (cur === B ? B.ents : A.ents)) {
        const ea = A.ents.get(id), ebb = B ? B.ents.get(id) : null;
        let x, y, mx = 0, my = 0;
        if (ea && ebb) {
          x = lerp(ea[3], ebb[3], al) / 20; y = lerp(ea[4], ebb[4], al) / 20;
          const dk = Math.max(1, B.k - A.k);
          mx = (ebb[3] - ea[3]) / dk; my = (ebb[4] - ea[4]) / dk;
        } else { const e = ebb || ea; x = e[3] / 20; y = e[4] / 20; }
        const key = UNIT_KEYS[eb[1]];
        const def = UNITS[key];
        this.pos.set(id, { x, y, air: !!def.air });
        list.push({ id, e: eb, x, y, key, def, mx, my });
      }
      for (let i = 0; i < 6; i++) { const [x, y] = this.towerPos[i]; this.pos.set(i + 1, { x, y, air: false, tower: true }); }

      // predicciones: se quitan cuando aparece la tropa real
      if (this.preds.length) {
        for (const p of this.preds) {
          if (now - p.t0 > 1600) { p.matched = true; continue; }
          for (const it of list) {
            if (it.key === p.key && it.e[2] === this.me && Math.hypot(it.x - p.x, it.y - p.y) < 1.0 && it.e[6] > 0) { p.matched = true; break; }
          }
        }
        this.preds = this.preds.filter(p => !p.matched);
      }

      const alive = new Set();
      for (const it of list) { alive.add(it.id); this.drawUnit(it, dt, tsec); }
      for (const id of this.units.keys()) if (!alive.has(id)) this.units.delete(id);
      for (const id of this.pos.keys()) if (id > 6 && !alive.has(id)) this.pos.delete(id);
      for (const p of this.preds) this.drawPrediction(p, now, tsec);
      for (let i = 0; i < 6; i++) this.drawTower(i, cur, dt, tsec, now);
      this.updateLabels(cur);
      for (const it of list) if (it.key === 'arcane' && it.e[8] && !(it.e[6] > 0)) this.drawBeam(it, tsec);
    }

    this.drawProjs(rt);
    this.drawSpells(rt);
    this.drawBolts(dt);
    this.drawZones(dt, tsec);
    this.drawMarks(dt);
    this.drawFx(dt);
    this.updateGhost(ui && ui.ghost, A);

    this.inst.end();
    this.shadows.end(); this.rings.end(); this.barBg.end(); this.barFg.end();
    this.fxRings.end(); this.fxBalls.end(); this.fxDisc.end();
    this.sparks.update(dt);
    this.smoke.update(dt);
    this.renderer.render(this.scene, cam);
  }

  adaptResolution(dt) {
    if (this.quality === 'ahorro') return;
    this.fpsAcc += dt; this.fpsN++;
    const now = performance.now();
    if (now < this.fpsCheckAt) return;
    const avg = this.fpsAcc / Math.max(1, this.fpsN);
    this.fpsAcc = 0; this.fpsN = 0; this.fpsCheckAt = now + 2000;
    const maxLevel = this.quality === 'alta' ? 3 : 4;
    if (avg > 1 / 42 && this.dprLevel < maxLevel) { this.dprLevel++; this.applyDpr(); this.goodSince = now; }
    else if (avg < 1 / 57) {
      if (!this.goodSince) this.goodSince = now;
      if (now - this.goodSince > 12000 && this.dprLevel > 0 && !this.lockedUp) { this.dprLevel--; this.lockedUp = true; this.applyDpr(); }
    } else this.goodSince = now;
  }

  // ---------- Tropas ----------
  drawUnit(it, dt, tsec) {
    const { id, e, key, def } = it;
    const [, , owner, , , hp, dep, atk, tid, flags] = e;
    const teamKey = owner === this.me ? 'me' : 'foe';
    const T = this.inst.template(key, teamKey);
    let u = this.units.get(id);
    if (!u) {
      u = { sk: this.inst.skeleton(T), T, key, angle: owner === 0 ? PI : 0, x: it.x, y: it.y, prevDep: dep, prevHp: hp, hitT: 0, spinT: -9, lastAtk: 99, punch: 0 };
      this.units.set(id, u);
    }
    it.u = u;
    u.x = it.x; u.y = it.y;
    if (hp < u.prevHp) u.hitT = 0.12;
    u.prevHp = hp;
    if (u.hitT > 0) u.hitT -= dt;
    const vis = VIS[key] || 1.5;
    const rig = T.rig;
    const sk = u.sk;
    const root = sk.root;
    const frozen = flags & FLAG.frozen, raged = flags & FLAG.raged, slowed = flags & FLAG.slowed;
    const moving = !frozen && Math.hypot(it.mx, it.my) > 0.25;

    // orientación
    let fx = 0, fz = 0;
    const tp = tid ? this.pos.get(tid) : null;
    if (atk < 8 && tp) { fx = tp.x - it.x; fz = tp.y - it.y; }
    else if (moving) { fx = it.mx; fz = it.my; }
    else if (tp) { fx = tp.x - it.x; fz = tp.y - it.y; }
    if (def.building) {
      root.rotation.y = owner === 0 ? PI : 0;
      if (rig.anim === 'ballista' && tp && !frozen) {
        const tr = sk.p.turret;
        tr.rotation.y = lerpAngle(tr.rotation.y, Math.atan2(fx, fz) - root.rotation.y, Math.min(1, dt * 8));
      }
    } else {
      if ((fx || fz) && !frozen) u.angle = lerpAngle(u.angle, Math.atan2(fx, fz), Math.min(1, dt * 9));
      root.rotation.y = u.angle;
    }

    // posición, despliegue y salto del río
    let y0 = rig.lift || 0;
    if (def.jump && it.y > RIVER_TOP - 0.6 && it.y < RIVER_BOT + 0.6 && moving) {
      const k = clamp01((it.y - (RIVER_TOP - 0.6)) / (RIVER_BOT - RIVER_TOP + 1.2));
      y0 += Math.sin(k * PI) * 1.0 / vis;
    }
    let fall = 0;
    if (dep > 0) {
      const k = dep / 10;
      fall = k * k * 4;
    } else if (u.prevDep > 0) {
      this.puff(it.x, it.y, 0.1, def.building ? 10 : 5, def.building ? 1.4 : 0.9, 0xd8c8a8, 0.5, 0.6);
      if (key === 'golem' || key === 'giant') this.shake = Math.max(this.shake, 0.2);
    }
    u.prevDep = dep;
    root.position.set(wx(it.x), y0 * vis + fall, wz(it.y));
    root.scale.setScalar(vis * (u.hitT > 0 ? 1.06 : 1));

    // animación
    const speedMul = raged ? 1.35 : slowed ? 0.65 : 1;
    if (atk < u.lastAtk && atk < 2) { u.punch = 1 - u.punch; if (rig.attack === 'spin') u.spinT = tsec; }
    u.lastAtk = atk;
    const a = atk < 4 ? 1 - atk / 4 : 0;
    const attacking = tid && atk < 30 && !moving;
    if (!frozen) this.animate(sk, rig, tsec * speedMul + id * 0.37, moving && dep === 0, a, attacking, dep > 0, u, tsec);
    this.inst.push(T, sk, frozen ? TINT.frozen : raged ? TINT.raged : slowed ? TINT.slowed : TINT.none);

    // sombra y anillo del equipo
    const r = Math.max(0.42, def.radius * 1.15);
    const shadowR = (def.building ? def.radius * 1.2 : r) / (1 + fall * 0.25);
    this.shadows.add(wx(it.x), 0.05, wz(it.y), shadowR, shadowR, 1, this.flatQ);
    if (!def.building) {
      this.tmpC.set(owner === this.me ? 0x3b82f6 : 0xef4444);
      this.rings.add(wx(it.x), 0.06, wz(it.y), r, r, 1, this.flatQ, this.tmpC);
    }
    // efectos de estado
    if (raged && Math.random() < dt * 8) this.sparks.spawn({ x: wx(it.x) + (Math.random() - 0.5) * 0.5, y: 0.3 + Math.random(), z: wz(it.y) + (Math.random() - 0.5) * 0.5, vx: 0, vy: 1.2, vz: 0, life: 0.6, t: 0, size: 0.18, color: 0xff3a6a, g: 0 });
    if ((flags & FLAG.charging) && Math.random() < dt * 14) this.smoke.spawn({ x: wx(it.x), y: 0.15, z: wz(it.y), vx: (Math.random() - 0.5), vy: 0.4, vz: (Math.random() - 0.5), life: 0.5, t: 0, size: 0.35, color: 0xd8c8a8, a: 0.6, grow: 1.4 });
    if ((flags & FLAG.stunned) && Math.random() < dt * 10) this.sparks.spawn({ x: wx(it.x) + (Math.random() - 0.5) * 0.4, y: (rig.top || 1) * vis + 0.2, z: wz(it.y), vx: 0, vy: 0.3, vz: 0, life: 0.4, t: 0, size: 0.16, color: 0xfff36a, g: 0 });

    // barra de vida
    const max = def.hp;
    if (hp < max || def.building) {
      const top = ((rig.lift || 0) + (rig.top || 1)) * vis + 0.3 + fall + (y0 - (rig.lift || 0)) * vis;
      const bw = def.building ? 1.6 : Math.max(0.75, Math.min(1.5, def.radius * 2.2));
      this.bar(it.x, it.y, top, bw, hp / max, owner === this.me);
    }
  }

  drawPrediction(p, now, tsec) {
    const T = this.inst.template(p.key, 'me');
    if (!p.sk) p.sk = this.inst.skeleton(T);
    const k = clamp01(1 - (now - p.t0) / 1000);
    const vis = VIS[p.key] || 1.5;
    const rig = T.rig;
    p.sk.root.position.set(wx(p.x), (rig.lift || 0) * vis + k * k * 4, wz(p.y));
    p.sk.root.rotation.y = this.me === 0 ? PI : 0;
    p.sk.root.scale.setScalar(vis);
    this.animate(p.sk, rig, tsec, false, 0, false, true, null, tsec);
    this.inst.push(T, p.sk, TINT.none);
    const def = UNITS[p.key];
    const r = Math.max(0.42, def.radius * 1.15) / (1 + k * 1.2);
    this.shadows.add(wx(p.x), 0.05, wz(p.y), r, r, 1, this.flatQ);
  }

  bar(x, y, h, w, frac, mine) {
    const q = this.cam.quaternion;
    const bh = 0.15;
    const right = this.tmpV2.set(1, 0, 0).applyQuaternion(q);
    const cx = wx(x), cz = wz(y);
    this.barBg.add(cx, h, cz, w + 0.08, bh + 0.08, 1, q);
    const f = Math.max(0, Math.min(1, frac));
    const off = -(1 - f) * w / 2;
    this.tmpC.set(mine ? 0x4aa3ff : 0xff5a5a);
    this.barFg.add(cx + right.x * off, h + right.y * off, cz + right.z * off, Math.max(0.001, w * f), bh, 1, q, this.tmpC);
  }

  // pose base + oscilaciones
  animate(sk, rig, t, moving, a, attacking, deploying, u, tabs) {
    const P = sk.p;
    const setR = (n, x, y, z) => { if (!n) return; const b = n.userData.b; n.rotation.set(b[0] + (x || 0), b[1] + (y || 0), b[2] + (z || 0)); };
    const setY = (n, dy) => { if (!n) return; n.position.y = n.userData.b[4] + dy; };
    switch (rig.anim) {
      case 'biped': {
        const sw = moving ? Math.sin(t * (rig.heavy ? 8 : 11)) : 0;
        setR(P.legL, sw * 0.75); setR(P.legR, -sw * 0.75);
        setR(P.armL, -sw * 0.5); setR(P.armR, sw * 0.5);
        setY(P.body, moving ? Math.abs(Math.sin(t * (rig.heavy ? 8 : 11))) * 0.04 : Math.sin(t * 2.4) * 0.008);
        setR(P.body, moving ? 0.08 : 0);
        setR(P.head, 0, 0, moving ? 0 : Math.sin(t * 1.3) * 0.04);
        if (P.tail) setR(P.tail, Math.sin(t * 6) * 0.15);
        const atk = rig.attack;
        if (attacking || a > 0) {
          switch (atk) {
            case 'swing': setR(P.armR, a > 0 ? lerp(-2.5, -0.5, a) : -2.3, 0, 0.15); setR(P.body, a * 0.18); break;
            case 'bow': setR(P.armL, -1.45, 0.25); setR(P.armR, -1.25 + (a > 0.6 ? 0.35 : 0), 0, 0.5 - a * 0.3); break;
            case 'cast': setR(P.armR, a > 0 ? lerp(-2.4, -1.2, a) : -2.3, 0, 0.2); break;
            case 'throw': setR(P.armR, a > 0 ? lerp(0.6, -2.6, Math.min(1, a * 1.5)) : 0.5, 0, 0.15); break;
            case 'gun': setR(P.armR, -1.5 - a * 0.25, 0, 0.05); setR(P.armL, -1.35 - a * 0.2, 0, 0.45); setR(P.body, -a * 0.12); break;
            case 'punch': {
              const arm = u && u.punch ? P.armL : P.armR;
              setR(arm, lerp(-0.8, -1.7, a)); setR(P.body, a * 0.12);
              break;
            }
            case 'spin': {
              const k = u ? clamp01((tabs - u.spinT) / 0.45) : 1;
              setR(P.armR, -1.4, 0, 1.2); setR(P.armL, -1.4, 0, -1.2);
              setR(P.body, 0, k < 1 ? k * PI * 2 : 0);
              break;
            }
          }
        } else if (atk === 'gun' && !moving) { setR(P.armR, -0.6); setR(P.armL, -0.5, 0, 0.4); }
        if (deploying) { setR(P.armL, -0.3, 0, -0.7); setR(P.armR, -0.3, 0, 0.7); }
        if (P.orb) P.orb.scale.setScalar(1 + Math.sin(t * 6) * 0.12 + a * 0.5);
        if (P.gear) P.gear.rotation.z = t * 3;
        break;
      }
      case 'golem': {
        const sw = moving ? Math.sin(t * 5.5) : 0;
        setR(P.legL, sw * 0.45); setR(P.legR, -sw * 0.45);
        setR(P.armL, -sw * 0.3); setR(P.armR, sw * 0.3);
        setR(P.body, 0, 0, sw * 0.06);
        setY(P.body, moving ? Math.abs(sw) * 0.05 : Math.sin(t * 1.5) * 0.01);
        if (attacking || a > 0) { const v = a > 0 ? lerp(-2.6, -0.5, a) : -2.4; setR(P.armL, v); setR(P.armR, v); setR(P.body, a * 0.2); }
        break;
      }
      case 'dragon': {
        const f = Math.sin(t * 9);
        setR(P.wingL, 0, 0, 0.25 + f * 0.7); setR(P.wingR, 0, 0, -0.25 - f * 0.7);
        setY(P.body, Math.sin(t * 3) * 0.08);
        setR(P.head, -a * 0.6);
        setR(P.tail, 0, Math.sin(t * 2.5) * 0.3);
        setR(P.body, moving ? 0.12 : 0);
        break;
      }
      case 'bat': {
        const f = Math.sin(t * 22);
        setR(P.wingL, 0, 0, 0.3 + f * 0.9); setR(P.wingR, 0, 0, -0.3 - f * 0.9);
        setY(P.body, Math.sin(t * 5) * 0.06);
        setR(P.body, a * 0.5);
        break;
      }
      case 'mount': {
        const g = moving ? t * 13 : 0;
        const s1 = Math.sin(g), s2 = Math.sin(g + PI);
        const amp = moving ? 0.7 : 0;
        setR(P.legFL, s1 * amp); setR(P.legBR, s1 * amp); setR(P.legFR, s2 * amp); setR(P.legBL, s2 * amp);
        setY(P.mbody, moving ? Math.abs(Math.sin(g)) * 0.06 : Math.sin(t * 2) * 0.01);
        setR(P.mbody, moving ? Math.sin(g * 2) * 0.05 : 0);
        if (P.mtail) setR(P.mtail, 0, Math.sin(t * 7) * 0.3);
        if (P.mhead) setR(P.mhead, moving ? Math.sin(g) * 0.1 : Math.sin(t * 1.5) * 0.05);
        setY(P.rbody, moving ? Math.abs(Math.sin(g)) * 0.05 : 0);
        const arm = P[rig.riderArm || 'rarmR'];
        if (rig.attack === 'thrust') setR(arm, attacking || a > 0 ? lerp(-0.2, 0.25, a) : (moving ? -0.1 : 0));
        else if (attacking || a > 0) setR(arm, a > 0 ? lerp(-2.4, -0.5, a) : -2.2, 0, 0.2);
        else setR(arm, moving ? Math.sin(g) * 0.2 : 0);
        break;
      }
      case 'ballista': if (P.turret) P.turret.position.z = -a * 0.2; break;
      case 'arcane':
        if (P.crystal) { P.crystal.rotation.y = t * 1.5; setY(P.crystal, Math.sin(t * 2) * 0.08); }
        if (P.ring) { P.ring.rotation.y = -t * 0.8; P.ring.rotation.x = Math.sin(t) * 0.3; }
        break;
    }
  }

  drawTower(i, cur, dt, tsec, now) {
    const tw = this.towers[i];
    const alive = cur.tw[i] > 0;
    if (alive !== tw.alive) { tw.alive = alive; tw.group.visible = alive; tw.rubble.visible = !alive; }
    if (!alive) return;
    const owner = i < 3 ? 0 : 1;
    const frozen = cur.tf && cur.tf[i];
    const sk = tw.sk;
    const [x, y] = this.towerPos[i];
    const shooting = now - tw.shootT < 1200;
    if (tw.aim && shooting && !frozen) tw.fig = lerpAngle(tw.fig, Math.atan2(tw.aim[0] - x, tw.aim[1] - y), Math.min(1, dt * 10));
    else if (!frozen) tw.fig = lerpAngle(tw.fig, tw.baseRot, Math.min(1, dt * 3));
    const a = Math.max(0, 1 - (now - tw.shootT) / 350);
    const tint = frozen ? TINT.frozen : TINT.none;
    const back = owner === 0 ? 1 : -1; // hacia el fondo de la torre del rey
    if (tw.king) {
      const sleeping = !cur.ka[owner];
      sk.root.position.set(wx(x), tw.figY, wz(y) + back * 0.65);
      sk.root.rotation.y = tw.fig;
      sk.root.scale.setScalar(1.55);
      const P = sk.p;
      const b = (n) => n.userData.b;
      P.head.rotation.set(b(P.head)[0] + (sleeping ? 0.3 : 0), 0, sleeping ? 0.45 : 0);
      P.armR.rotation.set(sleeping ? 0 : -0.5 - a * 1.2, 0, 0.15);
      P.body.position.y = b(P.body)[4] + Math.sin(tsec * (sleeping ? 1.2 : 2.4) + i) * 0.01;
      this.inst.push(tw.T, sk, tint);
      const cs = tw.cannonSk;
      cs.root.position.set(wx(x), tw.figY, wz(y) - back * 0.55);
      cs.root.rotation.y = tw.fig;
      cs.root.scale.setScalar(1.35);
      cs.p.barrel.position.z = -a * 0.15;
      this.inst.push(tw.cannonT, cs, tint);
    } else {
      sk.root.position.set(wx(x), tw.figY, wz(y));
      sk.root.rotation.y = tw.fig;
      sk.root.scale.setScalar(1.75);
      if (!frozen) this.animate(sk, tw.T.rig, tsec + i, false, a, shooting, false, null, tsec);
      this.inst.push(tw.T, sk, tint);
    }
  }

  drawBeam(it, tsec) {
    const tp = this.pos.get(it.e[8]);
    if (!tp || !it.u) return;
    const T = this.projT('beam');
    if (!it.u.beamSk) it.u.beamSk = this.inst.skeleton(T);
    const stage = Math.min(2, it.e[10] || 0);
    const from = this.tmpV.set(wx(it.x), 1.95 * VIS.arcane, wz(it.y));
    const to = this.tmpV2.set(wx(tp.x), tp.air ? 1.8 : tp.tower ? 3.0 : 0.7, wz(tp.y));
    const len = from.distanceTo(to);
    const sk = it.u.beamSk;
    sk.root.position.copy(from);
    sk.root.lookAt(to);
    sk.root.rotateX(PI / 2);
    const w = 0.06 + stage * 0.07 + Math.sin(tsec * 40) * 0.015;
    sk.root.scale.set(w, len, w);
    this.inst.push(T, sk, BEAM_COL[stage]);
    if (Math.random() < 0.5) this.sparks.spawn({ x: to.x, y: to.y, z: to.z, vx: (Math.random() - 0.5) * 2, vy: Math.random() * 2, vz: (Math.random() - 0.5) * 2, life: 0.3, t: 0, size: 0.14 + stage * 0.05, color: stage === 2 ? 0xff6a6a : 0xd9b8ff, g: 4 });
  }

  // ---------- Proyectiles y hechizos ----------
  drawProjs(rt) {
    this.projs = this.projs.filter((p) => {
      if (rt < p.start) return true;
      const prog = Math.min(1, ((rt - p.start) * DT) / p.dur);
      const tp = this.pos.get(p.tid);
      if (tp) { p.tx = tp.x; p.ty = tp.y; p.ta = tp.air ? 1 : 0; p.tt = tp.tower; }
      const h1 = p.tt ? 2.6 : p.ta ? 1.9 : 0.6;
      if (prog >= 1) {
        if (!['fire', 'breath', 'bomb', 'necro', 'ice'].includes(p.p)) this.burst(p.tx, p.ty, h1, 4, [0xffffff, 0xffe08a], 1.5, 0.2, 0.1);
        return false;
      }
      const dist = Math.hypot(p.tx - p.fx, p.ty - p.fy);
      const arc = (PROJ_ARC[p.p] ?? 0.08) * dist;
      const q1 = Math.min(1, prog + 0.04);
      const x = lerp(p.fx, p.tx, prog), y = lerp(p.fy, p.ty, prog), h = lerp(p.h0, h1, prog) + Math.sin(prog * PI) * arc;
      const x2 = lerp(p.fx, p.tx, q1), y2 = lerp(p.fy, p.ty, q1), h2 = lerp(p.h0, h1, q1) + Math.sin(q1 * PI) * arc;
      if (!p.sk) p.sk = this.inst.skeleton(p.T);
      const r = p.sk.root;
      r.position.set(wx(x), h, wz(y));
      this.tmpV.set(wx(x2), h2, wz(y2));
      if (this.tmpV.distanceToSquared(r.position) > 1e-6) r.lookAt(this.tmpV);
      r.scale.setScalar(p.p === 'breath' ? 1.3 : 1);
      this.inst.push(p.T, p.sk, TINT.none);
      if ((p.p === 'fire' || p.p === 'breath' || p.p === 'necro' || p.p === 'ice' || p.p === 'bomb') && Math.random() < 0.7) {
        const col = p.p === 'necro' ? 0x7dff6a : p.p === 'ice' ? 0xbfeaff : p.p === 'bomb' ? 0xffd36e : 0xffa040;
        this.sparks.spawn({ x: wx(x), y: h, z: wz(y), vx: (Math.random() - 0.5) * 0.6, vy: 0.3, vz: (Math.random() - 0.5) * 0.6, life: 0.35, t: 0, size: 0.2, color: col, g: 0 });
      }
      return true;
    });
  }

  drawSpells(rt) {
    this.spells = this.spells.filter((s) => {
      if (rt < s.start) return true;
      const prog = ((rt - s.start) * DT) / Math.max(0.05, s.dur);
      if (prog >= 1) return false;
      if (s.kind === 'fireball') {
        const T = this.projT('meteor');
        if (!s.sk) s.sk = this.inst.skeleton(T);
        const arcH = (k) => lerp(3.6, 0.4, k) + Math.sin(k * PI) * 3.6;
        const x = lerp(s.fx, s.x, prog), y = lerp(s.fy, s.y, prog), h = arcH(prog);
        const q1 = Math.min(1, prog + 0.05);
        const r = s.sk.root;
        r.position.set(wx(x), h, wz(y));
        this.tmpV.set(wx(lerp(s.fx, s.x, q1)), arcH(q1), wz(lerp(s.fy, s.y, q1)));
        r.lookAt(this.tmpV);
        r.scale.setScalar(0.85);
        this.inst.push(T, s.sk, TINT.none);
        this.shadows.add(wx(x), 0.05, wz(y), 0.4 + prog * 0.8, 0.4 + prog * 0.8, 1, this.flatQ);
        for (let i = 0; i < 2; i++) this.sparks.spawn({ x: wx(x), y: h, z: wz(y), vx: (Math.random() - 0.5) * 1.2, vy: 0.5, vz: (Math.random() - 0.5) * 1.2, life: 0.45, t: 0, size: 0.35 + Math.random() * 0.2, color: [0xff9a2e, 0xffd36e][i], g: 0 });
        if (Math.random() < 0.5) this.smoke.spawn({ x: wx(x), y: h, z: wz(y), vx: 0, vy: 0.4, vz: 0, life: 0.7, t: 0, size: 0.5, color: 0x555555, a: 0.5, grow: 1.5 });
      } else if (s.kind === 'arrows') {
        const T = this.projT('arrow');
        if (!s.list) {
          s.list = [];
          for (let i = 0; i < 26; i++) {
            const a = Math.random() * PI * 2, d = Math.sqrt(Math.random()) * 3.6;
            s.list.push({ ox: Math.cos(a) * d, oy: Math.sin(a) * d, delay: Math.random() * 0.25, sk: this.inst.skeleton(T) });
          }
        }
        const arcH = (k) => lerp(3.5, 0.2, k) + Math.sin(k * PI) * 5;
        for (const ar of s.list) {
          const k = clamp01((prog - ar.delay) / (1 - ar.delay));
          if (k <= 0) continue;
          const tx = s.x + ar.ox, ty = s.y + ar.oy;
          const k2 = Math.min(1, k + 0.04);
          const r = ar.sk.root;
          r.position.set(wx(lerp(s.fx, tx, k)), arcH(k), wz(lerp(s.fy, ty, k)));
          this.tmpV.set(wx(lerp(s.fx, tx, k2)), arcH(k2), wz(lerp(s.fy, ty, k2)));
          r.lookAt(this.tmpV);
          r.scale.setScalar(1.2);
          this.inst.push(T, ar.sk, TINT.none);
        }
      }
      return true;
    });
  }

  drawBolts(dt) {
    if (!this.bolts.length) return;
    const T = this.projT('boltSeg');
    this.bolts = this.bolts.filter((b) => {
      b.t += dt;
      if (b.t >= b.dur) return false;
      if (Math.random() < 0.2) return true; // parpadeo
      if (!b.sks) b.sks = b.segs.map(() => this.inst.skeleton(T));
      b.segs.forEach(([x0, y0, h0, x1, y1, h1], i) => {
        const sk = b.sks[i];
        const a = this.tmpV.set(wx(x0), h0, wz(y0)), c = this.tmpV2.set(wx(x1), h1, wz(y1));
        const len = a.distanceTo(c);
        sk.root.position.set((a.x + c.x) / 2, (a.y + c.y) / 2, (a.z + c.z) / 2);
        sk.root.lookAt(c);
        const w = 0.14 * (1 - b.t / b.dur) + 0.04;
        sk.root.scale.set(w, w, len);
        this.inst.push(T, sk, TINT.none);
      });
      return true;
    });
  }

  drawZones(dt, tsec) {
    this.zonesFx = this.zonesFx.filter((z) => {
      z.t += dt;
      if (z.t >= z.dur) return false;
      const fade = Math.min(1, (z.dur - z.t) / 0.5);
      if (z.kind === 'rage') {
        const pulse = 0.7 + Math.sin(tsec * 6) * 0.15;
        this.tmpC.setRGB(0.9 * fade * pulse, 0.15 * fade * pulse, 0.45 * fade * pulse);
        this.fxRings.add(wx(z.x), 0.11, wz(z.y), z.r, z.r, 1, this.flatQ, this.tmpC);
        this.tmpC.setRGB(0.35 * fade, 0.04 * fade, 0.15 * fade);
        this.fxDisc.add(wx(z.x), 0.07, wz(z.y), z.r, z.r, 1, this.flatQ, this.tmpC);
        if (Math.random() < dt * 30) {
          const a = Math.random() * PI * 2, d = Math.random() * z.r;
          this.sparks.spawn({ x: wx(z.x) + Math.cos(a) * d, y: 0.1, z: wz(z.y) + Math.sin(a) * d, vx: 0, vy: 1.5 + Math.random(), vz: 0, life: 0.8, t: 0, size: 0.22, color: Math.random() < 0.5 ? 0xff3a6a : 0xc04dff, g: 0 });
        }
      } else if (z.kind === 'ice') {
        this.tmpC.setRGB(0.25 * fade, 0.45 * fade, 0.6 * fade);
        this.fxDisc.add(wx(z.x), 0.07, wz(z.y), z.r, z.r, 1, this.flatQ, this.tmpC);
        const T = this.projT('iceSpike');
        if (!z.spikes) {
          z.spikes = [];
          for (let i = 0; i < 14; i++) {
            const a = (i / 14) * PI * 2 + Math.random() * 0.3, d = z.r * (0.4 + Math.random() * 0.6);
            z.spikes.push({ x: z.x + Math.cos(a) * d, y: z.y + Math.sin(a) * d, s: 0.6 + Math.random() * 0.7, rot: Math.random() * 6, tilt: (Math.random() - 0.5) * 0.6, sk: this.inst.skeleton(T) });
          }
        }
        const grow = Math.min(1, z.t / 0.2) * fade;
        for (const sp of z.spikes) {
          sp.sk.root.position.set(wx(sp.x), 0, wz(sp.y));
          sp.sk.root.rotation.set(sp.tilt, sp.rot, 0);
          sp.sk.root.scale.setScalar(Math.max(0.001, sp.s * grow));
          this.inst.push(T, sp.sk, TINT.none);
        }
        if (Math.random() < dt * 12) {
          const a = Math.random() * PI * 2, d = Math.random() * z.r;
          this.sparks.spawn({ x: wx(z.x) + Math.cos(a) * d, y: 1.5, z: wz(z.y) + Math.sin(a) * d, vx: 0, vy: -0.6, vz: 0, life: 1, t: 0, size: 0.14, color: 0xffffff, g: 0 });
        }
      }
      return true;
    });
  }

  drawMarks(dt) {
    this.marks = this.marks.filter((m) => {
      m.t += dt;
      if (m.t >= m.max) return false;
      const k = 1 - m.t / m.max;
      const pulse = 0.6 + Math.sin(m.t * 14) * 0.25;
      this.tmpC.setRGB((m.mine ? 0.4 : 0.9) * k * pulse, (m.mine ? 0.65 : 0.4) * k * pulse, (m.mine ? 1 : 0.4) * k * pulse);
      this.fxRings.add(wx(m.x), 0.12, wz(m.y), m.r, m.r, 1, this.flatQ, this.tmpC);
      return true;
    });
  }

  drawFx(dt) {
    this.fx = this.fx.filter((f) => {
      f.t += dt;
      const k = f.t / f.dur;
      if (k >= 1) return false;
      const r = lerp(f.r0, f.r1, 1 - Math.pow(1 - k, 2.2));
      this.tmpC.copy(f.c).multiplyScalar(f.op * (1 - k));
      if (f.kind === 'ring') this.fxRings.add(wx(f.x), f.h, wz(f.y), r, r, 1, this.flatQ, this.tmpC);
      else if (f.kind === 'ball') this.fxBalls.add(wx(f.x), f.h, wz(f.y), r, r, r, null, this.tmpC);
      else this.fxDisc.add(wx(f.x), f.h, wz(f.y), r, r, 1, this.flatQ, this.tmpC);
      return true;
    });
  }

  // ---------- Vista previa al arrastrar una carta ----------
  updateGhost(gh, frame) {
    for (const z of this.zones) z.visible = false;
    this.lineMesh.visible = this.tile.visible = this.range.visible = this.spellArea.visible = false;
    for (const r of this.ghostPool.values()) r.sk.root.visible = false;
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
    const u = UNITS[card.unit];
    if (u.proj || u.building || u.ramp) {
      this.range.visible = true;
      this.range.position.set(wx(gh.x), 0.1, wz(gh.y));
      this.range.scale.setScalar(Math.max(1, (u.range || 0) + u.radius));
      this.rangeMat.color.set(0xffffff);
    }
    const f = me === 0 ? 1 : -1;
    this.ghostMat.color.set(gh.valid ? 0xffffff : 0xff6060);
    formation(card.count || 1).forEach(([ox, oy], i) => {
      const r = this.ghostRig(card.unit, i);
      r.sk.root.visible = true;
      r.sk.root.position.set(wx(gh.x + ox * f), (r.rig.lift || 0) * (VIS[card.unit] || 1.5), wz(gh.y + oy * f));
      r.sk.root.rotation.y = me === 0 ? PI : 0;
    });
  }
}

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}
