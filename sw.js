// Perth Run: minimal service worker so phones can install the game as an app. It caches nothing
// (Google map tiles must not be cached under Google's terms), so every play loads fresh.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
