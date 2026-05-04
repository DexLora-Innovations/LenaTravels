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
        className={`text-xs tracking-[0.35em] uppercase ${
          light ? "text-accent" : "text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-4xl md:text-5xl font-semibold ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className="om-divider mt-6">
        <span className={`text-lg ${light ? "text-accent" : "text-primary"}`}>ॐ</span>
      </div>
      {subtitle && (
        <p className={`mt-6 text-base ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
