const appName = "neighborhood-map"
const staticCacheName = appName + "-v1.0";
const contentImgsCache = appName + "-images";

var allCaches = [
  staticCacheName,
  contentImgsCache
];


/** At Service Worker Install time, cache all static assets */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "../src/API/index.js",
        "../src/component/ListItem/ListItem.js",
        "../src/component/Map/Map.js",
        "../src/component/SideBar/SideBar.js",
        "../src/component/VenueList/VenueList.js",
        "../src/App.css",
        "../src/App.js",
        "../src/index.js",
        "../src/index.css",
        "../src/registerSw.js"
      ]);
    })
  );
});

/** At Service Worker Activation, Delete previous caches, if any */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith(appName) &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

/** Hijack fetch requests and respond accordingly */
self.addEventListener('fetch', function(event) {

  // Default behavior: respond with cached elements, if any, falling back to network.
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});