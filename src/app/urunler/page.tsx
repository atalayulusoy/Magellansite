import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { productCatalogItems } from "@/components/site/site-data";

export const metadata: Metadata = {
  title: "Serigrafi Boyaları ve Baskı Boyaları Ürünleri",
  description:
    "PVC, UV, plastisol, su bazlı, tekstil, poşet ve deri baskı için Magellan serigrafi boyaları. Üreticiden fiyat ve Türkiye geneli hızlı gönderim için WhatsApp.",
  alternates: {
    canonical: "/urunler",
  },
};

const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Magellan serigrafi boyaları ürün kataloğu",
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
