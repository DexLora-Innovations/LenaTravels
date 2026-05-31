import hero from "@/assets/hero-aarti.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-white/90 animate-fade-in">
            ॐ · 15+ Years of Trusted Pilgrimages
          </span>
          <h1
            className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]"
            style={{ animation: "fade-up 1s ease-out both" }}
          >
            Experience the Divine
            <span className="block text-gradient-gold">Journey to Kashi</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg text-white/85"
            style={{ animation: "fade-up 1.2s .2s ease-out both" }}
          >
            Walk the eternal ghats of Varanasi, witness the sacred Ganga Aarti, and surrender to the
            soul of India — guided by 15 years of devoted service.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: "fade-up 1.4s .4s ease-out both" }}
          >
            <a
              href="#package"
              className="inline-flex items-center rounded-full bg-sunset px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Book Now →
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/5 backdrop-blur px-8 py-4 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              View Packages
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              ["15+", "Years"],
              ["1000+", "Pilgrims"],
              ["4", "Holy Cities"],
            ].map(([n, l]) => (
              <div key={l} className="reveal">
                <div className="font-display text-3xl text-accent">{n}</div>
                <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase animate-float">
        Scroll
      </div>
    </section>
  );
}
