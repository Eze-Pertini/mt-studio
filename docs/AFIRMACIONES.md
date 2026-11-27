# Afirmaciones — qué dice el sitio y de dónde sale

**Todo lo que el sitio afirma tiene que ser cierto y comprobable.** Una frase absoluta que no se puede respaldar es publicidad engañosa, y Google Ads revisa la página de destino con ese criterio. Este archivo es el registro: antes de cambiar una cifra o una promesa, buscala acá para saber dónde vive y de dónde sale.

## Reglas de redacción

- **Sin absolutos** que no se puedan sostener: "nunca", "siempre", "al 100%", "sin pérdida de información", "cero clics" (salvo que se diga en qué condición).
- **Cifras solo con fuente.** Si no hay fuente o medición propia, la cifra no va.
- **Promesas que se cumplen a mano: solo lo que se puede sostener.** El tiempo de respuesta es **dentro de las 24 horas**, en todos los canales (formulario, WhatsApp y mail).
- **Primera persona del plural** ("desarrollamos", "te respondemos"), sin decir "equipo".
- **Clientes:** de Argentina, abiertos a proyectos de otros países. No decir "de todo el mundo".
- **"clic"**, no "click". Un texto armado con un número contempla el 1.
- **Todo cambio va en los dos idiomas:** el sub-objeto `en` de cada ficha en `src/data/` y `ui.en` en `src/i18n/uiText.js`.

## Registro

