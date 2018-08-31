var cacheV = 'v1',
    all = [
        '/',
        '/manifest.json',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/css/leaflet.css',
        '/data/restaurants.json',
        'icon.jpg',
        '/img/',
        'img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/js/dbhelper.js',
        '/favicon.png',
        '/js/main.js',
        '/js/restaurant_info.js'
      ];
/*Here and further the code is adapted from the one at Service Worker Cookbook (https://serviceworke.rs/strategy-cache-and-update.html)*/

/*Installing a service worker*/

self.addEventListener('install', function (event) {
    event.waitUntil(install());
}); //cache resourses on install

/*END*/

/*Fetching data*/

self.addEventListener('fetch', function (event) {
    event.respondWith(serveCache(event.request)); //respond immediately without waiting ro the network to reach the service worker

    event.waitUntil(update(event.request)); // prevent the current service worker from being destroyed befor the cache is updated
});

/*END*/

function install() {
    return caches.open(cacheV).then(function (cache) {
        return cache.addAll(all);
    });
}

function serveCache(request) {
    return caches.open(cacheV).then(function (cache) {
        return cache.match(request).then(function (response) {
            return response || fetch(request);
        });
    });
}

function update(request) {
    return caches.open(cacheV).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}
