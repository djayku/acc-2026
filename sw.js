const CACHE = 'tokyo-acc-v3';
const ASSETS = [
  './',
  './app.html',
  './app.js',
  './venues.json',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './wpue_hotel.jpg',
  './opera_city.jpg',
  './tokyo_skyline.jpg',
  './sushi.jpg',
  './hero/hero_cover.jpg',
  './hero/wpue_lobby.jpg',
  './hero/opera_city_meeting.jpg',
  './hero/nex_platform.jpg',
  './hero/golden_gai_night.jpg',
  './hero/shinjuku_garden.jpg',
  './hero/ramen_counter.jpg',
  './hero/yakiniku_grill.jpg',
  './hero/cabin_dawn.jpg',
  './hero/japan_passport.jpg',
  './hero/omiyage_box.jpg',
  './hero/business_card.jpg',
  './hero/transit_card.jpg',
  './hero/skyline_night.jpg',
  './hero/sushi_detail.jpg',
  './hero/tea_set.jpg',
  './hero/matcha_workshop.jpg',
  './hero/bullet_train.jpg',
  './hero/departure_board.jpg',

];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return resp;
    }).catch(() => cached))
  );
});