| Dato | Dónde vive | Fuente | Confirmado |
|---|---|---|---|
| Carga Directa: ~300 ventas por mes, 6 categorías, 50+ productos, entregas instantáneas | `projects.js`: `description`, `metrics`, `heroProof` (hero de la home) | Ezequiel, con el OK del cliente para publicarlo | 29/10/2026 |
| Factu en producción desde septiembre de 2026, emitiendo comprobantes con CAE | `projects.js`: `description`, `heroProof`; `services.js`: integracion-arca | Ezequiel | 29/10/2026 |
| Factu: más de 1.000 tests automatizados, análisis estático en nivel 6, Vultr + Laravel Forge | `projects.js`: `longDescription`, `metrics` | Ezequiel | 29/10/2026 |
| Factu: Laravel 13, PHP 8.4, PostgreSQL, Redis, Inertia + React 19 + TypeScript, Tailwind 4 | `projects.js`: `tags`, `longDescription` | Ezequiel | 29/10/2026 |
| Factu: packs de créditos sin suscripción y plan mensual | `projects.js`: `longDescription` | tufactu.app/planes | 29/10/2026 |
| Factu: 0 clics por factura, **en modo automático** | `projects.js`: `metrics` | La facturación automática es opcional | 29/10/2026 |
| ARCA: Factura C y Nota de Crédito C en producción; delegación por el Administrador de Relaciones, homologación, CAE y su vencimiento, QR de la RG 4892, envío por mail, varios puntos de venta, otras fuentes de cobro además de Mercado Pago | `services.js`: integracion-arca | Ezequiel, hecho en Factu | 29/10/2026 |
| Respuesta dentro de las 24 horas | `uiText.js`: `contact.*`, `serviceDetail.respuesta`, `home.benefitsItems`; `services.js`: mantenimiento-web | Ezequiel | 29/10/2026 |
| Tecnologías (ver tabla abajo) | `HomeExtras.jsx`: `techs`; `services.js`: `technologies` | El proyecto que respalda cada una | 29/10/2026 |
| Precios desde: landing page $ 200.000 y sitio web de hasta 5 páginas $ 350.000, con dominio y alojamiento por 1 año | `precios.js` (ver [PRECIOS.md](PRECIOS.md)) | Ezequiel | 10/11/2026 (antes: $ 150.000 y $ 250.000, desde el 29/10/2026) |
| Prueba de la primera pantalla de cada servicio: tufactu.app (sitio, landing y sistema, hechos íntegramente por el estudio), Carga Directa (~300 ventas por mes), Factu (factura con ARCA; Factura C y Nota de Crédito C con CAE) | `services.js`: `prueba` | Ezequiel | 29/10/2026 |
| Tiendas en Tiendanube: tienda de hasta 30 productos desde $ 130.000, precio de diciembre para tiendas contratadas hasta el 31/12/2026; precio final, con Factura C; cada 20 productos más, $ 20.000. Desde el 1/1/2027, $ 150.000 | `precios.js`: tiendanube (`paquetes`, `nota`, `adicional`; ver [PRECIOS.md](PRECIOS.md)) | Ezequiel | 23/11/2026 |
| Tiendas en Tiendanube: entrega en 5 días hábiles desde que tenemos el logo, las fotos y los datos de los productos. El trabajo real lleva 1 a 2 días: el margen cubre varias tiendas a la vez y los feriados. La conexión de los medios de pago se hace con el cliente en la videollamada, así que no cuenta como material | `services.js`: tiendanube (`features`) | Ezequiel | 23/11/2026 |
| "Partners certificados de Tiendanube": Ezequiel completó la Certificación Base del Programa de Partners de Tiendanube y la cuenta de socio está aprobada | `services.js`: tiendanube (`etiqueta`) | Certificado del 23/11/2026, en PDF; aprobación confirmada por Ezequiel | 23/11/2026 |
| Tiendas en Tiendanube, qué incluye: diseño con la marca sobre una plantilla de Tiendanube, carrusel y banners para celular y computadora, carga de hasta 30 productos con las fotos del cliente, tarjetas y fichas de producto trabajadas (con un plan pago de Tiendanube; ver abajo), páginas de información, menús y pie, envíos y medios de pago con las cuentas del cliente, revisión en celular, tablet y computadora, entrega por videollamada, transferencia de la tienda y 30 días de soporte. No incluye el plan de Tiendanube, el dominio propio (opcional: la tienda funciona con la dirección gratis de Tiendanube, como `lentovelas.mitiendanube.com`), las comisiones de pagos y envíos ni la producción de fotos | `services.js`: tiendanube (`features`, `benefits`, `excluye`) | Ezequiel; las fichas trabajadas, decisión de Ezequiel del 26/11/2026 | 27/11/2026 (antes: 23/11/2026) |
| Lento: tienda de ejemplo de una marca imaginaria, con los productos que no están a la venta y opiniones de ejemplo; 15 productos en 5 categorías; promo 3x2 en velas (creada en la tienda); 7 tamaños de pantalla revisados, de 320 a 1920 px | `projects.js`: lento (`description`, `metrics`, `services`, `beforeAfter`); `services.js`: tiendanube (`prueba`) | Contado en la tienda publicada y medido con Playwright (7 anchos, otra vez el 27/11/2026, con el diseño nuevo) | 27/11/2026 (antes: 23/11/2026) |
| TooM: tienda de ejemplo de una marca imaginaria de ropa, con los productos que no están a la venta y opiniones de ejemplo; 4 productos, 76 combinaciones de color y talle, 40 fotos de producto; estampas y fotos hechas por el estudio (las estampas, aplicadas sobre fotos de banco); revisada en celular (390 px) y computadora (1280 y 1366 px) | `projects.js`: toom (`description`, `metrics`, `services`, `beforeAfter`) | Contado en la tienda con el conector de Tiendanube (productos, variantes y fotos) y medido con Playwright | 26/11/2026 |
| Guía de facturación: **todavía dice** que al monotributista se le emite Factura B. Según la RG 5003/2021, vigente desde el 1/7/2021, el responsable inscripto le emite A | `blog.js`: facturacion-electronica-afip-para-independientes | RG 5003/2021 | **Pendiente: corregir cuando lo confirme el contador** |

### Cuidado con los créditos de Factu

