import hero from "@/assets/hero-aarti.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden overflow-x-hidden"
    >
      <img
        src={hero}
        alt="Ganga Aarti at Kashi"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl text-white">
          {/*
           * Badge: allow it to wrap naturally on small screens so Tamil/Hindi
           * text never overflows. Use break-words and a max-w cap.
           */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs tracking-[0.15em] uppercase text-white/90 animate-fade-in break-words max-w-full">
            {t("hero.badge")}
          </span>

          {/*
           * Hero h1: lang-heading-hero applies language-aware clamped sizes.
           * English: up to 72px, Tamil: up to 56px, Hindi: up to 60px.
           * word-break prevents any single long Tamil/Hindi word from
           * triggering horizontal overflow at 320 px.
           */}
          <h1
            className="mt-8 font-display font-semibold leading-tight lang-heading-hero break-words"
            style={{ animation: "fade-up 1s ease-out both" }}
          >
            {t("hero.title1")}
            <span className="block text-gradient-gold">{t("hero.title2")}</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed"
            style={{ animation: "fade-up 1.2s .2s ease-out both" }}
          >
            {t("hero.description")}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: "fade-up 1.4s .4s ease-out both" }}
          >
            <a
              href="#package"
              className="inline-flex items-center rounded-full bg-sunset px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              {t("hero.book_now")}
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/5 backdrop-blur px-8 py-4 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              {t("hero.view_packages")}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            {[
              ["15+", "hero.years"],
              ["1000+", "hero.pilgrims"],
              ["5", "hero.holy_cities"],
            ].map(([n, l]) => (
              <div key={l} className="reveal">
                <div className="font-display text-2xl sm:text-3xl text-accent">{n}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1 leading-snug">
                  {t(l)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase animate-float">
        {t("hero.scroll")}
      </div>
    </section>
  );
}
