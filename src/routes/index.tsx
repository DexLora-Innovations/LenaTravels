import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Destinations } from "@/components/site/Destinations";
import { PackageSection } from "@/components/site/Package";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { PilgrimMoments } from "@/components/site/PilgrimMoments";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

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
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <PackageSection />
        <Services />
        <WhyUs />
        <Gallery />
        <PilgrimMoments />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
