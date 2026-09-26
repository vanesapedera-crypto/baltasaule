# Baltā Saule — pilns mājaslapas kods

Next.js 15 · React 19 · Tailwind CSS 4 · Framer Motion · Lucide React

Fotogrāfijas atrodas mapē `public/images/` (tās ir arhīvā balta-saule.zip).

## `package.json`

```json
{
  "name": "balta-saule",
  "version": "1.0.0",
  "private": true,
  "description": "Balt\u0101 Saule \u2014 viesu nams, svin\u012bbu vieta un Om\u012btes virtuve pie j\u016bras",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "framer-motion": "^12.23.0",
    "lucide-react": "^0.540.0",
    "next": "^15.5.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "tailwindcss": "^4.1.0",
    "typescript": "^5.8.0"
  }
}
```

## `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1280, 1600, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
```

## `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## `app/layout.tsx`

```tsx
import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, Inter } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { contact, site } from "@/lib/data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Baltā Saule — viesu nams, svinības un Omītes virtuve pie jūras",
    template: "%s | Baltā Saule",
  },
  description:
    "Baltā Saule — ģimenes viesu nams dažu soļu attālumā no jūras. Mājīgas naktsmītnes, svinību zāle līdz 40 viesiem, pirts, kubls un Omītes virtuves banketi kāzām, jubilejām un kristībām.",
  keywords: [
    "viesu nams pie jūras",
    "svinību zāle",
    "kāzu vieta",
    "jubileju svinēšana",
    "kristības",
    "banketi",
    "aukstais galds",
    "pirts un kubls",
    "Baltā Saule",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "lv_LV",
    url: site.url,
    siteName: site.name,
    title: "Baltā Saule — atpūta pie jūras, svinības un Omītes virtuve",
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Baltā Saule pie jūras" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baltā Saule",
    description: site.description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: metadata.description,
  url: site.url,
  image: `${site.url}/images/hero.jpg`,
  telephone: contact.phone,
  email: contact.email,
  address: { "@type": "PostalAddress", streetAddress: contact.address, addressCountry: "LV" },
  sameAs: [contact.facebook],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Pirts", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kubls", value: true },
    { "@type": "LocationFeatureSpecification", name: "Svinību zāle līdz 40 viesiem", value: true },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
      <body>
        <a
          href="#saturs"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-caramel focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Pāriet uz saturu
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
```

## `app/page.tsx`

```tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Celebrations } from "@/components/sections/Celebrations";
import { Interlude } from "@/components/sections/Interlude";
import { Stays } from "@/components/sections/Stays";
import { Kitchen } from "@/components/sections/Kitchen";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

/**
 * Emocijas vispirms: silts hero → trīs ielūgumi (svinēt, atpūsties, nogaršot)
 * → ģimenes stāsts → svinības → atmosfēras foto → nedēļas nogale → Omītes virtuve
 * → galerija → ielūgums sazināties.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="saturs">
        <Hero />
        <Services />
        <About />
        <Celebrations />
        <Interlude />
        <Stays />
        <Kitchen />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

## `app/globals.css`

```css
@import "tailwindcss";

@theme {
  --color-cream: #faf7f2;
  --color-ivory: #fffdf9;
  --color-card: #ffffff;
  --color-brown: #8b5e3c;
  --color-brown-light: #a8734c;
  --color-brown-deep: #4a3426;
  --color-brown-night: #2e221b;
  --color-sand: #d8be96;
  --color-sand-soft: #efe3d2;
  --color-ink: #3a2f28;
  --color-muted: #74675f;
  --color-line: #e9ded2;
  --color-caramel: #96673f;
  --color-caramel-dark: #7e5434;
  --color-espresso: #2b1f17;
  --color-linen: #f4ece1;
  --color-sandwarm: #eadbc8;
  --color-wood: #3a2819;
  --color-amber: #d9a871;

  --font-serif: var(--font-cormorant), "Cormorant Garamond", Georgia, serif;
  --font-sans: var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif;
  --font-script: var(--font-allura), Allura, cursive;

  --shadow-soft: 0 1px 2px rgb(58 47 40 / 0.04), 0 12px 32px -12px rgb(58 47 40 / 0.14);
  --shadow-lift: 0 2px 4px rgb(58 47 40 / 0.05), 0 28px 60px -20px rgb(58 47 40 / 0.28);

  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
}

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5.5rem;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--color-linen);
    color: var(--color-ink);
    font-family: var(--font-sans);
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-serif);
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.08;
    color: var(--color-espresso);
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  ::selection {
    background: var(--color-sand);
    color: var(--color-ink);
  }

  :focus-visible {
    outline: 2px solid var(--color-brown);
    outline-offset: 3px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer components {
  .container-x {
    width: 100%;
    max-width: 84rem;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }
  @media (min-width: 768px) {
    .container-x {
      padding-inline: 2.5rem;
    }
  }

  /* Vertikālās atstarpes */
  .section-y {
    padding-block: 8rem;
  }
  @media (min-width: 1024px) {
    .section-y {
      padding-block: 11rem;
    }
  }

  /* Ērti lasāms teksta platums */
  .measure {
    max-width: 34rem;
  }

  .display-xl {
    font-size: clamp(3.25rem, 7vw, 6.25rem);
  }
  .display-lg {
    font-size: clamp(2.75rem, 5.4vw, 5rem);
  }

  /* Mazs redakcionāls marķieris, bez dekoratīvām līnijām */
  .eyebrow,
  .label {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  /* Liela, žurnāla stila tipogrāfija */
  .display-2xl {
    font-size: clamp(3.5rem, 10vw, 10rem);
    line-height: 0.92;
    letter-spacing: -0.025em;
    font-weight: 300;
  }
  .statement {
    font-family: var(--font-serif);
    font-weight: 300;
    font-size: clamp(2rem, 4.2vw, 3.9rem);
    line-height: 1.18;
    letter-spacing: -0.012em;
    color: var(--color-espresso);
  }

  /* Punktēta līnija ēdienkartē starp nosaukumu un cenu */
  .dotted-leader {
    flex: 1;
    min-width: 1.5rem;
    border-bottom: 1px dotted var(--color-sand);
    transform: translateY(-0.3em);
  }

  /* Teksta saite ar zemsvītru, kas izaug */
  .text-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding-block: 0.4rem;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-espresso);
    transition: color 0.6s var(--ease-soft);
  }
  .text-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: currentColor;
    transform-origin: left;
    transform: scaleX(0.35);
    transition: transform 0.9s var(--ease-soft);
  }
  .text-link:hover {
    color: var(--color-caramel);
  }
  .text-link:hover::after {
    transform: scaleX(1);
  }
}

