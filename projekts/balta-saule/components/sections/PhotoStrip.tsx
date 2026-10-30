import RevealImage from "@/components/ui/RevealImage";
import type { ImageAsset } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Fotogrāfiju josla visā lapas platumā — 4 bildes rindā (6 bildes: 3 rindā); telefonā 2 kolonnas. */
export default function PhotoStrip({
  images,
  className,
}: {
  images: ImageAsset[];
  className?: string;
}) {
  return (
    <section aria-label="Fotogrāfijas" className={cn("py-3 sm:py-4", className)}>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 px-3 sm:gap-4 sm:px-4",
          images.length === 5
            ? "lg:grid-cols-5"
            : images.length % 3 === 0
              ? "lg:grid-cols-3"
              : "lg:grid-cols-4",
        )}
      >
        {images.map((image, i) => (
          <RevealImage
            key={image.src}
            image={image}
            delay={i * 0.1}
            sizes={images.length % 3 === 0 ? "(min-width: 1024px) 33vw, 50vw" : "(min-width: 1024px) 25vw, 50vw"}
            className={cn(
              "aspect-[4/5]",
              i % 2 === 1 && "lg:mt-12",
              // Nepāra skaitam telefonā pēdējā bilde aizņem visu rindu
              images.length % 2 === 1 &&
                i === images.length - 1 &&
                "col-span-2 aspect-[3/2] lg:col-span-1 lg:aspect-[4/5]",
            )}
          />
        ))}
      </div>
    </section>
  );
}
