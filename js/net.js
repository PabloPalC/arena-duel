// Arena Duel — red: WebRTC directo (PeerJS) con relé MQTT de respaldo
import { PROTOCOL } from './data.js';

const params = new URLSearchParams(location.search);
const PEER_PREFIX = `arenaduel-${PROTOCOL}-`;
const MQTT_BROKERS = params.get('mqtt')
  ? [params.get('mqtt')]
  : ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt'];
const PEER_OPTS = params.get('peerhost')
  ? { host: params.get('peerhost'), port: +params.get('peerport') || 9000, path: '/', secure: false, debug: 0 }
  : { debug: 0 };
const FORCE = params.get('net'); // 'p2p' | 'relay' | 'local' (pruebas)

const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
export function makeCode() {
  let s = '';
  for (let i = 0; i < 4; i++) s += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  return s;
}
export function cleanCode(s) {
  return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
}

const loaded = {};
function loadScript(src) {
  if (!loaded[src]) {
    loaded[src] = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = res; s.onerror = () => { loaded[src] = null; rej(new Error('No se pudo cargar ' + src)); };
      document.head.appendChild(s);
    });
  }
  return loaded[src];
}

const withTimeout = (p, ms, msg) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(msg)), ms))]);

// ---------- Transportes ----------
// Todos exponen: send(obj), close(), onmessage(obj), onclose()

class PeerHost {
  constructor(code, onGuest) {
    this.code = code; this.onGuest = onGuest; this.peer = null;
  }
  async start() {
    await loadScript('lib/peerjs.min.js');
    return new Promise((res, rej) => {
      const peer = new window.Peer(PEER_PREFIX + this.code, PEER_OPTS);
      this.peer = peer;
      let opened = false;
      peer.on('open', () => { opened = true; res(); });
      peer.on('error', (e) => {
        if (!opened) rej(e);
      });
      peer.on('connection', (conn) => {
        conn.on('open', () => {
          const tr = wrapConn(conn, 'p2p');
          this.onGuest(tr);
        });
      });
      peer.on('disconnected', () => { try { peer.reconnect(); } catch { /* */ } });
    });
  }
  close() { try { this.peer && this.peer.destroy(); } catch { /* */ } }
}

function wrapConn(conn, kind) {
  const tr = {
    kind,
    onmessage: null, onclose: null,
    send(o) { try { if (conn.open) conn.send(o); } catch { /* */ } },
    close() { try { conn.close(); } catch { /* */ } },
  };
  conn.on('data', (d) => tr.onmessage && tr.onmessage(d));
  conn.on('close', () => tr.onclose && tr.onclose());
  conn.on('error', () => tr.onclose && tr.onclose());
  return tr;
}

async function peerJoin(code) {
  await loadScript('lib/peerjs.min.js');
  return new Promise((res, rej) => {
    const peer = new window.Peer(PEER_OPTS);
    let done = false;
    const fail = (e) => { if (!done) { done = true; try { peer.destroy(); } catch { /* */ } rej(e); } };
    peer.on('error', fail);
    peer.on('open', () => {
      const conn = peer.connect(PEER_PREFIX + code, { reliable: true, serialization: 'json' });
      conn.on('open', () => {
        if (done) return;
        done = true;
        const tr = wrapConn(conn, 'p2p');
        const close = tr.close;
        tr.close = () => { close(); try { peer.destroy(); } catch { /* */ } };
        res(tr);
      });
      conn.on('error', fail);
    });
  });
}

