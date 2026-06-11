export type SeoLandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  focusKeyword: string;
  relatedKeywords: string[];
  productFocus: string;
  audience: string;
  surfaceExamples: string;
  processNote: string;
  qualityNote: string;
  priceNote: string;
  ctaNote: string;
  relatedSlugs?: string[];
};

const coreSeoLandingPages: SeoLandingPage[] = [
  {
    slug: "serigrafi-boyalari",
    title: "Serigrafi Boyaları | Plastisol ve Baskı Boyaları | Magellan Boya",
    description:
      "Serigrafi boyaları, plastisol boya, tekstil baskı boyası ve yardımcı kimyasallar için Magellan Boya'nın profesyonel üretim ve tedarik çözümlerini inceleyin.",
    h1: "Serigrafi Boyaları ve Profesyonel Baskı Çözümleri",
    eyebrow: "Serigrafi Boyaları",
    focusKeyword: "serigrafi boyaları",
    relatedKeywords: [
      "serigrafi boya",
      "serigrafi baskı boyası",
      "serigrafi boya çeşitleri",
      "toptan serigrafi boya",
    ],
    productFocus:
      "PVC, UV, plastisol, su bazlı, tekstil ve yardımcı kimyasal grupları",
    audience:
      "matbaalar, ambalaj üreticileri, tekstil baskı atölyeleri ve endüstriyel baskı yapan işletmeler",
    surfaceExamples:
      "kağıt poşet, şeffaf ambalaj, tekstil, plastik, deri, uyarı levhası ve promosyon ürünleri",
    processNote:
      "renk beklentisi, baskı yüzeyi, kuruma süresi, tutuculuk ihtiyacı ve üretim adedi birlikte değerlendirilir",
    qualityNote:
      "yüksek pigment kalitesi, dengeli viskozite, güçlü yüzey tutunması ve seri üretimde kararlı sonuç",
    priceNote:
      "uygun fiyatlı serigrafi boya arayan işletmeler için rekabetçi fiyat ve toptan tedarik yaklaşımı",
    ctaNote:
      "hangi yüzeye baskı yapılacağını ve beklenen performansı paylaşarak doğru ürün grubuna hızlıca yönlenebilirsiniz",
  },
  {
    slug: "plastisol-boya",
    title: "Plastisol Boya | Tekstil Baskı Boyaları | Magellan Boya",
    description:
      "Plastisol boya çeşitleri, tekstil baskı boyaları ve serigrafi baskı çözümleri için Magellan Boya'nın üretim ve tedarik yaklaşımını inceleyin.",
    h1: "Plastisol Boya ve Tekstil Baskı İçin Kalıcı Renk Çözümleri",
    eyebrow: "Plastisol Boya",
    focusKeyword: "plastisol boya",
    relatedKeywords: [
      "plastisol boyaları",
      "plastisol boya imalatçısı",
      "tekstil baskı boyası",
      "ipek baskı boyası",
    ],
    productFocus:
      "tekstil baskı için plastisol seriler, transfer baskıya uygun renkler ve özel ton çalışmaları",
    audience:
      "tişört baskı atölyeleri, tekstil üreticileri, promosyon firmaları ve seri baskı yapan işletmeler",
    surfaceExamples:
      "pamuklu kumaş, pamuk-polyester karışımları, tişört, sweatshirt, çanta ve tekstil aksesuarları",
    processNote:
      "kumaş tipi, baskı kalınlığı, opaklık ihtiyacı, fikse koşulları ve renk canlılığı birlikte değerlendirilir",
    qualityNote:
      "canlı renk, örtücülük, elastikiyet, yıkama dayanımı ve üretim tekrarlanabilirliği",
    priceNote:
      "plastisol boya çeşitlerinde toptan alım ve düzenli tedarik için rekabetçi fiyat politikası",
    ctaNote:
      "baskı yapılacak kumaş türünü ve hedeflenen renk etkisini paylaşarak uygun plastisol seriyi seçebilirsiniz",
  },
  {
    slug: "serigrafi-boya-imalatcisi",
    title: "Serigrafi Boya İmalatçısı | Magellan Boya",
    description:
      "Serigrafi boya imalatçısı Magellan Boya; plastisol, PVC, UV, tekstil baskı boyaları ve yardımcı kimyasallar için üretim ve tedarik hizmeti sunar.",
    h1: "Serigrafi Boya İmalatçısı Olarak Üretim ve Tedarik Gücü",
    eyebrow: "Boya İmalatı",
    focusKeyword: "serigrafi boya imalatçısı",
    relatedKeywords: [
      "serigrafi boya imalatı",
      "serigrafi boya üreticisi",
      "serigrafi boya tedarikçisi",
      "toptan serigrafi boya",
    ],
    productFocus:
      "müşteri ihtiyacına göre formüle edilen serigrafi boya grupları ve yardımcı ürünler",
    audience:
      "sürekli üretim yapan matbaalar, kurumsal baskı tedarikçileri ve yüksek adetli üretim yapan firmalar",
    surfaceExamples:
      "ambalaj, poşet, tekstil, plastik ürün, deri yüzey, etiket ve endüstriyel işaretleme yüzeyleri",
    processNote:
      "sipariş öncesinde yüzey, baskı yöntemi, renk standardı, kuruma beklentisi ve sevkiyat planı analiz edilir",
    qualityNote:
      "partiler arası renk tutarlılığı, kararlı viskozite ve üretim hattında kolay uygulanabilir yapı",
    priceNote:
      "imalatçıdan tedarik avantajı ile uygun maliyetli ve sürdürülebilir satın alma planı",
    ctaNote:
      "mevcut numunenizi, renk kodunuzu veya baskı yüzeyinizi paylaşarak imalat sürecini hızlandırabilirsiniz",
  },
  {
    slug: "serigrafi-boya-ureticisi",
    title: "Serigrafi Boya Üreticisi | Magellan Boya",
    description:
      "Serigrafi boya üreticisi Magellan Boya; serigrafi baskı boyası, plastisol boya, emülsiyon ve yardımcı kimyasallarda profesyonel çözümler sunar.",
    h1: "Serigrafi Boya Üreticisi Magellan Boya",
    eyebrow: "Üretici Firma",
    focusKeyword: "serigrafi boya üreticisi",
    relatedKeywords: [
      "serigrafi boya",
      "serigrafi boya imalatı",
      "serigrafi boya tedarikçisi",
      "serigrafi yardımcı kimyasalları",
    ],
    productFocus:
      "serigrafi baskı boyaları, plastisol seriler, kalıp kimyasalları ve üretime destek veren yardımcı ürünler",
    audience:
      "renk standardı, teknik destek ve düzenli ürün tedariği isteyen profesyonel baskı işletmeleri",
    surfaceExamples:
      "kağıt, karton, plastik, tekstil, deri, metal kaplı yüzeyler ve endüstriyel ambalajlar",
    processNote:
      "ürün seçimi yapılırken yüzey enerjisi, mürekkep geçişi, elek yapısı, kuruma şekli ve kullanım şartları dikkate alınır",
    qualityNote:
      "güçlü pigment, yüzeye uyum, baskı netliği, depolama stabilitesi ve sevkiyat sürekliliği",
    priceNote:
      "üretici firma avantajı ile toptan serigrafi boya ihtiyaçlarında rekabetçi fiyat seçenekleri",
    ctaNote:
      "uygun ürün önerisi için baskı yaptığınız yüzeyi, renk beklentinizi ve tüketim miktarınızı iletebilirsiniz",
  },
  {
    slug: "serigrafi-emulsiyonu",
    title: "Serigrafi Emülsiyonu | Kalıp Hazırlama Ürünleri | Magellan Boya",
    description:
      "Serigrafi emülsiyonu, emülsiyon serigrafi ürünleri ve kalıp hazırlama yardımcıları için Magellan Boya'nın profesyonel çözümlerini inceleyin.",
    h1: "Serigrafi Emülsiyonu ve Net Kalıp Hazırlama Çözümleri",
    eyebrow: "Kalıp Hazırlama",
    focusKeyword: "serigrafi emülsiyonu",
    relatedKeywords: [
      "emülsiyon serigrafi",
      "serigrafi emülsiyon",
      "serigrafi yardımcı kimyasalları",
      "emülsiyon sökücü",
    ],
    productFocus:
      "net pozlama, temiz detay ve stabil şablon için kullanılan fotoemülsiyon grupları",
    audience:
      "ince detay baskısı yapan atölyeler, tekstil baskıcıları, tabela üreticileri ve serigrafi kalıp hazırlayan işletmeler",
    surfaceExamples:
      "tekstil baskı kalıpları, ambalaj baskı şablonları, grafik baskı kalıpları ve endüstriyel işaretleme çalışmaları",
    processNote:
      "elek numarası, pozlama ekipmanı, desen detayı, boya tipi ve kalıp dayanımı birlikte değerlendirilir",
    qualityNote:
      "kenar netliği, pozlama kararlılığı, kolay açılma, baskı sırasında dayanım ve kalıp tekrarlanabilirliği",
    priceNote:
      "düzenli kalıp hazırlayan işletmeler için uygun fiyatlı ve sürekliliği olan emülsiyon tedariği",
    ctaNote:
      "kullandığınız elek numarasını ve baskı boyası tipini paylaşarak doğru emülsiyon grubunu seçebilirsiniz",
  },
  {
    slug: "emulsiyon-sokucu",
    title: "Emülsiyon Sökücü | Serigrafi Kalıp Temizleme | Magellan Boya",
    description:
      "Emülsiyon sökücü, serigrafi kalıp temizleme ürünleri ve yardımcı kimyasallar için Magellan Boya'nın profesyonel tedarik çözümlerini inceleyin.",
    h1: "Emülsiyon Sökücü ve Serigrafi Kalıp Temizleme Ürünleri",
    eyebrow: "Kalıp Temizleme",
    focusKeyword: "emülsiyon sökücü",
    relatedKeywords: [
      "serigrafi yardımcı kimyasalları",
      "serigrafi emülsiyon",
      "emülsiyon serigrafi",
      "serigrafi kalıp temizleme",
    ],
    productFocus:
      "serigrafi kalıplarında emülsiyon kalıntılarını çözmeye yardımcı temizlik ürünleri",
    audience:
      "kalıp yenileme yapan serigrafi atölyeleri, tekstil baskı üreticileri ve baskı ekipmanını düzenli temizleyen işletmeler",
    surfaceExamples:
      "ipek kalıplar, polyester elekler, tekstil baskı şablonları ve tekrar kullanılacak serigrafi çerçeveleri",
    processNote:
      "kalıp üzerindeki emülsiyon tipi, bekleme süresi, uygulama yoğunluğu ve yıkama koşulları birlikte değerlendirilir",
    qualityNote:
      "etkili çözme performansı, kontrollü uygulama, kalıp yenileme kolaylığı ve üretim aralarında zaman tasarrufu",
    priceNote:
      "atölye tüketimine göre toptan alım ve düzenli tedarik için rekabetçi fiyat seçenekleri",
    ctaNote:
      "kalıp temizleme sıklığınızı ve kullandığınız emülsiyon tipini paylaşarak uygun yardımcı kimyasalı belirleyebilirsiniz",
  },
  {
    slug: "serigrafi-yardimci-kimyasallari",
    title: "Serigrafi Yardımcı Kimyasalları | Magellan Boya",
    description:
      "Serigrafi yardımcı kimyasalları, emülsiyon, emülsiyon sökücü, inceltici ve geciktirici ürünleri için Magellan Boya tedarik çözümleri.",
    h1: "Serigrafi Yardımcı Kimyasalları ve Üretim Destek Ürünleri",
    eyebrow: "Yardımcı Kimyasallar",
    focusKeyword: "serigrafi yardımcı kimyasalları",
    relatedKeywords: [
      "emülsiyon serigrafi",
      "serigrafi emülsiyon",
      "inceltici",
      "geciktirici",
    ],
    productFocus:
      "emülsiyon, emülsiyon sökücü, inceltici, geciktirici, sertleştirici ve baskı sürecini destekleyen kimyasallar",
    audience:
      "serigrafi üretiminde kaliteyi standartlaştırmak isteyen atölyeler ve seri baskı yapan işletmeler",
    surfaceExamples:
      "tekstil, plastik, ambalaj, etiket, deri ve endüstriyel baskı hatlarında kullanılan boya sistemleri",
    processNote:
      "boya tipi, ortam sıcaklığı, kuruma süresi, kalıp dayanımı ve üretim temposu dikkate alınır",
    qualityNote:
      "baskı kararlılığı, uygulama kolaylığı, kalıp temizliği, renk geçişlerinde kontrol ve ürün verimliliği",
    priceNote:
      "uygun fiyatlı yardımcı kimyasal tedariği için düzenli alım ve ürün grubu bazlı planlama yapılabilir",
    ctaNote:
      "mevcut boya grubunuzu ve yaşadığınız uygulama sorununu paylaşarak doğru yardımcı ürüne ulaşabilirsiniz",
  },
  {
    slug: "tekstil-baski-boyasi",
    title: "Tekstil Baskı Boyası | Plastisol ve İpek Baskı Boyaları | Magellan Boya",
    description:
      "Tekstil baskı boyası, plastisol boya, ipek baskı boyası ve özel renk çözümleri için Magellan Boya'nın profesyonel üretim yaklaşımını inceleyin.",
    h1: "Tekstil Baskı Boyası ve İpek Baskı İçin Profesyonel Çözümler",
    eyebrow: "Tekstil Baskı",
    focusKeyword: "tekstil baskı boyası",
    relatedKeywords: [
      "ipek baskı boyası",
      "plastisol boya",
      "serigrafi baskı boyası",
      "serigrafi boya çeşitleri",
    ],
    productFocus:
      "tekstil yüzeylere uygun plastisol, su bazlı ve özel renk baskı boyaları",
    audience:
      "tişört baskıcıları, tekstil markaları, promosyon üreticileri ve moda atölyeleri",
    surfaceExamples:
      "tişört, sweatshirt, bez çanta, iş kıyafeti, çocuk giyim ürünleri ve tekstil aksesuarları",
    processNote:
      "kumaş yapısı, baskı alanı, renk örtücülüğü, yıkama dayanımı ve üretim adedi birlikte değerlendirilir",
    qualityNote:
      "canlı renk, esnek tutuş, yıkama performansı, baskı netliği ve tekrar üretimde renk tutarlılığı",
    priceNote:
      "toptan tekstil baskı boyası alımlarında rekabetçi fiyat ve düzenli sevkiyat planı",
    ctaNote:
      "baskı yapılacak kumaşı, renk sayısını ve hedeflenen tutuş etkisini paylaşarak doğru boya grubunu seçebilirsiniz",
  },
  {
    slug: "pvc-serigrafi-boyasi",
    title: "PVC Serigrafi Boyası | PVC Baskı Boyaları | Magellan Boya",
    description:
      "PVC serigrafi boyası, PVC yüzey baskıları ve özel renk çözümleri için Magellan Boya'nın serigrafi boya üretim ve tedarik hizmetlerini inceleyin.",
    h1: "PVC Serigrafi Boyası ve PVC Yüzeyler İçin Baskı Çözümleri",
    eyebrow: "PVC Baskı",
    focusKeyword: "PVC serigrafi boyası",
    relatedKeywords: [
      "serigrafi boya",
      "serigrafi baskı boyası",
      "serigrafi boya imalatçısı",
      "serigrafi boya tedarikçisi",
    ],
    productFocus:
      "PVC yüzeylere tutunma sağlayan serigrafi baskı boyaları ve özel ton üretimleri",
    audience:
      "PVC ürün üreticileri, etiketçiler, promosyon firmaları ve endüstriyel baskı işletmeleri",
    surfaceExamples:
      "PVC etiket, plastik ambalaj, promosyon ürünleri, teknik parça yüzeyleri ve dekoratif PVC baskılar",
    processNote:
      "PVC yüzeyin esnekliği, parlaklığı, yüzey işlemi, solvent dayanımı ve renk örtücülüğü dikkate alınır",
    qualityNote:
      "güçlü tutunma, yüzeyde net görüntü, çizilme dayanımı ve seri üretimde stabil uygulama",
    priceNote:
      "PVC serigrafi boyası ihtiyaçlarında düzenli alım yapan işletmelere rekabetçi tedarik seçenekleri",
    ctaNote:
      "PVC numunenizi veya baskı yapılacak yüzey bilgisini paylaşarak uygun boya formülünü belirleyebilirsiniz",
  },
  {
    slug: "uv-serigrafi-boyasi",
    title: "UV Serigrafi Boyası | Hızlı Kürlenen Baskı Boyaları | Magellan Boya",
    description:
      "UV serigrafi boyası, parlak ve hızlı kürlenen baskı çözümleri için Magellan Boya'nın ürün ve teknik tedarik yaklaşımını inceleyin.",
    h1: "UV Serigrafi Boyası ve Hızlı Kürlenen Baskı Çözümleri",
    eyebrow: "UV Baskı",
    focusKeyword: "UV serigrafi boyası",
    relatedKeywords: [
      "serigrafi boya",
      "serigrafi baskı boyası",
      "serigrafi boya çeşitleri",
      "endüstriyel baskı boyaları",
    ],
    productFocus:
      "UV kürlenme sistemlerine uyumlu, parlak ve örtücü serigrafi boya seçenekleri",
    audience:
      "yüksek adetli ambalaj, etiket, plastik ve endüstriyel baskı üreticileri",
    surfaceExamples:
      "etiket, ambalaj, plastik ürünler, tanıtım materyalleri ve parlak yüzeyli baskı uygulamaları",
    processNote:
      "UV lamba gücü, hat hızı, yüzey tipi, mürekkep kalınlığı ve nihai dayanım beklentisi değerlendirilir",
    qualityNote:
      "hızlı kürlenme, parlak görünüm, güçlü örtücülük, net detay ve üretim hızına uyum",
    priceNote:
      "UV serigrafi boyası tedariğinde ürün tüketimi ve üretim temposuna göre rekabetçi fiyatlandırma",
    ctaNote:
      "kullandığınız UV sistemini ve baskı yüzeyini paylaşarak doğru ürün alternatifini öğrenebilirsiniz",
  },
  {
    slug: "toptan-serigrafi-boya",
    title: "Toptan Serigrafi Boya | Uygun Fiyatlı Tedarik | Magellan Boya",
    description:
      "Toptan serigrafi boya, plastisol boya, tekstil baskı boyası ve yardımcı kimyasallar için Magellan Boya'nın rekabetçi tedarik çözümlerini inceleyin.",
    h1: "Toptan Serigrafi Boya ve Rekabetçi Tedarik Çözümleri",
    eyebrow: "Toptan Tedarik",
    focusKeyword: "toptan serigrafi boya",
    relatedKeywords: [
      "uygun fiyatlı serigrafi boya",
      "serigrafi boyaları en uygun",
      "serigrafi boya tedarikçisi",
      "serigrafi boya imalatçısı",
    ],
    productFocus:
      "serigrafi boyaları, plastisol seriler, tekstil baskı boyaları ve yardımcı kimyasal grupları",
    audience:
      "düzenli boya tüketen matbaalar, tekstil baskı atölyeleri, ambalaj üreticileri ve bayilik/toptan alım yapan firmalar",
    surfaceExamples:
      "tekstil, poşet, ambalaj, plastik, deri, etiket ve endüstriyel baskı yüzeyleri",
    processNote:
      "aylık tüketim, ürün grubu, renk ihtiyacı, sevkiyat takvimi ve stok planı birlikte değerlendirilir",
    qualityNote:
      "tedarik sürekliliği, parti kararlılığı, ürün çeşitliliği ve teknik destekle satın alma güvenliği",
    priceNote:
      "uygun fiyat arayan işletmeler için düşük kalite algısı yaratmadan rekabetçi ve sürdürülebilir fiyat yaklaşımı",
    ctaNote:
      "toptan ihtiyaç listenizi paylaşarak ürün grubu bazlı fiyat ve sevkiyat planı talep edebilirsiniz",
  },
  {
    slug: "serigrafi-boya-fiyatlari",
    title: "Serigrafi Boya Fiyatları | Uygun Fiyatlı Serigrafi Boya | Magellan Boya",
    description:
      "Serigrafi boya fiyatları; ürün tipi, yüzey, tüketim miktarı ve teknik beklentiye göre değişir. Magellan Boya'dan uygun fiyatlı teklif alın.",
    h1: "Serigrafi Boya Fiyatları ve Uygun Tedarik Planı",
    eyebrow: "Fiyat ve Teklif",
    focusKeyword: "serigrafi boya fiyatları",
    relatedKeywords: [
      "uygun fiyatlı serigrafi boya",
      "serigrafi boyaları en uygun",
      "serigrafi boyaları en ucuz",
      "toptan serigrafi boya",
    ],
    productFocus:
      "serigrafi boya, plastisol boya, tekstil baskı boyası, emülsiyon, inceltici ve yardımcı kimyasallar",
    audience:
      "bütçe planı yapmak isteyen atölyeler, yeni baskı hattı kuran işletmeler ve toptan alım yapan firmalar",
    surfaceExamples:
      "tekstil, poşet, plastik, ambalaj, deri, levha ve promosyon ürün baskıları",
    processNote:
      "fiyat belirlenirken ürün tipi, renk, ambalaj miktarı, teknik beklenti, tüketim düzeni ve sevkiyat ihtiyacı değerlendirilir",
    qualityNote:
      "sadece düşük fiyat değil, baskı performansı, fire oranı, uygulama kolaylığı ve tedarik sürekliliği de hesaba katılır",
    priceNote:
      "en ucuz algısı yerine uygun fiyatlı, rekabetçi ve uzun vadede verimli tedarik planı hedeflenir",
    ctaNote:
      "ihtiyacınız olan ürünleri ve yaklaşık tüketim miktarını paylaşarak hızlı fiyat teklifi alabilirsiniz",
  },
];

