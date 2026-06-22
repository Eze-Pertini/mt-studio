import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@components/animations'
import { getServiceBySlug, getRelatedProjects, services, localizeService, localizeServices } from '@data/services'
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

  // Servicios relacionados (los otros, para el footer de navegación) — ya localizados
  const otherServices = localizeServices(lang).filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <PageTransition>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        url={`/servicios/${service.slug}`}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20"
        style={{ background: `linear-gradient(180deg, ${service.accentHex}0D 0%, transparent 100%)` }}
        aria-labelledby="service-title"
      >
        <div className="container-custom">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs text-text-muted mb-10" aria-label="Navegación breadcrumb">
              <Link to="/" className="hover:text-text-secondary transition-colors">{sd('breadcrumbHome')}</Link>
              <span aria-hidden="true">/</span>
              <Link to="/servicios" className="hover:text-text-secondary transition-colors">{sd('breadcrumbServices')}</Link>
              <span aria-hidden="true">/</span>
              <span className="text-text-secondary">{service.title}</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeUp delay={0.05}>
                <div className="w-14 h-14 rounded-card flex items-center justify-center text-2xl mb-6"
                     style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}
                     aria-hidden="true">
                  {service.icon}
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-4"
                     style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}>
                  {service.title}
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h1 className="text-display-lg font-black text-text-primary mb-4 text-balance"
                    id="service-title"
                    style={{ whiteSpace: 'pre-line' }}>
                  {service.heroTitle}
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {service.heroSubtitle}
                </p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contacto"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-white text-sm
                                   bg-gradient-violet-cyan hover:opacity-90 active:scale-95
                                   transition-all duration-200 shadow-glow-violet
                                   focus-visible:ring-2 focus-visible:ring-violet-400">
                    {service.cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link to="/servicios"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-sm
                                   text-text-primary bg-white/8 border border-default
                                   hover:bg-white/12 hover:border-strong active:scale-95 transition-all duration-200
                                   focus-visible:ring-2 focus-visible:ring-violet-400">
                    {sd('seeAllServices')}
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Hero visual — tech stack pills */}
            <SlideIn direction="right" delay={0.2}>
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 border-t border-subtle" aria-labelledby="cta-heading">
        <div className="container-custom">
          <FadeUp>
            <div className="relative rounded-panel overflow-hidden p-10 md:p-16 text-center"
                 style={{
                   background: `linear-gradient(135deg, ${service.accentHex}12 0%, rgba(6,182,212,0.06) 100%)`,
                   border: `1px solid ${service.accentHex}25`,
                 }}>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 -translate-y-1/2 rounded-full opacity-20"
                     style={{ background: `radial-gradient(circle, ${service.accentHex}60 0%, transparent 70%)`, filter: 'blur(40px)' }} />
              </div>

              <div className="relative z-10">
                <h2 className="text-display-md font-black text-text-primary mb-3 text-balance" id="cta-heading">
                  {service.cta.title}
                </h2>
                <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                  {service.cta.subtitle}
                </p>
                <Link to="/contacto"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-pill font-semibold text-white
                                 bg-gradient-violet-cyan hover:opacity-90 active:scale-95
                                 transition-all duration-200 shadow-glow-violet
                                 focus-visible:ring-2 focus-visible:ring-violet-400">
                  {service.cta.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

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
