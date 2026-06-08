import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  seoLandingPageMap,
  seoLandingPages,
} from "@/components/site/seo-landing-data";
import { SeoLandingPageView } from "@/components/site/seo-landing-page";

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
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <SeoLandingPageView page={page} />
    </>
  );
}

