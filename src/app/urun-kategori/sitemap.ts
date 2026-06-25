import type { MetadataRoute } from "next";
import { productCategoryPages } from "@/components/site/product-category-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.magellanboya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return productCategoryPages.map((page) => ({
    url: `${siteUrl}/urun-kategori/${page.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: page.slug === "serigrafi-baski-boyalari" ? 0.96 : 0.86,
    images: [`${siteUrl}/magellan-label.png`],
    alternates: {
      languages: {
        "tr-TR": `${siteUrl}/urun-kategori/${page.slug}`,
        "x-default": `${siteUrl}/urun-kategori/${page.slug}`,
      },
    },
  }));
}
