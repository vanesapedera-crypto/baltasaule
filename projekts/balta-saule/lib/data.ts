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
  /** Lapas ceļš ("/naktsmitnes") vai enkurs uz kājeni ("#kontakti") */
  href: `/${string}` | `#${string}`;
};

export type PageInfo = {
  href: `/${string}`;
  /** Nosaukums izvēlnē un lapas <title> */
  label: string;
  /** Meta apraksts meklētājiem */
  description: string;
  eyebrow: string;
  /** Īss teksts sākumlapas kartītē */
  teaser: string;
  /** Lielā fotogrāfija lapas augšā */
  heroImage: ImageAsset;
  /** Fotogrāfija sākumlapas kartītē */
  cardImage: ImageAsset;
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
  /** Mazāka bilde, kas novietota pāri galvenajai (kā sadaļā Par mums) */
  inset?: ImageAsset;
};

export type Story = {
  title: string;
  paragraphs: readonly string[];
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
  /** Mājaslapas izstrādātājs — rādās ļoti nemanāmi Footer apakšā. */
  credit: {
    label: "Mājaslapu izveidoja",
    name: "Vanesa",
    phone: "+371 28 193 386",
    phoneHref: "tel:+37128193386",
  },
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
    { label: "Izklaides programmas", name: "Smaidu darbnīca", phone: "+371 26 705 817", phoneHref: "tel:+37126705817" },
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
  { label: "Sākums", href: "#top" },
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
  hotTub: { src: "/images/kubls.jpg", alt: "Viesi baltos tērpos svinībās zaļajā pagalmā", width: 960, height: 1440 },
  hotTubSwing: { src: "/images/kubls-terase.jpg", alt: "Kubls uz koka terases ar šūpuļkrēslu", width: 1024, height: 683 },
  hall: { src: "/images/zale-plasa.jpg", alt: "Plaša svinību zāle ar klātiem galdiem", width: 1024, height: 683 },
  signFlowers: { src: "/images/izkartne-ziedi.jpg", alt: "Baltās Saules izkārtne ziedošu petūniju ielokā", width: 1024, height: 683 },
  decor: { src: "/images/interjers-dekors.jpg", alt: "Interjera detaļas ar vecu šujmašīnu un gaismiņām", width: 1024, height: 683 },
  host: { src: "/images/pasakums-viesmilis.jpg", alt: "Tērpts viesmīlis lej dzērienus svinībās", width: 746, height: 1120 },
  singer: { src: "/images/svinibas-dziedatajs.jpg", alt: "Dziedātājs uzstājas svinību zālē starp gaismiņām", width: 2000, height: 1333 },
  dancing: { src: "/images/svinibas-dejas.jpg", alt: "Viesi dejo un smejas svinībās", width: 960, height: 640 },
  kitchenBanquet: { src: "/images/omite-banketa-galds.jpg", alt: "Klāts banketa galds ar baltiem ziediem un uzkodu platēm", width: 1500, height: 2000 },
  kitchenSetting: { src: "/images/omite-galda-klajums.jpg", alt: "Svētku galds ar bordo salvetēm un kļavu lapām", width: 750, height: 1000 },
  kitchenPastries: { src: "/images/omite-maizites.jpg", alt: "Pīrādziņi un kanēļmaizītes uz koka galda", width: 1500, height: 2000 },
  kitchenFlowers: { src: "/images/omite-galds-ziedi.jpg", alt: "Galds ar zaļganām glāzēm un ģipsenes ziediem", width: 2000, height: 1333 },
  kitchenFire: { src: "/images/omite-zupa-uguns.jpg", alt: "Zupa katlā virs ugunskura dārzā", width: 1500, height: 2000 },
  saunaMain: { src: "/images/pirts-galvena.jpg", alt: "Pirts priekštelpa ar mozaīkas sienu un ieeju pirtī", width: 1080, height: 1440 },
  saunaInside: { src: "/images/pirts-iekspuse.jpg", alt: "Pirts iekšpuse ar lāvām, ozolu slotām un koka spainīti", width: 1500, height: 2000 },
  roomBedroom: { src: "/images/nakts-gulamistaba.jpg", alt: "Guļamistaba ar divguļamo gultu un spoguļgaldiņu", width: 1500, height: 2000 },
  roomLiving: { src: "/images/nakts-dzivojama.jpg", alt: "Gaiša dzīvojamā istaba ar dīvānu un atpūtas krēsliem", width: 1500, height: 2000 },
  roomEvening: { src: "/images/nakts-vakars.jpg", alt: "Koka viesistaba vakarā ar ādas stūra dīvānu un gaismiņām", width: 1500, height: 2000 },
  roomBathroom: { src: "/images/nakts-vannasistaba.jpg", alt: "Vannasistaba ar krāsainu stikla bloku sienu", width: 1500, height: 2000 },
  eventsCourtyard: { src: "/images/svinibas-pagalms.jpg", alt: "Viesi svinībās pagalmā pie Baltās Saules mājas", width: 1024, height: 683 },
  eventsTerrace: { src: "/images/svinibas-terase.jpg", alt: "Koka galds ar soliem nojumē pie akmens sienas", width: 1080, height: 1440 },
  eventsBar: { src: "/images/svinibas-bars.jpg", alt: "Viese filmē svinības pie bāra ar Baltās Saules neona zīmi", width: 2000, height: 1333 },
  eventsBouncy: { src: "/images/svinibas-atrakcija.jpg", alt: "Piepūšamā atrakcija bērniem zaļajā pagalmā", width: 1024, height: 683 },
  kitchenCandles: { src: "/images/omite-galds-sveces.jpg", alt: "Svētku galds ar svecēm un hortenzijām koka zālē", width: 1500, height: 2000 },
  kitchenHallTable: { src: "/images/omite-galds-zale.jpg", alt: "Garš koka galds ar uzkodu platēm zālē pie bāra", width: 1080, height: 1440 },
  kitchenEvening: { src: "/images/omite-galds-vakara.jpg", alt: "Vakara svētku galds ar baltiem ziediem un zaļganām glāzēm", width: 1080, height: 1920 },
  eventsSongTable: { src: "/images/svinibas-dziesma-galds.jpg", alt: "Dziedātājs uzrunā viesus pie svētku galda", width: 2000, height: 1333 },
  kitchenCaesar: { src: "/images/omite-cezara-salati.jpg", alt: "Cēzara salāti uz svētku galda ar baltiem ziediem", width: 1500, height: 2000 },
  kitchenStarters: { src: "/images/omite-galds-uzkodas.jpg", alt: "Garš galds ar salātiem, uzkodām un zaļganām glāzēm", width: 2000, height: 1333 },
  kitchenFlowerVase: { src: "/images/omite-ziedi-galda.jpg", alt: "Balti ziedi un ģipsene vāzē uz svētku galda", width: 1080, height: 1920 },
  guestsYard: { src: "/images/viesi-pagalma.jpg", alt: "Viesi pagalmā pie vintage piekabes", width: 1333, height: 2000 },
  hotTubTerrace: { src: "/images/gallery/04.jpg", alt: "Kubls un šūpuļkrēsls pie koka namiņa", width: 1024, height: 683 },
  kitchen: { src: "/images/omites-virtuve.jpg", alt: "Omītes virtuves pīrāgi un uzkodas uz koka galda", width: 1536, height: 2048 },
  banquet: { src: "/images/banketa-galds.jpg", alt: "Klāts banketa galds ar salātiem un gaļas platēm", width: 1024, height: 1536 },
  meatPlatter: { src: "/images/galas-plate.jpg", alt: "Gaļas uzkodu plate ar kotletītēm un vistas fileju sezamā", width: 1800, height: 1200 },
  beanSalad: { src: "/images/salati-pupinas.jpg", alt: "Salāti ar pupiņām baltā bļodā", width: 1800, height: 1200 },
  greenSalad: { src: "/images/salati-zalie.jpg", alt: "Zaļie salāti ar sieru un diļļu siera bumbiņām", width: 1800, height: 1200 },
  fruit: { src: "/images/auglu-grozs.jpg", alt: "Augļu grozs ar vīnogām, aprikozēm un zemenēm", width: 1333, height: 2000 },
  fishMarinade: { src: "/images/zivs-marinade.jpg", alt: "Zivs fileja sarkanajā marinādē ar citronu un pētersīli", width: 2000, height: 1333 },
  table: { src: "/images/svetku-galds.jpg", alt: "Svētku galds ar sarkanu ziedu kompozīciju", width: 750, height: 1000 },
  events: { src: "/images/svinibu-zale.jpg", alt: "Klāta svinību zāle ar koka apdari", width: 1024, height: 683 },
  party: { src: "/images/gallery/02.jpg", alt: "Viesi svin svinību zālē", width: 2048, height: 1365 },
  eventsTable: { src: "/images/zale-galds.jpg", alt: "Garš svētku galds koka zālē ar lustru", width: 1536, height: 2048 },
  contact: { src: "/images/izkartne.jpg", alt: "Baltās Saules izkārtne starp ziediem", width: 1024, height: 683 },
} satisfies Record<string, ImageAsset>;

