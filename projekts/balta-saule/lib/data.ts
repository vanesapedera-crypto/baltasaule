/* ==========================================================================
   Baltā Saule — viss projekta saturs vienuviet.
   Avots: klienta sniegtā informācija + iepriekšējā vietne (mozellosite)
   ========================================================================== */

/* --- Tipi ----------------------------------------------------------------- */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Social = {
  name: "Facebook" | "Instagram";
  href: string;
  handle: string;
};

export type PricedItem = {
  name: string;
  price: number;
  /** Cenu diapazonam, piem. 22–25 € */
  priceMax?: number;
  unit: "kg" | "porcija" | "persona";
};

export type Room = {
  slug: string;
  name: string;
  description: string;
  guests: number;
  price?: number;
  priceUnit?: string;
  amenities: string[];
  images: ImageAsset[];
};

export type Extra = {
  name: string;
  description: string;
  price: number;
  image: ImageAsset;
};

export type EventType = {
  slug: string;
  title: string;
  description: string;
};

/* --- Vietne --------------------------------------------------------------- */

export const site = {
  name: "Baltā Saule",
  legalName: 'Atpūtas komplekss "Baltā Saule"',
  title: "Baltā Saule — atpūta pie jūras, svinības un Omītes virtuve Ragaciemā",
  tagline: "Atpūta pie jūras • Svinības • Omītes virtuve",
  description:
    "Ģimenes veidots atpūtas komplekss Ragaciemā, 200 m no jūras: mājīgas naktsmītnes, svinību zāle līdz 40 viesiem, pirts, kubls un banketu ēdināšana no Omītes virtuves.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.baltasaule.lv",
  locale: "lv_LV",
  lang: "lv",
  currency: "EUR",
  ogImage: "/images/og.jpg",
} as const;

/* --- Hero ---------------------------------------------------------------- */

export const hero = {
  eyebrow: "Ragaciems · 200 m no jūras",
  srTitle: "Baltā Saule — atpūtas komplekss pie jūras Ragaciemā",
  description:
    "Ģimenes veidots atpūtas komplekss pie jūras — mājīgas naktsmītnes, svinības līdz 40 viesiem un mājās gatavots ēdiens no Omītes virtuves.",
  primaryCta: { label: "Rezervēt atpūtu", href: "#kontakti" },
  secondaryCta: { label: "Omītes virtuve", href: "#edienkarte" },
  highlights: [
    { value: "200 m", label: "līdz jūrai" },
    { value: "40", label: "viesi svinību zālē" },
    { value: "Pirts", label: "un kubls" },
  ],
} as const;

/* --- Par mums ------------------------------------------------------------- */

export const about = {
  eyebrow: "Par mums",
  title: "Ģimenes lolota vieta pie jūras",
  paragraphs: [
    "Baltā Saule ir ģimenes veidots atpūtas komplekss pie jūras, kas piedāvā mājīgas naktsmītnes, svinību telpas, pirti, kublu un banketu ēdināšanu no Omītes virtuves.",
    "Pie mums iespējams svinēt kāzas, jubilejas, kristības, dzimšanas dienas, uzņēmumu pasākumus un citus nozīmīgus dzīves notikumus, vienlaikus baudot nesteidzīgu atpūtu dabas un jūras tuvumā.",
  ],
  statement: "Mūsu lielākā vērtība ir viesmīlība, mājās gatavots ēdiens un ģimeniska atmosfēra.",
  facilities: [
    "Plaša svinību zāle",
    "Ērtas naktsmītnes",
    "Pirts",
    "Kubls",
    "Zaļš pagalms",
    "Omītes virtuve",
  ],
  cta: { label: "Apskatīt naktsmītnes", href: "#naktsmitnes" },
} as const;

/* --- Kontakti ------------------------------------------------------------- */

