import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from '@components/animations'
import { getProjectBySlug, getRelatedProjects } from '@data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project  = getProjectBySlug(slug)

  if (!project) return <Navigate to="/portfolio" replace />

  const related = getRelatedProjects(slug, 2)

  return (
    <PageTransition>
      <SEOHead
        title={project.title}
        description={project.description}
        url={`/portfolio/${project.slug}`}
        type="article"
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: `linear-gradient(180deg, ${project.color}10 0%, transparent 100%)` }}
        aria-labelledby="project-title"
      >
        <div className="container-custom">
          <FadeUp>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8 group"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
              Volver al portfolio
            </Link>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1}>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-pill font-medium"
                        style={{ background: `${project.color}15`, border: `1px solid ${project.color}30`, color: project.color }}>
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h1 className="text-display-lg font-black text-text-primary mb-2" id="project-title">
                  {project.title}
                </h1>
                <p className="text-lg font-medium text-text-secondary mb-6">{project.tagline}</p>
                <p className="text-text-secondary leading-relaxed mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 px-6 py-2.5 rounded-pill text-sm font-semibold text-white
                                  bg-gradient-violet-cyan hover:opacity-90 transition-all active:scale-95
                                  focus-visible:ring-2 focus-visible:ring-violet-400">
                      Ver en vivo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <Link to="/contacto"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-pill text-sm font-semibold
                                   text-text-primary bg-white/8 border border-default
                                   hover:bg-white/12 hover:border-strong transition-all active:scale-95
                                   focus-visible:ring-2 focus-visible:ring-violet-400">
                    Proyecto similar
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-4">
                {/* Metrics */}
                {project.metrics?.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="glass-card p-4 text-center">
                        <div className="text-2xl font-black gradient-text">{m.value}</div>
                        <div className="text-xs text-text-muted mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="glass-card p-4">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag}
                            className="text-xs px-2.5 py-1 rounded-pill text-text-secondary"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                {project.services?.length > 0 && (
                  <div className="glass-card p-4">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Qué hicimos</p>
                    <ul className="flex flex-col gap-1.5" role="list">
                      {project.services.map((s) => (
                        <li key={s} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="text-violet-400" aria-hidden="true">✓</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {project.image && (
        <section className="py-8">
          <div className="container-custom">
            <FadeUp>
              <div className="rounded-panel overflow-hidden aspect-video bg-bg-elevated border border-subtle">
                <img src={project.image} alt={`Vista general de ${project.title}`}
                     className="w-full h-full object-cover" loading="lazy" />
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Long description */}
      {project.longDescription && (
        <section className="py-16">
          <div className="container-custom">
            <FadeUp>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-display-sm font-bold text-text-primary mb-6">El proyecto</h2>
                <div className="text-text-secondary leading-relaxed space-y-4">
                  {project.longDescription.trim().split('\n\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Screenshots */}
      {project.images?.length > 0 && (
        <section className="py-8 pb-16">
          <div className="container-custom">
            <FadeUp>
              <h2 className="text-display-sm font-bold text-text-primary mb-8">Capturas</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="rounded-card overflow-hidden aspect-video bg-bg-elevated border border-subtle">
                    <img src={img} alt={`Captura ${i + 1} de ${project.title}`}
                         className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 border-t border-subtle">
          <div className="container-custom">
            <FadeUp>
              <h2 className="text-display-sm font-bold text-text-primary mb-8">Otros proyectos</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <FadeUp key={p.id}>
                  <Link to={`/portfolio/${p.slug}`}
                        className="group block glass-card p-6 hover:border-default transition-all duration-300"
                        aria-label={`Ver proyecto ${p.title}`}>
                    <p className="text-xs text-text-muted mb-1">{p.category}</p>
                    <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-white transition-colors">{p.title}</h3>
                    <p className="text-sm text-text-secondary line-clamp-2">{p.description}</p>
                    <p className="text-xs text-violet-400 mt-3 font-medium group-hover:underline">Ver proyecto →</p>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
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
    <span className="text-xs px-3 py-1 rounded-pill font-medium"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
      {c.label}
    </span>
  )
}
