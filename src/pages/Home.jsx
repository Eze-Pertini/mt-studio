import React from 'react'
import SEOHead from '@components/ui/SEOHead'
import { homeSchema } from '@data/schema'
import { PageTransition } from '@components/animations'
import HeroSection from '@components/sections/HeroSection'
import ServicesSection from '@components/sections/ServicesSection'
import PortfolioPreview from '@components/sections/PortfolioPreview'
import {
  TechSection,
  ProcessSection,
  BenefitsSection,
  CTASection,
} from '@components/sections/HomeExtras'

export default function Home() {
  return (
    <PageTransition>
      <SEOHead
        title={null}
        url="/"
        jsonLd={homeSchema()}
      />

      <HeroSection />
      <TechSection />
      <ServicesSection />
      <PortfolioPreview />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
    </PageTransition>
  )
}
