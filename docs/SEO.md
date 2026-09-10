# SEO — arquitectura y mantenimiento

## Qué es este proyecto

**mt-studio es el sitio de MT Studio: Vite 5 + React 18 + React Router 6 + Tailwind 3, desplegado como estático en Vercel.**

No es Laravel, no usa Inertia y no tiene backend. La confusión es fácil porque uno de los proyectos del portfolio, Factu, sí es Laravel 12 + Inertia + React 19 + PostgreSQL, pero eso vive en otro repositorio. Cualquier indicación sobre SSR de Inertia, `config/inertia.php`, `HandleInertiaRequests` o `php artisan test` no aplica acá.

- Producción: **https://mtstudio.dev** (apex). `www` redirige con 308.
- Deploy: Vercel, proyecto `mt-studio` en el equipo `ezequiels-projects`, desde `main`.
- Build: `npm run build` → `vite-react-ssg build` + generación de sitemap/robots + verificación.

## Cómo funciona

### Prerender

`vite-react-ssg` genera **un HTML por ruta** en tiempo de build. Sin esto, todas las URLs devolvían el mismo shell vacío: los crawlers sociales, que no ejecutan JavaScript, veían el mismo título y la misma descripción para todo el sitio.

Las rutas se definen en [`src/routes.jsx`](../src/routes.jsx). Las que tienen parámetro declaran `getStaticPaths`, que lee los datos y devuelve las URLs concretas a generar. **Agregar un proyecto a `projects.js` genera su HTML solo**, sin tocar el routing.

La ruta comodín se prerenderiza a `404.html`, que Vercel sirve con status 404 real. Por eso `vercel.json` **no** tiene un rewrite catch-all: si lo tuviera, cualquier URL inexistente devolvería 200.

### Metadatos

[`src/components/ui/SEOHead.jsx`](../src/components/ui/SEOHead.jsx) es el único lugar donde se escribe el `<head>`. Recibe `title`, `description`, `url`, `image`, `type`, `noindex` y `jsonLd`, y emite title, description, canonical, Open Graph, Twitter Card y los datos estructurados.

`index.html` **no declara ninguno de esos tags**. Si se agregan ahí, salen duplicados en el HTML final.

El sufijo ` — MT Studio` se agrega solo si el título entra en los 600px que muestra Google. [`src/data/seo-width.js`](../src/data/seo-width.js) tiene la tabla de anchos reales de Arial 20px para medirlo; contar caracteres da el resultado equivocado, porque una `M` mide el doble que una `i`. Cuando no entra, el `<title>` sale sin marca y `og:title` la conserva.

### Datos estructurados

[`src/data/schema.js`](../src/data/schema.js). `Organization` y `Person` se definen una sola vez con `@id` fijo (`#organization`, `#person`) y todo lo demás las referencia. Las dos viajan en el `@graph` de cada página porque una referencia a un `@id` que no está en el documento no resuelve.

**Regla que no se negocia: solo se marca contenido visible en la página.** Sin `aggregateRating`, sin precios que no figuren, sin fechas que el visitante no pueda ver. Si hace falta marcar algo, primero se agrega a la página.

### Enlazado interno

[`src/data/related.js`](../src/data/related.js). Las relaciones se declaran en los datos con `relatedServices`, `relatedProjects` y `relatedPosts`, usando el slug del destino. El componente `RelatedLinks` las renderiza con el título del destino como texto del enlace — nunca "ver más".

### Sitemap y robots

[`scripts/generate-seo-files.mjs`](../scripts/generate-seo-files.mjs) los escribe en `dist/` leyendo los mismos módulos de datos que consume la app. El `lastmod` sale del campo `updatedAt` de cada ficha.

### Verificación

[`scripts/verify-prerender.mjs`](../scripts/verify-prerender.mjs) corre al final del build y **lo hace fallar** si alguna página quedó sin contenido renderizado, sin canonical o sin title, si dos páginas repiten título o descripción, o si una relación declarada apunta a una página que no existe.

