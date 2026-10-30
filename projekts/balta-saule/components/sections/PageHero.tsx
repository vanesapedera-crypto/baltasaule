"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { PageInfo } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const line: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

/** Apakšlapas galvenā fotogrāfija ar lapas nosaukumu. */
export default function PageHero({ page }: { page: PageInfo }) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "show" : "hidden";

  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-ink text-cream lg:min-h-[72svh]"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ scale: reduceMotion ? 1 : 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <Image
          src={page.heroImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/50"
      />

      <motion.div
        variants={container}
        initial={initial}
        animate="show"
        className="container-x relative w-full pt-36 pb-12 sm:pb-16 lg:pt-44 lg:pb-20"
      >
        <div className="overflow-hidden">
          <motion.p
            variants={line}
            className="text-[0.7rem] font-medium tracking-luxe text-sand uppercase sm:text-xs"
          >
            {page.eyebrow}
          </motion.p>
        </div>
        <h1 id="page-title" className="mt-4 overflow-hidden pb-2 text-cream">
          <motion.span variants={line} className="display-xl block pt-[0.08em]">
            {page.label}
          </motion.span>
        </h1>
      </motion.div>
    </section>
  );
}
