import type { Metadata } from "next";
import { site, type PageInfo } from "@/lib/data";

/** Katras apakšlapas metadati: virsraksts, apraksts, canonical un Open Graph. */
export function pageMetadata(page: PageInfo): Metadata {
  const title = page.label;
  return {
    title,
    description: page.description,
    alternates: { canonical: page.href },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: page.href,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description: page.description,
      images: [{ url: page.heroImage.src, width: page.heroImage.width, height: page.heroImage.height, alt: page.heroImage.alt }],
    },
  };
}
