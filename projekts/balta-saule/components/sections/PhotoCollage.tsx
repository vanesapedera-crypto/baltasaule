import RevealImage from "@/components/ui/RevealImage";
import type { ImageAsset } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Fotogrāfiju kolāža (mūra izkārtojums): katra bilde redzama pilnībā savās
 * proporcijās, bez apgriešanas. Desktop — 4 kolonnas, planšetē 3, telefonā 2.
 */
export default function PhotoCollage({
  images,
  className,
}: {
  images: readonly ImageAsset[];
  className?: string;
}) {
  return (
    <div className={cn("columns-2 gap-2.5 sm:columns-3 sm:gap-3 lg:columns-4 lg:gap-4", className)}>
      {images.map((image, i) => (
        <div
          key={image.src}
          className="mb-2.5 break-inside-avoid sm:mb-3 lg:mb-4"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        >
          <RevealImage
            image={image}
            delay={(i % 4) * 0.08}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}
