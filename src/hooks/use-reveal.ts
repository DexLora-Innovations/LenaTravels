import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target as Element);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe all current reveal elements
    const observeAll = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      els.forEach((el) => {
        // If already visible, skip observing
        if (!el.classList.contains("is-visible")) io.observe(el);
      });
    };

    observeAll();

    // Watch for new reveal elements added to the DOM (e.g., language changes causing remount)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList" && m.addedNodes.length) {
          m.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            if (node.classList && node.classList.contains("reveal")) {
              if (!node.classList.contains("is-visible")) io.observe(node);
            }
            // Also query inside the added subtree
            const nested = node.querySelectorAll?.(".reveal") || [];
            nested.forEach((el: Element) => {
              const h = el as HTMLElement;
              if (!h.classList.contains("is-visible")) io.observe(h);
            });
          });
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}
