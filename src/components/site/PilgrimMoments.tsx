import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/moment-group.jpg";
import g2 from "@/assets/moment-train.jpg";
import g3 from "@/assets/moment-temple.jpg";
import g4 from "@/assets/moment-food.jpg";
import g5 from "@/assets/moment-boat.jpg";
import g6 from "@/assets/moment-bodhgaya.jpg";

const photos = [
  { src: g1, label: "Sangat at the Ghats", span: "" },
  { src: g3, label: "Darshan at the Temple", span: "row-span-2" },
  { src: g2, label: "Boarding the Yatra Train", span: "" },
  { src: g4, label: "Sacred Bhojan Together", span: "" },
  { src: g6, label: "Group Memories at Bodh Gaya", span: "row-span-2" },
  { src: g5, label: "Ganga Boat Ride", span: "" },
];

export function PilgrimMoments() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="moments" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Happy Journey Memories"
          title={<>Our <em className="not-italic text-gradient-gold">Pilgrim Moments</em></>}
          subtitle="Real photos from our recent yatras — smiles, prayers, and unforgettable memories shared by our pilgrim families."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(p.src)}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-soft cursor-zoom-in ${p.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-left text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {p.label}
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background border-none">
          {open && (
            <img src={open} alt="Pilgrim moment" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
