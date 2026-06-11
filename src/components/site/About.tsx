import { Award, Users, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { icon: Award, n: "15+", lKey: "about.years_exp" },
  { icon: Users, n: "1000+", lKey: "about.happy_pilgrims" },
  { icon: ShieldCheck, n: "100%", lKey: "about.managed_tours" },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 bg-divine overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={<>Devoted to Your <em className="not-italic text-gradient-gold">Sacred Journey</em></>}
          subtitle={t("about.subtitle")}
        />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, n, lKey }, i) => (
            <div
              key={lKey}
              className="reveal hover-lift bg-card rounded-2xl p-8 text-center border border-border shadow-soft"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-sunset flex items-center justify-center text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-4xl text-foreground">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{t(lKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
