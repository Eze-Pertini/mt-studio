import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from '@components/animations'
import { localizeProjects } from '@data/projects'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

export default function Portfolio() {
  const { lang } = useLanguage()
  const pf = (key) => t(lang, `portfolioPage.${key}`)
  const localizedProjects = localizeProjects(lang)

  const categories = [pf('all'), ...new Set(localizedProjects.map((p) => p.category))]
  const [active, setActive] = useState(pf('all'))

  // Si cambia el idioma y "active" era "Todos" o "All" del idioma anterior, lo resincronizamos
  const allLabel = pf('all')
  const effectiveActive = categories.includes(active) ? active : allLabel

  const filtered = effectiveActive === allLabel
    ? localizedProjects
    : localizedProjects.filter((p) => p.category === effectiveActive)

  return (
    <PageTransition>
      <SEOHead
        title={lang === 'en' ? 'Portfolio' : 'Portfolio'}
        description={lang === 'en'
          ? 'Web design, development, and systems projects. See what we built for real clients.'
          : 'Proyectos de diseño web, desarrollo y sistemas. Mirá lo que construimos para clientes reales.'}
        url="/portfolio"
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-bg" aria-labelledby="portfolio-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              {pf('badge')}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="portfolio-heading">
              {pf('titleA')} <span className="gradient-text">{pf('titleB')}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              {pf('subtitle')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-40 py-4 glass-nav border-b border-subtle" aria-label="Filtrar proyectos">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide" role="tablist" aria-label="Categorías">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={effectiveActive === cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-pill text-sm font-medium transition-all duration-200
                           focus-visible:ring-2 focus-visible:ring-violet-400
                           ${effectiveActive === cat
                             ? 'bg-violet-500/15 border border-violet-500/30 text-violet-400'
                             : 'text-text-secondary hover:text-text-primary hover:bg-white/6 border border-transparent'
                           }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding" aria-label={`Proyectos — ${effectiveActive}`}>
        <div className="container-custom">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            stagger={0.08}
            key={effectiveActive}
          >
            {filtered.map((project) => (
              <StaggerItem key={project.id}>
                <PortfolioCard project={project} lang={lang} pf={pf} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-text-muted">
              {pf('empty')}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}

function PortfolioCard({ project, lang, pf }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block glass-card overflow-hidden hover:border-default transition-all duration-300 hover:shadow-card-hover"
      aria-label={`Ver proyecto ${project.title}: ${project.tagline}`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-bg-elevated">
        {project.image ? (
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.color}18 0%, ${project.accentColor}10 100%)` }}
            aria-hidden="true"
          >
            <span className="text-6xl font-black gradient-text opacity-25 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <span className="text-xs font-medium text-white flex items-center gap-1.5">
            {pf('viewProject')} <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* Status */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} lang={lang} />
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] px-2 py-0.5 rounded-pill font-medium"
                  style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.30)', color: '#A78BFA' }}>
              ✦ {pf('featured')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <p className="text-xs text-text-muted font-medium">{project.category} · {project.year}</p>
        </div>
        <h2 className="text-base font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
          {project.title}
        </h2>
        <p className="text-xs text-text-secondary mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-pill text-text-muted"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
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
    <span className="text-[10px] px-2 py-0.5 rounded-pill font-medium"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
      {label}
    </span>
  )
}
