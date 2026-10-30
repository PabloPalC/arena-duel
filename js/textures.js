// Arena Duel — texturas pintadas por código (no hay imágenes que descargar)
import { W, H, RIVER_TOP, RIVER_BOT, BRIDGES, TOWER_LAYOUT } from './data.js';

function rng(seed) {
  let s = seed % 2147483647; if (s <= 0) s += 2147483646;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function rr(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
const hsl = (h, s, l, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

// Suelo de la arena: césped a cuadros con briznas, caminos, orillas del río y sombras de las torres
export function arenaTexture(P = 56) {
  const [c, g] = canvas(W * P, H * P);
  const R = rng(11);
  // cuadros de césped con variación suave
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const v = ((x + y) % 2 ? 0 : 4) + R() * 2.5;
    g.fillStyle = hsl(98 - R() * 4, 46 + R() * 6, 42 + v);
    g.fillRect(x * P, y * P, P + 1, P + 1);
  }
  // briznas de hierba
  for (let i = 0; i < 9000; i++) {
    const x = R() * W * P, y = R() * H * P;
    const l = 4 + R() * 7;
    g.strokeStyle = R() < 0.5 ? hsl(100, 50, 52 + R() * 10, 0.55) : hsl(105, 45, 30 + R() * 8, 0.45);
    g.lineWidth = 1.2 + R();
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (R() - 0.5) * 4, y - l); g.stroke();
  }
  // caminos de tierra
  const path = (x0, y0, x1, y1) => {
    const px = x0 * P, py = y0 * P, pw = (x1 - x0) * P, ph = (y1 - y0) * P;
    g.save();
    rr(g, px, py, pw, ph, P * 0.55);
    g.clip();
    const grd = g.createLinearGradient(px, py, px + pw, py);
    grd.addColorStop(0, '#c9ac72'); grd.addColorStop(0.5, '#ddc38d'); grd.addColorStop(1, '#c9ac72');
    g.fillStyle = grd;
    g.fillRect(px, py, pw, ph);
    for (let i = 0; i < (pw * ph) / 140; i++) {
      const x = px + R() * pw, y = py + R() * ph;
      g.fillStyle = R() < 0.5 ? 'rgba(140,105,60,0.35)' : 'rgba(255,240,200,0.35)';
      g.beginPath(); g.ellipse(x, y, 1.5 + R() * 3, 1 + R() * 2, R() * 3, 0, 7); g.fill();
    }
    g.restore();
    g.strokeStyle = 'rgba(80,60,30,0.35)'; g.lineWidth = 3;
    rr(g, px, py, pw, ph, P * 0.55); g.stroke();
    // matojos en el borde
    for (let i = 0; i < (pw + ph) / 6; i++) {
      const t = R();
      const onX = R() < pw / (pw + ph);
      const x = onX ? px + t * pw : (R() < 0.5 ? px : px + pw);
      const y = onX ? (R() < 0.5 ? py : py + ph) : py + t * ph;
      g.fillStyle = hsl(100, 45, 35 + R() * 12, 0.85);
      g.beginPath(); g.ellipse(x, y, 3 + R() * 4, 2 + R() * 3, R() * 3, 0, 7); g.fill();
    }
  };
  for (const bx of BRIDGES) { path(bx - 0.9, 5.0, bx + 0.9, RIVER_TOP + 0.2); path(bx - 0.9, RIVER_BOT - 0.2, bx + 0.9, 27.0); }
  path(3.0, 27.7, 15.0, 30.2); path(3.0, 1.8, 15.0, 4.3);
  path(2.6, 25.4, 4.4, 29.6); path(13.6, 25.4, 15.4, 29.6);
  path(2.6, 2.4, 4.4, 6.6); path(13.6, 2.4, 15.4, 6.6);
  // flores y tréboles
  for (let i = 0; i < 260; i++) {
    const x = R() * W, y = R() * H;
    if (y > RIVER_TOP - 0.7 && y < RIVER_BOT + 0.7) continue;
    if (BRIDGES.some(b => Math.abs(x - b) < 1.4)) continue;
    if (Math.abs(x - 9) < 6.4 && (y < 4.8 || y > 27.2)) continue;
    const k = R();
    if (k < 0.55) {
      const col = ['#fff3a6', '#ffffff', '#ff9ec8', '#c8b0ff', '#ffd27a'][Math.floor(R() * 5)];
      g.fillStyle = col;
      for (let j = 0; j < 5; j++) { g.beginPath(); g.arc(x * P + Math.cos(j * 1.26) * 3.2, y * P + Math.sin(j * 1.26) * 3.2, 2.6, 0, 7); g.fill(); }
      g.fillStyle = '#f2b631'; g.beginPath(); g.arc(x * P, y * P, 1.8, 0, 7); g.fill();
    } else {
      g.fillStyle = hsl(110, 45, 30 + R() * 8, 0.9);
      for (let j = 0; j < 3; j++) { g.beginPath(); g.arc(x * P + Math.cos(j * 2.1) * 3, y * P + Math.sin(j * 2.1) * 3, 3, 0, 7); g.fill(); }
    }
  }
  // lecho del río con orillas de arena
  const ry0 = RIVER_TOP * P, ry1 = RIVER_BOT * P;
  g.fillStyle = '#d9c48f';
  g.fillRect(0, ry0 - P * 0.28, W * P, ry1 - ry0 + P * 0.56);
  const rv = g.createLinearGradient(0, ry0, 0, ry1);
  rv.addColorStop(0, '#2a6fa8'); rv.addColorStop(0.5, '#1d5a91'); rv.addColorStop(1, '#2a6fa8');
  g.fillStyle = rv;
  g.fillRect(0, ry0 - 2, W * P, ry1 - ry0 + 4);
  for (let i = 0; i < 160; i++) {
    const x = R() * W * P, top = R() < 0.5;
    g.fillStyle = 'rgba(120,100,70,0.45)';
    g.beginPath(); g.ellipse(x, top ? ry0 - P * 0.12 : ry1 + P * 0.12, 2 + R() * 5, 1.5 + R() * 2, 0, 0, 7); g.fill();
  }
  // sombras pintadas de las torres (la luz viene de arriba a la izquierda)
  for (const p of [0, 1]) for (const L of TOWER_LAYOUT) {
    const x = p ? W - L.x : L.x, y = p ? H - L.y : L.y;
    const r = L.kind === 'king' ? 2.3 : 1.7;
    const gr = g.createRadialGradient((x + 0.6) * P, (y + 0.5) * P, 0, (x + 0.6) * P, (y + 0.5) * P, r * P * 1.15);
    gr.addColorStop(0, 'rgba(0,20,0,0.42)'); gr.addColorStop(0.7, 'rgba(0,20,0,0.25)'); gr.addColorStop(1, 'rgba(0,20,0,0)');
    g.fillStyle = gr;
    g.beginPath(); g.ellipse((x + 0.6) * P, (y + 0.5) * P, r * P * 1.15, r * P * 1.0, 0, 0, 7); g.fill();
  }
  return c;
}

export function waterTexture() {
  const [c, g] = canvas(256, 128);
  const grd = g.createLinearGradient(0, 0, 0, 128);
  grd.addColorStop(0, '#5bbcf0'); grd.addColorStop(0.5, '#3ea3df'); grd.addColorStop(1, '#5bbcf0');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 128);
  const R = rng(3);
  for (let i = 0; i < 26; i++) {
    const x = R() * 256, y = 10 + R() * 108, w = 18 + R() * 30;
    g.strokeStyle = `rgba(255,255,255,${0.35 + R() * 0.35})`;
    g.lineWidth = 2 + R() * 2;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + w / 2, y - 5, x + w, y); g.stroke();
    if (x + w > 256) { g.beginPath(); g.moveTo(x - 256, y); g.quadraticCurveTo(x - 256 + w / 2, y - 5, x - 256 + w, y); g.stroke(); }
  }
  return c;
}