function regionalPage(
  slug: string,
  location: string,
  areaNote: string,
  relatedSlugs: string[] = ["serigrafi-boyalari", "plastisol-boya", "toptan-serigrafi-boya"]
): SeoLandingPage {
  return {
    slug,
    title: `${location} Serigrafi Boya | Plastisol ve Baskı Boyaları | Magellan Boya`,
    description: `${location} serigrafi boya ihtiyaçları için Magellan Boya; serigrafi boyaları, plastisol boya, tekstil baskı boyası ve yardımcı kimyasallarda tedarik çözümleri sunar.`,
    h1: `${location} Serigrafi Boya ve Baskı Boyaları Tedariki`,
    eyebrow: `${location} Serigrafi Boya`,
    focusKeyword: `${location} serigrafi boya`,
    relatedKeywords: [
      `${location} serigrafi boyaları`,
      `${location} plastisol boya`,
      `${location} serigrafi boya tedarikçisi`,
      `${location} toptan serigrafi boya`,
    ],
    productFocus:
      "serigrafi boyaları, plastisol boya, tekstil baskı boyası, PVC serigrafi boyası, UV boya ve yardımcı kimyasal grupları",
    audience: `${areaNote} içinde üretim yapan tekstil atölyeleri, ambalaj firmaları, matbaalar, tabela üreticileri ve endüstriyel baskı işletmeleri`,
    surfaceExamples:
      "tekstil ürünleri, poşet, ambalaj, plastik yüzeyler, deri ürünler, etiket, levha ve promosyon baskıları",
    processNote:
      "bölgedeki üretim temposu, yüzey tipi, istenen renk standardı, ürün tüketim miktarı, termin beklentisi ve sevkiyat planı birlikte değerlendirilir",
    qualityNote:
      "bölgesel üretim ihtiyacına uygun hızlı iletişim, kararlı ürün kalitesi, doğru ürün yönlendirmesi ve düzenli tedarik sürekliliği",
    priceNote:
      "toptan alım yapan işletmeler için rekabetçi fiyat, uygun maliyetli tedarik ve üretimi aksatmayan sevkiyat yaklaşımı",
    ctaNote:
      `${location} ve çevresindeki üretim ihtiyacınızı, baskı yüzeyinizi ve tüketim miktarınızı paylaşarak ürün önerisi ve fiyat bilgisi alabilirsiniz`,
    relatedSlugs,
  };
}