@keyframes scrollcue {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
```

## `app/sitemap.ts`

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
```

## `app/robots.ts`

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

## `app/icon.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#8B5E3C"/><circle cx="32" cy="34" r="11" fill="#FFFDF9"/><g stroke="#FFFDF9" stroke-width="3" stroke-linecap="round"><path d="M32 12v5M17 19l3.5 3.5M47 19l-3.5 3.5M11 34h5M48 34h5"/></g><path d="M10 48h44" stroke="#D8BE96" stroke-width="3" stroke-linecap="round"/></svg>
```

## `lib/data.ts`

```ts
/**
 * Visi mājaslapas satura dati vienuviet.
 * ⚠️ Kontaktinformācija (telefons, e-pasts, adrese, Facebook, darba laiks)
 * ir PAGAIDU vērtības — nomainiet tās pret īstajām pirms publicēšanas.
 */

export const site = {
  name: "Baltā Saule",
  url: "https://www.baltasaule.lv", // TODO: īstais domēns
  tagline: "Atpūta pie jūras • Svinības • Omītes virtuve",
  description:
    "Mājīga vieta, kur jūras tuvums, gardi ēdieni un skaisti svētki kļūst par neaizmirstamām atmiņām.",
};

export const contact = {
  phone: "+371 20 000 000", // TODO
  phoneHref: "tel:+37120000000", // TODO
  email: "info@baltasaule.lv", // TODO
  facebook: "https://www.facebook.com/", // TODO: lapas saite
  address: "Baltā Saule, Latvija", // TODO: precīza adrese
  mapsQuery: "Baltā Saule viesu nams", // TODO: adrese vai koordinātes kartei
  hours: [
    { days: "Pirmdiena – Piektdiena", time: "9:00 – 20:00" }, // TODO
    { days: "Sestdiena – Svētdiena", time: "10:00 – 18:00" }, // TODO
  ],
  hoursNote: "Pasākumi — pēc iepriekšējas vienošanās",
};

export const navItems = [
  { label: "Sākums", href: "#sakums" },
  { label: "Par mums", href: "#par-mums" },
  { label: "Naktsmītnes", href: "#naktsmitnes" },
  { label: "Svinības", href: "#svinibas" },
  { label: "Omītes virtuve", href: "#omites-virtuve" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakti", href: "#kontakti" },
] as const;

/** pos — neobligāts CSS object-position attēla kadrējumam, piem. "50% 80%" */
export type Img = { src: string; alt: string; pos?: string };

/**
 * FOTOGRĀFIJAS — katrs foto lapā parādās tikai vienreiz:
 * hero, about, room (Naktsmītnes), hall (Svinības), pies (Omītes virtuve); pārējie — galerijā.
 *
 * FOTOGRĀFIJAS — Baltās Saules īstie foto mapē /public/images.
 * Lai nomainītu attēlu, ievietojiet jaunu failu mapē un mainiet `src` šeit.
 */
export const images = {
  hero: { src: "/images/hero.jpg", alt: "Baltās Saules koka namiņš ar verandu zaļumu ieskautā teritorijā" },
  about: { src: "/images/about.jpg", alt: "Viesi pie ziediem rotātās Baltās Saules ieejas" },
  quote: { src: "/images/celebration-guests.jpg", alt: "Viesi svinībās Baltās Saules zālē" },
  balcony: { src: "/images/balcony.jpg", alt: "Balkons ar puķu podiem un skatu uz zaļumiem" },
  wedding: { src: "/images/wedding.jpg", alt: "Viesi baltās drēbēs svinībās dārzā" },
  pies: { src: "/images/pies.jpg", alt: "Mājās cepti pīrāgi no Omītes virtuves" },
  tubSwing: { src: "/images/tub-swing.jpg", alt: "Kubls un šūpuļkrēsls atpūtas terasē" },
  room: { src: "/images/room.jpg", alt: "Gaiša atpūtas telpa ar koka grīdu un dīvānu" },
  veranda: { src: "/images/veranda.jpg", alt: "Veranda ar ziediem un viesiem", pos: "50% 90%" },
  sauna: { src: "/images/sauna.jpg", alt: "Pirts ieeja ar koka apdari" },
  tub: { src: "/images/tub.jpg", alt: "Kubls pagalmā pie koka mājas" },
  hall: { src: "/images/hall.jpg", alt: "Svinību zāle ar garu, klātu svētku galdu" },
  banquet: { src: "/images/banquet.jpg", alt: "Svinību zāle ar banketa galdiem" },
  table: { src: "/images/table.jpg", alt: "Svētku galds ar ziediem, uzkodām un dzērieniem" },
  flowers: { src: "/images/flowers.jpg", alt: "Baltās Saules zīme starp krāšņiem ziedu podiem" },
} satisfies Record<string, Img>;

export const services = [
  {
    title: "Naktsmītnes",
    text: "Komfortabli numuri ar siltu, dabīgu noskaņu.",
    href: "#naktsmitnes",
  },
  {
    title: "Svinības",
    text: "Kāzas, jubilejas, kristības un uzņēmumu pasākumi.",
    href: "#svinibas",
  },
  {
    title: "Omītes virtuve",
    text: "Banketi, aukstais un siltais galds, salāti, uzkodas, deserti.",
    href: "#omites-virtuve",
  },
  {
    title: "Atpūta",
    text: "Pirts, kubls, teritorija un jūra dažu soļu attālumā.",
    href: "#naktsmitnes",
  },
] as const;

/* ------------------------------ ĒDIENKARTE ------------------------------ */

export const comboPrice = 32;

export const coldTable = {
  title: "Aukstais galds",
  price: 22,
  items: [
    "Gaļas plate",
    "MINI cūkgaļas karbonādes",
    "Vistas filejas ruletīši",
    "Cūkgaļas kotletītes",
    "Vistas fileja sezamā",
    "Fritēti krabīši",
    "Zivs fileja sarkanajā marinādē",
    "Dārzeņu plate ar zaļumu mērcīti",
    "4 veidu salāti pēc izvēles",
  ],
};

export const warmTable = {
  title: "Siltais galds",
  price: 16,
  included: ["Vārīti kartupeļi ar dillītēm", "Baltā siera mērcīte", "Sautēti kāposti"],
  choose: 3,
  mains: [
    "Cūkgaļas karbonāde",
    "Vistas filejas karbonāde",
    "Cūkgaļas kotlete",
    "Vistas kotlete",
    "Pildīts vistas veltnītis",
    "Pildīta kotlete",
    "Cepts vistas šķiņķītis",
    "Pildīts cūkgaļas veltnītis",
    "Cepta zivs fileja",
  ],
};

export const salads: { name: string; price: string }[] = [
  { name: "Gaļas salāti", price: "11" },
  { name: "Rasols", price: "9.50" },
  { name: "Grauzdiņu salāti", price: "12" },
  { name: "Cēzera salāti", price: "12" },
  { name: "Siļķe kažokā", price: "10" },
  { name: "Mēlīšu salāti", price: "13" },
  { name: "Tunča salāti", price: "12" },
  { name: "Grieķu salāti", price: "12" },
  { name: "Siera salāti", price: "11" },
  { name: "Krabju salāti", price: "11.50" },
  { name: "Pupiņu salāti", price: "11" },
  { name: "Vistas BBQ salāti", price: "12" },
  { name: "Vistas salāti ar pupiņām", price: "12.50" },
  { name: "Liellopu gaļas salāti", price: "14" },
  { name: "Vistas salāti ar ananāsiem", price: "11" },
  { name: "Šampinjonu salāti", price: "11.50" },
];

export const appetizers: { name: string; price: string }[] = [
  { name: "Pildīts lavašs", price: "22–25" },
  { name: "Siera plate", price: "22" },
  { name: "Zivju plate", price: "19" },
  { name: "Dārzeņu plate", price: "13" },
  { name: "Zivs sarkanajā marinādē", price: "19" },
  { name: "Gaļas plate", price: "19" },
];

export const dessertPrice = "3.50";

export const desserts = [
  "Zemeņu krēms ar vaniļas mērci",
  "Šokolādes krēms ar ogu mērci",
  "Panna cotta ar zemenēm",
  "Kafijas krēms ar ogu mērci",
  "Auzu pārslu kraukšķis",
  "Abavas sniegs ar ķīseli",
  "Oreo cepumu krēms ar ķīseli",
  "Biezpiena krēms ar ķīseli",
  "Maizes zupa ar putukrējumu",
  "Šokolādes krēms ar vaniļas mērci",
];

/* ------------------------------- GALERIJA ------------------------------- */

export const galleryCategories = [
  "Visi",
  "Naktsmītnes",
  "Svinības",
  "Omītes virtuve",
  "Pirts",
  "Kubuls",
  "Teritorija",
] as const;

export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "Visi">;

/** w/h — attēla izmēri pikseļos (dabiskajām proporcijām masonry galerijā) */
export type GalleryItem = Img & { category: GalleryCategory; w: number; h: number };

const g = (img: Img, category: GalleryCategory, w: number, h: number): GalleryItem => ({ ...img, category, w, h });

export const gallery: GalleryItem[] = [
  g(images.wedding, "Svinības", 960, 1440),
  g(images.tub, "Kubuls", 1440, 960),
  g(images.table, "Svinības", 750, 1000),
  g(images.flowers, "Teritorija", 1024, 683),
  g(images.sauna, "Pirts", 1536, 2048),
  g(images.banquet, "Omītes virtuve", 1024, 683),
  g({ src: "/images/balloons.jpg", alt: "Svētku zāle ar baloniem un gaismas zīmi" }, "Svinības", 750, 1000),
  g({ src: "/images/bike.jpg", alt: "Ar ziediem rotāts velosipēds teritorijā" }, "Teritorija", 1024, 683),
  g(images.quote, "Svinības", 2048, 1365),
  g(images.tubSwing, "Kubuls", 1024, 683),
  g({ src: "/images/lanterns.jpg", alt: "Laternas un šūpuļkrēsls pie verandas loga" }, "Teritorija", 1024, 683),
  g(images.balcony, "Naktsmītnes", 1536, 2048),
  g({ src: "/images/decor.jpg", alt: "Svētku dekori ar lampiņām un sausziediem" }, "Svinības", 1024, 683),
  g(images.veranda, "Teritorija", 1440, 960),
];
```

## `components/Header.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { contact, navItems } from "@/lib/data";
import { Logo } from "./ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#sakums");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aktīvās sadaļas izcelšana navigācijā
  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-soft)] ${
        solid
          ? "border-b border-transparent bg-linen/95 py-3 shadow-[0_10px_30px_-20px_rgba(58,40,25,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-6 [text-shadow:0_1px_16px_rgba(33,23,16,0.35)]"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <a href="#sakums" aria-label="Baltā Saule — uz sākumu" className="relative z-10">
          <Logo tone={solid ? "dark" : "light"} className="transition-colors duration-500" />
        </a>

        <nav aria-label="Galvenā navigācija" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[0.84rem] font-medium tracking-wide transition-colors duration-300 ${
                      solid ? "text-espresso hover:text-caramel" : "text-white/90 hover:text-white"
                    } after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 ${
                      isActive ? "after:scale-x-100" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakti"
            className={`hidden min-h-12 items-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-500 hover:-translate-y-0.5 sm:inline-flex ${
              solid
                ? "bg-caramel text-white hover:bg-caramel-dark"
                : "bg-white text-espresso hover:bg-caramel hover:text-white"
            }`}
          >
            <Phone aria-hidden className="size-4" />
            Sazināties
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
            className={`relative z-10 inline-flex size-12 items-center justify-center rounded-full transition-colors xl:hidden ${
              solid ? "text-ink hover:bg-sand-soft" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 -z-0 h-dvh overflow-y-auto bg-linen px-6 pb-10 pt-28 xl:hidden"
          >
            <nav aria-label="Mobilā navigācija">
              <ul className="flex flex-col divide-y divide-line">
                {navItems.map((item, i) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 font-serif text-3xl text-espresso transition-colors hover:text-caramel"
                    >
                      {item.label}
                      <span aria-hidden className="text-sm text-sand">
                        0{i + 1}
                      </span>
                    </a>
                  </m.li>
                ))}
              </ul>
            </nav>
            <a
              href={contact.phoneHref}
              className="mt-10 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-caramel px-7 py-4 text-sm font-medium text-white"
            >
              <Phone aria-hidden className="size-4" />
              Zvanīt {contact.phone}
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

## `components/Footer.tsx`

```tsx
import { Facebook } from "lucide-react";
import { contact, navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-wood text-sand-soft">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-script text-6xl leading-none text-amber">Baltā Saule</p>
          <p className="mt-6 max-w-sm leading-relaxed text-sand-soft/75">
            Ģimenes viesu nams dažu soļu attālumā no jūras — mājīgas naktsmītnes, svinības līdz 40 viesiem un Omītes
            virtuve ar sirds siltumu.
          </p>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baltā Saule Facebook lapa (atveras jaunā cilnē)"
            className="mt-8 inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-sand transition-colors hover:bg-amber hover:text-wood"
          >
            <Facebook aria-hidden className="size-5" />
          </a>
        </div>

        <nav aria-label="Ātrās saites" className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] !text-amber">Saites</h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sand-soft/80 transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] !text-amber">Kontakti</h2>
          <address className="mt-6 space-y-3 not-italic text-sand-soft/80">
            <a href={contact.phoneHref} className="block transition-colors hover:text-white">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block transition-colors hover:text-white">
              {contact.email}
            </a>
            <p>{contact.address}</p>
          </address>
        </div>
      </div>
      <div className="bg-black/15">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-sm text-sand-soft/60 sm:flex-row">
          <p>© {year} Baltā Saule. Visas tiesības aizsargātas.</p>
          <p className="font-script text-2xl text-amber/80">ar sirsnību pie jūras</p>
        </div>
      </div>
    </footer>
  );
}
```

## `components/ui/Button.tsx`

```tsx
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "light" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-caramel text-white shadow-[0_14px_30px_-14px_rgba(126,84,52,0.8)] hover:bg-caramel-dark hover:shadow-[0_18px_40px_-14px_rgba(126,84,52,0.9)]",
  light: "bg-linen text-wood hover:bg-white",
  ghost: "border border-white/60 text-white hover:bg-white hover:text-wood",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", arrow = false, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-8 text-[0.95rem] font-medium tracking-wide transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-500 group-hover:translate-x-1" />}
    </a>
  );
}
```

## `components/ui/Logo.tsx`

```tsx
type Props = { tone?: "light" | "dark"; className?: string };

