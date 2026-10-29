/**
 * MT Studio — Medición de conversiones
 * ─────────────────────────────────────────────────────────────────
 * Dos conversiones: el clic en WhatsApp y el envío del formulario que salió
 * bien. Todo pasa por window.gtag, que solo existe si el build tuvo
 * VITE_GA_ID: sin el ID, estas funciones no hacen nada. Ver docs/MEDICION.md.
 */

// Destinos de las conversiones de Google Ads ('AW-XXXXXXXXX/etiqueta'). Sin
// ellos, el evento va solo a GA4. Nunca se llama gtag('config', 'AW-…'): el
// destino de Ads tiene que venir dentro de la etiqueta de GA4, o el sitio
// quedaría con dos etiquetas.
const ADS = {
  whatsapp: import.meta.env.VITE_ADS_WHATSAPP,
  formulario: import.meta.env.VITE_ADS_FORMULARIO,
}

function enviar(nombre, params) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', nombre, params)
}

function conversionAds(sendTo) {
  if (sendTo) enviar('conversion', { send_to: sendTo })
}

/** El formulario se envió y EmailJS respondió bien; no se llama al tocar el botón. */
export function registrarFormulario(servicio) {
  enviar('generate_lead', { form_service: servicio || 'sin_elegir' })
  conversionAds(ADS.formulario)
}

/**
 * Cuenta como conversión cualquier clic a wa.me, diga lo que diga el botón:
 * un botón nuevo cuenta solo. El data-cta del enlace, si lo tiene, dice cuál
 * fue. No frena la navegación para esperar el envío: con un bloqueador de
 * anuncios, el botón quedaría trabado esperando algo que nunca sale.
 */
export function escucharClicsWhatsApp() {
  const alHacerClic = (e) => {
    // auxclick también llega con el botón derecho; solo cuenta la rueda.
    if (e.type === 'auxclick' && e.button !== 1) return
    const enlace = e.target instanceof Element ? e.target.closest('a[href]') : null
    if (!enlace) return
    let host
    try { host = new URL(enlace.href).hostname } catch { return }
    if (host !== 'wa.me') return
    enviar('whatsapp_click', { cta: enlace.dataset.cta || 'sin_nombre' })
    conversionAds(ADS.whatsapp)
  }
  document.addEventListener('click', alHacerClic, true)
  document.addEventListener('auxclick', alHacerClic, true)
  return () => {
    document.removeEventListener('click', alHacerClic, true)
    document.removeEventListener('auxclick', alHacerClic, true)
  }
}
