// Not the Salad!: small service worker so Android (Chrome and Samsung Internet) treat the game as an installable app.
// It caches nothing (Google map tiles must not be cached under Google's terms). It only answers page loads,
// so an installed app opened with no internet shows a friendly note instead of an error.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#1b1b1f;color:#f4e9dc;font:18px system-ui;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:24px"><div><b>Not the Salad!</b><br><br>You need the internet to drive to Yiayia\'s.<br>Connect to Wi-Fi and open the app again.</div>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
