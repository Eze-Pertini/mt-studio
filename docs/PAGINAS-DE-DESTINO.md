# Páginas de destino de los anuncios

Cada grupo de anuncios va a la página de su servicio, nunca a la home.

| Grupo de anuncios | Página | H1 |
|---|---|---|
| Diseño web | https://mtstudio.dev/servicios/diseno-web | Diseño de páginas web y landing pages para tu negocio |
| Landing page | La misma de diseño web | El mismo |
| Tiendas online | https://mtstudio.dev/servicios/ecommerce | Tiendas online con Mercado Pago para tu negocio |

- **Landing page no tiene página propia** (decisión del 29/10/2026). Va como grupo aparte, con anuncios propios, a la página de diseño web: así se mide por separado sin mantener otra página. Si ese grupo convierte, se evalúa hacerle una.
- **La integración con ARCA es solo orgánica:** no lleva grupo de anuncios.
- **Diseño web se anuncia para todo el país.**

## Primera pantalla

Las seis páginas de servicio tienen la misma estructura, en este orden:

1. El H1, que tiene que coincidir con lo que la persona buscó.
2. Para quién es.
3. La prueba: un proyecto en producción, con enlace al caso. Tiene que figurar en [AFIRMACIONES.md](AFIRMACIONES.md).
4. Los precios "desde", por ahora solo en diseño web (ver [PRECIOS.md](PRECIOS.md)).
5. "Escribinos por WhatsApp", con un mensaje precargado que nombra el servicio.
6. "Dejá tu consulta", que baja al formulario de la misma página (`#consulta`).
7. "Te respondemos dentro de las 24 horas."

**Medido el 29/10/2026 con Playwright:** en diseño web y tiendas online entra completa a 360×740, 390×844, 768×1024 y 1280×800. A 320×568, el tamaño del iPhone SE de 2016, los botones quedan en la segunda pantalla; el botón flotante de WhatsApp sí se ve en la primera (aparece a los 2 segundos de cargar). Si un cambio alarga el H1, el subtítulo o la prueba, hay que volver a medir.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| H1, para quién, prueba | `src/data/services.js`: `heroTitle`, `heroSubtitle`, `prueba`, también en el sub-objeto `en` |
| Opción que viene elegida en el formulario | `src/data/services.js`: `formulario`. Tiene que ser uno de los `id` de `contact.serviceOptions`; sin `formulario`, viene sin elegir |
| Precios | `src/data/precios.js` (ver [PRECIOS.md](PRECIOS.md)) |
| Textos de los botones, tiempo de respuesta y mensaje precargado de WhatsApp | `src/i18n/uiText.js`: `serviceDetail.ctaWhatsapp`, `ctaFormulario`, `respuesta`, `whatsappMsg` |
| Título y subtítulo de arriba del formulario | `src/data/services.js`: `cta.title`, `cta.subtitle` |
| Opciones del formulario | `src/i18n/uiText.js`: `contact.serviceOptions`. El `id` es lo que llega a GA4 como `form_service`: si se cambia, los informes lo ven como otro servicio (ver [MEDICION.md](MEDICION.md)) |
| El formulario | [`src/components/ui/ContactForm.jsx`](../src/components/ui/ContactForm.jsx), el mismo que en /contacto |
