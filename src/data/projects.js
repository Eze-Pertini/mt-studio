/**
 * MT Studio — Projects Data
 * Para agregar un proyecto: copiar la estructura y completar los campos.
 * Las imágenes van en /public/projects/{slug}/
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
Carga Directa surgió de una necesidad concreta: darle a los gamers argentinos una forma rápida, confiable y sin fricciones de recargar sus juegos favoritos.

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
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getRelatedProjects(slug, limit = 2) {
  return projects.filter((p) => p.slug !== slug).slice(0, limit)
}
