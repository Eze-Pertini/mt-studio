/**
 * MT Studio — API Service Stub
 * Preparado para integrar backend/API cuando esté disponible.
 *
 * TODO: Implementar cuando el backend esté listo.
 * Reemplazar las funciones stub con llamadas reales a la API.
 */

const API_BASE = import.meta.env.VITE_API_URL || 'https://api.mtstudio.dev'

// ─── Generic fetch wrapper ────────────────────────────────────────
async function apiFetch(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

// ─── Contact form ─────────────────────────────────────────────────
export async function submitContactForm(data) {
  // TODO: Implementar endpoint de contacto
  // return apiFetch('/contact', { method: 'POST', body: JSON.stringify(data) })
  console.log('[API stub] submitContactForm:', data)
  return { success: true }
}

// ─── Newsletter ───────────────────────────────────────────────────
export async function subscribeNewsletter(email) {
  // TODO: Implementar integración con Mailchimp/ConvertKit/etc.
  console.log('[API stub] subscribeNewsletter:', email)
  return { success: true }
}

export default { submitContactForm, subscribeNewsletter }
