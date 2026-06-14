import { Briefcase, Home, Utensils, Map, Users2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  { icon: Briefcase, t: "services.travel_management", d: "services.travel_management_desc" },
  { icon: Home, t: "services.accommodation", d: "services.accommodation_desc" },
  { icon: Utensils, t: "services.food", d: "services.food_desc" },
  { icon: Map, t: "services.guided", d: "services.guided_desc" },
  { icon: Users2, t: "services.group", d: "services.group_desc" },
  { icon: ShieldCheck, t: "services.safe", d: "services.safe_desc" },
];

export function Services() {
  const { t } = useLanguage();
  return (
    <section className="py-28 bg-foreground text-background relative overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.2_45),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          light
          eyebrow={t("services.eyebrow")}
          title={
            <>
              Crafted with <em className="not-italic text-gradient-gold">Devotion</em>
            </>
          }
          subtitle={t("services.subtitle")}
        />
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, t: tKey, d: dKey }, i) => (
            <div
              key={tKey}
              className="reveal group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all h-full"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-sunset flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{t(tKey)}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{t(dKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