class MqttRoom {
  // role: 'h' (anfitrión) o 'g' (invitado)
  constructor(url, code, role) {
    this.url = url; this.code = code; this.role = role;
    this.base = `arenaduel/${PROTOCOL}/${code}`;
    this.client = null; this.onraw = null;
  }
  async connect() {
    await loadScript('lib/mqtt.min.js');
    return new Promise((res, rej) => {
      const c = window.mqtt.connect(this.url, {
        clientId: 'ad_' + Math.random().toString(36).slice(2, 10),
        reconnectPeriod: 2000, connectTimeout: 6000, keepalive: 20, clean: true,
      });
      this.client = c;
      let ok = false;
      c.on('connect', () => {
        c.subscribe(`${this.base}/${this.role}`, { qos: 0 }, (err) => {
          if (err) { if (!ok) rej(err); return; }
          if (!ok) { ok = true; res(this); }
        });
      });
      c.on('message', (_t, payload) => {
        let msg;
        try { msg = JSON.parse(payload.toString()); } catch { return; }
        this.onraw && this.onraw(msg);
      });
      c.on('error', (e) => { if (!ok) { try { c.end(true); } catch { /* */ } rej(e); } });
    });
  }
  publish(obj) {
    const to = this.role === 'h' ? 'g' : 'h';
    try { this.client.publish(`${this.base}/${to}`, JSON.stringify(obj), { qos: 0 }); } catch { /* */ }
  }
  close() { try { this.client && this.client.end(true); } catch { /* */ } }
}

function relayTransport(room, peerId) {
  const tr = {
    kind: 'relay', onmessage: null, onclose: null,
    send(o) { room.publish({ ...o, _to: peerId }); },
    close() { room.publish({ t: '_bye', _to: peerId }); room.close(); },
  };
  room.onraw = (m) => {
    if (m.t === '_hello') {
      if (m.from !== peerId) room.publish({ t: '_welcome', _to: m.from, from: room.myId, full: 1 });
      return;
    }
    if (m.t === '_welcome') return;
    if (m._to && m._to !== room.myId) return;
    if (m.t === '_bye') { tr.onclose && tr.onclose(); return; }
    tr.onmessage && tr.onmessage(m);
  };
  return tr;
}

async function relayJoin(code) {
  let lastErr;
  for (const url of MQTT_BROKERS) {
    const room = new MqttRoom(url, code, 'g');
    room.myId = 'g' + Math.random().toString(36).slice(2, 9);
    try {
      await withTimeout(room.connect(), 7000, 'relé sin respuesta');
      const welcome = await withTimeout(new Promise((res) => {
        room.onraw = (m) => { if (m.t === '_welcome' && m._to === room.myId) res(m); };
        const ping = () => room.publish({ t: '_hello', from: room.myId });
        ping();
        const iv = setInterval(ping, 1200);
        setTimeout(() => clearInterval(iv), 6500);
      }), 7000, 'sala no encontrada');
      if (welcome.full) throw new Error('La sala está llena');
      return relayTransport(room, welcome.from);
    } catch (e) {
      lastErr = e;
      room.close();
      if (/llena/.test(e.message)) throw e;
    }
  }
  throw lastErr || new Error('No se pudo conectar');
}

class RelayHost {
  constructor(code, onGuest) { this.code = code; this.onGuest = onGuest; this.rooms = []; this.taken = false; }
  async start() {
    const tries = MQTT_BROKERS.map(async (url) => {
      const room = new MqttRoom(url, this.code, 'h');
      room.myId = 'h' + Math.random().toString(36).slice(2, 9);
      await withTimeout(room.connect(), 8000, 'relé sin respuesta');
      this.rooms.push(room);
      room.onraw = (m) => {
        if (m.t !== '_hello' || !m.from) return;
        if (this.taken) {
          if (this.guestId !== m.from) room.publish({ t: '_welcome', _to: m.from, from: room.myId, full: 1 });
          else room.publish({ t: '_welcome', _to: m.from, from: room.myId });
          return;
        }
        this.taken = true;
        this.guestId = m.from;
        room.publish({ t: '_welcome', _to: m.from, from: room.myId });
        const tr = relayTransport(room, m.from);
        this.onGuest(tr, room);
      };
    });
    const res = await Promise.allSettled(tries);
    if (!res.some(r => r.status === 'fulfilled')) throw new Error('relé no disponible');
  }
  keepOnly(room) { for (const r of this.rooms) if (r !== room) r.close(); this.rooms = [room]; }
  close() { for (const r of this.rooms) r.close(); }
}

