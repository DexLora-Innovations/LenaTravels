import { Train, Plane, Star } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

interface PackageCard {
  icon: typeof Train;
  titleKey: string;
  descriptionKey: string;
  priceLabel?: string;
  price: string;
  priceNote?: string;
  featureKeys: string[];
  ctaKey: string;
  ctaHref: string;
  alwaysActive?: boolean;
}

function Card({ card }: { card: PackageCard }) {
  const {
    icon: Icon,
    titleKey,
    descriptionKey,
    priceLabel,
    price,
    priceNote,
    featureKeys,
    ctaKey,
    ctaHref,
    alwaysActive = false,
  } = card;

  const { t } = useLanguage();
  // Each Card has its own isolated state — zero shared state between cards
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Train card: always orange. Flight card: orange only while hovered.
  const active = alwaysActive || hovered;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        if (!alwaysActive) setHovered(true);
      }}
      onMouseLeave={() => {
        if (!alwaysActive) setHovered(false);
      }}
      className={[
        "relative rounded-3xl p-8 sm:p-10 border h-full flex flex-col",
        "transition-[background-color,border-color,box-shadow,color]",
        "duration-[350ms] ease-in-out",
        "will-change-auto",
        active ? "bg-sunset border-transparent shadow-glow" : "bg-card border-border",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-accent shrink-0" />
        <h3
          className={`font-display text-xl sm:text-2xl lang-heading-card break-words ${active ? "text-white" : "text-foreground"}`}
        >
          {t(titleKey)}
        </h3>
      </div>

      {/* Description */}
      <p
        className={`mt-4 text-sm leading-relaxed ${active ? "text-white/85" : "text-muted-foreground"}`}
      >
        {t(descriptionKey)}
      </p>

      {/* Price */}
      <div className="mt-6">
        {priceLabel && (
          <p
            className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${active ? "text-white/60" : "text-muted-foreground"}`}
          >
            {priceLabel}
          </p>
        )}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-display text-4xl sm:text-5xl font-bold text-accent">{price}</span>
          <span className={`text-sm ${active ? "text-white/75" : "text-muted-foreground"}`}>
            / {t("package.per_person")}
          </span>
        </div>
        {priceNote && (
          <p
            className={`mt-2 text-xs italic leading-relaxed ${active ? "text-white/60" : "text-muted-foreground"}`}
          >
            {priceNote}
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {featureKeys.map((fKey) => (
          <li key={fKey} className="flex items-start gap-3">
            <Star className="h-4 w-4 shrink-0 text-accent mt-0.5" />
            <span
              className={`text-sm leading-snug ${active ? "text-white/90" : "text-foreground"}`}
            >
              {t(fKey)}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={ctaHref}
        className="mt-8 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-sm font-semibold bg-accent text-accent-foreground transition-[opacity] duration-200 hover:opacity-90"
      >
        {t(ctaKey)}
      </a>
    </div>
  );
}

export function PackageSection() {
  const { t } = useLanguage();

  const trainCard: PackageCard = {
    icon: Train,
    titleKey: "package.train",
    descriptionKey: "package.train_desc",
    price: "₹13,500",
    featureKeys: [
      "package.feature.train_tickets",
      "package.feature.accommodation_meals",
      "package.feature.transport_temples",
      "package.feature.guide",
    ],
    ctaKey: "package.book_train",
    ctaHref: "#contact",
    alwaysActive: true,
  };

  const flightCard: PackageCard = {
    icon: Plane,
    titleKey: "package.flight",
    descriptionKey: "package.flight_desc",
    priceLabel: t("package.avg_amount"),
    price: "₹25,000",
    priceNote: t("package.flight_note"),
    featureKeys: [
      "package.feature.flight_tickets",
      "package.feature.hotel_meals",
      "package.feature.airport_transfers",
      "package.feature.assistant",
    ],
    ctaKey: "package.book_flight",
    ctaHref: "#contact",
    alwaysActive: false,
  };

  return (
    <section id="package" className="py-28 bg-divine relative overflow-hidden overflow-x-hidden">
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("package.eyebrow")}
          title={
            <>
              Kashi Yatra <em className="not-italic text-gradient-gold">Sacred Package</em>
            </>
          }
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
          <h3 className="text-center text-xs tracking-[0.35em] uppercase text-primary">
            {t("package.everything_included")}
          </h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "package.travel",
              "package.accommodation",
              "package.meals",
              "package.transport",
              "package.visits",
              "package.guided",
            ].map((key) => (
              <div
                key={key}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-accent/15 text-primary flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium text-foreground text-sm leading-snug">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 reveal max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-accent/50 bg-accent/5 p-8 text-center">
          <p className="font-display text-lg sm:text-xl text-foreground italic leading-relaxed">
            {t("package.managed")}
          </p>
        </div>
      </div>
    </section>
  );
}
