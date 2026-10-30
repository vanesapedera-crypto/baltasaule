import { cn } from "@/lib/utils";

/** Maiga krāsu pāreja starp divām sadaļām ar atšķirīgu fonu. */
export default function SectionFade({ className }: { className: string }) {
  return <div aria-hidden className={cn("h-20 bg-gradient-to-b sm:h-28 lg:h-36", className)} />;
}
