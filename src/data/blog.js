/**
 * MT Studio — Blog Data
 * Artículos propios del estudio.
 * TODO: Migrar a CMS headless cuando el volumen lo justifique.
 */

export const posts = [
  {
    id: 1,
    slug: 'por-que-tu-sitio-web-no-convierte',
    title: 'Por qué tu sitio web no convierte (y no es un problema de tráfico)',
    excerpt:
      'La mayoría de los negocios creen que necesitan más visitas. Lo que en realidad necesitan es entender por qué las visitas que ya tienen no se convierten en clientes.',
    content: `
## El diagnóstico equivocado

Cuando un sitio web no genera resultados, la primera reacción casi siempre es la misma: "necesitamos más tráfico". Se contratan campañas de publicidad, se invierte en SEO, se publican contenidos. Y el resultado sigue siendo el mismo.

El problema raro vez es la cantidad de visitas. El problema es lo que pasa después de que alguien llega al sitio.

## Los tres motivos reales

### 1. La propuesta de valor no es clara en tres segundos

Un usuario decide si se queda o se va en menos de tres segundos. Si en ese tiempo no entiende qué hacés, para quién lo hacés y por qué debería importarle, se va. Y no vuelve.

El error más común es empezar con el nombre de la empresa en lugar de con el problema que resolvés. A nadie le importa cómo te llamás antes de entender si podés ayudarlos.

### 2. El diseño no guía hacia ninguna acción

Un sitio sin jerarquía visual clara es un sitio sin dirección. El usuario llega, ve mucho contenido de la misma importancia y no sabe qué hacer. La pregunta que tiene que hacerse en cada sección del sitio es: ¿qué quiero que el usuario haga después de leer esto?

Si no hay una respuesta clara, el diseño está fallando aunque se vea bonito.

### 3. No hay suficiente confianza generada antes del CTA

Pedirle a alguien que te contacte, compre o se registre antes de haberle dado razones para confiar es demasiado pronto. Los testimonios, los proyectos reales, los casos de éxito y la transparencia sobre el proceso son lo que cierra esa brecha entre interés y acción.

## Cómo diagnosticarlo

Antes de invertir un peso más en tráfico, respondé estas preguntas mirando tu propio sitio:

- ¿Podés explicar qué hacés en una oración, leyendo solo el hero?
- ¿Hay un CTA claro en el primer scroll?
- ¿Mostrás trabajo real o solo describís lo que hacés?
- ¿Tiene algún elemento que genere confianza antes del formulario de contacto?

Si alguna respuesta es no, ahí está el problema.
    `,
    category: 'Diseño Web',
    tags: ['Conversión', 'UX', 'Diseño Web', 'Estrategia Digital'],
    author: { name: 'Ezequiel Pertini — MT Studio', avatar: '/team/ezequiel.png' },
    publishedAt: '2026-04-10',
    readTime: 5,
    featured: true,
    image: null,
  },

  {
    id: 2,
    slug: 'wordpress-vs-desarrollo-a-medida',
    title: 'WordPress vs desarrollo a medida: cuándo usar cada uno',
    excerpt:
      'No hay una respuesta universal. Hay proyectos donde WordPress es la decisión correcta y proyectos donde usar WordPress sería un error. La diferencia está en entender qué necesita cada negocio.',
    content: `
## La pregunta mal planteada

"¿Conviene WordPress o desarrollo a medida?" es una pregunta que no tiene respuesta sin contexto. Es como preguntar si conviene comprar o alquilar sin saber el presupuesto, la ciudad o los planes a futuro.

Lo que sí existe son criterios claros para tomar esa decisión bien.

## Cuándo WordPress tiene sentido

WordPress es la decisión correcta cuando:

El sitio es principalmente contenido: blog, sitio institucional, portfolio simple. No hay lógica de negocio compleja que gestionar.

El cliente necesita poder actualizar el contenido sin depender de nadie. WordPress tiene el ecosistema de gestión de contenido más maduro del mercado.

El presupuesto es ajustado y el tiempo de entrega es corto. Un sitio WordPress bien hecho puede salir en semanas, no meses.

El ecommerce es relativamente estándar. WooCommerce resuelve el 80% de los casos de ecommerce sin necesidad de código personalizado.

## Cuándo el desarrollo a medida es la respuesta

El desarrollo a medida tiene sentido cuando:

Hay lógica de negocio específica que ningún plugin va a resolver limpiamente. Integraciones con APIs propias, flujos de datos complejos, reglas de negocio no estándar.

La performance es crítica. Una aplicación React o Next.js bien construida va a ser significativamente más rápida que WordPress optimizado.

El proyecto va a escalar en usuarios o funcionalidad. La deuda técnica de WordPress crece más rápido cuando se lo fuerza a hacer cosas para las que no fue diseñado.

Se necesita control total sobre la arquitectura. Sin plugins que pueden romperse con una actualización, sin dependencias de terceros que descontinúan su soporte.

## La trampa más común

Elegir WordPress para ahorrar dinero en proyectos donde termina siendo más caro. Cuando un proyecto simple en WordPress empieza a necesitar plugins premium, personalizaciones, optimizaciones de performance y mantenimiento constante, el ahorro inicial desaparece rápido.

Lo mismo aplica al revés: construir a medida algo que WordPress resuelve perfectamente es desperdiciar presupuesto en infraestructura cuando debería estar en el producto.

## Nuestra postura en MT Studio

Usamos ambos, según el proyecto. No tenemos preferencia dogmática. CargaDirecta es WordPress + WooCommerce porque es exactamente el caso de uso para el que WooCommerce fue diseñado. Factu es PHP a medida porque ningún plugin iba a manejar la integración con AFIP de la forma que necesitábamos.

La herramienta correcta para el problema correcto.
    `,
    category: 'Desarrollo',
    tags: ['WordPress', 'Desarrollo Web', 'Tecnología', 'Arquitectura'],
    author: { name: 'Ezequiel Pertini — MT Studio', avatar: '/team/ezequiel.png' },
    publishedAt: '2026-03-18',
    readTime: 6,
    featured: false,
    image: null,
  },

  {
    id: 3,
    slug: 'facturacion-electronica-afip-para-independientes',
    title: 'Facturación electrónica AFIP: la guía práctica para freelancers y monotributistas',
    excerpt:
      'Todo lo que necesitás saber para emitir facturas electrónicas ante AFIP sin perderte en el proceso. Sin jerga contable, con pasos concretos.',
    content: `
## Por qué es tan complicado (y por qué no debería serlo)

La facturación electrónica ante AFIP es obligatoria para la mayoría de los contribuyentes argentinos, pero el sistema fue diseñado pensando en contadores, no en el profesional independiente que quiere cobrar su trabajo y seguir con lo suyo.

El resultado es un proceso que puede llevar entre 30 minutos y 2 horas la primera vez, y entre 5 y 15 minutos cada vez que necesitás facturar, incluso cuando ya sabés cómo.

## Los requisitos básicos

Para emitir facturas electrónicas necesitás:

Ser contribuyente inscripto en AFIP (monotributo o responsable inscripto). Sin esto, no hay factura.

Tener CUIT y clave fiscal nivel 3. Si usás el portal de AFIP, es lo mínimo necesario.

Un punto de venta habilitado. AFIP te asigna un número de punto de venta que va en todas tus facturas.

## El proceso paso a paso en el portal de AFIP

El proceso estándar desde la web de AFIP implica: ingresar con CUIT y clave fiscal, ir a "Mis servicios", buscar "Comprobantes en línea", seleccionar el punto de venta y tipo de comprobante, cargar los datos del cliente, los productos o servicios, y finalmente generar el comprobante.

Cada factura requiere completar entre 8 y 15 campos, algunos con validaciones que no son obvias. Si el cliente es una empresa, necesitás su CUIT. Si es una persona física sin CUIT, hay un tratamiento diferente.

## Las categorías de facturas más comunes

Factura A: cuando vendés a responsables inscriptos. Incluye IVA discriminado.
Factura B: cuando vendés a consumidores finales o monotributistas. IVA incluido en el precio.
Factura C: cuando sos monotributista. No discriminás IVA porque no lo cobrás.

La mayoría de los freelancers en monotributo emite solo facturas C.

## La alternativa: automatizarlo

Nosotros desarrollamos Factu específicamente para resolver este problema. Permite importar cobros de Mercado Pago directamente, seleccionar el cliente y generar la factura en tres pasos, con la validación ante ARCA integrada. Lo que normalmente tarda 15 minutos se hace en segundos.

Si manejás un volumen importante de facturas o querés dejar de depender del portal de AFIP, es una opción que vale considerar.
    `,
    category: 'Automatización',
    tags: ['AFIP', 'Facturación Electrónica', 'Freelancers', 'Monotributo', 'Argentina'],
    author: { name: 'Ezequiel Pertini — MT Studio', avatar: '/team/ezequiel.png' },
    publishedAt: '2026-02-25',
    readTime: 7,
    featured: false,
    image: null,
  },
]

export const featuredPost = posts.find((p) => p.featured) ?? posts[0]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null
}

export function getRelatedPosts(slug, limit = 3) {
  return posts.filter((p) => p.slug !== slug).slice(0, limit)
}

export function getPostsByCategory(category) {
  return posts.filter((p) => p.category === category)
}

export const categories = [...new Set(posts.map((p) => p.category))]
