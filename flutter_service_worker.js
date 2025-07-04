'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"drift_worker.js": "ae1f716f0e8e90b0a566f82c6ffa3bc2",
"flutter_bootstrap.js": "812283ba068f6eac90c9ad07a708eaa8",
"README.md": "fe5f1d85926bc02351c962346d3ee2d5",
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
"main.dart.js": "6a94838e21146034d9151cbd5c3b2c9c",
"index.html": "a539a39491265c4d0a507f9fa0b21649",
"/": "a539a39491265c4d0a507f9fa0b21649",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/objects/e3/2fe1484e8d05827a90de0b273b4b9b7a9b3cd2": "7ebc2b34e2bf6a889049275486978388",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/07/1de190a7b5c14a065a3d8c4f3412a66827b954": "8d100893914f2bfae22b02aedc41a79f",
".git/objects/07/6a027c9fb7cfeb6c8b63b2a9388504935d6c27": "1f502fba0b249fbce25b3965368cccff",
".git/objects/3d/85cc6d13d0b40e4b73c2e2a2b7243d13948756": "1353f7932bfb7ea98a53cba99800d33a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/f8/13117f566e78d54f8f3280533e80218143b845": "3bdb964f143c4b8a34d9ded155dac8c2",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/ed/0e94c0e850aa5e44b35915fda1e1d96d09a9b5": "7cbfc104de41c0067a6779e12e7f0a31",
".git/objects/94/859f915b74e48afeadd1b40e0b3f80fb3b56b2": "9ee09ec434e2a60a9fb34385e5d95ea2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d2c650bc0341266a8404609be5427e6937d348": "fb1fd1ba79e38a71d767c8bece7ce0d3",
".git/objects/da/42b4fbe8c555b8abf18416efc83d06f87c411a": "3b5cc09132ed89e847f98bdb5aa84f7e",
".git/objects/cf/1087a374ed0efed1accf8e9d0bb8586865e5bb": "68fcb0a702700a14f5269bff5cd665bd",
".git/objects/93/212c90e2a9ab3ef30c5ef203851cf8c56ec6e3": "9356e1d4d5b41f779ab3c5d0ced00263",
".git/objects/93/48cae8139790582c12c77e299b82938b02102a": "600fb3de0e203809a92bf664d6f4fb1b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/6c127e98906baae1465426feaffc5185a5e85f": "e22b2c4826df43f6ea7a485b8d71018d",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/d0/cba2cfb10c4fc4363453e21e8a85033f803b42": "bca223bacbeee5bd4e47abed31dcf129",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/0e/4b7853691cf57894606212589a92bcaa7aecce": "46c5c23bc6c1c9eb39b3b20086e6931d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/475776e69fdcfe23f7533d9b5902d43f515141": "4a65b2a77eb5d90b7d45ef07460ccda9",
".git/objects/15/416e5b546193426a79c2f7127fd5565c049cbc": "6c2ae906d31e2a94d2d08917e042ec13",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/58/129ce5ee0e8786adb3eb9e6863d873bf23df35": "ce0f9e79c007b8c3ea8e7eb0307692e4",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/c5/c92400eae91dee6dd616af1d331a265f192a8b": "92aea022d76a52be46437de7e63d5b78",
".git/objects/fd/f0c6bd0029a5a0f7b19b32b5f7b11713eff642": "388b3bbb48988446e241c927db2cd922",
".git/objects/f3/715a8e57977fe97d0a014b15ae9f04681593d8": "9dcc7899968ecc970f7c36e4e3d76be3",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/d3/2cca838ab320b6809cd5146e39747e0d7d6345": "f1eba3705c25dc359a38454b010e0c93",
".git/objects/e1/1db3b262d569aeafa4b07ebc28ae1fa023bcbe": "0623b206c0960c84b402ef537dd4d4c6",
".git/objects/fb/022f4377c1dfeff4cc6a51ad663a54eb03a669": "eac2c74774e807d4402ab4b28a42b349",
".git/objects/26/33bee3a40017851f777b697016f1c3d2369f0e": "a7b21ba21ff7755d43d48eae89da655a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/6cbe0bcd06b9ae795575f8ec12453ff778d0a8": "67b71a76d0e40d87c242e2a0246cfe7d",
".git/objects/50/6f7870b079b32002e13c0849e6119d8a297170": "0f272b742e71345af71f48196719a573",
".git/objects/62/4a13140c9e87683540bd1f52f26995745d3400": "e9e2167dee6b10800bd7fb277c187e10",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/a0/55ed33aed1f975d2d93b0e36e26c44de4ee294": "4445059faee86ffb43179bae0dba0176",
".git/objects/e9/28b09fe94f502ddc4a0efba3311e3b0030a429": "76d3b6631646d390cc0021910bfefc04",
".git/objects/ee/0a9ea964fc5bae7da8cb0f774717c45a00ca29": "a4dfced62c439713917bcb1be3b1b3a3",
".git/objects/8e/070021af0120edd8c80d2a4d38b9c1b096d51d": "50ece1992455c616af107a1918d3e3e0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/3e/1e8df135d8594acff91ce15fe49651406814cf": "7939dd67300012fa595ef27671a1c4bb",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/b0/0c915a301c8891835721cd7292ff3a21a14462": "15f4d89157582971fb53d610919b9d10",
".git/objects/b0/865e32b047f6a5ec01773c23704115537449e5": "39bbea13717317a6e12aebddfafd1b09",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fc/7a70ed617aa55847891828f25739f1e3f38ec9": "4aea1168417d07250b287b63358f3d2e",
".git/objects/cd/240aa0f8a453d7c08adfc515360d4ab21b5552": "312ac452226260a5a407bbda5a789c64",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/59/00cdb901de8ec21b580869c01c70d32e764dae": "498630bca95d427f12739acd32c22b3c",
".git/objects/01/c9e7fc125c5d51aa568d491e493a2c0bdd5064": "f9b4fa3bc5462dd60053e6656cfcf6b5",
".git/objects/a7/09d2a31d0023d059577c63875efb45c7726cf4": "b3d478c2d3ff20a4fbfea9887e959244",
".git/objects/af/069f3b68b206c9d35cd6112147ac3adb808525": "04d393127eed3f03077adbfe1992a1aa",
".git/objects/55/dbdd99391e52b5355afc6fc50ad2867ddf821b": "5b92f3dea5770f14fa44773e23a2fda0",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/2c/263cef2025905e1b21422bbcf4946c71f61208": "e9b07071bb11428716d58ddbaa707b55",
".git/objects/05/934a2f98fd163126bfdb7c855cedb30e3f2a77": "e4000a63bbdb02bf6d1249dadb04589a",
".git/objects/1e/360141afcf236adeaa5e93de66fc51712b6fdd": "7131930e53695e5118591d08c5079fd9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/4b/578e8b684d1dd0b4095876815811cddfa3084d": "424ae29c8d5fc0c3dbe7dda348010ad5",
".git/objects/4b/c5b942cf11e2578a60716c140877a1fb26158b": "3a7ccd7c39c721049ad13756f75afa8f",
".git/objects/92/ad9c8e1199dcebd8176a9860c4ade690f18752": "c1d8f53b44d339b87fda4dd67dc92a78",
".git/objects/4d/60cecc4f32831c29d0417634fda1239a3aee3d": "3cc35faeed70806921178510748ebc24",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/47aaad4a7587cbc5d8e952438bcb88dedac672": "9fc7a98eaf0a101f080d0fb71f91dc58",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/25/afd4acd08fb8abbb954e2290b0c938e5819e2e": "c5e3396db8112190b5241f7e6df9b722",
".git/objects/d8/1ab2e4323273a6386b252361a5d3ad84928caf": "22547817f012c1c2f746b6405ea77f57",
".git/objects/b1/177f2497c1a3f7a6f100d6608c36fbbca96db4": "e4300c7f53bcce2fda7fed31429a9cb5",
".git/objects/a3/9bcf6ebff5ae06eecdc9e767001615a78218ff": "e661597c5f1dd3a29c4f98f827ccff53",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/69/14509206cb2611396b9c7300a1d452bcf88c79": "1fd76745e163c3edfa201f097abbacea",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/0b/771272ed91828540d9bef5eae127c9492a14c3": "258e3b3bc956836acc4ddfac378c5811",
".git/objects/a9/e307eefd7af115d94c14d2619b3a8ab442a18e": "3c0624558756247316a870dba1c57387",
".git/objects/71/7d11c9896bdc85fb0f4506d7ed7e997493db6a": "b551935fa6a5bebada3e7931d0b382c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/COMMIT_EDITMSG": "0e582d869f3d2a53e6284144dcaa9a68",
".git/config": "3dbffcfa83438229235d4abdb0a02e60",
".git/refs/remotes/origin/main": "a725320f48abd9f9dff30b89fafa4b03",
".git/refs/heads/main": "a725320f48abd9f9dff30b89fafa4b03",
".git/logs/refs/remotes/origin/main": "25462e9fb02596f48e21a63127f25bff",
".git/logs/refs/heads/main": "0d4f7cc107f08146ee9151655b1148f4",
".git/logs/HEAD": "2be60c49ca2fef18ce15cee82d9bf46d",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/index": "be44f684e2e62cb7f89d892e8aca053f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
