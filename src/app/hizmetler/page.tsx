import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "Serigrafi Boya Hizmetleri ve Özel Renk Üretimi",
  description:
    "Serigrafi boyalarında özel renk geliştirme, teknik destek, proses danışmanlığı ve Türkiye geneli hızlı sevkiyat hizmetleri.",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function ServicesPage() {
  return <HomePage page="services" />;
}