function cityPage(
  slug: string,
  city: string,
  industryNote: string,
  relatedSlugs: string[] = ["serigrafi-boya-ureticisi", "toptan-serigrafi-boya", "serigrafi-boya-fiyatlari"]
): SeoLandingPage {
  return {
    slug,
    title: `${city} Serigrafi Boya | Toptan Baskı Boyaları | Magellan Boya`,
    description: `${city} serigrafi boya, plastisol boya, tekstil baskı boyası ve serigrafi yardımcı kimyasalları için Magellan Boya'nın tedarik çözümlerini inceleyin.`,
    h1: `${city} Serigrafi Boya ve Toptan Baskı Boyaları`,
    eyebrow: `${city} Tedarik`,
    focusKeyword: `${city} serigrafi boya`,
    relatedKeywords: [
      `${city} serigrafi boyaları`,
      `${city} plastisol boya`,
      `${city} tekstil baskı boyası`,
      `${city} serigrafi boya tedarikçisi`,
    ],
    productFocus:
      "serigrafi boya, plastisol boya, PVC ve UV serigrafi boyası, emülsiyon, inceltici, geciktirici ve baskı yardımcı kimyasalları",
    audience: `${industryNote} içinde faaliyet gösteren üreticiler, baskı atölyeleri, ambalaj firmaları ve tekstil işletmeleri`,
    surfaceExamples:
      "tekstil, ambalaj, poşet, plastik ürünler, etiket, deri yüzeyler, promosyon ürünleri ve endüstriyel baskı yüzeyleri",
    processNote:
      "şehir dışı tedarikte ürün tipi, tüketim sıklığı, kargo planı, ambalaj miktarı, renk ihtiyacı ve üretim takvimi birlikte değerlendirilir",
    qualityNote:
      "şehirler arası tedarikte güvenilir stok planı, ürün kararlılığı, teknik destek ve zamanında gönderim",
    priceNote:
      "düzenli alımlarda rekabetçi fiyat, toptan tedarik avantajı ve toplam üretim maliyetini düşürmeye odaklanan ürün seçimi",
    ctaNote:
      `${city} için ürün grubunuzu ve yaklaşık tüketiminizi ileterek sevkiyat ve fiyat bilgisini hızlıca öğrenebilirsiniz`,
    relatedSlugs,
  };
}