/* --- Omītes virtuve: ievads ---------------------------------------------- */

export const kitchen = {
  eyebrow: "Omītes virtuve",
  title: "Mājas garša",
  titleAccent: "svētku galdam",
  intro: [
    "Omītes virtuves saimniece Alda gatavo ēdienus ar mājas garšu — no svaigiem produktiem, pēc tradicionālām receptēm un ar lielu mīlestību.",
    "Banketa galdus Alda sastāda kopā ar jums, lai tie atbilstu jūsu svētkiem un viesu gaumei — var izvēlēties aukstā un siltā galda komplektus vai salikt savu ēdienkarti no salātiem, uzkodām un desertiem.",
  ],
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
  title: "Mājīga atpūta",
  titleAccent: "pie jūras",
  intro: [
    "Baltajā Saulē var ne tikai svinēt, bet arī palikt pa nakti. Mājīgas naktsmītnes ir piemērotas pāriem, ģimenēm un nelielām draugu kompānijām, kas vēlas baudīt mierīgu atpūtu jūras tuvumā.",
    "Līdz pludmalei ir tikai 200 metri, tāpēc dienu var sākt ar nesteidzīgu pastaigu gar krastu vai noslēgt ar saulrietu pie jūras.",
  ],
  roomsNote: "Par brīvajām vietām un cenām sazinieties ar mums.",
  extrasTitle: "Papildus atpūtai",
  extras: [
    {
      name: "Pirts",
      description:
        "Karsta pirts ir lielisks veids, kā atslābināties pēc pastaigas gar jūru vai garas svinību dienas. Īre pēc iepriekšējas vienošanās.",
      price: 100,
      image: images.saunaMain,
      inset: images.saunaInside,
    },
    {
      name: "Kubls",
      description:
        "Silts kubls zem klajas debess — īpaši burvīgs vakaros, kad iedegas zvaigznes. Īre pēc iepriekšējas vienošanās.",
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
  title: "Svētki, kas",
  titleAccent: "paliek atmiņā",
  capacityLabel: "viesi svinību zālē",
  partnerEyebrow: "Izklaides programmas",
  ctaLabel: "Pieteikt svinības",
  intro: [
    "Baltā Saule ir vieta, kur svētki kļūst par skaistām atmiņām. Mājīgā koka zāle, zaļais pagalms un jūras tuvums rada siltu un nesteidzīgu atmosfēru gan kāzām, jubilejām un korporatīviem pasākumiem, gan nelielām ģimenes svinībām.",
    "Svinību zāle līdz 40 viesiem, mājas ēdiens no Omītes virtuves un naktsmītnes turpat blakus — viss vienuviet, lai jūs varat vienkārši baudīt svētkus.",
  ],
  capacity: 40,
  partner: {
    name: "Smaidu darbnīca",
    description: "Piedāvājam izklaides programmas sadarbībā ar Smaidu darbnīcu.",
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

/* --- Lapas ---------------------------------------------------------------- */

export const pages = {
  about: {
    href: "/par-mums",
    label: "Par mums",
    description:
      "Baltā Saule — ģimenes veidots atpūtas komplekss Ragaciemā, 200 m no jūras. Viesmīlība, mājās gatavots ēdiens un ģimeniska atmosfēra.",
    eyebrow: "Ragaciems · 200 m no jūras",
    teaser: "Ģimenes veidots atpūtas komplekss ar viesmīlību un mājas garšu.",
    heroImage: images.signFlowers,
    cardImage: images.about,
  },
  accommodation: {
    href: "/naktsmitnes",
    label: "Naktsmītnes",
    description:
      "Mājīgas naktsmītnes Ragaciemā, 200 m no jūras — ģimenēm, kompānijām un pāriem. Papildus pirts un kubls.",
    eyebrow: "Atpūta pie jūras",
    teaser: "Mājīgas naktsmītnes 200 m no jūras, pirts un kubls zem klajas debess.",
    heroImage: images.accommodationExterior,
    cardImage: images.accommodation,
  },
  kitchen: {
    href: "/omites-virtuve",
    label: "Omītes virtuve",
    description:
      "Omītes virtuve — banketa galdi, salāti, uzkodas un deserti ar mājas garšu. Aukstais un siltais galds svinībām Ragaciemā.",
    eyebrow: "Banketu ēdināšana",
    teaser: "Banketa galdi, salāti, uzkodas un deserti ar mājas garšu.",
    heroImage: images.meatPlatter,
    cardImage: images.kitchen,
  },
  contact: {
    href: "/kontakti",
    label: "Kontakti",
    description:
      "Baltā Saule kontakti — tālrunis, e-pasts un adrese Ragaciemā. Zvaniet vai rakstiet, lai rezervētu atpūtu, svinības vai banketu.",
    eyebrow: "Ragaciems · Tukuma novads",
    teaser: "Zvaniet vai rakstiet, lai rezervētu atpūtu vai svinības.",
    heroImage: images.contact,
    cardImage: images.contact,
  },
  events: {
    href: "/svinibas",
    label: "Svinības",
    description:
      "Svinību zāle līdz 40 viesiem Ragaciemā — kāzas, jubilejas, kristības, dzimšanas dienas un uzņēmumu pasākumi. Izklaides programmas ar Smaidu darbnīcu.",
    eyebrow: "Līdz 40 viesiem",
    teaser: "Svinību zāle līdz 40 viesiem un izklaides programmas.",
    heroImage: images.dancing,
    cardImage: images.eventsTable,
  },
} satisfies Record<string, PageInfo>;

/** Sākumlapas kartītes (secībā) */
export const featuredPages: PageInfo[] = [pages.accommodation, pages.kitchen, pages.events];

/* --- Fotogrāfiju mozaīka sākumlapā un foto joslas apakšlapās -------------- */

/** Sākumlapas foto kolāža — tikai noskaņa, bez uzrakstiem un saitēm. */
export const homeMosaic: ImageAsset[] = [
  images.roomEvening,
  images.kitchenPastries,
  images.dancing,
  images.hotTubSwing,
  images.kitchenFire,
  images.singer,
  images.kitchenBanquet,
];

/** Naktsmītņu lapas fotogrāfijas: galvenā bilde, 2 blakus tai un 4 sīkbildes zem tām. */
export const accommodationGallery = {
  main: images.roomEvening,
  side: [images.accommodation, images.accommodationExterior],
  thumbs: [images.roomLiving, images.roomBedroom, images.roomBathroom, images.balcony],
} satisfies { main: ImageAsset; side: ImageAsset[]; thumbs: ImageAsset[] };

/** Omītes virtuves lapas noskaņas bildes (ēdienu bildes ir atsevišķi pie ēdienkartes). */
export const kitchenGallery = {
  main: images.kitchenBanquet,
  side: [images.kitchen, images.table],
  thumbs: [
    images.kitchenCandles,
    images.kitchenFire,
    images.kitchenSetting,
    images.kitchenHallTable,
    images.kitchenFlowers,
    images.kitchenEvening,
    images.kitchenCaesar,
    images.kitchenStarters,
    images.kitchenFlowerVase,
  ],
} satisfies { main: ImageAsset; side: ImageAsset[]; thumbs: ImageAsset[] };

/** Svinību lapas bildes — visas vienuviet. */
export const eventsGallery = {
  main: images.singer,
  side: [images.eventsTable, images.hall],
  thumbs: [
    images.eventsCourtyard,
    images.party,
    images.eventsSongTable,
    images.dancing,
    images.eventsTerrace,
    images.host,
    images.guestsYard,
    images.eventsBar,
    images.hotTub,
    images.eventsBouncy,
  ],
} satisfies { main: ImageAsset; side: ImageAsset[]; thumbs: ImageAsset[] };

export const photoStrips = {
  about: [images.garden, images.decor, images.veranda],
} satisfies Record<string, ImageAsset[]>;
