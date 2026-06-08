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
};

export const seoLandingPages: SeoLandingPage[] = [
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

export const seoLandingPageMap = new Map(
  seoLandingPages.map((page) => [page.slug, page])
);

