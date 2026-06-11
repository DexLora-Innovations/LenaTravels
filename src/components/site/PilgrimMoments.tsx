import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

// ── Import all 16 real yatra photos in exact order ──────────────────────────
import p01 from "@/assets/pilgrim-01.jpeg";
import p02 from "@/assets/pilgrim-02.jpeg";
import p03 from "@/assets/pilgrim-03.jpeg";
import p04 from "@/assets/pilgrim-04.jpeg";
import p05 from "@/assets/pilgrim-05.jpeg";
import p06 from "@/assets/pilgrim-06.jpeg";
import p07 from "@/assets/pilgrim-07.jpeg";
import p08 from "@/assets/pilgrim-08.jpeg";
import p09 from "@/assets/pilgrim-09.jpeg";
import p10 from "@/assets/pilgrim-10.jpeg";
import p11 from "@/assets/pilgrim-11.jpeg";
import p12 from "@/assets/pilgrim-12.jpeg";
import p13 from "@/assets/pilgrim-13.jpeg";
import p14 from "@/assets/pilgrim-14.jpeg";
import p15 from "@/assets/pilgrim-15.jpeg";
import p16 from "@/assets/pilgrim-16.jpeg";

// ── Photo list — displayed in exact order 01 → 16 ───────────────────────────
const photos = [
  p01, p02, p03, p04,
  p05, p06, p07, p08,
  p09, p10, p11, p12,
  p13, p14, p15, p16,
];

export function PilgrimMoments() {
  const [open, setOpen] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <section id="moments" className="py-28 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("moments.eyebrow")}
          title={<>Our <em className="not-italic text-gradient-gold">Pilgrim Moments</em></>}
          subtitle={t("moments.subtitle")}
        />

        {/*
          Responsive grid:
            Mobile  (< 640px)  → 2 columns
            Tablet  (≥ 640px)  → 3 columns
            Desktop (≥ 1024px) → 4 columns
          Fixed row height 200px — no auto-rows masonry to keep alignment clean.
          16 photos = 4 rows × 4 cols on desktop, no orphan cells.
        */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setOpen(src)}
              className="reveal group relative overflow-hidden rounded-2xl shadow-soft cursor-zoom-in aspect-[4/3] w-full"
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-label={`Pilgrim moment ${i + 1}`}
            >
              <img
                src={src}
                alt={`Yatra pilgrim moment ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay — only on hover, never hides image at rest */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
              <span className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] font-medium px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {String(i + 1).padStart(2, "0")} / 16
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox — click any photo to view full size ── */}
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-2 bg-black border-none">
          {open && (
            <img
              src={open}
              alt="Pilgrim moment full view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
