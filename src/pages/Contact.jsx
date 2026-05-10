import React, { useState } from 'react'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, SlideIn } from '@components/animations'

const WHATSAPP_NUMBER = '5491141578045' // TODO: Reemplazar con número real
const EMAIL = 'mtstudio@gmail.com'       // TODO: Reemplazar con email real

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/mtstudio', icon: '📸' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/mtstudio', icon: '💼' },
  { label: 'GitHub',    href: 'https://github.com/mtstudio', icon: '⌨' },
]

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
                  <div className="w-11 h-11 rounded-card flex items-center justify-center text-xl shrink-0"
                       style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)' }}>
                    📱
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
