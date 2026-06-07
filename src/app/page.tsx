import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { companyInfo } from "@/components/site/site-data";

export const metadata: Metadata = {
  title: "Serigrafi Boyaları Üreticisi | Türkiye Geneli Hızlı Gönderim",
  description:
    "Magellan Serigrafi Boyaları; serigrafi boyaları, tekstil, poşet, deri ve endüstriyel baskı boyalarında üretici firma. Türkiye geneli hızlı gönderim.",
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.magellanboya.com/#organization",
  name: companyInfo.name,
  url: "https://www.magellanboya.com",
  logo: "https://www.magellanboya.com/magellan-logo-square.png",
  image: "https://www.magellanboya.com/magellan-label.png",
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
    "Tekstil baskı boyaları",
    "Poşet baskı boyaları",
    "Deri boyası",
    "UV serigrafi boyaları",
    "Plastisol boyalar",
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
  name: "Magellan Serigrafi Boyaları",
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
