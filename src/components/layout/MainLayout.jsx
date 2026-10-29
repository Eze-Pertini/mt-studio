import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from '@components/ui/WhatsAppButton'
import ScrollRestoration from '@components/ui/ScrollRestoration'
import { escucharClicsWhatsApp } from '@services/analytics'

export default function MainLayout() {
  const location = useLocation()

  // Un solo escucha para todo el sitio: cuenta cualquier enlace a wa.me,
  // incluidos los botones que se agreguen después.
  useEffect(() => escucharClicsWhatsApp(), [])

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <ScrollRestoration />
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {/* La clave por pathname es la que permite que PageTransition anime
            la salida antes de desmontar la página anterior. */}
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
