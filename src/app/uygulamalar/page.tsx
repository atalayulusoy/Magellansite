import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Baskı Uygulamaları | Magellan Boya",
  },
  description:
    "Poşet, tekstil, deri, plastik, uyarı levhası ve ambalaj baskılarında Magellan Boya serigrafi boyalarının kullanım alanlarını inceleyin.",
  alternates: {
    canonical: "https://www.magellanboya.com/uygulamalar",
  },
  openGraph: {
    title: "Serigrafi Baskı Uygulamaları | Magellan Boya",
    description:
      "Poşet, tekstil, deri, plastik, uyarı levhası ve ambalaj baskılarında Magellan Boya serigrafi boyalarının kullanım alanları.",
    url: "https://www.magellanboya.com/uygulamalar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Baskı Uygulamaları | Magellan Boya",
    description:
      "Serigrafi baskı boyası uygulama örnekleri ve kullanım alanları.",
  },
};

export default function ApplicationsPage() {
  return <HomePage page="applications" />;
}
