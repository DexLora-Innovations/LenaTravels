import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Destinations } from "@/components/site/Destinations";
import { PackageSection } from "@/components/site/Package";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { PilgrimMoments } from "@/components/site/PilgrimMoments";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SplashScreen } from "@/components/site/SplashScreen";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lena Travels — Kashi Yatra Specialists" },
      {
        name: "description",
        content:
          "15+ years of trusted spiritual travel to Kashi, Gaya, Buddha Gaya & Prayagraj. Fully managed Kashi Yatra packages by train (9 days, ₹13,500) or flight (6 days).",
      },
      { name: "keywords", content: "Kashi Yatra, Varanasi pilgrimage, Gaya pilgrimage, Prayagraj, Buddha Gaya, spiritual travel, Kashi Vishwanath, Ganga Aarti" },
      { property: "og:title", content: "Lena Travels — Kashi Yatra Specialists" },
      { property: "og:description", content: "15+ years of trusted spiritual travel to Kashi, Gaya, Buddha Gaya & Prayagraj. Fully managed Kashi Yatra packages." },
      { property: "og:type", content: "website" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  }),
});

function Index() {
  useReveal();
  useEffect(() => {
    try {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    } catch (e) {
      /* ignore */
    }
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      try {
        window.scrollTo(0, 0);
      } catch (e) {
        /* ignore */
      }
    }
  }, []);
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
  );
}
