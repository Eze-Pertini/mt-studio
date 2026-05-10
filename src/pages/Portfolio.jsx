import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from '@components/animations'
import { projects } from '@data/projects'

const categories = ['Todos', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <PageTransition>
      <SEOHead
        title="Portfolio"
        description="Proyectos de diseño web, desarrollo y sistemas. Mirá lo que construimos para clientes reales."
        url="/portfolio"
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-bg" aria-labelledby="portfolio-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              Nuestros proyectos
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="portfolio-heading">
              Trabajo que <span className="gradient-text">nos define</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Cada proyecto es un desafío distinto. Acá están los que más nos enorgullecen.
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
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-pill text-sm font-medium transition-all duration-200
                           focus-visible:ring-2 focus-visible:ring-violet-400
                           ${active === cat
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
      <section className="section-padding" aria-label={`Proyectos — ${active}`}>
        <div className="container-custom">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            stagger={0.08}
            key={active}
          >
            {filtered.map((project) => (
              <StaggerItem key={project.id}>
                <PortfolioCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-text-muted">
              No hay proyectos en esta categoría todavía.
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}

function PortfolioCard({ project }) {
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
            Ver proyecto <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* Status */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] px-2 py-0.5 rounded-pill font-medium"
                  style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.30)', color: '#A78BFA' }}>
              ✦ Destacado
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

function StatusBadge({ status }) {
  const config = {
    live:        { label: 'En vivo',       color: '#10B981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)' },
    development: { label: 'En desarrollo', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)' },
    concept:     { label: 'Concepto',      color: '#94A3B8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.25)' },
  }
  const c = config[status] ?? config.concept
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-pill font-medium"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
      {c.label}
    </span>
  )
}
