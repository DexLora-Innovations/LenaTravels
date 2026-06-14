import { useEffect, useState } from "react";
import dliLogo from "@/assets/dli-logo.jpg";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 2500);
    const removeTimer = window.setTimeout(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      } catch (e) {
        // fallback for environments that don't support 'instant'
        try {
          window.scrollTo(0, 0);
        } catch (e) {
          /* ignore */
        }
      }
      setVisible(false);
    }, 3000);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen ${leaving ? "splash-screen--leaving" : ""}`}
      role="status"
      aria-label="Developed by DLI"
    >
      <div className="splash-screen__content">
        <img
          src={dliLogo}
          alt="DLI - DexLora Innovations Logo"
          className="splash-screen__logo"
          width={1536}
          height={1024}
          loading="eager"
          decoding="async"
        />
        <p className="splash-screen__text">Developed by DLI</p>
      </div>
    </div>
  );
}
