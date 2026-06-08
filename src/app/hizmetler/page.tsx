import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya Hizmetleri ve Özel Renk Üretimi | Magellan Boya",
  },
  description:
    "Serigrafi boyalarında özel renk geliştirme, plastisol boya, teknik destek, proses danışmanlığı ve serigrafi boya tedarik hizmetleri.",
  alternates: {
    canonical: "https://www.magellanboya.com/hizmetler",
  },
  openGraph: {
    title: "Serigrafi Boya Hizmetleri ve Özel Renk Üretimi | Magellan Boya",
    description:
      "Özel renk geliştirme, plastisol boya, teknik destek ve serigrafi boya tedarik hizmetleri.",
    url: "https://www.magellanboya.com/hizmetler",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya Hizmetleri | Magellan Boya",
    description:
      "Serigrafi boya üretimi, özel renk geliştirme ve teknik destek hizmetleri.",
  },
};

export default function ServicesPage() {
  return <HomePage page="services" />;
}
