import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition } from '@components/animations'

export default function NotFound() {
  return (
    <PageTransition>
      <SEOHead title="Página no encontrada" noindex />

      <section className="min-h-screen flex items-center justify-center hero-bg px-4" aria-labelledby="404-heading">
        <div className="text-center max-w-lg mx-auto">

          {/* Animated 404 */}
          <div className="relative mb-8" aria-hidden="true">
            <motion.div
              className="text-[10rem] font-black leading-none select-none"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.10) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              404
            </motion.div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10"
                 style={{
                   background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.10) 0%, transparent 70%)',
                   filter: 'blur(20px)',
                 }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-display-sm font-bold text-text-primary mb-3" id="404-heading">
              Esta página no existe
            </h1>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Puede que la movimos, la borramos o que nunca existió.
              Lo que sí existe está en el inicio.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-pill font-semibold text-white text-sm
                           bg-gradient-violet-cyan hover:opacity-90 active:scale-95 transition-all duration-200
                           focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Volver al inicio
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-pill font-semibold text-sm
                           text-text-primary bg-white/8 border border-default
                           hover:bg-white/12 hover:border-strong active:scale-95 transition-all duration-200
                           focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Contactarnos
              </Link>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="mt-12 pt-8 border-t border-subtle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs text-text-muted mb-4">O quizás buscabas...</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Servicios', to: '/servicios' },
                { label: 'Blog',      to: '/blog' },
              ].map((l) => (
                <Link
                  key={l.to} to={l.to}
                  className="text-xs px-3 py-1.5 rounded-pill text-text-secondary hover:text-text-primary transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