function productPage(
  slug: string,
  name: string,
  descriptionFocus: string,
  relatedSlugs: string[] = ["serigrafi-boyalari", "serigrafi-yardimci-kimyasallari", "serigrafi-boya-fiyatlari"]
): SeoLandingPage {
  return {
    slug,
    title: `${name} | Kullanım Alanları ve Tedarik | Magellan Boya`,
    description: `${name} kullanım alanları, teknik özellikleri, avantajları ve uygulama örnekleri için Magellan Boya'nın profesyonel tedarik yaklaşımını inceleyin.`,
    h1: `${name} Kullanım Alanları ve Profesyonel Tedarik Çözümleri`,
    eyebrow: name,
    focusKeyword: name.toLocaleLowerCase("tr-TR"),
    relatedKeywords: [
      `${name} tedariki`,
      `${name} fiyatları`,
      `${name} uygulaması`,
      "serigrafi boya çeşitleri",
    ],
    productFocus: descriptionFocus,
    audience:
      "baskı kalitesini standartlaştırmak isteyen serigrafi atölyeleri, tekstil baskı üreticileri, ambalaj firmaları ve endüstriyel baskı işletmeleri",
    surfaceExamples:
      "tekstil, PVC, plastik, ambalaj, etiket, deri, poşet, levha ve promosyon ürün uygulamaları",
    processNote:
      "ürünün kullanılacağı yüzey, uygulama yöntemi, kuruma süresi, dayanım beklentisi, tüketim miktarı ve yardımcı kimyasal uyumu birlikte değerlendirilir",
    qualityNote:
      "uygulamada stabil performans, doğru viskozite, yüzeyle uyum, tekrarlanabilir kalite ve üretim sürecinde kontrol edilebilir sonuç",
    priceNote:
      "düzenli tedarik ve toptan alımlarda uygun fiyatlı, rekabetçi ve teknik beklentiye uygun ürün seçimi",
    ctaNote:
      `${name} için kullanım alanınızı ve teknik beklentinizi paylaşarak doğru ürün önerisi ve fiyat bilgisi alabilirsiniz`,
    relatedSlugs,
  };
}

