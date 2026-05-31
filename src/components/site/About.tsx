import { Award, Users, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: Award, n: "15+", l: "Years of Experience" },
  { icon: Users, n: "1000+", l: "Happy Pilgrims" },
  { icon: ShieldCheck, n: "100%", l: "Fully Managed Tours" },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-divine">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="About Us"
          title={<>Devoted to Your <em className="not-italic text-gradient-gold">Sacred Journey</em></>}
          subtitle="With over 15 years of experience, Lena Travels specializes in spiritual journeys across Uttar Pradesh and beyond. We ensure a peaceful, well-managed pilgrimage — from train to temple."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, n, l }, i) => (
            <div
              key={l}
              className="reveal hover-lift bg-card rounded-2xl p-8 text-center border border-border shadow-soft"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-sunset flex items-center justify-center text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-4xl text-foreground">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
