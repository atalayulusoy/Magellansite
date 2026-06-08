import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { companyInfo } from "@/components/site/site-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Serigrafi Boya İmalatçısı | Plastisol ve Serigrafi Boyaları | Magellan Boya",
  },
  description:
    "Magellan Boya; serigrafi boyaları, plastisol boya, tekstil baskı boyaları, emülsiyon, inceltici, geciktirici ve serigrafi yardımcı kimyasalları üretimi ve satışı yapar.",
  alternates: {
    canonical: "https://www.magellanboya.com/",
  },
  openGraph: {
    title:
      "Serigrafi Boya İmalatçısı | Plastisol ve Serigrafi Boyaları | Magellan Boya",
    description:
      "Magellan Boya; serigrafi boyaları, plastisol boya, tekstil baskı boyaları, emülsiyon, inceltici, geciktirici ve serigrafi yardımcı kimyasalları üretimi ve satışı yapar.",
    url: "https://www.magellanboya.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Serigrafi Boya İmalatçısı | Plastisol ve Serigrafi Boyaları | Magellan Boya",
    description:
      "Serigrafi boya, plastisol boya, tekstil baskı ürünleri ve serigrafi yardımcı kimyasalları için Magellan Boya.",
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
    "Serigrafi boya üreticisi ve boya tedarikçisi olarak serigrafi boyaları, plastisol boya, tekstil baskı boyaları, emülsiyon, inceltici, geciktirici ve yardımcı kimyasallar sunar.",
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
