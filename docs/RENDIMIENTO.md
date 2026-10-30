# Rendimiento

La experiencia en la página de destino influye en el costo por clic de Google Ads, así que se mide primero en el teléfono y empezando por las páginas de destino (ver [PAGINAS-DE-DESTINO.md](PAGINAS-DE-DESTINO.md)).

## Cómo medir

Lighthouse en el teléfono contra producción, con **dos métodos**:

- **Simulado** (el que usa PageSpeed Insights): carga la página rápido y calcula los tiempos con un modelo.
- **Limitación real** (`--throttling-method=devtools`): frena la red y la CPU de verdad, como un teléfono de gama media con 4G lento. Es el más estable para comparar un antes y un después.

Reglas:

- Al menos 3 corridas por página. Se mira la mediana y también el rango.
- Bloquear los envíos a Google para no ensuciar GA4, y dejar pasar `googletagmanager.com`: gtag.js es parte del costo real de la página. En el JSON, `network-requests` no tiene que traer ningún pedido a Google con estado 2xx.
- En Windows la CLI termina con un error `EPERM` al borrar su carpeta temporal. No importa: el JSON queda escrito.

```
npx lighthouse@12.8.2 https://mtstudio.dev/servicios/diseno-web --only-categories=performance --throttling-method=devtools --output=json --output-path=diseno-web.json --chrome-flags="--headless=new" --blocked-url-patterns="*google-analytics.com*" --blocked-url-patterns="*analytics.google.com*" --blocked-url-patterns="*.google.com/*" --blocked-url-patterns="*//google.com/*" --blocked-url-patterns="*.google.com.ar/*" --blocked-url-patterns="*doubleclick.net*" --blocked-url-patterns="*googleadservices.com*"
```

Sin `--throttling-method=devtools`, el mismo comando mide con el método simulado.

## Por qué PageSpeed da 80 o 97 en la misma página

En algunas corridas, Chrome demora el primer cuadro en el laboratorio. Cuando pasa, el primer pintado cae después de que gtag.js ya se descargó y se ejecutó, y el método simulado le suma sus 178 KB al LCP: da 4,2 s en vez de 2,2 s, y el puntaje baja de 95–97 a 80–82.

- En producción pasó en 11 de 15 corridas. Con example.com no pasó en ninguna de 10, y con el build local, que no tiene gtag, pasa pero no sube el LCP.
- No viene del JavaScript del sitio: durante la espera el hilo principal de la página está quieto. La causa exacta, dentro de Chrome, **no está determinada**.
- Probado sin efecto: sacar los desenfoques (`backdrop-filter`), las capas con `will-change` y la precarga de la fuente.

**No hay que perseguir el número de PageSpeed.** Para decidir, comparar con limitación real.

## Medición del 29/10/2026

Producción, teléfono, 3 corridas por página (mediana):

| Página | PageSpeed (rango) | PageSpeed a la mañana, antes del paso 4 | Limitación real: puntaje · LCP · TBT |
|---|---|---|---|
| Diseño web | 82 (81–95) | 74 | 84 · 2,5 s · 444 ms |
| Tiendas online | 96 (80–97) | 82 | 83 · 2,4 s · 439 ms |
| Home | 81 (80–87) | 79 | 84 · 2,7 s · 334 ms |
| Integración con ARCA | 82 (80–82) | 78 | 82 · 2,4 s · 422 ms |
| Contacto | 82 (81–82) | 93 | 86 · 2,3 s · 400 ms |

El 93 de /contacto a la mañana no era real: la página se servía en blanco hasta que cargaba el JavaScript, y Lighthouse medía el logo.

### Dónde se va el tiempo (diseño web, limitación real)

