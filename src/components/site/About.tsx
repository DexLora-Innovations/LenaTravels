import { Award, Users, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLang();
  const stats = [
    { icon: Award, n: "15+", l: t.about.s1 },
    { icon: Users, n: "1000+", l: t.about.s2 },
    { icon: ShieldCheck, n: "100%", l: t.about.s3 },
  ];
  return (
    <section id="about" className="py-28 bg-divine">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={<>{t.about.title1} <em className="not-italic text-gradient-gold">{t.about.title2}</em></>}
          subtitle={t.about.subtitle}
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
