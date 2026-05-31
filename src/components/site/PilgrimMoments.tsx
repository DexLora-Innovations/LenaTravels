import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";
import g1 from "@/assets/moment-group.jpg";
import g2 from "@/assets/moment-train.jpg";
import g3 from "@/assets/moment-temple.jpg";
import g4 from "@/assets/moment-food.jpg";
import g5 from "@/assets/moment-boat.jpg";
import g6 from "@/assets/moment-bodhgaya.jpg";

const layout = [
  { src: g1, span: "" },
  { src: g3, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g4, span: "" },
  { src: g6, span: "row-span-2" },
  { src: g5, span: "" },
];

export function PilgrimMoments() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="moments" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.moments.eyebrow}
          title={<>{t.moments.title1} <em className="not-italic text-gradient-gold">{t.moments.title2}</em></>}
          subtitle={t.moments.subtitle}
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {layout.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(p.src)}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-soft cursor-zoom-in ${p.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={p.src}
                alt={t.moments.labels[i]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-left text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {t.moments.labels[i]}
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background border-none">
          {open && <img src={open} alt="Pilgrim moment" className="w-full h-auto rounded-lg" />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
