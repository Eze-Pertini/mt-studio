/**
 * MT Studio — Services Data
 * Archivo central de servicios. Para agregar uno nuevo, copiar la estructura
 * de cualquier servicio existente y completar los campos.
 *
 * Relación con portfolio: usar relatedCategories con los valores
 * exactos del campo `category` en projects.js.
 */

export const services = [
  {
    // ── Identificación ──────────────────────────────────────────
    id:   'diseno-web',
    slug: 'diseno-web',
    icon: '✦',
    color: 'violet',
    accentHex: '#8B5CF6',

    // ── Textos cortos (navbar, cards, overview) ──────────────────
    title:       'Diseño Web',
    tagline:     'Interfaces que no pasan desapercibidas',
    description: 'Diseñamos sitios web que combinan estética premium con usabilidad real. Cada proyecto parte de entender tu negocio, tu audiencia y lo que necesitás comunicar.',

    // ── Hero de la página individual ─────────────────────────────
    heroTitle:    'Sitios web que trabajan\npor tu negocio',
    heroSubtitle: 'Un sitio bien diseñado no es solo una cuestión estética. Es la diferencia entre alguien que se queda y alguien que se va en tres segundos.',

    // ── Problema que resuelve ────────────────────────────────────
    problem: {
      title: 'La mayoría de los sitios no convierten',
      body:  'Tener presencia online no alcanza si el sitio carga lento, se ve genérico o no guía al usuario hacia ninguna acción concreta. El diseño mal ejecutado genera desconfianza antes de que hayas podido decir una sola palabra.',
    },

    // ── Beneficios ───────────────────────────────────────────────
    benefits: [
      { icon: '◎', title: 'Primera impresión que retiene',  desc: 'Los usuarios deciden en segundos. Un diseño coherente y profesional genera confianza antes de que lean una palabra.' },
      { icon: '✦', title: 'Diseñado para convertir',        desc: 'Cada sección tiene un propósito. Nada decorativo sin función. El flujo visual guía al usuario hacia la acción.' },
      { icon: '⬡', title: 'Responsive de verdad',           desc: 'No adaptado a último momento. Diseñado desde mobile hacia arriba, con la misma calidad en cada dispositivo.' },
      { icon: '⚡', title: 'Fácil de escalar',              desc: 'Sistemas de diseño bien documentados. Agregar páginas, secciones o contenido futuro no implica rehacer todo.' },
    ],

    // ── Qué incluye ──────────────────────────────────────────────
    features: [
      'Diseño UI/UX personalizado desde cero',
      'Responsive design completo (mobile-first)',
      'Prototipado interactivo antes del desarrollo',
      'Sistema de componentes reutilizables',
      'Optimización de velocidad y performance',
      'Integración con CMS si es necesario',
      'Entrega con documentación básica',
    ],

    // ── Stack tecnológico ────────────────────────────────────────
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Vite'],

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      title:    '¿Tenés un proyecto en mente?',
      subtitle: 'Contanos qué necesitás. Sin formularios kilométricos ni esperas eternas.',
      label:    'Hablar sobre mi sitio',
    },

    // ── SEO ──────────────────────────────────────────────────────
    seo: {
      title:       'Diseño Web Premium | MT Studio',
      description: 'Diseñamos sitios web modernos, rápidos y orientados a resultados. UI/UX personalizado, responsive y con foco en conversión.',
    },

    // ── Relación con portfolio ───────────────────────────────────
    relatedCategories: ['Diseño Web'],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id:   'ecommerce',
    slug: 'ecommerce',
    icon: '◈',
    color: 'cyan',
    accentHex: '#06B6D4',

    title:       'Ecommerce',
    tagline:     'Tiendas online que venden de verdad',
    description: 'Desarrollamos tiendas online completas con foco en experiencia de compra, performance y conversión. Desde catálogo hasta checkout, sin fricciones.',

    heroTitle:    'Una tienda que no\npone obstáculos',
    heroSubtitle: 'El ecommerce que no convierte no es un problema de tráfico. Es un problema de experiencia. Cada paso del proceso de compra tiene que ser obvio, rápido y confiable.',

    problem: {
      title: 'Perder ventas en el checkout es evitable',
      body:  'La mayoría de los carritos abandonados no son por falta de intención de compra. Son por fricción: procesos confusos, medios de pago que no aparecen, páginas que cargan lento o un diseño que no genera confianza en el momento decisivo.',
    },

    benefits: [
      { icon: '◈', title: 'Checkout sin fricciones',        desc: 'Flujo de compra directo, claro y optimizado. Menos pasos, menos abandono, más conversiones.' },
      { icon: '◎', title: 'Medios de pago del mercado',     desc: 'Mercado Pago, transferencia, tarjetas. Lo que tus clientes ya usan y confían.' },
      { icon: '⬡', title: 'Gestión desde el día uno',       desc: 'Panel de administración claro para manejar productos, stock y pedidos sin depender de nadie.' },
      { icon: '✦', title: 'Preparado para escalar',         desc: 'Arquitectura que aguanta crecimiento. Agregar categorías, variantes o integraciones sin reescribir todo.' },
    ],

    features: [
      'Diseño enfocado en conversión',
      'Integración Mercado Pago / otros medios',
      'Gestión de productos, variantes y stock',
      'Carrito y checkout optimizados',
      'Panel de administración propio',
      'Notificaciones automáticas de pedidos',
      'Analytics e informes de ventas',
      'SEO técnico para productos',
    ],

    technologies: ['React', 'Next.js', 'WooCommerce', 'Mercado Pago API', 'Node.js', 'PostgreSQL'],

    cta: {
      title:    '¿Querés empezar a vender online?',
      subtitle: 'Contanos tu negocio. Te decimos cómo lo encaramos y qué necesitás para arrancar.',
      label:    'Hablar sobre mi tienda',
    },

    seo: {
      title:       'Desarrollo Ecommerce | MT Studio',
      description: 'Tiendas online con diseño premium, checkout optimizado e integración de medios de pago. Ecommerce que convierte visitas en ventas.',
    },

    relatedCategories: ['Ecommerce', 'Aplicación Web'],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id:   'sistemas-web',
    slug: 'sistemas-web',
    icon: '⬡',
    color: 'violet',
    accentHex: '#8B5CF6',

    title:       'Sistemas Web',
    tagline:     'Software a medida para tu operación',
    description: 'Desarrollamos sistemas web a medida para digitalizar y optimizar procesos internos. Desde CRMs y ERPs hasta herramientas específicas para tu industria.',

    heroTitle:    'Tu operación en un\nsistema que la entiende',
    heroSubtitle: 'Las planillas y los procesos manuales tienen un límite. Cuando tu negocio crece, necesita herramientas que crezcan con él. No adaptaciones de software genérico: algo construido para lo que vos hacés.',

    problem: {
      title: 'El software genérico tiene un costo oculto',
      body:  'Pagar por funciones que no usás, adaptarte a flujos que no son los tuyos, exportar datos a planillas para hacer lo que el sistema no puede. El costo real de un sistema que no encaja no está en el precio mensual, está en el tiempo que consume tu equipo todos los días.',
    },

    benefits: [
      { icon: '⬡', title: 'Construido para tu flujo',       desc: 'No vas a tener que adaptar tu operación al sistema. El sistema se adapta a cómo trabaja tu equipo.' },
      { icon: '◎', title: 'Una sola fuente de información',  desc: 'Todos los datos en un lugar. Sin planillas paralelas, sin versiones desactualizadas, sin información dispersa.' },
      { icon: '⚡', title: 'Integraciones reales',           desc: 'Se conecta con lo que ya usás: facturación, logística, APIs externas. Sin procesos duplicados.' },
      { icon: '✦', title: 'Escala con vos',                  desc: 'Arquitectura pensada para crecer. Agregar módulos, usuarios o funcionalidad no implica reescribir desde cero.' },
    ],

    features: [
      'Relevamiento y análisis funcional detallado',
      'Arquitectura backend escalable',
      'API REST o GraphQL según necesidad',
      'Panel de administración a medida',
      'Roles y permisos de usuarios',
      'Integración con sistemas y APIs externas',
      'Dashboard con métricas relevantes',
      'Documentación técnica incluida',
    ],

    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST API', 'Docker'],

    cta: {
      title:    '¿Necesitás un sistema a medida?',
      subtitle: 'Contanos qué proceso querés digitalizar. Arrancamos con un relevamiento sin compromiso.',
      label:    'Hablar sobre mi sistema',
    },

    seo: {
      title:       'Sistemas Web a Medida | MT Studio',
      description: 'Desarrollamos sistemas web personalizados: CRMs, ERPs, paneles de gestión y herramientas internas. Software que se adapta a tu operación.',
    },

    relatedCategories: ['Sistema Web'],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id:   'automatizacion',
    slug: 'automatizacion',
    icon: '⚡',
    color: 'cyan',
    accentHex: '#06B6D4',

    title:       'Automatización',
    tagline:     'Que las tareas repetitivas se hagan solas',
    description: 'Identificamos los procesos manuales que consumen tiempo de tu equipo y los automatizamos. Workflows, integraciones y bots que trabajan 24/7 por vos.',

    heroTitle:    'Las horas que perdés\nen tareas repetitivas',
    heroSubtitle: 'Responder los mismos mensajes, pasar datos de un sistema a otro, generar reportes a mano, recordar seguimientos. Esas tareas tienen solución. Y la solución no es contratar más gente.',

    problem: {
      title: 'Tu equipo vale más que copiar y pegar',
      body:  'Cada hora que alguien del equipo dedica a tareas mecánicas es una hora que no está resolviendo problemas reales, atendiendo clientes o haciendo crecer el negocio. La automatización no reemplaza personas: libera su tiempo para lo que importa.',
    },

    benefits: [
      { icon: '⚡', title: 'Funciona cuando no estás',       desc: 'Workflows que corren solos, a cualquier hora, sin supervisión. El negocio no para cuando terminás el día.' },
      { icon: '◎', title: 'Menos errores humanos',           desc: 'Los procesos mecánicos tienen errores mecánicos. Automatizarlos elimina la variabilidad y los olvidos.' },
      { icon: '◈', title: 'Todo conectado',                  desc: 'CRM, facturación, WhatsApp, email, planillas. Las herramientas que ya usás, hablando entre sí.' },
      { icon: '✦', title: 'ROI medible',                     desc: 'Las horas ahorradas por semana son un número concreto. La automatización es una inversión con retorno claro.' },
    ],

    features: [
      'Relevamiento de procesos automatizables',
      'Automatización de workflows internos',
      'Integraciones entre plataformas (CRM, email, WhatsApp)',
      'Bots de respuesta y seguimiento automático',
      'Generación automática de reportes',
      'Alertas y notificaciones configurables',
      'Scripts y tareas programadas',
    ],

    technologies: ['Node.js', 'Make (Integromat)', 'Zapier', 'WhatsApp API', 'Google Sheets API', 'OpenAI API'],

    cta: {
      title:    '¿Qué proceso te consume más tiempo?',
      subtitle: 'Contanos cuál es la tarea que más se repite en tu equipo. Probablemente tenga solución.',
      label:    'Hablar sobre automatización',
    },

    seo: {
      title:       'Automatización de Procesos | MT Studio',
      description: 'Automatizamos workflows, integraciones y tareas repetitivas. Más tiempo para tu equipo, menos errores, procesos que funcionan solos.',
    },

    relatedCategories: ['Automatización', 'Sistema Web'],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id:   'mantenimiento-web',
    slug: 'mantenimiento-web',
    icon: '◎',
    color: 'violet',
    accentHex: '#8B5CF6',

    title:       'Mantenimiento Web',
    tagline:     'Tu sitio siempre al día, siempre seguro',
    description: 'Nos ocupamos de mantener tu sitio o sistema funcionando al 100%. Actualizaciones, backups, monitoreo y soporte técnico para que vos te concentres en tu negocio.',

    heroTitle:    'Tu sitio no debería\nser tu problema',
    heroSubtitle: 'Un sitio que nadie mantiene acumula deuda técnica, se vuelve lento, queda expuesto a vulnerabilidades y eventualmente falla en el peor momento. El mantenimiento no es un costo extra: es lo que protege la inversión que ya hiciste.',

    problem: {
      title: 'Los sitios sin mantenimiento tienen fecha de vencimiento',
      body:  'Plugins desactualizados, certificados SSL vencidos, backups que nunca se hicieron, errores que nadie detectó hasta que un cliente los reportó. El mantenimiento preventivo es siempre más barato que el mantenimiento de emergencia.',
    },

    benefits: [
      { icon: '◎', title: 'Monitoreo continuo',              desc: 'Sabemos si algo falla antes de que lo note un cliente. Alertas automáticas, respuesta rápida.' },
      { icon: '⬡', title: 'Backups que funcionan',           desc: 'Copias de seguridad automáticas y verificadas. Si algo sale mal, restauramos sin pérdida de información.' },
      { icon: '✦', title: 'Actualizaciones sin sorpresas',   desc: 'Las actualizaciones se hacen en entornos de prueba antes de aplicarlas. Nada que rompa sin aviso.' },
      { icon: '⚡', title: 'Soporte directo',                desc: 'Comunicación directa, sin tickets que nadie lee. Cuando necesitás algo, respondemos.' },
    ],

    features: [
      'Monitoreo de uptime 24/7',
      'Backups automáticos con verificación',
      'Actualizaciones de seguridad y dependencias',
      'Revisión mensual de performance',
      'Corrección de errores y bugs',
      'Soporte técnico prioritario',
      'Reporte mensual de estado',
      'Pequeñas mejoras y ajustes incluidos',
    ],

    technologies: ['WordPress', 'React', 'Node.js', 'Nginx', 'Cloudflare', 'GitHub Actions'],

    cta: {
      title:    '¿Tu sitio está en buenas manos?',
      subtitle: 'Si no estás seguro, probablemente no lo esté. Hablemos antes de que sea un problema.',
      label:    'Hablar sobre mantenimiento',
    },

    seo: {
      title:       'Mantenimiento Web Profesional | MT Studio',
      description: 'Mantenimiento, monitoreo y soporte técnico para sitios y sistemas web. Tu presencia digital siempre segura y actualizada.',
    },

    relatedCategories: ['Diseño Web', 'Ecommerce', 'Sistema Web'],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────

export function getServiceById(id) {
  return services.find((s) => s.id === id) ?? null
}

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null
}

// Normaliza categorías para comparación case-insensitive
function normalizeCategory(str) {
  return str.toLowerCase().trim()
}

export function getRelatedProjects(service, allProjects) {
  if (!service.relatedCategories?.length) return []
  const normalized = service.relatedCategories.map(normalizeCategory)
  return allProjects.filter((p) =>
    normalized.includes(normalizeCategory(p.category))
  )
}
