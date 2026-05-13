import React, { useState } from 'react'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, SlideIn } from '@components/animations'

const WHATSAPP_NUMBER = '5491141578045' // TODO: Reemplazar con número real
const EMAIL = 'hola@mtstudio.dev'       // TODO: Reemplazar con email real

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/mtstudio',
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
    href: 'https://linkedin.com/company/mtstudio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mtstudio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
]

// SVG de WhatsApp para reutilizar
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: Conectar con api.js → submitContactForm(form)
    // Simula envío por ahora
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  const whatsappMsg = `Hola! Me interesa hablar sobre un proyecto. Mi nombre es ${form.name || '...'}.`
  const whatsappUrl  = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <PageTransition>
      <SEOHead
        title="Contacto"
        description="¿Tenés un proyecto en mente? Hablemos. Contactanos por formulario, WhatsApp o email."
        url="/contacto"
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-bg" aria-labelledby="contact-heading">
        <div className="container-custom text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                 style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
              Contacto
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="contact-heading">
              Contanos tu <span className="gradient-text">proyecto</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Sin formularios interminables ni esperas eternas. Te respondemos en menos de 24 horas.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <SlideIn direction="left">
                <div className="glass-card p-8">
                  {status === 'sent' ? (
                    <div className="text-center py-12">
                      <div className="text-5xl mb-4" aria-hidden="true">✓</div>
                      <h2 className="text-xl font-bold text-text-primary mb-2">¡Mensaje recibido!</h2>
                      <p className="text-text-secondary">Te contactamos en menos de 24 horas.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                      <h2 className="text-lg font-bold text-text-primary mb-6">Envianos un mensaje</h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <FormField label="Nombre *" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Tu nombre" required />
                        <FormField label="Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required />
                      </div>

                      <div className="mb-4">
                        <FormField label="Empresa / Proyecto" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa o proyecto" />
                      </div>

                      <div className="mb-4">
                        <label className="block text-xs font-medium text-text-secondary mb-2" htmlFor="service">
                          ¿Qué necesitás?
                        </label>
                        <select
                          id="service" name="service" value={form.service} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border border-subtle
                                     focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30
                                     transition-colors duration-200"
                        >
                          <option value="">Seleccioná un servicio</option>
                          <option value="diseno-web">Diseño Web</option>
                          <option value="ecommerce">Ecommerce</option>
                          <option value="sistema-web">Sistema Web</option>
                          <option value="automatizacion">Automatización</option>
                          <option value="mantenimiento">Mantenimiento</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label className="block text-xs font-medium text-text-secondary mb-2" htmlFor="message">
                          Contanos sobre tu proyecto *
                        </label>
                        <textarea
                          id="message" name="message" value={form.message} onChange={handleChange}
                          rows={5} required placeholder="Qué querés hacer, en qué etapa estás, qué resultado esperás..."
                          className="w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border border-subtle
                                     focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30
                                     transition-colors duration-200 resize-y min-h-[120px]"
                        />
                      </div>

                      <button
                        type="submit" disabled={status === 'sending'}
                        className="w-full py-3.5 rounded-pill font-semibold text-white text-sm
                                   bg-gradient-violet-cyan hover:opacity-90 active:scale-[0.98]
                                   transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed
                                   focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
                      >
                        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                      </button>
                    </form>
                  )}
                </div>
              </SlideIn>
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <SlideIn direction="right" delay={0.1}>
                {/* WhatsApp */}
                <a
                  href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-5 hover:border-default transition-all duration-200 group"
                  aria-label="Contactar por WhatsApp"
                >
                  <div className="w-11 h-11 rounded-card flex items-center justify-center shrink-0"
                       style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366' }}>
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">WhatsApp</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
                      Chatear ahora
                    </p>
                    <p className="text-xs text-text-muted">Respuesta en minutos</p>
                  </div>
                </a>
              </SlideIn>

              <SlideIn direction="right" delay={0.15}>
                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 glass-card p-5 hover:border-default transition-all duration-200 group"
                  aria-label={`Enviar email a ${EMAIL}`}
                >
                  <div className="w-11 h-11 rounded-card flex items-center justify-center text-xl shrink-0"
                       style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.20)' }}>
                    ✉
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
                      {EMAIL}
                    </p>
                    <p className="text-xs text-text-muted">Respuesta &lt; 24hs</p>
                  </div>
                </a>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                {/* Social */}
                <div className="glass-card p-5">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Redes</p>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors group"
                         aria-label={`MT Studio en ${s.label}`}>
                        <span className="text-base" aria-hidden="true">{s.icon}</span>
                        {s.label}
                        <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="right" delay={0.25}>
                <div className="glass-card p-5">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Ubicación</p>
                  <p className="text-sm text-text-secondary">Buenos Aires, Argentina 🇦🇷</p>
                  <p className="text-xs text-text-muted mt-1">Trabajamos con clientes de todo el mundo.</p>
                </div>
              </SlideIn>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  )
}

function FormField({ label, name, type, value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-text-secondary mb-2">
        {label}
      </label>
      <input
        id={name} name={name} type={type} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className="w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border border-subtle
                   focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30
                   transition-colors duration-200 placeholder:text-text-disabled"
      />
    </div>
  )
}
