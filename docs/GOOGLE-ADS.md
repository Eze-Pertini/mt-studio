# Campaña de Google Ads

**Estado (5/11/2026): creada y PAUSADA, con el OK de Ezequiel. No gasta nada hasta que se prenda.** Ese mismo día quedó publicada y comprobada en producción la medición de las dos conversiones (ver [Conversiones](#conversiones)).

**Prendida el 9/11/2026 a las 13:00** desde la interfaz de Google Ads, según el historial de cambios de la cuenta.

**Lectura del 24/11/2026**, con la API (v26), sin cambiar nada:
- **Desde el 9/11:** 2.746 impresiones, 73 clics, $ 39.579 y **0 conversiones**.
- **De dónde vinieron los clics:** 40 de los 73 vinieron de búsquedas de otras plataformas o de gente que se arma la página sola.
  - "tienda negocio", una plataforma competidora, sumó 23 clics.
  - El resto: "straw page", "adobe portfolio", "mitiendanube ingresar", "woocommerce", "emprende tienda" y "stan store".
  - La concordancia de frase las tomó como "parecidas" a nuestras palabras clave.

**Ese mismo día, con el OK de Ezequiel:**
- 24 negativas nuevas en toda la campaña (ver [Negativas de toda la campaña](#negativas-de-toda-la-campaña)).
- El presupuesto pasó de $ 2.500 a **$ 3.000 por día**.
- Se creó el grupo **Tiendanube, en pausa** (ver más abajo). Lo prende Ezequiel cuando Google apruebe el anuncio.

**Precios nuevos (10/11/2026):** landing desde $ 200.000 y sitio desde $ 350.000. Ese día, con el OK de Ezequiel, se cambiaron en la cuenta con la API y se leyeron de vuelta:

- dos títulos y dos descripciones, en los grupos Diseño web y Landing page (ver [Anuncios](#anuncios));
- el texto destacado de la campaña. El nuevo, `assets/438300926823`, reemplaza al de $ 150.000, `assets/436380673835`, que quedó desvinculado.

| Qué | ID en Google Ads |
|---|---|
| Campaña "MT Studio · Búsqueda · Prueba" | 24440068465 |
| Presupuesto ($ 3.000 por día desde el 24/11/2026; antes, $ 2.500) | 16002570443 |
| Grupo Tiendanube, creado en pausa el 24/11/2026 | 208068814451 |
| Anuncio del grupo Tiendanube | 832512802716 |
| Conversión "WhatsApp" | 7890932610 → `AW-18558070627/pkVmCIKn2LIdEOPelpFF` |
| Conversión "Formulario enviado" | 7890932613 → `AW-18558070627/K_60CIWn2LIdEOPelpFF` |
| "Vista de una página" | 7890770048, borrada |

Se creó con la API y se comprobó leyéndola de vuelta. Coinciden la búsqueda sola, Argentina por presencia, el español, todos los días de 9 a 23, maximizar clics sin límite, las 34 negativas de la campaña, los 3 grupos con sus palabras clave y negativas, los 3 anuncios (en revisión de Google al crearse) y los 10 recursos.

- Cuenta: **MTStudio.dev, 305-123-2135**, separada de la de Factu. Leída con la API el 5/11/2026: en pesos (ARS), zona horaria de Buenos Aires, etiquetado automático activado, habilitada y sin campañas.
- API autorizada con el Gmail de Ezequiel, con el proyecto de Cloud `vocal-facet-338115` en nivel Explorer. La credencial y el permiso están en `C:\Users\epert\.google-ads\`, fuera del repo. Ese permiso vence a los 7 días mientras la app de Cloud siga en estado "Prueba": cuando venza, se autoriza de nuevo. La última vez fue el 24/11/2026: hay que abrir una ventana de Google en la misma compu, que vuelve a una dirección local, y en el aviso "Google no verificó esta app" tocar Continuar.

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
| Presupuesto | **$ 3.000 por día** desde el 24/11/2026 (antes, $ 2.500). Google puede gastar hasta el doble en un día, pero en el mes no más de 30,4 veces el diario: unos $ 91.000 |
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
- Negativas del grupo: tiendanube, "tienda nube", shopify, empretienda, "mercado libre", "mercado shops", mercadoshops. Quien busca una plataforma quiere armarla solo. Desde el 24/11/2026, "tiendanube" y "tienda nube" siguen acá para que esas búsquedas vayan al grupo Tiendanube y no compitan con este.

### 4. Tiendanube → https://mtstudio.dev/servicios/tiendanube

Creado **en pausa** el 24/11/2026, con el OK de Ezequiel. Lo prende él cuando Google apruebe el anuncio. La página existe desde el 23/11/2026; antes, estas búsquedas se excluían porque llevaban a tiendas a medida.

- Frase: "diseñador tiendanube", "diseñador tienda nube", "diseño tiendanube", "diseño tienda nube", "diseño de tiendanube", "agencia tiendanube", "agencia tienda nube", "experto tiendanube", "experto en tiendanube", "partner tiendanube", "armado de tienda tiendanube", "armado tiendanube", "armado tienda nube"
- Exacta: [diseñador tiendanube], [agencia tiendanube], [diseño tiendanube], [armado tiendanube]
- Negativas del grupo, para quien busca su cuenta, la ayuda, los planes o los temas de la plataforma y no un servicio: login, ingresar, app, ayuda, soporte, plan, planes, comisión, comision, tema, temas, mitiendanube, "iniciar sesión", "iniciar sesion", "mi cuenta", "atención al cliente", "pago nube", "envío nube", "envio nube"
- **La marca en el anuncio:** según la [política de marcas de Google Ads](https://support.google.com/adspolicy/answer/6118?hl=es-419), las marcas como palabras clave no se restringen. En el texto del anuncio se restringen solo si el titular presenta un reclamo o si el uso es engañoso. La página deja claro que el estudio arma tiendas en Tiendanube. Si Google rechaza el anuncio por la marca, se reemplaza "Tiendanube" en los títulos por "tienda online".

### Negativas de toda la campaña

- **Aprender o hacerlo solo:** gratis, gratuita, gratuito, curso, cursos, aprender, tutorial, tutoriales, plantilla, plantillas, ejemplo, ejemplos, pdf, descargar, "qué es", "que es", cómo, como, html, css, canva, wix
- **Buscar trabajo o estudiar:** empleo, empleos, trabajo, trabajos, sueldo, universidad, carrera
- **No competir con Factu,** que tiene su propia cuenta: monotributo, monotributista, "factura c", facturador, "facturar mercado pago"
- **Otras plataformas y armado propio** (24/11/2026, del informe de términos de búsqueda): "tienda negocio", tiendanegocio, mitiendanube, "nube tienda", "emprende tienda", pistacho, "stan store", emidica, "straw page", strawpage, carrd, cardd, readymag, portfolio, awwwards, siteinspire, motionsites, supahero, "google site", templates, themes, inspiration, examples y [woocommerce]. Esta última va en exacta para tapar la búsqueda "woocommerce" sola sin tapar la palabra clave "tienda online woocommerce". Antes de cargarlas se comprobó que ninguna tapa una de las 54 palabras clave de la campaña. Quedaron 58 negativas.
- **Ojo con "factura c":** está en esta lista y el anuncio de Tiendanube dice "Precio Final con Factura C". La negativa tapa búsquedas, no textos de anuncios, así que no se pisan.

Después de los primeros días se revisa el informe de **términos de búsqueda** y se agregan las negativas que hagan falta, con el OK de Ezequiel.

## Anuncios

Un anuncio adaptable por grupo. Cada afirmación sale de [AFIRMACIONES.md](AFIRMACIONES.md): precios desde, dominio y alojamiento por 1 año, respuesta dentro de las 24 horas, tufactu.app y Carga Directa (con el OK del cliente). Los largos están contados con un script: títulos hasta 30 caracteres, descripciones hasta 90. **Si cambia un precio en `precios.js`, el anuncio se cambia el mismo día** (ver [PRECIOS.md](PRECIOS.md)).

#### Diseño web

Ruta visible: mtstudio.dev/diseno-web/precios

| Título | Caracteres |
|---|---|
| Diseño de Páginas Web | 21 |
| Páginas Web para tu Negocio | 27 |
| Landing Page desde $200.000 | 27 |
| Sitio Web desde $350.000 | 24 |
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
| Landing page desde $200.000 y sitio de hasta 5 páginas desde $350.000, con dominio. | 83 |
| Hicimos tufactu.app: sitio, landing y sistema, en producción desde septiembre de 2026. | 86 |
| Escribinos por WhatsApp o dejá tu consulta en la página. Respondemos dentro de 24 horas. | 88 |

#### Landing page

Ruta visible: mtstudio.dev/landing-page/precios

| Título | Caracteres |
|---|---|
| Landing Page para tu Negocio | 28 |
| Diseño de Landing Pages | 23 |
| Landing Page desde $200.000 | 27 |
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
| Landing page desde $200.000, con dominio y alojamiento por 1 año incluidos. | 75 |
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

**No verificado:** si Google acepta "Mercado Pago" en el texto del anuncio. Es una marca de terceros y puede tener restricciones. Si lo rechaza, se reemplaza por "pagos online". El anuncio de Tiendas online quedó aprobado (leído el 24/11/2026).

#### Tiendanube

Ruta visible: mtstudio.dev/tiendanube/precios

| Título | Caracteres |
|---|---|
| Armado y Diseño Tiendanube | 26 |
| Tu Tienda en Tiendanube | 23 |
| Diseño de Tiendas Tiendanube | 28 |
| Desde $130.000 en Diciembre | 27 |
| Entrega en 5 Días Hábiles | 25 |
| Precio Final con Factura C | 26 |
| Partners Certificados | 21 |
| Hasta 30 Productos Cargados | 27 |
| 30 Días de Soporte | 18 |
| Lista para Vender | 17 |
| Escribinos por WhatsApp | 23 |
| Pedí tu Presupuesto | 19 |

| Descripción | Caracteres |
|---|---|
| Armamos tu tienda en Tiendanube con tu marca: diseño, productos, envíos y medios de pago. | 89 |
| Precio de diciembre: $130.000 hasta 30 productos, para tiendas contratadas hasta el 31/12. | 90 |
| Entrega en 5 días hábiles desde que tenemos tu material. Precio final, con Factura C. | 85 |
| Escribinos por WhatsApp o dejá tu consulta en la página. Respondemos dentro de 24 horas. | 88 |

**El 1/1/2027 termina el precio de diciembre**, el mismo día que cambia la página (ver [PRECIOS.md](PRECIOS.md)). En el anuncio cambian el título "Desde $130.000 en Diciembre" y la descripción "Precio de diciembre: …".

## Recursos

- **Vínculos a sitios:** "Páginas web y landings" → /servicios/diseno-web · "Tiendas online" → /servicios/ecommerce · "Caso: tufactu.app" → /portfolio/factu · "Caso: Carga Directa" → /portfolio/cargadirecta · "Contacto" → /contacto
- **Textos destacados:** Respondemos en 24 horas · Dominio y hosting 1 año · Atención por WhatsApp · Precios desde $200.000
  - **El grupo Tiendas online tiene los suyos:** "Respondemos en 24 horas" y "Atención por WhatsApp". Se agregaron el 5/11/2026 con el OK de Ezequiel, porque /servicios/ecommerce no muestra precios ni dice que incluya dominio y hosting.
  - Según la [ayuda de Google Ads](https://support.google.com/google-ads/answer/6079510?hl=es-419), si un grupo tiene textos destacados propios, sus anuncios usan esos "en lugar de" los de la campaña. La versión en inglés agrega que con uno solo en el grupo ya no sale ninguno de la campaña. La versión en castellano tiene además una frase que dice lo contrario, así que conviene mirar los primeros anuncios de tiendas que se publiquen.
  - Si se suma a la campaña un texto destacado que también valga para tiendas, hay que agregarlo al grupo.
  - **El grupo Tiendanube tiene cinco propios** (24/11/2026), para que no salgan "Precios desde $200.000" ni "Dominio y hosting 1 año", que en Tiendanube no corresponden: "Entrega en 5 Días Hábiles", "Precio Final, Factura C", "30 Días de Soporte", "Respondemos en 24 horas" y "Atención por WhatsApp". Los dos últimos reusan los recursos que ya existían en la cuenta.
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
   - **Hecho el 5/11/2026**, con la API.
2. **Cargar sus destinos** (`AW-…/etiqueta`) en Vercel, en Production: `VITE_ADS_WHATSAPP` y `VITE_ADS_FORMULARIO`. Después hay que volver a desplegar. Ver [MEDICION.md](MEDICION.md).
   - **Hecho el 5/11/2026**, como variables de tipo **Config**. No son secretas, porque igual quedan en el JS público del sitio, y así se pueden releer en Vercel si hay un error de tipeo.
3. **Agregar `AW-18558070627` como destino** de la etiqueta de Google `GT-5R3WSDGT`, para que el `send_to` llegue sin un segundo `gtag('config', 'AW-…')`. Según la [ayuda de Google](https://support.google.com/google-ads/answer/12329709?hl=es):
   - **Cómo llegar a la etiqueta desde GA4:** Administrador → Recogida (o Recopilación) y modificación de datos → Flujos de datos → mtstudio.dev → Configurar ajustes de etiquetas.
   - **Ahí:** pestaña **Administrador** → **Gestionar la etiqueta de Google** (en la versión latinoamericana, "Administrar la etiqueta de Google") → sección Destinos → **+ Destino** → **Elegir un destino** → la cuenta de MT Studio, `AW-18558070627` → **Guardar**.
   - **Cuidado:** agregar un destino lo saca de cualquier otra etiqueta que lo tuviera, y la ayuda advierte que puede ser difícil de deshacer. Si en la lista aparece la cuenta de Ads de TuFactu, no hay que elegirla.
   - **Para comprobarlo:** `https://www.googletagmanager.com/gtag/js?id=G-WYJ9WZM84Z` tiene que traer `AW-18558070627` adentro. La ayuda no dice cuánto tarda en verse.
   - **Hecho el 5/11/2026.** Minutos después, el `gtag.js` ya traía `AW-18558070627`, y en la cuenta no apareció ninguna conversión nueva.
4. **Vincular GA4 con la cuenta.** **No importar** los eventos clave de GA4 como conversiones de Ads: se contarían dos veces.
   - Todo indica que el vínculo ya existe: las tres conversiones de GA4 de la cuenta son de tipos que solo crea ese vínculo (`GOOGLE_ANALYTICS_4_*`). No está comprobado desde GA4.
5. **Probar** con Google interceptado, como dice MEDICION.md, y comprobar en producción.
   - **Hecho el 5/11/2026**, con `ab462ed` publicado y un navegador real a 390 px:
     - el botón flotante y el de la primera pantalla de /servicios/diseno-web mandan la conversión "WhatsApp";
     - el formulario manda "Formulario enviado";
     - cargar una página no manda ninguna de las dos;
     - el HTML sigue con un solo `gtag('config')`.

## Sin publicidad personalizada

Lo decidió Ezequiel el 5/11/2026. La etiqueta lleva `gtag('set', 'allow_ad_personalization_signals', false)`:

- ningún envío de GA4 ni de Ads se usa para publicidad personalizada;
- Ads deja de recibir los envíos de remarketing (`viewthroughconversion` y `rmkt/collect`);
- las conversiones se siguen midiendo. La [ayuda de Google Ads](https://support.google.com/google-ads/answer/9606827?hl=es-419) dice: "este parámetro no inhabilita el seguimiento de conversiones".

Si algún día se quiere remarketing, hay que sacar esa línea de `vite.config.js` y cambiar la política de privacidad.

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
