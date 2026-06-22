export type ProductDetailPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  focusKeyword: string;
  categorySlug: string;
  categoryLabel: string;
  image: string;
  productType: string;
  color: string;
  shortDescription: string;
  surfaces: string[];
  uses: string[];
  technicalNotes: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedProductSlugs: string[];
  relatedBlogSlugs: string[];
  relatedLandingSlugs: string[];
};

function productDetailPage(
  slug: string,
  name: string,
  categorySlug: string,
  categoryLabel: string,
  image: string,
  productType: string,
  color: string,
  surfaces: string[],
  uses: string[],
  technicalNotes: string[],
  relatedProductSlugs: string[],
  relatedBlogSlugs: string[],
  relatedLandingSlugs: string[]
): ProductDetailPage {
  return {
    slug,
    title: `${name} | Kullanım Alanları ve Teklif | Magellan Boya`,
    description: `${name} kullanım alanları, yüzey uyumu, teknik seçim ve fiyat teklifi için Magellan Boya ürün sayfasını inceleyin.`,
    h1: `${name} Kullanım Alanları ve Teknik Tedarik Bilgisi`,
    eyebrow: categoryLabel,
    focusKeyword: name.toLocaleLowerCase("tr-TR"),
    categorySlug,
    categoryLabel,
    image,
    productType,
    color,
    shortDescription: `${name}; ${surfaces.slice(0, 3).join(", ")} gibi yüzeylerde ${uses[0].toLocaleLowerCase("tr-TR")} ihtiyacı için değerlendirilen profesyonel bir Magellan ürün grubudur.`,
    surfaces,
    uses,
    technicalNotes,
    faq: [
      {
        question: `${name} hangi yüzeylerde kullanılır?`,
        answer: `${name}; ${surfaces.join(", ")} gibi yüzeylerde, uygulama koşulları ve beklenen dayanım birlikte değerlendirilerek kullanılabilir.`,
      },
      {
        question: `${name} fiyatı nasıl alınır?`,
        answer:
          "Fiyat; ürün tipi, renk, ambalaj miktarı, yüzey beklentisi ve düzenli alım planına göre netleşir. En doğru teklif için ürün ihtiyacı WhatsApp üzerinden paylaşılmalıdır.",
      },
      {
        question: `${name} için teknik destek veriliyor mu?`,
        answer:
          "Evet. Baskı yüzeyi, hedef renk, elek yapısı, kuruma sistemi ve üretim adedi paylaşıldığında uygun ürün ve yardımcı kimyasal önerisi yapılabilir.",
      },
    ],
    relatedProductSlugs,
    relatedBlogSlugs,
    relatedLandingSlugs,
  };
}

const pvcRelated = [
  "pvc-serigrafi-boyasi-nedir",
  "pvc-boya-kullanim-alanlari",
  "serigrafi-boya-secimi",
];

const plastisolRelated = [
  "plastisol-boya-nedir",
  "tekstil-baski-boyasi-secimi",
  "plastisol-boya-ile-pvc-boya-farki",
];

const uvRelated = [
  "uv-serigrafi-boyasi-nedir",
  "uv-boya-ile-pvc-boya-farki",
  "serigrafi-boya-secimi",
];

const chemicalRelated = [
  "emulsiyon-nasil-kullanilir",
  "serigrafi-kalip-hazirlama",
  "serigrafi-baski-hatalari",
];

