self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('thirstygee-cache-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        // these files should exist in the same folder:
        './soulful_loop.mp3',
        './scratch.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  });
  
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  );
});