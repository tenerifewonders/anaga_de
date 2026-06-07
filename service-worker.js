const CACHE_NAME = "anaga-de-v10";

const ASSETS = [
  "./",
  "./index.html",
  "./ANAGA.geojson",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./DE-ANAGA.html",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

// OJO: Actualizados a los nuevos enlaces .mp3 que me pasaste antes
const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.8.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/anaga_de/Anaga.9.mp3"
];

// Tu lista de mapas mantenida intacta
const TILES = [
  "./tiles/11/927/853.png",
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/853.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/853.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/853.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/853.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/853.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1854/1706.png",
  "./tiles/12/1854/1707.png",
  "./tiles/12/1854/1708.png",
  "./tiles/12/1854/1709.png",
  "./tiles/12/1854/1710.png",
  "./tiles/12/1854/1711.png",
  "./tiles/12/1854/1712.png",
  "./tiles/12/1854/1713.png",
  "./tiles/12/1854/1714.png",
  "./tiles/12/1854/1715.png",
  "./tiles/12/1854/1716.png",
  "./tiles/12/1855/1706.png",
  "./tiles/12/1855/1707.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1706.png",
  "./tiles/12/1856/1707.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1706.png",
  "./tiles/12/1857/1707.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1706.png",
  "./tiles/12/1858/1707.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1706.png",
  "./tiles/12/1859/1707.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1706.png",
  "./tiles/12/1860/1707.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1706.png",
  "./tiles/12/1861/1707.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1706.png",
  "./tiles/12/1862/1707.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1706.png",
  "./tiles/12/1863/1707.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1706.png",
  "./tiles/12/1864/1707.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/12/1865/1706.png",
  "./tiles/12/1865/1707.png",
  "./tiles/12/1865/1708.png",
  "./tiles/12/1865/1709.png",
  "./tiles/12/1865/1710.png",
  "./tiles/12/1865/1711.png",
  "./tiles/12/1865/1712.png",
  "./tiles/12/1865/1713.png",
  "./tiles/12/1865/1714.png",
  "./tiles/12/1865/1715.png",
  "./tiles/12/1865/1716.png",
  "./tiles/13/3723/3416.png",
  "./tiles/13/3723/3417.png",
  "./tiles/13/3723/3418.png",
  "./tiles/13/3723/3419.png",
  "./tiles/13/3723/3420.png",
  "./tiles/13/3724/3416.png",
  "./tiles/13/3724/3417.png",
  "./tiles/13/3724/3418.png",
  "./tiles/13/3724/3419.png",
  "./tiles/13/3724/3420.png",
  "./tiles/13/3725/3416.png",
  "./tiles/13/3725/3417.png",
  "./tiles/13/3725/3418.png",
  "./tiles/13/3725/3419.png",
  "./tiles/13/3725/3420.png",
  "./tiles/13/3726/3416.png",
  "./tiles/13/3726/3417.png",
  "./tiles/13/3726/3418.png",
  "./tiles/13/3726/3419.png",
  "./tiles/13/3726/3420.png",
  "./tiles/13/3727/3416.png",
  "./tiles/13/3727/3417.png",
  "./tiles/13/3727/3418.png",
  "./tiles/13/3727/3419.png",
  "./tiles/13/3727/3420.png",
  "./tiles/13/3728/3416.png",
  "./tiles/13/3728/3417.png",
  "./tiles/13/3728/3418.png",
  "./tiles/13/3728/3419.png",
  "./tiles/13/3728/3420.png",
  "./tiles/14/7447/6832.png",
  "./tiles/14/7447/6833.png",
  "./tiles/14/7447/6834.png",
  "./tiles/14/7447/6835.png",
  "./tiles/14/7447/6836.png",
  "./tiles/14/7447/6837.png",
  "./tiles/14/7447/6838.png",
  "./tiles/14/7447/6839.png",
  "./tiles/14/7447/6840.png",
  "./tiles/14/7448/6832.png",
  "./tiles/14/7448/6833.png",
  "./tiles/14/7448/6834.png",
  "./tiles/14/7448/6835.png",
  "./tiles/14/7448/6836.png",
  "./tiles/14/7448/6837.png",
  "./tiles/14/7448/6838.png",
  "./tiles/14/7448/6839.png",
  "./tiles/14/7448/6840.png",
  "./tiles/14/7449/6832.png",
  "./tiles/14/7449/6833.png",
  "./tiles/14/7449/6834.png",
  "./tiles/14/7449/6835.png",
  "./tiles/14/7449/6836.png",
  "./tiles/14/7449/6837.png",
  "./tiles/14/7449/6838.png",
  "./tiles/14/7449/6839.png",
  "./tiles/14/7449/6840.png",
  "./tiles/14/7450/6832.png",
  "./tiles/14/7450/6833.png",
  "./tiles/14/7450/6834.png",
  "./tiles/14/7450/6835.png",
  "./tiles/14/7450/6836.png",
  "./tiles/14/7450/6837.png",
  "./tiles/14/7450/6838.png",
  "./tiles/14/7450/6839.png",
  "./tiles/14/7450/6840.png",
  "./tiles/14/7451/6832.png",
  "./tiles/14/7451/6833.png",
  "./tiles/14/7451/6834.png",
  "./tiles/14/7451/6835.png",
  "./tiles/14/7451/6836.png",
  "./tiles/14/7451/6837.png",
  "./tiles/14/7451/6838.png",
  "./tiles/14/7451/6839.png",
  "./tiles/14/7451/6840.png",
  "./tiles/14/7452/6832.png",
  "./tiles/14/7452/6833.png",
  "./tiles/14/7452/6834.png",
  "./tiles/14/7452/6835.png",
  "./tiles/14/7452/6836.png",
  "./tiles/14/7452/6837.png",
  "./tiles/14/7452/6838.png",
  "./tiles/14/7452/6839.png",
  "./tiles/14/7452/6840.png",
  "./tiles/14/7453/6832.png",
  "./tiles/14/7453/6833.png",
  "./tiles/14/7453/6834.png",
  "./tiles/14/7453/6835.png",
  "./tiles/14/7453/6836.png",
  "./tiles/14/7453/6837.png",
  "./tiles/14/7453/6838.png",
  "./tiles/14/7453/6839.png",
  "./tiles/14/7453/6840.png",
  "./tiles/14/7454/6832.png",
  "./tiles/14/7454/6833.png",
  "./tiles/14/7454/6834.png",
  "./tiles/14/7454/6835.png",
  "./tiles/14/7454/6836.png",
  "./tiles/14/7454/6837.png",
  "./tiles/14/7454/6838.png",
  "./tiles/14/7454/6839.png",
  "./tiles/14/7454/6840.png",
  "./tiles/14/7455/6832.png",
  "./tiles/14/7455/6833.png",
  "./tiles/14/7455/6834.png",
  "./tiles/14/7455/6835.png",
  "./tiles/14/7455/6836.png",
  "./tiles/14/7455/6837.png",
  "./tiles/14/7455/6838.png",
  "./tiles/14/7455/6839.png",
  "./tiles/14/7455/6840.png",
  "./tiles/14/7456/6832.png",
  "./tiles/14/7456/6833.png",
  "./tiles/14/7456/6834.png",
  "./tiles/14/7456/6835.png",
  "./tiles/14/7456/6836.png",
  "./tiles/14/7456/6837.png",
  "./tiles/14/7456/6838.png",
  "./tiles/14/7456/6839.png",
  "./tiles/14/7456/6840.png"
];

