import React from 'react'
import { Link } from 'react-router-dom'
import { responsiveImage } from '@data/responsive-image'

// La columna de los dispositivos está oculta debajo de lg, pero un <img> oculto
// se descarga igual. Con este GIF vacío como fuente para pantallas chicas, el
// teléfono no baja las capturas.
const EMPTY_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const BELOW_LG = '(max-width: 1023px)'

/**
 * Capturas reales en marcos de notebook y teléfono, cada una con enlace a su
 * caso del portfolio. La usan el hero de la home y la primera pantalla de los
 * servicios que tienen heroProyecto. Va en una columna visible solo desde lg.
 *
 * laptop, phone          proyectos de projects.js: la notebook usa `image` y
 *                        el teléfono, `mobileImage` (390x844).
 * laptopWidth/Height     tamaño real de la captura de la notebook.
 */
export default function DeviceShowcase({ laptop, phone, laptopAlt, phoneAlt, laptopWidth, laptopHeight }) {
  const laptopImg = responsiveImage(laptop.image, '(min-width: 1280px) 500px, 40vw')

  return (
    <div className="relative mx-auto w-full max-w-[560px] pr-10 pb-12">
      <Link to={`/portfolio/${laptop.slug}`} className="group block">
        <div className="rounded-t-2xl border border-white/10 bg-bg-secondary p-2.5 shadow-card-hover">
          {/* 16:9, casi la proporción de la captura: con 16:10 se recortaba el logo */}
          <div className="aspect-video overflow-hidden rounded-lg bg-bg-elevated">
            <picture>
              <source media={BELOW_LG} srcSet={EMPTY_IMAGE} />
              {/* En escritorio es el elemento más grande de la primera pantalla: el LCP. */}
              <img src={laptopImg.src} srcSet={laptopImg.srcSet} sizes={laptopImg.sizes}
                   alt={laptopAlt} width={laptopWidth} height={laptopHeight}
                   fetchpriority="high"
                   className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
            </picture>
          </div>
        </div>
        <div className="-mx-5 h-3.5 rounded-b-2xl border-x border-b border-white/10 bg-gradient-to-b from-[#252c39] to-[#11161f]"
             aria-hidden="true" />
      </Link>

      <Link to={`/portfolio/${phone.slug}`} className="group absolute bottom-0 right-0 w-[120px]">
        <div className="rounded-[1.6rem] border border-white/15 bg-bg-secondary p-1.5 shadow-card-hover">
          <div className="aspect-[390/844] overflow-hidden rounded-[1.25rem] bg-white">
            <picture>
              <source media={BELOW_LG} srcSet={EMPTY_IMAGE} />
              <img src={phone.mobileImage} alt={phoneAlt} width="390" height="844"
                   className="h-full w-full object-cover object-top" />
            </picture>
          </div>
        </div>
      </Link>
    </div>
  )
}
