import { SITE_URL, SOCIAL, STUDIO, EMAIL } from './config.js'

/**
 * MT Studio — Datos estructurados (JSON-LD)
 * ─────────────────────────────────────────────────────────────────
 * Organization y Person se definen una sola vez, con @id fijo, y el resto
 * de los schemas los referencia con { '@id': ... } en vez de repetir los
 * datos. Asi hay una unica fuente de verdad por entidad y Google puede
 * unificar los nodos.
 *
 * Los @id se resuelven dentro del mismo @graph, asi que las dos entidades
 * viajan en todas las paginas: una referencia a un nodo que no esta en el
 * documento no resuelve.
 *
 * Regla: solo se marca contenido visible en la pagina. Nada de
 * aggregateRating, precios ni fechas que el visitante no pueda ver.
 */

export const ORG_ID     = `${SITE_URL}/#organization`
export const PERSON_ID  = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: STUDIO.name,
  url: SITE_URL,
  email: EMAIL,
  // El pie enlaza estos tres perfiles; no se declara ninguno que no este a la vista.
  sameAs: [SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.github],
  founder: { '@id': PERSON_ID },
  areaServed: STUDIO.location,
}

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: STUDIO.founder,
  // Tal cual figura bajo su foto en /nosotros.
  jobTitle: 'Fundador y desarrollador',
  url: `${SITE_URL}/nosotros`,
  sameAs: [SOCIAL.linkedin, SOCIAL.github],
  worksFor: { '@id': ORG_ID },
}

/** Las dos entidades base, presentes en todas las paginas. */
const base = () => [organization, person]

const graph = (...nodes) => ({
  '@context': 'https://schema.org',
  '@graph': [...base(), ...nodes.flat().filter(Boolean)],
})

/** Migas de pan. Recibe los mismos pasos que se ven en pantalla. */
export function breadcrumb(steps) {
  // El @id se ancla a la pagina: dos documentos distintos no pueden declarar
  // dos BreadcrumbList diferentes bajo el mismo identificador.
  const path = steps[steps.length - 1]?.path ?? '/'
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${path}#breadcrumb`,
    itemListElement: steps.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      item: `${SITE_URL}${step.path}`,
    })),
  }
}

// ─── Por tipo de pagina ───────────────────────────────────────────

export function homeSchema() {
  return graph({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: STUDIO.name,
    url: SITE_URL,
    inLanguage: 'es-AR',
    publisher: { '@id': ORG_ID },
  })
}

export function pageSchema(steps) {
  return graph(breadcrumb(steps))
}

export function aboutSchema(steps) {
  return graph(
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/nosotros#profilepage`,
      url: `${SITE_URL}/nosotros`,
      inLanguage: 'es-AR',
      mainEntity: { '@id': PERSON_ID },
    },
    breadcrumb(steps),
  )
}

export function projectSchema(project, steps) {
  const url = `${SITE_URL}/portfolio/${project.slug}`
  // El tipo se declara en los datos. Inferirlo de la presencia de una URL
  // marcaba una tienda WooCommerce como SoftwareApplication.
  const type = project.schemaType ?? 'CreativeWork'
  const isApp = type === 'SoftwareApplication'

  return graph(
    {
      '@type': type,
      '@id': `${url}#project`,
      name: project.title,
      description: project.description,
      url,
      inLanguage: 'es-AR',
      image: project.image ? `${SITE_URL}${project.image}` : undefined,
      creator: { '@id': ORG_ID },
      ...(isApp
        ? {
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            // La URL del producto, que en la pagina figura como "Ver sitio".
            // Sin los parametros de campaña: sameAs identifica a la entidad,
            // y ?utm_source no forma parte de su identidad.
            sameAs: project.url.split('?')[0],
          }
        : {}),
      ...(project.tags?.length ? { keywords: project.tags.join(', ') } : {}),
    },
    breadcrumb(steps),
  )
}

export function postSchema(post, steps) {
  const url = `${SITE_URL}/blog/${post.slug}`
  return graph(
    {
      '@type': 'BlogPosting',
      '@id': `${url}#post`,
      headline: post.title,
      description: post.excerpt,
      url,
      inLanguage: 'es-AR',
      // La fecha se muestra en el encabezado del articulo.
      ...(post.date ? { datePublished: post.date } : {}),
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORG_ID },
      ...(post.image ? { image: `${SITE_URL}${post.image}` } : {}),
      ...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
    },
    breadcrumb(steps),
  )
}

export function serviceSchema(service, steps) {
  return graph(
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/servicios/${service.slug}#service`,
      name: service.title,
      description: service.description,
      url: `${SITE_URL}/servicios/${service.slug}`,
      provider: { '@id': ORG_ID },
      areaServed: STUDIO.location,
    },
    breadcrumb(steps),
  )
}
