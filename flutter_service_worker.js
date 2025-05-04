'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "076137651e7bed658297b046e18c9ef2",
"version.json": "d69f16f4fd4b3ce23e2b95e35d74a5be",
"index.html": "c9639cf7494f74b1ae884a94ddc122ff",
"/": "c9639cf7494f74b1ae884a94ddc122ff",
"main.dart.js": "98e484310e9ea2a84990550047c5c39d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "02214828cc400d1b20e6191c8e46a87b",
".git/ORIG_HEAD": "4fbe0f394b410708898cbfa677390581",
".git/config": "7e4d9bc2080786b7aca443f30e73bb96",
".git/objects/0c/716b602456347255409f17052442f3eb300d72": "471ce3f5e6f8d84c9cd9106a423d4a23",
".git/objects/0c/1eed735a9a8e6ffd60b4a677293972ce59db13": "de4419bf838ea4f806375b83544dc4a8",
".git/objects/3e/57b5451caa5c1bf77f1b3442a210b89d7a4d8f": "fa8afed685279848de8cd3afa78f8142",
".git/objects/6f/08e1512b7882dc53ee35154ce2d60cabe46f6d": "1b6ca85d9c720f5f895fcbfcde620ab5",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/03/bec4d632a7f15ede7ffaba05ae08f34cb1530a": "d4db1c12dc3e3552f611e299cf9c55ee",
".git/objects/9b/a14cbede81dfc153b44037d3addf9b34afa49a": "b3bcb068987d97e2a3b82f0e455df216",
".git/objects/69/84dc7b97b4c9a6674c83b32c8a3a439929c895": "02e7f80db5f8fb308efcaaacc04bf1a7",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/33/ae716cefaf1508bf155c4a16d2d9d88351d40b": "1534f9be3e5f7cc230a2a07030e70488",
".git/objects/a4/712b16769c044605bbc51a8dd4a90e4b3500e4": "0360bc9edd696243e93306cf8adad680",
".git/objects/a4/2d8759e0b48b22b5be9d73f043883e642ffdec": "ce0279fcf106a210235598ee70f27479",
".git/objects/be/50c59750cdfb5ee0ab554b8c6057dc7a9bed86": "57c4372274c8ae1d96f04e9f7c5afb0d",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/f4/d91c3b92f6ad8e5d1be2e3eca602ba8342d39b": "9a6b195fd53342ad12dff02023918f60",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/f7453233e051691e7efec2bdf1ccc6a1108f2e": "26163bbb5b12f905d1b722f4ef831193",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/55c7f53569a15470a731b96413db05a540b902": "d93924d59399435493e2efb55c7238fa",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/7c/45457b315e1d35760ab47af9bddd783ae6a8b5": "1f9ebcdc58eecd37005d2d13b76abfb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/1e72df98a22d8a094f1c0337f6afa79c00c4e0": "74d19aee1011eba9a83b61e8d4a70a12",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/1a/604d19ec4ac6c27480341f581bc68a462e02f0": "36dde9b06ba31e115eb7888c2aeaaecf",
".git/objects/8f/7243941f3c9d6955feec4b9c31c773a00eab4d": "73490f03024ecb4e8c0180fbd172dbc0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/da815bc44e32f1f8d1ab05c284e9d9eeef9257": "8aeab6dc1e6082a57dd0115a0756e91b",
".git/objects/4d/37d548fa57a371343c68598afaa546326fd987": "574c1aa2c32613ab5edd61762c18a354",
".git/objects/44/a9b6d8ba3c1c34b3f40ba30a5abf0ae88bc870": "ed9ed52ee137ba8b1479cb20bbc4558f",
".git/objects/43/d2f727f241f26400900196da4b045e17e5d00f": "5f2c06fadca7cd18b4fa0cbaad142021",
".git/objects/88/92dc8e94a7975fea8e981809f28ddaf7af287a": "5d050d8b0263f7433686e75f266b1962",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/e74d8bf8d148193a6fc00063d7d8ccbb0ce410": "d7a7cade997083855c6bc5e2a2e96f78",
".git/objects/9a/c1fc8f29d59b43a39ea431d352a998e454e80b": "27bb816198b41e6b59ce5fa4e2652bc7",
".git/objects/09/71518b2d645c57003de9df9725c8fe5ae1bd35": "c92cd96245d1417f53628c9c1ed829c6",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/cf746fd2db03c2a67edb11632f48d7529a3e50": "a9cead4209f58f4daf6cb45c6e4f545a",
".git/objects/06/dc3d5f797cd0a4ee4428138a185580d5556758": "b01d0c88e62838f0416aa9070f415845",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/bf/116994f6797e92b832ee02266b029213d7e4e0": "3df2e7f98ea41ab4db949d57e72c2229",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/328e2e9889925feb0dd4c0656b5807d65549f3": "8df075a4dd9377fbfae9b6c17c089919",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/28a9ea1f589393647a8ddebf5ce417ec46f378": "05e789a3db17f726ff9a35b391b7f7ba",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/a6/4fa690a8167315d4f95afd231f2d7f20bed536": "46b6cd4672fe7f8c1e8e1b542169a5f7",
".git/objects/ef/3c24ec48f6397e8d2b2684265c6eeac987ad31": "730183f653b92e0a08550e1c633bd743",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f9/aabf0352b54675835b41f75fde9226536cb9ec": "65d0628543778b763e9fe8c4d6985291",
".git/objects/f8/1308ab8abdc4169019c200d56fd13ae44b0301": "d7145947db39eb92e83699a703c49d02",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/e0/fe41b2bb4ea8c2c245564e210893293b9c7c60": "2c601ea0026757f6f073cd9fdbf265bd",
".git/objects/46/7fd47004f676c98f8e1d92ff843c7ae267b723": "2c1815cccadf81142a9b39263b5eece5",
".git/objects/79/64001697e4b8a370bb85c7d8d3656a5004195b": "21e2355e5dd780e1d64af0e7dcf4de34",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/1e/bbe57e9ef22c9d722f893064405fd27697536b": "973e9a09deebba79b3118f71da2a4387",
".git/objects/24/8a447b4980cc456a6b12a95516769fa4128605": "b01b4cfb4dc0f50712263a4e53bb30cd",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/cfec7d1b98904786b0c9ae7b964b4c6c9dda17": "512a2bcfa9254313eb06eed1ebf1ad18",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/b3dc84be2f7e4c090f1c2d34dfad4a12e871fd": "f57a4429a2831420366487c6f493e81e",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/49/6b5547016b8bfc09972e7190a61f0821a4b42f": "4bfc36162d6837469c8cfcf39b85d6a4",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/22/48c587b894230796e9e358c43d9f46434c79de": "22ebfc849c5c6c41199efa9e6c8b64fa",
".git/objects/25/133944597524725281fe92b1d68b9116fbdb5b": "d6c54255c45df2d073c0f84d888d2eb5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "772c63e18718fc8b137da705222b980f",
".git/logs/refs/heads/main": "0fa67e427368d2e3a102aec02ec47302",
".git/logs/refs/remotes/origin/main": "83d5bf97d4c6fc542402c9d65b4f1704",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e0bdb45fb3b4388ab3e279b14ebb3a0a",
".git/refs/remotes/origin/main": "e0bdb45fb3b4388ab3e279b14ebb3a0a",
".git/index": "20f03c1b1dc132976ad1b6cf5a56af6a",
".git/COMMIT_EDITMSG": "43de9a55dac40191e2fcf87a4e637b1c",
".git/FETCH_HEAD": "fb38db9542eaab5772b67f1ca21a5002",
"assets/AssetManifest.json": "304044c48c89a9420e80a227d0e9a984",
"assets/NOTICES": "57a761b8bb884ab5c504c991a436653a",
"assets/FontManifest.json": "164d9692d99edf41a54d8ab156a9dcc7",
"assets/AssetManifest.bin.json": "06e5137b233618aff324d3dcfa2ae8d4",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "440d97de1487d5eee36d842d6b7ffcdb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2efcdbdd331eacabf760c7e70dcdb758",
"assets/fonts/MaterialIcons-Regular.otf": "dfeda23ac029da5aaed85a065da2888c",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/DFS2.png": "05ee22cef83710c50a3c534efa143467",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/logo.png": "3a002699777f48d4fd454b6a88b25922",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Mulish-LightItalic.ttf": "a5f011249bc8904a1696d7bea4940543",
"assets/assets/fonts/Mulish-ExtraBoldItalic.ttf": "fa928cf071fb1afc39aee8ea64cb7905",
"assets/assets/fonts/Mulish-Italic.ttf": "1936c9c15bd37eb6019c0e46f8cf867b",
"assets/assets/fonts/Mulish-Regular.ttf": "5416a925ffafb775c6bffd116d87deb0",
"assets/assets/fonts/Mulish-Black.ttf": "5e373d52c280283cb9aa3917ae0c40e2",
"assets/assets/fonts/Mulish-BlackItalic.ttf": "e23959a8d3a4c8916f258299a52192af",
"assets/assets/fonts/Mulish-SemiBoldItalic.ttf": "0a888514cc9e0946c4bb3b0103f9287e",
"assets/assets/fonts/Mulish-ExtraLightItalic.ttf": "b729ccfc6838570d929a06a8ae41c6c5",
"assets/assets/fonts/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Mulish-Light.ttf": "a12ad93579e2da6f8cecb2e89f413a4c",
"assets/assets/fonts/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/assets/fonts/Mulish-ExtraLight.ttf": "c07e2efe99c3f232b9011aac63b0389b",
"assets/assets/fonts/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/assets/fonts/Mulish-MediumItalic.ttf": "a2826d91ba780aa9de5181e13d7b847a",
"assets/assets/fonts/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/assets/fonts/Mulish-BoldItalic.ttf": "3e40b1e17a4fe836e71d293c32c2fc06",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
