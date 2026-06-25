import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  seoLandingPageMap,
  seoLandingPages,
} from "@/components/site/seo-landing-data";
import {
  buildSeoLandingFaq,
  buildSeoLandingText,
  SeoLandingPageView,
} from "@/components/site/seo-landing-page";

const siteUrl = "https://www.magellanboya.com";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoLandingPageMap.get(slug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/${page.slug}`;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
        "x-default": url,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
      siteName: "Magellan Boya",
      images: [
        {
          url: "/magellan-label.png",
          width: 1536,
          height: 1024,
          alt: `${page.h1} - Magellan Boya`,
        },
      ],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/magellan-label.png"],
    },
  };
}

export default async function SeoLandingRoute({ params }: Props) {
  const { slug } = await params;
  const page = seoLandingPageMap.get(slug);

  if (!page) {
    notFound();
  }

  const url = `${siteUrl}/${page.slug}`;
  const faq = buildSeoLandingFaq(page);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      headline: page.h1,
      description: page.description,
      inLanguage: "tr-TR",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Magellan Boya",
        url: siteUrl,
      },
      about: {
        "@type": "Thing",
        name: page.focusKeyword,
      },
      articleBody: buildSeoLandingText(page),
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Magellan Boya",
        url: siteUrl,
        telephone: "0532 519 9837",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      url,
      headline: page.h1,
      name: page.title,
      description: page.description,
      articleBody: buildSeoLandingText(page),
      articleSection: page.eyebrow,
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
        "@id": `${url}#webpage`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.h1,
      serviceType: page.focusKeyword,
      provider: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Magellan Boya",
      },
      areaServed: {
        "@type": "Country",
        name: "Türkiye",
      },
      url,
      description: page.description,
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
          name: page.h1,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SeoLandingPageView page={page} />
    </>
  );
}
