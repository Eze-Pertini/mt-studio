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
| Factu: 0 clics por factura, **en modo automático** ("en modo auto" en la tarjeta, que a 320px no admite palabras largas) | `projects.js`: `metrics` | La facturación automática es opcional | 29/10/2026 |
| ARCA: Factura C y Nota de Crédito C en producción; delegación por el Administrador de Relaciones, homologación, CAE y su vencimiento, QR de la RG 4892, envío por mail, varios puntos de venta, otras fuentes de cobro además de Mercado Pago | `services.js`: integracion-arca | Ezequiel, hecho en Factu | 29/10/2026 |
| Respuesta dentro de las 24 horas | `uiText.js`: `contact.*`, `home.benefitsItems`; `services.js`: mantenimiento-web | Ezequiel | 29/10/2026 |
| Tecnologías (ver tabla abajo) | `HomeExtras.jsx`: `techs`; `services.js`: `technologies` | El proyecto que respalda cada una | 29/10/2026 |
| Precios desde: landing page $ 150.000 y sitio web de hasta 5 páginas $ 250.000, con dominio y alojamiento por 1 año | `precios.js` (ver [PRECIOS.md](PRECIOS.md)) | Ezequiel | 29/10/2026 |
| Guía de facturación: **todavía dice** que al monotributista se le emite Factura B. Según la RG 5003/2021, vigente desde el 1/7/2021, el responsable inscripto le emite A | `blog.js`: facturacion-electronica-afip-para-independientes | RG 5003/2021 | **Pendiente: corregir cuando lo confirme el contador** |

### Cuidado con los créditos de Factu

En tufactu.app los packs dicen "No vencen*", con la nota "*Créditos válidos por 12 meses. Si comprás antes de que venzan, se corre el plazo". Por eso el portfolio **no** dice "créditos que no vencen": sin la aclaración sería la misma frase que hubo que corregir en Factu. Si el portfolio vuelve a mencionar el vencimiento, tiene que copiar la condición tal cual figura en tufactu.app/planes.

**Las capturas también afirman.** La portada vieja de Factu mostraba "Tus créditos no vencen" y la captura de créditos decía "No vencen." sin la condición. El 29/10/2026 la portada se reemplazó por la home actual de tufactu.app (y su versión de teléfono, que usa el hero de la home), y la captura de créditos se sacó de la galería. Cuando Factu cambie su home, hay que volver a capturarla.

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

## Lo que se sacó y por qué (29/10/2026)

- **Hero de la home:** "20+ proyectos · 100% satisfacción · 5★ valoración" y el tablero con "24 proyectos · 18 clientes · $42k revenue". Venían de la plantilla inicial y no eran datos reales. En su lugar van las dos pruebas de `heroProof`.
- **Contacto:** "Respuesta en minutos" y "en menos de 24 horas" se unificaron en "dentro de las 24 horas". "Clientes de todo el mundo" pasó a "clientes de Argentina, abiertos a otros países".
- **Factu:** "créditos que no vencen" (ver arriba), Laravel 12 y 833 tests.
- **Integración con ARCA:** "Factura A, B o C", "5 a 15 minutos", "8 a 15 campos" y "cero clics por comprobante".
- **Mantenimiento:** "al 100%", "restauramos sin pérdida de información", "sabemos si algo falla antes de que lo note un cliente", "nada que rompa sin aviso", "siempre seguro".
- **Sistemas web:** CRMs, ERPs y GraphQL, que no tienen un proyecto que los respalde.
- **Blog:** "tres segundos", "el 80% de los casos", "entre 30 minutos y 2 horas" y "entre 5 y 15 minutos", que no tenían fuente.
- **Tecnologías:** Next.js, Node.js, MongoDB, Docker, Figma, Make, Zapier, OpenAI API, Nginx, Cloudflare y GitHub Actions.