export function foamTexture() {
  const [c, g] = canvas(256, 32);
  const R = rng(9);
  for (let i = 0; i < 70; i++) {
    const x = R() * 256, y = 4 + R() * 12, r = 3 + R() * 6;
    g.fillStyle = `rgba(255,255,255,${0.5 + R() * 0.4})`;
    g.beginPath(); g.ellipse(x, y, r * 1.6, r * 0.7, 0, 0, 7); g.fill();
    if (x + r * 2 > 256) { g.beginPath(); g.ellipse(x - 256, y, r * 1.6, r * 0.7, 0, 0, 7); g.fill(); }
  }
  return c;
}

// Sillería de piedra para las torres
export function stoneTexture(light = false) {
  const [c, g] = canvas(256, 256);
  const R = rng(light ? 21 : 17);
  g.fillStyle = light ? '#9d968a' : '#8a8378'; g.fillRect(0, 0, 256, 256);
  const rows = 8, bh = 256 / rows;
  for (let r = 0; r < rows; r++) {
    const n = 4, bw = 256 / n, off = (r % 2) * bw / 2;
    for (let i = -1; i <= n; i++) {
      const x = i * bw + off, y = r * bh;
      const l = (light ? 76 : 70) + R() * 10;
      g.fillStyle = hsl(36 + R() * 10, 8 + R() * 6, l);
      rr(g, x + 3, y + 3, bw - 6, bh - 6, 6); g.fill();
      // luz arriba, sombra abajo
      g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x + 6, y + 4, bw - 12, 3);
      g.fillStyle = 'rgba(0,0,0,0.16)'; g.fillRect(x + 6, y + bh - 7, bw - 12, 3);
      for (let k = 0; k < 14; k++) {
        g.fillStyle = R() < 0.5 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
        g.beginPath(); g.arc(x + 6 + R() * (bw - 12), y + 6 + R() * (bh - 12), 1 + R() * 2.5, 0, 7); g.fill();
      }
      if (R() < 0.25) { // musgo
        g.fillStyle = 'rgba(90,140,60,0.35)';
        g.beginPath(); g.ellipse(x + R() * bw, y + bh - 6, 10 + R() * 10, 4, 0, 0, 7); g.fill();
      }
    }
  }
  return c;
}