- **El HTML** llega a los 0,87 s.
- **El CSS** (8 KB comprimido) llega recién a los 1,69 s, porque comparte el ancho de banda con la fuente (47 KB) y el JavaScript precargado (unos 150 KB).
- **Estilos y diagramación iniciales:** una tarea de 0,68 s antes del primer pintado. Medida en una PC, la diagramación tarda 110–130 ms, y unos dos tercios salen de los íconos hechos con caracteres (✓ → ◎ ⚡ 🌐), que obligan a buscar fuentes del sistema, y del cambio a Inter cuando llega la fuente.
- **Primer pintado y LCP:** 2,5 s.
- **TBT:** entre el 60 y el 80 % es de gtag.js (dos tareas largas después de la carga). El resto es la hidratación de React.
- **Caché:** bien configurada en `vercel.json`. Los archivos con hash y la fuente se guardan un año; las imágenes, una hora; el HTML se revalida siempre.

## Opción elegida para más adelante: CSS crítico en el HTML

**Estado: elegida para tener en cuenta, no aplicada** (decisión de Ezequiel, 29/10/2026).

Cada página llevaría adentro, en un `<style>`, el CSS que usa su HTML, y el CSS completo pasaría al final del `<body>` con una precarga en el `<head>`. El primer pintado deja de esperar el archivo CSS, y funciona igual sin JavaScript. Lo hace `beasties`, un paquete que vite-react-ssg ya usa si está instalado.

**Cómo aplicarla:**

1. `npm install -D beasties` (versión probada: 0.3.4).
2. En el objeto que devuelve `defineConfig` en [`vite.config.js`](../vite.config.js):

   ```js
   ssgOptions: {
     // beasties no reconoce la última clase de cada renglón de un class escrito en
     // varias líneas: con un solo espacio entre clases no se le escapa ninguna regla.
     onPageRendered: (ruta, html) =>
       html.replace(/class="([^"]*)"/g, (m, clases) => `class="${clases.replace(/\s+/g, ' ').trim()}"`),
     // index.html ya precarga la fuente: así no se duplica.
     beastiesOptions: { preloadFonts: false },
   },
   ```

   Sin el `onPageRendered`, en la prueba se escapaban el borde del botón secundario y el brillo del principal: se veían distintos hasta que llegaba el CSS completo.
3. Verificar:
   - el build sin errores;
   - capturas antes y después a 320, 390, 768 y 1280 px, que tienen que dar idénticas, también bloqueando el CSS completo;
   - la prueba de medición (ver [MEDICION.md](MEDICION.md));
   - Lighthouse en producción con los dos métodos.

**Lo que se midió en la prueba** (build local, limitación real, 3 a 4 corridas):

| Página | LCP hoy | LCP con el CSS en el HTML |
|---|---|---|
| Diseño web | 2,52 s | 1,99 s |
| Tiendas online | 2,35 s | 1,88 s |

- A la vista no cambia nada: 7 páginas a 320, 390, 768 y 1280 px dieron idénticas píxel a píxel, también antes de que llegue el CSS completo. Se compararon sin JavaScript, tal como llega el HTML.
- Cada página pesa entre 3,5 y 4,2 KB más comprimida.
- El TBT de laboratorio sube 50–100 ms: al pintar antes, más trabajo de carga cae después del primer pintado. El trabajo es el mismo.

## Descartadas

- **Cambiar los íconos emoji (🌐 ⚡ 🐘) por dibujos:** adelanta el primer pintado apenas 0,05 s. Solo tendría sentido por diseño, porque hoy se ven distintos según el dispositivo.
- **Demorar gtag.js:** es la medición de los anuncios y ya carga después de la página. Demorarla más arriesga perder el gclid si la persona navega antes de que cargue.

## Para más adelante

**Medir a los visitantes reales:** mandar a GA4 el LCP, el INP y el CLS de cada visita con el paquete `web-vitals` (unos 2 KB). Conviene cuando empiecen a entrar visitas de los anuncios. Suma eventos en GA4, que no son eventos clave, y una línea en la política de privacidad.

## No verificado

- **Teléfonos reales:** no hay datos de campo. El sitio tiene pocas visitas para que Google publique datos de Chrome (CrUX).
- **La causa de la demora del primer cuadro** en el laboratorio.
- **El costo de los emoji en Android:** se midió en Windows.
