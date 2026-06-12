import { useEffect } from 'react'
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
import { useReveal } from '@/hooks/use-reveal'

export default function App() {
  useReveal()

  useEffect(() => {
    try {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }
    } catch {
      // ignore
    }

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch {
      try {
        window.scrollTo(0, 0)
      } catch {
        // ignore
      }
    }
  }, [])

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
