import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/site/blog-page";
import { blogPosts } from "@/components/site/blog-data";

const siteUrl = "https://www.magellanboya.com";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya Blog ve Teknik Rehber | Magellan Boya",
  },
  description:
    "Serigrafi boya, plastisol boya, PVC ve UV baskı boyaları, emülsiyon, kalıp hazırlama ve tekstil baskı boyası hakkında Magellan Boya rehberleri.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Serigrafi Boya Blog ve Teknik Rehber | Magellan Boya",
    description:
      "Serigrafi boya, plastisol boya, PVC ve UV baskı boyaları, emülsiyon ve tekstil baskı boyası hakkında teknik rehberler.",
    url: `${siteUrl}/blog`,
    type: "website",
    siteName: "Magellan Boya",
    images: [
      {
        url: "/magellan-label.png",
        width: 1536,
        height: 1024,
        alt: "Magellan Boya serigrafi boya blog",
      },
    ],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya Blog ve Teknik Rehber | Magellan Boya",
    description:
      "Serigrafi boya ve baskı boyaları hakkında Magellan Boya teknik rehberleri.",
    images: ["/magellan-label.png"],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/blog#blog`,
  url: `${siteUrl}/blog`,
  name: "Magellan Boya Serigrafi Rehberi",
  description: metadata.description,
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Magellan Boya",
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.h1,
    url: `${siteUrl}/blog/${post.slug}`,
    description: post.description,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <BlogIndexPage />
    </>
  );
}
