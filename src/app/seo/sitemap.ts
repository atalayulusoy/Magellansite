import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/components/site/seo-landing-data";

const siteUrl = "https://magellanboya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return seoLandingPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.72,
    images: [`${siteUrl}/magellan-label.png`],
    alternates: {
      languages: {
        "tr-TR": `${siteUrl}/${page.slug}`,
        "x-default": `${siteUrl}/${page.slug}`,
      },
    },
  }));
}
