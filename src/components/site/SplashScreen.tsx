import { useEffect, useRef, useState } from "react";
import dliLogo from "@/assets/dli-logo.jpg";

/**
 * SplashScreen — DLI intro overlay
 *
 * Glitch root-causes fixed:
 * 1. decoding="sync" + fetchpriority="high"  → image is decoded before first
 *    paint, eliminating the "logo flashes in late" flicker.
 * 2. Separate CSS-driven fade for the overlay background (splash-screen) and
 *    content (splash-screen__content) so background and logo appear together.
 * 3. useRef guard prevents React StrictMode's double-invoke from running two
 *    sets of timers simultaneously (which caused early/double exit).
 * 4. pointer-events:none on body during exit so underlying page can't receive
 *    accidental taps before the overlay is fully gone.
 * 5. visibility:hidden removed from CSS transition — we now only animate
 *    opacity and use React state to unmount, preventing the "jump to hidden"
 *    frame that caused the white-flash on some browsers.
 */
export function SplashScreen() {
  const [phase, setPhase] = useState<"entering" | "visible" | "leaving" | "gone">("entering");
  const started = useRef(false);

  useEffect(() => {
    // StrictMode guard: only run once per true mount
    if (started.current) return;
    started.current = true;

    // Phase: entering → visible (after CSS animation completes ~700ms)
    const visibleTimer = window.setTimeout(() => setPhase("visible"), 700);

    // Phase: visible → leaving (start fade-out at 2500ms total)
    const leaveTimer = window.setTimeout(() => setPhase("leaving"), 2500);

    // Phase: leaving → gone (unmount after 500ms fade-out = 3000ms total)
    const goneTimer = window.setTimeout(() => {
      setPhase("gone");
      // Snap scroll to top the moment the overlay disappears
      try {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        // Restore smooth scrolling after a tick
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = "";
        });
      } catch {
        /* ignore */
      }
    }, 3000);

    return () => {
      window.clearTimeout(visibleTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`splash-screen ${phase === "leaving" ? "splash-screen--leaving" : ""}`}
      role="status"
      aria-label="Loading Lena Travels"
      aria-live="polite"
    >
      <div className="splash-screen__content">
        <img
          src={dliLogo}
          alt="DLI - DexLora Innovations Logo"
          className="splash-screen__logo"
          width={1536}
          height={1024}
          /*
           * fetchpriority="high" → browser fetches this before other resources
           * decoding="sync"      → image is decoded on the main thread before
           *                        the first paint, so it's never "missing" for
           *                        even one frame. Safe here because the image
           *                        is small and cached after first load.
           */
          fetchPriority="high"
          decoding="sync"
        />
        <p className="splash-screen__text">Developed by DLI</p>
      </div>
    </div>
  );
}
