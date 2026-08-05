// Service worker del Gestor de Taller (versión móvil / PWA).
//
// Estrategia deliberadamente conservadora:
//  · Solo se cachea el "esqueleto" de la aplicación (HTML, JS, CSS, iconos).
//  · NUNCA se cachean las llamadas a Supabase: los datos del taller tienen que
//    ser siempre los de verdad, nunca una copia vieja.
//  · Si no hay red, se sirve el esqueleto desde caché para que la app arranque
//    y pueda mostrar su propio mensaje de "sin conexión".
const CACHE = "taller-shell-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"])
        .catch(() => undefined),
    ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Datos en vivo: siempre a la red, jamás desde caché.
  if (url.hostname.endsWith("supabase.co")) return;

  // Navegación: red primero (para recibir versiones nuevas), caché de reserva.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => undefined);
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r ?? Response.error())),
    );
    return;
  }

  // Recursos propios: caché primero (llevan hash en el nombre, no caducan).
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((hit) =>
        hit ??
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => undefined);
          }
          return res;
        }),
      ),
    );
  }
});
