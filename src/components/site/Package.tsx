import { Train, Plane, Star } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

interface PackageCard {
  icon: typeof Train;
  title: string;
  description: string;
  priceLabel?: string;
  price: string;
  priceNote?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  alwaysActive?: boolean;
}

const trainFeatures = [
  "Return train tickets",
  "Accommodation & meals",
  "Local transport & temple visits",
  "Experienced tour guide",
];

const flightFeatures = [
  "Return flight tickets",
  "Hotel stay & meals",
  "Airport transfers & sightseeing",
  "Dedicated travel assistant",
];

function Card({ card }: { card: PackageCard }) {
  const {
    icon: Icon,
    title,
    description,
    priceLabel,
    price,
    priceNote,
    features,
    ctaText,
    ctaHref,
    alwaysActive = false,
  } = card;

  // Each Card has its own isolated state — zero shared state between cards
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Train card: always orange. Flight card: orange only while hovered.
  const active = alwaysActive || hovered;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => { if (!alwaysActive) setHovered(true); }}
      onMouseLeave={() => { if (!alwaysActive) setHovered(false); }}
      className={[
        // NO 'reveal' here — reveal lives on the wrapper div above
        // NO 'transition-all' — only colour/shadow allowed to animate
        "relative rounded-3xl p-10 border h-full flex flex-col",
        "transition-[background-color,border-color,box-shadow,color]",
        "duration-[350ms] ease-in-out",
        "will-change-auto",
        active
          ? "bg-sunset border-transparent shadow-glow"
          : "bg-card border-border",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-accent shrink-0" />
        <h3 className={`font-display text-2xl ${active ? "text-white" : "text-foreground"}`}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className={`mt-4 text-sm leading-relaxed ${active ? "text-white/85" : "text-muted-foreground"}`}>
        {description}
      </p>

      {/* Price */}
      <div className="mt-6">
        {priceLabel && (
          <p className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${active ? "text-white/60" : "text-muted-foreground"}`}>
            {priceLabel}
          </p>
        )}
        <div className="flex items-baseline gap-2">
          <span className="font-display text-5xl font-bold text-accent">
            {price}
          </span>
          <span className={`text-sm ${active ? "text-white/75" : "text-muted-foreground"}`}>
            / person
          </span>
        </div>
        {priceNote && (
          <p className={`mt-2 text-xs italic leading-relaxed ${active ? "text-white/60" : "text-muted-foreground"}`}>
            {priceNote}
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <Star className="h-4 w-4 shrink-0 text-accent" />
            <span className={`text-sm ${active ? "text-white/90" : "text-foreground"}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={ctaHref}
        className="mt-8 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-sm font-semibold bg-accent text-accent-foreground transition-[opacity] duration-200 hover:opacity-90"
      >
        {ctaText}
      </a>
    </div>
  );
}

export function PackageSection() {
  const { t } = useLanguage();

  const trainCard: PackageCard = {
    icon: Train,
    title: "Train Package",
    description:
      "Comfortable rail journey covering Kashi, Gaya, Bodh Gaya and Prayagraj with stay, meals and local sightseeing arranged.",
    price: "₹13,500",
    features: trainFeatures,
    ctaText: "Book Train Package",
    ctaHref: "#contact",
    alwaysActive: true,
  };

  const flightCard: PackageCard = {
    icon: Plane,
    title: "Flight Package",
    description:
      "Faster and more comfortable air travel covering the same sacred circuit, ideal for elderly pilgrims and short-duration trips.",
    priceLabel: "Average Amount",
    price: "₹25,000",
    priceNote:
      "Based on the season and ticket availability — final fare confirmed at the time of booking.",
    features: flightFeatures,
    ctaText: "Get Flight Quote",
    ctaHref: "#contact",
    alwaysActive: false,
  };

  return (
    <section id="package" className="py-28 bg-divine relative overflow-hidden overflow-x-hidden">
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("package.eyebrow")}
          title={<>Kashi Yatra <em className="not-italic text-gradient-gold">Sacred Package</em></>}
          subtitle={t("package.subtitle")}
        />

        <div className="mt-20 grid md:grid-cols-2 gap-8 items-start">
          {/* Wrapper handles the scroll-reveal; Card handles only hover colours */}
          <div className="reveal h-full">
            <Card card={trainCard} />
          </div>
          <div className="reveal h-full">
            <Card card={flightCard} />
          </div>
        </div>

        <div className="mt-20 reveal">
          <h3 className="text-center text-xs tracking-[0.35em] uppercase text-primary">{t("package.everything_included")}</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: t("package.travel") },
              { label: t("package.accommodation") },
              { label: t("package.meals") },
              { label: t("package.transport") },
              { label: t("package.visits") },
              { label: t("package.guided") },
            ].map(({ label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-accent/15 text-primary flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 reveal max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-accent/50 bg-accent/5 p-8 text-center">
          <p className="font-display text-xl text-foreground italic">
            {t("package.managed")}
          </p>
        </div>
      </div>
    </section>
  );
}
