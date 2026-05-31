import { Briefcase, Home, Utensils, Map, Users2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Briefcase, Home, Utensils, Map, Users2, ShieldCheck];

export function Services() {
  const { t } = useLang();
  return (
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.2_45),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          light
          eyebrow={t.services.eyebrow}
          title={<>{t.services.title1} <em className="not-italic text-gradient-gold">{t.services.title2}</em></>}
          subtitle={t.services.subtitle}
        />
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = icons[i] ?? Briefcase;
            return (
              <div
                key={s.t}
                className="reveal group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-sunset flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
