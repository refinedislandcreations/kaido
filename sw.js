/* Workbox-based Service Worker for Kaido */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js",
);

if (workbox) {
  workbox.setConfig({ debug: false });

  const CACHE_VERSION = "v20260528";
  const ASSETS_CACHE = `assets-cache-${CACHE_VERSION}`;
  const IMAGES_CACHE = `images-cache-${CACHE_VERSION}`;
  const PAGES_CACHE = `pages-cache-${CACHE_VERSION}`;
  const ACTIVE_CACHES = [ASSETS_CACHE, IMAGES_CACHE, PAGES_CACHE];

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
  workbox.precaching.cleanupOutdatedCaches();

  // Precache core assets
  workbox.precaching.precacheAndRoute([
    { url: "/", revision: null },
    { url: "/index.html", revision: null },
    { url: "/offline.html", revision: null },
  ]);

  // Network-first for styles and scripts so deploys pick up design changes quickly
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "style" || request.destination === "script",
    new workbox.strategies.NetworkFirst({
      cacheName: ASSETS_CACHE,
      networkTimeoutSeconds: 3,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        }),
      ],
    }),
  );

  // Cache-first for images
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst({
      cacheName: IMAGES_CACHE,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 60,
        }),
      ],
    }),
  );

  // Network-first for navigation requests with offline fallback
  const navigationHandler = new workbox.strategies.NetworkFirst({
    cacheName: PAGES_CACHE,
    networkTimeoutSeconds: 3,
  });

  workbox.routing.registerRoute(
    ({ request }) => request.mode === "navigate",
    async (args) => {
      try {
        return await navigationHandler.handle(args);
      } catch (err) {
        return caches.match("/offline.html");
      }
    },
  );

  self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });

  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter((cacheName) => !ACTIVE_CACHES.includes(cacheName))
              .map((cacheName) => caches.delete(cacheName)),
          ),
        ),
    );
  });
} else {
  console.warn("Workbox failed to load");
}
