import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, StaggerContainer, StaggerItem } from '@components/animations'
import { posts, categories } from '@data/blog'

export default function Blog() {
  return (
    <PageTransition>
      <SEOHead
        title="Blog"
        description="Artículos sobre diseño web, desarrollo frontend, ecommerce y tecnología desde la perspectiva de un estudio digital independiente."
        url="/blog"
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-bg" aria-labelledby="blog-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              Nuestras ideas
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="blog-heading">
              Lo que <span className="gradient-text">pensamos</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Diseño, tecnología y procesos. Sin postureo, sin teoría vacía.
              Solo lo que aprendemos trabajando en proyectos reales.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding" aria-label="Artículos del blog">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  )
}

export function BlogCard({ post }) {
  const date = new Date(post.publishedAt).toLocaleDateString('es-AR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col glass-card overflow-hidden hover:border-default transition-all duration-300 hover:shadow-card-hover h-full"
      aria-label={`Leer artículo: ${post.title}`}
    >
      {/* Cover */}
      <div className="aspect-[16/9] overflow-hidden">
        {post.image ? (
          <img src={post.image} alt={`Portada del artículo: ${post.title}`}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               loading="lazy" />
        ) : (
          <BlogCover post={post} />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-pill"
                style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.20)', color: '#A78BFA' }}>
            {post.category}
          </span>
          <span className="text-xs text-text-muted">{post.readTime} min lectura</span>
        </div>

        <h2 className="text-sm font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-white transition-colors flex-1">
          {post.title}
        </h2>
        <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <time dateTime={post.publishedAt} className="text-xs text-text-muted">{date}</time>
          <span className="text-xs font-medium text-violet-400 group-hover:underline flex items-center gap-1">
            Leer <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── BlogCover — cover generado por categoría ─────────────────────
const categoryConfig = {
  'Diseño Web': {
    gradient: 'linear-gradient(135deg, #1a0533 0%, #0d1117 50%, #001a2e 100%)',
    accent1: 'rgba(139,92,246,0.50)',
    accent2: 'rgba(99,58,210,0.25)',
    label: 'Diseño Web',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="rgba(167,139,250,0.6)" strokeWidth="1.5"/>
        <path d="M2 11h28" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5"/>
        <circle cx="6" cy="8.5" r="1" fill="rgba(167,139,250,0.5)"/>
        <circle cx="9.5" cy="8.5" r="1" fill="rgba(167,139,250,0.5)"/>
        <circle cx="13" cy="8.5" r="1" fill="rgba(167,139,250,0.5)"/>
        <rect x="7" y="15" width="8" height="1.5" rx="0.75" fill="rgba(167,139,250,0.4)"/>
        <rect x="7" y="18.5" width="14" height="1.5" rx="0.75" fill="rgba(167,139,250,0.25)"/>
        <rect x="7" y="22" width="11" height="1.5" rx="0.75" fill="rgba(167,139,250,0.25)"/>
      </svg>
    ),
  },
  'Desarrollo': {
    gradient: 'linear-gradient(135deg, #001a2e 0%, #0d1117 50%, #1a0533 100%)',
    accent1: 'rgba(6,182,212,0.45)',
    accent2: 'rgba(8,145,178,0.22)',
    label: 'Desarrollo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M10 10l-6 6 6 6" stroke="rgba(34,211,238,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 10l6 6-6 6" stroke="rgba(34,211,238,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 7l-4 18" stroke="rgba(34,211,238,0.4)" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  'Automatización': {
    gradient: 'linear-gradient(135deg, #001f1a 0%, #0d1117 50%, #1a1500 100%)',
    accent1: 'rgba(16,185,129,0.40)',
    accent2: 'rgba(5,150,105,0.20)',
    label: 'Automatización',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="rgba(52,211,153,0.5)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="5" stroke="rgba(52,211,153,0.6)" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill="rgba(52,211,153,0.4)"/>
        <path d="M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="rgba(52,211,153,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  'Ecommerce': {
    gradient: 'linear-gradient(135deg, #1a1000 0%, #0d1117 50%, #001a33 100%)',
    accent1: 'rgba(245,158,11,0.40)',
    accent2: 'rgba(217,119,6,0.20)',
    label: 'Ecommerce',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 4h3l2.5 13h14l2.5-9H9" stroke="rgba(251,191,36,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="13" cy="25" r="2" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5"/>
        <circle cx="22" cy="25" r="2" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
  },
}

const defaultConfig = {
  gradient: 'linear-gradient(135deg, #0d1117 0%, #161d2a 100%)',
  accent1: 'rgba(139,92,246,0.35)',
  accent2: 'rgba(6,182,212,0.18)',
  label: 'MT Studio',
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="4" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5"/>
      <path d="M10 16h12M16 10v12" stroke="rgba(167,139,250,0.5)" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
}

function BlogCover({ post }) {
  const config = categoryConfig[post.category] ?? defaultConfig

  // Palabras clave del título para mostrar en el cover (máx 6 palabras)
  const titleWords = post.title.split(' ').slice(0, 6).join(' ')
  const hasMore    = post.title.split(' ').length > 6

  return (
    <div
      className="relative w-full h-full flex flex-col items-start justify-end p-5 overflow-hidden
                 transition-transform duration-500 group-hover:scale-[1.03]"
      style={{ background: config.gradient }}
      aria-hidden="true"
    >
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
           style={{ background: `radial-gradient(circle, ${config.accent1} 0%, transparent 70%)`, filter: 'blur(30px)', transform: 'translate(20%, -20%)' }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full pointer-events-none"
           style={{ background: `radial-gradient(circle, ${config.accent2} 0%, transparent 70%)`, filter: 'blur(24px)', transform: 'translate(-20%, 20%)' }} />

      {/* Grid lines decorativas */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />

      {/* Ícono categoria */}
      <div className="absolute top-4 right-4 opacity-70">
        {config.icon}
      </div>

      {/* Texto del título */}
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 opacity-50 text-white">
          {post.category}
        </p>
        <p className="text-sm font-bold text-white leading-snug opacity-80" style={{ maxWidth: '85%' }}>
          {titleWords}{hasMore ? '…' : ''}
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
           style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }} />
    </div>
  )
}
