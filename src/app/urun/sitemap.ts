import type { MetadataRoute } from "next";
import { productDetailPages } from "@/components/site/product-detail-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.magellanboya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return productDetailPages.map((product) => ({
    url: `${siteUrl}/urun/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.82,
    images: [`${siteUrl}${product.image}`],
    alternates: {
      languages: {
        "tr-TR": `${siteUrl}/urun/${product.slug}`,
        "x-default": `${siteUrl}/urun/${product.slug}`,
      },
    },
  }));
}
