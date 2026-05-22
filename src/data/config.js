/**
 * MT Studio — Configuración global del sitio
 * ─────────────────────────────────────────────────────────────────
 * Modificar estos valores para actualizar el contacto en toda la app.
 * No hay que tocar ningún otro archivo.
 */

// ─── Contacto ─────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '541141578045'
export const EMAIL           = 'mtstudio.dev@gmail.com'
export const SITE_URL        = 'https://mtstudio.dev' // TODO: actualizar con dominio real

// ─── Redes sociales ───────────────────────────────────────────────
// TODO: actualizar con URLs definitivas cuando estén disponibles
export const SOCIAL = {
  instagram: 'https://instagram.com/mtstudio.dev',
  linkedin:  'https://linkedin.com/in/ezequiel-pertini',
  github:    'https://github.com/mtstudio',
  whatsapp:  `https://wa.me/${WHATSAPP_NUMBER}`,
}

// ─── WhatsApp ─────────────────────────────────────────────────────
export const WHATSAPP_MSG = 'Hola! Vi tu web y me gustaría consultar sobre un proyecto.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

// ─── EmailJS ──────────────────────────────────────────────────────
export const EMAILJS = {
  serviceId:  'service_g4r5o2m',
  templateId: 'template_lvmx2vo',
  publicKey:  'O4Ae803gb5tF6sTyj',
}

// ─── Info del estudio ─────────────────────────────────────────────
export const STUDIO = {
  name:     'MT Studio',
  founder:  'Ezequiel Pertini',
  location: 'Buenos Aires, Argentina',
  since:    2026,
}
