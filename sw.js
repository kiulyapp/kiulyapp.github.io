const CACHE_NAME = 'kiuly-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/magazin.html',
  '/faq.html',
  '/impressum.html',
  '/datenschutz.html',
  '/nutzungsbedingungen.html',
  '/icon.png',
  '/kiuly-logo.png',
  '/app-store-logo.png',
  '/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
  '/sitemap.xml',
  '/robots.txt',
  '/manifest.json',
  '/browserconfig.xml',
  '/404.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/aos@2.3.4/dist/aos.css',
  'https://unpkg.com/aos@2.3.4/dist/aos.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap',
  'https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('KIULY Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log('KIULY Service Worker: Cache failed', error);
      })
  );
});

// Fetch event - serve from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(error => {
        console.log('KIULY Service Worker: Fetch failed', error);
        // Return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/404.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('KIULY Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'kiuly-sync') {
    console.log('KIULY Service Worker: Background sync');
  }
});

// Push notification support (for future use)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'KIULY Update verfügbar',
    icon: '/icon.png',
    badge: '/icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Jetzt öffnen',
        icon: '/icon.png'
      },
      {
        action: 'close',
        title: 'Schließen',
        icon: '/icon.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('KIULY', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
