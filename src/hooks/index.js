import { useState, useEffect, useCallback, useRef } from 'react'
import { breakpoints } from '@styles/tokens'

// ─── useScrollProgress ────────────────────────────────────────────
// Returns scroll progress 0–1 for the entire page
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total    = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

// ─── useMediaQuery ────────────────────────────────────────────────
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export const useMobile  = () => useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`)
export const useTablet  = () => useMediaQuery(`(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`)
export const useDesktop = () => useMediaQuery(`(min-width: ${breakpoints.lg}px)`)

// ─── useLocalStorage ──────────────────────────────────────────────
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch { return initialValue }
  })

  const set = useCallback((val) => {
    try {
      const toStore = val instanceof Function ? val(value) : val
      setValue(toStore)
      window.localStorage.setItem(key, JSON.stringify(toStore))
    } catch { /* ignore */ }
  }, [key, value])

  return [value, set]
}

// ─── useDebounce ──────────────────────────────────────────────────
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}

// ─── useIntersection ──────────────────────────────────────────────
export function useIntersection(options = {}) {
  const ref     = useRef(null)
  const [entry, setEntry] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([e]) => setEntry(e), options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.root, options.rootMargin])

  return [ref, entry]
}
