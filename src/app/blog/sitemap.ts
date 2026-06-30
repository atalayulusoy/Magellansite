import type { MetadataRoute } from "next";
import { blogPosts } from "@/components/site/blog-data";

const siteUrl = "https://magellanboya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${siteUrl}/magellan-label.png`],
      alternates: {
        languages: {
          "tr-TR": `${siteUrl}/blog`,
          "x-default": `${siteUrl}/blog`,
        },
      },
    },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [`${siteUrl}/magellan-label.png`],
      alternates: {
        languages: {
          "tr-TR": `${siteUrl}/blog/${post.slug}`,
          "x-default": `${siteUrl}/blog/${post.slug}`,
        },
      },
    })),
  ];
}
