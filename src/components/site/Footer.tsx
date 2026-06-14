import { Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("footer.about"), href: "#about" },
    { label: t("footer.destinations"), href: "#destinations" },
    { label: t("footer.package"), href: "#package" },
    { label: t("footer.gallery"), href: "#gallery" },
    { label: t("footer.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">
        {/* ── Brand ───────────────────────────────────────────── */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-full bg-sunset flex items-center justify-center text-primary-foreground shadow-glow">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-2xl">{t("footer.company")}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-background/60">
                {t("footer.subtitle")}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-background/70 leading-relaxed">
            {t("footer.description")}
          </p>
        </div>

        {/* ── Quick Links ─────────────────────────────────────── */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-accent">
            {t("footer.quick_links")}
          </h4>
          <ul className="mt-6 space-y-3 text-background/75">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-accent transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ─────────────────────────────────────────── */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-accent">{t("footer.reach_us")}</h4>
          <ul className="mt-6 space-y-3 text-background/75 text-sm">
            <li>
              <a href="tel:+919176735335" className="hover:text-accent transition-colors">
                +91 9176735335
              </a>
            </li>
            <li>
              <a href="mailto:sundaran06@gmail.com" className="hover:text-accent transition-colors">
                sundaran06@gmail.com
              </a>
            </li>
            <li className="leading-relaxed">
              No. 1A, Ground Floor,
              <br />
              Vinayagapuram Main Road,
              <br />
              Vinayagapuram, Ambattur,
              <br />
              Chennai&nbsp;–&nbsp;600053
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-white/10">
        <p className="text-xs text-background/50 text-center leading-relaxed">
          Developed by{" "}
          <a
            href="https://www.dexlorainnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors font-semibold"
          >
            DLI
          </a>{" "}
          | &copy; {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
