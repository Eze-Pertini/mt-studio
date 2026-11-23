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
 *   nota      opcional: una frase que va debajo del precio, tal cual, en
 *             { es, en }. Sirve para una promoción con fecha o si el precio es final.
 *   adicional opcional: lo que cuesta de más, en { es, en }. No va en la primera
 *             pantalla sino debajo de "Qué incluye", para que no la alargue.
 *
 * Si cambiás un precio, cambiá también el del anuncio en Google Ads: el
 * anuncio y la página tienen que decir lo mismo.
 */

// 'ARS' (pesos) o 'USD' (dólares). Vale para todos los precios.
export const MONEDA = 'ARS'

export const precios = {
  'diseno-web': {
    paquetes: [
      { nombre: { es: 'Landing page', en: 'Landing page' }, desde: 200000 },
      { nombre: { es: 'Sitio web de hasta 5 páginas', en: 'Website with up to 5 pages' }, desde: 350000 },
    ],
    incluye: { es: 'dominio y alojamiento por 1 año', en: 'domain and hosting for 1 year' },
  },
  // Precio de diciembre de 2026. El 1/1/2027 pasa a 150000 y la nota pierde
  // la promoción: paso a paso en docs/PRECIOS.md.
  'tiendanube': {
    paquetes: [
      { nombre: { es: 'Tienda de hasta 30 productos', en: 'Store with up to 30 products' }, desde: 130000 },
    ],
    //   es un espacio que no corta la línea: así "Factura C" y "$ 20.000"
    // no quedan partidos en dos renglones.
    nota: {
      es: 'Precio de diciembre, para tiendas contratadas hasta el 31/12. Precio final, con Factura C.',
      en: 'December price, for stores booked by December 31. Final price (Type C invoice).',
    },
    adicional: {
      es: 'Cada 20 productos más, $ 20.000.',
      en: 'Every 20 extra products, ARS 20,000.',
    },
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
  for (const campo of ['nota', 'adicional']) {
    const v = s[campo]
    if (v && !(typeof v.es === 'string' && v.es && typeof v.en === 'string' && v.en)) {
      throw new Error(`precios.js: "${campo}" de "${slug}" tiene que tener el texto en castellano (es) y en inglés (en)`)
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
  const nota = s.nota ? (en ? s.nota.en : s.nota.es) : null
  const adicional = s.adicional ? (en ? s.adicional.en : s.adicional.es) : null
  return { paquetes, incluye, nota, adicional }
}
