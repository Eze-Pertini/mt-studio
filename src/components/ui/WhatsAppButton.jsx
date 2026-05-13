import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_NUMBER = '5491141578045' // TODO: Reemplazar con número real
const WHATSAPP_MSG    = 'Hola! Vi tu web y me gustaría consultar sobre un proyecto.'
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fixed z-40 bottom-6 right-6 md:bottom-6 md:right-6 flex items-center justify-end gap-3"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Tooltip — solo desktop */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="hidden md:block pointer-events-none select-none"
            role="tooltip"
            id="whatsapp-tooltip"
          >
            <div
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-text-primary whitespace-nowrap"
              style={{
                background: 'rgba(10, 14, 20, 0.90)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.40)',
              }}
            >
              Hablemos de tu proyecto
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp — Hablemos de tu proyecto"
        aria-describedby="whatsapp-tooltip"
        title="Hablemos de tu proyecto"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        // Entrada inicial
        initial={{ opacity: 0, scale: 0.8, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        // Hover
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center rounded-full
                   w-12 h-12 md:w-13 md:h-13
                   focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2
                   focus-visible:ring-offset-bg-primary will-change-transform"
        style={{
          background: 'rgba(10, 14, 20, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(6, 182, 212, 0.20)',
          boxShadow: hovered
            ? '0 0 0 1px rgba(6,182,212,0.25), 0 8px 32px rgba(0,0,0,0.50), 0 0 20px rgba(6,182,212,0.12)'
            : '0 4px 20px rgba(0,0,0,0.40)',
          transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
          borderColor: hovered ? 'rgba(6,182,212,0.35)' : 'rgba(6,182,212,0.20)',
          // Tamaño explícito para mobile
          width: '48px',
          height: '48px',
        }}
      >
        {/* Pulse ring muy sutil */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(6,182,212,0.15)' }}
          animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 1 }}
          aria-hidden="true"
        />

        {/* Ícono WhatsApp */}
        <WhatsAppIcon />
      </motion.a>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="22" height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="relative z-10"
      style={{ color: 'rgba(255,255,255,0.90)' }}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
