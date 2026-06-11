import type { MetadataRoute } from "next";
import { blogPosts } from "@/components/site/blog-data";
import { seoLandingPages } from "@/components/site/seo-landing-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.magellanboya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/hakkimizda", priority: 0.8 },
    { path: "/urunler", priority: 0.95 },
    { path: "/uygulamalar", priority: 0.85 },
    { path: "/hizmetler", priority: 0.85 },
    { path: "/uretim", priority: 0.75 },
    { path: "/referanslar", priority: 0.75 },
    { path: "/iletisim", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    ...seoLandingPages.map((page) => ({
      path: `/${page.slug}`,
      priority: 0.72,
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
    })),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
