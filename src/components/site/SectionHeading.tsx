export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center reveal">
      <span
        className={`text-xs tracking-[0.35em] uppercase ${light ? "text-accent" : "text-primary"}`}
      >
        {eyebrow}
      </span>
      {/*
       * lang-heading-sec applies language-aware responsive font scaling.
       * English: clamp(1.75rem → 3rem), Tamil: smaller, Hindi: in between.
       * Prevents overflow, clipping and mis-wrapping on 320–1440 px viewports.
       */}
      <h2
        className={`mt-4 font-display font-semibold lang-heading-sec ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className="om-divider mt-6">
        <span className={`text-lg ${light ? "text-accent" : "text-primary"}`}>ॐ</span>
      </div>
      {subtitle && (
        <p
          className={`mt-6 text-base leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
