import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "Hakkımızda | Serigrafi Boyaları Üreticisi",
  description:
    "Magellan Serigrafi Boyaları; özel renk üretimi, güçlü pigment yapısı ve Türkiye geneli hızlı gönderim ile serigrafi boya üreticisi olarak hizmet verir.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function AboutPage() {
  return <HomePage page="about" />;
}