En tufactu.app los packs dicen "No vencen*", con la nota "*Créditos válidos por 12 meses. Si comprás antes de que venzan, se corre el plazo". Por eso el portfolio **no** dice "créditos que no vencen": sin la aclaración sería la misma frase que hubo que corregir en Factu. Si el portfolio vuelve a mencionar el vencimiento, tiene que copiar la condición tal cual figura en tufactu.app/planes.

**Las capturas también afirman.** La portada vieja de Factu mostraba "Tus créditos no vencen" y la captura de créditos decía "No vencen." sin la condición. El 29/10/2026 la portada se reemplazó por la home actual de tufactu.app (y su versión de teléfono, que usa el hero de la home), y la captura de créditos se sacó de la galería. Cuando Factu cambie su home, hay que volver a capturarla.

### Lento es una tienda de ejemplo

La prueba de la primera pantalla tiene que ser un proyecto en producción. La única excepción es la página de Tiendas en Tiendanube: su prueba es Lento, una tienda de ejemplo que no es de un cliente. Por eso cada texto que la nombra dice "de ejemplo", la ficha del portfolio lleva la etiqueta "Tienda de ejemplo" en lugar de "En vivo", y no enlaza a la tienda. Cuando haya una tienda de un cliente publicada, pasa a ser la prueba.

Desde el 26/11/2026 Lento sigue el mismo criterio que TooM (abajo): la tienda ya no tiene contraseña ni avisos de ejemplo y muestra opiniones de ejemplo, así que el portfolio no la enlaza y cada texto que menciona las opiniones dice "de ejemplo". Su antes y después compara la plantilla Ipanema de fábrica (un borrador con los mismos productos y la misma promo 3x2, capturado el 26/11/2026) contra la tienda publicada el 27/11/2026: las dos versiones muestran la misma etiqueta de la promo, así que no hay diferencias de datos entre las capturas.

### TooM también es una tienda de ejemplo

TooM es la segunda tienda de ejemplo, con la etiqueta "Tienda de ejemplo" igual que Lento. La tienda no lleva avisos de ejemplo (Ezequiel la muestra así a los clientes) y tiene opiniones y estrellas inventadas; desde el 26/11/2026 Lento también. Por eso:

- La ficha del portfolio **no enlaza a la tienda**: quien entre desde el sitio no tendría cómo saber que las opiniones son de ejemplo.
- Cada texto que menciona las opiniones dice "de ejemplo", también el del antes y después, porque **las capturas también afirman** (muestran "4,9 (64)" y similares).
- El antes es del 25/11/2026, con la plantilla Baires como viene y los productos ya cargados; el después, del 26/11/2026. En el medio se creó la promoción por cantidad: por eso el buzo dice "-10% OFF" en el antes y "Hasta 15% OFF" en el después. Si se vuelven a sacar, hay que mantener esa aclaración o sacar las dos en el mismo estado.
- Las fotos de producto se armaron con las estampas del estudio aplicadas sobre fotos de banco: el sitio dice "armamos las fotos de producto", no que hicimos una sesión de fotos.

### Partners de Tiendanube

Desde el 23/11/2026 la página de Tiendas en Tiendanube dice "Partners certificados de Tiendanube": Ezequiel completó la Certificación Base del Programa de Partners y su cuenta de socio está aprobada. Tres límites, decididos por Ezequiel:

- **Sin el logo de Tiendanube**, ni un sello que el portal no haya dado con sus reglas de uso.
- **Sin nombrar un nivel del programa.** El estudio sigue en "Member" hasta su primera tienda paga creada desde el portal de socios; "Silver" o cualquier otro nivel solo se dice cuando figure en el portal.
- **Sin prometer beneficios para los clientes.** Las páginas de niveles de Tiendanube solo describen beneficios para el socio (comisiones y bonos). Si el portal ofrece alguno para clientes, se agrega con sus palabras exactas y la fuente.

El soporte de Tiendanube lo confirmó por escrito el 26/11/2026:

