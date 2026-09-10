import React from 'react'
import MainLayout from '@components/layout/MainLayout'
import { LanguageProvider } from '@i18n/LanguageContext'
import { projects } from '@data/projects'
import { posts } from '@data/blog'
import { services } from '@data/services'

/**
 * MT Studio — Definición de rutas
 * ─────────────────────────────────────────────────────────────────
 * El array vive separado del entry porque vite-react-ssg lo necesita en
 * build para prerenderizar cada ruta a su propio HTML. Las rutas con
 * parámetro declaran getStaticPaths: de ahí salen las URLs concretas que
 * se generan, leídas de los mismos datos que consume la app.
 */

// React Router espera un módulo con `Component`; las páginas exportan default.
const page = (load) => async () => ({ Component: (await load()).default })

export const routes = [
  {
    path: '/',
    element: (
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    ),
    entry: 'src/components/layout/MainLayout.jsx',
    children: [
      {
        index: true,
        lazy: page(() => import('@pages/Home')),
        entry: 'src/pages/Home.jsx',
      },
      {
        path: 'servicios',
        lazy: page(() => import('@pages/Services')),
        entry: 'src/pages/Services.jsx',
      },
      {
        path: 'servicios/:slug',
        lazy: page(() => import('@pages/ServiceDetail')),
        entry: 'src/pages/ServiceDetail.jsx',
        getStaticPaths: () => services.map((s) => `/servicios/${s.slug}`),
      },
      {
        path: 'portfolio',
        lazy: page(() => import('@pages/Portfolio')),
        entry: 'src/pages/Portfolio.jsx',
      },
      {
        path: 'portfolio/:slug',
        lazy: page(() => import('@pages/ProjectDetail')),
        entry: 'src/pages/ProjectDetail.jsx',
        getStaticPaths: () => projects.map((p) => `/portfolio/${p.slug}`),
      },
      {
        path: 'nosotros',
        lazy: page(() => import('@pages/About')),
        entry: 'src/pages/About.jsx',
      },
      {
        path: 'blog',
        lazy: page(() => import('@pages/Blog')),
        entry: 'src/pages/Blog.jsx',
      },
      {
        path: 'blog/:slug',
        lazy: page(() => import('@pages/BlogDetail')),
        entry: 'src/pages/BlogDetail.jsx',
        getStaticPaths: () => posts.map((p) => `/blog/${p.slug}`),
      },
      {
        path: 'contacto',
        lazy: page(() => import('@pages/Contact')),
        entry: 'src/pages/Contact.jsx',
      },
      {
        // Se prerenderiza a /404.html y Vercel lo sirve con status 404 real.
        path: '*',
        lazy: page(() => import('@pages/NotFound')),
        entry: 'src/pages/NotFound.jsx',
        getStaticPaths: () => ['/404'],
      },
    ],
  },
]

export default routes
