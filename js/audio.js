// Arena Duel — efectos de sonido sintetizados (sin archivos)
let ctx = null, master = null, noiseBuf = null;
let muted = false;
try { muted = localStorage.getItem('ad_mute') === '1'; } catch { /* */ }
const last = {};

export function unlockAudio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.55;
    const comp = ctx.createDynamicsCompressor();
    master.connect(comp);
    comp.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === 'suspended') ctx.resume();
}

export function isMuted() { return muted; }
export function setMuted(m) {
  muted = m;
  try { localStorage.setItem('ad_mute', m ? '1' : '0'); } catch { /* */ }
}

function tone(type, f0, f1, dur, vol, delay = 0) {
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t);
  if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + dur + 0.05);
}

function noise(dur, vol, type, f0, f1, delay = 0, q = 1) {
  const t = ctx.currentTime + delay;
  const s = ctx.createBufferSource();
  s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter();
  f.type = type; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t);
  if (f1 !== f0) f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(master);
  s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
}

const GAP = { hit: 0.05, shoot: 0.07, die: 0.06, splash: 0.08, deploy: 0.05 };

export function sfx(name) {
  if (muted || !ctx || ctx.state !== 'running') return;
  const now = ctx.currentTime;
  if (GAP[name] && last[name] && now - last[name] < GAP[name]) return;
  last[name] = now;
  switch (name) {
    case 'select': tone('triangle', 900, 1200, 0.06, 0.12); break;
    case 'deploy': tone('sine', 260, 620, 0.12, 0.25); noise(0.1, 0.08, 'highpass', 2000, 4000); break;
    case 'enemyDeploy': tone('sine', 200, 380, 0.12, 0.12); break;
    case 'error': tone('square', 180, 140, 0.15, 0.08); break;
    case 'hit': noise(0.06, 0.18, 'bandpass', 1800, 900, 0, 2); tone('square', 140, 90, 0.05, 0.05); break;
    case 'shoot': noise(0.05, 0.06, 'highpass', 3000, 5000); break;
    case 'splash': noise(0.25, 0.18, 'lowpass', 1600, 300); break;
    case 'die': tone('triangle', 500, 160, 0.16, 0.12); noise(0.15, 0.05, 'lowpass', 1200, 400); break;
    case 'spell': noise(0.55, 0.16, 'bandpass', 300, 1800, 0, 1.5); break;
    case 'boom': noise(0.7, 0.5, 'lowpass', 900, 80); tone('sine', 90, 35, 0.5, 0.5); break;
    case 'tower':
      noise(1.1, 0.6, 'lowpass', 1200, 60); tone('sine', 70, 30, 0.8, 0.6);
      tone('triangle', 523, 523, 0.35, 0.15, 0.25); tone('triangle', 659, 659, 0.35, 0.15, 0.35); tone('triangle', 784, 784, 0.5, 0.18, 0.45);
      break;
    case 'king': tone('square', 330, 330, 0.12, 0.08); tone('square', 440, 440, 0.18, 0.08, 0.12); break;
    case 'tick': tone('sine', 880, 880, 0.12, 0.2); break;
    case 'go': tone('square', 660, 660, 0.12, 0.12); tone('square', 990, 990, 0.3, 0.14, 0.1); break;
    case 'phase': [523, 659, 784].forEach((f, i) => tone('triangle', f, f, 0.18, 0.15, i * 0.09)); break;
    case 'emote': tone('sine', 700, 1100, 0.1, 0.15); break;
    case 'win':
      [523, 659, 784, 1046].forEach((f, i) => tone('triangle', f, f, 0.3, 0.2, i * 0.13));
      tone('triangle', 1318, 1318, 0.7, 0.2, 0.55);
      break;
    case 'lose': [440, 392, 349, 262].forEach((f, i) => tone('sawtooth', f, f * 0.98, 0.32, 0.08, i * 0.2)); break;
    case 'draw': [440, 440, 523].forEach((f, i) => tone('triangle', f, f, 0.25, 0.14, i * 0.18)); break;
  }
}

export function buzz(ms) {
  try { if (!muted && navigator.vibrate) navigator.vibrate(ms); } catch { /* */ }
}
