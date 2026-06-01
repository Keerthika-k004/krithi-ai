const CACHE = 'krithi-ai-v2';
const ASSETS = [
  '/krithi-ai/',
  '/krithi-ai/index.html',
  '/krithi-ai/css/style.css',
  '/krithi-ai/js/app.js',
  '/krithi-ai/js/faq.js',
  '/krithi-ai/manifest.json',
  '/krithi-ai/icon-192.png',
  '/krithi-ai/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/krithi-ai/')) {
    if (request.mode === 'navigate') {
      e.respondWith(fetch(request).catch(() => caches.match('/krithi-ai/index.html')));
    } else {
      e.respondWith(caches.match(request).then(r => r || fetch(request).catch(() => new Response('Offline', { status: 503 }))));
    }
  }
});
