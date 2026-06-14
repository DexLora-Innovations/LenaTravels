import { useState } from "react";
import kashi from "@/assets/dest-kashi.jpg";
import gaya from "@/assets/dest-gaya.jpg";
import bodhgaya from "@/assets/dest-bodhgaya.jpg";
import prayagraj from "@/assets/dest-prayagraj.jpg";
import ayodhya from "@/assets/dest-ayodhya.jpg";
import { SectionHeading } from "./SectionHeading";
import { ExploreModal } from "./ExploreModal";
import { destinationPlaces } from "./destinationPlaces";
import { useLanguage } from "@/contexts/LanguageContext";

type DestKey = keyof typeof destinationPlaces;

const cards: {
  key: DestKey;
  img: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
}[] = [
  {
    key: "kashi",
    img: kashi,
    titleKey: "dest.kashi.title",
    subtitleKey: "dest.kashi.subtitle",
    descKey: "dest.kashi.desc",
  },
  {
    key: "gaya",
    img: gaya,
    titleKey: "dest.gaya.title",
    subtitleKey: "dest.gaya.subtitle",
    descKey: "dest.gaya.desc",
  },
  {
    key: "bodhgaya",
    img: bodhgaya,
    titleKey: "dest.bodhgaya.title",
    subtitleKey: "dest.bodhgaya.subtitle",
    descKey: "dest.bodhgaya.desc",
  },
  {
    key: "prayagraj",
    img: prayagraj,
    titleKey: "dest.prayagraj.title",
    subtitleKey: "dest.prayagraj.subtitle",
    descKey: "dest.prayagraj.desc",
  },
  {
    key: "ayodhya",
    img: ayodhya,
    titleKey: "dest.ayodhya.title",
    subtitleKey: "dest.ayodhya.subtitle",
    descKey: "dest.ayodhya.desc",
  },
];

export function Destinations() {
  const [active, setActive] = useState<DestKey | null>(null);
  const { t } = useLanguage();

  return (
    <section id="destinations" className="py-28 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("dest.eyebrow")}
          title={t("dest.title")}
          subtitle={t("dest.subtitle")}
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <article
              key={c.key}
              className="reveal group relative overflow-hidden rounded-2xl bg-card shadow-soft hover-lift h-full"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={t(c.titleKey)}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent">
                  {t(c.subtitleKey)}
                </span>
                <h3 className="mt-1 font-display text-3xl">{t(c.titleKey)}</h3>
                <p className="mt-2 text-sm text-white/85 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                  {t(c.descKey)}
                </p>
                <button
                  onClick={() => setActive(c.key)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/95 px-5 py-2 text-xs font-semibold tracking-wider uppercase text-accent-foreground shadow-glow hover:bg-accent transition-all hover:gap-3"
                >
                  {t("dest.explore")} →
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