function commercialPage(
  slug: string,
  keyword: string,
  angle: string,
  relatedSlugs: string[] = ["serigrafi-boya-imalatcisi", "serigrafi-boya-ureticisi", "toptan-serigrafi-boya"]
): SeoLandingPage {
  return {
    slug,
    title: `${keyword} | Kurumsal Tedarik | Magellan Boya`,
    description: `${keyword} arayan işletmeler için Magellan Boya; serigrafi boya üretimi, plastisol boya, toptan satış ve yardımcı kimyasal tedarik çözümleri sunar.`,
    h1: `${keyword} İçin Kurumsal Serigrafi Boya Çözümleri`,
    eyebrow: keyword,
    focusKeyword: keyword.toLocaleLowerCase("tr-TR"),
    relatedKeywords: [
      "serigrafi boya imalatı",
      "serigrafi boya üreticisi",
      "toptan serigrafi boya",
      "serigrafi boya tedarikçisi",
    ],
    productFocus:
      "serigrafi boyaları, plastisol boya, tekstil baskı boyası, PVC ve UV seriler, emülsiyon ve yardımcı kimyasal grupları",
    audience:
      "kurumsal satın alma yapan üreticiler, düzenli boya tüketen atölyeler, bayilik ve toptan tedarik modeliyle çalışan işletmeler",
    surfaceExamples:
      "tekstil, ambalaj, poşet, plastik, deri, etiket, levha, promosyon ve endüstriyel baskı yüzeyleri",
    processNote:
      `${angle}; ürün tipi, tüketim hacmi, termin beklentisi, kalite standardı ve teknik destek ihtiyacı birlikte ele alınır`,
    qualityNote:
      "kurumsal üretimlerde parti kararlılığı, teknik süreklilik, iletişim hızı, sevkiyat planı ve ürün çeşitliliği",
    priceNote:
      "toptan satış ve düzenli alımlarda rekabetçi fiyat, sürdürülebilir tedarik ve toplam maliyeti düşüren ürün planlaması",
    ctaNote:
      "kurumsal ürün ihtiyacınızı, aylık tüketiminizi ve sevkiyat beklentinizi paylaşarak tedarik modeli hakkında bilgi alabilirsiniz",
    relatedSlugs,
  };
}

