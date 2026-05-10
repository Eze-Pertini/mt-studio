import React, { useState, useEffect, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio',    to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Nosotros',  to: '/nosotros' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contacto',  to: '/contacto' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Cerrar menú al cambiar de ruta
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  // Scroll detection
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // ESC key + lock body scroll cuando el menú está abierto
  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', handleKey)
    // Lock scroll sin saltar el contenido
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="container-custom flex items-center justify-between h-16"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg px-1 shrink-0"
            aria-label="MT Studio — Ir al inicio"
          >
            <span className="text-xl font-black tracking-tight gradient-text">MT</span>
            <span className="text-xl font-light text-text-secondary tracking-widest">Studio</span>
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse-glow" aria-hidden="true" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    focus-visible:ring-2 focus-visible:ring-violet-400
                    ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contacto"
              className="px-5 py-2 text-sm font-semibold rounded-pill bg-gradient-violet-cyan text-white
                         hover:opacity-90 active:scale-95 transition-all duration-200
                         focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Hablemos
            </Link>
          </div>

          {/* Botón hamburguesa / X */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl
                       text-text-secondary hover:text-text-primary
                       hover:bg-white/8 border border-transparent hover:border-white/10
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

      {/* ── Mobile menu ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(4, 6, 10, 0.75)', backdropFilter: 'blur(6px)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer — slide desde la derecha, NO excede el viewport */}
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
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              {/* Header del drawer con botón X */}
              <div className="flex items-center justify-between px-5 h-16 border-b"
                   style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black tracking-tight gradient-text">MT</span>
                  <span className="text-base font-light text-text-secondary tracking-widest">Studio</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg
                             text-text-muted hover:text-text-primary hover:bg-white/8
                             transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
                  aria-label="Cerrar menú"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium
                           transition-all duration-200
                           ${isActive
                             ? 'text-text-primary bg-white/8 border border-white/10'
                             : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                           }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA al pie */}
              <motion.div
                className="px-5 py-6 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 px-6 rounded-pill font-semibold text-sm text-white
                             bg-gradient-violet-cyan hover:opacity-90 active:scale-[0.98]
                             transition-all duration-200 shadow-glow-violet"
                >
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

// Ícono que transiciona suavemente entre ☰ y ✕
function MenuIcon({ open }) {
  return (
    <motion.svg
      width="20" height="20" viewBox="0 0 20 20" fill="none"
      aria-hidden="true"
      animate={open ? 'open' : 'closed'}
    >
      {/* Línea superior → brazo izquierdo de X */}
      <motion.line
        x1="3" y1="5" x2="17" y2="5"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        variants={{
          closed: { x1: 3, y1: 5,  x2: 17, y2: 5,  opacity: 1 },
          open:   { x1: 4, y1: 4,  x2: 16, y2: 16, opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
      />
      {/* Línea central → desaparece */}
      <motion.line
        x1="3" y1="10" x2="17" y2="10"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        variants={{
          closed: { opacity: 1, scaleX: 1 },
          open:   { opacity: 0, scaleX: 0 },
        }}
        style={{ originX: '10px' }}
        transition={{ duration: 0.2 }}
      />
      {/* Línea inferior → brazo derecho de X */}
      <motion.line
        x1="3" y1="15" x2="17" y2="15"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        variants={{
          closed: { x1: 3, y1: 15, x2: 17, y2: 15, opacity: 1 },
          open:   { x1: 4, y1: 16, x2: 16, y2: 4,  opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.svg>
  )
}
