import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  /** Virsraksta beigu daļa kursīvā un akcenta krāsā */
  accent?: string;
  paragraphs: readonly string[];
  tone?: "light" | "dark";
  /** Papildu elements pa labi no virsraksta (piem. "40 viesi") */
  aside?: ReactNode;
};

/** Sadaļas augša: liels virsraksts, zem tā līnija un teksts divās kolonnās. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  paragraphs,
  tone = "light",
  aside,
}: Props) {
  const dark = tone === "dark";
  return (
    <div>
      <Reveal>
        <p
          className={cn(
            "text-[0.7rem] font-medium tracking-luxe uppercase",
            dark ? "text-amber" : "text-caramel",
          )}
        >
          {eyebrow}
        </p>
      </Reveal>

      <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal delay={0.1}>
          <h2
            id={id}
            className={cn(
              "font-serif text-[3.25rem] leading-[0.95] font-normal tracking-[-0.025em] sm:text-7xl lg:text-[6.75rem]",
              dark ? "text-cream" : "text-espresso",
            )}
          >
            {title}
            {accent && (
              <>
                {" "}
                <span className={cn("italic", dark ? "text-amber" : "text-caramel")}>{accent}</span>
              </>
            )}
          </h2>
        </Reveal>
        {aside && <Reveal delay={0.2}>{aside}</Reveal>}
      </div>

      <div
        className={cn(
          "mt-10 grid gap-6 border-t pt-8 text-base leading-relaxed sm:text-[1.05rem] md:grid-cols-2 md:gap-12",
          dark ? "border-cream/15 text-cream/75" : "border-line text-ink/75",
        )}
      >
        {paragraphs.map((p, i) => (
          <Reveal key={p} delay={0.15 + i * 0.08}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
