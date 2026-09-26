import { Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { events, images } from "@/lib/data";

export default function Events() {
  return (
    <section id="svinibas" aria-labelledby="events-title" className="section-y bg-espresso text-cream">
      <div className="container-x">
        {/* Virsraksts */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.7rem] font-medium tracking-luxe text-amber uppercase">
                {events.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="events-title" className="display-lg mt-5 text-cream">
                {events.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex items-end gap-6 lg:col-span-5 lg:pb-2">
            <p className="font-serif text-[5.5rem] leading-[0.8] text-amber sm:text-[7rem]">
              {events.capacity}
            </p>
            <p className="pb-1 text-[0.68rem] font-medium tracking-luxe text-cream/70 uppercase">
              {events.capacityLabel}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-[1.05rem] lg:mt-12">
            {events.intro}
          </p>
        </Reveal>

        {/* Fotogrāfijas */}
        <div className="mt-14 grid grid-cols-5 items-start gap-3 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <RevealImage
            image={images.party}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="col-span-5 aspect-[3/2] lg:col-span-8"
          />
          <RevealImage
            image={images.eventsTable}
            delay={0.2}
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="col-span-3 col-start-3 -mt-16 aspect-[3/4] border-[6px] border-espresso sm:-mt-24 lg:col-span-4 lg:col-start-auto lg:mt-32 lg:border-0"
          />
        </div>

        {/* Pasākumu veidi */}
        <ul className="mt-16 border-t border-cream/15 lg:mt-24">
          {events.types.map((type, i) => (
            <li key={type.slug}>
              <Reveal
                delay={i * 0.06}
                className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-cream/15 py-6 sm:grid-cols-[4rem_1fr_1.1fr] sm:items-baseline lg:py-8"
              >
                <span className="pt-2 text-[0.65rem] font-medium tracking-luxe text-amber sm:pt-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl text-cream transition-[color,translate] duration-500 ease-luxe group-hover:translate-x-2 group-hover:text-amber sm:text-4xl lg:text-5xl">
                  {type.title}
                </h3>
                <p className="col-start-2 mt-2 text-sm leading-relaxed text-cream/65 sm:col-start-auto sm:mt-0 sm:text-base">
                  {type.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Smaidu darbnīca */}
        <Reveal className="mt-16 grid gap-8 border border-cream/15 p-7 sm:p-10 lg:mt-24 lg:grid-cols-12 lg:items-center lg:p-14">
          <div className="lg:col-span-8">
            <p className="text-[0.7rem] font-medium tracking-luxe text-amber uppercase">
              {events.partnerEyebrow}
            </p>
            <p className="mt-4 font-serif text-[1.75rem] leading-snug text-cream italic sm:text-4xl">
              {events.partner.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end lg:text-right">
            <a
              href={events.partner.phoneHref}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-cream px-8 py-4 text-[0.7rem] font-medium tracking-luxe text-espresso uppercase sm:w-auto"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-amber transition-transform duration-500 ease-luxe group-hover:scale-y-100"
              />
              <Phone className="relative size-4" strokeWidth={1.5} aria-hidden />
              <span className="relative">{events.ctaLabel}</span>
            </a>
            <p className="mt-4 text-center text-sm text-cream/70 sm:text-left lg:text-right">
              {events.partner.name}:{" "}
              <a
                href={events.partner.phoneHref}
                className="text-cream underline decoration-amber/60 underline-offset-4 transition-colors hover:text-amber"
              >
                {events.partner.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
