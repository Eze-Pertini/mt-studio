import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { motionVariants } from '@styles/tokens'

// ─── FadeUp — scroll reveal with fade + slide up ──────────────────

/**
 * `immediate` — para contenido que se ve sin hacer scroll.
 *
 * Estos componentes arrancan en opacity 0 y se revelan cuando el elemento
 * entra en viewport. Con el sitio prerenderizado eso tiene un costo que no
 * es obvio: el HTML se sirve con el contenido invisible, y el visitante no
 * lo ve hasta que bajan los 116 KB de framer-motion, React hidrata y el
 * observer dispara. En un telefono con 4G eso son segundos, y si el
 * elemento escondido es el mas grande de la pantalla, es el LCP.
 *
 * Con immediate el elemento se renderiza en su estado final, visible desde
 * el HTML. Se usa solo arriba del pliegue; mas abajo la animacion de
 * aparicion no cuesta nada porque ya hubo tiempo de cargar todo.
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  immediate = false,
  ...props
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px' })
  const visible = immediate || inView

  return (
    <motion.div
      ref={ref}
      initial={immediate ? false : { opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeIn — simple fade on scroll ──────────────────────────────
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  immediate = false,
  ...props
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-40px' })
  const visible = immediate || inView

  return (
    <motion.div
      ref={ref}
      initial={immediate ? false : { opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={`will-change-opacity ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerContainer — stagger children on scroll ────────────────
export function StaggerContainer({
  children,
  className = '',
  stagger = 0.1,
  once = true,
  ...props
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerItem — child of StaggerContainer ──────────────────────
export function StaggerItem({ children, className = '', ...props }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
      }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── SlideIn — slide from left or right ──────────────────────────
export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  className = '',
  once = true,
  immediate = false,
  ...props
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px' })
  const visible = immediate || inView
  const x = direction === 'left' ? -32 : 32

  return (
    // El clip-path en el contenedor evita que la animación x genere overflow horizontal
    <div style={{ overflow: 'clip' }}>
      <motion.div
        ref={ref}
        initial={immediate ? false : { opacity: 0, x }}
        animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x }}
        transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
        className={`will-change-transform ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}

// ─── ScaleIn — scale from slightly smaller ───────────────────────
export function ScaleIn({
  children,
  delay = 0,
  className = '',
  once = true,
  immediate = false,
  ...props
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-40px' })
  const visible = immediate || inView

  return (
    <motion.div
      ref={ref}
      initial={immediate ? false : { opacity: 0, scale: 0.92 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── PageTransition — wraps full pages ───────────────────────────
// El primer render (el HTML generado en build y su hidratación) sale sin
// animación de entrada: si arrancara en opacity 0, la página quedaría en
// blanco hasta que el JS termine de cargar, y ese es justamente el estado
// que ve un visitante con conexión lenta. A partir de la primera navegación
// del cliente, la bandera ya está en true y las transiciones vuelven.
let clientNavigationStarted = false

export function PageTransition({ children, className = '' }) {
  const animateOnEnter = clientNavigationStarted

  useEffect(() => {
    clientNavigationStarted = true
  }, [])

  return (
    <motion.div
      initial={animateOnEnter ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── HoverCard — adds subtle scale on hover ───────────────────────
export function HoverCard({ children, className = '', scale = 1.02, ...props }) {
  return (
    <motion.div
      whileHover={{ scale, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── Float — gentle floating animation ────────────────────────────
export function Float({ children, className = '', amplitude = 10, duration = 5, ...props }) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
