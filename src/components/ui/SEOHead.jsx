import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_URL, EMAIL } from '@data/config'

const SITE_NAME = 'MT Studio'
const OG_IMAGE  = `${SITE_URL}/og-image.jpg`
const DEFAULT_DESCRIPTION = 'Estudio digital independiente especializado en diseño web, ecommerce, sistemas y automatización. Soluciones a medida para negocios que quieren resultados concretos.'

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  image = OG_IMAGE,
  url,
  type = 'website',
  noindex = false,
}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Diseño & Desarrollo Digital Premium`
  const canonical  = url ? `${SITE_URL}${url}` : SITE_URL

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
      <meta property="og:image"       content={image} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />
    </Helmet>
  )
}
