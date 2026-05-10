import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── PageLoader ───────────────────────────────────────────────────
export default function PageLoader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
      role="status"
      aria-label="Cargando página"
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span className="text-3xl font-black tracking-tight gradient-text">MT</span>
          <span className="text-3xl font-light text-text-secondary tracking-widest">Studio</span>
        </div>

        {/* Loader bar */}
        <div
          className="w-48 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <motion.div
            className="h-full bg-gradient-violet-cyan rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  )
}

// ─── ScrollRestoration ────────────────────────────────────────────
export function ScrollRestoration() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

// ─── InlineLoader (for sections) ─────────────────────────────────
export function InlineLoader({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center py-16 ${className}`}
      role="status"
      aria-label="Cargando contenido"
    >
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-violet-500"
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  )
}
