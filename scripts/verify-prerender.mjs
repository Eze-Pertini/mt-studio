/**
 * MT Studio — Verificación del prerender
 * ─────────────────────────────────────────────────────────────────
 * Corre después del build y falla si el HTML generado no sirve para
 * indexar. La idea es que un error de prerender no llegue a produccion
 * en silencio: si el SSG deja de inyectar el head, o una pagina nueva se
 * olvida de SEOHead, el build se cae acá y no en Search Console dos
 * semanas despues.
 *
 * Comprueba, para cada HTML de dist/:
 *   1. que #root tenga contenido renderizado (no el shell vacio del SPA)
 *   2. que haya exactamente un <title> y un canonical
 *   3. que title y description no se repitan entre paginas
 *   4. que cada relacion declarada en los datos apunte a una pagina que
 *      existe: un slug mal escrito, o uno que apunta a un borrador sin
 *      pagina generada, rompe el build en vez de publicar un enlace roto
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

import { allDeclaredRelations } from '../src/data/related.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

// Recorrido propio en vez de fs.globSync: esa API recien es estable en
// Node 24 y el build de Vercel puede correr sobre una version anterior.
function findHtml(dir, base = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const rel = base ? `${base}/${e.name}` : e.name
    if (e.isDirectory()) return findHtml(join(dir, e.name), rel)
    return e.name.endsWith('.html') ? [rel] : []
  })
}

const files = findHtml(DIST).sort()

if (files.length === 0) {
  console.error('[verify] no hay ningun HTML en dist/. ¿Corrio el build?')
  process.exit(1)
}

const errors = []
const titles = new Map()
const descriptions = new Map()

const first = (html, re) => {
  const m = html.match(re)
  return m ? m[1].trim() : null
}
const count = (html, re) => (html.match(re) ?? []).length

for (const file of files) {
  const html = readFileSync(join(DIST, file), 'utf8')
  const where = relative('.', file)

  // 1. contenido renderizado
  // El contenedor sale como <div id="root" data-server-rendered="true">, asi
  // que hay que contemplar los atributos: buscar el string exacto del shell
  // vacio no detectaria nada.
  const root = html.match(/<div id="root"[^>]*>([\s\S]*)<\/div>\s*<script/)
  if (!root) {
    errors.push(`${where}: no se encontro el contenedor #root`)
  } else if (root[1].trim().length < 500) {
    errors.push(`${where}: #root casi vacio (${root[1].trim().length} bytes), la pagina no se prerenderizo`)
  }
  if (!/data-server-rendered="true"/.test(html)) {
    errors.push(`${where}: falta data-server-rendered, el HTML salio del shell y no del prerender`)
  }

  // 2. head unico y completo
  const nTitles = count(html, /<title[^>]*>/g)
  if (nTitles === 0) errors.push(`${where}: sin <title>`)
  if (nTitles > 1) errors.push(`${where}: ${nTitles} <title> (deberia haber uno)`)

  const nCanonical = count(html, /rel="canonical"/g)
  if (nCanonical === 0) errors.push(`${where}: sin link rel="canonical"`)
  if (nCanonical > 1) errors.push(`${where}: ${nCanonical} canonical (deberia haber uno)`)

  const description = first(html, /name="description" content="([^"]*)"/)
  if (!description) errors.push(`${where}: sin meta description`)

  // 3. unicidad entre paginas
  const title = first(html, /<title[^>]*>([^<]*)<\/title>/)
  // El 404 no se indexa: puede repetir lo que quiera.
  if (file === '404.html') continue

  if (title) {
    if (titles.has(title)) errors.push(`${where}: title repetido de ${titles.get(title)} -> "${title}"`)
    else titles.set(title, where)
  }
  if (description) {
    if (descriptions.has(description)) {
      errors.push(`${where}: description repetida de ${descriptions.get(description)}`)
    } else {
      descriptions.set(description, where)
    }
  }
}

// 4. las relaciones declaradas apuntan a paginas que existen
const PATH_BY_KIND = { servicio: 'servicios', proyecto: 'portfolio', articulo: 'blog' }
const generated = new Set(files)

for (const { origin, kind, slug } of allDeclaredRelations()) {
  const target = `${PATH_BY_KIND[kind]}/${slug}.html`
  if (!generated.has(target)) {
    errors.push(`${origin}: enlaza a ${kind} "${slug}" y no existe ${target}`)
  }
}

if (errors.length > 0) {
  console.error(`\n[verify] ${errors.length} problema(s) en ${files.length} paginas:\n`)
  for (const e of errors) console.error(`  x ${e}`)
  console.error('')
  process.exit(1)
}

console.log(`[verify] ${files.length} paginas prerenderizadas, con head unico y contenido en el HTML`)
