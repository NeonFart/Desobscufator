// Service Worker minimal pour activer l'installation PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Nécessaire pour l'installation, même vide
});
