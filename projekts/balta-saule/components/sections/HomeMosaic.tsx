import RevealImage from "@/components/ui/RevealImage";
import { homeMosaic } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Izkārtojums 12 kolonnu režģī (desktop); telefonā — 2 kolonnas. */
const layout = [
  "col-span-2 row-span-2 lg:col-span-5 lg:row-span-2",
  "col-span-1 row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-1 row-span-1 lg:col-span-4 lg:row-span-1",
  "col-span-1 row-span-1 lg:col-span-4 lg:row-span-1",
  "col-span-1 row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-2 row-span-1 lg:col-span-6 lg:row-span-2",
  "col-span-1 row-span-2 lg:col-span-3 lg:row-span-2",
];

/** Sākumlapa: fotogrāfiju kolāža zem hero — tikai noskaņa. */
export default function HomeMosaic() {
  return (
    <section id="ieskats" aria-label="Ieskats Baltajā Saulē" className="bg-cream py-3 sm:py-4">
      <div className="grid grid-flow-row-dense auto-rows-[9.5rem] grid-cols-2 gap-3 px-3 sm:auto-rows-[13rem] sm:gap-4 sm:px-4 lg:grid-cols-12 lg:auto-rows-[15rem]">
        {homeMosaic.map((image, i) => (
          <RevealImage
            key={image.src}
            image={image}
            delay={(i % 4) * 0.08}
            sizes="(min-width: 1024px) 40vw, 50vw"
            className={cn("h-full", layout[i])}
          />
        ))}
      </div>
    </section>
  );
}
