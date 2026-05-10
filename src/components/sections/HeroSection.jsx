import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, Float } from '@components/animations'

export default function HeroSection() {
  return (
    <section
      className="relative hero-bg pt-28 pb-32 md:pt-36 md:pb-40"
      style={{ overflow: 'hidden' }}
      aria-label="Presentación MT Studio"
    >
      {/* Background decorations — contenidas con inset, sin overflow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full opacity-15"
             style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
               backgroundSize: '60px 60px',
             }} />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Badge */}
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill text-sm font-medium w-fit"
                   style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-glow" aria-hidden="true" />
                Estudio Digital Independiente
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-display-xl font-black text-text-primary leading-[1.08] tracking-tight text-balance">
                Diseño y tecnología{' '}
                <span className="gradient-text">sin compromisos</span>
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.3}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                Creamos sitios web, aplicaciones y sistemas digitales que combinan
                diseño premium con tecnología sólida. Para negocios que saben
                que la presencia digital importa.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-1">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-pill font-semibold text-white text-sm
                             bg-gradient-violet-cyan hover:opacity-90 active:scale-95
                             transition-all duration-200 shadow-glow-violet
                             focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  Empezar un proyecto
                  <ArrowIcon />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-pill font-semibold text-sm
                             text-text-primary bg-white/8 border border-default
                             hover:bg-white/12 hover:border-strong active:scale-95
                             transition-all duration-200
                             focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  Ver nuestro trabajo
                </Link>
              </div>
            </FadeUp>

            {/* Social proof */}
            <FadeUp delay={0.5}>
              <div className="flex items-center gap-5 md:gap-6 pt-4 border-t border-subtle mt-1">
                {[
                  { value: '20+',  label: 'Proyectos' },
                  { value: '100%', label: 'Satisfacción' },
                  { value: '5★',   label: 'Valoración' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg md:text-xl font-bold text-text-primary">{stat.value}</div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right column — mockup, solo visible en lg+ */}
          <div className="hidden lg:block">
            <FadeUp delay={0.3}>
              {/* Wrapper contenedor: el overflow hidden evita que los badges negativos salgan */}
              <div className="relative px-10 py-6">
                <Float amplitude={12} duration={6}>
                  <DashboardMockup />
                </Float>

                {/* Floating badges — posicionados dentro del padding, no negativos */}
                <motion.div
                  className="absolute left-0 top-1/4 glass-card px-3 py-2.5 flex items-center gap-2.5 shadow-card"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0"
                       style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)' }}>
                    ✦
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-primary whitespace-nowrap">Diseño premium</div>
                    <div className="text-[10px] text-text-muted">UI/UX a medida</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute right-0 bottom-1/4 glass-card px-3 py-2.5 flex items-center gap-2.5 shadow-card"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0"
                       style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-primary whitespace-nowrap">Rápido & escalable</div>
                    <div className="text-[10px] text-text-muted">Tecnología moderna</div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DashboardMockup() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto rounded-panel overflow-hidden shadow-card-hover"
      style={{
        background: 'rgba(13, 17, 23, 0.90)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(20px)',
      }}
      role="img"
      aria-label="Mockup de dashboard premium"
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-subtle">
        <div className="flex gap-1.5">
          {['#FF5F57','#FEBC2E','#28C840'].map((c) => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-4 h-5 rounded-full bg-white/5 flex items-center px-3">
          <span className="text-[10px] text-text-muted">mtstudio.dev/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Proyectos', value: '24', color: '#8B5CF6' },
            { label: 'Clientes',  value: '18', color: '#06B6D4' },
            { label: 'Revenue',   value: '$42k', color: '#10B981' },
          ].map((stat) => (
            <div key={stat.label}
                 className="rounded-card p-3"
                 style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-[10px] text-text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-card p-4"
             style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-medium text-text-secondary">Actividad mensual</span>
            <span className="text-xs text-text-muted">Últimos 6 meses</span>
          </div>
          <div className="flex items-end gap-2 h-16">
            {[40, 65, 45, 80, 60, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm"
                   style={{
                     height: `${h}%`,
                     background: i === 5
                       ? 'linear-gradient(180deg, #8B5CF6, #06B6D4)'
                       : 'rgba(139,92,246,0.25)',
                   }} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {[
            { name: 'CargaDirecta',    status: 'En vivo',       color: '#10B981' },
            { name: 'Mini Facturante', status: 'En desarrollo', color: '#F59E0B' },
          ].map((p) => (
            <div key={p.name}
                 className="flex items-center justify-between px-3 py-2 rounded-lg"
                 style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-xs font-medium text-text-secondary">{p.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-pill"
                    style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
