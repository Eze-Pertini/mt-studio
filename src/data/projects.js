/**
 * MT Studio — Projects Data
 * Cada proyecto tiene su contenido en español como base, y un sub-objeto `en`
 * con tagline/description/longDescription/category/metrics/services traducidos.
 * Las screenshots e imágenes son las mismas en ambos idiomas.
 */

export const projects = [
  {
    id: 1,
    slug: 'cargadirecta',
    title: 'Carga Directa',
    tagline: 'Ecommerce de recargas y gift cards para gamers',
    description:
      'Tienda online de venta de gift cards y recargas de saldo para juegos como Free Fire, Roblox, Fortnite y Brawl Stars. Entregas instantáneas, múltiples medios de pago y alrededor de 300 ventas mensuales.',
    longDescription: `
CargaDirecta surgió de una necesidad concreta: darle a los gamers argentinos una forma rápida, confiable y sin fricciones de recargar sus juegos favoritos.

El desafío era construir una tienda que manejara una gran cantidad de variantes de producto, descuentos por medio de pago, entregas digitales instantáneas y un flujo de compra lo más simple posible para un público joven que no tolera la fricción.

Desarrollamos el sitio sobre WordPress + WooCommerce con el tema Astra y customizaciones propias. Integramos Mercado Pago para el procesamiento de pagos y configuramos la lógica de descuentos automáticos por transferencia bancaria. El resultado es una tienda que opera de forma prácticamente autónoma con mínima intervención manual.
    `,
    category: 'Ecommerce',
    tags: ['WordPress', 'WooCommerce', 'Mercado Pago', 'Astra', 'PHP'],
    year: 2024,
    status: 'live',
    featured: true,
    image: '/projects/cargadirecta/cover.webp',
    images: [
      '/projects/cargadirecta/screen-1.webp',
      '/projects/cargadirecta/screen-2.webp',
      '/projects/cargadirecta/screen-3.webp',
    ],
    color: '#06B6D4',
    accentColor: '#8B5CF6',
    url: 'https://www.cargadirecta.com',
    metrics: [
      { label: 'Ventas mensuales', value: '~300' },
      { label: 'Categorías', value: '6' },
      { label: 'Productos activos', value: '50+' },
    ],
    services: ['Diseño y desarrollo ecommerce', 'Integración Mercado Pago', 'Configuración WooCommerce', 'SEO técnico'],

    en: {
      tagline: 'Ecommerce for gift cards and game top-ups',
      description:
        'Online store selling gift cards and balance top-ups for games like Free Fire, Roblox, Fortnite, and Brawl Stars. Instant delivery, multiple payment methods, and around 300 sales per month.',
      longDescription: `
CargaDirecta came from a concrete need: giving Argentine gamers a fast, reliable, frictionless way to top up their favorite games.

The challenge was building a store that could handle a large number of product variants, payment-method discounts, instant digital delivery, and a checkout flow simple enough for a young audience with zero tolerance for friction.

We built the site on WordPress + WooCommerce with the Astra theme and custom development. We integrated Mercado Pago for payment processing and set up automatic discount logic for bank transfers. The result is a store that runs almost entirely on its own with minimal manual intervention.
      `,
      category: 'Ecommerce',
      metrics: [
        { label: 'Monthly sales', value: '~300' },
        { label: 'Categories', value: '6' },
        { label: 'Active products', value: '50+' },
      ],
      services: ['Ecommerce design & development', 'Mercado Pago integration', 'WooCommerce setup', 'Technical SEO'],
    },
  },

  {
    id: 2,
    slug: 'factu',
    title: 'Factu',
    tagline: 'Facturación electrónica AFIP en tres clicks',
    description:
      'Aplicación web para facturación electrónica ante AFIP/ARCA, orientada a profesionales independientes y pequeñas empresas. Automatiza un proceso que antes llevaba horas, reduciéndolo a segundos.',
    longDescription: `
Factu nació de una frustración real: el sistema de facturación electrónica de AFIP es lento, confuso y está pensado para contadores, no para el profesional independiente que solo quiere cobrar por su trabajo sin perder media hora en el proceso.

El sistema permite importar cobros de Mercado Pago directamente, cargar clientes y servicios, y emitir facturas electrónicas validadas ante ARCA en tres pasos. Todo sin conocimientos contables previos.

Desarrollado en PHP con MySQL, el sistema maneja autenticación, gestión de clientes, historial de comprobantes con exportación a Excel, y conexión directa con la API de AFIP para la emisión de facturas C. Actualmente en uso por el propio estudio y en proceso de ampliarse a más usuarios.
    `,
    category: 'Sistema Web',
    tags: ['PHP', 'MySQL', 'API AFIP', 'Mercado Pago API'],
    year: 2025,
    status: 'live',
    featured: true,
    image: '/projects/factu/cover.webp',
    images: [
      '/projects/factu/screen-1.webp',
      '/projects/factu/screen-2.webp',
      '/projects/factu/screen-3.webp',
    ],
    color: '#8B5CF6',
    accentColor: '#06B6D4',
    url: null,
    metrics: [
      { label: 'Tiempo por factura', value: '-90%' },
      { label: 'Facturas emitidas', value: '14+' },
      { label: 'Errores de carga', value: '0' },
    ],
    services: ['Diseño UI/UX', 'Desarrollo Full Stack', 'Integración API AFIP', 'Integración Mercado Pago'],

    en: {
      tagline: 'AFIP electronic invoicing in three clicks',
      description:
        'Web application for electronic invoicing with AFIP/ARCA (Argentina\u2019s tax authority), built for freelancers and small businesses. Automates a process that used to take hours, reducing it to seconds.',
      longDescription: `
Factu came out of a real frustration: AFIP\u2019s electronic invoicing system is slow, confusing, and built for accountants \u2014 not for the independent professional who just wants to get paid without losing half an hour to the process.

The system lets you import Mercado Pago payments directly, add clients and services, and issue electronic invoices validated with ARCA in three steps. No accounting knowledge required.

Built in PHP with MySQL, the system handles authentication, client management, invoice history with Excel export, and a direct connection to AFIP\u2019s API for issuing Type C invoices. Currently in use by the studio itself and being expanded to more users.
      `,
      category: 'Web System',
      metrics: [
        { label: 'Time per invoice', value: '-90%' },
        { label: 'Invoices issued', value: '14+' },
        { label: 'Data entry errors', value: '0' },
      ],
      services: ['UI/UX design', 'Full Stack development', 'AFIP API integration', 'Mercado Pago integration'],
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getRelatedProjects(slug, limit = 2) {
  return projects.filter((p) => p.slug !== slug).slice(0, limit)
}

/**
 * Devuelve el proyecto con los campos traducidos según el idioma activo.
 * En inglés sobreescribe tagline/description/longDescription/category/
 * metrics/services con los del sub-objeto `en`. Imágenes, tags, año,
 * color y url quedan iguales en ambos idiomas.
 */
export function localizeProject(project, lang) {
  if (!project) return project
  if (lang !== 'en' || !project.en) return project
  const { en, ...base } = project
  return { ...base, ...en }
}

export function localizeProjects(lang) {
  return projects.map((p) => localizeProject(p, lang))
}

export function getFeaturedProjects(lang) {
  return localizeProjects(lang).filter((p) => p.featured)
}
