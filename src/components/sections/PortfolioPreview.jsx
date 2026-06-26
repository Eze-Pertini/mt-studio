import React from 'react'
import { Link } from 'react-router-dom'
import { StaggerContainer, StaggerItem, FadeUp } from '@components/animations'
import { SectionHeading } from '@components/ui/Button'
import { getFeaturedProjects } from '@data/projects'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

export default function PortfolioPreview() {
  const { lang } = useLanguage()
  const h = (key) => t(lang, `home.${key}`)
  const featuredProjects = getFeaturedProjects(lang)

  return (
    <section className="section-padding bg-bg-secondary/50" aria-labelledby="portfolio-preview-heading">
      <div className="container-custom">

        <FadeUp>
          <SectionHeading
            label={h('portfolioBadge')}
            title={<>{h('portfolioTitleA')} <span className="gradient-text">{h('portfolioTitleB')}</span></>}
            subtitle={h('portfolioSubtitle')}
            id="portfolio-preview-heading"
          />
        </FadeUp>

        <StaggerContainer className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch" stagger={0.12}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} lang={lang} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-pill text-sm font-semibold
                         text-text-primary bg-white/8 border border-default
                         hover:bg-white/12 hover:border-strong transition-all duration-200"
            >
              {h('portfolioSeeAll')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

function ProjectCard({ project, lang }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group flex flex-col h-full glass-card overflow-hidden hover:border-default transition-all duration-300 hover:shadow-card-hover"
      aria-label={`Ver proyecto: ${project.title}`}
    >
      {/* Image area */}
      <div className="relative aspect-video overflow-hidden bg-bg-elevated">
        {project.image ? (
          <img
            src={project.image}
            alt={`Captura de pantalla de ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <ProjectPlaceholder project={project} />
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <StatusBadge status={project.status} lang={lang} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-xs font-medium text-text-muted mb-1">{project.category}</p>
            <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="text-sm text-text-muted shrink-0">{project.year}</span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-pill"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#94A3B8',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

function ProjectPlaceholder({ project }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${project.color}18 0%, ${project.accentColor}10 100%)` }}
      aria-label={`Placeholder para ${project.title}`}
    >
      <div className="text-center">
        <div className="text-5xl font-black gradient-text opacity-30 select-none">
          {project.title.charAt(0)}
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status, lang }) {
  const labels = {
    live:        t(lang, 'home.statusLive'),
    development: t(lang, 'home.statusDevelopment'),
    concept:     t(lang, 'home.statusConcept'),
  }
  const config = {
    live:        { color: '#10B981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)' },
    development: { color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)' },
    concept:     { color: '#94A3B8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.25)' },
  }
  const c = config[status] ?? config.concept
  const label = labels[status] ?? labels.concept

  return (
    <span
      className="text-xs px-2.5 py-1 rounded-pill font-medium"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}
    >
      {label}
    </span>
  )
}
