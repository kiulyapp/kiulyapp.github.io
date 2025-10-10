const CACHE_NAME = 'kiuly-v1.1.0';
const STATIC_CACHE = 'kiuly-static-v1.1.0';
const DYNAMIC_CACHE = 'kiuly-dynamic-v1.1.0';

const urlsToCache = [
  '/',
  '/index.html',
  '/icon.png',
  '/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
  '/manifest.json',
  '/sw.js'
];

const criticalResources = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap'
];

// Install event - cache critical resources only
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('KIULY Service Worker: Caching critical files');
        return Promise.all([
          cache.addAll(urlsToCache),
          caches.open(DYNAMIC_CACHE).then(cache => cache.addAll(criticalResources))
        ]);
      })
      .catch(error => {
        console.log('KIULY Service Worker: Cache failed', error);
      })
  );
  self.skipWaiting();
});

// Fetch event - optimized caching strategy
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        // Network first for critical resources
        if (criticalResources.includes(event.request.url)) {
          return fetch(event.request).then(fetchResponse => {
            const responseClone = fetchResponse.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(event.request, responseClone);
            });
            return fetchResponse;
          }).catch(() => {
            return new Response('Offline', { status: 503 });
          });
        }
        
        // Cache first for other resources
        return fetch(event.request).then(fetchResponse => {
          if (!fetchResponse || fetchResponse.status !== 200) {
            return fetchResponse;
          }
          
          const responseClone = fetchResponse.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
          
          return fetchResponse;
        }).catch(error => {
          console.log('KIULY Service Worker: Fetch failed', error);
          if (event.request.mode === 'navigate') {
            return caches.match('/404.html');
          }
        });
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
