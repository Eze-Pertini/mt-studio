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
    // seoTitle y seoDescription son opcionales: sobrescriben lo que sale en el
    // <title> y en la meta description sin tocar lo que se ve en la pagina.
    schemaType: 'CreativeWork',
    seoTitle: 'Carga Directa: ecommerce de gift cards',
    seoDescription:
      'Caso de estudio: tienda de recargas para Free Fire, Roblox y Fortnite con entrega instantánea y Mercado Pago. WordPress, WooCommerce y PHP.',
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
    // TODO(SEO): poner la fecha real del ultimo cambio de contenido de esta ficha.
    updatedAt: '2026-09-10',
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

    // Relaciones declaradas: ver src/data/related.js
    relatedServices: ['ecommerce'],
    relatedPosts: ['wordpress-vs-desarrollo-a-medida'],

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
    schemaType: 'SoftwareApplication',
    seoTitle: 'Factu: facturación electrónica ARCA (ex AFIP)',
    seoDescription:
      'Caso de estudio: una app que conecta Mercado Pago con ARCA (ex AFIP) y emite la Factura C automáticamente. Laravel, PostgreSQL y el web service WSFEv1.',
    tagline: 'Conecta Mercado Pago con ARCA y factura solo',
    description:
      'Aplicación web que factura las ventas de los monotributistas sin intervención: conecta Mercado Pago con ARCA, emite la Factura C y le manda el PDF al cliente por mail. En producción, emitiendo comprobantes fiscales reales.',
    longDescription: `
Un monotributista que cobra por Mercado Pago tiene que entrar al sitio de ARCA y cargar cada venta a mano, una por una. Las alternativas del mercado resuelven eso con un abono mensual que se paga se use o no; Factu cobra por comprobante emitido, con créditos que no vencen.

Factu conecta la cuenta de Mercado Pago del usuario vía OAuth, importa cada cobro y emite la Factura C contra el web service de ARCA (WSFEv1, SOAP): obtiene el CAE, genera el PDF con el QR de la RG 4892 y se lo manda al receptor por mail. Opcionalmente en automático, sin que el usuario entre a la aplicación. Es multi-local: soporta varios puntos de venta y varias cuentas de Mercado Pago, cada una con su numeración.

Lo particular de construirlo es que emitir un comprobante fiscal no admite deshacer. Un error no devuelve un mensaje de error: devuelve una factura real con CAE que solo se anula con una nota de crédito. Eso definió la arquitectura entera. La facturación automática resuelve toda decisión dudosa del lado de no emitir, porque una venta sin facturar se arregla en treinta segundos y una factura de más no. Los importes son enteros en centavos y nunca pasan por un float. Y un comprobante emitido congela los datos del emisor en la fila: editar el domicilio fiscal rige de ahí en adelante, nunca hacia atrás.

Lo construimos sobre Laravel 12 y PHP 8.4, con PostgreSQL, Redis e Inertia + React 19 en TypeScript. Desplegado en Vultr con Laravel Forge: worker de colas, scheduler, SSL y backups cifrados fuera del servidor. 833 tests automatizados y análisis estático en nivel 6.
    `,
    category: 'Sistema Web',
    tags: ['Laravel 12', 'React 19', 'ARCA WSFEv1', 'Mercado Pago OAuth', 'PHP 8.4', 'PostgreSQL', 'Redis', 'TypeScript', 'Inertia', 'Tailwind 4'],
    year: 2026,
    updatedAt: '2026-09-10',
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
    url: 'https://tufactu.app/?utm_source=mtstudio&utm_medium=portfolio',
    metrics: [
      { label: 'Clicks por factura', value: '0' },
      { label: 'Puntos de venta', value: 'Multi-local' },
      { label: 'Tests automatizados', value: '833' },
    ],
    services: ['Producto y diseño UI/UX', 'Desarrollo Full Stack', 'Integración ARCA (WSFEv1)', 'Integración Mercado Pago (OAuth)', 'Infraestructura y deploy'],

    // Relaciones declaradas: ver src/data/related.js
    relatedServices: ['sistemas-web'],
    relatedPosts: ['facturacion-electronica-afip-para-independientes'],

    en: {
      tagline: 'Connects Mercado Pago to ARCA and invoices on its own',
      description:
        'Web app that invoices sales for Argentine self-employed taxpayers with no manual work: it connects Mercado Pago to ARCA, issues the Type C invoice, and emails the PDF to the customer. In production, issuing real fiscal documents.',
      longDescription: `
A self-employed taxpayer in Argentina who gets paid through Mercado Pago has to log into the ARCA site and enter every sale by hand, one at a time. The alternatives on the market solve that with a monthly subscription you pay whether you use it or not; Factu charges per issued document, with credits that never expire.

Factu connects the user\u2019s Mercado Pago account over OAuth, imports each payment, and issues the Type C invoice against the ARCA web service (WSFEv1, SOAP): it gets the CAE authorization code, renders the PDF with the RG 4892 QR code, and emails it to the recipient. Optionally on autopilot, without the user ever opening the app. It is multi-store: several points of sale and several Mercado Pago accounts, each with its own numbering.

What makes it interesting to build is that issuing a fiscal document has no undo. A bug does not return an error message: it returns a real, government-authorized invoice that can only be cancelled with a credit note. That shaped the entire architecture. Automatic invoicing resolves every uncertain decision on the side of not issuing, because an unbilled sale takes thirty seconds to fix and an extra invoice does not. Amounts are integers in cents and never touch a float. And an issued document freezes the issuer data in the row: editing the tax address applies from that point forward, never backwards.

We built it on Laravel 12 and PHP 8.4, with PostgreSQL, Redis, and Inertia + React 19 in TypeScript. Deployed on Vultr with Laravel Forge: queue worker, scheduler, SSL, and encrypted off-server backups. 833 automated tests and static analysis at level 6.
      `,
      category: 'Web System',
      metrics: [
        { label: 'Clicks per invoice', value: '0' },
        { label: 'Points of sale', value: 'Multi-store' },
        { label: 'Automated tests', value: '833' },
      ],
      services: ['Product & UI/UX design', 'Full Stack development', 'ARCA integration (WSFEv1)', 'Mercado Pago integration (OAuth)', 'Infrastructure & deployment'],
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
