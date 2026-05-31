import { useState } from "react";
import kashi from "@/assets/dest-kashi.jpg";
import gaya from "@/assets/dest-gaya.jpg";
import bodhgaya from "@/assets/dest-bodhgaya.jpg";
import prayagraj from "@/assets/dest-prayagraj.jpg";
import ayodhya from "@/assets/dest-ayodhya.jpg";
import { SectionHeading } from "./SectionHeading";
import { ExploreModal } from "./ExploreModal";
import { useLang } from "@/i18n/LanguageContext";

const imgMap: Record<string, string> = { kashi, gaya, bodhgaya, prayagraj, ayodhya };

export function Destinations() {
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="destinations" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.destinations.eyebrow}
          title={<>{t.destinations.title1} <em className="not-italic text-gradient-gold">{t.destinations.title2}</em> {t.destinations.title3}</>}
          subtitle={t.destinations.subtitle}
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.destinations.cards.map((c, i) => (
            <article
              key={c.key}
              className="reveal group relative overflow-hidden rounded-2xl bg-card shadow-soft hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={imgMap[c.key]}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent">{c.subtitle}</span>
                <h3 className="mt-1 font-display text-3xl">{c.title}</h3>
                <p className="mt-2 text-sm text-white/85 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                  {c.desc}
                </p>
                <button
                  onClick={() => setActive(c.key)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/95 px-5 py-2 text-xs font-semibold tracking-wider uppercase text-accent-foreground shadow-glow hover:bg-accent transition-all hover:gap-3"
                >
                  {t.destinations.explore}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ExploreModal destKey={active} onClose={() => setActive(null)} />
    </section>
  );
}
