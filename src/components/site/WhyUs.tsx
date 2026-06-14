import { Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import gallery from "@/assets/gallery-1.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const reasons = [
  "whyus.reason1",
  "whyus.reason2",
  "whyus.reason3",
  "whyus.reason4",
  "whyus.reason5",
  "whyus.reason6",
];

export function WhyUs() {
  const { t } = useLanguage();
  return (
    <section className="py-28 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-6 bg-sunset rounded-3xl opacity-20 blur-2xl" />
          <img
            src={gallery}
            alt="Kashi temple at sunset"
            loading="lazy"
            width={1024}
            height={1280}
            className="relative rounded-3xl shadow-soft w-full h-[600px] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 border border-border shadow-glow max-w-xs">
            <Sparkles className="h-6 w-6 text-accent" />
            <p className="mt-3 font-display text-xl text-foreground">{t("whyus.lifetime")}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t("whyus.trusted")}</p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={t("whyus.eyebrow")}
            title={
              <>
                The Difference of <em className="not-italic text-gradient-gold">Devotion</em>
              </>
            }
          />
          <ul className="mt-12 space-y-4">
            {reasons.map((r, i) => (
              <li
                key={r}
                className="reveal flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sunset text-primary-foreground font-display text-sm shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-foreground">{t(r)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