const regionalSeoPages: SeoLandingPage[] = [
  regionalPage("istanbul-serigrafi-boya", "İstanbul", "İstanbul'un tekstil, ambalaj, matbaa ve endüstriyel üretim bölgeleri"),
  regionalPage("basaksehir-serigrafi-boya", "Başakşehir", "Başakşehir, İkitelli OSB ve çevresindeki sanayi yapısı"),
  regionalPage("esenyurt-serigrafi-boya", "Esenyurt", "Esenyurt'un ambalaj, tekstil, plastik ve üretim odaklı sanayi bölgeleri"),
  regionalPage("ikitelli-serigrafi-boya", "İkitelli", "İkitelli OSB, Aykosan ve çevresindeki yoğun üretim altyapısı"),
  regionalPage("merter-serigrafi-boya", "Merter", "Merter'in tekstil, hazır giyim, baskı ve promosyon üretim ekosistemi"),
  regionalPage("zeytinburnu-serigrafi-boya", "Zeytinburnu", "Zeytinburnu'nun tekstil, deri, etiket ve atölye ağı"),
  regionalPage("bayrampasa-serigrafi-boya", "Bayrampaşa", "Bayrampaşa'nın matbaa, ambalaj, plastik ve üretim işletmeleri"),
  regionalPage("tekstilkent-serigrafi-boya", "Tekstilkent", "Tekstilkent ve çevresindeki tekstil ticareti, üretim ve baskı işletmeleri"),
  regionalPage("aykosan-serigrafi-boya", "Aykosan", "Aykosan Sanayi Sitesi ve İkitelli çevresindeki atölye, imalat ve baskı işletmeleri"),
];

