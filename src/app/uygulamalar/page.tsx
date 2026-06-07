import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "Serigrafi Baskı Uygulamaları",
  description:
    "Poşet, tekstil, deri, plastik, uyarı levhası ve ambalaj baskılarında Magellan serigrafi boyalarının kullanım alanlarını inceleyin.",
  alternates: {
    canonical: "/uygulamalar",
  },
};

export default function ApplicationsPage() {
  return <HomePage page="applications" />;
}
