import Reveal from "@/components/ui/Reveal";
import type { Story } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Apraksta teksts: virsraksts pa kreisi, rindkopas pa labi. */
export default function StoryText({
  story,
  tone = "light",
  className,
}: {
  story: Story;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-10", className)}>
      <Reveal className="lg:col-span-4">
        <h3
          className={cn(
            "font-serif text-[2.25rem] leading-[1.1] sm:text-5xl",
            dark ? "text-cream" : "text-espresso",
          )}
        >
          {story.title}
        </h3>
      </Reveal>
      <div
        className={cn(
          "space-y-5 text-base leading-relaxed sm:text-[1.05rem] lg:col-span-7 lg:col-start-6",
          dark ? "text-cream/75" : "text-ink/75",
        )}
      >
        {story.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.08 + i * 0.08}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
