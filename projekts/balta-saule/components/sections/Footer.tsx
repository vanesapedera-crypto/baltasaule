import Image from "next/image";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, navItems, site, socials } from "@/lib/data";

const linkClass =
  "underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-cream hover:decoration-amber";

const headingClass = "mb-6 font-sans text-[0.68rem] font-medium tracking-luxe text-amber uppercase";

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

      <div className="container-x pt-20 pb-14 lg:pt-28 lg:pb-20">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Zīmols */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#top" aria-label={`${site.name} — uz sākumu`} className="inline-block">
              <Image
                src="/images/logo-light.png"
                alt={site.name}
                width={906}
                height={631}
                sizes="176px"
                className="h-28 w-auto lg:h-32"
              />
            </a>
            <p className="mt-6 text-[0.7rem] font-medium tracking-luxe text-sand/80 uppercase">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-sm font-serif text-2xl leading-snug text-sand italic">
              {contact.cta}
            </p>
            <a
              href={contact.phoneHref}
              className={`mt-8 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-luxe text-cream uppercase ${linkClass}`}
            >
              Rezervēt atpūtu vai svinības
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </a>
          </div>

          {/* Kontakti */}
          <div className="lg:col-span-4">
            <h3 className={headingClass}>Kontakti</h3>
            <address className="space-y-4 text-sm leading-relaxed not-italic">
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-3 ${linkClass}`}
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                <span>
                  {street}, {locality}
                  <br />
                  {parish}, {region}
                  <br />
                  {postalCode}, {country}
                </span>
              </a>
              <a href={contact.emailHref} className={`flex items-center gap-3 ${linkClass}`}>
                <Mail className="size-4 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                {contact.email}
              </a>
            </address>

            <ul className="mt-6 space-y-4 border-t border-cream/10 pt-6">
              {contact.people.map((person) => (
                <li key={person.phone}>
                  <p className="text-[0.62rem] font-medium tracking-luxe text-linen/50 uppercase">
                    {person.label}
                  </p>
                  <a
                    href={person.phoneHref}
                    className={`mt-1.5 flex items-center gap-3 text-sm ${linkClass}`}
                  >
                    <Phone className="size-4 shrink-0 text-amber" strokeWidth={1.5} aria-hidden />
                    <span>
                      {person.phone}
                      <span className="text-linen/50"> · {person.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigācija */}
          <nav aria-label="Kājenes navigācija" className="lg:col-span-2">
            <h3 className={headingClass}>Navigācija</h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sociālie tīkli */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Sekojiet</h3>
            <ul className="space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 ${linkClass}`}
                  >
                    {s.name}
                    <ArrowUpRight className="size-3" strokeWidth={1.5} aria-hidden />
                    <span className="sr-only">(atveras jaunā cilnē)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Visas tiesības aizsargātas.
          </p>
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
