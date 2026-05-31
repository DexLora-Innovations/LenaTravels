import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { Globe } from "lucide-react";

const langs: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "हि" },
  { code: "ta", label: "தமிழ்", short: "த" },
];

export function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border p-0.5 ${
        scrolled ? "border-border bg-background/60" : "border-white/30 bg-white/10 backdrop-blur"
      }`}
    >
      <Globe className={`ml-1.5 h-3.5 w-3.5 shrink-0 ${scrolled ? "text-muted-foreground" : "text-white/80"}`} />
      {langs.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-label={l.label}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-sunset text-primary-foreground shadow-glow"
                : scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
            }`}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
