/**
 * MT Studio — Precios "desde"
 * ─────────────────────────────────────────────────────────────────
 * Este es el único archivo que hay que tocar para cambiar un precio, y se
 * puede editar desde github.com con el lápiz: al guardar el cambio en main,
 * Vercel compila y publica solo. Paso a paso en docs/PRECIOS.md.
 *
 * Cada servicio con precios lleva:
 *   paquetes  lista de { nombre, desde }.
 *             desde: número entero, sin puntos ni signos (250000, no "$250.000").
 *             null = ese paquete no se muestra.
 *   incluye   lo que va con cualquiera de los paquetes, sin el verbo: la página
 *             arma "Incluye" o "Incluyen" según cuántos paquetes se vean.
 *             Es una promesa: tiene que ser cierta (docs/AFIRMACIONES.md).
 *
 * Si cambiás un precio, cambiá también el del anuncio en Google Ads: el
 * anuncio y la página tienen que decir lo mismo.
 */

// 'ARS' (pesos) o 'USD' (dólares). Vale para todos los precios.
export const MONEDA = 'ARS'

export const precios = {
  'diseno-web': {
    paquetes: [
      { nombre: { es: 'Landing page', en: 'Landing page' }, desde: 150000 },
      { nombre: { es: 'Sitio web de hasta 5 páginas', en: 'Website with up to 5 pages' }, desde: 250000 },
    ],
    incluye: { es: 'dominio y alojamiento por 1 año', en: 'domain and hosting for 1 year' },
  },
}

const SIMBOLO = {
  ARS: { es: '$', en: 'ARS' },
  USD: { es: 'US$', en: 'USD' },
}

// Un precio mal cargado tiene que frenar el build, no publicarse como "$NaN":
// si el build falla, Vercel deja publicada la versión anterior.
if (!SIMBOLO[MONEDA]) throw new Error(`precios.js: MONEDA tiene que ser 'ARS' o 'USD', no "${MONEDA}"`)
for (const [slug, s] of Object.entries(precios)) {
  for (const p of s.paquetes) {
    if (p.desde !== null && !(Number.isInteger(p.desde) && p.desde > 0)) {
      throw new Error(`precios.js: el precio de "${p.nombre.es}" (${slug}) tiene que ser un número entero, sin puntos ni signos (ej. 250000)`)
    }
  }
}

/** Paquetes con precio de un servicio, listos para mostrar; null si no hay ninguno. */
export function preciosDe(slug, lang) {
  const s = precios[slug]
  const en = lang === 'en'
  const paquetes = (s?.paquetes ?? [])
    .filter((p) => p.desde !== null)
    .map((p) => ({
      nombre: en ? p.nombre.en : p.nombre.es,
      // A mano y no con Intl: Node y el navegador pueden separar el símbolo con
      // espacios distintos, y esa diferencia rompe la hidratación del HTML.
      monto: `${SIMBOLO[MONEDA][en ? 'en' : 'es']} ${String(p.desde).replace(/\B(?=(\d{3})+(?!\d))/g, en ? ',' : '.')}`,
    }))
  if (!paquetes.length) return null
  const texto = en ? s.incluye?.en : s.incluye?.es
  let incluye = null
  if (texto) {
    incluye = en
      ? `${texto.charAt(0).toUpperCase()}${texto.slice(1)} included.`
      : `${paquetes.length === 1 ? 'Incluye' : 'Incluyen'} ${texto}.`
  }
  return { paquetes, incluye }
}
