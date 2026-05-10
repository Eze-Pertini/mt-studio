import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp } from '@components/animations'
import { getPostBySlug, getRelatedPosts } from '@data/blog'
import { BlogCard } from './Blog'

export default function BlogDetail() {
  const { slug } = useParams()
  const post     = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(slug, 3)
  const date    = new Date(post.publishedAt).toLocaleDateString('es-AR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <PageTransition>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        type="article"
        image={post.image}
      />

      <article>
        {/* Header */}
        <header className="pt-32 pb-16 hero-bg">
          <div className="container-custom">
            <FadeUp>
              <Link to="/blog"
                    className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8 group">
                <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                Volver al blog
              </Link>
            </FadeUp>

            <div className="max-w-3xl">
              <FadeUp delay={0.1}>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-pill"
                        style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                    {post.category}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-pill"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', color: '#64748B' }}>
                    {post.readTime} min lectura
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h1 className="text-display-lg font-black text-text-primary mb-4 text-balance">
                  {post.title}
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">{post.excerpt}</p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-violet-cyan flex items-center justify-center text-xs font-bold text-white" aria-hidden="true">
                    MT
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{post.author.name}</p>
                    <time dateTime={post.publishedAt} className="text-xs text-text-muted">{date}</time>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </header>

        {/* Cover image */}
        {post.image && (
          <div className="py-8">
            <div className="container-custom">
              <FadeUp>
                <div className="rounded-panel overflow-hidden aspect-video bg-bg-elevated border border-subtle">
                  <img src={post.image} alt={`Portada: ${post.title}`}
                       className="w-full h-full object-cover" loading="lazy" />
                </div>
              </FadeUp>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="py-12">
          <div className="container-custom">
            <FadeUp>
              <div className="max-w-3xl mx-auto">
                <div className="prose-custom">
                  {renderContent(post.content)}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-subtle">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Etiquetas</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag}
                            className="text-xs px-3 py-1 rounded-pill text-text-secondary"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 border-t border-subtle" aria-label="Artículos relacionados">
          <div className="container-custom">
            <FadeUp>
              <h2 className="text-display-sm font-bold text-text-primary mb-8">Más artículos</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <FadeUp key={p.id}>
                  <BlogCard post={p} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}

// Simple markdown-like renderer for local content
function renderContent(content) {
  if (!content) return null
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-display-sm font-bold text-text-primary mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-text-primary mt-8 mb-3">
          {line.replace('### ', '')}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(<li key={i} className="text-text-secondary">{lines[i].trim().replace('- ', '')}</li>)
        i++
      }
      elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-4 text-text-secondary">{items}</ul>)
      continue
    } else {
      elements.push(
        <p key={i} className="text-text-secondary leading-relaxed mb-4">
          {line}
        </p>
      )
    }
    i++
  }

  return <>{elements}</>
}
