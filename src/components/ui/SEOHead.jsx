import React from 'react'
import { Head } from 'vite-react-ssg'
import { SITE_URL } from '@data/config'
import { titleWidth, TITLE_MAX_WIDTH } from '@data/seo-width'

const SITE_NAME = 'MT Studio'
const OG_IMAGE  = `${SITE_URL}/og-image.jpg`
const DEFAULT_TITLE = 'MT Studio — Diseño y desarrollo web a medida'
const DEFAULT_DESCRIPTION = 'Estudio de diseño y desarrollo web en Argentina. Sitios, tiendas online y sistemas a medida para negocios que necesitan resultados concretos.'

/** Los crawlers sociales exigen URL absoluta en og:image; las rutas de los datos son relativas. */
function absoluteUrl(path) {
  if (!path) return null
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  url,
  type = 'website',
  noindex = false,
  jsonLd = null,
}) {
  const brandedTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE

  // Google recorta el title por ancho, no por caracteres. Cuando el sufijo de
  // marca empuja el titulo mas alla del corte, el sufijo es justamente lo que
  // se pierde, y encima se lleva puesto el final del titulo real. En ese caso
  // conviene publicarlo sin marca: el dominio ya aparece arriba del resultado.
  const fitsWithBrand = titleWidth(brandedTitle) <= TITLE_MAX_WIDTH
  const documentTitle = fitsWithBrand || !title ? brandedTitle : title

  // og:title no tiene limite de ancho y se lee fuera del sitio, donde la marca
  // si aporta contexto, asi que ahi va siempre la version completa.
  const socialTitle = brandedTitle

  const canonical = url ? `${SITE_URL}${url}` : SITE_URL
  // `image` llega como null desde los posts sin portada: el default del parametro
  // solo cubre undefined, asi que el fallback tiene que ser explicito.
  const ogImage = absoluteUrl(image) ?? OG_IMAGE

  return (
    <Head>
      {/* Primary */}
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title"       content={socialTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={socialTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* Datos estructurados. Un solo bloque por pagina, con las entidades
          base y el nodo propio del tipo de contenido. */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  )
}
