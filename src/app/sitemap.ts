import type { MetadataRoute } from "next";
import { blogPosts } from "@/components/site/blog-data";
import { productDetailPages } from "@/components/site/product-detail-data";
import { productCategoryPages } from "@/components/site/product-category-data";
import { seoLandingPages } from "@/components/site/seo-landing-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.magellanboya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, image: `${siteUrl}/magellan-label.png` },
    { path: "/hakkimizda", priority: 0.8, image: `${siteUrl}/magellan-logo-wide.png` },
    { path: "/urunler", priority: 0.95, image: `${siteUrl}/magellan-label.png` },
    { path: "/uygulamalar", priority: 0.85, image: `${siteUrl}/magellan-label.png` },
    { path: "/hizmetler", priority: 0.85, image: `${siteUrl}/magellan-label.png` },
    { path: "/uretim", priority: 0.75, image: `${siteUrl}/magellan-label.png` },
    { path: "/referanslar", priority: 0.75, image: `${siteUrl}/magellan-label.png` },
    { path: "/iletisim", priority: 0.9, image: `${siteUrl}/magellan-logo-wide.png` },
    { path: "/arama", priority: 0.55, image: `${siteUrl}/magellan-label.png` },
    { path: "/blog", priority: 0.8, image: `${siteUrl}/magellan-label.png` },
    ...productCategoryPages.map((page) => ({
      path: `/urun-kategori/${page.slug}`,
      priority: page.slug === "serigrafi-baski-boyalari" ? 0.96 : 0.86,
      image: `${siteUrl}/magellan-label.png`,
    })),
    ...productDetailPages.map((product) => ({
      path: `/urun/${product.slug}`,
      priority: 0.82,
      image: `${siteUrl}${product.image}`,
    })),
    ...seoLandingPages.map((page) => ({
      path: `/${page.slug}`,
      priority: 0.72,
      image: `${siteUrl}/magellan-label.png`,
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      image: `${siteUrl}/magellan-label.png`,
    })),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
    images: [route.image],
    alternates: {
      languages: {
        "tr-TR": `${siteUrl}${route.path}`,
        "x-default": `${siteUrl}${route.path}`,
      },
    },
  }));
}