export function Logo({ tone = "dark", className = "" }: Props) {
  const color = tone === "light" ? "text-ivory" : "text-espresso";
  return (
    <span className={`inline-flex items-center gap-2 ${color} ${className}`}>
      <svg aria-hidden viewBox="0 0 40 40" className="size-8 shrink-0" fill="none">
        <circle cx="20" cy="22" r="7.5" fill="currentColor" opacity=".9" />
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".75">
          <path d="M20 6v4M8.7 10.7l2.8 2.8M31.3 10.7l-2.8 2.8M4 22h4M32 22h4" />
        </g>
        <path d="M4 32.5c5-2.4 10-2.4 16 0s11 2.4 16 0" stroke="#D8BE96" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="font-script text-[2.1rem] leading-none">Baltā Saule</span>
    </span>
  );
}
```

## `components/ui/MotionProvider.tsx`

```tsx
"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/** Ielādē tikai nepieciešamās Framer Motion funkcijas un ievēro "reduced motion". */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
```

## `components/ui/Reveal.tsx`

```tsx
"use client";

import { m, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "figure";
};

/** Fade-in + slide-up, kad elements parādās skatā. */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      custom={delay}
    >
      {children}
    </Tag>
  );
}
```

## `components/sections/Hero.tsx`

```tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { images, site } from "@/lib/data";
import { Button } from "../ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="sakums"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-wood text-white"
    >
      <m.div style={{ y }} className="absolute inset-0 -z-20 scale-110 will-change-transform">
        <Image src={images.hero.src} alt={images.hero.alt} fill priority fetchPriority="high" sizes="100vw" quality={88} className="object-cover" />
      </m.div>
      {/* Silta vakara saules gaisma: medus tonis + tumšāks pa kreisi tekstam */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(42,27,16,0.78)_0%,rgba(58,40,25,0.45)_45%,rgba(150,103,63,0.15)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(255,196,120,0.35),transparent_55%)] mix-blend-soft-light" />

      <div className="container-x w-full pb-44 pt-36">
        <div className="max-w-2xl">
          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="font-script text-[clamp(2.4rem,4.5vw,3.6rem)] leading-none text-amber"
          >
            Laipni lūdzam
          </m.p>
          <m.h1
            id="hero-title"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.35 }}
            className="mt-3 text-[clamp(4rem,10vw,8.5rem)] font-light leading-[0.95] !text-white"
          >
            Baltajā Saulē
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.6 }}
            className="mt-8 text-[0.82rem] font-medium uppercase tracking-[0.28em] text-sand"
          >
            {site.tagline}
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.72 }}
            className="mt-6 max-w-lg font-serif text-[1.55rem] italic leading-snug text-white/90"
          >
            {site.description}
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.85 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#piedavajums" arrow>
              Apskatīt piedāvājumu
            </Button>
            <Button href="#kontakti" variant="ghost">
              Sazināties
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
}
```

## `components/sections/Services.tsx`

```tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const invitations = [
  {
    word: "Svinēt",
    title: "Kāzas, jubilejas, kristības",
    text: "Svinību zāle līdz 40 viesiem un rūpes par katru svētku detaļu.",
    image: images.wedding,
    href: "#svinibas",
  },
  {
    word: "Atpūsties",
    title: "Nedēļas nogale pie jūras",
    text: "Mājīgi numuri, pirts, kubls un priežu smarža dažu soļu no krasta.",
    image: images.tubSwing,
    href: "#naktsmitnes",
  },
  {
    word: "Nogaršot",
    title: "Omītes virtuve",
    text: "Banketi un mājas ēdieni, kas gatavoti ar sirds siltumu.",
    image: images.pies,
    href: "#omites-virtuve",
  },
];

