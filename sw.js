// En minimal Service Worker för YeastMaster
self.addEventListener('install', (event) => {
  console.log('YeastMaster Service Worker installerad!');
});

self.addEventListener('fetch', (event) => {
  // Här kan vi lägga till offline-stöd senare om vi vill,
  // men just nu låter vi den bara skicka vidare anropen.
  event.respondWith(fetch(event.request));
});

// --- NYTT: Lyssna efter Push-notiser från molnet ---
self.addEventListener('push', (event) => {
    // Om servern skickar data, läs in den. Annars använd standardtext.
    const data = event.data ? event.data.json() : {};
    
    const title = data.title || 'YeastMaster Larm';
    const options = {
        body: data.body || 'Något kräver din uppmärksamhet i bryggeriet.',
        icon: '/icon-192x192.png', // Sökvägen till din app-ikon
        badge: '/badge.png',       // En liten enfärgad ikon för Androids statusrad (valfritt)
        vibrate: [200, 100, 200, 100, 200, 100, 200], // Skapar ett distinkt surrande larm!
        data: {
            url: data.url || '/' // Vart användaren ska skickas om de klickar
        }
    };

    // Tvinga Service Workern att hålla sig vaken tills notisen är visad
    event.waitUntil(self.registration.showNotification(title, options));
});

// --- NYTT: Vad händer när användaren klickar på notisen? ---
self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Stäng själva notisen
    
    // Öppna appen och gå till rätt URL (t.ex. direkt till Dashboarden)
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});