import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { accommodation, contact, images, rooms } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export default function Accommodation() {
  return (
    <section id="naktsmitnes" aria-labelledby="stay-title" className="section-y bg-linen">
      <div className="container-x">
        {/* Virsraksts */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
                {accommodation.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="stay-title" className="display-lg mt-5">
                {accommodation.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5 lg:pb-3">
            <p className="text-base leading-relaxed text-ink/75 sm:text-[1.05rem]">
              {accommodation.intro}
            </p>
          </Reveal>
        </div>

        {/* Fotogrāfijas */}
        <div className="mt-14 grid grid-cols-2 items-start gap-3 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <RevealImage
            image={images.accommodation}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="col-span-2 aspect-[4/5] lg:col-span-5"
          />
          <RevealImage
            image={images.balcony}
            delay={0.15}
            sizes="(min-width: 1024px) 32vw, 50vw"
            className="aspect-[3/4] lg:col-span-4 lg:mt-24"
          />
          <RevealImage
            image={images.accommodationExterior}
            delay={0.3}
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="aspect-[3/4] lg:col-span-3 lg:mt-48"
          />
          <RevealImage
            image={images.veranda}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="col-span-2 aspect-[3/2] lg:col-span-6"
          />
          <RevealImage
            image={images.garden}
            delay={0.15}
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="aspect-[4/5] lg:col-span-3 lg:mt-16"
          />
          <RevealImage
            image={images.contact}
            delay={0.3}
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="aspect-[4/5] lg:col-span-3 lg:mt-32"
          />
        </div>

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
          <Reveal className="mt-20 grid gap-8 border-y border-line py-10 lg:mt-28 lg:grid-cols-12 lg:items-center lg:py-12">
            <p className="statement lg:col-span-7">{accommodation.roomsNote}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <a
                href={contact.phoneHref}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-espresso px-7 py-4 text-[0.7rem] font-medium tracking-luxe text-cream uppercase"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-caramel transition-transform duration-500 ease-luxe group-hover:scale-y-100"
                />
                <Phone className="relative size-4" strokeWidth={1.5} aria-hidden />
                <span className="relative">{contact.phone}</span>
              </a>
              <a
                href={contact.emailHref}
                className="inline-flex items-center justify-center gap-3 border border-espresso/70 px-7 py-4 text-[0.7rem] font-medium tracking-luxe text-espresso uppercase transition-colors duration-500 hover:bg-espresso hover:text-cream"
              >
                <Mail className="size-4" strokeWidth={1.5} aria-hidden />
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
                  <RevealImage
                    image={extra.image}
                    delay={i * 0.15}
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="aspect-[4/3]"
                  />
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
