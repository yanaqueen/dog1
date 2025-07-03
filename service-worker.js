const CACHE_NAME = 'app-cache-v2';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './index.html',
        './style.css',
        './app.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './J1.jpg',
        './J2.jpg',
        './J3.jpg',
        './J4.jpg',
        './J5.jpg',
        './J7.jpg',
        './Y1.png'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
