import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from '@components/animations'
import { SectionHeading } from '@components/ui/Button'
import { CTASection } from '@components/sections/HomeExtras'
import { services } from '@data/services'

export default function Services() {
  return (
    <PageTransition>
      <SEOHead
        title="Servicios"
        description="Diseño web, ecommerce, sistemas web, automatización y mantenimiento. Soluciones digitales premium para negocios que quieren destacar."
        url="/servicios"
      />

      {/* Header */}
      <section className="pt-32 pb-20 hero-bg" aria-labelledby="services-page-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              Qué hacemos
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="services-page-heading">
              Servicios <span className="gradient-text">a medida</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Cada servicio está diseñado para resolver un problema concreto. Sin paquetes genéricos,
              sin relleno. Solo lo que tu proyecto necesita.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col gap-20">
            {services.map((service, i) => {
              const isEven    = i % 2 === 0
              const isViolet  = service.color === 'violet'
              const textColor = isViolet ? '#A78BFA' : '#22D3EE'
              const accentBg  = isViolet ? 'rgba(139,92,246,0.08)' : 'rgba(6,182,212,0.06)'
              const accentBorder = isViolet ? 'rgba(139,92,246,0.20)' : 'rgba(6,182,212,0.18)'

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Text */}
                  <FadeUp delay={0.1} className={!isEven ? 'lg:col-start-2' : ''}>
                    <div>
                      <div
                        className="w-14 h-14 rounded-card flex items-center justify-center text-2xl mb-6"
                        style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: textColor }}
                        aria-hidden="true"
                      >
                        {service.icon}
                      </div>
                      <h2 className="text-display-sm font-bold text-text-primary mb-2">{service.title}</h2>
                      <p className="font-medium mb-4" style={{ color: textColor }}>{service.tagline}</p>
                      <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>

                      <ul className="flex flex-col gap-3 mb-8" role="list">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                            <span className="mt-0.5 shrink-0" style={{ color: textColor }} aria-hidden="true">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contacto"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors group"
                        style={{ color: textColor }}
                      >
                        Consultar por este servicio
                        <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </FadeUp>

                  {/* Visual card */}
                  <FadeUp delay={0.2} className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div
                      className="rounded-panel p-8 h-56 flex items-center justify-center"
                      style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
                      aria-hidden="true"
                    >
                      <div className="text-7xl opacity-30" style={{ color: textColor }}>
                        {service.icon}
                      </div>
                    </div>
                  </FadeUp>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
