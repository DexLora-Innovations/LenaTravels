import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-aarti.jpg";
import kashi from "@/assets/dest-kashi.jpg";
import { SectionHeading } from "./SectionHeading";

const items = [
  { src: g3, label: "Sadhu of the Ghats", span: "row-span-2" },
  { src: hero, label: "Ganga Aarti", span: "" },
  { src: g2, label: "Diyas at Dev Deepawali", span: "" },
  { src: g1, label: "Kashi Vishwanath", span: "" },
  { src: g4, label: "Sunrise on the Ganga", span: "col-span-2" },
  { src: kashi, label: "The Eternal Ghats", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-divine">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Glimpses of the <em className="not-italic text-gradient-gold">Sacred</em></>}
          subtitle="Moments captured from our pilgrimages across the holy cities."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
