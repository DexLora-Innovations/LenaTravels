import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { destinationPlaces } from "./destinationPlaces";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ExploreModal({
  destKey,
  onClose,
}: {
  destKey: keyof typeof destinationPlaces | null;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const data = destKey ? destinationPlaces[destKey] : null;
  const { t } = useLanguage();

  useEffect(() => {
    if (destKey) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 450);
      return () => clearTimeout(timer);
    }
  }, [destKey]);

  return (
    <Dialog open={!!destKey} onOpenChange={(o) => !o && onClose()}>
      {/*
       * Responsive dialog:
       * - max-w-5xl on large screens
       * - w-[95vw] on small screens to prevent horizontal overflow
       * - max-h-[90vh] with overflow-y-auto so content never clips
       * - p-0 so we control padding per section
       */}
      <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-background">
        {data && (
          <>
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border px-4 sm:px-8 py-4 sm:py-6">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground lang-heading-card break-words">
                  {t("modal.explore")}{" "}
                  <em className="not-italic text-gradient-gold">{data.title}</em>
                </DialogTitle>
              </DialogHeader>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <Loader2 className="h-10 w-10 text-primary animate-spin" aria-hidden="true" />
                <p
                  className="text-sm text-muted-foreground tracking-widest uppercase"
                  role="status"
                >
                  {t("modal.loading")}
                </p>
              </div>
            ) : (
              /*
               * Card grid:
               * - 1 col on mobile (< 480px) to prevent cramped cards
               * - 2 cols on sm
               * - 3 cols on lg
               * Consistent aspect-[4/3] images so all cards align regardless
               * of content length. h-full on article ensures equal heights
               * within each row.
               */
              <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {data.places.map((p, i) => (
                  <article
                    key={p.nameKey}
                    className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover-lift opacity-0 flex flex-col"
                    style={{ animation: `fade-up .6s ease-out ${i * 60}ms both` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative shrink-0">
                      <img
                        src={p.img}
                        alt={p.alt ?? t(p.nameKey)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs text-accent">
                          {i < 9 ? `0${i + 1}` : `${i + 1}`}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-lg sm:text-xl text-foreground lang-heading-card break-words">
                        {t(p.nameKey)}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                        {t(p.descKey)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {!loading && (
              <div className="sticky bottom-0 bg-background/95 backdrop-blur-xl border-t border-border px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={t("modal.close")}
                >
                  {t("modal.close")}
                </button>
                <a
                  href="#package"
                  onClick={onClose}
                  className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent/10 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {t("modal.itinerary")}
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {t("modal.book")}
                </a>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
