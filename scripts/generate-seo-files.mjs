/**
 * MT Studio — Generacion de sitemap.xml y robots.txt
 * ─────────────────────────────────────────────────────────────────
 * Corre despues de `vite build` y escribe los dos archivos dentro de dist/.
 * Las URLs salen de los mismos datos que renderiza la app, asi que agregar
 * un proyecto, un post o un servicio los suma al sitemap sin tocar nada mas.
 *
 * Vercel resuelve el sistema de archivos antes que los rewrites, asi que con
 * estos archivos presentes /robots.txt y /sitemap.xml dejan de caer en el
 * catch-all que devolvia el HTML del SPA.
 */
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SITE_URL } from '../src/data/config.js'
import { projects } from '../src/data/projects.js'
import { posts } from '../src/data/blog.js'
import { services } from '../src/data/services.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT  = join(ROOT, 'dist')

// Solo se indexa español: el ingles vive en localStorage y no tiene URL propia.
const FALLBACK_DATE = new Date().toISOString().slice(0, 10)

/** @type {{loc: string, lastmod: string, changefreq: string, priority: string}[]} */
const urls = []

const add = (path, { lastmod, changefreq = 'monthly', priority = '0.7' } = {}) => {
  urls.push({
    loc: `${SITE_URL}${path}`,
    lastmod: lastmod ?? FALLBACK_DATE,
    changefreq,
    priority,
  })
}

// ─── Rutas fijas ──────────────────────────────────────────────────
add('/',          { changefreq: 'weekly',  priority: '1.0' })
add('/servicios', { changefreq: 'monthly', priority: '0.9' })
add('/portfolio', { changefreq: 'weekly',  priority: '0.9' })
add('/nosotros',  { changefreq: 'yearly',  priority: '0.6' })
add('/blog',      { changefreq: 'weekly',  priority: '0.7' })
add('/contacto',  { changefreq: 'yearly',  priority: '0.6' })

// ─── Contenido ────────────────────────────────────────────────────
for (const s of services) add(`/servicios/${s.slug}`, { lastmod: s.updatedAt, priority: '0.8' })
for (const p of projects) add(`/portfolio/${p.slug}`, { lastmod: p.updatedAt, priority: '0.8' })
for (const p of posts)    add(`/blog/${p.slug}`,      { lastmod: p.updatedAt, priority: '0.6' })

// ─── Salida ───────────────────────────────────────────────────────
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Los assets con hash tienen que ser rastreables o Google no puede
# renderizar la pagina para indexarla.
Allow: /assets/

Sitemap: ${SITE_URL}/sitemap.xml
`

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })
writeFileSync(join(OUT, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(join(OUT, 'robots.txt'), robots, 'utf8')

console.log(`[seo] sitemap.xml con ${urls.length} URLs y robots.txt escritos en dist/`)
