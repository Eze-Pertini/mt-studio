import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem, FadeUp } from '@components/animations'
import { SectionHeading } from '@components/ui/Button'
import { localizeServices } from '@data/services'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

export default function ServicesSection() {
  const { lang } = useLanguage()
  const h = (key) => t(lang, `home.${key}`)
  const localizedServices = localizeServices(lang)

  return (
    <section className="section-padding" aria-labelledby="services-heading">
      <div className="container-custom">

        <FadeUp>
          <SectionHeading
            label={h('servicesBadge')}
            title={<>{h('servicesTitleA')} <span className="gradient-text">{h('servicesTitleB')}</span></>}
            subtitle={h('servicesSubtitle')}
            id="services-heading"
          />
        </FadeUp>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch" stagger={0.08}>
          {localizedServices.map((service, i) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard service={service} knowMoreLabel={h('knowMore')} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group"
            >
              {h('servicesSeeAll')}
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

function ServiceCard({ service, knowMoreLabel }) {
  const isViolet = service.color === 'violet'
  const accentColor = isViolet ? 'rgba(139,92,246,' : 'rgba(6,182,212,'
  const textColor   = isViolet ? '#A78BFA' : '#22D3EE'

  return (
    <Link
      to={`/servicios/${service.slug}`}
      className="group flex flex-col h-full glass-card p-6 hover:border-default transition-all duration-300
                 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-violet-400"
      style={{ textDecoration: 'none' }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-card flex items-center justify-center text-xl mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${accentColor}0.10)`,
          border: `1px solid ${accentColor}0.20)`,
          color: textColor,
        }}
        aria-hidden="true"
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      <p className="text-xs font-medium mb-3" style={{ color: textColor }}>
        {service.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-1.5 flex-1" role="list">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-text-muted">
            <span style={{ color: textColor }} aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Hover arrow */}
      <div className="flex items-center gap-1 mt-5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
           style={{ color: textColor }}>
        {knowMoreLabel}
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
