/**
 * MT Studio — Projects Data
 * Para agregar un proyecto, añadir un objeto a este array.
 * Las páginas de detalle y el grid se generan automáticamente.
 *
 * TODO: Reemplazar con CMS headless (Sanity/Contentful) cuando esté listo.
 */

export const projects = [
  {
    id: 1,
    slug: 'cargadirecta',
    title: 'CargaDirecta',
    tagline: 'Plataforma de logística inteligente',
    description:
      'Plataforma ecommerce de productos digitales con automatización de ventas y entregas instantáneas.',
    longDescription: `
      CargaDirecta es una plataforma ecommerce especializada en la venta de productos y recargas digitales, desarrollada para ofrecer compras rápidas, seguras y completamente automatizadas.

      El sistema integra procesamiento de pagos online, gestión dinámica de productos y entrega automática de contenido digital en tiempo real. Además, cuenta con un panel administrativo personalizado para control de ventas, usuarios, stock virtual y métricas operativas.

      Durante el desarrollo se priorizó una experiencia de usuario moderna, optimización para dispositivos móviles y una estructura escalable preparada para soportar crecimiento, nuevas integraciones y expansión a distintos mercados digitales.

    `,
    category: 'Sistema Web',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Maps API'],
    year: 2024,
    status: 'live',
    featured: true,
    image: '/projects/cargadirecta/cover.webp',
    images: [
      '/projects/cargadirecta/screen-1.webp',
      '/projects/cargadirecta/screen-2.webp',
      '/projects/cargadirecta/screen-3.webp',
    ],
    color: '#8B5CF6',
    accentColor: '#06B6D4',
    url: 'https://cargadirecta.com',
    metrics: [
      { label: 'Cargas gestionadas', value: '+10k' },
      { label: 'Reducción tiempo admin', value: '60%' },
      { label: 'Usuarios activos', value: '+200' },
    ],
    services: ['Diseño UI/UX', 'Desarrollo Full Stack', 'Integración APIs', 'Deploy & DevOps'],
  },
  {
    id: 2,
    slug: 'mini-facturante',
    title: 'Mini Facturante',
    tagline: 'Facturación electrónica simplificada',
    description:
      'Aplicación web para facturación electrónica AFIP dirigida a profesionales independientes y pequeñas empresas. Interfaz minimalista que elimina la complejidad del sistema tributario argentino.',
    longDescription: `
      Mini Facturante resuelve un problema que afecta a miles de monotributistas en Argentina:
      el sistema de facturación electrónica de AFIP es complejo, lento y poco intuitivo.

      Construimos una capa de experiencia sobre la API de AFIP que permite emitir comprobantes
      en segundos, gestionar clientes, ver reportes mensuales y exportar para la contadora —
      todo desde una interfaz limpia y moderna.
    `,
    category: 'Aplicación Web',
    tags: ['React', 'API AFIP', 'Node.js', 'MongoDB'],
    year: 2024,
    status: 'development',
    featured: true,
    image: '/projects/mini-facturante/cover.webp',
    images: [
      '/projects/mini-facturante/screen-1.webp',
      '/projects/mini-facturante/screen-2.webp',
      '/projects/mini-facturante/screen-3.webp',
    ],
    color: '#22D3EE',
    accentColor: '#8B5CF6',
    url: null,
    metrics: [
      { label: 'Tiempo por factura', value: '-80%' },
      { label: 'Errores de carga', value: '~0' },
      { label: 'Beta testers', value: '50+' },
    ],
    services: ['Diseño UI/UX', 'Desarrollo Frontend', 'Integración AFIP', 'Testing'],
  },
  // ─── Agregar nuevos proyectos aquí ───────────────────────────────
  // {
  //   id: 3,
  //   slug: 'nombre-proyecto',
  //   title: 'Nombre del Proyecto',
  //   tagline: 'Tagline breve',
  //   description: 'Descripción corta...',
  //   longDescription: `...`,
  //   category: 'Diseño Web',
  //   tags: ['React', 'Tailwind'],
  //   year: 2025,
  //   status: 'live', // 'live' | 'development' | 'concept'
  //   featured: false,
  //   image: '/projects/nombre/cover.jpg',
  //   images: [],
  //   color: '#8B5CF6',
  //   accentColor: '#06B6D4',
  //   url: 'https://...',
  //   metrics: [],
  //   services: [],
  // },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getRelatedProjects(slug, limit = 2) {
  return projects.filter((p) => p.slug !== slug).slice(0, limit)
}
