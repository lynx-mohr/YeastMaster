// En minimal Service Worker för YeastMaster
self.addEventListener('install', (event) => {
  console.log('YeastMaster Service Worker installerad!');
  self.skipWaiting(); // Aktivera nya versionen direkt istället för att vänta
});

self.addEventListener('activate', (event) => {
  // Ta kontroll över öppna flikar direkt så den gamla (trasiga) workern släpper taget
  event.waitUntil(self.clients.claim());
});

// OBS: Ingen 'fetch'-handler.
// Tidigare fanns event.respondWith(fetch(event.request)) här — en ren genomsläppning
// som inte gjorde någon nytta men som dirigerade ALLA resurser (skript, typsnitt,
// reCAPTCHA) genom service workern. Då styrdes de av CSP:ns connect-src istället för
// sina rätta direktiv, vilket blockerade bl.a. Firebase Auths reCAPTCHA (www.google.com)
// → auth/internal-error vid inloggning. Utan handlern hanterar webbläsaren anropen
// nativt och allt fungerar som innan service workern fanns.

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