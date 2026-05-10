/**
 * MT Studio — Blog Data
 * Datos locales en JSON. Preparado para migrar a CMS headless (Sanity/Contentful).
 *
 * TODO: Reemplazar con fetch a CMS cuando esté listo.
 */

export const posts = [
  {
    id: 1,
    slug: 'diseno-web-que-convierte',
    title: 'Diseño web que convierte: los principios que nadie te cuenta',
    excerpt:
      'La mayoría de los sitios web se ven bien pero no convierten. Acá te explicamos qué separa un sitio que genera resultados de uno que solo ocupa espacio en internet.',
    content: `
## El problema con el diseño bonito

Hay una trampa en la que cae el 80% de los proyectos web: priorizar la estética por encima de la función.
Un sitio puede verse increíble en el portfolio del diseñador y ser un desastre para convertir visitas en clientes.

## Los principios que realmente importan

### 1. La jerarquía visual guía la acción

El usuario tiene que saber, en menos de 3 segundos, qué hacés y qué quierés que haga. Si tu hero necesita ser "leído" para entenderse, es un problema de diseño, no de copy.

### 2. La fricción mata las conversiones

Cada campo de más en un formulario, cada paso adicional en un checkout, cada segundo de carga extra... todo reduce las conversiones. El diseño premium no es agregar cosas, es eliminar todo lo que no suma.

### 3. La consistencia genera confianza

Un sistema de diseño coherente —mismos espaciados, mismos colores, misma tipografía— transmite profesionalismo. La inconsistencia visual genera desconfianza subconsciente.

## Conclusión

Diseñar bien no es hacer algo lindo. Es hacer algo que cumpla su función de forma elegante.
    `,
    category: 'Diseño',
    tags: ['Diseño Web', 'UX', 'Conversión'],
    author: {
      name: 'MT Studio',
      avatar: '/team/avatar-mt.jpg',
    },
    publishedAt: '2025-03-15',
    readTime: 5,
    featured: true,
    image: '/blog/diseno-web-convierte/cover.jpg',
  },
  {
    id: 2,
    slug: 'react-vs-nextjs-2025',
    title: 'React vs Next.js en 2025: cuándo usar cada uno',
    excerpt:
      'La elección entre React puro y Next.js define la arquitectura de tu proyecto. Acá te damos un framework de decisión claro y sin vueltas.',
    content: `
## No es una competencia

React y Next.js no compiten entre sí — Next.js está construido sobre React. La pregunta correcta es: ¿necesitás lo que Next.js agrega?

## Cuándo usar React puro (con Vite)

- Aplicaciones web internas (dashboards, CRMs, herramientas)
- SPAs sin necesidad de SEO
- Proyectos donde el control total del build es prioritario
- Equipos pequeños que quieren menos abstracción

## Cuándo usar Next.js

- Sitios públicos que necesitan SEO
- E-commerce con páginas de producto indexables
- Blogs y sitios de contenido
- Proyectos que se benefician de SSR/SSG

## Nuestra postura en MT Studio

Para landing pages y sitios corporativos con foco en SEO: Next.js.
Para sistemas web y aplicaciones internas: React + Vite.
No hay respuesta universal, hay herramienta correcta para cada contexto.
    `,
    category: 'Desarrollo',
    tags: ['React', 'Next.js', 'Frontend', 'Arquitectura'],
    author: {
      name: 'MT Studio',
      avatar: '/team/avatar-mt.jpg',
    },
    publishedAt: '2025-02-28',
    readTime: 7,
    featured: false,
    image: '/blog/react-nextjs/cover.jpg',
  },
  {
    id: 3,
    slug: 'automatizacion-para-pymes',
    title: 'Automatización para PYMEs: por dónde empezar sin perderse',
    excerpt:
      'La automatización no es solo para empresas grandes. Acá mostramos cómo pequeños negocios pueden ahorrar horas semanales con herramientas accesibles y bien aplicadas.',
    content: `
## La automatización dejó de ser cara

Hace diez años, automatizar procesos requería software enterprise y consultores costosos.
Hoy, con las herramientas correctas y alguien que las configure bien, una PYME puede ahorrar 10, 20 o 30 horas semanales.

## Los procesos más comunes que automatizamos

### Comunicación con clientes
- Respuestas automáticas por WhatsApp con IA
- Seguimiento de presupuestos sin intervención manual
- Recordatorios de citas y pagos

### Operaciones internas
- Generación automática de reportes
- Sincronización entre plataformas (CRM, facturación, stock)
- Alertas automáticas por condiciones de negocio

### Marketing y ventas
- Secuencias de email automatizadas
- Publicación programada en redes
- Seguimiento de leads sin CRM complejo

## Por dónde empezar

Identificá el proceso que más tiempo le consume a tu equipo y que es más repetitivo. Ese es el primero a automatizar.
    `,
    category: 'Automatización',
    tags: ['Automatización', 'PYMEs', 'Productividad'],
    author: {
      name: 'MT Studio',
      avatar: '/team/avatar-mt.jpg',
    },
    publishedAt: '2025-01-20',
    readTime: 6,
    featured: false,
    image: '/blog/automatizacion-pymes/cover.jpg',
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
