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
      <div className="aspect-[16/9] overflow-hidden bg-bg-elevated">
        {post.image ? (
          <img src={post.image} alt={`Portada del artículo: ${post.title}`}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.10), rgba(6,182,212,0.06))' }}
               aria-hidden="true">
            <span className="text-4xl opacity-30 gradient-text font-black">{post.category.charAt(0)}</span>
          </div>
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
