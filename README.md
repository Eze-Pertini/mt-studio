# MT Studio — Landing & Portfolio

Sitio web profesional de MT Studio. Landing page, portfolio y blog con diseño dark premium.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (con design tokens personalizados)
- **Framer Motion 11** (animaciones y transiciones)
- **React Router DOM 6** (navegación + lazy loading)
- **react-helmet-async** (SEO dinámico)

## Estructura

```
src/
├── components/
│   ├── animations/     → Wrappers de Framer Motion (FadeUp, SlideIn, etc.)
│   ├── layout/         → Navbar, Footer, MainLayout
│   ├── sections/       → Secciones reutilizables (Hero, Services, Portfolio, etc.)
│   └── ui/             → Componentes base (Button, Badge, Skeleton, SEOHead, etc.)
├── pages/              → Páginas completas (lazy-loaded)
├── data/               → Datos locales (projects.js, blog.js, services.js)
├── hooks/              → Hooks personalizados
├── services/           → Stubs para futuras integraciones (API, CMS, auth, email)
├── styles/             → globals.css + tokens.js
└── i18n/               → Preparado para multilenguaje
```

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Desarrollo (http://localhost:5173)
npm run build     # Build de producción
npm run preview   # Preview del build
```

## Agregar proyectos al portfolio

Editar `src/data/projects.js`. Cada objeto tiene esta estructura:

```js
{
  id: 3,
  slug: 'nombre-url',        // URL: /portfolio/nombre-url
  title: 'Nombre Proyecto',
  tagline: 'Frase corta',
  description: 'Descripción...',
  longDescription: `...`,
  category: 'Diseño Web',
  tags: ['React', 'Tailwind'],
  year: 2025,
  status: 'live',            // 'live' | 'development' | 'concept'
  featured: false,
  image: '/projects/slug/cover.jpg',
  images: [],
  color: '#8B5CF6',
  accentColor: '#06B6D4',
  url: 'https://...',
  metrics: [],
  services: [],
}
```

## Agregar posts al blog

Editar `src/data/blog.js`. Estructura similar.

## Deploy en Vercel

1. Conectar repositorio en vercel.com
2. Framework: Vite (auto-detectado)
3. Build: `npm run build`
4. Output: `dist`
5. El archivo `vercel.json` ya configura el routing para SPA.

## TODOs pendientes

- [ ] Reemplazar número de WhatsApp en `src/pages/Contact.jsx`
- [ ] Reemplazar email en `src/pages/Contact.jsx`
- [ ] Agregar imágenes reales de proyectos en `/public/projects/`
- [ ] Agregar imágenes del blog en `/public/blog/`
- [ ] Agregar favicon real en `/public/favicon.svg`
- [ ] Agregar imagen OG en `/public/og-image.jpg`
- [ ] Configurar Google Analytics (ID en `index.html`)
- [ ] Conectar formulario de contacto (EmailJS o similar en `src/services/api.js`)
- [ ] Actualizar URLs de redes sociales en Navbar y Footer
- [ ] Actualizar URL del sitio en `src/components/ui/SEOHead.jsx`

## Futuras integraciones preparadas

- **CMS headless** → `src/services/integrations.js` → `cms`
- **Backend/API** → `src/services/api.js`
- **Autenticación** → `src/services/integrations.js` → `auth`
- **Email real** → `src/services/integrations.js` → `email`
- **Analytics** → `src/services/integrations.js` → `analytics`
- **Multilenguaje** → `src/i18n/`
