import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={<>{t.testimonials.title1} <em className="not-italic text-gradient-gold">{t.testimonials.title2}</em></>}
        />
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {t.testimonials.reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal hover-lift relative bg-card rounded-2xl p-8 border border-border shadow-soft"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-accent" fill="currentColor" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-lg text-foreground">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.place}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
