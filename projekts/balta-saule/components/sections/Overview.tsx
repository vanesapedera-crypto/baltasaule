import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { about, featuredPages, pages } from "@/lib/data";

/** Sākumlapa: īss ievads un kartītes uz galvenajām sadaļām. */
export default function Overview() {
  return (
    <section id="piedavajums" aria-labelledby="overview-title" className="section-y bg-cream">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
                {about.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="overview-title" className="display-lg mt-5">
                {about.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5 lg:pb-3">
            <p className="text-base leading-relaxed text-ink/75 sm:text-[1.05rem]">
              {about.paragraphs[0]}
            </p>
            <Link href={pages.about.href} className="text-link mt-6 inline-block">
              Vairāk par mums
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {featuredPages.map((page, i) => (
            <li key={page.href} className={i === 1 ? "md:mt-16" : undefined}>
              <Link href={page.href} className="group block">
                <RevealImage
                  image={page.cardImage}
                  delay={i * 0.12}
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="aspect-[4/5]"
                  imageClassName="transition-transform duration-[1.4s] ease-luxe group-hover:scale-[1.04]"
                />
                <Reveal delay={0.2 + i * 0.12}>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="text-3xl transition-colors duration-500 group-hover:text-caramel sm:text-4xl">
                      {page.label}
                    </h3>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-caramel transition-transform duration-500 ease-luxe group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{page.teaser}</p>
                </Reveal>
              </Link>
            </li>
          ))}
        </ul>

        <Reveal>
          <blockquote className="statement mx-auto mt-24 max-w-3xl text-center lg:mt-32">
            {about.statement}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
