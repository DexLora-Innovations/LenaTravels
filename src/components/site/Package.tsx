import { Train, Plane, Check, UtensilsCrossed, BedDouble, Bus, Landmark, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const includes = [
  { icon: Train, t: "Travel (Train / Flight)" },
  { icon: BedDouble, t: "Comfortable Accommodation" },
  { icon: UtensilsCrossed, t: "All Meals Included" },
  { icon: Bus, t: "Local Transport" },
  { icon: Landmark, t: "Temple Visits" },
  { icon: Users, t: "Guided Tour" },
];

function Card({
  icon: Icon,
  type,
  duration,
  cost,
  highlight,
}: {
  icon: typeof Train;
  type: string;
  duration: string;
  cost?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`reveal relative rounded-3xl p-10 border transition-all duration-500 ${
        highlight
          ? "bg-sunset text-primary-foreground border-transparent shadow-glow"
          : "bg-card border-border hover-lift"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 right-6 rounded-full bg-accent px-4 py-1 text-[10px] tracking-[0.25em] uppercase text-accent-foreground font-semibold">
          Most Popular
        </span>
      )}
      <div className={`flex items-center gap-3 ${highlight ? "text-white" : "text-primary"}`}>
        <Icon className="h-7 w-7" />
        <span className="text-xs tracking-[0.3em] uppercase">{type}</span>
      </div>
      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-5xl">{duration}</span>
        <span className={`text-sm ${highlight ? "text-white/80" : "text-muted-foreground"}`}>days</span>
      </div>
      {cost && (
        <div className={`mt-4 text-2xl font-display ${highlight ? "text-accent" : "text-foreground"}`}>
          {cost}
          <span className={`text-sm font-sans ml-2 ${highlight ? "text-white/70" : "text-muted-foreground"}`}>
            per person
          </span>
        </div>
      )}
      {!cost && (
        <div className={`mt-4 text-base ${highlight ? "text-white/85" : "text-muted-foreground"}`}>
          Premium fast pilgrimage — pricing on request
        </div>
      )}
      <a
        href="#contact"
        className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
          highlight
            ? "bg-white text-primary"
            : "bg-foreground text-background"
        }`}
      >
        Book Now
      </a>
    </div>
  );
}

export function PackageSection() {
  return (
    <section id="package" className="py-28 bg-divine relative overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured Package"
          title={<>Kashi Yatra <em className="not-italic text-gradient-gold">Sacred Package</em></>}
          subtitle="Two carefully crafted pilgrimage experiences — fully managed from your doorstep to the ghats."
        />

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card icon={Train} type="Train Package" duration="9" cost="₹13,500" highlight />
          <Card icon={Plane} type="Flight Package" duration="6" />
        </div>

        <div className="mt-20 reveal">
          <h3 className="text-center text-xs tracking-[0.35em] uppercase text-primary">Everything Included</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-accent/15 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-foreground">{t}</span>
                <Check className="h-4 w-4 ml-auto text-accent" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 reveal max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-accent/50 bg-accent/5 p-8 text-center">
          <p className="font-display text-xl text-foreground italic">
            “All arrangements including stay and food are completely managed by Sacred Trails Travels.”
          </p>
        </div>
      </div>
    </section>
  );
}