const citySeoPages: SeoLandingPage[] = [
  cityPage("gaziantep-serigrafi-boya", "Gaziantep", "Gaziantep'in ambalaj, tekstil, halı, plastik ve sanayi üretim yapısı"),
  cityPage("konya-serigrafi-boya", "Konya", "Konya'nın makine, ambalaj, plastik, reklam ve üretim sanayisi"),
  cityPage("ankara-serigrafi-boya", "Ankara", "Ankara'nın tabela, reklam, matbaa, ambalaj ve kurumsal üretim yapısı"),
  cityPage("kocaeli-serigrafi-boya", "Kocaeli", "Kocaeli'nin endüstriyel üretim, ambalaj, plastik ve yan sanayi yapısı"),
  cityPage("bursa-serigrafi-boya", "Bursa", "Bursa'nın tekstil, otomotiv yan sanayi, ambalaj ve promosyon üretim gücü"),
  cityPage("izmir-serigrafi-boya", "İzmir", "İzmir'in ambalaj, tekstil, reklam, plastik ve ihracat odaklı üretim yapısı"),
];

const additionalProductSeoPages: SeoLandingPage[] = [
  productPage("deri-boyasi", "Deri Boyası", "ham deri, suni deri ve deri üstü logo baskı uygulamalarına uygun boya ve yüzey çözümleri", ["serigrafi-boyalari", "pvc-serigrafi-boyasi", "serigrafi-boya-fiyatlari"]),
  productPage("su-bazli-serigrafi-boyasi", "Su Bazlı Serigrafi Boyası", "su bazlı baskı sistemlerine uygun, daha yumuşak tutuş ve yüzey uyumu hedefleyen boya grupları", ["tekstil-baski-boyasi", "serigrafi-boyalari", "serigrafi-boya-fiyatlari"]),
  productPage("pvc-bazli-serigrafi-boyasi", "PVC Bazlı Serigrafi Boyası", "PVC bazlı yüzeylerde güçlü tutunma, net baskı ve dayanım hedefleyen serigrafi boya çözümleri", ["pvc-serigrafi-boyasi", "pvc-baski-boyasi", "serigrafi-boyalari"]),
  productPage("uv-bazli-serigrafi-boyasi", "UV Bazlı Serigrafi Boyası", "UV bazlı serigrafi sistemlerinde hızlı kürlenme, parlak görünüm ve seri üretime uygun baskı boyaları", ["uv-serigrafi-boyasi", "uv-kurumali-serigrafi-boyasi", "serigrafi-boyalari"]),
  productPage("su-bazli-tekstil-boyasi", "Su Bazlı Tekstil Boyası", "tekstil yüzeylerde daha yumuşak tutuş, nefes alan yapı ve su bazlı baskı beklentilerine uygun boya çözümleri", ["su-bazli-serigrafi-boyasi", "tekstil-baski-boyasi", "tekstil-serigrafi-boyasi"]),
  productPage("tekstil-serigrafi-boyasi", "Tekstil Serigrafi Boyası", "tişört, sweatshirt, bez çanta ve tekstil ürünlerinde serigrafi baskıya uygun boya grupları", ["tekstil-baski-boyasi", "tisort-baski-boyasi", "plastisol-boya"]),
  productPage("plastik-serigrafi-boyasi", "Plastik Serigrafi Boyası", "plastik yüzeylerde marka, logo ve teknik baskı uygulamaları için geliştirilen serigrafi boya çözümleri", ["pvc-serigrafi-boyasi", "polipropilen-baski-boyasi", "polietilen-baski-boyasi"]),
  productPage("cam-serigrafi-boyasi", "Cam Serigrafi Boyası", "cam yüzeylerde dekoratif, teknik ve marka odaklı serigrafi baskı ihtiyaçlarına yönelik boya çözümleri", ["uv-serigrafi-boyasi", "metal-serigrafi-boyasi", "serigrafi-baski-boyasi"]),
  productPage("metal-serigrafi-boyasi", "Metal Serigrafi Boyası", "metal yüzeylerde dayanım, net görüntü ve endüstriyel işaretleme beklentilerine uygun serigrafi boya çözümleri", ["endustriyel-serigrafi-boyasi", "uv-serigrafi-boyasi", "serigrafi-baski-boyasi"]),
  productPage("ambalaj-serigrafi-boyasi", "Ambalaj Serigrafi Boyası", "ambalaj yüzeylerinde okunabilir logo, net renk ve seri üretim uyumu sağlayan serigrafi baskı boyaları", ["poset-baski-boyasi", "etiket-baski-boyasi", "serigrafi-boyalari"]),
  productPage("etiket-baski-boyasi", "Etiket Baskı Boyası", "etiket ve marka baskılarında net yazı, güçlü renk ve yüzey uyumu hedefleyen baskı boyası çözümleri", ["ambalaj-serigrafi-boyasi", "uv-serigrafi-boyasi", "serigrafi-baski-boyasi"]),
  productPage("promosyon-baski-boyasi", "Promosyon Baskı Boyası", "promosyon ürünlerinde logo, marka ve kurumsal baskılar için serigrafi boya tedarik çözümleri", ["plastik-serigrafi-boyasi", "pvc-serigrafi-boyasi", "serigrafi-baski-boyasi"]),
  productPage("kagit-serigrafi-boyasi", "Kağıt Serigrafi Boyası", "kağıt, karton ve butik ambalaj yüzeylerinde serigrafi baskı için kullanılan boya çözümleri", ["poset-baski-boyasi", "ambalaj-serigrafi-boyasi", "serigrafi-boyalari"]),
  productPage("poset-baski-boyasi", "Poşet Baskı Boyası", "kağıt poşet, plastik poşet ve ambalaj poşeti yüzeylerinde marka baskısı için kullanılan boya çözümleri", ["ambalaj-serigrafi-boyasi", "kagit-serigrafi-boyasi", "polietilen-baski-boyasi"]),
  productPage("polietilen-baski-boyasi", "Polietilen Baskı Boyası", "polietilen yüzeylerde tutunma, esneklik ve ambalaj baskı performansı hedefleyen boya çözümleri", ["poset-baski-boyasi", "plastik-serigrafi-boyasi", "ambalaj-serigrafi-boyasi"]),
  productPage("polipropilen-baski-boyasi", "Polipropilen Baskı Boyası", "PP yüzeylerde baskı netliği, yüzeye uyum ve seri üretim dayanımı için geliştirilen boya çözümleri", ["plastik-serigrafi-boyasi", "pvc-baski-boyasi", "serigrafi-baski-boyasi"]),
  productPage("pvc-baski-boyasi", "PVC Baskı Boyası", "PVC yüzeylerde etiket, promosyon, teknik parça ve ambalaj baskılarına uygun boya çözümleri", ["pvc-serigrafi-boyasi", "pvc-bazli-serigrafi-boyasi", "plastik-serigrafi-boyasi"]),
  productPage("uv-kurumali-serigrafi-boyasi", "UV Kurumalı Serigrafi Boyası", "UV kürlenme sistemlerinde hızlı üretim, parlak baskı ve yüksek adetli uygulamalar için serigrafi boya çözümleri", ["uv-serigrafi-boyasi", "uv-bazli-serigrafi-boyasi", "etiket-baski-boyasi"]),
  productPage("tisort-baski-boyasi", "Tişört Baskı Boyası", "tişört ve hazır giyim ürünlerinde plastisol, tekstil ve serigrafi baskıya uygun boya çözümleri", ["tekstil-baski-boyasi", "tekstil-serigrafi-boyasi", "plastisol-boya"]),
  productPage("serigrafi-baski-boyasi", "Serigrafi Baskı Boyası", "farklı yüzeylerde net, dayanıklı ve profesyonel serigrafi baskı sonuçları için boya çözümleri", ["serigrafi-boyalari", "plastisol-boya", "serigrafi-boya-fiyatlari"]),
  productPage("endustriyel-serigrafi-boyasi", "Endüstriyel Serigrafi Boyası", "endüstriyel üretim hatlarında dayanım, netlik ve düzenli tedarik beklentilerine uygun serigrafi boya çözümleri", ["metal-serigrafi-boyasi", "uv-serigrafi-boyasi", "serigrafi-boya-ureticisi"]),
  productPage("emulsiyon", "Emülsiyon", "serigrafi kalıp hazırlığında kullanılan fotoemülsiyon ve şablon oluşturma ürünleri", ["serigrafi-emulsiyonu", "emulsiyon-sokucu", "serigrafi-yardimci-kimyasallari"]),
  productPage("sertlestirici", "Sertleştirici", "baskı dayanımını artırmaya yardımcı sertleştirici ve performans destek ürünleri", ["serigrafi-yardimci-kimyasallari", "pvc-serigrafi-boyasi", "uv-serigrafi-boyasi"]),
  productPage("inceltici", "İnceltici", "serigrafi boya uygulamalarında akış, viskozite ve uygulama kontrolü sağlayan inceltici ürünleri", ["serigrafi-yardimci-kimyasallari", "serigrafi-boyalari", "serigrafi-boya-fiyatlari"]),
  productPage("geciktirici", "Geciktirici", "kuruma süresini kontrol etmek ve baskı sırasında uygulama rahatlığı sağlamak için kullanılan geciktirici ürünleri", ["serigrafi-yardimci-kimyasallari", "tekstil-baski-boyasi", "plastisol-boya"]),
];

