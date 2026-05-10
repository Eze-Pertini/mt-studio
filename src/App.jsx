import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from '@components/layout/MainLayout'
import PageLoader from '@components/ui/PageLoader'
import ScrollRestoration from '@components/ui/ScrollRestoration'

// ─── Lazy-loaded pages ────────────────────────────────────────────
const Home        = lazy(() => import('@pages/Home'))
const Services    = lazy(() => import('@pages/Services'))
const Portfolio   = lazy(() => import('@pages/Portfolio'))
const ProjectDetail = lazy(() => import('@pages/ProjectDetail'))
const About       = lazy(() => import('@pages/About'))
const Blog        = lazy(() => import('@pages/Blog'))
const BlogDetail  = lazy(() => import('@pages/BlogDetail'))
const Contact     = lazy(() => import('@pages/Contact'))
const NotFound    = lazy(() => import('@pages/NotFound'))

// ─── Animated Routes wrapper ──────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index              element={<Home />} />
          <Route path="servicios"   element={<Services />} />
          <Route path="portfolio"   element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<ProjectDetail />} />
          <Route path="nosotros"    element={<About />} />
          <Route path="blog"        element={<Blog />} />
          <Route path="blog/:slug"  element={<BlogDetail />} />
          <Route path="contacto"    element={<Contact />} />
          <Route path="*"           element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

// ─── App root ─────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  )
}
