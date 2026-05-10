/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Colors ────────────────────────────────────────────────
      colors: {
        // Base backgrounds
        bg: {
          primary:   '#080B10',
          secondary: '#0D1117',
          tertiary:  '#111827',
          elevated:  '#161D2A',
          card:      '#0F1520',
        },
        // Brand accents
        violet: {
          50:  '#F5F3FF',
          100: '#EDE9FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          glow: 'rgba(139,92,246,0.15)',
        },
        cyan: {
          50:  '#ECFEFF',
          100: '#CFFAFE',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          glow: 'rgba(6,182,212,0.12)',
        },
        // Text hierarchy
        text: {
          primary:   '#F1F5F9',
          secondary: '#94A3B8',
          muted:     '#64748B',
          disabled:  '#334155',
        },
        // Borders
        border: {
          subtle:  'rgba(255,255,255,0.06)',
          default: 'rgba(255,255,255,0.10)',
          strong:  'rgba(255,255,255,0.18)',
          violet:  'rgba(139,92,246,0.30)',
          cyan:    'rgba(6,182,212,0.25)',
        },
      },

      // ─── Typography ────────────────────────────────────────────
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },

      // ─── Spacing ───────────────────────────────────────────────
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        section: '7rem',
      },

      // ─── Border Radius ─────────────────────────────────────────
      borderRadius: {
        'card':  '1rem',
        'panel': '1.25rem',
        'pill':  '9999px',
      },

      // ─── Box Shadow ────────────────────────────────────────────
      boxShadow: {
        'glow-violet': '0 0 30px rgba(139,92,246,0.20), 0 0 60px rgba(139,92,246,0.08)',
        'glow-cyan':   '0 0 30px rgba(6,182,212,0.18), 0 0 60px rgba(6,182,212,0.06)',
        'card':        '0 4px 24px rgba(0,0,0,0.40)',
        'card-hover':  '0 8px 40px rgba(0,0,0,0.60)',
        'inner-top':   'inset 0 1px 0 rgba(255,255,255,0.08)',
      },

      // ─── Gradients ─────────────────────────────────────────────
      backgroundImage: {
        'gradient-violet-cyan': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'gradient-dark':        'linear-gradient(180deg, #080B10 0%, #0D1117 100%)',
        'gradient-card':        'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(6,182,212,0.04) 100%)',
        'gradient-hero':        'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'gradient-text':        'linear-gradient(135deg, #A78BFA 0%, #67E8F9 100%)',
        'noise':                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },

      // ─── Breakpoints ───────────────────────────────────────────
      screens: {
        xs:  '480px',
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },

      // ─── Container ─────────────────────────────────────────────
      maxWidth: {
        container: '1280px',
        prose:     '68ch',
      },

      // ─── Animations ────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in':    'fade-in 0.5s ease-out',
        'fade-up':    'fade-up 0.6s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },

      // ─── Backdrop Blur ─────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
    },
  },
  plugins: [],
}