export const contact = {
  cta: "Sazinieties ar mums, lai rezervētu atpūtu vai svinības.",
  ctaDescription: "Zvaniet vai rakstiet e-pastu, lai rezervētu atpūtu, svinības vai banketu.",
  person: "Juris",
  personRole: "īpašnieks",
  phone: "+371 28 737 787",
  phoneHref: "tel:+37128737787",
  whatsappHref: "https://wa.me/37128737787",
  people: [
    { label: "Atpūta un naktsmītnes", name: "Juris", phone: "+371 28 737 787", phoneHref: "tel:+37128737787" },
    { label: "Omītes virtuve", name: "Alda", phone: "+371 26 082 422", phoneHref: "tel:+37126082422" },
    { label: "Pasākumu organizēšana", name: "Smaidu darbnīca", phone: "+371 26 705 817", phoneHref: "tel:+37126705817" },
  ],
  email: "baltaasaule@gmail.com",
  emailHref: "mailto:baltaasaule@gmail.com",
  address: {
    street: '"Bērziņi"',
    locality: "Ragaciems",
    parish: "Lapmežciema pagasts",
    region: "Tukuma novads",
    postalCode: "LV-3118",
    country: "Latvija",
    countryCode: "LV",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent('"Bērziņi", Ragaciems, Lapmežciema pagasts, Tukuma novads, LV-3118'),
} as const;

/* --- Sociālie tīkli ------------------------------------------------------- */

export const socials: Social[] = [
  { name: "Facebook", href: "https://www.facebook.com/omitesvirtuve", handle: "Omītes virtuve" },
];

/* --- Navigācija ----------------------------------------------------------- */

export const navItems: NavItem[] = [
  { label: "Par mums", href: "#par-mums" },
  { label: "Naktsmītnes", href: "#naktsmitnes" },
  { label: "Omītes virtuve", href: "#edienkarte" },
  { label: "Svinības", href: "#svinibas" },
  { label: "Kontakti", href: "#kontakti" },
];

/* --- Attēli (tikai īstas Baltās Saules fotogrāfijas) ---------------------- */

export const images = {
  logo: { src: "/images/logo.png", alt: "Baltā Saule — atpūtas komplekss", width: 1024, height: 1024 },
  hero: { src: "/images/hero.jpg", alt: "Baltās Saules māja ar ziedošu verandu un viesiem", width: 1440, height: 960 },
  about: { src: "/images/par-mums.jpg", alt: "Baltās Saules saimnieki pie izkārtnes ziedos", width: 1024, height: 1536 },
  accommodation: { src: "/images/naktsmitnes.jpg", alt: "Gaiša koka viesistaba ar dīvānu un pinuma krēsliem", width: 1536, height: 2048 },
  accommodationExterior: { src: "/images/majina.jpg", alt: "Koka namiņš ar verandu zaļumos", width: 1024, height: 683 },
  balcony: { src: "/images/balkons.jpg", alt: "Balkons ar ziedošām petūnijām un skatu uz bērziem", width: 1536, height: 2048 },
  veranda: { src: "/images/veranda.jpg", alt: "Dekorēta veranda ar laternām un šūpuļkrēslu", width: 1024, height: 683 },
  garden: { src: "/images/darzs.jpg", alt: "Zaļais dārzs ar ziediem rotātu velosipēdu", width: 1024, height: 683 },
  sauna: { src: "/images/pirts.jpg", alt: "Pirts priekštelpa ar akmens sienu", width: 1536, height: 2048 },
  hotTub: { src: "/images/kubls.jpg", alt: "Kubls uz koka terases pagalmā", width: 1440, height: 960 },
  hotTubTerrace: { src: "/images/gallery/04.jpg", alt: "Kubls un šūpuļkrēsls pie koka namiņa", width: 1024, height: 683 },
  kitchen: { src: "/images/omites-virtuve.jpg", alt: "Omītes virtuves pīrāgi un uzkodas uz koka galda", width: 1536, height: 2048 },
  table: { src: "/images/svetku-galds.jpg", alt: "Svētku galds ar sarkanu ziedu kompozīciju", width: 750, height: 1000 },
  events: { src: "/images/svinibu-zale.jpg", alt: "Klāta svinību zāle ar koka apdari", width: 1024, height: 683 },
  party: { src: "/images/gallery/02.jpg", alt: "Viesi svin svinību zālē", width: 2048, height: 1365 },
  eventsTable: { src: "/images/zale-galds.jpg", alt: "Garš svētku galds koka zālē ar lustru", width: 1536, height: 2048 },
  contact: { src: "/images/izkartne.jpg", alt: "Baltās Saules izkārtne starp ziediem", width: 1024, height: 683 },
} satisfies Record<string, ImageAsset>;

/* --- Omītes virtuve: ievads ---------------------------------------------- */

export const kitchen = {
  eyebrow: "Omītes virtuve",
  title: "Mājas garša svētku galdam",
  intro:
    "Omītes virtuves saimniece Alda gatavo ēdienus ar mājas garšu — no vietējiem produktiem un pēc tradicionālām receptēm.",
  setsTitle: "Banketa galdi",
  combo: { title: "Aukstais + siltais galds", price: 32, unit: "personai" },
  alacarteEyebrow: "Ēdienkarte",
  alacarteTitle: "Salāti, uzkodas un deserti",
  note: "Sazinieties ar Aldu, lai saskaņotu ēdienkarti savam pasākumam.",
  contact: {
    name: "Alda",
    role: "Omītes virtuves saimniece",
    phone: "+371 26 082 422",
    phoneHref: "tel:+37126082422",
  },
} as const;

export const unitLabels: Record<PricedItem["unit"], string> = {
  kg: "kg",
  porcija: "porcija",
  persona: "personai",
};

/* --- Omītes virtuve: aukstais galds --------------------------------------- */

export const coldTable = {
  title: "Aukstais galds",
  price: 22,
  comboPrice: 32,
  unit: "persona",
  comboNote: "Kopā ar silto galdu",
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
} as const;

/* --- Omītes virtuve: siltais galds ---------------------------------------- */

export const warmTable = {
  title: "Siltais galds",
  price: 16,
  comboPrice: 32,
  unit: "persona",
  comboNote: "Kopā ar auksto galdu",
  sides: ["Vārīti kartupeļi ar dillītēm", "Baltā siera mērcīte", "Sautēti kāposti"],
  choiceCount: 3,
  choicesTitle: "Izvēle no 3 ēdieniem",
  choices: [
    "Cūkgaļas karbonāde",
    "Vistas filejas karbonāde",
    "Cūkgaļas kotlete",
    "Vistas kotlete",
    "Pildīts vistas filejas veltnītis",
    "Pildīta kotlete",
    "Cepts marinēts vistas šķiņķītis",
    "Pildīts cūkgaļas veltnītis",
    "Cepta zivs fileja",
  ],
} as const;

/* --- Omītes virtuve: salāti ----------------------------------------------- */

export const salads: PricedItem[] = [
  { name: "Gaļas salāti", price: 11, unit: "kg" },
  { name: "Rasols", price: 9.5, unit: "kg" },
  { name: "Grauzdiņu salāti", price: 12, unit: "kg" },
  { name: "Cēzara salāti ar vistu", price: 12, unit: "kg" },
  { name: "Siļķe kažokā", price: 10, unit: "kg" },
  { name: "Mēlīšu salāti", price: 13, unit: "kg" },
  { name: "Tunča salāti", price: 12, unit: "kg" },
  { name: "Grieķu salāti", price: 12, unit: "kg" },
  { name: "Siera salāti", price: 11, unit: "kg" },
  { name: "Krabju salāti", price: 11.5, unit: "kg" },
  { name: "Pupiņu salāti", price: 11, unit: "kg" },
  { name: "Vistas barbekjū salāti", price: 12, unit: "kg" },
  { name: "Vistas salāti ar pupiņām", price: 12.5, unit: "kg" },
  { name: "Liellopu gaļas salāti", price: 14, unit: "kg" },
  { name: "Vistas salāti ar ananāsiem", price: 11, unit: "kg" },
  { name: "Šampinjonu salāti", price: 11.5, unit: "kg" },
];

/* --- Omītes virtuve: uzkodas ---------------------------------------------- */

export const appetizers: PricedItem[] = [
  { name: "Pildīts lavašs", price: 22, priceMax: 25, unit: "kg" },
  { name: "Siera plate", price: 22, unit: "kg" },
  { name: "Zivju plate", price: 19, unit: "kg" },
  { name: "Dārzeņu plate ar mērcīti", price: 13, unit: "kg" },
  { name: "Zivs sarkanajā marinādē", price: 19, unit: "kg" },
  { name: "Gaļas plate", price: 19, unit: "kg" },
];

/* --- Omītes virtuve: deserti ---------------------------------------------- */

export const desserts = {
  title: "Deserti",
  price: 3.5,
  unit: "porcija",
  items: [
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
  ],
} as const;

/* --- Naktsmītnes ---------------------------------------------------------- */

export const accommodation = {
  eyebrow: "Naktsmītnes",
  title: "Mājīga atpūta pie jūras",
  intro:
    "Mājīgas naktsmītnes ģimenēm, nelielām kompānijām un pāriem, kas vēlas baudīt jūras tuvumu, mieru un omulīgu vidi — tikai 200 metru attālumā no jūras.",
  roomsNote: "Par brīvajām vietām un cenām sazinieties ar mums — palīdzēsim izvēlēties piemērotāko.",
  extrasTitle: "Papildus atpūtai",
  extras: [
    {
      name: "Pirts",
      description: "Karsta pirts pēc pastaigas gar jūru. Īre pēc iepriekšējas vienošanās.",
      price: 100,
      image: images.sauna,
    },
    {
      name: "Kubls",
      description: "Silts kubls zem klajas debess. Īre pēc iepriekšējas vienošanās.",
      price: 100,
      image: images.hotTubTerrace,
    },
  ] satisfies Extra[],
};

/**
 * Numuri — aizpildīt, kad būs apraksti, fotogrāfijas un cenas.
 * Kamēr saraksts ir tukšs, sadaļa rāda vispārīgo aprakstu un aicinājumu sazināties.
 *
 * Paraugs:
 * {
 *   slug: "divvietigs",
 *   name: "Divvietīgs numurs",
 *   description: "…",
 *   guests: 2,
 *   price: 0,
 *   priceUnit: "nakts",
 *   amenities: ["…"],
 *   images: [{ src: "/images/rooms/divvietigs-1.jpg", alt: "…", width: 1600, height: 1067 }],
 * }
 */
export const rooms: Room[] = [];

/* --- Svinības ------------------------------------------------------------- */

export const events = {
  eyebrow: "Svinības",
  title: "Svētki, kas paliek atmiņā",
  capacityLabel: "viesi svinību zālē",
  partnerEyebrow: "Pilna organizēšana",
  ctaLabel: "Pieteikt svinības",
  intro:
    "Svinību zāle līdz 40 viesiem, mājas ēdiens no Omītes virtuves un naktsmītnes turpat blakus — viss vienuviet, lai jūs varat vienkārši baudīt svētkus.",
  capacity: 40,
  partner: {
    name: "Smaidu darbnīca",
    description: "Piedāvājam pilnu pasākuma organizēšanu sadarbībā ar Smaidu darbnīcu.",
    phone: "+371 26 705 817",
    phoneHref: "tel:+37126705817",
  },
  types: [
    { slug: "kazas", title: "Kāzas", description: "Mīlestības svētki pie jūras ar ģimenisku gaisotni." },
    { slug: "jubilejas", title: "Jubilejas", description: "Nozīmīgi gadi, kas pelnījuši siltu svinēšanu." },
    { slug: "dzimsanas-dienas", title: "Dzimšanas dienas", description: "Svētki mazajiem un lielajiem." },
    { slug: "kristibas", title: "Kristības", description: "Mierīga un sirsnīga vide ģimenes svētkiem." },
    { slug: "uznemumu-pasakumi", title: "Uzņēmumu pasākumi", description: "Kolektīva svētki un atpūta ārpus biroja." },
  ] satisfies EventType[],
};
