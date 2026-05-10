/**
 * MT Studio — Design Tokens
 * Single source of truth for all design values used in JS/JSX.
 * CSS counterparts live in globals.css as CSS custom properties.
 */

export const colors = {
  bg: {
    primary:   '#080B10',
    secondary: '#0D1117',
    tertiary:  '#111827',
    elevated:  '#161D2A',
    card:      '#0F1520',
  },
  violet: {
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    glow: 'rgba(139,92,246,0.15)',
  },
  cyan: {
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    glow: 'rgba(6,182,212,0.12)',
  },
  text: {
    primary:   '#F1F5F9',
    secondary: '#94A3B8',
    muted:     '#64748B',
    disabled:  '#334155',
  },
  border: {
    subtle:  'rgba(255,255,255,0.06)',
    default: 'rgba(255,255,255,0.10)',
    strong:  'rgba(255,255,255,0.18)',
    violet:  'rgba(139,92,246,0.30)',
    cyan:    'rgba(6,182,212,0.25)',
  },
}

export const gradients = {
  brand:    'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
  text:     'linear-gradient(135deg, #A78BFA 0%, #67E8F9 100%)',
  hero:     'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.15) 0%, transparent 70%)',
  card:     'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(6,182,212,0.04) 100%)',
  dark:     'linear-gradient(180deg, #080B10 0%, #0D1117 100%)',
}

export const shadows = {
  card:       '0 4px 24px rgba(0,0,0,0.40)',
  cardHover:  '0 8px 40px rgba(0,0,0,0.60)',
  glowViolet: '0 0 30px rgba(139,92,246,0.20), 0 0 60px rgba(139,92,246,0.08)',
  glowCyan:   '0 0 30px rgba(6,182,212,0.18), 0 0 60px rgba(6,182,212,0.06)',
}

export const spacing = {
  containerMax: '1280px',
  containerPx:  '1.5rem',
  sectionPy:    '7rem',
}

export const radii = {
  card:  '1rem',
  panel: '1.25rem',
  pill:  '9999px',
}

export const transitions = {
  fast:   '150ms ease',
  base:   '250ms ease',
  smooth: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
}

export const breakpoints = {
  xs:  480,
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1440,
}

// Framer Motion variants — shared across components
export const motionVariants = {
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  fadeUp: {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  fadeUpDelayed: (delay = 0) => ({
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] } },
  }),
  staggerContainer: {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.12 } },
  },
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  },
  slideInLeft: {
    hidden:  { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  slideInRight: {
    hidden:  { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
}
