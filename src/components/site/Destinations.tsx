import kashi from "@/assets/dest-kashi.jpg";
import gaya from "@/assets/dest-gaya.jpg";
import bodhgaya from "@/assets/dest-bodhgaya.jpg";
import prayagraj from "@/assets/dest-prayagraj.jpg";
import { SectionHeading } from "./SectionHeading";

const cards = [
  { img: kashi, title: "Kashi", subtitle: "Varanasi", desc: "The eternal city of Lord Shiva — ghats, aarti, and moksha." },
  { img: gaya, title: "Gaya", subtitle: "Bihar", desc: "Sacred land of Vishnupad — perform pind daan for ancestors." },
  { img: bodhgaya, title: "Buddha Gaya", subtitle: "Bodh Gaya", desc: "Where Lord Buddha attained enlightenment beneath the Bodhi tree." },
  { img: prayagraj, title: "Prayagraj", subtitle: "Allahabad", desc: "Triveni Sangam — the holy confluence of three sacred rivers." },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Holy Destinations"
          title={<>Where <em className="not-italic text-gradient-gold">Souls</em> Find Peace</>}
          subtitle="Curated pilgrimages to the four most sacred cities of North India."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-card shadow-soft hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent">{c.subtitle}</span>
                <h3 className="mt-1 font-display text-3xl">{c.title}</h3>
                <p className="mt-2 text-sm text-white/80 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                  {c.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
