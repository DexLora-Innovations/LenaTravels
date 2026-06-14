import { useEffect, useState } from "react";
import { Flame, Menu, X, Globe } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const links = [
  { href: "#about", key: "nav.about" },
  { href: "#destinations", key: "nav.destinations" },
  { href: "#package", key: "nav.package" },
  { href: "#contact", key: "nav.contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 overflow-x-hidden ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-sunset text-primary-foreground shadow-glow">
            <Flame className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-xl font-semibold ${scrolled ? "text-foreground" : "text-white"}`}
            >
              Lena Travels
            </span>
            <span
              className={`block text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/80"}`}
            >
              {t("nav.subtitle")}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm tracking-wide font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
            <SelectTrigger className="w-[120px] h-9 text-sm" aria-label="Select language">
              <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ta">தமிழ்</SelectItem>
              <SelectItem value="hi">हिंदी</SelectItem>
            </SelectContent>
          </Select>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-sunset px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("nav.book_yatra")}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/90 font-medium"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
            <div className="flex items-center gap-3 mt-2">
              <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className="w-[120px] h-9 text-sm" aria-label="Select language">
                  <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ta">தமிழ்</SelectItem>
                  <SelectItem value="hi">हिंदी</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              {t("nav.book_yatra")}
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
