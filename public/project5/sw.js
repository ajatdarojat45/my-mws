const NAMACACHE = 'mws-v1';
const filesToCache = [
  '.',
  '../css/mystyle.css',
  '../data/peta.json',
  '../images/ajat.jpg',
  '../images/blank.png',
  '../images/calculator.png',
  '../images/home.png',
  '../images/json.png',
  '../images/maps_detail.png',
  '../images/maps.png',
  '../images/menu.png',
  '../project1/css/mystyle.css',
  '../project1/add2number.js',
  '../project1/index.html',
  '../project2/css/mystyle.css',
  '../project2/js/map.js',
  '../project2/index.html',
  '../project3/css/mystyle.css',
  '../project3/css/peta.css',
  '../project3/images/cibinong.jpg',
  '../project3/images/ciseeng.jpg',
  '../project3/images/pamulang.jpg',
  '../project3/images/parung.jpg',
  '../project3/images/rumpin.jpg',
  '../project3/js/maps.js',
  '../project3/index.html',
  '../project4/css/mystyle.css',
  '../project4/css/peta.css',
  '../project4/images/cibinong.jpg',
  '../project4/images/ciseeng.jpg',
  '../project4/images/pamulang.jpg',
  '../project4/images/parung.jpg',
  '../project4/images/rumpin.jpg',
  '../project4/js/maps.js',
  '../project4/index.html',
  '../project5/index.html',
  '../project5/sw.js',
  'index.html',
  '404.html',
];
self.addEventListener('install', event => {
  console.log('Persiapan Cache');
  event.waitUntil(
    caches.open(NAMACACHE)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(ada_response => {
      if (ada_response) {
        return ada_response;
      }
      // tidak ada response, ambil ke jaringan
      else {
        return fetch(event.request)
      }
    })
    .catch(error => {
      return new Response("Waduh " + error);
    })
  );
});
