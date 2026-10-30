import { Mail, Phone } from "lucide-react";
import PhotoCollage from "@/components/sections/PhotoCollage";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { accommodation, accommodationGallery, contact, rooms } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export default function Accommodation() {
  return (
    <section id="naktsmitnes" aria-labelledby="stay-title" className="section-y bg-linen">
      <div className="container-x">
        <SectionHeading
          id="stay-title"
          eyebrow={accommodation.eyebrow}
          title={accommodation.title}
          accent={accommodation.titleAccent}
          paragraphs={accommodation.intro}
        />

        {/* Fotogrāfiju kolāža — visas bildes vienuviet */}
        <PhotoCollage
          images={[accommodationGallery.main, ...accommodationGallery.side, ...accommodationGallery.thumbs]}
          className="mt-14 lg:mt-16"
        />

        {/* Numuri — kad būs pievienoti lib/data.ts */}
        {rooms.length > 0 ? (
          <ul className="mt-20 grid gap-14 md:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:gap-8">
            {rooms.map((room, i) => (
              <li key={room.slug}>
                <Reveal delay={i * 0.12}>
                  <article>
                    {room.images[0] && (
                      <RevealImage
                        image={room.images[0]}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="aspect-[4/5]"
                      />
                    )}
                    <div className="mt-6 flex items-baseline justify-between gap-4">
                      <h3 className="text-3xl">{room.name}</h3>
                      {room.price !== undefined && (
                        <p className="shrink-0 text-sm text-ink/70">
                          <span className="font-serif text-2xl text-espresso">
                            {formatPrice(room.price)}
                          </span>
                          {room.priceUnit && ` / ${room.priceUnit}`}
                        </p>
                      )}
                    </div>
                    <p className="mt-1 text-[0.68rem] font-medium tracking-luxe text-caramel uppercase">
                      Līdz {room.guests} viesiem
                    </p>
                    <p className="mt-4 leading-relaxed text-ink/75">{room.description}</p>
                    {room.amenities.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {room.amenities.map((a) => (
                          <li key={a} className="border border-line px-3 py-1 text-xs text-espresso">
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal className="mt-10 flex flex-col gap-5 bg-espresso px-6 py-6 text-cream sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:mt-12">
            <p className="font-serif text-xl italic sm:text-2xl">{accommodation.roomsNote}</p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2.5 bg-cream px-5 py-3 text-[0.68rem] font-medium tracking-luxe text-espresso uppercase transition-colors duration-300 hover:bg-amber"
              >
                <Phone className="size-3.5" strokeWidth={1.5} aria-hidden />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="inline-flex items-center gap-2.5 border border-cream/40 px-5 py-3 text-[0.68rem] font-medium tracking-luxe text-cream uppercase transition-colors duration-300 hover:border-cream hover:bg-cream/10"
              >
                <Mail className="size-3.5" strokeWidth={1.5} aria-hidden />
                Rakstīt
              </a>
            </div>
          </Reveal>
        )}

        {/* Pirts un kubls */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="font-sans text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
              {accommodation.extrasTitle}
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-14 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {accommodation.extras.map((extra, i) => (
              <li key={extra.name}>
                <article>
                  {extra.inset ? (
                    // Divas bildes viena pāri otrai — tāpat kā sadaļā "Par mums"
                    <div className="relative aspect-[4/3]">
                      <RevealImage
                        image={extra.image}
                        delay={i * 0.15}
                        sizes="(min-width: 640px) 36vw, 80vw"
                        className="absolute top-0 left-0 h-[88%] w-[74%]"
                      />
                      <RevealImage
                        image={extra.inset}
                        delay={0.25 + i * 0.15}
                        sizes="(min-width: 640px) 18vw, 45vw"
                        className="absolute right-0 bottom-0 aspect-[3/4] w-[40%] border-[6px] border-linen shadow-[0_30px_60px_-30px_rgba(26,26,26,0.45)] lg:border-8"
                      />
                    </div>
                  ) : (
                    <RevealImage
                      image={extra.image}
                      delay={i * 0.15}
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="aspect-[4/3]"
                    />
                  )}
                  <Reveal delay={0.2 + i * 0.15}>
                    <div className="dotted-leader mt-6">
                      <h4 className="font-serif text-3xl text-espresso">{extra.name}</h4>
                      <p className="font-serif text-2xl text-espresso">
                        {formatPrice(extra.price)}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{extra.description}</p>
                  </Reveal>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
