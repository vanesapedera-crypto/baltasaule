"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ImageAsset } from "@/lib/data";
import { cn } from "@/lib/utils";

type RevealImageProps = {
  image: ImageAsset;
  sizes: string;
  /** Konteinera klases — jānorāda proporcija (piem. aspect-[4/5]) un platums */
  className?: string;
  imageClassName?: string;
  delay?: number;
  priority?: boolean;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fotogrāfija atveras ar "aizkara" efektu no apakšas un lēnu tālināšanu. */
export default function RevealImage({
  image,
  sizes,
  className,
  imageClassName,
  delay = 0,
  priority = false,
}: RevealImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative overflow-hidden bg-linen", className)}
      initial={reduceMotion ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.4, delay, ease: EASE }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.8, delay, ease: EASE }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