export const productDetailPages: ProductDetailPage[] = [
  productDetailPage(
    "pvc-altin-yaldiz-serigrafi-boyasi",
    "PVC Altın Yaldız Serigrafi Boyası",
    "pvc-yaldiz-boyalari",
    "PVC Yaldız Boyaları",
    "/products/pvc-altin-yaldiz.png",
    "PVC bazlı serigrafi boyası",
    "Altın yaldız",
    ["PVC", "suni deri", "karton", "etiket", "premium ambalaj", "promosyon ürünleri"],
    ["Metalik altın efektli logo ve dekoratif baskı", "Premium ambalaj baskısı", "Suni deri ve PVC üstü marka uygulaması"],
    ["Yaldız pigmenti homojen karıştırılmalıdır.", "Yüzey temizliği tutunma performansını doğrudan etkiler.", "Seri üretim öncesi küçük numune baskı önerilir."],
    ["pvc-gumus-yaldiz-serigrafi-boyasi", "pvc-beyaz-serigrafi-boyasi", "serigrafi-inceltici"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "pvc-baski-boyasi", "serigrafi-baski-boyasi"]
  ),
  productDetailPage(
    "pvc-gumus-yaldiz-serigrafi-boyasi",
    "PVC Gümüş Yaldız Serigrafi Boyası",
    "pvc-yaldiz-boyalari",
    "PVC Yaldız Boyaları",
    "/products/pvc-gumus-yaldiz.png",
    "PVC bazlı serigrafi boyası",
    "Gümüş yaldız",
    ["PVC", "suni deri", "etiket", "ambalaj", "dekoratif plastik", "karton"],
    ["Gümüş metalik efektli baskı", "Dekoratif marka uygulaması", "Etiket ve ambalaj vurgusu"],
    ["Baskıdan önce boya karışımı stabil hale getirilmelidir.", "İnce detaylarda elek ve rakle seçimi önemlidir.", "Kuruma ve yüzey dayanımı test edilmelidir."],
    ["pvc-altin-yaldiz-serigrafi-boyasi", "pvc-siyah-serigrafi-boyasi", "serigrafi-sertlestirici"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "pvc-baski-boyasi", "serigrafi-baski-boyasi"]
  ),
  productDetailPage(
    "pvc-beyaz-serigrafi-boyasi",
    "PVC Beyaz Serigrafi Boyası",
    "pvc-serigrafi-boyalari",
    "PVC Serigrafi Boyaları",
    "/products/pvc-gumus-yaldiz.png",
    "PVC serigrafi boyası",
    "Beyaz",
    ["PVC", "plastik", "suni deri", "etiket", "ambalaj", "promosyon"],
    ["Opak beyaz logo baskısı", "Zemin hazırlığı ve alt baskı", "Plastik ve PVC yüzey işaretleme"],
    ["Beyaz tonlarda örtücülük beklentisi netleştirilmelidir.", "Yüzey enerjisi düşük plastiklerde test baskısı yapılmalıdır.", "Viskozite uygulama hızına göre ayarlanmalıdır."],
    ["pvc-siyah-serigrafi-boyasi", "pvc-kirmizi-serigrafi-boyasi", "serigrafi-inceltici"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "plastik-serigrafi-boyasi", "pvc-serigrafi-boyasi-fiyatlari"]
  ),
  productDetailPage(
    "pvc-siyah-serigrafi-boyasi",
    "PVC Siyah Serigrafi Boyası",
    "pvc-serigrafi-boyalari",
    "PVC Serigrafi Boyaları",
    "/products/pvc-gumus-yaldiz.png",
    "PVC serigrafi boyası",
    "Siyah",
    ["PVC", "plastik", "suni deri", "etiket", "karton", "ambalaj"],
    ["Net siyah logo ve yazı baskısı", "Teknik işaretleme", "Ambalaj ve etiket baskısı"],
    ["Siyah baskıda çizgi netliği için elek seçimi önemlidir.", "Yüzey temizliği baskı dayanımını artırır.", "Kuruma davranışı üretim temposuna göre planlanmalıdır."],
    ["pvc-beyaz-serigrafi-boyasi", "pvc-mavi-serigrafi-boyasi", "serigrafi-geciktirici"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "plastik-serigrafi-boyasi", "serigrafi-baski-boyasi"]
  ),
  productDetailPage(
    "pvc-kirmizi-serigrafi-boyasi",
    "PVC Kırmızı Serigrafi Boyası",
    "pvc-serigrafi-boyalari",
    "PVC Serigrafi Boyaları",
    "/products/pvc-altin-yaldiz.png",
    "PVC serigrafi boyası",
    "Kırmızı",
    ["PVC", "plastik", "etiket", "ambalaj", "promosyon", "suni deri"],
    ["Kırmızı marka rengi baskısı", "Promosyon ve etiket baskısı", "Dikkat çekici ambalaj uygulaması"],
    ["Kurumsal renk beklentisi varsa numune ile eşleştirme yapılmalıdır.", "Renk doygunluğu baskı kalınlığıyla birlikte değerlendirilmelidir.", "Seri üretimde karıştırma standardı korunmalıdır."],
    ["pvc-beyaz-serigrafi-boyasi", "pvc-mavi-serigrafi-boyasi", "pvc-sari-serigrafi-boyasi"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "promosyon-baski-boyasi", "etiket-baski-boyasi"]
  ),
  productDetailPage(
    "pvc-mavi-serigrafi-boyasi",
    "PVC Mavi Serigrafi Boyası",
    "pvc-serigrafi-boyalari",
    "PVC Serigrafi Boyaları",
    "/products/uv-renkliler.jpeg",
    "PVC serigrafi boyası",
    "Mavi",
    ["PVC", "plastik", "etiket", "ambalaj", "teknik parça", "promosyon"],
    ["Mavi logo ve marka baskısı", "Teknik yüzey işaretleme", "Promosyon ürün baskısı"],
    ["Mavi ton standardı sipariş öncesinde netleştirilmelidir.", "Parlak yüzeylerde tutunma testi önerilir.", "Viskozite ve kuruma süresi üretim hızına göre ayarlanmalıdır."],
    ["pvc-kirmizi-serigrafi-boyasi", "pvc-siyah-serigrafi-boyasi", "pvc-sari-serigrafi-boyasi"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "plastik-serigrafi-boyasi", "pvc-baski-boyasi"]
  ),
  productDetailPage(
    "pvc-sari-serigrafi-boyasi",
    "PVC Sarı Serigrafi Boyası",
    "pvc-serigrafi-boyalari",
    "PVC Serigrafi Boyaları",
    "/products/uv-renkliler.jpeg",
    "PVC serigrafi boyası",
    "Sarı",
    ["PVC", "plastik", "ambalaj", "etiket", "levha", "promosyon"],
    ["Sarı logo ve uyarı baskısı", "Etiket ve ambalaj renklendirme", "Dekoratif PVC yüzey uygulaması"],
    ["Sarı tonlarda örtücülük yüzeye göre değerlendirilmelidir.", "Açık renklerde zemin etkisi dikkate alınmalıdır.", "Seri üretim öncesi kuruma ve tutunma testi yapılmalıdır."],
    ["pvc-kirmizi-serigrafi-boyasi", "pvc-mavi-serigrafi-boyasi", "pvc-beyaz-serigrafi-boyasi"],
    pvcRelated,
    ["pvc-serigrafi-boyasi", "etiket-baski-boyasi", "serigrafi-boya-fiyatlari"]
  ),
  productDetailPage(
    "plastisol-beyaz-boya",
    "Plastisol Beyaz Boya",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol boyası",
    "Beyaz",
    ["tişört", "sweatshirt", "pamuklu kumaş", "bez çanta", "promosyon tekstili"],
    ["Opak beyaz tekstil baskısı", "Koyu kumaşlarda alt zemin", "Tişört ve sweatshirt logo baskısı"],
    ["Fikse koşulu yıkama dayanımını belirler.", "Koyu kumaşta örtücülük beklentisi netleştirilmelidir.", "Baskı kalınlığı ve tuşe hissi birlikte planlanmalıdır."],
    ["plastisol-siyah-boya", "plastisol-kirmizi-boya", "plastisol-altin-yaldiz"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-baski-boyasi", "tisort-baski-boyasi"]
  ),
  productDetailPage(
    "plastisol-siyah-boya",
    "Plastisol Siyah Boya",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol boyası",
    "Siyah",
    ["tişört", "sweatshirt", "bez çanta", "pamuklu kumaş", "iş kıyafeti"],
    ["Siyah tekstil logo baskısı", "Net yazı ve grafik baskısı", "Seri tişört üretimi"],
    ["Siyah baskıda netlik için rakle basıncı önemlidir.", "Fikse standardı kayıt altına alınmalıdır.", "Kumaş tipi ürün seçimini etkileyebilir."],
    ["plastisol-beyaz-boya", "plastisol-mavi-boya", "plastisol-gumus-yaldiz"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-serigrafi-boyasi", "tekstil-baski-boyasi"]
  ),
  productDetailPage(
    "plastisol-kirmizi-boya",
    "Plastisol Kırmızı Boya",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol boyası",
    "Kırmızı",
    ["tişört", "sweatshirt", "bez çanta", "promosyon tekstili", "pamuklu kumaş"],
    ["Canlı kırmızı tekstil baskısı", "Kurumsal renk uygulaması", "Promosyon tişört baskısı"],
    ["Kurumsal ton beklentisi varsa numune üzerinden ilerlenmelidir.", "Fikse ve yıkama testi önerilir.", "Renk canlılığı baskı kalınlığıyla birlikte değerlendirilir."],
    ["plastisol-beyaz-boya", "plastisol-mavi-boya", "plastisol-sari-boya"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-baski-boyasi", "tisort-baski-boyasi"]
  ),
  productDetailPage(
    "plastisol-mavi-boya",
    "Plastisol Mavi Boya",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol boyası",
    "Mavi",
    ["tişört", "sweatshirt", "bez çanta", "promosyon tekstili", "tekstil aksesuarı"],
    ["Mavi logo baskısı", "Marka rengi uygulaması", "Seri tekstil baskısı"],
    ["Mavi ton standardı üretim öncesi netleştirilmelidir.", "Kumaş rengi nihai sonucu etkileyebilir.", "Fikse koşulu dayanım için kritiktir."],
    ["plastisol-kirmizi-boya", "plastisol-siyah-boya", "plastisol-sari-boya"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-serigrafi-boyasi", "tekstil-baski-boyasi"]
  ),
  productDetailPage(
    "plastisol-sari-boya",
    "Plastisol Sarı Boya",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol boyası",
    "Sarı",
    ["tişört", "sweatshirt", "bez çanta", "iş kıyafeti", "promosyon tekstili"],
    ["Sarı tekstil baskısı", "Uyarı ve dikkat renkli baskı", "Promosyon kumaş uygulaması"],
    ["Açık renk tonlarda zemin etkisi dikkate alınmalıdır.", "Örtücülük ve tuşe dengesi birlikte planlanmalıdır.", "Yıkama dayanımı için doğru fikse gerekir."],
    ["plastisol-kirmizi-boya", "plastisol-mavi-boya", "plastisol-beyaz-boya"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-baski-boyasi", "tisort-baski-boyasi"]
  ),
  productDetailPage(
    "plastisol-altin-yaldiz",
    "Plastisol Altın Yaldız",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol efekti",
    "Altın yaldız",
    ["tişört", "sweatshirt", "promosyon tekstili", "bez çanta", "tekstil aksesuarı"],
    ["Altın efektli tekstil baskısı", "Premium marka uygulaması", "Dekoratif tekstil grafiği"],
    ["Efekt baskılarda karıştırma standardı önemlidir.", "Fikse ve yıkama dayanımı test edilmelidir.", "Baskı kalınlığı görsel etkiyi değiştirebilir."],
    ["plastisol-gumus-yaldiz", "plastisol-beyaz-boya", "plastisol-siyah-boya"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-baski-boyasi", "promosyon-baski-boyasi"]
  ),
  productDetailPage(
    "plastisol-gumus-yaldiz",
    "Plastisol Gümüş Yaldız",
    "plastisol-boyalari",
    "Plastisol Boyaları",
    "/products/plastisol-cesitleri.png",
    "Tekstil plastisol efekti",
    "Gümüş yaldız",
    ["tişört", "sweatshirt", "promosyon tekstili", "bez çanta", "tekstil aksesuarı"],
    ["Gümüş efektli tekstil baskısı", "Premium logo baskısı", "Dekoratif tekstil uygulaması"],
    ["Metalik etki için homojen karışım gerekir.", "Kumaş ve yıkama koşulu birlikte değerlendirilmelidir.", "Numune baskı ürün seçimini netleştirir."],
    ["plastisol-altin-yaldiz", "plastisol-siyah-boya", "plastisol-beyaz-boya"],
    plastisolRelated,
    ["plastisol-boya", "tekstil-baski-boyasi", "promosyon-baski-boyasi"]
  ),
  productDetailPage(
    "uv-beyaz-serigrafi-boyasi",
    "UV Beyaz Serigrafi Boyası",
    "uv-serigrafi-boyalari",
    "UV Serigrafi Boyaları",
    "/products/uv-renkliler.jpeg",
    "UV kurumalı serigrafi boyası",
    "Beyaz",
    ["etiket", "ambalaj", "plastik", "cam", "metal", "promosyon ürünleri"],
    ["Hızlı kürlenen beyaz baskı", "Etiket ve ambalaj uygulaması", "Parlak yüzeylerde logo baskısı"],
    ["UV lamba gücü ve hat hızı kontrol edilmelidir.", "Boya kalınlığı kürlenmeyi etkiler.", "Yüzey tutunma testi önerilir."],
    ["uv-siyah-serigrafi-boyasi", "uv-renkli-serigrafi-boyasi", "serigrafi-sertlestirici"],
    uvRelated,
    ["uv-serigrafi-boyasi", "uv-kurumali-serigrafi-boyasi", "etiket-baski-boyasi"]
  ),
  productDetailPage(
    "uv-siyah-serigrafi-boyasi",
    "UV Siyah Serigrafi Boyası",
    "uv-serigrafi-boyalari",
    "UV Serigrafi Boyaları",
    "/products/uv-renkliler.jpeg",
    "UV kurumalı serigrafi boyası",
    "Siyah",
    ["etiket", "ambalaj", "plastik", "cam", "metal", "promosyon ürünleri"],
    ["Hızlı kürlenen siyah baskı", "Net yazı ve logo uygulaması", "Endüstriyel yüzey işaretleme"],
    ["UV sistem ayarı baskı dayanımını belirler.", "Parlak yüzeylerde ön test yapılmalıdır.", "İnce detaylarda elek seçimi önemlidir."],
    ["uv-beyaz-serigrafi-boyasi", "uv-renkli-serigrafi-boyasi", "serigrafi-inceltici"],
    uvRelated,
    ["uv-serigrafi-boyasi", "uv-kurumali-serigrafi-boyasi", "endustriyel-serigrafi-boyasi"]
  ),
  productDetailPage(
    "uv-renkli-serigrafi-boyasi",
    "UV Renkli Serigrafi Boyası",
    "uv-serigrafi-boyalari",
    "UV Serigrafi Boyaları",
    "/products/uv-renkliler.jpeg",
    "UV kurumalı serigrafi boyası",
    "Renkli seri",
    ["etiket", "ambalaj", "plastik", "cam", "metal", "promosyon"],
    ["Renkli UV baskı", "Hızlı üretim hattı uygulaması", "Parlak ve net marka baskısı"],
    ["Renk seçimi yüzey ve UV sistemle birlikte değerlendirilmelidir.", "Kürlenme testleri seri üretim öncesinde yapılmalıdır.", "Düzenli üretimde renk standardı korunmalıdır."],
    ["uv-beyaz-serigrafi-boyasi", "uv-siyah-serigrafi-boyasi", "serigrafi-geciktirici"],
    uvRelated,
    ["uv-serigrafi-boyasi", "etiket-baski-boyasi", "ambalaj-baski-boyasi"]
  ),
  productDetailPage(
    "su-bazli-siyah-boya",
    "Su Bazlı Siyah Boya",
    "su-bazli-serigrafi-boyalari",
    "Su Bazlı Serigrafi Boyaları",
    "/products/su-bazli-siyah-beyaz.jpeg",
    "Su bazlı tekstil boyası",
    "Siyah",
    ["pamuklu kumaş", "tişört", "bez çanta", "tekstil aksesuarı", "promosyon tekstili"],
    ["Yumuşak tuşeli siyah baskı", "Tekstil logo uygulaması", "Doğal hissi koruyan baskı"],
    ["Kumaş emiciliği sonucu etkiler.", "Kuruma ve fikse koşulları kontrol edilmelidir.", "Su bazlı sistemlerde kalıp temizliği önemlidir."],
    ["su-bazli-beyaz-boya", "plastisol-siyah-boya", "serigrafi-emulsiyonu"],
    ["su-bazli-serigrafi-boyasi-nedir", "plastisol-vs-su-bazli-boya", "tekstil-baski-boyasi-secimi"],
    ["su-bazli-tekstil-boyasi", "su-bazli-serigrafi-boyasi", "tekstil-baski-boyasi"]
  ),
  productDetailPage(
    "su-bazli-beyaz-boya",
    "Su Bazlı Beyaz Boya",
    "su-bazli-serigrafi-boyalari",
    "Su Bazlı Serigrafi Boyaları",
    "/products/su-bazli-siyah-beyaz.jpeg",
    "Su bazlı tekstil boyası",
    "Beyaz",
    ["pamuklu kumaş", "tişört", "bez çanta", "tekstil aksesuarı", "promosyon tekstili"],
    ["Yumuşak tuşeli beyaz baskı", "Tekstil logo ve grafik uygulaması", "Doğal hisli açık renk baskı"],
    ["Beyaz tonlarda kumaş rengi sonucu etkileyebilir.", "Fikse koşulu dayanım için önemlidir.", "Numune baskı ile örtücülük kontrol edilmelidir."],
    ["su-bazli-siyah-boya", "plastisol-beyaz-boya", "serigrafi-emulsiyonu"],
    ["su-bazli-serigrafi-boyasi-nedir", "plastisol-vs-su-bazli-boya", "tekstil-baski-boyasi-secimi"],
    ["su-bazli-tekstil-boyasi", "su-bazli-serigrafi-boyasi", "tekstil-baski-boyasi"]
  ),
  productDetailPage(
    "serigrafi-emulsiyonu",
    "Serigrafi Emülsiyonu",
    "serigrafi-emulsiyonlari",
    "Serigrafi Emülsiyonları",
    "/products/emulsiyon.png",
    "Fotoemülsiyon",
    "Kalıp hazırlama",
    ["ipek kalıp", "polyester elek", "tekstil kalıbı", "ambalaj baskı kalıbı", "grafik baskı kalıbı"],
    ["Serigrafi kalıbı hazırlama", "Net desen oluşturma", "Baskı öncesi şablon üretimi"],
    ["Elek numarası ve boya tipi birlikte değerlendirilmelidir.", "Pozlama süresi kalıp netliğini belirler.", "Kalıp tamamen kuruduktan sonra pozlama yapılmalıdır."],
    ["emulsiyon-sokucu", "serigrafi-inceltici", "aluminyum-ragle"],
    chemicalRelated,
    ["serigrafi-emulsiyonu", "emulsiyon", "serigrafi-yardimci-kimyasallari"]
  ),
  productDetailPage(
    "emulsiyon-sokucu",
    "Emülsiyon Sökücü",
    "serigrafi-emulsiyonlari",
    "Serigrafi Emülsiyonları",
    "/products/emulsiyon-sokucu.png",
    "Kalıp temizleme kimyasalı",
    "Temizleme",
    ["ipek kalıp", "polyester elek", "tekstil kalıbı", "ambalaj baskı kalıbı", "serigrafi çerçevesi"],
    ["Eski emülsiyon temizleme", "Kalıp yenileme", "Şablon tekrar kullanımı"],
    ["Uygulama süresi kalıntı yoğunluğuna göre değişebilir.", "Kalıp temizliği sonrası durulama önemlidir.", "Düzenli kullanım kalıp verimliliğini artırabilir."],
    ["serigrafi-emulsiyonu", "serigrafi-inceltici", "serigrafi-ragle-lastigi"],
    ["emulsiyon-sokucu-nedir", "serigrafi-kalip-hazirlama", "emulsiyon-nasil-kullanilir"],
    ["emulsiyon-sokucu", "serigrafi-yardimci-kimyasallari", "serigrafi-kimyasallari"]
  ),
  productDetailPage(
    "serigrafi-inceltici",
    "Serigrafi İnceltici",
    "serigrafi-inceltici-geciktirici",
    "İnceltici ve Geciktirici",
    "/products/inceltici.png",
    "Yardımcı kimyasal",
    "Viskozite ayarı",
    ["PVC baskı", "plastik baskı", "tekstil baskı", "ambalaj baskı", "serigrafi atölyesi"],
    ["Boya viskozitesini ayarlama", "Akış kontrolü", "Uygulama rahatlığı sağlama"],
    ["İnceltici kontrollü kullanılmalıdır.", "Ürün tipi ve yüzey bilgisi dikkate alınmalıdır.", "Fazla kullanım renk ve tutunma karakterini değiştirebilir."],
    ["serigrafi-geciktirici", "serigrafi-sertlestirici", "pvc-beyaz-serigrafi-boyasi"],
    ["serigrafi-boyasi-nasil-inceltilir", "serigrafi-baski-hatalari", "serigrafi-boya-secimi"],
    ["inceltici", "serigrafi-yardimci-kimyasallari", "serigrafi-kimyasallari"]
  ),
  productDetailPage(
    "serigrafi-geciktirici",
    "Serigrafi Geciktirici",
    "serigrafi-inceltici-geciktirici",
    "İnceltici ve Geciktirici",
    "/products/inceltici.png",
    "Yardımcı kimyasal",
    "Kuruma kontrolü",
    ["PVC baskı", "plastik baskı", "tekstil baskı", "ambalaj baskı", "serigrafi kalıbı"],
    ["Kuruma süresini kontrol etme", "Kalıp tıkanmasını azaltma", "Sıcak ortamda baskı akışını rahatlatma"],
    ["Geciktirici ölçülü kullanılmalıdır.", "Ortam sıcaklığı ve baskı hızı dikkate alınmalıdır.", "Fazla kullanım kuruma süresini gereğinden fazla uzatabilir."],
    ["serigrafi-inceltici", "serigrafi-sertlestirici", "pvc-siyah-serigrafi-boyasi"],
    ["geciktirici-ne-ise-yarar", "serigrafi-baski-hatalari", "serigrafi-boyasi-nasil-inceltilir"],
    ["geciktirici", "serigrafi-yardimci-kimyasallari", "serigrafi-kimyasallari"]
  ),
  productDetailPage(
    "serigrafi-sertlestirici",
    "Serigrafi Sertleştirici",
    "serigrafi-yardimci-kimyasallari",
    "Serigrafi Yardımcı Kimyasalları",
    "/products/sertlestirici.png",
    "Yardımcı kimyasal",
    "Dayanım desteği",
    ["PVC baskı", "plastik baskı", "metal yüzey", "cam yüzey", "endüstriyel baskı"],
    ["Baskı dayanımını destekleme", "Yüzey performansı artırma", "Tutunma beklentisi yüksek işlerde yardımcı kullanım"],
    ["Sertleştirici uyumlu boya sistemiyle kullanılmalıdır.", "Karışım oranı teknik beklentiye göre değerlendirilmelidir.", "Uygulama öncesi test baskısı önerilir."],
    ["serigrafi-inceltici", "serigrafi-geciktirici", "uv-siyah-serigrafi-boyasi"],
    ["sertlestirici-nasil-kullanilir", "serigrafi-baski-hatalari", "serigrafi-boya-secimi"],
    ["sertlestirici", "serigrafi-yardimci-kimyasallari", "endustriyel-serigrafi-boyasi"]
  ),
  productDetailPage(
    "aluminyum-ragle",
    "Alüminyum Ragle",
    "serigrafi-baski-malzemeleri",
    "Serigrafi Baskı Malzemeleri",
    "/products/ragle-cekcek.png",
    "Baskı ekipmanı",
    "Alüminyum gövde",
    ["serigrafi kalıbı", "tekstil baskı", "PVC baskı", "ambalaj baskı", "atölye üretimi"],
    ["Boya transferini kontrol etme", "Baskı basıncını dengeleme", "Manuel ve yarı otomatik uygulamalarda kullanım"],
    ["Ragle sertliği ve açısı baskı karakterini etkiler.", "Boya transferi için basınç dengesi önemlidir.", "Ölçü seçimi kalıp ve baskı alanına göre yapılmalıdır."],
    ["serigrafi-ragle-lastigi", "serigrafi-emulsiyonu", "serigrafi-inceltici"],
    ["ragle-nedir", "serigrafi-baski-teknikleri", "ipek-kalip-nedir"],
    ["serigrafi-yardimci-malzemeleri", "serigrafi-malzemeleri", "serigrafi-baski-boyasi"]
  ),
  productDetailPage(
    "serigrafi-ragle-lastigi",
    "Serigrafi Ragle Lastiği",
    "serigrafi-baski-malzemeleri",
    "Serigrafi Baskı Malzemeleri",
    "/products/ragle-cekcek.png",
    "Baskı ekipmanı",
    "Ragle lastiği",
    ["serigrafi kalıbı", "tekstil baskı", "PVC baskı", "ambalaj baskı", "grafik baskı"],
    ["Boya transferi kontrolü", "Baskı netliği sağlama", "Atölye ekipman yenileme"],
    ["Ragle lastiği sertliği baskıdaki boya geçişini etkiler.", "Aşınmış lastik çizgi netliğini bozabilir.", "Baskı yüzeyine ve boya tipine göre seçim yapılmalıdır."],
    ["aluminyum-ragle", "serigrafi-emulsiyonu", "serigrafi-inceltici"],
    ["ragle-nedir", "serigrafi-baski-teknikleri", "serigrafi-baski-hatalari"],
    ["serigrafi-yardimci-malzemeleri", "serigrafi-malzemeleri", "serigrafi-baski-boyasi"]
  ),
];

export const productDetailPageMap = new Map(
  productDetailPages.map((page) => [page.slug, page])
);

export const productDetailPageMapByTitle = new Map(
  productDetailPages.map((page) => [page.focusKeyword, page])
);
