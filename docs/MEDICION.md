# Medición de conversiones

Dos conversiones, para GA4 y, cuando exista la cuenta, para Google Ads:

| Conversión | Evento de GA4 | Cuándo se dispara |
|---|---|---|
| Clic en WhatsApp | `whatsapp_click`, con el parámetro `cta` | Cualquier clic en un enlace a `wa.me`, sin importar el texto del botón |
| Formulario enviado | `generate_lead`, con el parámetro `form_service` | Cuando EmailJS respondió bien. Tocar el botón no cuenta |

## Dónde está cada cosa

- **La etiqueta** la escribe [`vite.config.js`](../vite.config.js) en el HTML del build, y **solo si existe `VITE_GA_ID`**. Sin el ID no queda nada de la etiqueta: el desarrollo, las pruebas y las vistas previas no ensucian las estadísticas.
- **Los eventos** salen de [`src/services/analytics.js`](../src/services/analytics.js):
  - `escucharClicsWhatsApp()` se activa una sola vez en `MainLayout` y cuenta los clics por el destino del enlace (`wa.me`).
  - `registrarFormulario()` se llama en [`Contact.jsx`](../src/pages/Contact.jsx) después de que EmailJS respondió bien.
- **Ningún envío frena la navegación.** No hay `preventDefault` ni `event_callback`: con un bloqueador de anuncios el botón quedaría trabado.

## Variables de entorno (Vercel → Settings → Environment Variables, **solo Production**)

| Variable | Valor | Para qué |
|---|---|---|
| `VITE_GA_ID` | `G-WYJ9WZM84Z` | Escribe la etiqueta. **Sin ella, producción se queda sin GA4.** |
| `VITE_ADS_WHATSAPP` | `AW-XXXXXXXXX/etiqueta` | Destino de la conversión de WhatsApp en Ads |
| `VITE_ADS_FORMULARIO` | `AW-XXXXXXXXX/etiqueta` | Destino de la conversión del formulario en Ads |

Después de cambiar una variable hay que volver a desplegar, porque se leen en el build. No las cargues en `.env.local`: el desarrollo mandaría visitas a la propiedad real.

**Resguardo:** si el build de producción de Vercel (`VERCEL_ENV=production`) no encuentra `VITE_GA_ID`, falla a propósito y Vercel deja publicada la versión anterior. Así, borrar la variable por error no deja el sitio sin medición.

## Botones de WhatsApp

Cualquier enlace a `https://wa.me/…` cuenta solo. Para saber cuál fue, poné `data-cta` en el enlace; si falta, llega como `sin_nombre`. Los que hay hoy:

| `data-cta` | Dónde |
|---|---|
| `flotante` | Botón flotante, en todas las páginas |
| `pie` | Ícono del pie |
| `contacto_formulario` | Botón al lado de "Enviar mensaje" |
| `contacto_tarjeta` | Tarjeta de WhatsApp en /contacto |
| `contacto_despues_del_envio` | "Seguir por WhatsApp", después de enviar el formulario |

## Google Ads

- **Nunca un segundo `gtag('config', 'AW-…')`**: deja el sitio con dos etiquetas. La conversión se manda con `send_to`, y para eso el destino de Ads tiene que venir **dentro** de la etiqueta de GA4.
- **Cómo verificarlo:** bajá `https://www.googletagmanager.com/gtag/js?id=G-WYJ9WZM84Z` y buscá `AW-` adentro. Hasta el 29/10/2026 trae un solo destino, `G-WYJ9WZM84Z`. Si el `AW-` no aparece, se resuelve en la consola de la etiqueta de Google, no en el código.
- **En cada acción de conversión, contar "Una" por clic.** Igual, quien manda el formulario y después toca "Seguir por WhatsApp" suma en las dos acciones: el total de conversiones sobrecuenta personas.

## GA4 (pasos manuales, una sola vez)

- Marcar `whatsapp_click` y `generate_lead` como **eventos clave**.
- **No marcar `form_submit`.** Lo manda la medición mejorada al tocar el botón, haya salido bien el envío o no.
- Crear las **dimensiones personalizadas** de evento `cta` y `form_service`, para verlas en los informes.

## Campo trampa

El formulario tiene un campo `sitio_web` que las personas no ven, que el teclado no alcanza y que los lectores de pantalla no leen. Si llega completo, el envío no sale ni cuenta como conversión, y se muestra el aviso de error con WhatsApp y mail, por si alguna vez lo llena una persona.

## Cómo probarlo

1. **En el navegador, sin ensuciar las estadísticas.** Compilá con `VITE_GA_ID` y serví `dist/`. Bloqueá con una regex que empiece en `(^|\.)` los dominios de Google que reciben envíos (`google.<dominio de país>`, `google-analytics.com`, `doubleclick.net`, `googleadservices.com`) y dejá pasar solo `googletagmanager.com`. Interceptá y abortá esos pedidos: en la URL o en el cuerpo tiene que aparecer `en=whatsapp_click` (con `ep.cta=…`) o `en=generate_lead`.
2. **EmailJS se simula** (`api.emailjs.com` → respuesta 200 o 400), para no mandar mails de prueba.
3. **Sin `VITE_GA_ID`** no tiene que haber ningún pedido a Google, y `window.gtag` no tiene que existir.
4. **El punta a punta, con el teléfono:** abrí el sitio, tocá WhatsApp y mandá el formulario, y miralo en **GA4 → Tiempo real**. Playwright no ve el envío que sale al irse de la página.
