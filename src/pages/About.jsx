import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { aboutSchema } from '@data/schema'
import { responsiveImage } from '@data/responsive-image'
import { PageTransition, FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@components/animations'
import { CTASection } from '@components/sections/HomeExtras'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

export default function About() {
  const { lang } = useLanguage()
  const a = (key) => t(lang, `aboutPage.${key}`)
  const values = a('values')
  const valueIcons = ['✦', '◎', '⬡', '◈']
  const storyParagraphs = a('storyParagraphs')

  return (
    <PageTransition>
      <SEOHead
        // TODO(SEO): cuando la pagina mencione la ciudad en el texto visible,
        // cambiar el titulo a 'Estudio de desarrollo web en Buenos Aires' (539px,
        // entra con la marca). Hoy solo dice Argentina, y en el pie, asi que el
        // titulo no puede prometer una ubicacion que la pagina no declara.
        title={lang === 'en' ? 'About' : 'Estudio de desarrollo web en Argentina'}
        description={lang === 'en'
          ? 'MT Studio is an independent digital studio. Web design, systems, and automation focused on real results for businesses that want to stand out.'
          : 'MT Studio es un estudio digital independiente fundado por Ezequiel Pertini. Diseño, desarrollo y sistemas a medida para clientes locales y remotos.'}
        url="/nosotros"
        jsonLd={aboutSchema([{ name: 'Inicio', path: '/' }, { name: 'Nosotros', path: '/nosotros' }])}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 hero-bg" aria-labelledby="about-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                     style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                  {a('badge')}
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="about-heading">
                  {a('titleA')} <span className="gradient-text">{a('titleB')}</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-text-secondary text-lg leading-relaxed text-left">
                  {a('subtitle')}
                </p>
              </FadeUp>
            </div>

            {/* Foto del fundador */}
            <SlideIn direction="right" delay={0.2}>
              <div className="flex flex-col items-center gap-4">
                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden"
                  style={{
                    border: '2px solid rgba(139,92,246,0.30)',
                    boxShadow: '0 0 40px rgba(139,92,246,0.12)',
                  }}
                >
                  <img
                    {...responsiveImage('/img/founder.webp', '(max-width: 768px) 224px, 256px')}
                    alt="Ezequiel Pertini — Fundador de MT Studio"
                    width="1254" height="1254"
                    className="w-full h-full object-cover"
                    fetchpriority="high"
                  />
                </div>
                <div
                  className="px-5 py-2.5 rounded-pill text-center"
                  style={{
                    background: 'rgba(10,14,20,0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <p className="text-sm font-semibold text-text-primary">Ezequiel Pertini</p>
                  <p className="text-xs text-text-muted">{a('founderRole')}</p>
                </div>
              </div>
            </SlideIn>

          </div>
        </div>
      </section>

      {/* ── Historia ──────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="text-display-sm font-bold text-text-primary mb-6" id="story-heading">
                {a('storyHeading')}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-4 text-text-secondary leading-relaxed text-left">
                {storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Valores ───────────────────────────────────────────── */}
      <section className="section-padding bg-bg-secondary/50" aria-labelledby="values-heading">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-md font-bold text-text-primary" id="values-heading">
                {a('valuesHeading')}
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="glass-card p-6 h-full">
                  <div className="text-2xl gradient-text mb-4" aria-hidden="true">{valueIcons[i]}</div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
