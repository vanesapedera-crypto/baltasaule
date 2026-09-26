"use client";

import { useEffect, useState } from "react";

/**
 * Atgriež tās sadaļas id, kura pašlaik atrodas ekrāna "lasīšanas joslā".
 * Izmanto IntersectionObserver; lapas apakšā vienmēr aktivizē pēdējo sadaļu.
 */
export function useActiveSection(ids: readonly string[], rootMargin = "-40% 0px -55% 0px") {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(elements[elements.length - 1].id);
        return;
      }

      const first = elements.find((el) => visible.has(el.id));
      if (first) {
        setActive(first.id);
        return;
      }

      // Virs pirmās sadaļas (piem., Hero zonā) — nekas nav aktīvs.
      if (elements[0].getBoundingClientRect().top > window.innerHeight * 0.4) {
        setActive(null);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        update();
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [key, rootMargin]);

  return active;
}
