import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { companyInfo } from "@/components/site/site-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Serigrafi Baskı Boyaları | Serigrafi Boya İmalatçısı | Magellan Boya",
  },
  description:
    "Magellan Boya; serigrafi baskı boyaları, plastisol boya, tekstil baskı boyaları, PVC ve UV boya, emülsiyon, inceltici ve yardımcı kimyasallar üretir.",
  alternates: {
    canonical: "https://www.magellanboya.com/",
    languages: {
      "tr-TR": "https://www.magellanboya.com/",
      "x-default": "https://www.magellanboya.com/",
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
    title:
      "Serigrafi Baskı Boyaları | Serigrafi Boya İmalatçısı | Magellan Boya",
    description:
      "Magellan Boya; serigrafi baskı boyaları, plastisol boya, tekstil baskı boyaları, PVC ve UV boya, emülsiyon, inceltici ve yardımcı kimyasallar üretir.",
    url: "https://www.magellanboya.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Serigrafi Baskı Boyaları | Serigrafi Boya İmalatçısı | Magellan Boya",
    description:
      "Serigrafi baskı boyaları, plastisol boya, tekstil baskı ürünleri ve serigrafi yardımcı kimyasalları için Magellan Boya.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.magellanboya.com/#organization",
  name: "Magellan Boya",
  legalName: companyInfo.name,
  url: "https://www.magellanboya.com",
  logo: "https://www.magellanboya.com/magellan-logo-square.png",
  image: "https://www.magellanboya.com/magellan-label.png",
  description:
    "Serigrafi boya üreticisi ve boya tedarikçisi olarak serigrafi baskı boyaları, plastisol boya, tekstil baskı boyaları, emülsiyon, inceltici, geciktirici ve yardımcı kimyasallar sunar.",
  additionalType: "https://schema.org/Store",
  category: "Serigrafi boya üreticisi / boya tedarikçisi",
  telephone: companyInfo.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.address,
    addressLocality: "Başakşehir",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0845742,
    longitude: 28.8082756,
  },
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  makesOffer: [
    "Serigrafi boyaları",
    "Serigrafi baskı boyaları",
    "Serigrafi boya imalatı",
    "Plastisol boya",
    "Tekstil baskı boyaları",
    "İpek baskı boyası",
    "Emülsiyon serigrafi ürünleri",
    "Serigrafi yardımcı kimyasalları",
    "Toptan serigrafi boya",
  ],
  sameAs: [companyInfo.instagramHref, companyInfo.facebookHref],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: companyInfo.phoneDisplay,
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["tr"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.magellanboya.com/#website",
  url: "https://www.magellanboya.com",
  name: "Magellan Boya",
  publisher: {
    "@id": "https://www.magellanboya.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.magellanboya.com/arama?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
        }}
      />
      <HomePage page="home" />
    </>
  );
}
