import { Briefcase, Home, Utensils, Map, Users2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Briefcase, t: "Complete Travel Management", d: "End-to-end planning and coordination of every step." },
  { icon: Home, t: "Accommodation Booking", d: "Comfortable, vetted stays close to the ghats and temples." },
  { icon: Utensils, t: "Food Arrangements", d: "Pure vegetarian sattvic meals throughout your yatra." },
  { icon: Map, t: "Guided Temple Visits", d: "Knowledgeable local pandits explain every ritual." },
  { icon: Users2, t: "Group Tours", d: "Travel in the warm company of fellow devotees." },
  { icon: ShieldCheck, t: "Safe & Comfortable", d: "Trusted vehicles, verified guides, dedicated care." },
];

export function Services() {
  return (
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.2_45),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          light
          eyebrow="Our Services"
          title={<>Crafted with <em className="not-italic text-gradient-gold">Devotion</em></>}
          subtitle="Every detail of your pilgrimage handled with care, so you can focus on the divine."
        />
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, t, d }, i) => (
            <div
              key={t}
              className="reveal group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-sunset flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