Es la red que evita que un error de prerender llegue a producción en silencio.

## Agregar contenido nuevo

### Un proyecto

En `src/data/projects.js`, con estos campos:

| Campo | Para qué |
|---|---|
| `slug` | La URL: `/portfolio/<slug>` |
| `title` | El `<h1>` y el nombre en las tarjetas |
| `description` | Se ve en la tarjeta y es la meta description por defecto |
| `updatedAt` | `lastmod` del sitemap. Fecha real del último cambio |
| `seoTitle` | Opcional. Reemplaza el `<title>` sin tocar el `<h1>` |
| `seoDescription` | Opcional. Reemplaza la meta description |
| `schemaType` | `SoftwareApplication` si es una app publicada, `CreativeWork` si es un trabajo para un cliente |
| `image` | Portada. También es la imagen de las tarjetas sociales |
| `relatedServices` / `relatedPosts` | Enlazado interno, por slug |

Con eso, el build genera el HTML, lo suma al sitemap, arma el JSON-LD y valida los enlaces.

Antes de publicar, mirá el ancho del título: si pasa de 600px con la marca, `SEOHead` la va a omitir sola.

### Un artículo

Igual, en `src/data/blog.js`. Suma `date`, que se muestra en el post y alimenta `datePublished`, y `excerpt`.

### Un servicio

En `src/data/services.js`. Los servicios usan `seo.title` y `seo.description` en lugar de `seoTitle` / `seoDescription`: es el mismo mecanismo con otro nombre, y ya existía antes.

Un servicio con `draft: true` **no** aparece en el listado, ni en el sitemap, ni en el prerender, y responde `noindex` si alguien entra directo. Es para escribir contenido sin publicarlo a medias. Sacar la bandera cuando esté terminado.

## Pendiente

### En el código — buscá `TODO(SEO)`

- **Fechas.** Los `updatedAt` de proyectos, artículos y servicios, y los `date` de los tres artículos, están puestos en `2026-09-10` como marcador. Mientras no se completen, el sitemap declara todo el contenido como modificado ese día.
- **`/servicios/integracion-arca`.** Está el esqueleto en `services.js` con `draft: true` y todos los textos sin redactar. Es la página que falta para "integración facturación electrónica ARCA", que hoy solo aparece de costado en el caso de Factu. Ya quedó enlazada con Factu y con la guía del blog.
- **La ciudad en `/nosotros`.** El título dice "Argentina" porque la página no menciona Buenos Aires en su texto visible. Agregando esa línea, el título puede pasar a "Estudio de desarrollo web en Buenos Aires" (539px, entra con la marca) y captura la búsqueda local.
- **La voz en plural.** Varios textos visibles de servicios están en primera persona del plural ("Desarrollamos", "Nos ocupamos"). Las meta descriptions ya se pasaron a voz impersonal; el contenido de las páginas no.

### Tareas manuales

**Ahora, apenas se despliegue:**

1. **Google Search Console.** Crear la propiedad de **tipo Dominio** (verificación por DNS), no la de prefijo de URL: cubre apex y www a la vez y evita mantener dos propiedades.
2. **Enviar el sitemap** desde Sitemaps: `https://mtstudio.dev/sitemap.xml`.
3. **Pedir reindexación** con la Inspección de URLs, una por una para las principales: home, `/servicios`, `/portfolio`, los dos proyectos y los tres artículos. Sin esto, Google puede tardar semanas en volver a rastrear y seguir mostrando los títulos viejos.

**Después:**

4. Bing Webmaster Tools, que además importa la configuración de Search Console.
5. Validar con la [Prueba de resultados enriquecidos](https://search.google.com/test/rich-results) la home, una ficha de proyecto y un artículo.
6. Medir con PageSpeed Insights la home y una ficha de proyecto.
7. Enlazar el portfolio desde GitHub, LinkedIn e Instagram. Son los tres `sameAs` declarados, y el enlace de vuelta es lo que los convierte en señal de identidad.