const commercialSeoPages: SeoLandingPage[] = [
  commercialPage("serigrafi-boya-fabrikasi", "Serigrafi Boya Fabrikası", "fabrika üretimi yaklaşımında formül, kalite kontrol ve tedarik sürekliliği birlikte planlanır"),
  commercialPage("toptan-serigrafi-boyasi", "Toptan Serigrafi Boyası", "toptan satışta ürün grubu, ambalaj miktarı ve düzenli sevkiyat planı önemlidir", ["toptan-serigrafi-boya", "serigrafi-boya-fiyatlari", "serigrafi-boya-tedarikcisi"]),
  commercialPage("serigrafi-kimyasallari", "Serigrafi Kimyasalları", "kimyasal tedarikinde boya uyumu, kalıp temizliği, inceltme ve kuruma kontrolü birlikte değerlendirilir", ["serigrafi-yardimci-kimyasallari", "emulsiyon", "inceltici"]),
  commercialPage("serigrafi-yardimci-malzemeleri", "Serigrafi Yardımcı Malzemeleri", "yardımcı malzeme seçiminde üretim alışkanlığı, boya tipi, kalıp hazırlığı ve temizlik süreci dikkate alınır", ["serigrafi-yardimci-kimyasallari", "emulsiyon-sokucu", "geciktirici"]),
];

export const seoLandingPages: SeoLandingPage[] = [
  ...coreSeoLandingPages,
  ...regionalSeoPages,
  ...citySeoPages,
  ...additionalProductSeoPages,
  ...commercialSeoPages,
];

export const seoLandingPageMap = new Map(
  seoLandingPages.map((page) => [page.slug, page])
);
