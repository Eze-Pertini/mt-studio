import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '@data/config'

const SITE_NAME = 'MT Studio'
const OG_IMAGE  = `${SITE_URL}/og-image.jpg`
const DEFAULT_DESCRIPTION = 'Estudio digital independiente especializado en diseño web, ecommerce, sistemas y automatización. Soluciones a medida para negocios que quieren resultados concretos.'

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
}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Diseño & Desarrollo Digital Premium`
  const canonical  = url ? `${SITE_URL}${url}` : SITE_URL
  // `image` llega como null desde los posts sin portada: el default del parametro
  // solo cubre undefined, asi que el fallback tiene que ser explicito.
  const ogImage    = absoluteUrl(image) ?? OG_IMAGE

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  )
}
