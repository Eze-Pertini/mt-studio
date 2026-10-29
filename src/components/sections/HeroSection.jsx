import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp } from '@components/animations'
import { getProjectBySlug, localizeProject } from '@data/projects'
import { responsiveImage } from '@data/responsive-image'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

// Los proyectos que el hero muestra como prueba, en este orden. El texto sale
// de heroProof en projects.js, que solo lleva datos confirmados: ver
// docs/AFIRMACIONES.md antes de cambiarlo.
const HERO_PROOFS = ['cargadirecta', 'factu']

export default function HeroSection() {
  const { lang } = useLanguage()
  const h = (key) => t(lang, `home.${key}`)
  const proofs = HERO_PROOFS.map((slug) => localizeProject(getProjectBySlug(slug), lang))

  return (
    <section
      className="relative hero-bg pt-28 pb-32 md:pt-36 md:pb-40"
      style={{ overflow: 'hidden' }}
      aria-label="Presentación MT Studio"
    >
      {/* Background decorations — contenidas con inset, sin overflow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full opacity-15"
             style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
               backgroundSize: '60px 60px',
             }} />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-6 text-center md:text-left">
            {/* Badge */}
            <FadeUp immediate delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill text-sm font-medium w-fit"
                   style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-glow" aria-hidden="true" />
                {h('heroBadge')}
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp immediate delay={0.2}>
              {/* 48px en escritorio: con 60px el título de cuatro renglones empujaba
                  las pruebas al borde del pliegue a 1280x800. */}
              <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-black text-text-primary leading-[1.08] tracking-tight text-balance">
                {h('heroTitleA')}{' '}
                <span className="gradient-text">{h('heroTitleB')}</span>
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp immediate delay={0.3}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg text-left">
                {h('heroSubtitle')}
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp immediate delay={0.4} className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 mt-1 w-full md:w-auto">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-pill font-semibold text-white text-sm
                             bg-gradient-violet-cyan hover:opacity-90 active:scale-95
                             transition-all duration-200 shadow-glow-violet
                             focus-visible:ring-2 focus-visible:ring-violet-400
                             w-full sm:w-auto"
                >
                  {h('ctaStart')}
                  <ArrowIcon />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-pill font-semibold text-sm
                             text-text-primary bg-white/8 border border-default
                             hover:bg-white/12 hover:border-strong active:scale-95
                             transition-all duration-200
                             focus-visible:ring-2 focus-visible:ring-violet-400
                             w-full sm:w-auto"
                >
                  {h('ctaWork')}
                </Link>
              </div>
            </FadeUp>

            {/* Pruebas: proyectos en producción, con enlace al caso */}
            <FadeUp immediate delay={0.5} className="w-full">
              <ul className="flex flex-col items-center md:items-start gap-2 pt-4 border-t border-subtle mt-1" role="list">
                {proofs.map((p) => (
                  <li key={p.slug} className="text-sm text-text-secondary text-center md:text-left">
                    <span className="text-violet-400 mr-1.5" aria-hidden="true">✓</span>
                    <Link to={`/portfolio/${p.slug}`}
                          className="font-semibold text-text-primary hover:text-violet-300 transition-colors">
                      {p.title}
                    </Link>
                    {': '}{p.heroProof}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Right column — dos proyectos reales en marcos de dispositivo, solo en lg+ */}
          <div className="hidden lg:block">
            <DeviceShowcase lang={lang} />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">{h('scroll')}</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

// La columna de los dispositivos está oculta debajo de lg, pero un <img> oculto
// se descarga igual. Con este GIF vacío como fuente para pantallas chicas, el
// teléfono no baja las capturas.
const EMPTY_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const BELOW_LG = '(max-width: 1023px)'

function DeviceShowcase({ lang }) {
  const h = (key) => t(lang, `home.${key}`)
  const laptop = getProjectBySlug('cargadirecta')
  const phone = getProjectBySlug('factu')
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
                   alt={h('showcaseLaptopAlt')} width="1555" height="860"
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
              <img src={phone.mobileImage} alt={h('showcasePhoneAlt')} width="390" height="844"
                   className="h-full w-full object-cover object-top" />
            </picture>
          </div>
        </div>
      </Link>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
