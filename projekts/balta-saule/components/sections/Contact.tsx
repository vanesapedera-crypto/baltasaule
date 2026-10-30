import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contact, images, socials } from "@/lib/data";

/** Kontakti — bilde fonā, virsraksts centrā un tālruņu kartītes. */
export default function Contact() {
  const { street, locality, parish } = contact.address;

  return (
    <section
      id="kontakti"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-28"
    >
      <Image
        src={images.signFlowers.src}
        alt=""
        fill
        sizes="100vw"
        quality={90}
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/75" />

      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-medium tracking-luxe text-amber uppercase">Rezervācijas</p>
          <h2 id="contact-title" className="mt-5 font-serif text-[2.25rem] leading-tight text-cream sm:text-5xl">
            {contact.ctaDescription}
          </h2>
        </Reveal>

        {/* Tālruņu kartītes */}
        <ul className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-3 sm:gap-4">
          {contact.people.map((person, i) => (
            <li key={person.phone}>
              <Reveal delay={0.1 + i * 0.08} className="h-full">
                <a
                  href={person.phoneHref}
                  className="group flex h-full flex-col items-center bg-cream px-6 py-7 text-center text-espresso transition-colors duration-500 hover:bg-sand"
                >
                  <span className="text-[0.62rem] font-medium tracking-luxe text-caramel uppercase">
                    {person.label}
                  </span>
                  <span className="mt-2 font-serif text-2xl">{person.name}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm">
                    <Phone className="size-3.5 text-caramel" strokeWidth={1.5} aria-hidden />
                    {person.phone}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* E-pasts, adrese, Facebook */}
        <Reveal
          delay={0.3}
          className="mt-10 flex flex-col items-center justify-center gap-x-10 gap-y-4 text-sm text-cream/85 sm:flex-row sm:flex-wrap"
        >
          <a href={contact.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-amber">
            <Mail className="size-4 text-amber" strokeWidth={1.5} aria-hidden />
            {contact.email}
          </a>
          <a
            href={contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-amber"
          >
            <MapPin className="size-4 text-amber" strokeWidth={1.5} aria-hidden />
            {street}, {locality}, {parish}
            <span className="sr-only">(atveras jaunā cilnē)</span>
          </a>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-amber"
            >
              {s.name}
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
              <span className="sr-only">(atveras jaunā cilnē)</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