export function woodTexture() {
  const [c, g] = canvas(128, 256);
  const R = rng(5);
  const n = 4, w = 128 / n;
  for (let i = 0; i < n; i++) {
    g.fillStyle = hsl(28 + R() * 6, 45, 38 + R() * 8);
    g.fillRect(i * w, 0, w, 256);
    g.strokeStyle = 'rgba(60,30,10,0.35)';
    for (let k = 0; k < 6; k++) {
      g.lineWidth = 1;
      g.beginPath(); const x = i * w + 4 + R() * (w - 8);
      g.moveTo(x, 0); g.bezierCurveTo(x + 3, 80, x - 3, 160, x + 2, 256); g.stroke();
    }
    g.fillStyle = 'rgba(30,15,5,0.6)'; g.fillRect(i * w, 0, 2, 256);
    g.fillStyle = 'rgba(255,230,190,0.15)'; g.fillRect(i * w + 2, 0, 2, 256);
    for (const y of [40 + R() * 20, 180 + R() * 20]) { g.fillStyle = '#3a2a1e'; g.beginPath(); g.arc(i * w + w / 2, y, 2.4, 0, 7); g.fill(); }
  }
  return c;
}

// Tejas (blancas: se tiñen con el color del equipo)
export function roofTexture() {
  const [c, g] = canvas(256, 256);
  const R = rng(7);
  g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, 256, 256);
  const rows = 8, h = 32;
  for (let r = 0; r < rows; r++) {
    const n = 8, w = 32, off = (r % 2) * 16;
    for (let i = -1; i <= n; i++) {
      const x = i * w + off, y = r * h;
      const l = 82 + R() * 12;
      g.fillStyle = hsl(0, 0, l);
      g.beginPath(); g.moveTo(x + 1, y); g.lineTo(x + w - 1, y); g.lineTo(x + w - 1, y + h * 0.7);
      g.quadraticCurveTo(x + w / 2, y + h + 4, x + 1, y + h * 0.7); g.closePath(); g.fill();
      g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x + 1, y + h - 6, w - 2, 4);
    }
  }
  return c;
}

export function bannerTexture() {
  const [c, g] = canvas(128, 192);
  g.fillStyle = '#f0f0f0'; g.fillRect(0, 0, 128, 192);
  g.fillStyle = '#c9c9c9'; g.fillRect(0, 0, 128, 14);
  g.fillStyle = '#ffffff';
  // escudo con espadas cruzadas
  g.beginPath(); g.moveTo(34, 50); g.lineTo(94, 50); g.lineTo(94, 100); g.quadraticCurveTo(90, 130, 64, 145); g.quadraticCurveTo(38, 130, 34, 100); g.closePath(); g.fill();
  g.strokeStyle = '#f2b631'; g.lineWidth = 6; g.stroke();
  g.strokeStyle = '#f2b631'; g.lineWidth = 7;
  g.beginPath(); g.moveTo(46, 62); g.lineTo(82, 128); g.moveTo(82, 62); g.lineTo(46, 128); g.stroke();
  g.fillStyle = '#c9c9c9';
  g.beginPath(); g.moveTo(0, 192); g.lineTo(64, 168); g.lineTo(128, 192); g.lineTo(128, 182); g.lineTo(0, 182); g.fill();
  return c;
}
