"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  Clock3,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  MapPinned,
  Menu,
  MessageCircleMore,
  MonitorSmartphone,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  SwatchBook,
  Target,
  Users,
  X,
} from "lucide-react";
import {
  FormEvent,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  advantageItems,
  applicationShowcaseItems,
  companyInfo,
  galleryItems,
  navItems,
  productCatalogItems,
  processSteps,
  productHighlights,
  productItems,
  referenceBrands,
  serviceItems,
  statItems,
  surfaceShowcaseItems,
  testimonialItems,
} from "./site-data";
import { productDetailPages } from "./product-detail-data";
import { featuredProductCategoryPages } from "./product-category-data";
import { featuredSeoLandingLinks } from "./featured-seo-links";

type IconKey =
  | "badge"
  | "boxes"
  | "clock"
  | "droplets"
  | "factory"
  | "flask"
  | "layers"
  | "palette"
  | "rocket"
  | "shield"
  | "sparkles"
  | "swatchbook"
  | "target"
  | "users";

const iconMap: Record<IconKey, typeof Droplets> = {
  badge: BadgeCheck,
  boxes: Boxes,
  clock: Clock3,
  droplets: Droplets,
  factory: Factory,
  flask: FlaskConical,
  layers: Layers3,
  palette: Palette,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  swatchbook: SwatchBook,
  target: Target,
  users: Users,
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const brandMedia = {
  logo: "/magellan-logo-square.png",
  logoWide: "/magellan-logo-wide.png",
  label: "/magellan-label.png",
  video: "/magellan-brand-video.mp4",
  gif: "/magellan-logo-shine.gif",
};
const referenceAccents = [
  "#38bdf8",
  "#22c55e",
  "#f59e0b",
  "#2563eb",
  "#e5e7eb",
  "#ffffff",
  "#60a5fa",
  "#f97316",
];

const homeHeroProductBand = [
  { label: "EMPRİME", href: "/urun-kategori/emprime-baski-boyalari" },
  { label: "HOBİ BOYALARI", href: "/urun-kategori/hobi-boyalari" },
  { label: "SERİGRAFİ", href: "/urun-kategori/serigrafi-baski-boyalari" },
  { label: "PVC BAZLI", href: "/urun-kategori/pvc-serigrafi-boyalari" },
  { label: "SU BAZLI", href: "/urun-kategori/su-bazli-serigrafi-boyalari" },
  { label: "PLASTISOL", href: "/urun-kategori/plastisol-boyalari" },
  { label: "UV", href: "/urun-kategori/uv-serigrafi-boyalari" },
  { label: "İNCELTİCİ", href: "/urun-kategori/serigrafi-inceltici-geciktirici" },
  { label: "GECİKTİRİCİ", href: "/urun-kategori/serigrafi-inceltici-geciktirici" },
  { label: "G3 / G4", href: "/urun-kategori/serigrafi-inceltici-geciktirici" },
];

const scrollHeroProducts = [
  {
    number: "01",
    title: "Emprime Baskı Boyaları",
    summary:
      "Tişört, sweatshirt, pamuklu kumaş, bez çanta ve promosyon tekstili için canlı renk ve profesyonel tekstil baskı çözümleri.",
    tags: ["Tekstil", "Tişört", "Kumaş", "Bez Çanta"],
    cta: "Emprime Boyalarını İncele",
    image:
      "https://images.pexels.com/photos/33650424/pexels-photo-33650424.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Tekstil üzerine serigrafi baskı uygulaması",
    source:
      "Pexels photo 33650424, James Collington - screen printing T-shirt workshop.",
    href: "/urun-kategori/emprime-baski-boyalari",
  },
  {
    number: "02",
    title: "PVC Serigrafi Boyaları",
    summary:
      "PVC, plastik, suni deri, etiket, ambalaj ve teknik yüzeylerde güçlü tutunma ve net baskı için geliştirilen ürün grupları.",
    tags: ["PVC", "Plastik", "Deri", "Ambalaj"],
    cta: "PVC Boyalarını İncele",
    image:
      "https://images.pexels.com/photos/7829478/pexels-photo-7829478.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "PVC ve plastik yüzey baskı uygulaması",
    source:
      "Pexels photo 7829478 - representative plastic surface application image.",
    href: "/urun-kategori/pvc-serigrafi-boyalari",
  },
  {
    number: "03",
    title: "Plastisol Boyalar",
    summary:
      "Tekstil serigrafisinde yüksek örtücülük, canlı renk ve seri üretim performansı isteyen uygulamalar için profesyonel plastisol seçenekleri.",
    tags: ["Tekstil", "Örtücülük", "Canlı Renk", "Seri Üretim"],
    cta: "Plastisol Boyaları İncele",
    image:
      "https://images.pexels.com/photos/33650428/pexels-photo-33650428.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Tekstil baskı atölyesinde üretim",
    source:
      "Pexels photo 33650428, James Collington - representative textile printing workshop.",
    href: "/urun-kategori/plastisol-boyalari",
  },
];

const scrollHeroReasons = [
  {
    number: "01",
    title: "Güçlü Tutunma",
    description:
      "Baskı yüzeyine uygun ürün sistemi seçildiğinde temiz, güçlü ve güvenilir sonuç hedeflenir.",
    icon: "shield" as IconKey,
  },
  {
    number: "02",
    title: "Özel Renk Çözümleri",
    description:
      "Marka rengi, referans numune veya özel uygulama ihtiyacına göre renk seçenekleri oluşturulabilir.",
    icon: "swatchbook" as IconKey,
  },
  {
    number: "03",
    title: "Kontrollü Üretim",
    description:
      "Renk, viskozite ve uygulama performansında tekrar edilebilir sonuç için üretim süreci kontrollü yürütülür.",
    icon: "factory" as IconKey,
  },
];

type ProductionPortfolioItem = {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  detail?: string;
  tags: string[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  source: string;
  accent: string;
  className: string;
};

const productionPortfolioItems: ProductionPortfolioItem[] = [
  {
    number: "01",
    title: "Serigrafi Baskı Boyaları",
    description:
      "Tekstil, PVC, plastik, ambalaj, etiket, deri ve farklı teknik yüzeylere yönelik profesyonel serigrafi boya çözümleri.",
    detail: "Farklı yüzey ve kurutma sistemlerine göre uygun boya ailesi seçilir.",
    tags: ["Ana kategori", "Teknik yüzey", "Toptan tedarik"],
    cta: "Serigrafi Boyalarını İncele",
    href: "/urun-kategori/serigrafi-baski-boyalari",
    image:
      "https://images.pexels.com/photos/3966272/pexels-photo-3966272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Serigrafi baskı atölyesinde üretim süreci",
    source: "Pexels photo 3966272 - representative screen printing workshop.",
    accent: "#38bdf8",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    number: "02",
    title: "Emprime Baskı Boyaları",
    description:
      "Tişört, sweatshirt, pamuklu kumaş, bez çanta ve promosyon tekstili gibi uygulamalara yönelik profesyonel tekstil baskı boya sistemleri.",
    tags: ["Tekstil", "Tişört", "Kumaş", "Bez Çanta"],
    cta: "Emprime Boyalarını İncele",
    href: "/urun-kategori/emprime-baski-boyalari",
    image:
      "https://images.pexels.com/photos/33650433/pexels-photo-33650433.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Tişört üzerine tekstil serigrafi baskı uygulaması",
    source: "Pexels photo 33650433 - men screen printing a T-shirt in workshop.",
    accent: "#f97316",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    number: "03",
    title: "PVC Bazlı Serigrafi Boyaları",
    description:
      "PVC, suni deri, uygun plastik yüzeyler, etiket, ambalaj ve promosyon uygulamaları için solvent bazlı baskı sistemleri.",
    tags: ["PVC", "Plastik", "Suni Deri", "Etiket", "Ambalaj"],
    cta: "PVC Boyalarını İncele",
    href: "/urun-kategori/pvc-serigrafi-boyalari",
    image:
      "https://images.pexels.com/photos/7829478/pexels-photo-7829478.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "PVC ve plastik yüzey baskı uygulaması",
    source: "Pexels photo 7829478 - representative plastic surface application image.",
    accent: "#2563eb",
    className: "lg:col-span-2",
  },
  {
    number: "04",
    title: "Su Bazlı Boyalar",
    description:
      "Tekstil ve uygun baskı uygulamalarında farklı tuşe, renk ve üretim beklentilerine yönelik su bazlı boya seçenekleri.",
    tags: ["Tekstil", "Su Bazlı", "Kumaş Baskı"],
    cta: "Su Bazlı Boyaları İncele",
    href: "/urun-kategori/su-bazli-serigrafi-boyalari",
    image: "/products/su-bazli-siyah-beyaz.jpeg",
    imageAlt: "Magellan su bazlı boya ürün görseli",
    source: "Local Magellan product image: /public/products/su-bazli-siyah-beyaz.jpeg.",
    accent: "#22c55e",
    className: "lg:col-span-2",
  },
  {
    number: "05",
    title: "Plastisol Boyalar",
    description:
      "Tekstil serigrafisinde yüksek örtücülük, güçlü renk ve seri üretim beklentilerine yönelik profesyonel plastisol boya sistemleri.",
    tags: ["Tekstil", "Örtücülük", "Canlı Renk", "Seri Baskı"],
    cta: "Plastisol Boyaları İncele",
    href: "/urun-kategori/plastisol-boyalari",
    image: "/products/plastisol-cesitleri.png",
    imageAlt: "Magellan plastisol boya çeşitleri",
    source: "Local Magellan product image: /public/products/plastisol-cesitleri.png.",
    accent: "#ec4899",
    className: "lg:col-span-2",
  },
  {
    number: "06",
    title: "UV Serigrafi Boyaları",
    description:
      "UV kürleme sistemi kullanılan endüstriyel ve grafik baskı uygulamalarına yönelik UV boya seçenekleri.",
    tags: ["UV Kürleme", "Endüstriyel Baskı", "Etiket", "Ambalaj"],
    cta: "UV Boyalarını İncele",
    href: "/urun-kategori/uv-serigrafi-boyalari",
    image: "/products/uv-renkliler.jpeg",
    imageAlt: "Magellan UV serigrafi boya ürün görseli",
    source: "Local Magellan product image: /public/products/uv-renkliler.jpeg.",
    accent: "#eab308",
    className: "lg:col-span-2",
  },
  {
    number: "07",
    title: "Hobi Boyaları",
    subtitle: "Renge dokunan yaratıcı çözümler",
    description:
      "Dekoratif çalışmalar, el sanatları ve farklı yaratıcı uygulamalar için Magellan hobi boya seçenekleri.",
    tags: ["Dekoratif", "El Sanatları", "Yaratıcı Uygulama"],
    cta: "Hobi Boyalarını Keşfet",
    href: "/urun-kategori/hobi-boyalari",
    image:
      "https://images.pexels.com/photos/15079476/pexels-photo-15079476.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Hobi boyaları için fırça ve yaratıcı çalışma malzemeleri",
    source: "Pexels photo 15079476 - paintbrushes and art supplies on wooden table.",
    accent: "#06b6d4",
    className: "lg:col-span-4",
  },
];

const auxiliaryPortfolioItems: Array<{
  title: string;
  description: string;
  note?: string;
  chips: string[];
  cta: string;
  href: string;
  icon: IconKey;
}> = [
  {
    title: "Serigrafi İncelticileri",
    description:
      "Uygun boya sistemlerinde viskozite ve baskı akışının ayarlanmasına yönelik yardımcı ürünler.",
    chips: ["Viskozite", "Baskı Akışı", "Yardımcı Kimyasal"],
    cta: "İncelticileri İncele",
    href: "/urun-kategori/serigrafi-inceltici-geciktirici",
    icon: "droplets",
  },
  {
    title: "Geciktirici & Retarder",
    description:
      "Uygun boya sistemlerinde kuruma davranışını kontrol etmeye ve uzun baskı süreçlerinde çalışma süresini yönetmeye yardımcı ürünler.",
    note:
      "Baskı ortamı, sıcaklık ve üretim hızına göre uygun yardımcı ürün seçilmelidir.",
    chips: ["Kuruma Kontrolü", "Retarder", "Uzun Baskı"],
    cta: "Geciktiricileri İncele",
    href: "/urun-kategori/serigrafi-inceltici-geciktirici",
    icon: "clock",
  },
  {
    title: "G3, G4 & Özel Yardımcı Ürünler",
    description:
      "Farklı serigrafi boya sistemleri ve üretim koşulları için özel yardımcı kimyasal seçenekleri.",
    note:
      "G4 için teknik detay mevcut proje datasında doğrulanmadığı için ürün ailesi olarak gösterilir.",
    chips: ["G3", "G4 - özel yardımcı ürün", "Özel İncelticiler", "Sertleştiriciler"],
    cta: "Detay İçin İletişime Geç",
    href: "/iletisim",
    icon: "flask",
  },
  {
    title: "Sertleştiriciler",
    description:
      "Uyumlu boya sistemlerinde dayanım ve yüzey performansı beklentisine göre kullanılan yardımcı kimyasal ürünler.",
    chips: ["Dayanım", "Yüzey Performansı", "Destek Ürün"],
    cta: "Yardımcı Kimyasalları İncele",
    href: "/urun-kategori/serigrafi-yardimci-kimyasallari",
    icon: "shield",
  },
  {
    title: "Serigrafi Yardımcı Kimyasalları",
    description:
      "Baskı hazırlığından boya uygulamasına kadar üretim sürecini tamamlayan emülsiyon, inceltici, geciktirici ve yardımcı ürün grupları.",
    chips: ["Emülsiyon", "İnceltici", "Geciktirici", "Sertleştirici"],
    cta: "Serigrafi Kimyasallarını İncele",
    href: "/urun-kategori/serigrafi-yardimci-kimyasallari",
    icon: "layers",
  },
];

const quickProductLinks = [
  { label: "Emprime baskı boyaları", href: "/urun-kategori/emprime-baski-boyalari" },
  { label: "Serigrafi baskı boyaları", href: "/urun-kategori/serigrafi-baski-boyalari" },
  { label: "PVC bazlı boya sistemleri", href: "/urun-kategori/pvc-serigrafi-boyalari" },
  { label: "Su bazlı serigrafi boyası", href: "/urun-kategori/su-bazli-serigrafi-boyalari" },
  { label: "Plastisol boya", href: "/urun-kategori/plastisol-boyalari" },
  { label: "UV serigrafi boyası", href: "/urun-kategori/uv-serigrafi-boyalari" },
  { label: "Hobi boyaları", href: "/urun-kategori/hobi-boyalari" },
  { label: "Serigrafi inceltici", href: "/urun-kategori/serigrafi-inceltici-geciktirici" },
  { label: "Serigrafi geciktirici", href: "/urun-kategori/serigrafi-inceltici-geciktirici" },
  { label: "Sertleştiriciler", href: "/urun-kategori/serigrafi-yardimci-kimyasallari" },
  { label: "Emülsiyon", href: "/urun-kategori/serigrafi-emulsiyonlari" },
  { label: "Serigrafi yardımcı kimyasalları", href: "/urun-kategori/serigrafi-yardimci-kimyasallari" },
];

const homeApplicationAreas = [
  {
    title: "Tekstil Baskı",
    description:
      "Tişört, sweatshirt, iş kıyafeti ve promosyon tekstilinde emprime ve plastisol uygulamaları.",
    image:
      "https://images.pexels.com/photos/33650433/pexels-photo-33650433.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Tişört üzerine serigrafi baskı yapan atölye çalışanları",
    className: "lg:col-span-2 lg:row-span-2",
    href: "/urun-kategori/emprime-baski-boyalari",
  },
  {
    title: "Kağıt Poşet & Ambalaj",
    description: "Mağaza, butik ve kurumsal ambalajlarda logo ve marka baskıları.",
    image:
      "https://images.pexels.com/photos/6555182/pexels-photo-6555182.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Baskılı kağıt poşet ve ambalaj uygulaması",
    className: "lg:col-span-1",
    href: "/urun-kategori/serigrafi-baski-boyalari",
  },
  {
    title: "PVC & Plastik",
    description: "PVC, plastik, etiket ve promosyon yüzeylerinde net ve güçlü baskı.",
    image:
      "https://images.pexels.com/photos/7829478/pexels-photo-7829478.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "PVC ve plastik yüzey baskı uygulaması",
    className: "lg:col-span-1",
    href: "/urun-kategori/pvc-serigrafi-boyalari",
  },
  {
    title: "Deri Üstü Baskı",
    description: "Suni deri ve uygun deri yüzeylerinde logo, desen ve işaretleme uygulamaları.",
    image:
      "https://images.pexels.com/photos/8764622/pexels-photo-8764622.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Deri yüzey üzerinde baskı ve işleme uygulaması",
    className: "lg:col-span-1",
    href: "/uygulamalar",
  },
  {
    title: "Etiket & Teknik Baskı",
    description: "Ürün etiketi, teknik işaretleme ve kurumsal üretim parçalarında kontrollü baskı.",
    image:
      "https://images.pexels.com/photos/14920157/pexels-photo-14920157.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Etiket ve teknik ambalaj baskı uygulaması",
    className: "lg:col-span-1",
    href: "/urun-kategori/serigrafi-baski-boyalari",
  },
  {
    title: "Uyarı Levhaları",
    description:
      "Şantiye, fabrika ve saha uygulamalarında okunaklı ve dayanıklı baskı çözümleri.",
    image:
      "https://images.pexels.com/photos/36380562/pexels-photo-36380562.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Türkiye'de çekilmiş Türkçe sarı uyarı levhası",
    className: "lg:col-span-1",
    href: "/uygulamalar",
  },
];

const aboutIntroParagraphs = [
  "Magellan Serigrafi Boyaları olarak serigrafi ve endüstriyel baskı sektörünün farklı ihtiyaçlarına yönelik serigrafi boyaları, emprime baskı boyaları, plastisol boyalar, tekstil baskı boyaları, PVC ve UV serigrafi boyaları ile tamamlayıcı yardımcı kimyasal ürün grupları sunuyoruz.",
  "Amacımız yalnızca boya tedarik etmek değil; baskı yapılacak yüzeyi, hedeflenen renk ve dayanımı, üretim şartlarını ve müşterimizin beklentilerini dikkate alarak doğru ürünü doğru uygulamayla buluşturmak.",
  "Tekstil baskısından ambalaja, PVC ve plastik yüzeylerden deri, etiket, poşet, levha ve promosyon ürünlerine kadar farklı baskı uygulamalarında yüksek performans hedefliyoruz. Ürün seçiminde tutunma gücü, renk canlılığı, örtücülük, viskozite dengesi, kuruma özellikleri ve üretimde tekrarlanabilir kalite gibi önemli kriterleri ön planda tutuyoruz.",
];

const aboutProductGroups = [
  "Serigrafi baskı boyaları",
  "Emprime baskı boyaları",
  "Plastisol boyalar",
  "Tekstil baskı boyaları",
  "PVC serigrafi boyaları",
  "UV serigrafi boyaları",
  "Su bazlı baskı boyaları",
  "Özel renk seçenekleri",
  "Emülsiyon ve kalıp ürünleri",
  "İnceltici, geciktirici ve sertleştirici gibi yardımcı kimyasallar",
];

const aboutContentSections = [
  {
    title: "Serigrafi Boyalarında Profesyonel Çözüm Ortağınız",
    paragraphs: [
      "Her baskı yüzeyi aynı değildir. Kumaşta başarılı sonuç veren bir boya sistemi ile PVC, plastik, deri veya ambalaj yüzeyinde ihtiyaç duyulan özellikler birbirinden farklıdır.",
      "Bu nedenle Magellan'da ürün seçimini yalnızca renk üzerinden değerlendirmiyoruz. Baskı yapılacak malzeme, kullanım alanı, kurutma veya fikse koşulları, istenen dayanım, üretim adedi ve uygulama yöntemi gibi detayları birlikte ele alıyoruz.",
    ],
  },
  {
    title: "Özel Renk ve İhtiyaca Uygun Ürün Yaklaşımı",
    paragraphs: [
      "Baskıda renk yalnızca görsel bir tercih değil, markanın kimliğinin önemli bir parçasıdır.",
      "Standart ürün gruplarının yanında müşterilerimizin baskı yüzeyine, uygulama şekline ve renk beklentisine göre özel renk çözümleri geliştirmeye önem veriyoruz.",
      "Hedefimiz; seri üretimde mümkün olduğunca istikrarlı sonuç veren, baskı kalitesini koruyan ve işletmelerin üretim süreçlerine uyum sağlayan ürün seçenekleri sunmaktır.",
    ],
  },
  {
    title: "Tekstil, Ambalaj ve Endüstriyel Baskı Çözümleri",
    paragraphs: [
      "Magellan ürünleri farklı sektörlerdeki serigrafi ve baskı uygulamalarına yönelik olarak değerlendirilebilir.",
      "Tekstil ve emprime baskıda tişört, sweatshirt, pamuklu kumaş, bez çanta, iş kıyafeti ve promosyon tekstili gibi ürünlerde renk canlılığı, örtücülük ve yıkama dayanımı önem taşır.",
      "PVC ve plastik baskılarda yüzeye güçlü tutunma, kontrollü kuruma ve net baskı ön plana çıkar. Ambalaj, poşet ve etiket baskılarında ise temiz çizgiler, okunabilir logo ve seri üretime uygun çalışma performansı önemlidir.",
    ],
  },
  {
    title: "Kalite, Süreklilik ve Teknik Destek",
    paragraphs: [
      "Serigrafi boya tedariğinde yalnızca ürünün ilk baskıdaki performansı değil, aynı kalitenin sonraki üretimlerde de sürdürülebilmesi önemlidir.",
      "Güçlü tutunma, dengeli viskozite, kaliteli pigment yapısı, renk tutarlılığı, uygulama performansı ve düzenli tedarik sürekliliğini önemsiyoruz.",
      "İhtiyaç halinde baskı yüzeyi, kullanılacak boya sistemi ve üretim şartları değerlendirilerek doğru ürün grubunun belirlenmesi konusunda müşterilerimize yardımcı oluyoruz.",
    ],
  },
  {
    title: "İstanbul'dan Türkiye Geneline Tedarik",
    paragraphs: [
      "İstanbul Başakşehir - İkitelli OSB merkezli yapımızla serigrafi ve baskı sektöründe faaliyet gösteren işletmelere hızlı iletişim, ürün yönlendirmesi ve planlı tedarik çözümleri sunuyoruz.",
      "İstanbul'daki işletmelerin yanı sıra Türkiye'nin farklı bölgelerinde faaliyet gösteren baskı atölyeleri ve üreticiler için de ürün ve sevkiyat taleplerini değerlendiriyoruz.",
      "Düzenli tüketim yapan firmalar için toptan serigrafi boya ve yardımcı kimyasal tedariki konusunda ihtiyaç, ürün grubu ve kullanım miktarına göre planlama yapılabilir.",
    ],
  },
  {
    title: "Neden Magellan?",
    paragraphs: [
      "Bizim için iyi bir serigrafi boyası yalnızca yüzeye renk veren bir ürün değildir.",
      "İyi bir ürün; baskı sırasında operatörün işini kolaylaştırmalı, yüzeye doğru şekilde tutunmalı, istenen rengi vermeli, üretimde gereksiz fireyi azaltmalı ve aynı iş tekrarlandığında güvenilir sonuç sağlamalıdır.",
      "Doğru ürün. Doğru yüzey. Güçlü baskı. Güvenilir tedarik.",
    ],
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function BrandMark({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/95 px-3 py-2 shadow-[0_20px_48px_rgba(0,0,0,0.24)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_55%)]" />
      <Image
        src={brandMedia.logoWide}
        alt="Magellan Serigrafi Boyaları logosu"
        width={576}
        height={178}
        priority
        className={cn(
          "relative h-11 w-36 object-contain object-center sm:h-12 sm:w-40",
          imageClassName
        )}
      />
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.45" cy="6.55" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M13.4 21V13.1H16.05L16.45 9.95H13.4V7.93C13.4 7.02 13.65 6.4 14.96 6.4H16.56V3.57C15.78 3.48 14.99 3.44 14.21 3.45C11.89 3.45 10.3 4.87 10.3 7.48V9.95H7.75V13.1H10.3V21H13.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  titleLevel = "h2",
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleLevel?: "h1" | "h2";
}) {
  const TitleTag = titleLevel;

  return (
    <Reveal className="section-heading mx-auto max-w-3xl text-center">
      <div className="section-heading-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/65 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-[var(--accent-1)] shadow-[0_0_18px_rgba(249,115,22,0.85)]" />
        {eyebrow}
      </div>
      <TitleTag className="section-heading-title mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </TitleTag>
      <p className="section-heading-description mt-5 text-base leading-8 text-white/68 sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))] shadow-[0_0_22px_rgba(34,211,238,0.55)]"
      style={{ scaleX }}
    />
  );
}

function MouseGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.2)_0%,_rgba(249,115,22,0.12)_35%,_transparent_72%)] blur-3xl lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}

