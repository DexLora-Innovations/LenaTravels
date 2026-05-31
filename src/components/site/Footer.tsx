import { Flame, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const hrefs = ["#about", "#destinations", "#package", "#contact"];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-full bg-sunset flex items-center justify-center text-primary-foreground shadow-glow">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-2xl">Lena Travels</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-background/60">{t.nav.subtitle}</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-background/70 leading-relaxed">{t.footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sunset hover:border-transparent transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-accent">{t.footer.quickLinks}</h4>
          <ul className="mt-6 space-y-3 text-background/75">
            {t.footer.links.map((l, i) => (
              <li key={l}>
                <a href={hrefs[i]} className="hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-accent">{t.footer.reach}</h4>
          <ul className="mt-6 space-y-3 text-background/75 text-sm">
            <li>+91 98765 43210</li>
            <li>yatra@lenatravels.in</li>
            <li>{t.contact.officeVal}<br />221001</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/50">
        <div>© {new Date().getFullYear()} Lena Travels. All rights reserved.</div>
        <div className="tracking-[0.3em] uppercase">ॐ नमः शिवाय</div>
      </div>
    </footer>
  );
}
