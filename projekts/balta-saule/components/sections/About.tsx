import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { about, images } from "@/lib/data";

export default function About() {
  return (
    <section id="par-mums" aria-labelledby="about-title" className="section-y overflow-hidden bg-cream">
      <div className="container-x grid gap-20 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Fotogrāfiju kompozīcija */}
        <div className="relative pb-12 lg:col-span-6 lg:pb-16">
          <RevealImage
            image={images.about}
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="aspect-[4/5] w-[82%] sm:w-[72%] lg:w-[80%]"
            imageClassName="object-[50%_30%]"
          />
          <RevealImage
            image={images.hotTub}
            delay={0.25}
            sizes="(min-width: 1024px) 24vw, 55vw"
            className="absolute right-0 bottom-0 aspect-[4/3] w-[58%] border-[6px] border-cream shadow-[0_30px_60px_-30px_rgba(59,42,32,0.45)] sm:w-[50%] lg:border-8"
          />
        </div>

        {/* Teksts */}
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-luxe text-caramel uppercase">
              {about.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 id="about-title" className="display-lg mt-5">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 sm:text-[1.05rem]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <blockquote className="statement mt-10 border-l border-amber pl-6">
              {about.statement}
            </blockquote>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 border-t border-line">
              {about.facilities.map((f, i) => (
                <li
                  key={f}
                  className="flex items-baseline gap-3 border-b border-line py-3.5 text-sm text-espresso"
                >
                  <span className="text-[0.62rem] font-medium tracking-luxe text-caramel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <a href={about.cta.href} className="text-link mt-10 inline-block">
              {about.cta.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
