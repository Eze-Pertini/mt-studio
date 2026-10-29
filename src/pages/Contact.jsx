import React from 'react'
import SEOHead from '@components/ui/SEOHead'
import ContactForm from '@components/ui/ContactForm'
import WhatsAppIcon from '@components/ui/WhatsAppIcon'
import { pageSchema } from '@data/schema'
import { PageTransition, FadeUp, SlideIn } from '@components/animations'
import { EMAIL, SOCIAL, WHATSAPP_URL } from '@data/config'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

// ─── Helpers ──────────────────────────────────────────────────────

const socialLinks = [
  {
    label: 'Instagram',
    href: SOCIAL.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: SOCIAL.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

// ─── Página de contacto ───────────────────────────────────────────
// Todo con immediate: es el destino de los botones de todo el sitio, y con
// las apariciones al hacer scroll se servía en blanco hasta que cargaba el JS.
export default function Contact() {
  const { lang } = useLanguage()
  const c = (key) => t(lang, `contact.${key}`)

  return (
    <PageTransition>
      <SEOHead
        title={lang === 'en' ? 'Contact' : 'Contacto y presupuestos'}
        description={lang === 'en'
          ? "Have a project in mind? Let's talk. Reach us via form, WhatsApp or email."
          : 'Contá qué necesita tu proyecto y recibí una propuesta concreta. Por formulario, WhatsApp o email, sin compromiso.'}
        url="/contacto"
        jsonLd={pageSchema([{ name: 'Inicio', path: '/' }, { name: 'Contacto', path: '/contacto' }])}
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-bg" aria-labelledby="contact-heading">
        <div className="container-custom text-center">
          <FadeUp immediate>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              {c('badge')}
            </div>
          </FadeUp>
          <FadeUp immediate delay={0.1}>
            <h1 className="text-4xl sm:text-display-lg lg:text-display-xl font-black text-text-primary mb-4 text-balance" id="contact-heading">
              {c('titleA')} <span className="gradient-text">{c('titleB')}</span>
            </h1>
          </FadeUp>
          <FadeUp immediate delay={0.2}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto text-left md:text-center">
              {c('subtitle')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Formulario (3 cols) ─────────────────────────── */}
            <div className="lg:col-span-3">
              <SlideIn immediate direction="left">
                <ContactForm origen="contacto" />
              </SlideIn>
            </div>

            {/* ── Sidebar (2 cols) ────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              <SlideIn immediate direction="right" delay={0.1}>
                {/* WhatsApp */}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cta="contacto_tarjeta"
                   className="flex items-center gap-4 glass-card p-5 hover:border-default transition-all duration-200 group"
                   aria-label="Contactar por WhatsApp">
                  <div className="w-11 h-11 rounded-card flex items-center justify-center shrink-0"
                       style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366' }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">{c('sidebarWhatsappLabel')}</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">{c('sidebarWhatsappTitle')}</p>
                    <p className="text-xs text-text-muted">{c('sidebarWhatsappSub')}</p>
                  </div>
                </a>
              </SlideIn>

              <SlideIn immediate direction="right" delay={0.15}>
                {/* Email */}
                <a href={`mailto:${EMAIL}`}
                   className="flex items-center gap-4 glass-card p-5 hover:border-default transition-all duration-200 group"
                   aria-label={`Enviar email a ${EMAIL}`}>
                  <div className="w-11 h-11 rounded-card flex items-center justify-center shrink-0"
                       style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.20)', color: '#A78BFA' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted mb-0.5">{c('sidebarEmailLabel')}</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors truncate">{EMAIL}</p>
                    <p className="text-xs text-text-muted">{c('sidebarEmailSub')}</p>
                  </div>
                </a>
              </SlideIn>

              <SlideIn immediate direction="right" delay={0.2}>
                {/* Redes */}
                <div className="glass-card p-5">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">{c('sidebarSocialHeading')}</p>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors group"
                         aria-label={`MT Studio en ${s.label}`}>
                        <span aria-hidden="true">{s.icon}</span>
                        {s.label}
                        <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </SlideIn>

              <SlideIn immediate direction="right" delay={0.25}>
                <div className="glass-card p-5">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">{c('sidebarLocationHeading')}</p>
                  <p className="text-sm text-text-secondary">{c('sidebarLocation')}</p>
                  <p className="text-xs text-text-muted mt-1">{c('sidebarLocationSub')}</p>
                </div>
              </SlideIn>

            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
