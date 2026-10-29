import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_NUMBER, EMAIL, EMAILJS } from '@data/config'
import { registrarFormulario } from '@services/analytics'
import WhatsAppIcon from '@components/ui/WhatsAppIcon'
import { useLanguage } from '@i18n/LanguageContext'
import { t } from '@i18n/uiText'

/**
 * Formulario de contacto: el de /contacto y el de cada página de servicio.
 * Es uno solo para que la conversión (generate_lead) y el campo trampa se
 * comporten igual en todos lados. Ver docs/MEDICION.md.
 *
 * servicioInicial  id de la opción que viene elegida (ver contact.serviceOptions).
 * origen           va en el data-cta de sus botones de WhatsApp: dice desde dónde
 *                  se escribió ('contacto' o 'servicio').
 */
export default function ContactForm({ servicioInicial = '', origen = 'contacto' }) {
  const { lang } = useLanguage()
  const c = (key) => t(lang, `contact.${key}`)

  // sitio_web es el campo trampa: las personas no lo ven.
  const [form, setForm]       = useState({ name: '', email: '', company: '', service: servicioInicial, message: '', sitio_web: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error
  const [touched, setTouched] = useState({})

  const opciones = c('serviceOptions')
  const servicio = opciones.find((o) => o.id === form.service)?.label ?? ''

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  const handleBlur   = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }))

  const errors = {
    name:    !form.name.trim()    ? c('errName')    : '',
    email:   !form.email.trim()   ? c('errEmail')
           : !/\S+@\S+\.\S+/.test(form.email) ? c('errEmailInvalid') : '',
    message: !form.message.trim() ? c('errMessage') : '',
  }
  const isValid = !errors.name && !errors.email && !errors.message

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!isValid) return

    // Un bot que completa todos los campos llena también el que no se ve. Ese
    // envío no sale ni cuenta como conversión: si contara, "maximizar
    // conversiones" aprendería de bots. Se muestra el aviso de error, que
    // ofrece WhatsApp y el mail, por si alguna vez lo llena una persona.
    if (form.sitio_web) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
        from_name:  form.name,
        from_email: form.email,
        company:    form.company || '—',
        service:    servicio || '—',
        message:    form.message,
        to_email:   EMAIL,
      }, EMAILJS.publicKey)
      // En GA4 va el id, que es el mismo en los dos idiomas.
      registrarFormulario(form.service)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  // WhatsApp con los datos del formulario precargados, en el idioma de la interfaz.
  const whatsappMsg = c('whatsappPrefill')(form.name, form.company, servicio, form.message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg.trim())}`

  return (
    <div className="glass-card p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center">
            <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                 style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.30)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-text-primary mb-2">{c('successTitle')}</h2>
            <p className="text-text-secondary mb-6">{c('successBody')}</p>

            <p className="text-xs text-text-muted mb-3">{c('fasterReply')}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-cta={`${origen}_despues_del_envio`}
               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-pill text-sm font-semibold text-white
                          transition-all duration-200 hover:opacity-90 active:scale-95"
               style={{ background: '#25D366' }}>
              <WhatsAppIcon />
              {c('continueWhatsapp')}
            </a>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }}>
            <h2 className="text-lg font-bold text-text-primary mb-6">{c('formTitle')}</h2>

            <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FormField label={c('fieldName')} name="name" type="text"
                           value={form.name} onChange={handleChange} onBlur={handleBlur}
                           placeholder={c('fieldNamePh')} error={touched.name ? errors.name : ''} />
                <FormField label={c('fieldEmail')} name="email" type="email"
                           value={form.email} onChange={handleChange} onBlur={handleBlur}
                           placeholder={c('fieldEmailPh')} error={touched.email ? errors.email : ''} />
              </div>

              <div className="mb-4">
                <FormField label={c('fieldCompany')} name="company" type="text"
                           value={form.company} onChange={handleChange} onBlur={handleBlur}
                           placeholder={c('fieldCompanyPh')} />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-text-secondary mb-2" htmlFor="service">
                  {c('fieldService')}
                </label>
                <select id="service" name="service" value={form.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border border-subtle
                                   focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30
                                   transition-colors duration-200">
                  <option value="">{c('serviceSelect')}</option>
                  {opciones.map((o) => (
                    <option key={o.id} value={o.id}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-medium text-text-secondary mb-2" htmlFor="message">
                  {c('fieldMessage')}
                </label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} onBlur={handleBlur}
                          rows={5} placeholder={c('fieldMessagePh')}
                          className={`w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border
                                      focus:outline-none focus:ring-1 transition-colors duration-200 resize-y min-h-[120px]
                                      ${touched.message && errors.message
                                        ? 'border-red-500/50 focus:ring-red-500/30'
                                        : 'border-subtle focus:border-violet-500/50 focus:ring-violet-500/30'}`} />
                {touched.message && errors.message && (
                  <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Campo trampa: fuera de la vista, del teclado y de los lectores de pantalla. */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="sitio_web">No completar este campo</label>
                <input id="sitio_web" name="sitio_web" type="text" tabIndex={-1} autoComplete="off"
                       value={form.sitio_web} onChange={handleChange} />
              </div>

              {status === 'error' && (
                <div className="mb-4 px-4 py-3 rounded-lg text-sm text-red-400"
                     style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.20)' }}>
                  {c('errorBanner')}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" disabled={status === 'sending'}
                        className="flex-1 py-3.5 rounded-pill font-semibold text-white text-sm
                                   bg-gradient-violet-cyan hover:opacity-90 active:scale-[0.98]
                                   transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed
                                   focus-visible:ring-2 focus-visible:ring-violet-400">
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2"><Spinner /> {c('sending')}</span>
                  ) : c('sendBtn')}
                </button>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-cta={`${origen}_formulario`}
                   className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-pill font-semibold text-sm
                              text-text-primary bg-white/8 border border-default
                              hover:bg-white/12 hover:border-strong active:scale-[0.98]
                              transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
                   aria-label="Contactar por WhatsApp">
                  <WhatsAppIcon />
                  {c('whatsappBtn')}
                </a>
              </div>

              <p className="text-xs text-text-muted mt-4 text-center">{c('whatsappHint')}</p>
              <p className="text-xs text-text-muted mt-2 text-center">
                {c('privacyNote')}{' '}
                <Link to="/privacidad" className="underline underline-offset-2 hover:text-text-secondary">
                  {c('privacyLink')}
                </Link>.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FormField({ label, name, type, value, onChange, onBlur, placeholder, error }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-text-secondary mb-2">{label}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur}
             placeholder={placeholder}
             className={`w-full px-4 py-3 rounded-lg text-sm text-text-primary bg-bg-elevated border
                         focus:outline-none focus:ring-1 transition-colors duration-200 placeholder:text-text-disabled
                         ${error
                           ? 'border-red-500/50 focus:ring-red-500/30'
                           : 'border-subtle focus:border-violet-500/50 focus:ring-violet-500/30'}`} />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
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
