import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "Serigrafi Baskı Örnekleri ve Referanslar",
  description:
    "Magellan serigrafi boyaları ile poşet, tekstil, deri, plastik bardak, levha ve ambalaj yüzeylerinde yapılan baskı örnekleri.",
  alternates: {
    canonical: "/referanslar",
  },
};

export default function ReferencesPage() {
  return <HomePage page="references" />;
}
