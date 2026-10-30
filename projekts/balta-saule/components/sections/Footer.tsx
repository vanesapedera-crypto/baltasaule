import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, site, socials } from "@/lib/data";

const linkClass =
  "underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-cream hover:decoration-amber";

export default function Footer() {
  const year = new Date().getFullYear();
  const { street, locality, parish, region, postalCode, country, countryCode } = contact.address;

  // Strukturētie dati meklētājprogrammām (schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "FoodEstablishment"],
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(site.ogImage, site.url).toString(),
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${street}, ${locality}, ${parish}`,
      addressLocality: locality,
      addressRegion: region,
      postalCode,
      addressCountry: countryCode,
    },
    hasMap: contact.mapUrl,
    sameAs: socials.map((s) => s.href),
  };

  return (
    <footer id="kontakti" aria-labelledby="footer-heading" className="bg-ink text-linen/75">
      <h2 id="footer-heading" className="sr-only">
        {site.name} — kontakti un navigācija
      </h2>

      <div className="container-x py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Kontakti */}
          <div className="lg:col-span-6">
            <Link href="/" aria-label={`${site.name} — uz sākumu`} className="inline-block">
              <Image
                src="/images/logo-light.png"
                alt={site.name}
                width={906}
                height={631}
                sizes="140px"
                className="h-20 w-auto"
              />
            </Link>

            {/* Tālruņi */}
            <ul className="mt-10 border-t border-cream/10">
              {contact.people.map((person) => (
                <li
                  key={person.phone}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-cream/10 py-4"
                >
                  <p>
                    <span className="font-serif text-xl text-cream">{person.name}</span>
                    <span className="ml-3 text-[0.62rem] font-medium tracking-luxe text-linen/50 uppercase">
                      {person.label}
                    </span>
                  </p>
                  <a href={person.phoneHref} className={`inline-flex items-center gap-2 text-sm ${linkClass}`}>
                    <Phone className="size-3.5 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                    {person.phone}
                  </a>
                </li>
              ))}
            </ul>

            {/* E-pasts, adrese, Facebook */}
            <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
              <div className="space-y-3">
                <a href={contact.emailHref} className={`flex items-center gap-3 ${linkClass}`}>
                  <Mail className="size-4 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                  {contact.email}
                </a>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${linkClass}`}
                  >
                    <ArrowUpRight className="size-4 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                    {s.name}
                    <span className="sr-only">(atveras jaunā cilnē)</span>
                  </a>
                ))}
              </div>
              <address className="not-italic">
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex gap-3 leading-relaxed ${linkClass}`}
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                  <span>
                    {street}, {locality}
                    <br />
                    {parish}, {region}
                    <br />
                    {postalCode}, {country}
                  </span>
                  <span className="sr-only">(atveras jaunā cilnē)</span>
                </a>
              </address>
            </div>
          </div>

          {/* Karte */}
          <div className="relative h-72 overflow-hidden lg:col-span-6 lg:h-auto lg:min-h-[24rem]">
            <iframe
              title="Baltā Saule kartē"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${street}, ${locality}, ${parish}, ${region}, ${postalCode}`)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 opacity-90 grayscale-[60%] sepia-[25%]"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-5">
            <p>
              © {year} {site.name}. Visas tiesības aizsargātas.
            </p>
            {site.credit.name && (
              <p className="text-[0.68rem] text-linen/25">
                {site.credit.label}: {site.credit.name}
                {site.credit.phone && (
                  <>
                    {" · "}
                    <a
                      href={site.credit.phoneHref}
                      className="transition-colors duration-300 hover:text-linen/60"
                    >
                      {site.credit.phone}
                    </a>
                  </>
                )}
              </p>
            )}
          </div>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 tracking-luxe uppercase transition-colors duration-300 hover:text-cream"
          >
            Uz augšu
            <ArrowUp
              className="size-3.5 transition-transform duration-500 ease-luxe group-hover:-translate-y-1"
              strokeWidth={1.5}
              aria-hidden
            />
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </footer>
  );
}
