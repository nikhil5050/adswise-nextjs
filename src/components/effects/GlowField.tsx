"use client";

import { useEffect } from "react";

// Cards that light up under the pointer. `.glow-card` is the opt-in for any page.
const CARD_SELECTOR =
  ".glow-card, .home-v2 .review, .home-v2 .hl-card, .home-v2 .value, .home-v2 .calc";

/**
 * Feeds pointer position to CSS: --mx/--my on the hovered card for its local
 * spotlight. All drawing is in globals.css / home.css.
 */
export default function GlowField() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let last: PointerEvent | null = null;

    const paint = () => {
      frame = 0;
      if (!last) return;
      const { clientX: x, clientY: y, target } = last;
      const card = target instanceof Element ? target.closest<HTMLElement>(CARD_SELECTOR) : null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${x - r.left}px`);
        card.style.setProperty("--my", `${y - r.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
