import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#destinations", label: "Destinations" },
  { href: "#package", label: "Package" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
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
            <span className={`block font-display text-xl font-semibold ${scrolled ? "text-foreground" : "text-white"}`}>
              Lena Travels
            </span>
            <span className={`block text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              Travels
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
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-sunset px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Book Yatra
        </a>

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
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book Yatra
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