export function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#060814]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: easeOut } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.18),_transparent_28%)]" />
      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/95 p-3 shadow-[0_25px_65px_rgba(0,0,0,0.32)]">
          <Image
            src={brandMedia.gif}
            alt="Animasyonlu Magellan marka logosu"
            width={591}
            height={591}
            unoptimized
            priority
            className="h-28 w-28 rounded-[1.2rem] object-cover sm:h-32 sm:w-32"
          />
        </div>
        <div className="space-y-3 text-center">
          <p className="font-display text-lg font-medium tracking-[0.24em] text-white/85">
            Premium Endüstriyel Renk Deneyimi
          </p>
          <div className="h-1.5 w-64 overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CountCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="glass-panel group relative overflow-hidden rounded-[2rem] p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_45%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/58">
        {label}
      </p>
    </div>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof productItems)[number];
  index: number;
}) {
  const rotateX = useSpring(0, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 18, mass: 0.4 });

  const handleMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(relativeY * -10);
    rotateY.set(relativeX * 12);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const whatsappMessage = encodeURIComponent(
    `${product.title} için detaylı bilgi ve teklif almak istiyorum.`
  );

  return (
    <Reveal delay={index * 0.04}>
      <motion.article
        className="paint-card group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1224]/78 p-6 backdrop-blur-2xl"
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
          <div className="relative h-56 overflow-hidden bg-black/30">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(6,8,20,0.08) 0%, rgba(6,8,20,0.46) 46%, rgba(6,8,20,0.92) 100%), linear-gradient(135deg, ${product.accent[0]}40, transparent 44%, ${product.accent[1]}33)`,
              }}
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/70">
                Premium Seri
              </span>
              <div className="flex gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: product.accent[0] }}
                />
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: product.accent[1] }}
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/56">
                {product.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                {product.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-sm leading-7 text-white/68">
            Yüksek verim, dengeli akış ve profesyonel baskı kalitesi için
            geliştirilmiş üretim serisi.
          </p>
          <ul className="space-y-3 text-sm text-white/72">
            {productHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[var(--accent-2)]">
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="button-primary inline-flex items-center flex-1 justify-center"
          >
            Detaylı Bilgi Al
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={companyInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="button-secondary inline-flex items-center flex-1 justify-center"
          >
            WhatsApp
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

function ProductCatalogCard({
  product,
  index,
}: {
  product: (typeof productCatalogItems)[number];
  index: number;
}) {
  const whatsappMessage = encodeURIComponent(
    `Merhaba, ${product.title} ürünü için fiyat ve detaylı bilgi almak istiyorum.`
  );

  return (
    <Reveal delay={index * 0.035}>
      <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-[2rem] p-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem] border border-white/10 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-3 transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--accent-2)]">
            {product.category}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
            {product.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/68">
            {product.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/62"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <a
              href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex w-full items-center justify-center"
            >
              Fiyat için WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SurfaceShowcaseSection() {
  return (
    <section
      id="uygulamalar"
      className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Uygulama Örnekleri"
          title="Poşetten deriye, levhadan tekstile kadar nerede kullanıldığını görün"
          description="Magellan boyaları; kağıt poşet, şeffaf ambalaj, ham deri, deri üstü logo, uyarı levhası, tişört, plastik bardak ve ürün ambalajı gibi farklı yüzeylerde net ve dayanıklı baskı için geliştirilir."
          titleLevel="h1"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {surfaceShowcaseItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article
                className={cn(
                  "group glass-panel h-full overflow-hidden rounded-[2rem] p-3",
                  index === 0 || index === 3 ? "xl:col-span-2" : ""
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#050812]",
                    index === 0 || index === 3
                      ? "aspect-[16/10]"
                      : "aspect-[4/5]"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      index === 0 || index === 3
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,20,0.02),rgba(6,8,20,0.86))]" />
                  <div className="media-caption absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/58">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-sm leading-7 text-white/68">
                    {item.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/62"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="glass-panel rounded-[2rem] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/52">
                Deri Grubu
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                Hem ham derinin rengini hem de deri üstü baskıyı destekler
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/66">
                Ham deri renklendirme, suni deri yüzey uyumu ve hazır deri
                ürünlerde logo/yazı baskısı için esnek formül desteği sunuyoruz.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/52">
                Ambalaj Grubu
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                Kağıt poşet, şeffaf poşet ve ürün paketlerinde temiz marka izi
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/66">
                Logo, QR kod, sosyal medya ve kampanya metinlerinde netlik,
                tutuculuk ve seri üretime uygun baskı akışı hedeflenir.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/52">
                Endüstriyel Grup
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                Uyarı levhası ve saha işaretlerinde okunaklı, kalıcı sonuç
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/66">
                Şantiye, fabrika ve dış ortam ihtiyaçlarında zemin uyumu,
                kontrast ve uzun ömürlü baskı performansı birlikte planlanır.
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: (typeof galleryItems)[number];
  index: number;
  onOpen: () => void;
}) {
  return (
    <Reveal className="mb-6 break-inside-avoid" delay={index * 0.05}>
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left"
      >
        <div className={cn("relative overflow-hidden", item.aspect)}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,20,0.12),rgba(6,8,20,0.9))]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="inline-flex items-center rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/72 backdrop-blur-xl">
              {item.category}
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">
              {item.title}
            </h3>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function GalleryLightbox({
  item,
  onClose,
}: {
  item: (typeof galleryItems)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[85] flex items-center justify-center bg-[#040611]/88 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2.2rem] border border-white/12 bg-[#0d1326]"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.45, ease: easeOut }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/78 backdrop-blur-xl transition hover:text-white"
          aria-label="Galeri görselini kapat"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[22rem] bg-[#090d1d]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/52">
                {item.category}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-white/68">
                {item.summary}
              </p>
            </div>
            <div className="rounded-[1.7rem] border border-white/8 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                Proje Notu
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Numune, uygulama ve üretim ihtiyaçlarınız için özel ton,
                kuruma karakteri ve yüzey uyumu tarafında detaylı destek
                sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BrandLogoArt({
  kind,
  mark,
}: {
  kind: (typeof referenceBrands)[number]["logoKind"];
  mark: string;
}) {
  const baseClass = "h-full w-full text-white";

  if (kind === "starbucks") {
    return (
      <svg viewBox="0 0 180 180" aria-hidden="true" className={baseClass}>
        <circle cx="90" cy="90" r="78" fill="none" stroke="currentColor" strokeWidth="13" />
        <circle cx="90" cy="90" r="50" fill="none" stroke="currentColor" strokeWidth="5" />
        <path
          d="M90 33 103 70l39 1-31 23 11 38-32-23-32 23 11-38-31-23 39-1Z"
          fill="currentColor"
        />
        <path
          d="M55 122c16-11 55-11 70 0M62 141c12-8 44-8 56 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="6"
        />
      </svg>
    );
  }

  if (kind === "nike") {
    return (
      <svg viewBox="0 0 260 140" aria-hidden="true" className={baseClass}>
        <path
          d="M23 91c48 22 105 11 215-57-73 74-156 102-214 76-17-8-21-18-1-19Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (kind === "adidas") {
    return (
      <svg viewBox="0 0 220 160" aria-hidden="true" className={baseClass}>
        <path d="M37 129h32L94 60H62Z" fill="currentColor" />
        <path d="M94 129h34L106 32H72Z" fill="currentColor" />
        <path d="M151 129h35L120 10H86Z" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "puma") {
    return (
      <svg viewBox="0 0 260 150" aria-hidden="true" className={baseClass}>
        <path
          d="M44 88c34-7 59-35 92-43 31-8 58 5 79 24-27-4-51 4-73 17l23 12c-44 9-82 2-121-10Z"
          fill="currentColor"
        />
        <circle cx="213" cy="56" r="8" fill="currentColor" />
        <path
          d="M81 99c-22 12-42 18-62 18 13-12 26-20 45-28Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (kind === "gezer") {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full border-[10px] border-white/80 font-display text-7xl font-black tracking-[-0.08em] text-white">
        G
      </div>
    );
  }

  if (kind === "espresso") {
    return (
      <svg viewBox="0 0 220 170" aria-hidden="true" className={baseClass}>
        <path
          d="M71 35h78l-13 36 37 64H47l37-64Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="13"
        />
        <path d="M73 112c19-16 54-16 74 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10" />
        <circle cx="111" cy="70" r="13" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "mavi") {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-blue-500/50 px-8 font-display text-6xl font-black uppercase tracking-[-0.08em] text-white">
        mavi
      </div>
    );
  }

  if (kind === "lufian") {
    return (
      <div className="flex h-full w-full items-center justify-center border-y-[10px] border-white/70 font-display text-5xl font-semibold uppercase tracking-[0.24em] text-white">
        {mark}
      </div>
    );
  }

  return (
    <div className="font-display text-5xl font-semibold uppercase tracking-[0.22em] text-white">
      {mark}
    </div>
  );
}

function ReferenceLogoCloud() {
  return (
    <Reveal className="mt-14">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-[#e3e7ec] bg-white/72 p-5 shadow-[0_24px_80px_rgba(16,36,62,0.1)] backdrop-blur-2xl sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.1),_transparent_34%)]" />
        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#66717d]">
              Referans Marka Vitrini
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-[#10243e] sm:text-3xl">
              Güven veren markalarla premium baskı algısı
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#66717d]">
            Kurumsal marka dünyasına uygun canlı renk, net yüzey transferi ve
            seri üretim standardı için tasarlanmış referans alanı.
          </p>
        </div>

        <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {referenceBrands.map((brand, index) => {
            const accent = referenceAccents[index % referenceAccents.length];

            return (
              <motion.article
                key={brand.name}
                className="group relative min-h-32 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1020]/78 p-5"
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rotate-[-8deg] opacity-[0.07] transition duration-500 group-hover:scale-110 group-hover:opacity-[0.13]">
                  <BrandLogoArt kind={brand.logoKind} mark={brand.mark} />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 top-5 h-28 w-28 bg-contain bg-center bg-no-repeat opacity-[0.1] grayscale invert saturate-0 transition duration-500 group-hover:opacity-[0.22] sm:h-32 sm:w-32"
                  style={{ backgroundImage: `url(${brand.logoUrl})` }}
                />
                <div className="pointer-events-none absolute -bottom-10 left-4 right-4 font-display text-[4.1rem] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[4.8rem]">
                  {brand.mark}
                </div>
                <div
                  className="absolute inset-0 opacity-45 transition-opacity duration-500 group-hover:opacity-75"
                  style={{
                    background: `radial-gradient(circle at top right, ${accent}33, transparent 48%)`,
                  }}
                />
                <div className="relative flex h-full min-h-24 flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="h-2.5 w-2.5 rounded-full shadow-[0_0_20px_currentColor]"
                      style={{ color: accent, backgroundColor: accent }}
                    />
                    <div className="absolute left-4 top-4 h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04] p-2 opacity-0 backdrop-blur-xl transition duration-500 group-hover:opacity-100">
                      <BrandLogoArt kind={brand.logoKind} mark={brand.mark} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/54">
                      {brand.descriptor}
                    </span>
                  </div>
                  <div className="relative mt-5 flex h-20 items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/12 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                    <Image
                      src={brand.logoUrl}
                      alt={`${brand.name} logosu`}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 90vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="mt-7">
                    <p className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-white sm:text-[1.7rem]">
                      {brand.mark}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/45">
                      {brand.name}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonialItems.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
      <Reveal>
        <div className="space-y-6 text-[#10243e]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe3ec] bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#66717d]">
            <Star className="h-3.5 w-3.5 text-[var(--accent-1)]" />
            Güven Veren Geri Bildirimler
          </div>
          <h3 className="font-display text-3xl font-semibold text-[#10243e] sm:text-4xl">
            İş ortaklarımızın memnuniyetini sadece ürünle değil, süreç
            kalitesiyle kazanıyoruz.
          </h3>
          <p className="max-w-xl text-base leading-8 text-[#66717d]">
            Teknik destekten teslimata kadar tutarlı bir deneyim sunmak, bizim
            için premium marka algısının temelidir.
          </p>
          <div className="flex gap-3">
            {testimonialItems.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  active === index
                    ? "w-12 bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2))]"
                    : "w-3 bg-[#cfd6df]"
                )}
                aria-label={`${item.name} yorumunu göster`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="relative min-h-[25rem]">
        <AnimatePresence mode="wait">
          <motion.article
            key={testimonialItems[active].name}
            className="glass-panel absolute inset-0 flex flex-col justify-between rounded-[2.4rem] p-8 lg:p-10"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <div className="flex items-center gap-2 text-[var(--accent-1)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-10 font-display text-2xl leading-[1.55] text-white sm:text-3xl">
              “{testimonialItems[active].quote}”
            </p>
            <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-lg font-medium text-white">
                  {testimonialItems[active].name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-white/55">
                  {testimonialItems[active].company}
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/58">
                Premium Referans
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = encodeURIComponent(
      `Merhaba, ben ${formData.fullName}. Telefon: ${formData.phone}. Mesajım: ${formData.message}`
    );
    window.open(`${companyInfo.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-[2.2rem] p-7 sm:p-8"
    >
      <div className="grid gap-5">
        <label className="space-y-2 text-sm text-white/70">
          <span>Ad Soyad</span>
          <input
            type="text"
            value={formData.fullName}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
            required
            placeholder="Adınız ve soyadınız"
            className="input-field"
          />
        </label>
        <label className="space-y-2 text-sm text-white/70">
          <span>Telefon</span>
          <input
            type="tel"
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                phone: event.target.value,
              }))
            }
            required
            placeholder="05xx xxx xx xx"
            className="input-field"
          />
        </label>
        <label className="space-y-2 text-sm text-white/70">
          <span>Mesaj</span>
          <textarea
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            required
            rows={5}
            placeholder="İhtiyacınız olan ürün, renk veya üretim detayını paylaşın."
            className="input-field min-h-36 resize-none"
          />
        </label>
      </div>
      <button
        type="submit"
        className="button-primary mt-6 inline-flex w-full items-center justify-center"
      >
        Gönder
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function HeroMediaPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d7e0ea] bg-[#071023] p-4 text-white shadow-[0_28px_70px_rgba(16,36,62,0.22)] lg:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_44%)]" />
      <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#040813]">
        <div className="border-b border-white/8 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/76">
            GERÇEK BASKI UYGULAMASI
          </p>
          <p className="mt-1 text-sm leading-6 text-white/72">
            Gerçek uygulama ve Magellan ürün sunumu
          </p>
        </div>
        <video
          className="aspect-[16/10] w-full bg-[#050812] object-contain"
          controls
          playsInline
          preload="metadata"
          poster={brandMedia.label}
        >
          <source src={brandMedia.video} type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
      <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {applicationShowcaseItems.slice(0, 3).map((item) => (
          <div
            key={item.title}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-3"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1rem] bg-[#050812]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 30vw, 180px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,8,20,0.76))]" />
              <p className="media-caption absolute inset-x-0 bottom-0 px-3 pb-3 font-display text-sm font-semibold text-white">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollHero() {
  return (
    <section
      id="anasayfa"
      className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(249,115,22,0.12),transparent_26%),radial-gradient(circle_at_15%_78%,rgba(16,36,62,0.08),transparent_34%)]" />
      <div className="section-shell relative grid min-h-[calc(100svh-8rem)] min-w-0 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal className="min-w-0">
          <div className="min-w-0">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dbe3ec] bg-white/78 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#34455c] shadow-[0_12px_30px_rgba(16,36,62,0.06)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-1)] shadow-[0_0_14px_rgba(249,115,22,0.45)]" />
              Endüstriyel Baskıda Premium Performans
            </div>
            <h1 className="mt-7 max-w-full text-balance font-display text-[2.15rem] font-semibold leading-[1.08] tracking-normal text-[#10243e] min-[390px]:text-[2.35rem] sm:max-w-[42rem] sm:text-5xl lg:text-[3.9rem] xl:text-[4.15rem]">
              {companyInfo.heroTitle}
            </h1>
            <p className="mt-6 max-w-full text-base leading-8 text-[#66717d] sm:max-w-2xl sm:text-lg">
              Serigrafi ve endüstriyel baskı için emprime, PVC bazlı, su bazlı,
              plastisol ve UV boya sistemleri; hobi boyaları, inceltici,
              geciktirici ve yardımcı kimyasal çözümleri Magellan üretim
              portföyünde bir arada.
            </p>
            <div className="mt-7 flex max-w-full flex-wrap gap-2">
              {homeHeroProductBand.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#dbe3ec] bg-white/82 px-3 py-2 text-[0.64rem] font-semibold tracking-[0.1em] text-[#10243e] shadow-[0_10px_24px_rgba(16,36,62,0.05)] transition hover:border-[var(--accent-1)] hover:text-[var(--accent-1)] min-[390px]:px-3.5 min-[390px]:text-[0.68rem]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                href="/urunler"
                className="button-primary inline-flex min-h-14 w-full max-w-full items-center justify-center px-5 py-4 text-center text-sm sm:w-auto sm:px-6 sm:text-base"
              >
                Ürünleri İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-secondary-light inline-flex min-h-14 w-full max-w-full items-center justify-center px-5 py-4 text-center text-sm sm:w-auto sm:px-6 sm:text-base"
              >
                WhatsApp’tan Teklif Al
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {["Yüksek Tutuculuk", "Özel Renk Seçenekleri", "Kalite Kontrollü Ürünler"].map((item) => (
                <div
                  key={item}
                  className="light-panel flex min-h-[5.25rem] items-center rounded-[1.35rem] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#10243e]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <HeroMediaPanel />
        </Reveal>
      </div>
    </section>
  );
}

function ProductionPortfolioSection() {
  return (
    <section
      id="uretim-portfoyu"
      className="content-visibility relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="section-shell">
        <Reveal className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-1)]">
            MAGELLAN ÜRETİM PORTFÖYÜ
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#10243e] sm:text-5xl">
            Baskıdan Hobiye Geniş Boya ve Kimyasal Üretimi
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#66717d] sm:text-lg">
            Tekstil baskısından PVC ve plastik yüzeylere, UV sistemlerden
            dekoratif hobi uygulamalarına kadar farklı ihtiyaçlar için boya ve
            yardımcı kimyasal ürün grupları üretiyoruz.
          </p>
        </Reveal>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66717d]">
            Baskı & Boya Sistemleri
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[15rem]">
            {productionPortfolioItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.035}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex h-full min-h-[24rem] overflow-hidden rounded-[2rem] border border-[#dbe3ec] bg-[#07172b] shadow-[0_24px_70px_rgba(16,36,62,0.13)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] md:min-h-[22rem] lg:min-h-0",
                    item.className
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes={
                      item.className.includes("col-span-3") || item.className.includes("col-span-4")
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover saturate-[0.92] contrast-[1.04] transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,0.08),rgba(7,23,43,0.9))]" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{ backgroundColor: item.accent }}
                  />
                  <div className="media-caption relative mt-auto p-6 text-white sm:p-7">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      <span style={{ color: item.accent }}>{item.number}</span>
                      <span>Ürün Grubu</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="mt-2 text-sm font-semibold text-white/86">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/74">
                      {item.description}
                    </p>
                    {item.detail && (
                      <p className="mt-3 text-xs leading-6 text-white/58">
                        {item.detail}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/78"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {item.cta}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66717d]">
            Yardımcı Kimyasallar
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {auxiliaryPortfolioItems.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <Reveal key={item.title} delay={index * 0.035}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-[1.55rem] border border-[#dbe3ec] bg-white/82 p-5 shadow-[0_18px_48px_rgba(16,36,62,0.08)] transition hover:-translate-y-1 hover:border-[#f8b37d] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#10243e] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-[#10243e]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#66717d]">
                      {item.description}
                    </p>
                    {item.note && (
                      <p className="mt-3 text-xs leading-6 text-[#7b8795]">
                        {item.note}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-[#dfe6ee] bg-[#f8fafc] px-3 py-1 text-xs font-medium text-[#34455c]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#10243e]">
                      {item.cta}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function UnifiedPortfolioSection() {
  return (
    <section className="content-visibility relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
        <Reveal>
          <article className="relative h-full overflow-hidden rounded-[2rem] bg-[#07172b] p-7 text-white shadow-[0_28px_80px_rgba(7,23,43,0.2)] sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22),transparent_68%)]"
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-1)]">
              TEK ÇATIDA GENİŞ ÜRÜN PORTFÖYÜ
            </p>
            <h2 className="relative mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Baskı boyasından yardımcı kimyasala, üretimin farklı ihtiyaçları
              Magellan&apos;da.
            </h2>
            <p className="relative mt-5 max-w-2xl text-base leading-8 text-white/72">
              Emprime ve tekstil baskı boyalarından PVC bazlı serigrafi
              sistemlerine; su bazlı, plastisol ve UV boyalardan inceltici,
              geciktirici ve diğer yardımcı kimyasallara kadar geniş bir ürün
              portföyü sunuyoruz.
            </p>
            <p className="relative mt-5 max-w-2xl text-base leading-8 text-white/86">
              Baskı yüzeyinizi bize iletin. İhtiyacınıza uygun ürün grubunu
              birlikte belirleyelim.
            </p>
            <a
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary relative mt-8 inline-flex min-h-14 items-center justify-center px-6 py-4"
            >
              WhatsApp&apos;tan Ürün Önerisi Al
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="light-panel h-full rounded-[2rem] p-7 sm:p-9 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66717d]">
              Ne Üretiyoruz?
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#10243e]">
              Magellan Boya Ürün Grupları
            </h2>
            <p className="mt-4 text-base leading-8 text-[#66717d]">
              Emprime baskı boyaları, serigrafi baskı boyaları, PVC bazlı boya
              sistemleri, su bazlı boyalar, plastisol boyalar, UV serigrafi
              boyaları, hobi boyaları, incelticiler, geciktiriciler,
              sertleştiriciler, emülsiyon ve serigrafi yardımcı kimyasalları.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {quickProductLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#dfe6ee] bg-[#f8fafc] px-3.5 py-2 text-xs font-semibold text-[#10243e] transition hover:border-[var(--accent-1)] hover:text-[var(--accent-1)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function ProductSystemsSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const active = scrollHeroProducts[activeProduct];

  return (
    <section className="content-visibility relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-1)]">
              MAGELLAN ÜRÜN SİSTEMLERİ
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#10243e] sm:text-5xl">
              Her Yüzeye Doğru Baskı Sistemi
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#66717d] sm:text-lg">
              Her baskı yüzeyi aynı ürünü istemez. Tekstil, PVC, plastik,
              ambalaj ve özel yüzeyler için uygulama şartlarına uygun Magellan
              boya sistemlerini keşfedin.
            </p>

            <div className="mt-9 grid gap-4">
              {scrollHeroProducts.map((product, index) => (
                <Link
                  key={product.title}
                  href={product.href}
                  onMouseEnter={() => setActiveProduct(index)}
                  onFocus={() => setActiveProduct(index)}
                  className={cn(
                    "group rounded-[1.5rem] border p-5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)]",
                    activeProduct === index
                      ? "border-[#f8b37d] bg-white shadow-[0_20px_54px_rgba(16,36,62,0.1)]"
                      : "border-[#e3e7ec] bg-white/70 hover:border-[#f8b37d] hover:bg-white"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-sm font-semibold text-[var(--accent-1)]">
                      {product.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-semibold text-[#10243e]">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#66717d]">
                        {product.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#dfe6ee] bg-[#f8fafc] px-3 py-1 text-xs font-medium text-[#34455c]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#10243e]">
                        {product.cta}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="lg:sticky lg:top-28">
            <div className="relative min-h-[34rem] overflow-hidden rounded-[2.2rem] border border-[#dbe3ec] bg-[#07172b] p-4 shadow-[0_28px_80px_rgba(16,36,62,0.18)]">
              {scrollHeroProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  className="absolute inset-4 overflow-hidden rounded-[1.7rem]"
                  animate={{
                    opacity: activeProduct === index ? 1 : 0,
                    scale: activeProduct === index ? 1 : 0.97,
                    y: activeProduct === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover saturate-[0.94] contrast-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,0.05),rgba(7,23,43,0.82))]" />
                </motion.div>
              ))}
              <div className="media-caption absolute inset-x-8 bottom-8 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-white/72">
                  {active.number} / Ürün Sistemi
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/72">
                  {active.imageAlt}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ApplicationAreasSection() {
  return (
    <section className="content-visibility relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-1)]">
            UYGULAMA ALANLARI
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#10243e] sm:text-5xl">
            Boyamız Nerelerde Kullanılıyor?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#66717d] sm:text-lg">
            Tekstilden ambalaja, deri ürünlerden teknik işaretlemeye kadar
            farklı yüzeylerde ihtiyaca uygun serigrafi boya sistemleri.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[15rem]">
          {homeApplicationAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.035}>
              <Link
                href={area.href}
                className={cn(
                  "group relative flex h-full min-h-[19rem] overflow-hidden rounded-[1.8rem] border border-[#dbe3ec] bg-[#07172b] shadow-[0_22px_56px_rgba(16,36,62,0.12)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] lg:min-h-0",
                  area.className
                )}
              >
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  sizes={
                    area.className.includes("col-span-2")
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 50vw, 25vw"
                  }
                  className="object-cover saturate-[0.92] contrast-[1.04] transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,0.05),rgba(7,23,43,0.86))] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(7,23,43,0.18),rgba(7,23,43,0.92))]" />
                <div className="media-caption relative mt-auto p-5 text-white transition duration-500 group-hover:-translate-y-1">
                  <h3 className="font-display text-2xl font-semibold">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-white/10 opacity-80 transition group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollWord({
  children,
  opacity,
}: {
  children: ReactNode;
  opacity: MotionValue<number>;
}) {
  return (
    <motion.span className="block" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

function WhyMagellanSection() {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 42%"],
  });
  const renkOpacity = useTransform(scrollYProgress, [0, 0.18], shouldReduceMotion ? [1, 1] : [0.24, 1]);
  const tutuculukOpacity = useTransform(scrollYProgress, [0.18, 0.48], shouldReduceMotion ? [1, 1] : [0.24, 1]);
  const sureklilikOpacity = useTransform(scrollYProgress, [0.48, 0.78], shouldReduceMotion ? [1, 1] : [0.24, 1]);

  return (
    <section
      ref={ref}
      className="content-visibility relative bg-[#f1f5f9]/72 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-1)]">
            NEDEN MAGELLAN?
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.98] text-[#10243e] sm:text-6xl lg:text-[5.2rem]">
            <ScrollWord opacity={renkOpacity}>Renk.</ScrollWord>
            <ScrollWord opacity={tutuculukOpacity}>Tutuculuk.</ScrollWord>
            <ScrollWord opacity={sureklilikOpacity}>Süreklilik.</ScrollWord>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#66717d] sm:text-lg">
            Baskıda iyi sonuç yalnızca doğru rengi bulmak değildir. Ürün, yüzey
            ve üretim şartlarının birlikte doğru çalışması gerekir.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {scrollHeroReasons.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="light-panel h-full rounded-[1.7rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] bg-[#10243e] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--accent-1)]">
                        {item.number}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-[#10243e]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#66717d]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkshopProcessSection() {
  return (
    <section className="content-visibility relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] border border-[#dbe3ec] bg-[#07172b] shadow-[0_28px_80px_rgba(16,36,62,0.16)] lg:aspect-[16/7]">
            <Image
              src="https://images.pexels.com/photos/3966272/pexels-photo-3966272.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Serigrafi baskı atölyesinde üretim süreci"
              fill
              sizes="(max-width: 1024px) 100vw, 82rem"
              className="object-cover saturate-[0.9] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,43,0.92),rgba(7,23,43,0.5),rgba(7,23,43,0.18))]" />
            <div className="media-caption absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center p-6 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                BASKI SÜRECİ
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Doğru ürün, doğru uygulamayla değer kazanır.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/74">
                Yüzey, renk, kuruma koşulları ve beklenen dayanım birlikte
                değerlendirilerek uygun boya sistemi seçilir.
              </p>
              <p className="mt-5 text-xs text-white/52">
                Temsili üretim görseli.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalHomeCtaSection() {
  return (
    <section className="content-visibility relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell">
        <Reveal>
          <article className="relative overflow-hidden rounded-[2.25rem] bg-[#07172b] p-7 text-white shadow-[0_28px_90px_rgba(7,23,43,0.26)] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-8 top-4 font-display text-[5rem] font-black tracking-[-0.08em] text-white/[0.04] sm:text-[8rem] lg:text-[10rem]"
            >
              MAGELLAN
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-1)]">
                  ÜRÜN & TEKNİK DESTEK
                </p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Baskınızı anlatın, doğru ürünü birlikte seçelim.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                  Serigrafi, emprime, plastisol, PVC, UV boya ve yardımcı
                  kimyasal ihtiyaçlarınız için baskı yüzeyinizi ve uygulama
                  detayınızı paylaşın.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={companyInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary inline-flex min-h-14 items-center justify-center px-6 py-4"
                  >
                    WhatsApp’tan Teklif Al
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/urunler"
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/8 px-6 py-4 font-medium text-white transition hover:bg-white/14"
                  >
                    Ürünleri İncele
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["SERİGRAFİ", "EMPRİME", "PVC", "SU BAZLI", "PLASTİSOL", "UV", "HOBİ"].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/12 bg-white/[0.06] px-5 py-4 font-display text-lg font-semibold tracking-[0.14em] text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPageContent() {
  return (
    <section
      id="hakkimizda"
      className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#dbe3ec] bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#66717d]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
            Hakkımızda
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-normal text-[#10243e] sm:text-5xl">
            Magellan Serigrafi Boyaları
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-[#10243e]">
            Baskıda doğru ürün, güçlü sonuç.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <article className="light-panel rounded-[1.8rem] p-7 sm:p-9">
              <div className="space-y-5 text-base leading-8 text-[#66717d]">
                {aboutIntroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center justify-center"
                >
                  Baskınızı Anlatın
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/urunler"
                  className="button-secondary-light inline-flex items-center justify-center"
                >
                  Ürünleri İncele
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="light-panel rounded-[1.8rem] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-1)]">
                Ürün Portföyü
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#10243e]">
                Serigrafi ve baskı boyalarında tamamlayıcı ürün grupları
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutProductGroups.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-[#e3e7ec] bg-[#f8fafc] px-4 py-3 text-sm font-medium text-[#10243e]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {aboutContentSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.035}>
              <article className="light-panel h-full rounded-[1.8rem] p-7">
                <p className="text-xs font-semibold text-[var(--accent-1)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-[#10243e]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#66717d]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <article className="rounded-[1.8rem] border border-[#f5c9aa] bg-[#fff7ed] p-7 text-center shadow-[0_18px_46px_rgba(249,115,22,0.1)]">
            <p className="font-display text-2xl font-semibold text-[#10243e]">
              Magellan Serigrafi Boyaları - Baskının arkasındaki güçlü renk.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={companyInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[72] inline-flex items-center gap-3 rounded-full border border-white/12 bg-[#11c36a] px-5 py-3 text-sm font-medium text-white shadow-[0_20px_50px_rgba(17,195,106,0.35)] backdrop-blur-xl"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircleMore className="h-5 w-5" />
      WhatsApp
    </motion.a>
  );
}

export type SitePage =
  | "home"
  | "about"
  | "products"
  | "applications"
  | "services"
  | "production"
  | "references"
  | "contact";

export function HomePage({ page = "home" }: { page?: SitePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => setNavCompact(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const selectedGalleryItem =
    selectedGalleryIndex !== null ? galleryItems[selectedGalleryIndex] : null;
  const useLightTheme = true;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        useLightTheme
          ? "site-light-page home-light-page bg-[#f7f7f5] text-[#10243e]"
          : "dark-site-page bg-[#060814] text-white"
      )}
    >
      <ScrollProgressBar />
      {!useLightTheme && <MouseGlow />}

      <div className="page-noise pointer-events-none fixed inset-0 z-[1]" />
      <div className="page-grid pointer-events-none fixed inset-0 z-[1]" />
      {!useLightTheme && (
        <>
          <div className="blob blob-orange top-[-8rem] left-[-6rem]" />
          <div className="blob blob-cyan right-[-10rem] top-[18rem]" />
          <div className="blob blob-pink bottom-[10rem] left-[15%]" />
        </>
      )}

      <header className="fixed inset-x-0 top-0 z-[75] px-3 py-3 sm:px-5">
        <motion.div
          className={cn(
            "mx-auto flex max-w-[82rem] items-center justify-between gap-4 rounded-[1.7rem] border px-4 backdrop-blur-2xl transition-all duration-500 sm:px-5 lg:px-6",
            useLightTheme
              ? "border-[#dce3eb] bg-white/90 text-[#10243e] shadow-[0_18px_48px_rgba(16,36,62,0.09)]"
              : "border-white/12 bg-[#070b17]/72 text-white",
            navCompact
              ? "py-2.5 shadow-[0_16px_40px_rgba(16,36,62,0.13)]"
              : "py-3.5"
          )}
        >
          <Link href="/" className="shrink-0">
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] uppercase tracking-[0.08em] transition-colors duration-300 2xl:text-sm",
                  useLightTheme
                    ? "text-[#34455c] hover:text-[#10243e]"
                    : "text-white/66 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary hidden items-center px-5 py-3 text-sm 2xl:inline-flex"
            >
              WhatsApp’tan İletişime Geç
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition xl:hidden",
                useLightTheme
                  ? "border-[#d6dee8] bg-white text-[#10243e]"
                  : "border-white/12 bg-white/5 text-white"
              )}
              aria-label="Menüyü aç"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={cn(
              "fixed inset-0 z-[74] backdrop-blur-xl xl:hidden",
              useLightTheme ? "bg-[#f7f7f5]/86" : "bg-[#040711]/82"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={cn(
                "absolute inset-x-3 top-24 rounded-[1.7rem] border p-6 shadow-[0_24px_60px_rgba(16,36,62,0.16)]",
                useLightTheme
                  ? "border-[#dce3eb] bg-white/94"
                  : "border-white/12 bg-[#09101f]/92"
              )}
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-2xl border px-4 py-4 text-sm uppercase tracking-[0.12em]",
                      useLightTheme
                        ? "border-[#dce3eb] bg-[#f8fafc] text-[#10243e]"
                        : "border-white/8 bg-white/5 text-white/75"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center justify-center"
                >
                  WhatsApp’tan İletişime Geç
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-[10]">
        {page === "home" && <ScrollHero />}

        {page === "home" && (
          <>
            <ProductionPortfolioSection />
            <UnifiedPortfolioSection />
            <ProductSystemsSection />
            <ApplicationAreasSection />
            <WhyMagellanSection />
            <WorkshopProcessSection />
            <FinalHomeCtaSection />
          </>
        )}

        {page === "home" && (
          <section className="content-visibility relative px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
            <div className="section-shell">
              <Reveal>
                <article className="light-panel rounded-[1.8rem] p-7 text-[#10243e] sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#66717d]">
                    Serigrafi Boya Satışı ve Tedarik
                  </p>
                  <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div>
                      <h2 className="font-display text-3xl font-semibold tracking-normal text-[#10243e] sm:text-4xl">
                        Serigrafi boya çeşitleri, emprime baskı boyası ve yardımcı kimyasallar
                      </h2>
                      <p className="mt-5 text-base leading-8 text-[#66717d]">
                        Serigrafi boyaları, emprime baskı boyası, plastisol boya
                        çeşitleri, tekstil baskı boyaları ve ipek baskı boyası
                        arayan işletmeler için ürün gruplarını inceleyin.
                        Emülsiyon, inceltici, geciktirici ve serigrafi yardımcı
                        kimyasalları da aynı ürün portföyünde yer alır. Atölye,
                        matbaa, tekstil ve ambalaj işletmeleri için toptan satış,
                        rekabetçi fiyat ve Türkiye geneli hızlı gönderim seçenekleri
                        sunulur.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Serigrafi boya satışı",
                        "Emprime baskı boyası",
                        "Hobi boyaları",
                        "PVC bazlı serigrafi boyası",
                        "Su bazlı serigrafi boyası",
                        "Plastisol boya çeşitleri",
                        "UV serigrafi boyası",
                        "Serigrafi inceltici ve geciktirici",
                        "G3 / G4 özel yardımcı ürünler",
                        "Emülsiyon ve yardımcı kimyasallar",
                        "Boya üretimi ve toptan boya tedariki",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.15rem] border border-[#e3e7ec] bg-[#f8fafc] px-4 py-4 text-sm font-medium text-[#10243e]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/urunler"
                      className="button-primary inline-flex items-center justify-center"
                    >
                      Serigrafi Boya Çeşitlerini İncele
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={companyInfo.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary-light inline-flex items-center justify-center"
                    >
                      Uygun Fiyat ve Toptan Satış Bilgisi Al
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          </section>
        )}

        {page === "about" && <AboutPageContent />}

        {page === "products" && (
        <section
          id="urunler"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Ürün Portföyü"
              title="Serigrafi Boyaları, Emprime Baskı Boyası ve Plastisol Çeşitleri"
              description="Serigrafi boya, emprime baskı boyası, plastisol boya, tekstil baskı boyası, emülsiyon, inceltici, geciktirici ve serigrafi yardımcı kimyasalları için fiyat bilgisi WhatsApp üzerinden hızlıca paylaşılır."
              titleLevel="h1"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCatalogItems.map((item, index) => (
                <ProductCatalogCard
                  key={item.title}
                  product={item}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-24">
              <Reveal className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-1)] shadow-[0_0_18px_rgba(249,115,22,0.85)]" />
                  Ürün Grupları
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Her baskı yüzeyi için profesyonel boya çözümleri
                </h3>
                <p className="mt-5 text-base leading-8 text-white/68">
                  Tüm seriler özel renk, özel formül ve yüksek pigment kalitesi
                  ile üretilebilir.
                </p>
              </Reveal>

              <div className="mt-12 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
                {productItems.map((item, index) => (
                  <ProductCard key={item.title} product={item} index={index} />
                ))}
              </div>
            </div>

            <Reveal className="mt-16">
              <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                  Popüler Aramalar
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                  Serigrafi boya ürün gruplarını detaylı inceleyin
                </h2>
                <div className="mt-6 grid gap-7 lg:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                      Ürün Kategorileri
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {featuredProductCategoryPages.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/urun-kategori/${item.slug}`}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/68 transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                        >
                          {item.eyebrow}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                      Ürün Detayları
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {productDetailPages.slice(0, 26).map((item) => (
                        <Link
                          key={item.slug}
                          href={`/urun/${item.slug}`}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/68 transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                        >
                          {item.focusKeyword}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                      SEO Sayfaları
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {featuredSeoLandingLinks.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/68 transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                        >
                          {item.eyebrow}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
        </div>
      </section>
        )}

      {page === "applications" && <SurfaceShowcaseSection />}

        {page === "services" && (
        <section
          id="hizmetler"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Sadece boya değil, baskı sürecini güçlendiren teknik partnerlik sunuyoruz"
              description="Renk eşleştirme, proses desteği ve sürdürülebilir tedarik yaklaşımı ile işinize katma değer sağlayan bir çözüm ortağı olarak çalışıyoruz."
              titleLevel="h1"
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {serviceItems.map((item, index) => {
                const Icon = iconMap[item.icon as IconKey];
                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <article className="glass-panel relative overflow-hidden rounded-[2rem] p-8">
                      <div className="absolute -right-12 top-0 h-28 w-28 rounded-full bg-[var(--accent-1)]/20 blur-3xl" />
                      <div className="relative flex items-start gap-5">
                        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-1)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/68">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {page === "services" && (
        <section className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Neden Biz"
              title="Veriyle desteklenen tedarik disiplini, premium kalite yaklaşımı"
              description="Markanıza güç, baskı sürecinize süreklilik kazandıran bir boya tedarik yapısı için teknik uzmanlık ve istikrarlı kaliteyi bir araya getiriyoruz."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {statItems.map((item) => (
                <Reveal key={item.label}>
                  <CountCard {...item} />
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {advantageItems.map((item, index) => {
                const Icon = iconMap[item.icon as IconKey];
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <article className="glass-panel h-full rounded-[2rem] p-7">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-3)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {page === "production" && (
        <section
          id="uretim"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Üretim Süreci"
              title="Analizden teslimata kadar net, kontrollü ve animasyonlu ürün akışı"
              description="Her aşama ölçülebilir kalite ve termin güveni için tasarlanır; böylece ortaya sadece bir ürün değil, süreklilik sağlayan bir iş ortaklığı çıkar."
              titleLevel="h1"
            />

            <div className="relative mt-16 space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[linear-gradient(180deg,rgba(249,115,22,0.95),rgba(34,211,238,0.18))] lg:space-y-8 lg:before:left-1/2">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon as IconKey];
                return (
                  <Reveal key={step.title} delay={index * 0.06}>
                    <div
                      className={cn(
                        "relative grid gap-4 lg:grid-cols-2 lg:gap-10",
                        index % 2 === 0 ? "lg:text-right" : ""
                      )}
                    >
                      <div
                        className={cn(
                          index % 2 === 0 ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"
                        )}
                      >
                        <article className="glass-panel rounded-[2rem] p-7">
                          <p className="text-xs uppercase tracking-[0.28em] text-white/54">
                            Adım {index + 1}
                          </p>
                          <div className="mt-4 flex items-center gap-4 lg:justify-start">
                            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-1)]">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-white/68">
                            {step.description}
                          </p>
                        </article>
                      </div>
                      <div className="absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#0f162c] text-sm font-semibold text-white shadow-[0_0_0_8px_rgba(8,11,22,0.8)] lg:left-1/2 lg:-translate-x-1/2">
                        {index + 1}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {page === "references" && (
        <section
          id="referanslar"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Referanslar / Galeri"
              title="Gerçek Baskı Uygulamaları ve Ürün Örnekleri"
              description="Farklı yüzeylerde kullanılan baskı örnekleri, ürün performansını ve marka görünümünü daha net değerlendirmenize yardımcı olur."
              titleLevel="h1"
            />

            <ReferenceLogoCloud />

            <div className="mt-16 columns-1 gap-6 md:columns-2 2xl:columns-3">
              {galleryItems.map((item, index) => (
                <GalleryCard
                  key={item.title}
                  item={item}
                  index={index}
                  onOpen={() => setSelectedGalleryIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>
        )}

        {page === "references" && (
        <section className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Müşteri Yorumları"
              title="Uzun vadeli işlerde güven veren müşteri deneyimleri"
              description="Uzun vadeli iş ilişkilerinde en önemli ölçüt güven, renk tutarlılığı ve süreç kalitesidir. Bu alan da tam olarak o algıyı destekler."
            />
            <div className="mt-14">
              <TestimonialSlider />
            </div>
          </div>
        </section>
        )}

        {page === "contact" && (
        <section
          id="iletisim"
          className="content-visibility relative px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="İletişim"
              title="Teklif, renk danışmanlığı ve tedarik planlaması için doğrudan bize ulaşın"
              description="Telefon, WhatsApp ve sosyal medya üzerinden hızlıca iletişime geçebilir; formu doldurarak talebinizi doğrudan WhatsApp mesajına dönüştürebilirsiniz."
              titleLevel="h1"
            />

            <div className="mt-14 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
              <div className="space-y-6">
                <Reveal>
                  <article className="glass-panel rounded-[2rem] p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <a
                        href={companyInfo.phoneHref}
                        className="contact-tile"
                      >
                        <Phone className="h-5 w-5 text-[var(--accent-1)]" />
                        <div>
                          <p className="contact-label">Telefon</p>
                          <p className="contact-value">{companyInfo.phoneDisplay}</p>
                        </div>
                      </a>
                      <a
                        href={companyInfo.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile"
                      >
                        <MessageCircleMore className="h-5 w-5 text-[#20c96b]" />
                        <div>
                          <p className="contact-label">WhatsApp</p>
                          <p className="contact-value">Hızlı teklif ve bilgi</p>
                        </div>
                      </a>
                      <a
                        href={companyInfo.instagramHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile"
                      >
                        <InstagramIcon className="h-5 w-5 text-[var(--accent-3)]" />
                        <div>
                          <p className="contact-label">Instagram</p>
                          <p className="contact-value">@magellanboya</p>
                        </div>
                      </a>
                      <a
                        href={companyInfo.facebookHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile"
                      >
                        <FacebookIcon className="h-5 w-5 text-[var(--accent-2)]" />
                        <div>
                          <p className="contact-label">Facebook</p>
                          <p className="contact-value">Kurumsal profil</p>
                        </div>
                      </a>
                      <a
                        href={companyInfo.mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile sm:col-span-2"
                      >
                        <MapPinned className="h-5 w-5 text-[var(--accent-1)]" />
                        <div>
                          <p className="contact-label">Adres</p>
                          <p className="contact-value">{companyInfo.address}</p>
                        </div>
                      </a>
                    </div>
                  </article>
                </Reveal>

                <Reveal delay={0.05}>
                  <article className="glass-panel overflow-hidden rounded-[2rem] p-3">
                    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8">
                      <iframe
                        title="Magellan Serigrafi Boyaları konumu"
                        src={companyInfo.mapsEmbedHref}
                        loading="lazy"
                        allowFullScreen
                        className="h-[20rem] w-full border-0 grayscale"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[1.3rem] border border-white/12 bg-black/40 px-4 py-3 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                          <MapPinned className="h-5 w-5 text-[var(--accent-2)]" />
                          <p className="text-sm text-white/78">
                            {companyInfo.address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={companyInfo.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/78 transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                    >
                      Google Maps&apos;te Aç
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              </div>

              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
        )}
      </main>

      <footer className="relative z-[10] border-t border-white/8 px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <BrandMark
              className="inline-block px-4 py-3"
              imageClassName="h-14 w-[11.5rem] object-contain sm:h-16 sm:w-[13rem]"
            />
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
              Serigrafi, tekstil ve endüstriyel baskı çözümleri için yüksek
              kaliteli boya seçenekleri; canlı renkler, güçlü tutuculuk ve kurumsal
              güven duygusunu bir arada sunar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary inline-flex items-center"
              >
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.phoneHref}
                className="button-secondary inline-flex items-center"
              >
                {companyInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="footer-title">Kurumsal</p>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Hakkımızda", href: "/hakkimizda" },
                  { label: "Ürünler", href: "/urunler" },
                  { label: "Blog", href: "/blog" },
                  { label: "İletişim", href: "/iletisim" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-title">Serigrafi Boyaları</p>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Plastisol Boya", href: "/plastisol-boya" },
                  { label: "PVC Serigrafi Boyası", href: "/pvc-serigrafi-boyasi" },
                  { label: "UV Serigrafi Boyası", href: "/uv-serigrafi-boyasi" },
                  { label: "Su Bazlı Serigrafi Boyası", href: "/su-bazli-serigrafi-boyasi" },
                  { label: "Serigrafi Baskı Boyaları", href: "/serigrafi-baski-boyalari" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-title">Serigrafi Kimyasalları</p>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Emülsiyon", href: "/emulsiyon" },
                  { label: "Emülsiyon Sökücü", href: "/emulsiyon-sokucu" },
                  { label: "İnceltici", href: "/inceltici" },
                  { label: "Geciktirici", href: "/geciktirici" },
                  { label: "Sertleştirici", href: "/sertlestirici" },
                  { label: "Serigrafi Kimyasalları", href: "/serigrafi-kimyasallari" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-title">Teknik Rehberler</p>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Serigrafi Nedir?", href: "/blog/serigrafi-nedir" },
                  { label: "Plastisol Boya Nedir?", href: "/blog/plastisol-boya-nedir" },
                  { label: "PVC Serigrafi Boyası Nedir?", href: "/blog/pvc-serigrafi-boyasi-nedir" },
                  { label: "UV Serigrafi Boyası Nedir?", href: "/blog/uv-serigrafi-boyasi-nedir" },
                  { label: "Ragle Nedir?", href: "/blog/ragle-nedir" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-shell mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Magellan Serigrafi Boyaları — Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-4 text-white/38">
            <span className="inline-flex items-center gap-2">
              <MonitorSmartphone className="h-4 w-4" />
              Hızlı ve mobil uyumlu deneyim
            </span>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />

      <AnimatePresence>
        {selectedGalleryItem && (
          <GalleryLightbox
            item={selectedGalleryItem}
            onClose={() => setSelectedGalleryIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
