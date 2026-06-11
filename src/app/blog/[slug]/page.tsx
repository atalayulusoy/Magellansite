import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPostMap, blogPosts } from "@/components/site/blog-data";
import { BlogPostPageView, buildBlogPostText } from "@/components/site/blog-page";

const siteUrl = "https://www.magellanboya.com";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostMap.get(slug);

  if (!post) {
    return {};
  }

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: {
      absolute: post.title,
    },
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: "Magellan Boya",
      images: [
        {
          url: "/magellan-label.png",
          width: 1536,
          height: 1024,
          alt: `${post.h1} - Magellan Boya`,
        },
      ],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/magellan-label.png"],
    },
  };
}

export default async function BlogPostRoute({ params }: Props) {
  const { slug } = await params;
  const post = blogPostMap.get(slug);

  if (!post) {
    notFound();
  }

  const url = `${siteUrl}/blog/${post.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#blogposting`,
      url,
      headline: post.h1,
      name: post.title,
      description: post.description,
      articleBody: buildBlogPostText(post),
      inLanguage: "tr-TR",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Magellan Boya",
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Magellan Boya",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/magellan-logo-square.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
      },
      image: `${siteUrl}/magellan-label.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${siteUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.h1,
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <BlogPostPageView post={post} />
    </>
  );
}
