import { Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import {
  appetizers,
  coldTable,
  desserts,
  images,
  kitchen,
  salads,
  unitLabels,
  warmTable,
  type PricedItem,
} from "@/lib/data";
import { formatPrice } from "@/lib/format";

function Bullet() {
  return <span aria-hidden className="mt-[0.62em] size-1.5 shrink-0 rotate-45 bg-amber" />;
}

function BulletList({ items, columns = false }: { items: readonly string[]; columns?: boolean }) {
  return (
    <ul className={columns ? "grid gap-x-8 gap-y-3 sm:grid-cols-2" : "space-y-3"}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-snug text-ink/80">
          <Bullet />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SetHeader({ title, price, unit }: { title: string; price: number; unit: string }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-line pb-6">
      <h4 className="text-[2rem] sm:text-4xl">{title}</h4>
      <p className="shrink-0 text-right">
        <span className="block font-serif text-3xl leading-none text-espresso sm:text-4xl">
          {formatPrice(price)}
        </span>
        <span className="mt-1.5 block text-[0.62rem] font-medium tracking-luxe text-ink/55 uppercase">
          {unit}
        </span>
      </p>
    </div>
  );
}

function priceLabel(item: PricedItem) {
  const value =
    item.priceMax !== undefined
      ? `${formatPrice(item.price).replace(/\s?€/, "")}–${formatPrice(item.priceMax)}`
      : formatPrice(item.price);
  return value;
}

function GroupHeader({ title, note }: { title: string; note: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-espresso/25 pb-4">
      <h4 className="text-3xl sm:text-4xl">{title}</h4>
      <p className="text-[0.65rem] font-medium tracking-luxe text-caramel uppercase">{note}</p>
    </div>
  );
}

function PriceList({ items, columns = false }: { items: PricedItem[]; columns?: boolean }) {
  return (
    <ul className={columns ? "grid gap-x-14 md:grid-cols-2" : ""}>
      {items.map((item) => (
        <li key={item.name} className="dotted-leader py-3 text-[0.95rem] text-ink/85">
          <span>{item.name}</span>
          <span className="font-serif text-lg text-espresso">{priceLabel(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Menu() {
  return (
    <section id="edienkarte" aria-labelledby="menu-title" className="section-y bg-cream">
      <div className="container-x">
        {/* Ievads + fotogrāfijas */}
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
                {kitchen.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="menu-title" className="display-lg mt-5">
                {kitchen.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-ink/75 sm:text-[1.05rem]">
                {kitchen.intro}
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-5 items-start gap-3 sm:gap-5 lg:col-span-6 lg:col-start-7">
            <RevealImage
              image={images.kitchen}
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="col-span-3 aspect-[3/4]"
            />
            <RevealImage
              image={images.table}
              delay={0.2}
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="col-span-2 mt-16 aspect-[3/4] lg:mt-28"
            />
          </div>
        </div>

        {/* Banketa galdi */}
        <div className="mt-24 lg:mt-32">
          <Reveal className="text-center">
            <h3 className="font-sans text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
              {kitchen.setsTitle}
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full border border-line bg-linen/60 p-7 sm:p-10">
                <SetHeader
                  title={coldTable.title}
                  price={coldTable.price}
                  unit={unitLabels[coldTable.unit]}
                />
                <div className="mt-7">
                  <BulletList items={coldTable.items} />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="h-full border border-line bg-linen/60 p-7 sm:p-10">
                <SetHeader
                  title={warmTable.title}
                  price={warmTable.price}
                  unit={unitLabels[warmTable.unit]}
                />
                <p className="mt-7 text-[0.65rem] font-medium tracking-luxe text-caramel uppercase">
                  Piedevas
                </p>
                <div className="mt-4">
                  <BulletList items={warmTable.sides} />
                </div>
                <p className="mt-8 text-[0.65rem] font-medium tracking-luxe text-caramel uppercase">
                  {warmTable.choicesTitle}
                </p>
                <div className="mt-4">
                  <BulletList items={warmTable.choices} columns />
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-col items-center justify-between gap-3 bg-espresso px-8 py-8 text-center text-cream sm:flex-row sm:px-10 sm:text-left">
              <p className="font-serif text-2xl sm:text-3xl">{kitchen.combo.title}</p>
              <p>
                <span className="font-serif text-4xl text-amber">
                  {formatPrice(kitchen.combo.price)}
                </span>
                <span className="ml-2 text-[0.65rem] font-medium tracking-luxe text-cream/70 uppercase">
                  {kitchen.combo.unit}
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Salāti, uzkodas, deserti */}
        <div className="mt-24 lg:mt-32">
          <Reveal className="text-center">
            <p className="text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
              {kitchen.alacarteEyebrow}
            </p>
            <h3 className="mt-4 text-4xl sm:text-5xl">{kitchen.alacarteTitle}</h3>
          </Reveal>

          <Reveal className="mt-14">
            <GroupHeader title="Salāti" note="€ / kg" />
            <div className="mt-2">
              <PriceList items={salads} columns />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <GroupHeader title="Uzkodas" note="€ / kg" />
              <div className="mt-2">
                <PriceList items={appetizers} />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex items-baseline justify-between gap-4 border-b border-espresso/25 pb-4">
                <h4 className="text-3xl sm:text-4xl">{desserts.title}</h4>
                <p className="shrink-0 text-right">
                  <span className="font-serif text-2xl text-espresso">
                    {formatPrice(desserts.price)}
                  </span>
                  <span className="ml-2 text-[0.65rem] font-medium tracking-luxe text-caramel uppercase">
                    / {unitLabels[desserts.unit]}
                  </span>
                </p>
              </div>
              <div className="mt-5">
                <BulletList items={desserts.items} />
              </div>
            </Reveal>
          </div>

          {/* Aicinājums */}
          <Reveal className="mt-20 flex flex-col items-center gap-6 border-t border-line pt-12 text-center">
            <p className="statement max-w-2xl">{kitchen.note}</p>
            <div className="flex flex-col items-center gap-3">
              <a
                href={kitchen.contact.phoneHref}
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-espresso px-8 py-4 text-[0.7rem] font-medium tracking-luxe text-cream uppercase"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-caramel transition-transform duration-500 ease-luxe group-hover:scale-y-100"
                />
                <Phone className="relative size-4" strokeWidth={1.5} aria-hidden />
                <span className="relative">{kitchen.contact.phone}</span>
              </a>
              <p className="text-sm text-ink/60">
                {kitchen.contact.name} — {kitchen.contact.role}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
