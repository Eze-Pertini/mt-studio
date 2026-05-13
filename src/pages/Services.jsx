import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from '@components/animations'
import { CTASection } from '@components/sections/HomeExtras'
import { services } from '@data/services'

export default function Services() {
  return (
    <PageTransition>
      <SEOHead
        title="Servicios"
        description="Diseño web, ecommerce, sistemas, automatización y mantenimiento. Soluciones digitales a medida para negocios que necesitan resultados concretos."
        url="/servicios"
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 hero-bg" aria-labelledby="services-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              Lo que hacemos
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="services-heading">
              Servicios <span className="gradient-text">a medida</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Cada servicio resuelve un problema concreto. Sin paquetes genéricos,
              sin promesas vacías. Solo lo que tu proyecto necesita para funcionar bien.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Grid de servicios ─────────────────────────────────── */}
      <section className="section-padding" aria-label="Lista de servicios">
        <div className="container-custom">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            stagger={0.08}
          >
            {services.map((service) => (
              <StaggerItem key={service.id} className="h-full">
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}

// ─── ServiceCard ──────────────────────────────────────────────────
function ServiceCard({ service }) {
  const isViolet    = service.color === 'violet'
  const accentColor = isViolet ? '#A78BFA' : '#22D3EE'
  const accentBg    = isViolet ? 'rgba(139,92,246,0.08)' : 'rgba(6,182,212,0.06)'
  const accentBorder= isViolet ? 'rgba(139,92,246,0.20)' : 'rgba(6,182,212,0.18)'
  const glowColor   = isViolet ? 'rgba(139,92,246,0.08)' : 'rgba(6,182,212,0.06)'

  return (
    <Link
      to={`/servicios/${service.slug}`}
      className="group relative flex flex-col h-full glass-card p-6
                 hover:border-default transition-all duration-300 hover:shadow-card-hover
                 focus-visible:ring-2 focus-visible:ring-violet-400"
      aria-label={`${service.title}: ${service.tagline}`}
    >
      {/* Glow hover */}
      <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${glowColor}, transparent)` }}
           aria-hidden="true" />

      {/* Icon */}
      <div className="w-11 h-11 rounded-card flex items-center justify-center text-xl mb-5
                      transition-all duration-300 group-hover:scale-110"
           style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}
           aria-hidden="true">
        {service.icon}
      </div>

      {/* Text */}
      <h2 className="text-base font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
        {service.title}
      </h2>
      <p className="text-xs font-medium mb-3" style={{ color: accentColor }}>
        {service.tagline}
      </p>
      <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
        {service.description}
      </p>

      {/* Features preview */}
      <ul className="flex flex-col gap-1.5 mb-5" role="list">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-text-muted">
            <span className="mt-0.5 shrink-0" style={{ color: accentColor }} aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
        {service.features.length > 3 && (
          <li className="text-xs text-text-disabled pl-4">
            +{service.features.length - 3} más
          </li>
        )}
      </ul>

      {/* CTA link */}
      <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto transition-all duration-200"
           style={{ color: accentColor }}>
        Ver servicio completo
        <motion.span
          aria-hidden="true"
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          →
        </motion.span>
      </div>
    </Link>
  )
}
