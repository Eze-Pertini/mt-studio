import React from 'react'
import { motion } from 'framer-motion'

// ─── Button ───────────────────────────────────────────────────────
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-pill
    transition-all duration-200 cursor-pointer select-none
    focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2
    focus-visible:ring-offset-bg-primary
    active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
  `

  const variants = {
    primary: `
      bg-gradient-violet-cyan text-white
      hover:opacity-90 hover:shadow-glow-violet
    `,
    secondary: `
      bg-white/8 text-text-primary border border-default
      hover:bg-white/12 hover:border-strong
    `,
    ghost: `
      text-text-secondary hover:text-text-primary
      hover:bg-white/6
    `,
    outline: `
      border border-violet-500/40 text-violet-400
      hover:bg-violet-500/10 hover:border-violet-500/60
    `,
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      style={{ display: 'inline-block' }}
    >
      <Tag
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  )
}

// ─── Badge ────────────────────────────────────────────────────────
export function Badge({ children, variant = 'violet', className = '' }) {
  const variants = {
    violet: 'bg-violet-500/12 border-violet-500/25 text-violet-400',
    cyan:   'bg-cyan-500/12 border-cyan-500/25 text-cyan-400',
    subtle: 'bg-white/6 border-white/12 text-text-secondary',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium border
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}

// ─── SectionLabel ─────────────────────────────────────────────────
export function SectionLabel({ children, icon, className = '' }) {
  return (
    <div className={`flex justify-center mb-4 ${className}`}>
      <Badge variant="violet">
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </Badge>
    </div>
  )
}

// ─── SectionHeading ───────────────────────────────────────────────
export function SectionHeading({ label, title, subtitle, center = true, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-display-md font-bold text-text-primary mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── Divider ──────────────────────────────────────────────────────
export function Divider({ className = '' }) {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-border-default to-transparent ${className}`}
      role="separator"
      aria-hidden="true"
    />
  )
}
