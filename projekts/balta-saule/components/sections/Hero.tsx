"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { hero, images, site } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};

/** Teksta rinda "izslīd" no maskas apakšas */
const line: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const fadeLate: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay: 1.4, ease: EASE } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Parallax: fotogrāfija kustas lēnāk par lapu, saturs pamazām izgaist.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduceMotion ? 1 : 0]);

  const initial = reduceMotion ? "show" : "hidden";

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-cream"
    >
      {/* Fotogrāfija */}
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: reduceMotion ? 1 : 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        >
          <Image
            src={images.hero.src}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-[50%_40%]"
          />
        </motion.div>
      </motion.div>

      {/* Tonējums lasāmībai */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/40 via-transparent to-transparent"
      />

      {/* Saturs */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative w-full pt-36 pb-10 lg:pt-44 sm:pb-14 lg:pb-16"
      >
        <motion.div variants={container} initial={initial} animate="show" className="max-w-4xl">
          <div className="overflow-hidden">
            <motion.p
              variants={line}
              className="text-[0.7rem] font-medium tracking-luxe text-sand uppercase sm:text-xs"
            >
              {hero.eyebrow}
            </motion.p>
          </div>

          <h1 id="hero-title" className="mt-5 text-cream">
            <span className="sr-only">{hero.srTitle}</span>
            <span aria-hidden className="block overflow-hidden pb-2">
              <motion.span
                variants={line}
                className="block font-script text-[4.5rem] leading-[0.9] font-normal tracking-normal text-amber sm:text-[6rem] lg:text-[8rem]"
              >
                Baltā
              </motion.span>
            </span>
            <span aria-hidden className="-mt-3 block overflow-hidden sm:-mt-5 lg:-mt-8">
              <motion.span variants={line} className="display-xl block pt-[0.08em] text-cream uppercase">
                Saule
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={fade} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="group relative inline-flex items-center justify-center overflow-hidden bg-cream px-8 py-4 text-[0.7rem] font-medium tracking-luxe text-espresso uppercase"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-amber transition-transform duration-500 ease-luxe group-hover:scale-y-100"
              />
              <span className="relative">{hero.primaryCta.label}</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center border border-cream/60 px-8 py-4 text-[0.7rem] font-medium tracking-luxe text-cream uppercase backdrop-blur-sm transition-colors duration-500 hover:border-cream hover:bg-cream/10"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Apakšējā josla: fakti + ritināšanas norāde */}
        <motion.div
          variants={fadeLate}
          initial={initial}
          animate="show"
          className="mt-14 flex items-end justify-between gap-8 border-t border-cream/20 pt-6 sm:mt-20"
        >
          <dl className="grid w-full grid-cols-3 gap-4 sm:w-auto sm:gap-12">
            {hero.highlights.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-serif text-2xl leading-none text-cream sm:text-3xl">
                  {h.value}
                </dd>
                <dd className="mt-2 text-[0.65rem] tracking-[0.14em] text-cream/65 uppercase sm:text-[0.7rem]">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#par-mums"
            aria-label={`Ritināt uz leju — ${site.name}`}
            className="hidden shrink-0 flex-col items-center gap-3 text-[0.65rem] tracking-luxe text-cream/70 uppercase transition-colors hover:text-cream sm:flex"
          >
            Ritināt
            <span className="relative block h-12 w-px overflow-hidden bg-cream/25">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-cream"
                animate={reduceMotion ? undefined : { y: ["-100%", "200%"] }}
                transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
              />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
