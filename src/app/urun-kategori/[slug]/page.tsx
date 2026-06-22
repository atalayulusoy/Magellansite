import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  productCategoryPageMap,
  productCategoryPages,
} from "@/components/site/product-category-data";
import { ProductCategoryPageView } from "@/components/site/product-category-page";

const siteUrl = "https://www.magellanboya.com";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCategoryPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = productCategoryPageMap.get(slug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/urun-kategori/${page.slug}`;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: [page.focusKeyword, ...page.productGroups, ...page.surfaces],
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

export default async function ProductCategoryRoute({ params }: Props) {
  const { slug } = await params;
  const page = productCategoryPageMap.get(slug);

  if (!page) {
    notFound();
  }

  const url = `${siteUrl}/urun-kategori/${page.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
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
      mainEntity: {
        "@type": "OfferCatalog",
        name: page.h1,
        itemListElement: page.productGroups.map((item, index) => ({
          "@type": "OfferCatalog",
          position: index + 1,
          name: item,
          url,
        })),
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Magellan Boya",
      },
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
          name: "Ürünler",
          item: `${siteUrl}/urunler`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.h1,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
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
      <ProductCategoryPageView page={page} />
    </>
  );
}
