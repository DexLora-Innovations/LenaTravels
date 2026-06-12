import React from 'react'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { About } from '@/components/site/About'
import { Destinations } from '@/components/site/Destinations'
import { PackageSection } from '@/components/site/Package'
import { Services } from '@/components/site/Services'
import { WhyUs } from '@/components/site/WhyUs'
import { PilgrimMoments } from '@/components/site/PilgrimMoments'
import { Testimonials } from '@/components/site/Testimonials'
import { Contact } from '@/components/site/Contact'
import { Footer } from '@/components/site/Footer'
import { SplashScreen } from '@/components/site/SplashScreen'

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SplashScreen />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Destinations />
        <PackageSection />
        <Services />
        <WhyUs />
        <PilgrimMoments />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
