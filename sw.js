const CACHE_NAME = "freshcab-assets-v2";
const PRECACHE_URLS = [
  "./css/styles.css",
  "./js/main.js",
  "./js/i18n.js",
  "./images/hero/hero-index.webp",
  "./images/hero/hero-pricing.webp",
  "./images/hero/hero-gallery.webp",
  "./images/hero/hero-contact.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  const isAsset = ["image", "font", "style", "script"].includes(request.destination);

  event.respondWith(
    isAsset
      ? caches.match(request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          return fetchAndCache(request);
        })
      : fetch(request)
          .then((networkResponse) => {
            if (networkResponse.ok) {
              caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse.clone()));
            }
            return networkResponse;
          })
          .catch(() => caches.match(request))
  );
});

function fetchAndCache(request) {
  return fetch(request).then((networkResponse) => {
    if (!networkResponse.ok) return networkResponse;
    caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse.clone()));
    return networkResponse;
  });
}
