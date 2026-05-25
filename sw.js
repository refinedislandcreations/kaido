/* Workbox-based Service Worker for Kaido */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js",
);

if (workbox) {
  workbox.setConfig({ debug: false });

  // Precache core assets
  workbox.precaching.precacheAndRoute([
    { url: "/", revision: null },
    { url: "/index.html", revision: null },
    { url: "/offline.html", revision: null },
    { url: "/assets/css/output.css", revision: null },
    { url: "/assets/css/custom-style.css", revision: null },
  ]);

  // Cache-first for static assets (CSS, JS)
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "style" || request.destination === "script",
    new workbox.strategies.CacheFirst({
      cacheName: "assets-cache",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30,
        }),
      ],
    }),
  );

  // Cache-first for images
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst({
      cacheName: "images-cache",
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
    cacheName: "pages-cache",
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
} else {
  console.warn("Workbox failed to load");
}
