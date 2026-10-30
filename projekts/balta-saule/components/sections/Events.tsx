import { Phone } from "lucide-react";
import PhotoCollage from "@/components/sections/PhotoCollage";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { events, eventsGallery } from "@/lib/data";

export default function Events() {
  return (
    <section id="svinibas" aria-labelledby="events-title" className="section-y bg-espresso text-cream">
      <div className="container-x">
        <SectionHeading
          id="events-title"
          tone="dark"
          eyebrow={events.eyebrow}
          title={events.title}
          accent={events.titleAccent}
          paragraphs={events.intro}
        />

        {/* Fotogrāfiju kolāža — visas bildes vienuviet */}
        <PhotoCollage
          images={[eventsGallery.main, ...eventsGallery.side, ...eventsGallery.thumbs]}
          className="mt-14 lg:mt-16"
        />

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
