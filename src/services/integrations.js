/**
 * MT Studio — CMS Service Stub
 * Preparado para Sanity / Contentful / Strapi.
 * TODO: Implementar cuando se elija el CMS.
 */
export const cms = {
  async getPosts()            { return null },
  async getPost(slug)         { return null },
  async getProjects()         { return null },
  async getProject(slug)      { return null },
}

/**
 * MT Studio — Auth Service Stub
 * Preparado para autenticación (JWT, Supabase, Auth0, etc.)
 * TODO: Implementar cuando se requiera área privada.
 */
export const auth = {
  async login(email, password) { return null },
  async logout()               { return null },
  async getUser()              { return null },
  isAuthenticated()            { return false },
}

/**
 * MT Studio — Email Service Stub
 * Preparado para EmailJS / Resend / SendGrid.
 * TODO: Integrar cuando el formulario de contacto necesite enviar emails reales.
 */
export const email = {
  async send(templateId, params) {
    // EmailJS: emailjs.send(serviceId, templateId, params)
    console.log('[Email stub] send:', { templateId, params })
    return { success: true }
  },
}

// La medición vive en services/analytics.js (ver docs/MEDICION.md).
