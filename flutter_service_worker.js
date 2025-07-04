'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"drift_worker.js": "ae1f716f0e8e90b0a566f82c6ffa3bc2",
"flutter_bootstrap.js": "e4e802869214bec637a7f7d8f7e59b09",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"assets/NOTICES": "d4deba5fb113380940e4eca41df60293",
"assets/AssetManifest.bin.json": "98528fc14c83062e267ffa277dc76689",
"assets/assets/open-chest.png": "6505a5edf446ec4c43286714a1aeb2bc",
"assets/assets/tank-tread.png": "bf65295796c77d639f546111ebcbac78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/utils/assets/json/LedgerEntity.json": "ec83aca9042a9a66efceded60c46e300",
"assets/packages/utils/assets/images/07Januari2021-04_generated-Photoroom.png-Photoroom.png": "0557f5256accbe26bcba492257ff84f8",
"assets/packages/utils/assets/images/sign-in.png": "010caffd89b9007bb9cad7acb51d9dfe",
"assets/packages/utils/assets/images/user_avatar.png": "81633c53e16bc04f5c13c0d1020e39ff",
"assets/packages/utils/assets/images/empty.svg": "53f960b8a571d201772647edcaf4c01c",
"assets/packages/utils/assets/images/4207-Photoroom.png-Photoroom.png": "72e876a2166c483de014bb69a91a6a9b",
"assets/packages/utils/assets/images/sign-up.png": "424084a2fd9dfa591a5b7d81db0264fc",
"assets/packages/utils/assets/images/vecteezy_online-shopping-cart-with-smartphone_10682396-1-removebg-preview.png": "65ae7863a99710f67ec360e6f9821d9c",
"assets/packages/utils/assets/images/20946011-Photoroom.png-Photoroom.png": "d2b1d2b80b94c4b49133255546d3d523",
"assets/packages/utils/assets/images/4999653-removebg-preview.png": "33c79b29c9c4f98d33ce684efa15980d",
"assets/packages/utils/assets/logo/app-icon.png": "4e949e7884a1f0504f828445a039d484",
"assets/packages/utils/assets/logo/Bizak-mobile-logo-blue.png": "e82f26cc4a9f0b43abe88d4ad5ff1cca",
"assets/packages/utils/assets/logo/Bizak-mobile-logo-black.png": "53d355aad0aac0b65de0174a503ca799",
"assets/packages/utils/assets/logo/logo_blue.png": "40367c7c5cf35cd8979150e27beb111a",
"assets/packages/utils/assets/logo/khalti.png": "a42ef422dcf007fd10fd14dd3f4ef4e9",
"assets/packages/utils/assets/logo/title_dark.png": "8f018a09d83a3a7f65a1893dbbbed800",
"assets/packages/utils/assets/logo/logo_light.png": "5932658f970257264b69a4c7a98d59b0",
"assets/packages/utils/assets/logo/Bizak-mobile-logo-white.png": "b82a0620f5baeb8c3793eb463631a1fc",
"assets/packages/utils/assets/logo/title_light.png": "12f7109700adc14049426b93037226b4",
"assets/packages/utils/assets/logo/esewa.png": "1fd706b4b81ffd2b5e08338d6b94fa40",
"assets/packages/utils/assets/logo/logo_dark.png": "9ffebcaa09f0251a952cd21072b42694",
"assets/packages/utils/assets/logo/bizak-logo.png": "541e239a8e33d4eebc20fda97676673f",
"assets/packages/utils/assets/logo/bizak-logo-color.png": "31daf29de0e404e599a052fef9483cc4",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/fonts/MaterialIcons-Regular.otf": "d7363963bb1ab7b536c4009810f42586",
"assets/AssetManifest.json": "c29d1793309874da7fee7ecc289d85aa",
"assets/AssetManifest.bin": "02169d201beb51c0da25a88c418e3e9d",
"manifest.json": "db7bea6d0e185782ce8b8335196fd489",
"main.dart.js": "f37488c439b8a37bb4578ba9148bfb30",
"index.html": "a539a39491265c4d0a507f9fa0b21649",
"/": "a539a39491265c4d0a507f9fa0b21649",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "6a7edee948f67f06a99d8821daef3c6f",
"sqlite3.wasm": "19f93db1ac9fb159284ad0a80bfa86f8",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
