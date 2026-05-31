import { Train, Plane, Check, UtensilsCrossed, BedDouble, Bus, Landmark, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

function Card({
  icon: Icon,
  type,
  duration,
  daysLabel,
  cost,
  perPerson,
  popular,
  flightNote,
  book,
  highlight,
}: {
  icon: typeof Train;
  type: string;
  duration: string;
  daysLabel: string;
  cost?: string;
  perPerson: string;
  popular: string;
  flightNote: string;
  book: string;
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
          {popular}
        </span>
      )}
      <div className={`flex items-center gap-3 ${highlight ? "text-white" : "text-primary"}`}>
        <Icon className="h-7 w-7" />
        <span className="text-xs tracking-[0.3em] uppercase">{type}</span>
      </div>
      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-5xl">{duration}</span>
        <span className={`text-sm ${highlight ? "text-white/80" : "text-muted-foreground"}`}>{daysLabel}</span>
      </div>
      {cost && (
        <div className={`mt-4 text-2xl font-display ${highlight ? "text-accent" : "text-foreground"}`}>
          {cost}
          <span className={`text-sm font-sans ml-2 ${highlight ? "text-white/70" : "text-muted-foreground"}`}>
            {perPerson}
          </span>
        </div>
      )}
      {!cost && (
        <div className={`mt-4 text-base ${highlight ? "text-white/85" : "text-muted-foreground"}`}>
          {flightNote}
        </div>
      )}
      <a
        href="#contact"
        className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
          highlight ? "bg-white text-primary" : "bg-foreground text-background"
        }`}
      >
        {book}
      </a>
    </div>
  );
}

export function PackageSection() {
  const { t } = useLang();
  const icons = [Train, BedDouble, UtensilsCrossed, Bus, Landmark, Users];
  return (
    <section id="package" className="py-28 bg-divine relative overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.pkg.eyebrow}
          title={<>{t.pkg.title1} <em className="not-italic text-gradient-gold">{t.pkg.title2}</em></>}
          subtitle={t.pkg.subtitle}
        />

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card
            icon={Train}
            type={t.pkg.train}
            duration="9"
            daysLabel={t.pkg.days}
            cost="₹13,500"
            perPerson={t.pkg.perPerson}
            popular={t.pkg.popular}
            flightNote={t.pkg.flightNote}
            book={t.pkg.book}
            highlight
          />
          <Card
            icon={Plane}
            type={t.pkg.flight}
            duration="6"
            daysLabel={t.pkg.days}
            perPerson={t.pkg.perPerson}
            popular={t.pkg.popular}
            flightNote={t.pkg.flightNote}
            book={t.pkg.book}
          />
        </div>

        <div className="mt-20 reveal">
          <h3 className="text-center text-xs tracking-[0.35em] uppercase text-primary">{t.pkg.everything}</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.pkg.includes.map((label, idx) => {
              const Icon = icons[idx] ?? Check;
              return (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent transition-colors"
                >
                  <div className="h-11 w-11 shrink-0 rounded-full bg-accent/15 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-foreground">{label}</span>
                  <Check className="h-4 w-4 ml-auto text-accent" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 reveal max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-accent/50 bg-accent/5 p-8 text-center">
          <p className="font-display text-xl text-foreground italic">{t.pkg.quote}</p>
        </div>
      </div>
    </section>
  );
}
