import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  productDetailPageMap,
  productDetailPages,
} from "@/components/site/product-detail-data";
import {
  buildProductDetailText,
  ProductDetailPageView,
} from "@/components/site/product-detail-page";

const siteUrl = "https://www.magellanboya.com";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productDetailPages.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productDetailPageMap.get(slug);

  if (!product) {
    return {};
  }

  const url = `${siteUrl}/urun/${product.slug}`;

  return {
    title: {
      absolute: product.title,
    },
    description: product.description,
    keywords: [
      product.focusKeyword,
      product.productType,
      product.categoryLabel,
      ...product.surfaces,
      ...product.uses,
    ],
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
      title: product.title,
      description: product.description,
      url,
      type: "website",
      siteName: "Magellan Boya",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 900,
          alt: `${product.h1} - Magellan Boya`,
        },
      ],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailRoute({ params }: Props) {
  const { slug } = await params;
  const product = productDetailPageMap.get(slug);

  if (!product) {
    notFound();
  }

  const url = `${siteUrl}/urun/${product.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}#product`,
      name: product.h1,
      description: product.description,
      image: `${siteUrl}${product.image}`,
      sku: product.slug,
      category: product.categoryLabel,
      brand: {
        "@type": "Brand",
        name: "Magellan Boya",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Ürün tipi",
          value: product.productType,
        },
        {
          "@type": "PropertyValue",
          name: "Renk / özellik",
          value: product.color,
        },
        {
          "@type": "PropertyValue",
          name: "Kullanım yüzeyleri",
          value: product.surfaces.join(", "),
        },
      ],
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: product.title,
      headline: product.h1,
      description: product.description,
      inLanguage: "tr-TR",
      mainEntity: {
        "@id": `${url}#product`,
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Magellan Boya",
      },
      articleBody: buildProductDetailText(product),
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
          name: product.categoryLabel,
          item: `${siteUrl}/urun-kategori/${product.categorySlug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: product.h1,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: product.faq.map((item) => ({
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
      <ProductDetailPageView product={product} />
    </>
  );
}
