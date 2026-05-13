import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@data/services'

const navLinks = [
  { label: 'Inicio',    to: '/',          exact: true },
  { label: 'Portfolio', to: '/portfolio'              },
  { label: 'Nosotros',  to: '/nosotros'               },
  { label: 'Blog',      to: '/blog'                   },
  { label: 'Contacto',  to: '/contacto'               },
]

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false)
  const [mobileOpen,      setMobileOpen]       = useState(false)
  const [servicesOpen,    setServicesOpen]     = useState(false) // desktop dropdown
  const [mobileServices,  setMobileServices]   = useState(false) // mobile accordion
  const location    = useLocation()
  const dropdownRef = useRef(null)

  // Cerrar todo al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServices(false)
  }, [location.pathname])

  // Scroll detection
  const handleScroll = useCallback(() => setScrolled(window.scrollY > 24), [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    if (!servicesOpen) return
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [servicesOpen])

  // ESC + lock scroll para mobile
  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', handleKey)
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top      = `-${scrollY}px`
    document.body.style.width    = '100%'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.position = ''
      document.body.style.top      = ''
      document.body.style.width    = ''
      window.scrollTo(0, scrollY)
    }
  }, [mobileOpen])

  const isServicesActive = location.pathname.startsWith('/servicios')

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="container-custom flex items-center justify-between h-16" aria-label="Navegación principal">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 shrink-0 focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg px-1"
                aria-label="MT Studio — Inicio">
            <span className="text-xl font-black tracking-tight gradient-text">MT</span>
            <span className="text-xl font-light text-text-secondary tracking-widest">Studio</span>
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse-glow" aria-hidden="true" />
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1" role="list">

            {/* Inicio */}
            <li>
              <NavLink to="/" end
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                   focus-visible:ring-2 focus-visible:ring-violet-400
                   ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`
                }>
                {({ isActive }) => (
                  <>
                    Inicio
                    {isActive && <ActiveIndicator />}
                  </>
                )}
              </NavLink>
            </li>

            {/* Servicios con dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                onKeyDown={(e) => { if (e.key === 'Escape') setServicesOpen(false) }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg
                            transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-violet-400
                            ${isServicesActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {isServicesActive && <ActiveIndicator />}
                Servicios
                <motion.svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-panel overflow-hidden"
                    style={{
                      background: 'rgba(10, 14, 20, 0.97)',
                      backdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                    }}
                    role="menu"
                  >
                    {/* Link a /servicios overview */}
                    <Link
                      to="/servicios"
                      className="flex items-center justify-between px-4 py-3 text-xs font-semibold
                                 text-text-muted uppercase tracking-widest
                                 hover:text-text-primary hover:bg-white/5 transition-colors duration-150"
                      role="menuitem"
                    >
                      Ver todos los servicios
                      <span aria-hidden="true" className="text-base">→</span>
                    </Link>

                    <div className="h-px mx-4" style={{ background: 'rgba(255,255,255,0.07)' }} />

                    {services.map((s) => (
                      <DropdownItem key={s.slug} service={s} onClose={() => setServicesOpen(false)} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Resto de links */}
            {navLinks.slice(1).map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                     focus-visible:ring-2 focus-visible:ring-violet-400
                     ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`
                  }>
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && <ActiveIndicator />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link to="/contacto"
                  className="px-5 py-2 text-sm font-semibold rounded-pill bg-gradient-violet-cyan text-white
                             hover:opacity-90 active:scale-95 transition-all duration-200
                             focus-visible:ring-2 focus-visible:ring-violet-400">
              Hablemos
            </Link>
          </div>

          {/* Botón mobile */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl
                       text-text-secondary hover:text-text-primary hover:bg-white/8
                       border border-transparent hover:border-white/10
                       transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(4, 6, 10, 0.75)', backdropFilter: 'blur(6px)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              key="drawer"
              id="mobile-menu"
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 320, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
              style={{
                width: 'min(300px, 85vw)',
                background: 'rgba(10, 14, 20, 0.97)',
                backdropFilter: 'blur(24px)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
              }}
              role="dialog" aria-modal="true" aria-label="Menú de navegación"
            >
              {/* Header drawer */}
              <div className="flex items-center justify-between px-5 h-16 border-b shrink-0"
                   style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black gradient-text">MT</span>
                  <span className="text-base font-light text-text-secondary tracking-widest">Studio</span>
                </div>
                <button onClick={() => setMobileOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted
                                   hover:text-text-primary hover:bg-white/8 transition-all duration-200
                                   focus-visible:ring-2 focus-visible:ring-violet-400"
                        aria-label="Cerrar menú">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1" role="list">

                  {/* Inicio */}
                  <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
                    <NavLink to="/" end onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200
                         ${isActive ? 'text-text-primary bg-white/8 border border-white/10' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`
                      }>
                      Inicio
                    </NavLink>
                  </motion.li>

                  {/* Servicios accordion */}
                  <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }}>
                    <button
                      onClick={() => setMobileServices((v) => !v)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium
                                  transition-all duration-200
                                  ${isServicesActive
                                    ? 'text-text-primary bg-white/8 border border-white/10'
                                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                  }`}
                      aria-expanded={mobileServices}
                    >
                      Servicios
                      <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                                  animate={{ rotate: mobileServices ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    </button>

                    {/* Accordion body */}
                    <AnimatePresence>
                      {mobileServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="ml-3 mt-1 pl-3 border-l flex flex-col gap-0.5 pb-1"
                               style={{ borderColor: 'rgba(139,92,246,0.25)' }}>
                            {/* Overview link */}
                            <Link to="/servicios" onClick={() => setMobileOpen(false)}
                                  className="px-3 py-2 rounded-lg text-xs font-semibold text-text-muted
                                             hover:text-violet-400 transition-colors duration-150 uppercase tracking-widest">
                              Ver todos →
                            </Link>
                            {services.map((s, i) => (
                              <motion.div key={s.slug}
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}>
                                <Link
                                  to={`/servicios/${s.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                                             text-sm text-text-secondary hover:text-text-primary
                                             hover:bg-white/5 transition-all duration-150"
                                >
                                  <span className="text-base" style={{ color: s.color === 'violet' ? '#A78BFA' : '#22D3EE' }} aria-hidden="true">
                                    {s.icon}
                                  </span>
                                  {s.title}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {/* Resto de links */}
                  {navLinks.slice(1).map((link, i) => (
                    <motion.li key={link.to}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}>
                      <NavLink to={link.to} onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200
                           ${isActive ? 'text-text-primary bg-white/8 border border-white/10' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`
                        }>
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <motion.div className="px-5 py-6 border-t shrink-0"
                           style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.3 }}>
                <Link to="/contacto" onClick={() => setMobileOpen(false)}
                      className="block w-full text-center py-3.5 px-6 rounded-pill font-semibold text-sm text-white
                                 bg-gradient-violet-cyan hover:opacity-90 active:scale-[0.98]
                                 transition-all duration-200 shadow-glow-violet">
                  Hablemos →
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Dropdown item ────────────────────────────────────────────────
function DropdownItem({ service, onClose }) {
  const isViolet   = service.color === 'violet'
  const accentColor = isViolet ? '#A78BFA' : '#22D3EE'
  const accentBg    = isViolet ? 'rgba(139,92,246,0.10)' : 'rgba(6,182,212,0.10)'

  return (
    <Link
      to={`/servicios/${service.slug}`}
      onClick={onClose}
      role="menuitem"
      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-150 group"
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
           style={{ background: accentBg, border: `1px solid ${accentColor}25`, color: accentColor }}>
        <span className="text-sm" aria-hidden="true">{service.icon}</span>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-text-primary group-hover:text-white transition-colors truncate">
          {service.title}
        </p>
        <p className="text-xs text-text-muted truncate">{service.tagline}</p>
      </div>
    </Link>
  )
}

// ─── Active indicator (layout animated) ──────────────────────────
function ActiveIndicator() {
  return (
    <motion.div
      layoutId="nav-indicator"
      className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
      aria-hidden="true"
    />
  )
}

// ─── Animated hamburger → X icon ─────────────────────────────────
function MenuIcon({ open }) {
  return (
    <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                animate={open ? 'open' : 'closed'}>
      <motion.line x1="3" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        variants={{ closed: { x1:3,y1:5,x2:17,y2:5 }, open: { x1:4,y1:4,x2:16,y2:16 } }}
        transition={{ duration: 0.25 }} />
      <motion.line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        variants={{ closed: { opacity:1 }, open: { opacity:0 } }}
        transition={{ duration: 0.2 }} />
      <motion.line x1="3" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        variants={{ closed: { x1:3,y1:15,x2:17,y2:15 }, open: { x1:4,y1:16,x2:16,y2:4 } }}
        transition={{ duration: 0.25 }} />
    </motion.svg>
  )
}
