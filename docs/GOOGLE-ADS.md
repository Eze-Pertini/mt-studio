# Campaña de Google Ads

**Estado (5/11/2026): creada y PAUSADA, con el OK de Ezequiel. No gasta nada hasta que se prenda.**

| Qué | ID en Google Ads |
|---|---|
| Campaña "MT Studio · Búsqueda · Prueba" | 24440068465 |
| Presupuesto ($ 2.500 por día) | 16002570443 |
| Conversión "WhatsApp" | 7890932610 → `AW-18558070627/pkVmCIKn2LIdEOPelpFF` |
| Conversión "Formulario enviado" | 7890932613 → `AW-18558070627/K_60CIWn2LIdEOPelpFF` |
| "Vista de una página" | 7890770048, borrada |

Se creó con la API y se comprobó leyéndola de vuelta. Coinciden la búsqueda sola, Argentina por presencia, el español, todos los días de 9 a 23, maximizar clics sin límite, las 34 negativas de la campaña, los 3 grupos con sus palabras clave y negativas, los 3 anuncios (en revisión de Google al crearse) y los 10 recursos.

- Cuenta: **MTStudio.dev, 305-123-2135**, separada de la de Factu. Leída con la API el 5/11/2026: en pesos (ARS), zona horaria de Buenos Aires, etiquetado automático activado, habilitada y sin campañas.
- API autorizada con el Gmail de Ezequiel, con el proyecto de Cloud `vocal-facet-338115` en nivel Explorer. La credencial y el permiso están en `C:\Users\epert\.google-ads\`, fuera del repo. Ese permiso vence a los 7 días mientras la app de Cloud siga en estado "Prueba": cuando venza, se autoriza de nuevo.

Qué página recibe cada grupo y por qué: [PAGINAS-DE-DESTINO.md](PAGINAS-DE-DESTINO.md). Qué se puede afirmar: [AFIRMACIONES.md](AFIRMACIONES.md).

## Cómo se crea y quién la prende

1. Con la API se lee la cuenta, sin cambiar nada, para confirmar la moneda (pesos), la zona horaria y el etiquetado automático.
2. Con el OK de Ezequiel sobre este documento, se crea todo **pausado**: presupuesto, campaña, grupos, palabras clave, negativas, anuncios, recursos y conversiones.
3. Ezequiel la revisa en Google Ads.
4. **Prenderla, que es cuando empieza a gastar, la hace Ezequiel o necesita su OK explícito.** Lo mismo cada cambio posterior: pujas, presupuesto, palabras clave o negativas.

Con el nivel Explorer la API no tiene el Planificador de palabras clave: los volúmenes y costos por clic se miran en la interfaz de Google Ads.

## Configuración de la campaña

| Ajuste | Valor |
|---|---|
| Nombre | MT Studio · Búsqueda · Prueba |
| Tipo | Búsqueda |
| Redes | Solo la Red de Búsqueda de Google: sin socios de búsqueda ni Display |
| Ubicación | Argentina, para los tres grupos, por **presencia**: personas que están o suelen estar ahí, no las que solo muestran interés |
| Idioma | Español |
| Horario | Todos los días, de 9 a 23 (hora de Buenos Aires, la de la cuenta) |
| Presupuesto | **$ 2.500 por día**. Google puede gastar hasta el doble en un día, pero en el mes no más de 30,4 veces el diario: unos $ 76.000 |
| Puja | Maximizar clics, **sin CPC máximo**, solo con el presupuesto diario, como en la cuenta de Factu (decisión del 5/11/2026). A los 3–5 días se revisa el CPC promedio: si pocos clics se llevan el presupuesto, se pone un límite. Maximizar conversiones, recién cuando haya conversiones acumuladas |
| Etiquetado automático | Activado (lo necesitan GA4 y el gclid) |
| Duración de la prueba | 4 semanas desde que se prende |

## Grupos de anuncios y palabras clave

Concordancia de **frase** ("…") y **exacta** ([…]) para empezar. Las tildes no hace falta repetirlas: Google trata las variantes con y sin tilde como la misma palabra clave. Las negativas, en cambio, no cubren variantes, por eso abajo van repetidas.

### 1. Diseño web → https://mtstudio.dev/servicios/diseno-web

- Frase: "diseño de páginas web", "diseño web para empresas", "diseño web para negocios", "página web para mi negocio", "página web para empresa", "página web profesional", "desarrollo de páginas web", "diseñador de páginas web", "estudio de diseño web", "presupuesto página web", "precio página web", "cuánto cuesta una página web"
- Exacta: [diseño de páginas web], [diseño web para empresas], [página web para mi negocio], [precio página web]
- Negativas del grupo: landing, tienda, tiendas, ecommerce, carrito. Mandan esas búsquedas a sus propios grupos, para medirlos por separado.

### 2. Landing page → https://mtstudio.dev/servicios/diseno-web

Grupo propio con la misma página: se mide aparte sin mantener otra página (decisión del 29/10/2026).

- Frase: "landing page para mi negocio", "diseño de landing page", "landing page profesional", "precio landing page", "landing page precio", "landing page para campañas", "hacer una landing page"
- Exacta: [landing page para mi negocio], [diseño de landing page]

### 3. Tiendas online → https://mtstudio.dev/servicios/ecommerce

- Frase: "tienda online con mercado pago", "tienda online para mi negocio", "diseño de tienda online", "desarrollo de tienda online", "crear tienda online para mi negocio", "armar tienda online", "página web con carrito de compras", "tienda online woocommerce", "ecommerce para pymes"
- Exacta: [tienda online con mercado pago], [diseño de tienda online], [desarrollo de tienda online]
- Negativas del grupo: tiendanube, "tienda nube", shopify, empretienda, "mercado libre", "mercado shops", mercadoshops. Quien busca una plataforma quiere armarla solo.

### Negativas de toda la campaña

- **Aprender o hacerlo solo:** gratis, gratuita, gratuito, curso, cursos, aprender, tutorial, tutoriales, plantilla, plantillas, ejemplo, ejemplos, pdf, descargar, "qué es", "que es", cómo, como, html, css, canva, wix
- **Buscar trabajo o estudiar:** empleo, empleos, trabajo, trabajos, sueldo, universidad, carrera
- **No competir con Factu,** que tiene su propia cuenta: monotributo, monotributista, "factura c", facturador, "facturar mercado pago"

Después de los primeros días se revisa el informe de **términos de búsqueda** y se agregan las negativas que hagan falta, con el OK de Ezequiel.

## Anuncios

Un anuncio adaptable por grupo. Cada afirmación sale de [AFIRMACIONES.md](AFIRMACIONES.md): precios desde, dominio y alojamiento por 1 año, respuesta dentro de las 24 horas, tufactu.app y Carga Directa (con el OK del cliente). Los largos están contados con un script: títulos hasta 30 caracteres, descripciones hasta 90. **Si cambia un precio en `precios.js`, el anuncio se cambia el mismo día** (ver [PRECIOS.md](PRECIOS.md)).

#### Diseño web

Ruta visible: mtstudio.dev/diseno-web/precios

| Título | Caracteres |
|---|---|
| Diseño de Páginas Web | 21 |
| Páginas Web para tu Negocio | 27 |
| Landing Page desde $150.000 | 27 |
| Sitio Web desde $250.000 | 24 |
| Dominio y Hosting por 1 Año | 27 |
| Respuesta Dentro de 24 Horas | 28 |
| Escribinos por WhatsApp | 23 |
| Hicimos tufactu.app | 19 |
| Para Negocios y Profesionales | 29 |
| Estudio de Diseño Web | 21 |
| Pedí tu Presupuesto | 19 |

| Descripción | Caracteres |
|---|---|
| Páginas web y landing pages para negocios y profesionales, pensadas para que te consulten. | 90 |
| Landing page desde $150.000 y sitio de hasta 5 páginas desde $250.000, con dominio. | 83 |
| Hicimos tufactu.app: sitio, landing y sistema, en producción desde septiembre de 2026. | 86 |
| Escribinos por WhatsApp o dejá tu consulta en la página. Respondemos dentro de 24 horas. | 88 |

#### Landing page

Ruta visible: mtstudio.dev/landing-page/precios

| Título | Caracteres |
|---|---|
| Landing Page para tu Negocio | 28 |
| Diseño de Landing Pages | 23 |
| Landing Page desde $150.000 | 27 |
| Landing Pages para Campañas | 27 |
| Dominio y Hosting por 1 Año | 27 |
| Respuesta Dentro de 24 Horas | 28 |
| Escribinos por WhatsApp | 23 |
| Hicimos tufactu.app | 19 |
| Pensadas para que te Consulten | 30 |
| Pedí tu Presupuesto | 19 |

| Descripción | Caracteres |
|---|---|
| Landing pages para tus campañas, pensadas para que la gente te consulte. | 72 |
| Landing page desde $150.000, con dominio y alojamiento por 1 año incluidos. | 75 |
| Hicimos tufactu.app: sitio, landing y sistema, en producción desde septiembre de 2026. | 86 |
| Escribinos por WhatsApp o dejá tu consulta en la página. Respondemos dentro de 24 horas. | 88 |

#### Tiendas online

Ruta visible: mtstudio.dev/tienda-online

| Título | Caracteres |
|---|---|
| Tienda Online con Mercado Pago | 30 |
| Tiendas Online para Negocios | 28 |
| Diseño de Tiendas Online | 24 |
| Vendé por Internet | 18 |
| Productos, Stock y Pedidos | 26 |
| Tu Propio Panel de Gestión | 26 |
| Mercado Pago y Transferencia | 28 |
| Hicimos Carga Directa | 21 |
| Respuesta Dentro de 24 Horas | 28 |
| Escribinos por WhatsApp | 23 |
| Pedí tu Presupuesto | 19 |

| Descripción | Caracteres |
|---|---|
| Tiendas online con Mercado Pago, transferencia o tarjeta, y tu propio panel de pedidos. | 87 |
| Hicimos Carga Directa, una tienda online con unas 300 ventas por mes. | 69 |
| Manejá productos, stock y pedidos desde tu panel. Respondemos dentro de 24 horas. | 81 |
| Escribinos por WhatsApp o dejá tu consulta en la página. Respondemos dentro de 24 horas. | 88 |

**No verificado:** si Google acepta "Mercado Pago" en el texto del anuncio. Es una marca de terceros y puede tener restricciones. Si lo rechaza, se reemplaza por "pagos online".

## Recursos

- **Vínculos a sitios:** "Páginas web y landings" → /servicios/diseno-web · "Tiendas online" → /servicios/ecommerce · "Caso: tufactu.app" → /portfolio/factu · "Caso: Carga Directa" → /portfolio/cargadirecta · "Contacto" → /contacto
- **Textos destacados:** Respondemos en 24 horas · Dominio y hosting 1 año · Atención por WhatsApp · Precios desde $150.000
- **Fragmento estructurado** (Servicios): Páginas web, Landing pages, Tiendas online

## Conversiones

**Lo que ya hay en la cuenta** (leído el 5/11/2026):

- El ID de conversiones es **`AW-18558070627`**.
- Hay tres acciones que vienen de GA4 (close_convert_lead, qualify_lead, purchase). Están ocultas y no cuentan: se dejan así.
- Hay una acción **"Vista de una página"** que Google creó en el alta. Está activa como principal, aunque hoy no suma en la columna de conversiones. **Se propone borrarla**: una vista de página no es una consulta.
- La etiqueta de Google del sitio (`GT-5R3WSDGT`, que carga `G-WYJ9WZM84Z`) **todavía no incluía la cuenta de Ads** como destino: el `gtag.js` solo traía `G-WYJ9WZM84Z`. Se agregó ese mismo día (paso 3).

Antes de prender la campaña:

1. **Crear dos acciones de conversión** en la cuenta, del tipo sitio web, contando **una** por clic:
   - "WhatsApp", categoría Contacto;
   - "Formulario enviado", categoría Enviar formulario de clientes potenciales.
2. **Cargar sus destinos** (`AW-…/etiqueta`) en Vercel, en Production: `VITE_ADS_WHATSAPP` y `VITE_ADS_FORMULARIO`. Después hay que volver a desplegar. Ver [MEDICION.md](MEDICION.md).
3. **Agregar `AW-18558070627` como destino** de la etiqueta de Google `GT-5R3WSDGT`, para que el `send_to` llegue sin un segundo `gtag('config', 'AW-…')`. Según la [ayuda de Google](https://support.google.com/google-ads/answer/12329709?hl=es):
   - **Cómo llegar a la etiqueta desde GA4:** Administrador → Recogida (o Recopilación) y modificación de datos → Flujos de datos → mtstudio.dev → Configurar ajustes de etiquetas.
   - **Ahí:** pestaña **Administrador** → **Gestionar la etiqueta de Google** (en la versión latinoamericana, "Administrar la etiqueta de Google") → sección Destinos → **+ Destino** → **Elegir un destino** → la cuenta de MT Studio, `AW-18558070627` → **Guardar**.
   - **Cuidado:** agregar un destino lo saca de cualquier otra etiqueta que lo tuviera, y la ayuda advierte que puede ser difícil de deshacer. Si en la lista aparece la cuenta de Ads de TuFactu, no hay que elegirla.
   - **Para comprobarlo:** `https://www.googletagmanager.com/gtag/js?id=G-WYJ9WZM84Z` tiene que traer `AW-18558070627` adentro. La ayuda no dice cuánto tarda en verse.
   - **Hecho el 5/11/2026.** Minutos después, el `gtag.js` ya traía `AW-18558070627`, y en la cuenta no apareció ninguna conversión nueva.
4. **Vincular GA4 con la cuenta.** **No importar** los eventos clave de GA4 como conversiones de Ads: se contarían dos veces.
5. **Probar** con Google interceptado, como dice MEDICION.md, y comprobar en producción.

## Cómo leer los resultados

- **Una conversión no es un cliente:** es un clic en WhatsApp o un formulario. Hay que anotar a mano qué consultas llegaron, de qué grupo y cuáles se cerraron.
- **En GA4 los canales de "ayer" todavía se reclasifican:** decidir con rangos que terminen hace dos días.
- **Con pocas visitas, cero conversiones no dice "nadie lo quiere": dice "nadie lo vio".**
- **Lo que decide si sirve** es cuánto cuesta cada consulta y cuántas se convierten en trabajo. Un proyecto cerrado paga varias semanas de campaña.

## Decisiones

Tomadas el 5/11/2026:

- sin CPC máximo;
- tiendas online para toda Argentina;
- horario de 9 a 23;
- **"Mercado Pago" queda en los anuncios.** Si Google rechaza los textos que lo nombran, se cambian por "pagos online".