class LocalBus {
  // Para pruebas en un mismo navegador (?net=local)
  static host(code, onGuest) {
    const ch = new BroadcastChannel('ad-' + code);
    let taken = false;
    ch.onmessage = (e) => {
      const m = e.data;
      if (m.t === '_hello' && !taken) {
        taken = true;
        ch.postMessage({ t: '_welcome' });
        onGuest(LocalBus.wrap(ch, 'g'));
      }
    };
    return { close: () => ch.close() };
  }
  static join(code) {
    return withTimeout(new Promise((res) => {
      const ch = new BroadcastChannel('ad-' + code);
      ch.onmessage = (e) => { if (e.data.t === '_welcome') res(LocalBus.wrap(ch, 'h')); };
      ch.postMessage({ t: '_hello' });
    }), 4000, 'sala no encontrada');
  }
  static wrap(ch, to) {
    const tr = {
      kind: 'local', onmessage: null, onclose: null,
      send(o) { ch.postMessage({ ...o, _to: to }); },
      close() { ch.postMessage({ t: '_bye', _to: to }); ch.close(); },
    };
    const me = to === 'g' ? 'h' : 'g';
    ch.onmessage = (e) => {
      const m = e.data;
      if (m._to !== me) return;
      if (m.t === '_bye') return tr.onclose && tr.onclose();
      tr.onmessage && tr.onmessage(m);
    };
    return tr;
  }
}

// ---------- API pública ----------
export async function hostRoom(onGuest, onStatus) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const code = makeCode();
    let connected = false;
    const parts = [];
    const accept = (tr, extra) => {
      if (connected) { tr.send({ t: 'full' }); setTimeout(() => tr.close(), 300); return; }
      connected = true;
      // cerrar los demás canales de escucha
      for (const p of parts) {
        if (p.obj === extra?.host && extra?.room) p.obj.keepOnly(extra.room);
        else if (p.kind !== tr.kind) p.obj.close();
      }
      onGuest(tr);
    };
    if (FORCE === 'local') {
      parts.push({ kind: 'local', obj: LocalBus.host(code, (tr) => accept(tr)) });
      return { code, close: () => parts.forEach(p => p.obj.close()), via: ['local'] };
    }
    const via = [];
    let idTaken = false;
    if (FORCE !== 'relay') {
      const ph = new PeerHost(code, (tr) => accept(tr));
      try {
        await withTimeout(ph.start(), 9000, 'servidor p2p sin respuesta');
        parts.push({ kind: 'p2p', obj: ph });
        via.push('p2p');
      } catch (e) {
        ph.close();
        if (e && e.type === 'unavailable-id') idTaken = true;
      }
    }
    if (idTaken) continue;
    if (FORCE !== 'p2p') {
      const rh = new RelayHost(code, (tr, room) => accept(tr, { host: rh, room }));
      try {
        await rh.start();
        parts.push({ kind: 'relay', obj: rh });
        via.push('relay');
      } catch { rh.close(); }
    }
    if (!via.length) throw new Error('No hay conexión a internet o los servidores no responden.');
    onStatus && onStatus(via);
    return { code, via, close: () => parts.forEach(p => p.obj.close()) };
  }
  throw new Error('No se pudo crear la sala, inténtalo otra vez.');
}

export async function joinRoom(code, onStatus) {
  if (FORCE === 'local') return LocalBus.join(code);
  if (FORCE !== 'relay') {
    onStatus && onStatus('Conectando directo…');
    try {
      return await withTimeout(peerJoin(code), 7000, 'p2p sin respuesta');
    } catch (e) {
      if (FORCE === 'p2p') throw new Error('No se encontró la sala ' + code);
    }
  }
  onStatus && onStatus('Probando por relé…');
  try {
    return await relayJoin(code);
  } catch (e) {
    if (/llena/.test(e.message)) throw e;
    throw new Error('No se encontró la sala ' + code + '. Revisa el código y que tu amigo siga en la sala.');
  }
}
