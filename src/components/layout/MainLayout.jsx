import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from '@components/ui/WhatsAppButton'
import ScrollRestoration from '@components/ui/ScrollRestoration'

export default function MainLayout() {
  const location = useLocation()

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
