import React, { useEffect, useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Lightbox — visor de imágenes fullscreen premium
 *
 * Props:
 *   images   → string[]   lista de URLs
 *   index    → number     índice inicial abierto (null = cerrado)
 *   onClose  → () => void
 */
export default function Lightbox({ images = [], index: initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex ?? 0)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Touch/swipe
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const isOpen = initialIndex !== null && initialIndex !== undefined
  const total  = images.length

  // Sincronizar índice cuando se abre desde afuera
  useEffect(() => {
    if (isOpen) {
      setCurrent(initialIndex)
      setImgLoaded(false)
    }
  }, [initialIndex, isOpen])

  // Reset imgLoaded al cambiar imagen
  useEffect(() => { setImgLoaded(false) }, [current])

  // Lock body scroll
  useEffect(() => {
    if (!isOpen) return
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top      = `-${scrollY}px`
    document.body.style.width    = '100%'
    return () => {
      document.body.style.position = ''
      document.body.style.top      = ''
      document.body.style.width    = ''
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape')    onClose()
    if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % total)
    if (e.key === 'ArrowLeft')  setCurrent((c) => (c - 1 + total) % total)
  }, [isOpen, total, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    // Solo swipe horizontal (ignorar si el swipe fue más vertical)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) setCurrent((c) => (c + 1) % total)
      else        setCurrent((c) => (c - 1 + total) % total)
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  if (!isOpen) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Imagen ${current + 1} de ${total}`}
      >
        {/* Backdrop — click fuera cierra, z-0 para no tapar controles */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'rgba(4, 6, 10, 0.95)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* ── Header barra superior ── */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-6 py-4">
          {/* Contador */}
          <span className="text-xs font-medium text-text-muted tabular-nums">
            {current + 1} / {total}
          </span>

          {/* Dots indicadores */}
          {total > 1 && (
            <div className="flex gap-1.5" aria-hidden="true">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width:  i === current ? '20px' : '6px',
                    height: '6px',
                    background: i === current
                      ? 'linear-gradient(90deg, #8B5CF6, #06B6D4)'
                      : 'rgba(255,255,255,0.25)',
                  }}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl
                       text-text-muted hover:text-text-primary
                       bg-white/6 hover:bg-white/12 border border-white/8 hover:border-white/20
                       transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Cerrar galería (ESC)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* ── Imagen central ── */}
        <div
          className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-20 py-20"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="relative max-w-5xl w-full"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Skeleton mientras carga */}
              {!imgLoaded && (
                <div
                  className="absolute inset-0 rounded-panel skeleton"
                  style={{ aspectRatio: '16/9' }}
                  aria-hidden="true"
                />
              )}

              <img
                src={images[current]}
                alt={`Captura ${current + 1} de ${total}`}
                className="w-full h-auto rounded-panel shadow-card-hover"
                style={{
                  maxHeight: 'calc(100svh - 120px)',
                  objectFit: 'contain',
                  opacity: imgLoaded ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                }}
                onLoad={() => setImgLoaded(true)}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Flechas de navegación (desktop) ── */}
        {total > 1 && (
          <>
            <NavArrow direction="left"  onClick={(e) => { e.stopPropagation(); prev() }} />
            <NavArrow direction="right" onClick={(e) => { e.stopPropagation(); next() }} />
          </>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

function NavArrow({ direction, onClick }) {
  const isLeft = direction === 'left'
  return (
    <button
      onClick={onClick}
      className="absolute z-20 top-1/2 -translate-y-1/2 hidden md:flex
                 w-11 h-11 items-center justify-center rounded-xl
                 text-text-secondary hover:text-text-primary
                 bg-white/6 hover:bg-white/14 border border-white/8 hover:border-white/20
                 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400
                 active:scale-95"
      style={{ [isLeft ? 'left' : 'right']: '1rem' }}
      aria-label={isLeft ? 'Imagen anterior' : 'Imagen siguiente'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        {isLeft
          ? <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M6 3l5 5-5 5"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        }
      </svg>
    </button>
  )
}
