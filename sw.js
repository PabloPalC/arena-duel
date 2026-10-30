// Arena Duel — caché offline: la segunda vez el juego abre al instante
const VERSION = 'cd389c79da';
const PRECACHE = ["./","index.html","build/app-6287fe1cdc.js","build/app-5e7f467519.css","manifest.webmanifest","icons/icon-192.png","fonts/grenze-gotisch-latin-900-normal.woff2","fonts/rubik-latin-500-normal.woff2","fonts/rubik-latin-700-normal.woff2","fonts/rubik-latin-800-normal.woff2","art/arcane.webp","art/archers.webp","art/arquebusier.webp","art/arrows.webp","art/automaton.webp","art/ballista.webp","art/barbarians.webp","art/bats.webp","art/berserker.webp","art/crypt.webp","art/draco.webp","art/fireball.webp","art/freeze.webp","art/frost.webp","art/giant.webp","art/goblins.webp","art/golem.webp","art/grenadier.webp","art/knight.webp","art/lancer.webp","art/legion.webp","art/lightning.webp","art/necromancer.webp","art/pyromancer.webp","art/rage.webp","art/skeletons.webp","art/wolfrider.webp"];
const CACHE = 'ad-' + VERSION;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith('ad-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // la página: red primero (para recibir actualizaciones) y caché si no hay conexión
  if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
    e.respondWith(fetch(req)
      .then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(url.pathname, copy)); return r; })
      .catch(() => caches.match(url.pathname).then((r) => r || caches.match('index.html'))));
    return;
  }
  // todo lo demás: caché primero
  e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
