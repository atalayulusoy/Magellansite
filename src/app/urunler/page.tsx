import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { productCatalogItems } from "@/components/site/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boyaları ve Plastisol Boya Çeşitleri | Magellan Boya",
  },
  description:
    "Plastisol boya, serigrafi boya, emülsiyon, inceltici, geciktirici ve serigrafi baskı yardımcı ürünlerini Magellan Boya’da inceleyin.",
  alternates: {
    canonical: "https://www.magellanboya.com/urunler",
  },
  openGraph: {
    title: "Serigrafi Boyaları ve Plastisol Boya Çeşitleri | Magellan Boya",
    description:
      "Plastisol boya, serigrafi boya, emülsiyon, inceltici, geciktirici ve serigrafi baskı yardımcı ürünlerini Magellan Boya’da inceleyin.",
    url: "https://www.magellanboya.com/urunler",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boyaları ve Plastisol Boya Çeşitleri | Magellan Boya",
    description:
      "Magellan Boya’da serigrafi boya, plastisol boya ve serigrafi yardımcı kimyasalları.",
  },
};

const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Magellan Boya serigrafi boyaları ve plastisol boya ürün kataloğu",
  itemListElement: productCatalogItems.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.title,
      category: product.category,
      description: product.description,
      image: `https://www.magellanboya.com${product.image}`,
      brand: {
        "@type": "Brand",
        name: "Magellan",
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListJsonLd),
        }}
      />
      <HomePage page="products" />
    </>
  );
}
