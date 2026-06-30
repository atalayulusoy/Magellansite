import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { productCategoryPages } from "@/components/site/product-category-data";
import { productDetailPages } from "@/components/site/product-detail-data";
import { productCatalogItems } from "@/components/site/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Baskı Boyaları ve Ürün Çeşitleri | Magellan Boya",
  },
  description:
    "Serigrafi baskı boyaları, plastisol boya, PVC ve UV boya, emülsiyon, inceltici, geciktirici ve yardımcı ürünleri inceleyin.",
  alternates: {
    canonical: "https://magellanboya.com/urunler",
  },
  openGraph: {
    title: "Serigrafi Baskı Boyaları ve Ürün Çeşitleri | Magellan Boya",
    description:
      "Serigrafi baskı boyaları, plastisol boya, PVC ve UV boya, emülsiyon, inceltici, geciktirici ve yardımcı ürünleri inceleyin.",
    url: "https://magellanboya.com/urunler",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Baskı Boyaları ve Ürün Çeşitleri | Magellan Boya",
    description:
      "Magellan Boya’da serigrafi baskı boyaları, plastisol boya ve serigrafi yardımcı kimyasalları.",
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
      image: `https://magellanboya.com${product.image}`,
      brand: {
        "@type": "Brand",
        name: "Magellan",
      },
    },
  })),
};

const categoryListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Magellan Boya serigrafi boya kategori sayfaları",
  itemListElement: productCategoryPages.map((category, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: category.h1,
    url: `https://magellanboya.com/urun-kategori/${category.slug}`,
  })),
};

const productDetailListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Magellan Boya ürün detay sayfaları",
  itemListElement: productDetailPages.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.h1,
    url: `https://magellanboya.com/urun/${product.slug}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://magellanboya.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ürünler",
      item: "https://magellanboya.com/urunler",
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productListJsonLd,
            categoryListJsonLd,
            productDetailListJsonLd,
            breadcrumbJsonLd,
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage page="products" />
    </>
  );
}
