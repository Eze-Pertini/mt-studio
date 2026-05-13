import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  servicios: [
    { label: 'Diseño Web',    to: '/servicios#diseno-web' },
    { label: 'Ecommerce',     to: '/servicios#ecommerce' },
    { label: 'Sistemas Web',  to: '/servicios#sistemas-web' },
    { label: 'Automatización',to: '/servicios#automatizacion' },
    { label: 'Mantenimiento', to: '/servicios#mantenimiento' },
  ],
  studio: [
    { label: 'Nosotros',  to: '/nosotros' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Blog',      to: '/blog' },
    { label: 'Contacto',  to: '/contacto' },
  ],
}

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5491141578045', // TODO: Reemplazar con número real
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-subtle bg-bg-secondary"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand — centrado en mobile */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-1.5 mb-4" aria-label="MT Studio">
              <span className="text-2xl font-black tracking-tight gradient-text">MT</span>
              <span className="text-2xl font-light text-text-secondary tracking-widest">Studio</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Estudio digital independiente. Creamos experiencias web con diseño premium
              y tecnología moderna para proyectos que merecen destacar.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6" aria-label="Redes sociales">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MT Studio en ${s.label}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                             text-text-muted hover:text-text-primary
                             bg-white/5 hover:bg-white/10 border border-subtle hover:border-default
                             transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios — centrado en mobile */}
          <nav aria-label="Servicios" className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Servicios
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-2.5" role="list">
              {footerLinks.servicios.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Studio — centrado en mobile */}
          <nav aria-label="Studio" className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Studio
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-2.5" role="list">
              {footerLinks.studio.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-subtle">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-text-muted">
            © {year} MT Studio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-text-muted">
            Diseñado y desarrollado en Argentina 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  )
}
