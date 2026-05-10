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

/**
 * MT Studio — Analytics Service Stub
 * TODO: Añadir el ID de Google Analytics en index.html y activar esta integración.
 */
export const analytics = {
  track(event, props = {}) {
    // gtag('event', event, props)
    if (import.meta.env.DEV) {
      console.log('[Analytics stub]', event, props)
    }
  },
  pageView(path) {
    // gtag('config', GA_ID, { page_path: path })
    if (import.meta.env.DEV) {
      console.log('[Analytics stub] pageView:', path)
    }
  },
}
