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
      const t = setTimeout(() => setLoading(false), 450);
      return () => clearTimeout(t);
    }
  }, [destKey]);

  return (
    <Dialog open={!!destKey} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-background">
        {data && (
          <>
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border px-8 py-6">
              <DialogHeader>
                <DialogTitle className="font-display text-3xl md:text-4xl text-foreground">
                  {t("modal.explore")} <em className="not-italic text-gradient-gold">{data.title}</em>
                </DialogTitle>
              </DialogHeader>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
                <p className="text-sm text-muted-foreground tracking-widest uppercase">{t("modal.loading")}</p>
              </div>
            ) : (
              <div className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.places.map((p, i) => (
                  <article
                    key={p.nameKey}
                    className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover-lift opacity-0 h-full"
                    style={{ animation: `fade-up .6s ease-out ${i * 60}ms both` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img
                        src={p.img}
                        alt={p.alt ?? t(p.nameKey)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs text-accent">0{i < 9 ? i + 1 : ""}{i >= 9 ? "10" : ""}</span>
                      </div>
                      <h3 className="mt-1 font-display text-xl text-foreground">{t(p.nameKey)}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(p.descKey)}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {!loading && (
              <div className="sticky bottom-0 bg-background/95 backdrop-blur-xl border-t border-border px-8 py-5 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {t("modal.close")}
                </button>
                <a
                  href="#package"
                  onClick={onClose}
                  className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent/10 transition-colors text-center"
                >
                  {t("modal.itinerary")}
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform text-center"
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
