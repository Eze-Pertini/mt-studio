import manifest from './image-manifest.json'

/**
 * MT Studio — Imágenes responsive
 * ─────────────────────────────────────────────────────────────────
 * Devuelve el srcSet de una imagen a partir de su ruta lógica, la misma
 * que figura en los datos. Las variantes las genera
 * scripts/generate-image-variants.py y viven en image-manifest.json.
 *
 * Si una imagen no está en el manifiesto, devuelve solo la original: el
 * sitio sigue funcionando, nada más que sin variantes. Es a propósito —
 * agregar una imagen y olvidarse de correr el script no puede romper
 * una página.
 */
export function responsiveImage(src, sizes) {
  const entry = src && manifest[src]
  if (!entry) return { src, srcSet: undefined, sizes: undefined }

  const srcSet = [
    ...entry.variants.map((v) => `${v.src} ${v.width}w`),
    `${src} ${entry.width}w`,
  ].join(', ')

  return { src, srcSet, sizes }
}

/**
 * Anchos habituales del sitio, para no repetir la cuenta en cada llamada.
 * `card`: dos o tres columnas en escritorio, una sola en teléfono.
 * `full`: el ancho del contenedor de contenido, con tope en 1200px.
 */
export const SIZES = {
  card: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px',
  full: '(max-width: 1280px) 100vw, 1200px',
}
