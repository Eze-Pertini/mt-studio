import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'mt-studio-lang'

const DEFAULT_LANG = 'es'

export function LanguageProvider({ children }) {
  // El primer render es siempre en español. Es el idioma que se indexa y el
  // que va a quedar en el HTML prerenderizado, asi que leer localStorage o
  // navigator.language en este punto produciria una discordancia con el
  // marcado servido.
  const [lang, setLang] = useState(DEFAULT_LANG)

  // La preferencia guardada se aplica recien despues de la hidratación, y
  // solo si el usuario eligió el idioma a mano alguna vez. Ya no se detecta
  // por navigator.language: Googlebot rastrea con Accept-Language en-US y
  // terminaba viendo la version en ingles bajo la URL canónica en español.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'es' || saved === 'en') setLang(saved)
    } catch { /* localStorage no disponible */ }
  }, [])

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
    document.documentElement.lang = lang
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const setLanguage = useCallback((next) => {
    if (next === 'es' || next === 'en') setLang(next)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
