import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@components/animations'
import { getServiceBySlug, getRelatedProjects, services, localizeService, localizeServices } from '@data/services'
import { resolveRelated } from '@data/related'
import { serviceSchema } from '@data/schema'
import { preciosDe } from '@data/precios'
import { WHATSAPP_NUMBER } from '@data/config'
import RelatedLinks from '@components/ui/RelatedLinks'
import ContactForm from '@components/ui/ContactForm'
import WhatsAppIcon from '@components/ui/WhatsAppIcon'
import { projects } from '@data/projects'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

export default function ServiceDetail() {
  const { slug }  = useParams()
  const { lang }  = useLanguage()
  const rawService = getServiceBySlug(slug)

  if (!rawService) return <Navigate to="/servicios" replace />

  const service = localizeService(rawService, lang)
  const sd = (key) => t(lang, `serviceDetail.${key}`)

  const isViolet    = service.color === 'violet'
  const accentColor = isViolet ? '#A78BFA' : '#22D3EE'
  const accentBg    = isViolet ? 'rgba(139,92,246,0.08)' : 'rgba(6,182,212,0.06)'
  const accentBorder= isViolet ? 'rgba(139,92,246,0.20)' : 'rgba(6,182,212,0.18)'

  const relatedProjects = getRelatedProjects(service, projects)
  const precios = preciosDe(service.slug, lang)
  // El mensaje precargado nombra el servicio: así se sabe de qué página vino la consulta.
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(sd('whatsappMsg')(service.title))}`

  // Servicios relacionados (los otros, para el footer de navegación) — ya localizados
  const otherServices = localizeServices(lang).filter((s) => s.slug !== slug).slice(0, 3)
  const declaredRelated = resolveRelated(service)

  return (
    <PageTransition>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        url={`/servicios/${service.slug}`}
        noindex={service.draft === true}
        jsonLd={serviceSchema(service, [
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
          { name: service.title, path: `/servicios/${service.slug}` },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      {/* Es la primera pantalla de las páginas de destino de los anuncios. En el
          teléfono tienen que entrar el H1 (lo que la persona buscó), para quién
          es, una prueba, WhatsApp y el formulario y el tiempo de respuesta; por
          eso no lleva el ícono del servicio, las migas se compactan y el título
          se achica. */}
      <section
        className="pt-24 md:pt-32 pb-16 md:pb-20"
        style={{ background: `linear-gradient(180deg, ${service.accentHex}0D 0%, transparent 100%)` }}
        aria-labelledby="service-title"
      >
        <div className="container-custom">
          {/* Breadcrumb */}
          <FadeUp immediate>
            <nav className="flex items-center gap-2 text-xs text-text-muted mb-5 md:mb-10" aria-label="Navegación breadcrumb">
              <Link to="/" className="hover:text-text-secondary transition-colors">{sd('breadcrumbHome')}</Link>
              <span aria-hidden="true">/</span>
              <Link to="/servicios" className="hover:text-text-secondary transition-colors">{sd('breadcrumbServices')}</Link>
              <span aria-hidden="true">/</span>
              <span className="text-text-secondary">{service.title}</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeUp immediate delay={0.1}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-3 md:mb-4"
                     style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}>
                  {service.title}
                </div>
              </FadeUp>

              <FadeUp immediate delay={0.15}>
                <h1 className="text-3xl sm:text-5xl lg:text-display-lg font-black text-text-primary mb-3 md:mb-4 text-balance"
                    id="service-title"
                    style={{ whiteSpace: 'pre-line' }}>
                  {service.heroTitle}
                </h1>
              </FadeUp>

              <FadeUp immediate delay={0.2}>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  {service.heroSubtitle}
                </p>
              </FadeUp>

              {/* La prueba es un proyecto en producción; el texto sale de services.js. */}
              {service.prueba && (
                <FadeUp immediate delay={0.22}>
                  <p className="mb-4 text-sm text-text-secondary text-pretty">
                    <span className="text-violet-400 mr-1.5" aria-hidden="true">✓</span>
                    <Link to={`/portfolio/${service.prueba.slug}`}
                          className="text-text-primary underline decoration-white/25 underline-offset-4 hover:decoration-violet-400 transition-colors">
                      {service.prueba.texto}
                    </Link>
                  </p>
                </FadeUp>
              )}

              {/* Los montos se editan en src/data/precios.js; sin precio cargado no se muestra nada. */}
              {precios && (
                <FadeUp immediate delay={0.25}>
                  <div className="mb-5 text-sm text-text-secondary">
                    <ul className="flex flex-col gap-1" role="list">
                      {precios.paquetes.map((p) => (
                        <li key={p.nombre}>
                          <span className="text-text-primary">{p.nombre}</span> {sd('priceFrom')}{' '}
                          <span className="font-semibold text-text-primary">{p.monto}</span>
                        </li>
                      ))}
                    </ul>
                    {precios.incluye && <p className="mt-1 text-text-muted">{precios.incluye}</p>}
                  </div>
                </FadeUp>
              )}

              <FadeUp immediate delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-cta="servicio_primera_pantalla"
                     className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-white text-sm
                                bg-gradient-violet-cyan hover:opacity-90 active:scale-95
                                transition-all duration-200 shadow-glow-violet
                                focus-visible:ring-2 focus-visible:ring-violet-400">
                    <WhatsAppIcon />
                    {sd('ctaWhatsapp')}
                  </a>
                  <a href="#consulta"
                     className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-sm
                                text-text-primary bg-white/8 border border-default
                                hover:bg-white/12 hover:border-strong active:scale-95 transition-all duration-200
                                focus-visible:ring-2 focus-visible:ring-violet-400">
                    {sd('ctaFormulario')}
                  </a>
                </div>
                <p className="mt-3 text-xs text-text-muted">{sd('respuesta')}</p>
              </FadeUp>
            </div>

            {/* Hero visual — tech stack pills */}
            <SlideIn immediate direction="right" delay={0.2}>
              <div className="hidden lg:flex flex-wrap gap-3 justify-center">
                {service.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="px-4 py-2 rounded-pill text-sm font-medium text-text-secondary"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Problema que resuelve ─────────────────────────────── */}
      <section className="py-20 border-t border-subtle" aria-labelledby="problem-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-display-md font-bold text-text-primary mb-4" id="problem-heading">
                {service.problem.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-text-secondary text-lg leading-relaxed">
                {service.problem.body}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Beneficios ────────────────────────────────────────── */}
      <section className="py-20 bg-bg-secondary/40" aria-labelledby="benefits-heading">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-display-md font-bold text-text-primary mb-12 text-center" id="benefits-heading">
              {sd('problemHeading')}
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
            {service.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="glass-card p-6 h-full">
                  <div className="text-2xl mb-4" style={{ color: accentColor }} aria-hidden="true">
                    {b.icon}
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Qué incluye ───────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="features-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <h2 className="text-display-md font-bold text-text-primary mb-4" id="features-heading">
                  {sd('featuresHeading')}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {sd('featuresBody')(service.title)}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="flex flex-col gap-3" role="list">
                {service.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-card"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                         style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
                         aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary leading-relaxed">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Stack tecnológico ─────────────────────────────────── */}
      <section className="py-20 bg-bg-secondary/40" aria-labelledby="tech-heading">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center text-display-sm font-bold text-text-primary mb-10" id="tech-heading">
              {sd('techHeading')}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech) => (
                <span key={tech}
                      className="px-4 py-2 rounded-pill text-sm font-medium text-text-secondary"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Proyectos relacionados ────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-20" aria-labelledby="related-heading">
          <div className="container-custom">
            <FadeUp>
              <div className="flex items-end justify-between mb-10">
                <h2 className="text-display-sm font-bold text-text-primary" id="related-heading">
                  {sd('relatedHeading')}
                </h2>
                <Link to="/portfolio"
                      className="text-sm font-medium transition-colors group hidden sm:flex items-center gap-1"
                      style={{ color: accentColor }}>
                  {sd('seePortfolio')}
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <FadeUp key={p.id}>
                  <Link to={`/portfolio/${p.slug}`}
                        className="group block glass-card overflow-hidden hover:border-default transition-all duration-300"
                        aria-label={`Ver proyecto: ${p.title}`}>
                    {p.image && (
                      <div className="aspect-video overflow-hidden bg-bg-elevated">
                        <img src={p.image} alt={`Captura de ${p.title}`}
                             width="1600" height="900"
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                             loading="lazy" />
                      </div>
                    )}
                    <div className="p-5">
                      <p className="text-xs text-text-muted mb-1">{p.category} · {p.year}</p>
                      <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-text-secondary line-clamp-2">{p.description}</p>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Consulta ──────────────────────────────────────────── */}
      {/* El formulario va en la misma página, sin pasar por /contacto: una
          carga menos entre el anuncio y la consulta. "Dejá tu consulta", en
          la primera pantalla, baja hasta acá. Sin animación de entrada, así
          está visible apenas se llega con el ancla. */}
      <section id="consulta" className="py-20 border-t border-subtle scroll-mt-16" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-display-md font-black text-text-primary mb-3 text-balance" id="cta-heading">
                {service.cta.title}
              </h2>
              <p className="text-text-secondary text-lg">{service.cta.subtitle}</p>
              <p className="mt-2 text-sm text-text-muted">{sd('respuesta')}</p>
            </div>
            <ContactForm servicioInicial={service.formulario ?? ''} origen="servicio" />
          </div>
        </div>
      </section>

      <RelatedLinks items={declaredRelated} heading="Casos y artículos relacionados" />

      {/* ── Otros servicios ───────────────────────────────────── */}
      <section className="py-16 border-t border-subtle" aria-labelledby="other-services-heading">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-6"
                id="other-services-heading">
              {sd('otherServicesHeading')}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((s) => {
              const isV = s.color === 'violet'
              const tc  = isV ? '#A78BFA' : '#22D3EE'
              return (
                <FadeUp key={s.slug}>
                  <Link to={`/servicios/${s.slug}`}
                        className="group flex items-center gap-3 glass-card px-4 py-3.5
                                   hover:border-default transition-all duration-200"
                        aria-label={s.title}>
                    <span className="text-lg shrink-0" style={{ color: tc }} aria-hidden="true">{s.icon}</span>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {s.title}
                    </span>
                    <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: tc }} aria-hidden="true">→</span>
                  </Link>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

    </PageTransition>
  )
}
