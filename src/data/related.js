import { projects } from './projects.js'
import { posts } from './blog.js'
import { publishedServices } from './services.js'

/**
 * MT Studio — Enlazado interno
 * ─────────────────────────────────────────────────────────────────
 * Las relaciones se declaran en los datos (relatedServices, relatedProjects,
 * relatedPosts) con el slug del destino, no en el JSX. Asi una relacion se
 * escribe una vez, se puede recorrer en los dos sentidos y scripts/verify-
 * prerender.mjs puede validarla en cada build: un slug que no existe, o que
 * apunta a un borrador sin pagina, rompe el build en vez de publicar un
 * enlace roto.
 */

const KINDS = {
  servicio: {
    label: 'Servicio',
    find: (slug) => publishedServices.find((s) => s.slug === slug),
    href: (item) => `/servicios/${item.slug}`,
    blurb: (item) => item.tagline,
  },
  proyecto: {
    label: 'Proyecto',
    find: (slug) => projects.find((p) => p.slug === slug),
    href: (item) => `/portfolio/${item.slug}`,
    blurb: (item) => item.tagline,
  },
  articulo: {
    label: 'Artículo',
    find: (slug) => posts.find((p) => p.slug === slug),
    href: (item) => `/blog/${item.slug}`,
    blurb: (item) => item.excerpt,
  },
}

function resolve(kind, slugs = []) {
  const spec = KINDS[kind]
  return slugs
    .map((slug) => {
      const item = spec.find(slug)
      if (!item) return null
      return { kind, label: spec.label, to: spec.href(item), title: item.title, blurb: spec.blurb(item) }
    })
    .filter(Boolean)
}

/** Devuelve las relaciones declaradas de una ficha, ya resueltas y en orden. */
export function resolveRelated(entry) {
  if (!entry) return []
  return [
    ...resolve('servicio', entry.relatedServices),
    ...resolve('proyecto', entry.relatedProjects),
    ...resolve('articulo', entry.relatedPosts),
  ]
}

/** Todas las relaciones declaradas del sitio, para validarlas en el build. */
export function allDeclaredRelations() {
  const out = []
  const collect = (origin, entry) => {
    for (const [kind, slugs] of [
      ['servicio', entry.relatedServices],
      ['proyecto', entry.relatedProjects],
      ['articulo', entry.relatedPosts],
    ]) {
      for (const slug of slugs ?? []) out.push({ origin, kind, slug })
    }
  }
  for (const s of publishedServices) collect(`servicios/${s.slug}`, s)
  for (const p of projects) collect(`portfolio/${p.slug}`, p)
  for (const p of posts) collect(`blog/${p.slug}`, p)
  return out
}

export { KINDS }
