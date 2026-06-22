import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, SlideIn } from '@components/animations'
import { WHATSAPP_NUMBER, EMAIL, SOCIAL, EMAILJS } from '@data/config'
import { motion, AnimatePresence } from 'framer-motion'
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

// Envío via @emailjs/browser (paquete oficial)
async function sendEmail(templateParams) {
  return emailjs.send(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    templateParams,
    EMAILJS.publicKey,
  )
}

// ─── Página de contacto ───────────────────────────────────────────
export default function Contact() {
  const { lang } = useLanguage()
  const c = (key) => t(lang, `contact.${key}`)

  const [form, setForm]     = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  // Validación básica
  const errors = {
    name:    !form.name.trim()    ? c('errName')        : '',
    email:   !form.email.trim()   ? c('errEmail')
           : !/\S+@\S+\.\S+/.test(form.email) ? c('errEmailInvalid') : '',
    message: !form.message.trim() ? c('errMessage')      : '',
  }
  const isValid = !errors.name && !errors.email && !errors.message

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!isValid) return

    setStatus('sending')
    try {
      await sendEmail({
        from_name:  form.name,
        from_email: form.email,
        company:    form.company || '—',
        service:    form.service || '—',
        message:    form.message,
        to_email:   EMAIL,
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  // WhatsApp con datos del formulario precargados (mensaje según idioma)
  const whatsappMsg = t(lang, 'contact.whatsappPrefill')(form.name, form.company, form.service, form.message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg.trim())}`

  const serviceOptions = c('serviceOptions')

  return (
    <PageTransition>
      <SEOHead
        title={lang === 'en' ? 'Contact' : 'Contacto'}
        description={lang === 'en'
          ? "Have a project in mind? Let's talk. Reach us via form, WhatsApp or email."
          : '¿Tenés un proyecto en mente? Hablemos. Contactanos por formulario, WhatsApp o email.'}
        url="/contacto"
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-bg" aria-labelledby="contact-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              {c('badge')}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="contact-heading">
              {c('titleA')} <span className="gradient-text">{c('titleB')}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
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
              <SlideIn direction="left">
                <div className="glass-card p-8">

                  <AnimatePresence mode="wait">

                    {/* Estado: enviado */}
                    {status === 'sent' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center"
                      >
                        <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                             style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.30)' }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h2 className="text-xl font-bold text-text-primary mb-2">{c('successTitle')}</h2>
                        <p className="text-text-secondary mb-6">{c('successBody')}</p>

                        {/* WhatsApp CTA post-envío */}
                        <p className="text-xs text-text-muted mb-3">{c('fasterReply')}</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-pill text-sm font-semibold text-white
                                     transition-all duration-200 hover:opacity-90 active:scale-95"
                          style={{ background: '#25D366' }}
                        >
                          <WhatsAppIcon />
                          {c('continueWhatsapp')}
                        </a>
                      </motion.div>
                    ) : (

                    /* Estado: formulario */
                    <motion.div key="form" initial={{ opacity: 1 }}>
                      <h2 className="text-lg font-bold text-text-primary mb-6">{c('formTitle')}</h2>

                      <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <FormField
                            label={c('fieldName')} name="name" type="text"
                            value={form.name} onChange={handleChange} onBlur={handleBlur}
                            placeholder={c('fieldNamePh')}
                            error={touched.name ? errors.name : ''}
                          />
                          <FormField
                            label={c('fieldEmail')} name="email" type="email"
                            value={form.email} onChange={handleChange} onBlur={handleBlur}
                            placeholder={c('fieldEmailPh')}
                            error={touched.email ? errors.email : ''}
                          />
                        </div>

                        <div className="mb-4">
                          <FormField
                            label={c('fieldCompany')} name="company" type="text"
                            value={form.company} onChange={handleChange} onBlur={handleBlur}
                            placeholder={c('fieldCompanyPh')}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-xs font-medium text-text-secondary mb-2" htmlFor="service">
                            {c('fieldService')}
                          </label>
                          <select
                            id="service" name="service"
                            value={form.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border border-subtle
                                       focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30
                                       transition-colors duration-200"
                          >
                            <option value="">{c('serviceSelect')}</option>
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-6">
                          <label className="block text-xs font-medium text-text-secondary mb-2" htmlFor="message">
                            {c('fieldMessage')}
                          </label>
                          <textarea
                            id="message" name="message"
                            value={form.message} onChange={handleChange} onBlur={handleBlur}
                            rows={5}
                            placeholder={c('fieldMessagePh')}
                            className={`w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border
                                       focus:outline-none focus:ring-1 transition-colors duration-200 resize-y min-h-[120px]
                                       ${touched.message && errors.message
                                         ? 'border-red-500/50 focus:ring-red-500/30'
                                         : 'border-subtle focus:border-violet-500/50 focus:ring-violet-500/30'
                                       }`}
                          />
                          {touched.message && errors.message && (
                            <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                          )}
                        </div>

                        {/* Error de envío */}
                        {status === 'error' && (
                          <div className="mb-4 px-4 py-3 rounded-lg text-sm text-red-400"
                               style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.20)' }}>
                            {c('errorBanner')}
                          </div>
                        )}

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          {/* Enviar email */}
                          <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="flex-1 py-3.5 rounded-pill font-semibold text-white text-sm
                                       bg-gradient-violet-cyan hover:opacity-90 active:scale-[0.98]
                                       transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed
                                       focus-visible:ring-2 focus-visible:ring-violet-400"
                          >
                            {status === 'sending' ? (
                              <span className="flex items-center justify-center gap-2">
                                <Spinner /> {c('sending')}
                              </span>
                            ) : c('sendBtn')}
                          </button>

                          {/* WhatsApp directo */}
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-pill font-semibold text-sm
                                       text-text-primary bg-white/8 border border-default
                                       hover:bg-white/12 hover:border-strong active:scale-[0.98]
                                       transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
                            aria-label="Contactar por WhatsApp"
                          >
                            <WhatsAppIcon />
                            {c('whatsappBtn')}
                          </a>
                        </div>

                        <p className="text-xs text-text-muted mt-4 text-center">
                          {c('whatsappHint')}
                        </p>
                      </form>
                    </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SlideIn>
            </div>

            {/* ── Sidebar (2 cols) ────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              <SlideIn direction="right" delay={0.1}>
                {/* WhatsApp */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
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

              <SlideIn direction="right" delay={0.15}>
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

              <SlideIn direction="right" delay={0.2}>
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

              <SlideIn direction="right" delay={0.25}>
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

// ─── Sub-componentes ──────────────────────────────────────────────

function FormField({ label, name, type, value, onChange, onBlur, placeholder, error }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-text-secondary mb-2">
        {label}
      </label>
      <input
        id={name} name={name} type={type}
        value={value} onChange={onChange} onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border
                   focus:outline-none focus:ring-1 transition-colors duration-200
                   placeholder:text-text-disabled
                   ${error
                     ? 'border-red-500/50 focus:ring-red-500/30'
                     : 'border-subtle focus:border-violet-500/50 focus:ring-violet-500/30'
                   }`}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function Spinner() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  )
}