// Helper para cachear de forma tolerante a fallos individuales
async function cacheListTolerantly(cache, list) {
  for (const url of list) {
    try {
      await cache.add(url);
    } catch (err) {
      console.warn("Fallo al pre-cachear el recurso:", url, err);
    }
  }
}

// Instalar SW y cachear archivos base
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // 1) Cargar los archivos críticos.
      await cache.addAll(ASSETS);
      // 2) Cachear audios y mapas tolerando fallos.
      cacheListTolerantly(cache, AUDIO_URLS);
      cacheListTolerantly(cache, TILES);
    })
  );
  self.skipWaiting();
});

// Activar SW y limpiar versiones antiguas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Helper para Range Requests de Audios .mp3 (iOS Streaming)
async function handleRangeRequest(request, rangeHeader) {
  const cachedResponse = await caches.match(request.url);
  
  if (!cachedResponse) {
    const cleanRequest = new Request(request.url);
    fetch(cleanRequest).then(networkResponse => {
      if (networkResponse.status === 200) {
        caches.open(CACHE_NAME).then(cache => cache.put(request.url, networkResponse));
      }
    }).catch(err => console.warn("Fallo al descargar audio en background:", err));

    return fetch(request);
  }

  const arrayBuffer = await cachedResponse.arrayBuffer();
  const totalSize = arrayBuffer.byteLength;

  const bytes = /^bytes=(\d+)-(\d+)?$/.exec(rangeHeader);
  if (!bytes) {
    return cachedResponse;
  }

  const start = Number(bytes[1]);
  const end = bytes[2] ? Number(bytes[2]) : totalSize - 1;
  const chunk = arrayBuffer.slice(start, end + 1);

  return new Response(chunk, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Range': `bytes ${start}-${end}/${totalSize}`,
      'Content-Length': chunk.byteLength.toString(),
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/mpeg',
      'Accept-Ranges': 'bytes'
    }
  });
}

// Fetch Interceptor
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  
  if (event.request.method !== 'GET' || (url.protocol !== 'http:' && url.protocol !== 'https:')) {
    return;
  }

  const rangeHeader = event.request.headers.get('range');

  // 1) Peticiones de audio (Acepta tanto .wav como los nuevos .mp3)
  if (url.href.includes("supabase.co/storage") || url.pathname.endsWith(".mp3") || url.pathname.endsWith(".wav")) {
    if (rangeHeader) {
      event.respondWith(handleRangeRequest(event.request, rangeHeader));
    } else {
      event.respondWith(
        caches.match(event.request.url).then(cached => {
          return cached || fetch(event.request).then(response => {
            if (response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request.url, responseToCache));
            }
            return response;
          });
        })
      );
    }
    return;
  }

  // 2) Archivos JSON y de rutas (Estrategia: Network First, fallback a caché)
  if (url.pathname.endsWith(".json") || url.pathname.endsWith(".geojson")) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache =>
              cache.put(event.request, responseToCache)
            );
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 3) Imágenes de Mapas y el resto de archivos base (Estrategia: Cache First)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(networkResponse => {
        if (networkResponse.status === 200 || networkResponse.status === 0) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});