/** Trīs ielūgumi — emocionāli ieejas punkti, kas pārklājas ar hero. */
export function Services() {
  return (
    <section id="piedavajums" aria-label="Ko piedāvājam" className="relative z-10 bg-linen pb-24 lg:pb-32">
      <div className="container-x">
        <ul className="-mt-28 grid gap-6 md:grid-cols-3 lg:-mt-36 lg:gap-8">
          {invitations.map((it, i) => (
            <Reveal as="li" key={it.word} delay={i * 0.12} className={i === 1 ? "md:mt-10" : ""}>
              <a
                href={it.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-wood shadow-[0_30px_60px_-28px_rgba(58,40,25,0.65)] transition-transform duration-700 ease-[var(--ease-soft)] hover:-translate-y-2"
              >
                <Image
                  src={it.image.src}
                  alt={it.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-soft)] group-hover:scale-[1.07]"
                />
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,27,16,0)_35%,rgba(42,27,16,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                  <p className="font-script text-[3.6rem] leading-none text-amber">{it.word}</p>
                  <h2 className="mt-2 text-[1.7rem] font-normal leading-tight !text-white">{it.title}</h2>
                  <p className="mt-3 max-w-xs leading-relaxed text-white/80">{it.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sand">
                    Uzzināt vairāk
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

## `components/sections/About.tsx`

```tsx
import Image from "next/image";
import { images, type Img } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

/** Fotogrāfija kā izdrukāta bilde — ar gaišu apmali un vieglu slīpumu. */
function Print({ img, className, sizes, rotate }: { img: Img; className: string; sizes: string; rotate: string }) {
  return (
    <div
      className={`group absolute bg-[#fffaf2] p-2.5 shadow-[0_24px_50px_-22px_rgba(58,40,25,0.55)] transition-transform duration-700 ease-[var(--ease-soft)] hover:rotate-0 hover:scale-[1.02] sm:p-3 ${rotate} ${className}`}
    >
      <div className="relative size-full overflow-hidden">
        <Image src={img.src} alt={img.alt} fill sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="par-mums" aria-labelledby="about-title" className="overflow-hidden bg-linen pb-28 pt-8 lg:pb-40">
      <div className="container-x grid items-center gap-20 lg:grid-cols-12 lg:gap-16">
        {/* Foto kolāža */}
        <Reveal className="relative mx-auto h-[34rem] w-full max-w-xl sm:h-[40rem] lg:col-span-6 lg:h-[44rem]">
          <Print img={images.about} rotate="-rotate-2" className="left-[6%] top-0 h-[78%] w-[62%]" sizes="(min-width: 1024px) 28vw, 60vw" />
          <Print img={images.flowers} rotate="rotate-3" className="right-0 top-[12%] h-[34%] w-[46%]" sizes="(min-width: 1024px) 20vw, 45vw" />
          <Print img={images.veranda} rotate="-rotate-1" className="bottom-0 right-[6%] h-[38%] w-[52%]" sizes="(min-width: 1024px) 22vw, 50vw" />
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-6 lg:pl-8">
          <p className="font-script text-5xl leading-none text-caramel">Mūsu stāsts</p>
          <h2 id="about-title" className="mt-4 text-[clamp(2.6rem,4.6vw,4.2rem)] font-light leading-[1.05]">
            Ģimenes radīta vieta, kur jūtaties kā mājās
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85">
            <p>
              Tikai dažu soļu attālumā no jūras atrodas Baltā Saule – ģimenes radīta atpūtas vieta, kur valda miers,
              viesmīlība un patiesa māju sajūta. Šeit ikviens var baudīt nesteidzīgu atpūtu vai svinēt dzīves
              nozīmīgākos notikumus kopā ar saviem tuvākajiem.
            </p>
            <p>
              Piedāvājam mājīgas naktsmītnes, plašu svinību zāli līdz 40 viesiem, pirti, kublu un labiekārtotu
              teritoriju, kur priežu mežs satiekas ar jūras tuvumu.
            </p>
            <p>
              Īpašu vietu mūsu stāstā ieņem Omītes virtuve, kuras saimniece Alda jau daudzus gadus gatavo ēdienus ar
              sirds siltumu un rūpību. Svētku organizēšanā palīdz Smaidu darbnīca, bet par dekorācijām rūpējas mūsu otra
              meita.
            </p>
          </div>
          <p className="mt-10 font-script text-4xl text-espresso">Ar sirsnību, Baltās Saules ģimene</p>
        </Reveal>
      </div>
    </section>
  );
}
```

## `components/sections/Celebrations.tsx`

```tsx
import Image from "next/image";
import { images, type Img } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const events = ["Kāzas", "Jubilejas", "Kristības", "Dzimšanas dienas", "Uzņēmumu pasākumi"];

const care = [
  { title: "Svinību zāle", text: "Silta koka zāle līdz 40 viesiem, klāta tieši jūsu svētkiem." },
  { title: "Omītes virtuve", text: "Banketi, aukstais un siltais galds, deserti — viss uz vietas." },
  { title: "Smaidu darbnīca", text: "Scenārijs, vadīšana un bērnu aktivitātes — bez raizēm." },
  { title: "Svētku dekori", text: "Ziedi, gaismas un noformējums, ko rada mūsu meita." },
];

function Tile({ img, className, sizes }: { img: Img; className: string; sizes: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[1rem] ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-soft)] group-hover:scale-[1.06]"
      />
    </div>
  );
}

export function Celebrations() {
  return (
    <section id="svinibas" aria-labelledby="celebrations-title" className="relative overflow-hidden bg-wood py-28 text-white lg:py-36">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(217,168,113,0.18),transparent_65%)]" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-script text-5xl leading-none text-amber">Jūsu lielā diena</p>
          <h2 id="celebrations-title" className="mt-4 text-[clamp(2.8rem,5vw,4.6rem)] font-light leading-[1.02] !text-white">
            Svinības, kuras atcerēsieties vienmēr
          </h2>
          <p className="mt-7 text-[1.08rem] leading-[1.85] text-white/75">
            Garš, klāts galds koka zālē, smiekli, dejas un vakars, kas beidzas pie jūras. Jūs baudāt brīdi — par pārējo
            parūpēsimies mēs.
          </p>
          <p className="mt-6 font-serif text-xl italic text-sand">{events.join(" · ")}</p>
          <div className="mt-10">
            <Button href="#kontakti" arrow>
              Plānot svinības
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="grid h-[34rem] grid-cols-6 grid-rows-6 gap-3 sm:h-[40rem] sm:gap-4">
            <Tile img={images.hall} className="col-span-3 row-span-6" sizes="(min-width: 1024px) 30vw, 50vw" />
            <Tile img={images.table} className="col-span-3 row-span-3" sizes="(min-width: 1024px) 28vw, 50vw" />
            <Tile img={{ src: "/images/decor.jpg", alt: "Svētku dekori ar lampiņām un sausziediem" }} className="col-span-3 row-span-3" sizes="(min-width: 1024px) 28vw, 50vw" />
          </div>
        </Reveal>
      </div>

      <div className="container-x relative mt-20 lg:mt-28">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {care.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-[1rem] bg-white/[0.06] p-7 transition-colors duration-500 hover:bg-white/[0.1]">
                <p className="font-serif text-lg italic text-amber">0{i + 1}</p>
                <h3 className="mt-2 text-[1.6rem] !text-white">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

## `components/sections/Interlude.tsx`

```tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { images } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

/** Atmosfērisks foto ar ģimenes vēstījumu — cilvēki, gaisma, kopā būšana. */
export function Interlude() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} aria-label="Mūsu vērtības" className="relative isolate flex min-h-[75svh] items-center overflow-hidden bg-wood">
      <m.div style={{ y }} className="absolute inset-0 -z-20 scale-[1.2]">
        <Image src={images.quote.src} alt={images.quote.alt} fill sizes="100vw" className="object-cover" />
      </m.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(42,27,16,0.55),rgba(42,27,16,0.7))]" />
      <div className="container-x py-28 text-center">
        <Reveal className="mx-auto max-w-4xl">
          <blockquote>
            <p className="font-serif text-[clamp(2rem,4.2vw,3.7rem)] font-light italic leading-[1.2] text-white">
              “Mēs ticam, ka visskaistākās atmiņas rodas vietās, kur valda sirsnība, viesmīlība un patiesa rūpe par
              katru viesi.”
            </p>
            <footer className="mt-8 font-script text-4xl text-amber">Baltās Saules ģimene</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
```

## `components/sections/Stays.tsx`

```tsx
import Image from "next/image";
import { images, type Img } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const moments: { img: Img; time: string; caption: string }[] = [
  { img: images.balcony, time: "Rīts", caption: "Kafija uz balkona starp ziediem" },
  { img: images.room, time: "Diena", caption: "Mājīga istaba ar koka siltumu" },
  { img: images.sauna, time: "Vakars", caption: "Pirts pēc dienas pie jūras" },
  { img: images.tub, time: "Nakts", caption: "Kubls zem zvaigznēm" },
];

/** Nedēļas nogale kā stāsts no rīta līdz naktij. */
export function Stays() {
  return (
    <section id="naktsmitnes" aria-labelledby="stays-title" className="bg-sandwarm py-28 lg:py-36">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-script text-5xl leading-none text-caramel">Nedēļas nogale pie jūras</p>
            <h2 id="stays-title" className="mt-4 text-[clamp(2.6rem,4.8vw,4.4rem)] font-light leading-[1.05]">
              Palieciet ilgāk. Elpojiet dziļāk.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[1.05rem] leading-[1.85] text-ink/80">
              Komfortabli numuri ar siltu, dabīgu noskaņu. Priežu smarža, jūra dažu soļu attālumā, pirts un kubls — lai
              pēc svētkiem vai garas nedēļas varētu atpūsties kā mājās.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {moments.map((mo, i) => (
            <Reveal as="li" key={mo.time} delay={i * 0.1} className={i % 2 === 1 ? "lg:mt-14" : ""}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] shadow-[0_22px_44px_-26px_rgba(58,40,25,0.6)]">
                  <Image
                    src={mo.img.src}
                    alt={mo.img.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    style={{ objectPosition: mo.img.pos }}
                    className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-soft)] group-hover:scale-[1.07]"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="font-script text-3xl leading-none text-caramel">{mo.time}</span>
                  <span className="mt-1 block text-[0.98rem] text-ink/80">{mo.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex justify-center">
          <Button href="#kontakti" arrow>
            Rezervēt naktsmītni
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
```

## `components/sections/Kitchen.tsx`

```tsx
import Image from "next/image";
import { appetizers, coldTable, comboPrice, dessertPrice, desserts, images, salads, warmTable } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

/** Latviešu formāts: 9.50 → 9,50 */
const eur = (v: string | number) => `${String(v).replace(".", ",")} €`;

function Heading({ id, title, price, unit }: { id: string; title: string; price?: string | number; unit?: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-sand/60 pb-3">
      <h3 id={id} className="text-[2rem] font-normal">
        {title}
      </h3>
      {price !== undefined && (
        <p className="font-serif text-xl italic text-caramel">
          {eur(price)} / {unit}
        </p>
      )}
    </div>
  );
}

function Dish({ name, price }: { name: string; price?: string }) {
  return (
    <li className="flex items-baseline gap-3 py-1.5">
      <span className="text-[1.02rem] text-ink">{name}</span>
      {price && (
        <>
          <span aria-hidden className="dotted-leader" />
          <span className="shrink-0 font-serif text-lg text-espresso">{eur(price)}</span>
        </>
      )}
    </li>
  );
}

export function Kitchen() {
  return (
    <section id="omites-virtuve" aria-labelledby="kitchen-title" className="overflow-hidden bg-linen py-28 lg:py-36">
      <div className="container-x">
        {/* Ievads ar divām pārklājošām fotogrāfijām */}
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="relative h-[30rem] sm:h-[36rem] lg:col-span-6">
            <div className="group absolute left-0 top-0 h-[85%] w-[70%] overflow-hidden rounded-[1.25rem] shadow-[0_30px_60px_-28px_rgba(58,40,25,0.6)]">
              <Image src={images.pies.src} alt={images.pies.alt} fill sizes="(min-width: 1024px) 34vw, 70vw" className="object-cover transition-transform duration-[1.6s] group-hover:scale-[1.06]" />
            </div>
            <div className="group absolute bottom-0 right-0 h-[48%] w-[52%] overflow-hidden rounded-[1.25rem] border-[6px] border-linen shadow-[0_30px_60px_-28px_rgba(58,40,25,0.6)]">
              <Image src={images.banquet.src} alt={images.banquet.alt} fill sizes="(min-width: 1024px) 26vw, 52vw" className="object-cover transition-transform duration-[1.6s] group-hover:scale-[1.06]" />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-6 lg:pl-8">
            <p className="font-script text-5xl leading-none text-caramel">No Omītes virtuves</p>
            <h2 id="kitchen-title" className="mt-4 text-[clamp(2.6rem,4.8vw,4.4rem)] font-light leading-[1.05]">
              Ēdiens, kas garšo pēc mājām
            </h2>
            <p className="mt-7 text-[1.05rem] leading-[1.85] text-ink/85">
              Saimniece Alda jau daudzus gadus gatavo ēdienus ar sirds siltumu un rūpību. Katrs ēdiens top no
              kvalitatīviem produktiem, izmantojot pārbaudītas receptes un mājas virtuves tradīcijas — lai jūsu svētku
              galds būtu bagātīgs un viesi paēduši.
            </p>
            <p className="mt-8 font-script text-4xl text-espresso">— Alda</p>
          </Reveal>
        </div>

        {/* Ēdienkarte kā īsta papīra ēdienkarte uz galda */}
        <Reveal className="mt-24 lg:mt-32">
          <div className="relative mx-auto max-w-6xl rounded-[1.5rem] bg-[#fffaf2] px-6 py-14 shadow-[0_40px_80px_-40px_rgba(58,40,25,0.45)] sm:px-12 lg:px-20 lg:py-20">
            <div className="text-center">
              <p className="font-script text-6xl leading-none text-caramel">Ēdienkarte</p>
              <p className="mt-4 font-serif text-xl italic text-ink/70">
                Aukstais un siltais galds kopā — <span className="not-italic text-caramel">{comboPrice} € / persona</span>
              </p>
            </div>

            <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="space-y-14">
                <article id="aukstais-galds" aria-labelledby="cold-title" className="scroll-mt-28">
                  <Heading id="cold-title" title={coldTable.title} price={coldTable.price} unit="persona" />
                  <ul className="mt-4">
                    {coldTable.items.map((d) => (
                      <Dish key={d} name={d} />
                    ))}
                  </ul>
                </article>

                <article id="siltais-galds" aria-labelledby="warm-title" className="scroll-mt-28">
                  <Heading id="warm-title" title={warmTable.title} price={warmTable.price} unit="persona" />
                  <p className="mt-4 font-serif text-lg italic text-ink/75">{warmTable.included.join(", ")}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-caramel">Izvēle no trim ēdieniem</p>
                  <ul className="mt-2">
                    {warmTable.mains.map((d) => (
                      <Dish key={d} name={d} />
                    ))}
                  </ul>
                </article>
              </div>

              <div className="space-y-14">
                <article id="salati" aria-labelledby="salads-title" className="scroll-mt-28">
                  <Heading id="salads-title" title="Salāti" />
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">Cena par kilogramu</p>
                  <ul className="mt-3">
                    {salads.map((s) => (
                      <Dish key={s.name} name={s.name} price={s.price} />
                    ))}
                  </ul>
                </article>

                <article id="uzkodas" aria-labelledby="app-title" className="scroll-mt-28">
                  <Heading id="app-title" title="Uzkodas" />
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">Cena par kilogramu</p>
                  <ul className="mt-3">
                    {appetizers.map((a) => (
                      <Dish key={a.name} name={a.name} price={a.price} />
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <article id="deserti" aria-labelledby="dessert-title" className="mt-14 scroll-mt-28">
              <Heading id="dessert-title" title="Deserti" price={dessertPrice} unit="porcija" />
              <ul className="mt-4 grid gap-x-20 sm:grid-cols-2">
                {desserts.map((d) => (
                  <Dish key={d} name={d} />
                ))}
              </ul>
            </article>

            <div className="mt-14 flex justify-center">
              <Button href="#kontakti" arrow>
                Pasūtīt svētku galdu
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

## `components/sections/Gallery.tsx`

```tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, galleryCategories } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

type Filter = (typeof galleryCategories)[number];


export function Gallery() {
  const [filter, setFilter] = useState<Filter>("Visi");
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => (filter === "Visi" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const open = (i: number, el: HTMLElement) => {
    lastTrigger.current = el;
    setIndex(i);
  };
  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index !== null ? items[index] : null;

  return (
    <section id="galerija" aria-labelledby="gallery-title" className="bg-sandwarm py-28 lg:py-36">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="font-script text-5xl leading-none text-caramel">Mirkļi no Baltās Saules</p>
          <h2 id="gallery-title" className="mt-4 text-[clamp(2.6rem,4.8vw,4.4rem)] font-light leading-[1.05]">
            Galerija
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div role="group" aria-label="Filtrēt galeriju pēc kategorijas" className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((c) => {
              const isActive = c === filter;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(c)}
                  className={`min-h-11 rounded-full px-5 text-sm font-medium transition-all duration-500 ${
                    isActive ? "bg-caramel text-white shadow-[0_10px_24px_-12px_rgba(126,84,52,0.9)]" : "bg-linen text-ink hover:bg-white"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="container-x mt-14">
        <ul className="columns-2 gap-3 sm:gap-4 lg:columns-3 [&>li]:mb-3 sm:[&>li]:mb-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <m.li
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={(e) => open(i, e.currentTarget)}
                  aria-label={`Atvērt attēlu: ${item.alt}`}
                  className="group relative block w-full overflow-hidden rounded-[1rem] bg-sand-soft"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="h-auto w-full transition-transform duration-[1.8s] ease-[var(--ease-soft)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/60 via-espresso/0 to-transparent p-5 text-left opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-7">
                    <span>
                      <span className="block text-[0.68rem] uppercase tracking-[0.26em] text-white/80">{item.category}</span>
                      <span className="mt-1.5 block font-serif text-xl leading-snug text-white sm:text-2xl">{item.alt}</span>
                    </span>
                  </span>
                </button>
              </m.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && index !== null && (
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Attēls ${index + 1} no ${items.length}: ${current.alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-wood/95 p-4 backdrop-blur-md sm:p-10"
            onClick={close}
          >
            <m.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[78vh] w-full">
                <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" priority />
              </div>
              <figcaption className="mt-5 text-center text-sand-soft">
                <span className="text-xs uppercase tracking-[0.2em] text-sand">{current.category}</span>
                <span className="mx-3 text-sand/50">•</span>
                <span className="font-serif text-xl">{current.alt}</span>
                <span className="ml-3 text-sm text-sand-soft/60">
                  {index + 1} / {items.length}
                </span>
              </figcaption>
            </m.figure>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Aizvērt"
              className="absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ink sm:right-8 sm:top-8"
            >
              <X className="size-6" aria-hidden />
            </button>
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Iepriekšējais attēls"
                  className="absolute left-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ink sm:left-8"
                >
                  <ChevronLeft className="size-6" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Nākamais attēls"
                  className="absolute right-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ink sm:right-8"
                >
                  <ChevronRight className="size-6" aria-hidden />
                </button>
              </>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
```

## `components/sections/Contact.tsx`

```tsx
import Image from "next/image";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { contact, images } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`;
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`;

export function Contact() {
  return (
    <section id="kontakti" aria-labelledby="contact-title">
      {/* Ielūgums uz silta foto fona ar kontaktu kartiņu */}
      <div className="relative isolate overflow-hidden bg-wood py-28 lg:py-36">
        <Image src={images.flowers.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(42,27,16,0.85)_0%,rgba(42,27,16,0.6)_50%,rgba(42,27,16,0.35)_100%)]" />

        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="text-white lg:col-span-6">
            <p className="font-script text-5xl leading-none text-amber">Ienāciet ciemos</p>
            <h2 id="contact-title" className="mt-4 text-[clamp(2.8rem,5vw,4.6rem)] font-light leading-[1.02] !text-white">
              Sāksim plānot jūsu atpūtu vai svētkus
            </h2>
            <p className="mt-7 max-w-lg text-[1.08rem] leading-[1.85] text-white/80">
              Pastāstiet, ko sapņojat — nedēļas nogali divatā, ģimenes svētkus vai kāzas. Mēs atbildēsim, parādīsim
              visu uz vietas un palīdzēsim saplānot katru detaļu.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-[1.5rem] bg-[#fffaf2] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] sm:p-10">
              <ul className="space-y-6">
                <li>
                  <a href={contact.phoneHref} className="group flex items-center gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sandwarm text-caramel transition-colors group-hover:bg-caramel group-hover:text-white">
                      <Phone aria-hidden className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted">Zvaniet</span>
                      <span className="block font-serif text-2xl text-espresso">{contact.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sandwarm text-caramel transition-colors group-hover:bg-caramel group-hover:text-white">
                      <Mail aria-hidden className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted">Rakstiet</span>
                      <span className="block font-serif text-2xl text-espresso">{contact.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sandwarm text-caramel transition-colors group-hover:bg-caramel group-hover:text-white">
                      <MapPin aria-hidden className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted">Atbrauciet</span>
                      <span className="block font-serif text-2xl text-espresso">{contact.address}</span>
                    </span>
                    <span className="sr-only">(atveras Google Maps jaunā cilnē)</span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sandwarm text-caramel">
                    <Clock aria-hidden className="size-5" />
                  </span>
                  <span className="text-ink/85">
                    {contact.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: <span className="text-espresso">{h.time}</span>
                      </span>
                    ))}
                    <span className="mt-1 block text-sm text-muted">{contact.hoursNote}</span>
                  </span>
                </li>
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={contact.phoneHref} className="flex-1">
                  Zvanīt tagad
                </Button>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-full bg-sandwarm px-6 text-[0.95rem] font-medium text-wood transition-colors hover:bg-sand"
                >
                  <Facebook aria-hidden className="size-4" />
                  Facebook
                  <span className="sr-only">(atveras jaunā cilnē)</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Karte */}
      <div className="relative h-[24rem] bg-sandwarm lg:h-[28rem]">
        <iframe
          title="Baltā Saule Google kartē"
          src={mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0 sepia-[.35] saturate-[.85]"
        />
      </div>
    </section>
  );
}
```

## `.gitignore`

```text
node_modules
.next
out
next-env.d.ts
*.tsbuildinfo
.env*.local
.DS_Store
```

