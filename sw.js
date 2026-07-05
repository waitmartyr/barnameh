const CACHE_NAME = 'planner-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  // می‌توانی آدرس CDNهای استفاده شده را هم اضافه کنی، ولی برای سادگی همین کافی است.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});