- con el certificado de Partner Academy se puede mencionar la certificación en el sitio y en las redes;
- el sello oficial de socio es recién desde el nivel Silver;
- los clientes de un socio no tienen descuentos ni días de prueba, en ningún nivel. Lo único es que no pagan el plan mientras la tienda está en desarrollo: lo empiezan a pagar cuando se la transferimos.

### Fichas trabajadas en el armado

Desde el 27/11/2026 la lista de Tiendas en Tiendanube incluye "Tarjetas y fichas de producto trabajadas: etiquetas en color, precio sin centavos, cuánto ahorrás, promo destacada y fecha estimada de entrega (con un plan pago de Tiendanube)". Lo decidió Ezequiel el 26/11/2026. Es lo que muestran TooM y Lento, y sus antes y después del portfolio.

- **"Con un plan pago":** en TooM el script de las fichas se carga con Google Tag Manager. Según la ayuda de Tiendanube y la tabla de planes (vista el 27/11/2026), la integración con Tag Manager está "disponible únicamente en nuestros planes pagos", y el plan Inicial no la tiene. En Lento va en el bloque de código de una sección de Ipanema, y la ayuda no le pone límite de plan, pero eso no está probado en Inicial.
- **Sin estrellas ni opiniones:** en TooM y Lento son de ejemplo. En una tienda real solo se muestran con opiniones de compradores reales, con una app de reseñas que paga el cliente, así que no entran en lo que se incluye.
- **"Promo destacada" y "cuánto ahorrás"** se ven cuando el producto tiene una promoción o un precio de oferta cargados.

### Factura A y B: no se ofrecen

En Factu solo están probadas en producción la Factura C y la Nota de Crédito C. La página de integración con ARCA ofrece solo eso. Ofrecer A y B, aclarando que se implementan y prueban en homologación para cada caso, es una decisión de negocio de Ezequiel.

## Tecnologías y qué proyecto las respalda

Una tecnología entra en el sitio solo si un proyecto real la usó.

| Tecnología | Proyecto |
|---|---|
| React, TypeScript, Laravel, PHP, PostgreSQL, Redis, Inertia, Tailwind CSS | Factu |
| WordPress, WooCommerce, PHP, Mercado Pago | Carga Directa (Mercado Pago también en Factu) |
| React, Vite, Tailwind CSS, Framer Motion, Vercel | Este sitio |
| Vultr, Laravel Forge | Infraestructura de Factu |
| ARCA WSFEv1, SOAP | Factu |
| Tiendanube | Lento (tienda de ejemplo) |

## Lo que se sacó y por qué (29/10/2026)

- **Hero de la home:** "20+ proyectos · 100% satisfacción · 5★ valoración" y el tablero con "24 proyectos · 18 clientes · $42k revenue". Venían de la plantilla inicial y no eran datos reales. En su lugar van las dos pruebas de `heroProof`.
- **Contacto:** "Respuesta en minutos" y "en menos de 24 horas" se unificaron en "dentro de las 24 horas". "Clientes de todo el mundo" pasó a "clientes de Argentina, abiertos a otros países".
- **Factu:** "créditos que no vencen" (ver arriba), Laravel 12 y 833 tests.
- **Integración con ARCA:** "Factura A, B o C", "5 a 15 minutos", "8 a 15 campos" y "cero clics por comprobante".
- **Mantenimiento:** "al 100%", "restauramos sin pérdida de información", "sabemos si algo falla antes de que lo note un cliente", "nada que rompa sin aviso", "siempre seguro".
- **Sistemas web:** CRMs, ERPs y GraphQL, que no tienen un proyecto que los respalde.
- **Blog:** "tres segundos", "el 80% de los casos", "entre 30 minutos y 2 horas" y "entre 5 y 15 minutos", que no tenían fuente.
- **Tecnologías:** Next.js, Node.js, MongoDB, Docker, Figma, Make, Zapier, OpenAI API, Nginx, Cloudflare y GitHub Actions.
