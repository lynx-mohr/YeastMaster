// En minimal Service Worker för YeastMaster
self.addEventListener('install', (event) => {
  console.log('YeastMaster Service Worker installerad!');
});

self.addEventListener('fetch', (event) => {
  // Här kan vi lägga till offline-stöd senare om vi vill,
  // men just nu låter vi den bara skicka vidare anropen.
  event.respondWith(fetch(event.request));
});