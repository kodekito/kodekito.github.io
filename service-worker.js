importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log("Workbox has been loaded!");

    workbox.loadModule('workbox-strategies');

    workbox.precaching.precacheAndRoute([
        {
            url: '/index.html', revision: '1'
        }
    ])

    self.addEventListener('fetch', (event) => {
        if (
            event.request.url.endsWith('.jpg')
            ||
            event.request.url.endsWith('.css')
            ||
            event.request.url.endsWith('.js')
        ) {
            const cacheFirst = new workbox.strategies.CacheFirst();
            event.respondWith(cacheFirst.handle({
                request: event.request
            }))
        }
    });

}else {
    console.log("Workbox didn't load");
}