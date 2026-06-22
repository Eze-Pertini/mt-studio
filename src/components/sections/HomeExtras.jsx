import React from 'react'
import { Link } from 'react-router-dom'
import { StaggerContainer, StaggerItem, FadeUp, SlideIn } from '@components/animations'
import { SectionHeading } from '@components/ui/Button'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

// ─── Technologies ─────────────────────────────────────────────────
const techs = [
  { name: 'React',        icon: '⚛' },
  { name: 'Next.js',      icon: '▲' },
  { name: 'TypeScript',   icon: 'TS' },
  { name: 'Node.js',      icon: '⬡' },
  { name: 'Tailwind',     icon: '◈' },
  { name: 'PostgreSQL',   icon: '🐘' },
  { name: 'MongoDB',      icon: '🍃' },
  { name: 'Framer',       icon: '◎' },
  { name: 'Vite',         icon: '⚡' },
  { name: 'Figma',        icon: '✦' },
  { name: 'Vercel',       icon: '▽' },
  { name: 'Docker',       icon: '🐳' },
]

export function TechSection() {
  const { lang } = useLanguage()

  return (
    <section className="py-20 border-y border-subtle overflow-hidden" aria-label="Tecnologías que usamos">
      <div className="container-custom">
        <FadeUp>
          <p className="text-center text-sm font-medium text-text-muted uppercase tracking-widest mb-10">
            {t(lang, 'home.techHeading')}
          </p>
        </FadeUp>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, i) => (
            <StaggerItem key={tech.name}>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-medium text-text-secondary
                           hover:text-text-primary transition-all duration-200 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-base" aria-hidden="true">{tech.icon}</span>
                {tech.name}
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────
export function ProcessSection() {
  const { lang } = useLanguage()
  const h = (key) => t(lang, `home.${key}`)
  const steps = h('processSteps')

  return (
    <section className="section-padding" aria-labelledby="process-heading">
      <div className="container-custom">

        <FadeUp>
          <SectionHeading
            label={h('processBadge')}
            title={<>{h('processTitleA')} <span className="gradient-text">{h('processTitleB')}</span></>}
            subtitle={h('processSubtitle')}
            id="process-heading"
          />
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.1}>
              <div className="relative glass-card p-6 h-full">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px z-10"
                       style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.3), transparent)' }}
                       aria-hidden="true" />
                )}

                <div className="text-3xl font-black gradient-text mb-4 select-none" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Benefits ─────────────────────────────────────────────────────
const benefitIcons = ['✦', '⚡', '◎', '◈']

export function BenefitsSection() {
  const { lang } = useLanguage()
  const h = (key) => t(lang, `home.${key}`)
  const benefits = h('benefitsItems')

  return (
    <section className="section-padding bg-bg-secondary/50" aria-labelledby="benefits-heading">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-4"
                   style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                {h('benefitsBadge')}
              </div>
              <h2 className="text-display-md font-bold text-text-primary mb-4 text-balance" id="benefits-heading">
                {h('benefitsTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8 text-left">
                {h('benefitsBody')}
              </p>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group"
              >
                {h('benefitsLink')}
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <FadeUp key={b.title} delay={i * 0.08}>
                  <div className="glass-card p-5">
                    <div className="text-2xl mb-3 gradient-text" aria-hidden="true">{benefitIcons[i]}</div>
                    <h3 className="text-sm font-bold text-text-primary mb-1">{b.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{b.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SlideIn>
        </div>

      </div>
    </section>
  )
}

// ─── CTA Final ────────────────────────────────────────────────────
export function CTASection() {
  const { lang } = useLanguage()
  const h = (key) => t(lang, `home.${key}`)

  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <div className="container-custom">
        <FadeUp>
          <div
            className="relative rounded-panel overflow-hidden p-12 md:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.08) 100%)',
              border: '1px solid rgba(139,92,246,0.20)',
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 -translate-y-1/2 rounded-full opacity-20"
                   style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                   style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                {h('ctaFinalBadge')}
              </div>

              <h2 className="text-display-lg font-black text-text-primary mb-4 text-balance" id="cta-heading">
                {h('ctaFinalTitleA')} <span className="gradient-text">{h('ctaFinalTitleB')}</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto text-left md:text-center">
                {h('ctaFinalBody')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill font-semibold text-white
                             bg-gradient-violet-cyan hover:opacity-90 active:scale-95
                             transition-all duration-200 shadow-glow-violet
                             focus-visible:ring-2 focus-visible:ring-violet-400
                             w-full sm:w-auto"
                >
                  {h('ctaFinalStart')}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill font-semibold
                             text-text-primary bg-white/8 border border-default
                             hover:bg-white/12 hover:border-strong active:scale-95
                             transition-all duration-200
                             focus-visible:ring-2 focus-visible:ring-violet-400
                             w-full sm:w-auto"
                >
                  {h('ctaFinalProjects')}
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
