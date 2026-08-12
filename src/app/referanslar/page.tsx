import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Baskı Örnekleri ve Referanslar | Magellan Boya",
  },
  description:
    "Serigrafi boyaları ile poşet, tekstil, deri, plastik bardak, levha ve ambalaj yüzeylerinde yapılan baskı örnekleri.",
  alternates: {
    canonical: "https://magellanboya.com/referanslar",
  },
  openGraph: {
    title: "Serigrafi Baskı Örnekleri ve Referanslar | Magellan Boya",
    description:
      "Poşet, tekstil, deri, plastik bardak, levha ve ambalaj yüzeylerinde serigrafi baskı örnekleri.",
    url: "https://magellanboya.com/referanslar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Baskı Örnekleri | Magellan Boya",
    description:
      "Serigrafi boyaları ile yapılan baskı örnekleri.",
  },
};

export default function ReferencesPage() {
  return <HomePage page="references" />;
}
