/**
 * MT Studio — i18n
 * Preparado para multilenguaje. Actualmente solo español.
 *
 * TODO: Integrar react-i18next o similar cuando se active el multilenguaje.
 * Estructura de carpetas a crear:
 *   src/i18n/
 *     locales/
 *       es/common.json
 *       en/common.json
 *     index.js  ← inicialización de i18next
 */

// Locale actual (hardcodeada hasta activar multilenguaje)
export const LOCALE = 'es'

// Placeholder hook — cuando se implemente i18next, reemplazar con useTranslation()
export function useT() {
  return { t: (key) => key, locale: LOCALE }
}

// Locales disponibles (para el futuro selector de idioma)
export const AVAILABLE_LOCALES = [
  { code: 'es', label: 'Español', flag: '🇦🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
]
