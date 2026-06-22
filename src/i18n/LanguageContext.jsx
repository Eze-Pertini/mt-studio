import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'mt-studio-lang'

function detectInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* localStorage no disponible */ }

  // Detección automática por navegador — español por default
  const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase()
  return browserLang.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage)

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
