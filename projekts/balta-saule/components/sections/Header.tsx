"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact, navItems, site, socials } from "@/lib/data";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SECTION_IDS = navItems.map((item) => item.href.slice(1));
const MENU_CLOSE_MS = 450;

const listVariants: Variants = {
  hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const active = useActiveSection(SECTION_IDS);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Glass stāvoklis + paslēpšana, ritinot uz leju; parādīšana, ritinot uz augšu.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 160);
  });

  // Mobilā izvēlne: bloķē ritināšanu, aizver ar Esc un pārejot uz desktop.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  // Smooth scroll uz sadaļu (ņem vērā scroll-padding-top no globals.css).
  const scrollToHash = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
      const go = () => {
        if (href === "#top") {
          window.scrollTo({ top: 0, behavior });
        } else {
          document.getElementById(href.slice(1))?.scrollIntoView({ behavior, block: "start" });
        }
        window.history.replaceState(null, "", href === "#top" ? window.location.pathname : href);
      };

      if (href !== "#top" && !document.getElementById(href.slice(1))) return;
      e.preventDefault();

      if (open) {
        setOpen(false);
        window.setTimeout(go, reduceMotion ? 0 : MENU_CLOSE_MS);
      } else {
        go();
      }
    },
    [open, reduceMotion],
  );

  const glass = scrolled || open;
  // Virs Hero fotogrāfijas (caurspīdīgs header) — gaišs teksts.
  const onDark = !glass;

  return (
    <>
      <motion.header
        initial={{ y: -96, opacity: 0 }}
        animate={{ y: hidden && !open ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-luxe",
            glass
              ? "border-line bg-cream/70 shadow-[0_10px_40px_-18px_rgba(59,42,32,0.25)] backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-transparent",
          )}
        >
          <div
            className={cn(
              "container-x flex items-center justify-between gap-6 transition-[height] duration-500 ease-luxe",
              glass ? "h-16 lg:h-20" : "h-24 lg:h-36",
            )}
          >
            {/* Logo — gaišā versija virs Hero, tumšā uz "stikla" */}
            <a
              href="#top"
              onClick={(e) => scrollToHash(e, "#top")}
              aria-label={`${site.name} — uz sākumu`}
              className={cn(
                "relative block shrink-0 transition-[height] duration-500 ease-luxe",
                glass ? "h-13 lg:h-16" : "h-[4.5rem] lg:h-28",
              )}
            >
              <Image
                src="/images/logo-dark.png"
                alt={site.name}
                width={906}
                height={631}
                priority
                className={cn(
                  "h-full w-auto transition-opacity duration-500",
                  onDark ? "opacity-0" : "opacity-100",
                )}
              />
              <Image
                src="/images/logo-light.png"
                alt=""
                aria-hidden
                width={906}
                height={631}
                priority
                className={cn(
                  "absolute inset-0 h-full w-auto transition-opacity duration-500",
                  onDark ? "opacity-100" : "opacity-0",
                )}
              />
            </a>

            {/* Desktop navigācija */}
            <nav aria-label="Galvenā navigācija" className="hidden lg:block">
              <ul className="flex items-center">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => scrollToHash(e, item.href)}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "relative block px-4 py-2 text-[0.7rem] font-medium tracking-luxe uppercase transition-colors duration-300",
                          onDark
                            ? isActive
                              ? "text-cream"
                              : "text-cream/70 hover:text-cream"
                            : isActive
                              ? "text-espresso"
                              : "text-espresso/55 hover:text-espresso",
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            aria-hidden
                            className={cn("absolute inset-x-4 -bottom-px h-px", onDark ? "bg-amber" : "bg-caramel")}
                            transition={{ type: "spring", stiffness: 380, damping: 34 }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a
                href="#kontakti"
                onClick={(e) => scrollToHash(e, "#kontakti")}
                className={cn(
                  "group relative hidden overflow-hidden border px-6 py-3 text-[0.68rem] font-medium tracking-luxe uppercase transition-colors duration-500 lg:inline-flex",
                  onDark ? "border-cream/70 text-cream" : "border-espresso/80 text-espresso",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-luxe group-hover:scale-y-100",
                    onDark ? "bg-cream" : "bg-espresso",
                  )}
                />
                <span
                  className={cn(
                    "relative transition-colors duration-500",
                    onDark ? "group-hover:text-espresso" : "group-hover:text-cream",
                  )}
                >
                  Rezervēt
                </span>
              </a>

              {/* Mobilā izvēlnes poga */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
                className="-mr-2.5 flex h-11 w-11 items-center justify-center lg:hidden"
              >
                <span className="relative block h-2.5 w-7">
                  <motion.span
                    aria-hidden
                    className={cn(
                      "absolute left-0 h-px w-full transition-colors duration-500",
                      onDark ? "bg-cream" : "bg-espresso",
                    )}
                    initial={false}
                    animate={open ? { top: "50%", rotate: 45 } : { top: "0%", rotate: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                  <motion.span
                    aria-hidden
                    className={cn(
                      "absolute right-0 h-px transition-colors duration-500",
                      onDark ? "bg-cream" : "bg-espresso",
                    )}
                    initial={false}
                    animate={
                      open
                        ? { top: "50%", rotate: -45, width: "100%" }
                        : { top: "100%", rotate: 0, width: "65%" }
                    }
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobilā izvēlne (ārpus transformētā header, lai fixed strādā pareizi) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Izvēlne"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE }}
          >
            <nav aria-label="Mobilā navigācija" className="container-x flex flex-1 flex-col pt-24 pb-10">
              <motion.ul variants={listVariants} initial="hidden" animate="show" exit="hidden">
                {navItems.map((item, i) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <motion.li key={item.href} variants={itemVariants}>
                      <a
                        href={item.href}
                        onClick={(e) => scrollToHash(e, item.href)}
                        aria-current={isActive ? "location" : undefined}
                        className="group flex items-baseline gap-5 border-b border-line py-4"
                      >
                        <span className="w-6 text-[0.65rem] font-medium tracking-luxe text-caramel">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-serif text-[2.25rem] leading-none transition-all duration-500 ease-luxe sm:text-5xl",
                            isActive
                              ? "text-caramel italic"
                              : "text-espresso group-hover:translate-x-2 group-hover:text-caramel",
                          )}
                        >
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.div
                className="mt-auto space-y-6 pt-12"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.65, duration: 0.6, ease: EASE } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <a
                  href="#kontakti"
                  onClick={(e) => scrollToHash(e, "#kontakti")}
                  className="flex w-full items-center justify-center bg-espresso px-6 py-4 text-[0.7rem] font-medium tracking-luxe text-cream uppercase"
                >
                  Rezervēt
                </a>

                <div className="space-y-3 text-sm text-espresso/80">
                  <a href={contact.phoneHref} className="flex items-center gap-3">
                    <Phone className="size-4 text-caramel" strokeWidth={1.5} aria-hidden />
                    {contact.phone}
                  </a>
                  <a href={contact.emailHref} className="flex items-center gap-3">
                    <Mail className="size-4 text-caramel" strokeWidth={1.5} aria-hidden />
                    {contact.email}
                  </a>
                </div>

                <ul className="flex gap-6">
                  {socials.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link inline-flex items-center gap-1"
                      >
                        {s.name}
                        <ArrowUpRight className="size-3" strokeWidth={1.5} aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
