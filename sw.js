// Casal Maromba — service worker: guarda o app para funcionar sem internet na academia.
const VERSAO = "casal-maromba-v3";
const ARQUIVOS = [
  "./", "./index.html", "./manifest.webmanifest", "./perfis.json",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png", "./icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const url = new URL(req.url);
  // Fichas e perfis: tenta a internet primeiro (para pegar ficha nova), senão usa a cópia salva.
  if (url.pathname.endsWith(".json") || req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(r => {
        const copia = r.clone();
        if (r.ok) caches.open(VERSAO).then(c => c.put(req, copia));
        return r;
      }).catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
