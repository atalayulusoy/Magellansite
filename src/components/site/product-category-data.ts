export type ProductCategoryPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  focusKeyword: string;
  intro: string;
  buyerIntent: string;
  productGroups: string[];
  surfaces: string[];
  technicalNotes: string[];
  featuredProducts: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
  relatedLandingSlugs: string[];
};

export const productCategoryPages: ProductCategoryPage[] = [
  {
    slug: "serigrafi-baski-boyalari",
    title:
      "Serigrafi Baskı Boyaları | Serigrafi Boya ve Mürekkep Çeşitleri | Magellan Boya",
    description:
      "Serigrafi baskı boyaları, plastisol, PVC, UV, su bazlı boya ve yardımcı kimyasal ürün gruplarını inceleyin.",
    h1: "Serigrafi Baskı Boyaları ve Profesyonel Mürekkep Çeşitleri",
    eyebrow: "Ana Kategori",
    focusKeyword: "serigrafi baskı boyaları",
    intro:
      "Serigrafi baskı boyaları seçilirken yalnızca renk değil; baskı yüzeyi, kuruma sistemi, tutunma beklentisi, elek yapısı, üretim adedi ve yardımcı kimyasal uyumu birlikte değerlendirilmelidir. Tekstil, PVC, UV, su bazlı, yaldızlı ve yardımcı ürün gruplarını tek bir tedarik yapısı altında inceleyebilirsiniz.",
    buyerIntent:
      "Serigrafi boya satın almak, toptan ürün tedariği kurmak, fiyat almak veya baskı yüzeyine göre doğru ürün grubunu seçmek isteyen atölyeler için hazırlanmıştır.",
    productGroups: [
      "Serigrafi boya",
      "Serigrafi baskı boyası",
      "Plastisol boya",
      "PVC serigrafi boyası",
      "UV serigrafi boyası",
      "Su bazlı serigrafi boyası",
      "Emülsiyon ve kalıp kimyasalları",
      "İnceltici, geciktirici ve sertleştirici",
    ],
    surfaces: [
      "tekstil",
      "PVC",
      "plastik",
      "kağıt poşet",
      "ambalaj",
      "deri",
      "etiket",
      "levha",
    ],
    technicalNotes: [
      "Tekstil baskıda yıkama dayanımı, esneklik ve renk canlılığı öne çıkar.",
      "PVC ve plastik yüzeylerde tutunma, yüzey temizliği ve kuruma davranışı belirleyicidir.",
      "UV sistemlerde lamba gücü, hat hızı ve boya kalınlığı birlikte değerlendirilmelidir.",
      "Düzenli üretimde aynı ürün grubunun tekrar bulunabilir olması toplam maliyeti düşürür.",
    ],
    featuredProducts: [
      "PVC Altın Yaldız Serigrafi Boyası",
      "PVC Gümüş Yaldız Serigrafi Boyası",
      "Plastisol Çeşitleri",
      "Su Bazlı Siyah Beyaz Boyalar",
      "UV Renkli Serigrafi Boyaları",
      "Serigrafi Emülsiyonu",
      "İnceltici",
      "Sertleştirici",
    ],
    faq: [
      {
        question: "Serigrafi baskı boyaları hangi yüzeylerde kullanılır?",
        answer:
          "Tekstil, PVC, plastik, ambalaj, kağıt poşet, etiket, deri, cam, metal ve promosyon ürünleri gibi farklı yüzeylerde uygun ürün grubu seçilerek kullanılabilir.",
      },
      {
        question: "Serigrafi boya fiyatları neden ürüne göre değişir?",
        answer:
          "Fiyat; ürün tipi, renk, ambalaj miktarı, yüzey beklentisi, teknik dayanım ve düzenli alım planına göre değişir. Net fiyat için ürün ve kullanım bilgisi gerekir.",
      },
      {
        question: "Toptan serigrafi baskı boyası alınabilir mi?",
        answer:
          "Evet. Düzenli tüketim yapan atölyeler, matbaalar, ambalaj firmaları ve tekstil üreticileri için ürün grubu ve miktara göre toptan tedarik planı yapılabilir.",
      },
    ],
    relatedSlugs: [
      "plastisol-boyalari",
      "pvc-serigrafi-boyalari",
      "uv-serigrafi-boyalari",
      "serigrafi-yardimci-kimyasallari",
    ],
    relatedLandingSlugs: [
      "serigrafi-boyalari",
      "serigrafi-baski-boyalari",
      "serigrafi-boya-fiyatlari",
      "toptan-serigrafi-boya",
    ],
  },
  {
    slug: "serigrafi-boya-cesitleri",
    title: "Serigrafi Boya Çeşitleri | PVC, UV, Plastisol ve Su Bazlı | Magellan Boya",
    description:
      "Serigrafi boya çeşitleri; PVC, UV, plastisol, tekstil, su bazlı ve yardımcı kimyasal ürün gruplarıyla Magellan Boya'da.",
    h1: "Serigrafi Boya Çeşitleri ve Kullanım Alanları",
    eyebrow: "Ürün Çeşitleri",
    focusKeyword: "serigrafi boya çeşitleri",
    intro:
      "Serigrafi boya çeşitleri, baskı yapılacak yüzey ve beklenen performansa göre ayrılır. Tek bir boya tüm yüzeylerde aynı sonucu vermez; bu yüzden ürün seçimi yüzey, kuruma, tutunma ve üretim temposu üzerinden yapılmalıdır.",
    buyerIntent:
      "Hangi serigrafi boyasını alacağını karşılaştırmak isteyen kullanıcılar için ürün gruplarını anlaşılır şekilde ayırır.",
    productGroups: [
      "PVC bazlı serigrafi boyası",
      "UV kurumalı serigrafi boyası",
      "Plastisol boya",
      "Su bazlı tekstil boyası",
      "Yaldızlı serigrafi boyaları",
      "Yardımcı kimyasallar",
    ],
    surfaces: ["tekstil", "PVC", "plastik", "cam", "metal", "ambalaj", "deri"],
    technicalNotes: [
      "PVC ve plastikte yüzey tutunması önceliklidir.",
      "Tekstilde yıkama dayanımı ve tuşe hissi daha önemlidir.",
      "UV sistemler hızlı üretim ve parlak görünüm isteyen işler için değerlendirilir.",
    ],
    featuredProducts: [
      "PVC Altın Yaldız Serigrafi Boyası",
      "PVC Gümüş Yaldız Serigrafi Boyası",
      "Plastisol Çeşitleri",
      "UV Renkli Serigrafi Boyaları",
      "Su Bazlı Siyah Beyaz Boyalar",
    ],
    faq: [
      {
        question: "En doğru serigrafi boya çeşidi nasıl seçilir?",
        answer:
          "Baskı yüzeyi, boya kalınlığı, kuruma sistemi, renk beklentisi ve ürünün kullanım şartları birlikte değerlendirilmelidir.",
      },
      {
        question: "Tekstil ve plastik için aynı serigrafi boya kullanılır mı?",
        answer:
          "Genellikle hayır. Tekstil ve plastik yüzeylerin tutunma, esneklik ve kuruma beklentileri farklıdır.",
      },
    ],
    relatedSlugs: ["serigrafi-baski-boyalari", "tekstil-baski-boyalari", "plastik-baski-boyalari"],
    relatedLandingSlugs: ["serigrafi-boyalari", "serigrafi-baski-boyasi", "serigrafi-boya-ureticisi"],
  },
  {
    slug: "plastisol-boyalari",
    title: "Plastisol Boyaları | Tekstil Baskı ve Transfer Boyaları | Magellan Boya",
    description:
      "Plastisol boyaları; tişört, sweatshirt, tekstil ve transfer baskı uygulamaları için tedarik seçenekleri.",
    h1: "Plastisol Boyaları ve Tekstil Baskı Çözümleri",
    eyebrow: "Plastisol",
    focusKeyword: "plastisol boyaları",
    intro:
      "Plastisol boyaları tekstil serigrafisinde güçlü örtücülük, canlı renk ve dayanım beklentisi olan işler için değerlendirilir. Doğru fikse, kumaş tipi ve baskı kalınlığı ürün performansını doğrudan etkiler.",
    buyerIntent:
      "Tekstil baskı yapan atölyelerin plastisol boya, fiyat, tedarik ve teknik seçim ihtiyacına cevap verir.",
    productGroups: ["Plastisol renkleri", "Transfer baskı plastisolü", "Tekstil serigrafi boyası", "Özel renk üretimi"],
    surfaces: ["tişört", "sweatshirt", "bez çanta", "pamuklu kumaş", "karışım kumaş"],
    technicalNotes: [
      "Koyu kumaşlarda örtücülük ve opaklık önemlidir.",
      "Doğru kürleme yıkama dayanımını belirler.",
      "Seri üretimde aynı renk standardının korunması satın alma güvenini artırır.",
    ],
    featuredProducts: ["Plastisol Çeşitleri", "Su Bazlı Siyah Beyaz Boyalar"],
    faq: [
      {
        question: "Plastisol boya hangi baskılarda kullanılır?",
        answer:
          "Tişört, sweatshirt, bez çanta, promosyon tekstili ve transfer baskı gibi tekstil odaklı uygulamalarda kullanılır.",
      },
      {
        question: "Plastisol boya fiyatı nasıl belirlenir?",
        answer:
          "Renk, ambalaj miktarı, opaklık ihtiyacı, ürün serisi ve düzenli alım planına göre belirlenir.",
      },
    ],
    relatedSlugs: ["emprime-baski-boyalari", "tekstil-baski-boyalari", "su-bazli-tekstil-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["plastisol-boya", "plastisol-boya-fiyatlari", "plastisol-boya-ureticisi"],
  },
  {
    slug: "emprime-baski-boyalari",
    title: "Emprime Baskı Boyaları | Tekstil ve Tişört Baskı Boyası | Magellan Boya",
    description:
      "Emprime baskı boyaları; tişört, kumaş, bez çanta, tekstil ve transfer baskı uygulamaları için tedarik seçenekleri.",
    h1: "Emprime Baskı Boyaları ve Tekstil Serigrafi Çözümleri",
    eyebrow: "Emprime Baskı",
    focusKeyword: "emprime baskı boyaları",
    intro:
      "Emprime baskı boyaları, kumaş yüzeylerde net desen, canlı renk, yıkama dayanımı ve üretim tekrar edilebilirliği için seçilir. Ürün tercihi kumaş tipi, baskı kalınlığı, hedef tuşe, fikse koşulu ve renk örtücülüğü birlikte değerlendirilerek yapılmalıdır.",
    buyerIntent:
      "Emprime baskı boyası, tekstil baskı boyası, tişört baskı boyası veya transfer baskıya uygun boya arayan atölyeler için ürün ve teknik seçim ihtiyacına cevap verir.",
    productGroups: [
      "Emprime baskı boyası",
      "Tekstil baskı boyası",
      "Plastisol emprime boya",
      "Su bazlı emprime boya",
      "Tişört baskı boyası",
      "Transfer baskı boyası",
    ],
    surfaces: ["tişört", "sweatshirt", "pamuklu kumaş", "bez çanta", "promosyon tekstili", "karışım kumaş"],
    technicalNotes: [
      "Kumaş yapısı ve renk zemini ürün seçimini doğrudan etkiler.",
      "Yıkama dayanımı için doğru fikse ve kurutma koşulu takip edilmelidir.",
      "Koyu kumaşlarda opaklık, alt zemin ve baskı kalınlığı numune ile kontrol edilmelidir.",
    ],
    featuredProducts: ["Emprime Baskı Boyası", "Plastisol Çeşitleri", "Su Bazlı Siyah Beyaz Boyalar"],
    faq: [
      {
        question: "Emprime baskı boyası hangi yüzeylerde kullanılır?",
        answer:
          "Tişört, sweatshirt, pamuklu kumaş, bez çanta ve promosyon tekstili gibi kumaş yüzeylerde uygun ürün grubu seçilerek kullanılabilir.",
      },
      {
        question: "Emprime baskı boyası fiyatı nasıl belirlenir?",
        answer:
          "Fiyat; boya tipi, renk, ambalaj miktarı, kumaş türü, opaklık beklentisi ve düzenli alım planına göre netleşir.",
      },
    ],
    relatedSlugs: ["tekstil-baski-boyalari", "plastisol-boyalari", "su-bazli-serigrafi-boyalari", "tisort-baski-boyalari"],
    relatedLandingSlugs: ["emprime-baski-boyasi", "tekstil-baski-boyasi", "kumas-baski-boyasi", "plastisol-boya"],
  },
  {
    slug: "tekstil-baski-boyalari",
    title: "Tekstil Baskı Boyaları | Tişört, Kumaş ve İpek Baskı | Magellan Boya",
    description:
      "Tekstil baskı boyaları, plastisol, su bazlı ve ipek baskı boya seçenekleri için teknik tedarik çözümleri.",
    h1: "Tekstil Baskı Boyaları ve Kumaş Üstü Baskı Çözümleri",
    eyebrow: "Tekstil Baskı",
    focusKeyword: "tekstil baskı boyaları",
    intro:
      "Tekstil baskı boyaları, kumaşın yapısına ve hedeflenen baskı hissine göre seçilir. Canlı renk, esneklik, yıkama dayanımı ve üretim tekrar edilebilirliği bu kategorinin ana kriterleridir.",
    buyerIntent:
      "Tişört baskısı, kumaş baskısı ve ipek baskı için boya arayan kullanıcıları Magellan ürün gruplarına yönlendirir.",
    productGroups: ["Tekstil serigrafi boyası", "Plastisol boya", "Su bazlı tekstil boyası", "Tişört baskı boyası"],
    surfaces: ["tişört", "sweatshirt", "bez çanta", "iş kıyafeti", "promosyon tekstili"],
    technicalNotes: [
      "Kumaş türü boya seçimini doğrudan etkiler.",
      "Yıkama dayanımı uygulama ve fikse koşuluyla birlikte değerlendirilir.",
      "Toptan tekstil boya alımında renk standardı kritik hale gelir.",
    ],
    featuredProducts: ["Plastisol Çeşitleri", "Su Bazlı Siyah Beyaz Boyalar"],
    faq: [
      {
        question: "Tekstil baskı boyası seçerken neye bakılmalı?",
        answer:
          "Kumaş tipi, hedef renk, baskı kalınlığı, yıkama dayanımı ve üretim adedi birlikte değerlendirilmelidir.",
      },
      {
        question: "Tişört baskısı için plastisol mü su bazlı boya mı?",
        answer:
          "Yoğun renk ve örtücülük için plastisol; daha yumuşak tuşe beklentisi olan işlerde su bazlı sistemler değerlendirilebilir.",
      },
    ],
    relatedSlugs: ["emprime-baski-boyalari", "plastisol-boyalari", "su-bazli-tekstil-boyalari", "tisort-baski-boyalari"],
    relatedLandingSlugs: ["tekstil-baski-boyasi", "tisort-baski-boyasi", "plastisol-vs-su-bazli-boya"],
  },
  {
    slug: "pvc-serigrafi-boyalari",
    title: "PVC Serigrafi Boyaları | PVC Baskı ve Yaldız Boyalar | Magellan Boya",
    description:
      "PVC serigrafi boyaları, PVC baskı, plastik yüzey, altın yaldız ve gümüş yaldız ürün grupları için Magellan Boya.",
    h1: "PVC Serigrafi Boyaları ve Plastik Yüzey Baskı Çözümleri",
    eyebrow: "PVC Baskı",
    focusKeyword: "PVC serigrafi boyaları",
    intro:
      "PVC serigrafi boyaları; PVC, suni deri, plastik ve benzer yüzeylerde tutunma, parlaklık ve net baskı beklentisiyle seçilir. Yüzey temizliği, solvent dengesi ve kuruma davranışı sonucu belirler.",
    buyerIntent:
      "PVC yüzeylerde logo, etiket, ambalaj veya dekoratif baskı yapan firmalar için ürün seçimini kolaylaştırır.",
    productGroups: ["PVC serigrafi boyası", "PVC baskı boyası", "Altın yaldız", "Gümüş yaldız", "Plastik baskı boyası"],
    surfaces: ["PVC", "suni deri", "sert plastik", "etiket", "promosyon ürünleri", "ambalaj"],
    technicalNotes: [
      "PVC yüzeyde tutunma için doğru ürün ve temiz yüzey gerekir.",
      "Yaldızlı baskılarda parlaklık ve örtücülük birlikte değerlendirilir.",
      "Seri üretimden önce numune baskı almak riski azaltır.",
    ],
    featuredProducts: ["PVC Altın Yaldız Serigrafi Boyası", "PVC Gümüş Yaldız Serigrafi Boyası", "İnceltici", "Sertleştirici"],
    faq: [
      {
        question: "PVC serigrafi boyası hangi yüzeylerde kullanılır?",
        answer:
          "PVC, suni deri, sert plastik, etiket, ambalaj ve bazı promosyon yüzeylerinde uygun uygulama koşullarıyla kullanılır.",
      },
      {
        question: "PVC boyada yaldız seçenekleri var mı?",
        answer:
          "Evet. Altın ve gümüş yaldız görünümü isteyen baskılar için özel seriler değerlendirilebilir.",
      },
    ],
    relatedSlugs: ["pvc-yaldiz-boyalari", "plastik-baski-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["pvc-serigrafi-boyasi", "pvc-baski-boyasi", "pvc-serigrafi-boyasi-fiyatlari"],
  },
  {
    slug: "uv-serigrafi-boyalari",
    title: "UV Serigrafi Boyaları | Hızlı Kürlenen Baskı Boyaları | Magellan Boya",
    description:
      "UV serigrafi boyaları; parlak, hızlı kürlenen ve seri üretime uygun baskı boya seçenekleri için Magellan Boya.",
    h1: "UV Serigrafi Boyaları ve Hızlı Kürlenen Baskı Ürünleri",
    eyebrow: "UV Boya",
    focusKeyword: "UV serigrafi boyaları",
    intro:
      "UV serigrafi boyaları, UV ışıkla kürlenen ve hızlı üretim temposuna uyum sağlayan baskı sistemleri için değerlendirilir. Parlak görünüm, net detay ve üretim hızı bu kategorinin öne çıkan avantajlarıdır.",
    buyerIntent:
      "UV baskı hattı olan ambalaj, etiket, plastik ve promosyon üreticileri için doğru boya kategorisini hedefler.",
    productGroups: ["UV serigrafi boyası", "UV renkli boya", "UV kurumalı baskı boyası", "Endüstriyel UV boya"],
    surfaces: ["etiket", "ambalaj", "plastik", "cam", "metal", "promosyon ürünleri"],
    technicalNotes: [
      "UV lamba gücü ve hat hızı ürün performansını etkiler.",
      "Boya kalınlığı kürlenme süresiyle birlikte planlanmalıdır.",
      "Parlak yüzeylerde tutunma testi yapmak önemlidir.",
    ],
    featuredProducts: ["UV Renkli Serigrafi Boyaları"],
    faq: [
      {
        question: "UV serigrafi boyası neden tercih edilir?",
        answer:
          "Hızlı kürlenme, parlak görünüm, net detay ve yüksek adetli üretimlerde zaman avantajı sağlayabildiği için tercih edilir.",
      },
      {
        question: "UV boya her yüzeyde kullanılır mı?",
        answer:
          "Hayır. Yüzey tipi, UV sistemi ve hedef dayanım birlikte değerlendirilmelidir.",
      },
    ],
    relatedSlugs: ["serigrafi-baski-boyalari", "etiket-baski-boyalari", "ambalaj-baski-boyalari"],
    relatedLandingSlugs: ["uv-serigrafi-boyasi", "uv-kurumali-serigrafi-boyasi", "uv-serigrafi-boyasi-fiyatlari"],
  },
  {
    slug: "su-bazli-serigrafi-boyalari",
    title: "Su Bazlı Serigrafi Boyaları | Tekstil ve Yumuşak Tuşe | Magellan Boya",
    description:
      "Su bazlı serigrafi boyaları ve su bazlı tekstil baskı ürünleri için kullanım alanları ve tedarik bilgisi.",
    h1: "Su Bazlı Serigrafi Boyaları ve Yumuşak Baskı Çözümleri",
    eyebrow: "Su Bazlı",
    focusKeyword: "su bazlı serigrafi boyaları",
    intro:
      "Su bazlı serigrafi boyaları daha yumuşak tuşe, doğal his ve tekstil yüzeylerde pratik uygulama isteyen üretimler için değerlendirilir. Kumaşın emiciliği ve kuruma şartları ürün seçimini etkiler.",
    buyerIntent:
      "Su bazlı boya arayan tekstil atölyeleri ve daha yumuşak baskı hissi isteyen markalar için hazırlanmıştır.",
    productGroups: ["Su bazlı tekstil boyası", "Su bazlı siyah beyaz seri", "Tekstil serigrafi boyası"],
    surfaces: ["pamuklu kumaş", "bez çanta", "tişört", "tekstil aksesuarı"],
    technicalNotes: [
      "Kumaş emiciliği renk ve tuşe sonucunu etkiler.",
      "Kuruma ve fikse koşulları üretim standardına dahil edilmelidir.",
      "Su bazlı sistemlerde kalıp ve uygulama temizliği önemlidir.",
    ],
    featuredProducts: ["Su Bazlı Siyah Beyaz Boyalar"],
    faq: [
      {
        question: "Su bazlı serigrafi boyası ne avantaj sağlar?",
        answer:
          "Tekstil yüzeylerde daha yumuşak his ve doğal baskı karakteri isteyen işlerde avantaj sağlayabilir.",
      },
      {
        question: "Su bazlı boya fiyatı nasıl alınır?",
        answer:
          "Kumaş tipi, renk, ambalaj ve tüketim miktarı paylaşılarak net teklif alınabilir.",
      },
    ],
    relatedSlugs: ["tekstil-baski-boyalari", "plastisol-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["su-bazli-serigrafi-boyasi", "su-bazli-tekstil-boyasi", "tekstil-baski-boyasi"],
  },
  {
    slug: "hobi-boyalari",
    title: "Hobi Boyaları | Dekoratif ve Yaratıcı Boya Seçenekleri | Magellan Boya",
    description:
      "Hobi boyaları, dekoratif çalışmalar, el sanatları ve yaratıcı uygulamalar için Magellan boya seçenekleri.",
    h1: "Hobi Boyaları ve Yaratıcı Uygulama Çözümleri",
    eyebrow: "Hobi Boyaları",
    focusKeyword: "hobi boyaları",
    intro:
      "Hobi boyaları dekoratif çalışmalar, el sanatları ve farklı yaratıcı uygulamalarda renk, yüzey görünümü ve uygulama ihtiyacına göre değerlendirilir. Ürün seçimi yapılacak yüzey, hedef görünüm ve kullanım koşullarıyla birlikte ele alınmalıdır.",
    buyerIntent:
      "Hobi boyası, dekoratif boya veya yaratıcı uygulamalara yönelik boya seçeneği arayan kullanıcıları Magellan ürün portföyüne yönlendirir.",
    productGroups: ["Hobi boyaları", "Dekoratif boya seçenekleri", "Yaratıcı uygulama boyaları"],
    surfaces: ["dekoratif obje", "el sanatları", "yaratıcı yüzeyler", "atölye uygulamaları"],
    technicalNotes: [
      "Yüzey tipi ve beklenen görünüm ürün seçiminde belirleyicidir.",
      "Teknik sertifikasyon veya özel uygunluk iddiası için ürün datası kontrol edilmelidir.",
      "Uygulama öncesi küçük yüzey denemesi yapmak sonucu netleştirir.",
    ],
    featuredProducts: ["Hobi Boyaları"],
    faq: [
      {
        question: "Hobi boyası seçerken hangi bilgi gerekir?",
        answer:
          "Uygulama yapılacak yüzey, hedef renk/görünüm ve kullanım koşulu paylaşıldığında uygun ürün grubu daha doğru belirlenebilir.",
      },
      {
        question: "Hobi boyaları için teknik sertifika bilgisi var mı?",
        answer:
          "Sertifikasyon, özel uygunluk veya formülasyon bilgisi ürün datasına göre değerlendirilmelidir; doğrulanmamış teknik iddia kullanılmamalıdır.",
      },
    ],
    relatedSlugs: ["serigrafi-boya-cesitleri", "su-bazli-serigrafi-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["serigrafi-boyalari", "toptan-serigrafi-boya", "serigrafi-boya-ureticisi"],
  },
  {
    slug: "serigrafi-yardimci-kimyasallari",
    title: "Serigrafi Yardımcı Kimyasalları | Emülsiyon, İnceltici, Geciktirici | Magellan Boya",
    description:
      "Serigrafi yardımcı kimyasalları; emülsiyon, emülsiyon sökücü, inceltici, geciktirici ve sertleştirici ürünleri.",
    h1: "Serigrafi Yardımcı Kimyasalları ve Baskı Destek Ürünleri",
    eyebrow: "Yardımcı Kimyasal",
    focusKeyword: "serigrafi yardımcı kimyasalları",
    intro:
      "Serigrafi yardımcı kimyasalları, baskı boyasının doğru uygulanması, kalıbın hazırlanması, viskozitenin ayarlanması ve üretim akışının stabil kalması için kullanılır. Doğru yardımcı ürün, boya performansını doğrudan etkiler.",
    buyerIntent:
      "Emülsiyon, inceltici, geciktirici, sertleştirici ve kalıp temizleme ürünü arayan kullanıcıları hedefler.",
    productGroups: ["Emülsiyon", "Emülsiyon sökücü", "İnceltici", "Geciktirici", "Sertleştirici"],
    surfaces: ["serigrafi kalıbı", "tekstil baskı", "PVC baskı", "UV baskı", "plastik baskı"],
    technicalNotes: [
      "İnceltici ölçülü kullanılmalıdır.",
      "Emülsiyon seçimi boya tipiyle uyumlu olmalıdır.",
      "Sertleştirici ve geciktirici ürünleri uygulama koşuluna göre değerlendirilmelidir.",
    ],
    featuredProducts: ["Serigrafi Emülsiyonu", "Emülsiyon Sökücü", "İnceltici", "Sertleştirici"],
    faq: [
      {
        question: "Serigrafi yardımcı kimyasalları neden gerekir?",
        answer:
          "Kalıp hazırlama, boya akışı, kuruma kontrolü, yüzey dayanımı ve temizlik süreçlerinde üretimin daha stabil ilerlemesine yardımcı olur.",
      },
      {
        question: "Hangi yardımcı kimyasalı seçmeliyim?",
        answer:
          "Boya tipi, yüzey, kalıp, üretim hızı ve yaşanan teknik problem birlikte değerlendirilerek seçim yapılmalıdır.",
      },
    ],
    relatedSlugs: ["serigrafi-emulsiyonlari", "serigrafi-inceltici-geciktirici", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["serigrafi-yardimci-kimyasallari", "emulsiyon", "inceltici", "geciktirici"],
  },
  {
    slug: "serigrafi-emulsiyonlari",
    title: "Serigrafi Emülsiyonları | Kalıp Hazırlama Ürünleri | Magellan Boya",
    description:
      "Serigrafi emülsiyonları, fotoemülsiyon ve kalıp hazırlama ürünleri için teknik tedarik çözümleri.",
    h1: "Serigrafi Emülsiyonları ve Kalıp Hazırlama Ürünleri",
    eyebrow: "Emülsiyon",
    focusKeyword: "serigrafi emülsiyonları",
    intro:
      "Serigrafi emülsiyonları baskı kalıbında desenin temiz oluşmasını ve baskı sırasında kalıbın dayanımını etkileyen temel ürün grubudur. Elek numarası, boya sistemi ve pozlama koşulu doğru seçimi belirler.",
    buyerIntent:
      "Kalıp hazırlama ürünü, fotoemülsiyon veya emülsiyon sökücü arayan serigrafi atölyelerini hedefler.",
    productGroups: ["Serigrafi emülsiyonu", "Fotoemülsiyon", "Emülsiyon sökücü", "Kalıp temizleme kimyasalları"],
    surfaces: ["ipek kalıp", "polyester elek", "tekstil kalıbı", "ambalaj baskı kalıbı"],
    technicalNotes: [
      "Pozlama süresi ve kurutma koşulu kalıp netliğini etkiler.",
      "Kullanılan boya tipi emülsiyon seçiminde önemlidir.",
      "Kalıp temizliği tekrar kullanım maliyetini azaltır.",
    ],
    featuredProducts: ["Serigrafi Emülsiyonu", "Emülsiyon Sökücü"],
    faq: [
      {
        question: "Serigrafi emülsiyonu ne işe yarar?",
        answer:
          "Baskı kalıbında desenin oluşturulmasını sağlar ve boya geçişinin kontrollü yapılmasına yardımcı olur.",
      },
      {
        question: "Emülsiyon sökücü ne zaman kullanılır?",
        answer:
          "Kalıp yenileme veya eski desenin temizlenmesi gerektiğinde kullanılır.",
      },
    ],
    relatedSlugs: ["serigrafi-yardimci-kimyasallari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["serigrafi-emulsiyonu", "emulsiyon-sokucu", "serigrafi-kalip-hazirlama"],
  },
  {
    slug: "serigrafi-inceltici-geciktirici",
    title: "Serigrafi İnceltici ve Geciktirici | Baskı Yardımcıları | Magellan Boya",
    description:
      "Serigrafi inceltici, geciktirici ve viskozite ayarlayıcı yardımcı ürünler için teknik tedarik sayfası.",
    h1: "Serigrafi İnceltici, Geciktirici ve Viskozite Yardımcıları",
    eyebrow: "İnceltici",
    focusKeyword: "serigrafi inceltici geciktirici",
    intro:
      "İnceltici ve geciktirici ürünleri, boya akışını ve kuruma davranışını kontrol etmek için kullanılır. Ölçüsüz kullanım baskı karakterini bozabileceği için ürün tipi ve uygulama koşulu birlikte değerlendirilmelidir.",
    buyerIntent:
      "Boya yoğunluğu, kuruma hızı, kalıp tıkanması veya baskı akışı problemi yaşayan kullanıcıları hedefler.",
    productGroups: ["İnceltici", "Geciktirici", "Viskozite düzenleyici", "Sertleştirici"],
    surfaces: ["PVC baskı", "plastik baskı", "tekstil baskı", "ambalaj baskı"],
    technicalNotes: [
      "İnceltici miktarı boya tipine göre belirlenmelidir.",
      "Geciktirici sıcak ortam ve hızlı kuruma sorunlarında değerlendirilebilir.",
      "Sertleştirici dayanım beklentisi olan yüzeylerde destek ürün olabilir.",
    ],
    featuredProducts: ["İnceltici", "Sertleştirici"],
    faq: [
      {
        question: "Serigrafi inceltici ne işe yarar?",
        answer:
          "Boyanın viskozitesini ve akışını uygulama koşuluna göre ayarlamaya yardımcı olur.",
      },
      {
        question: "Geciktirici ne zaman kullanılır?",
        answer:
          "Boya çok hızlı kuruyor, kalıp tıkanıyor veya baskı sırasında akış kontrolü zorlaşıyorsa değerlendirilebilir.",
      },
    ],
    relatedSlugs: ["serigrafi-yardimci-kimyasallari", "pvc-serigrafi-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["inceltici", "geciktirici", "sertlestirici", "serigrafi-baski-hatalari"],
  },
  {
    slug: "toptan-serigrafi-boyalari",
    title: "Toptan Serigrafi Boyaları | Uygun Fiyatlı Tedarik | Magellan Boya",
    description:
      "Toptan serigrafi boyaları, düzenli baskı, ambalaj, tekstil ve baskı atölyeleri için fiyat ve tedarik çözümleri.",
    h1: "Toptan Serigrafi Boyaları ve Düzenli Tedarik Planı",
    eyebrow: "Toptan",
    focusKeyword: "toptan serigrafi boyaları",
    intro:
      "Toptan serigrafi boyaları, düzenli boya tüketen firmalar için yalnızca fiyat avantajı değil; stok sürekliliği, renk standardı, ürün tekrar edilebilirliği ve teknik destek anlamına gelir.",
    buyerIntent:
      "Toptan fiyat, bayilik, düzenli sevkiyat ve kurumsal tedarik arayan ticari kullanıcıları hedefler.",
    productGroups: ["Toptan serigrafi boya", "Toptan plastisol boya", "Toptan yardımcı kimyasal", "Kurumsal tedarik"],
    surfaces: ["tekstil", "ambalaj", "poşet", "PVC", "plastik", "etiket", "deri"],
    technicalNotes: [
      "Düzenli alımda ürün grubu ve tüketim miktarı netleştirilmelidir.",
      "Toptan tedarikte termin planı ve stok güvenliği önemlidir.",
      "Teknik destek toplam maliyeti düşürebilir.",
    ],
    featuredProducts: ["Plastisol Çeşitleri", "UV Renkli Serigrafi Boyaları", "Serigrafi Emülsiyonu", "İnceltici"],
    faq: [
      {
        question: "Toptan serigrafi boya fiyatı nasıl alınır?",
        answer:
          "Ürün listesi, ambalaj miktarı, aylık tüketim ve sevkiyat beklentisi paylaşılarak fiyat alınabilir.",
      },
      {
        question: "Düzenli boya tüketen firmalara tedarik yapılır mı?",
        answer:
          "Evet. Matbaa, tekstil baskı, ambalaj ve endüstriyel baskı işletmeleri için düzenli tedarik planı oluşturulabilir.",
      },
    ],
    relatedSlugs: ["serigrafi-baski-boyalari", "serigrafi-boya-cesitleri", "serigrafi-yardimci-kimyasallari"],
    relatedLandingSlugs: ["toptan-serigrafi-boya", "serigrafi-boya-fiyatlari", "serigrafi-boya-tedarikcisi"],
  },
  {
    slug: "plastik-baski-boyalari",
    title: "Plastik Baskı Boyaları | PVC, PP, PE ve Serigrafi Baskı | Magellan Boya",
    description:
      "Plastik baskı boyaları; PVC, PP, PE, promosyon, ambalaj ve etiket yüzeyleri için serigrafi çözümleri.",
    h1: "Plastik Baskı Boyaları ve Serigrafi Yüzey Çözümleri",
    eyebrow: "Plastik Baskı",
    focusKeyword: "plastik baskı boyaları",
    intro:
      "Plastik baskı boyaları seçilirken plastik türü, yüzey enerjisi, tutunma beklentisi ve kullanım şartları önemlidir. PVC, PP ve PE yüzeyler aynı davranışı göstermediği için ürün seçimi yüzeye göre yapılmalıdır.",
    buyerIntent:
      "Promosyon, plastik ambalaj, etiket ve teknik parça baskısı yapan kullanıcılar için hazırlanmıştır.",
    productGroups: ["Plastik serigrafi boyası", "PVC baskı boyası", "PP baskı boyası", "PE baskı boyası"],
    surfaces: ["PVC", "PP", "PE", "sert plastik", "plastik bardak", "promosyon ürünleri"],
    technicalNotes: [
      "Plastik yüzeylerde numune baskı ve tutunma testi önemlidir.",
      "Yüzey temizliği baskı dayanımını doğrudan etkiler.",
      "Ürün seçimi plastik türüne göre değişebilir.",
    ],
    featuredProducts: ["PVC Altın Yaldız Serigrafi Boyası", "PVC Gümüş Yaldız Serigrafi Boyası", "UV Renkli Serigrafi Boyaları"],
    faq: [
      {
        question: "Plastik baskı boyası her plastik türüne tutar mı?",
        answer:
          "Hayır. PVC, PP, PE ve farklı plastikler için ürün seçimi ve yüzey hazırlığı değişebilir.",
      },
      {
        question: "Plastik yüzey için hangi bilgiler gerekir?",
        answer:
          "Plastik türü, yüzeyin parlaklığı, kullanım alanı, baskı adedi ve beklenen dayanım bilgisi gerekir.",
      },
    ],
    relatedSlugs: ["pvc-serigrafi-boyalari", "uv-serigrafi-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["plastik-serigrafi-boyasi", "polipropilen-baski-boyasi", "polietilen-baski-boyasi"],
  },
  {
    slug: "ambalaj-baski-boyalari",
    title: "Ambalaj Baskı Boyaları | Poşet, Etiket ve Karton Baskı | Magellan Boya",
    description:
      "Ambalaj baskı boyaları; kağıt poşet, plastik poşet, etiket, karton ve promosyon ambalaj baskıları için Magellan Boya.",
    h1: "Ambalaj Baskı Boyaları ve Marka Görünürlüğü Çözümleri",
    eyebrow: "Ambalaj",
    focusKeyword: "ambalaj baskı boyaları",
    intro:
      "Ambalaj baskı boyaları, marka yazısının okunaklı, rengin net ve üretim akışının stabil olması için doğru yüzey grubuna göre seçilir. Kağıt, karton, PVC ve plastik ambalajlar farklı ürün yaklaşımı gerektirir.",
    buyerIntent:
      "Poşet, etiket, karton ambalaj ve marka ambalajı basan firmalara ürün kategorisi sunar.",
    productGroups: ["Poşet baskı boyası", "Etiket baskı boyası", "Karton baskı boyası", "PVC ambalaj boyası"],
    surfaces: ["kağıt poşet", "plastik poşet", "etiket", "karton", "şeffaf ambalaj"],
    technicalNotes: [
      "Logo okunurluğu ve renk tutarlılığı ambalaj baskısında kritiktir.",
      "Kuruma hızı üretim temposuna göre planlanmalıdır.",
      "Ambalaj yüzeyi ürün seçimini belirler.",
    ],
    featuredProducts: ["PVC Altın Yaldız Serigrafi Boyası", "PVC Gümüş Yaldız Serigrafi Boyası", "UV Renkli Serigrafi Boyaları"],
    faq: [
      {
        question: "Poşet baskısı için hangi boya kullanılır?",
        answer:
          "Poşetin kağıt, plastik, PE veya PVC yapısına göre farklı serigrafi boya grupları değerlendirilir.",
      },
      {
        question: "Ambalaj baskı boyası için fiyat nasıl alınır?",
        answer:
          "Yüzey tipi, renk sayısı, adet, ürün grubu ve ambalaj miktarı paylaşılarak teklif alınabilir.",
      },
    ],
    relatedSlugs: ["serigrafi-baski-boyalari", "plastik-baski-boyalari", "pvc-serigrafi-boyalari"],
    relatedLandingSlugs: ["ambalaj-baski-boyasi", "poset-baski-boyasi", "etiket-baski-boyasi"],
  },
  {
    slug: "pvc-yaldiz-boyalari",
    title: "PVC Yaldız Boyaları | Altın ve Gümüş Serigrafi Baskı | Magellan Boya",
    description:
      "PVC altın yaldız, gümüş yaldız ve dekoratif serigrafi baskı boyaları için ürün ve tedarik bilgisi.",
    h1: "PVC Yaldız Boyaları ve Dekoratif Serigrafi Baskılar",
    eyebrow: "Yaldız",
    focusKeyword: "PVC yaldız boyaları",
    intro:
      "PVC yaldız boyaları, dekoratif görünüm, metalik etki ve premium baskı ihtiyacı olan yüzeylerde değerlendirilir. Altın ve gümüş etki için örtücülük, parlaklık ve yüzey tutunması birlikte önemlidir.",
    buyerIntent:
      "Altın yaldız, gümüş yaldız veya dekoratif PVC serigrafi boyası arayan kullanıcıları hedefler.",
    productGroups: ["PVC altın yaldız boya", "PVC gümüş yaldız boya", "Dekoratif serigrafi boyası"],
    surfaces: ["PVC", "suni deri", "karton", "etiket", "premium ambalaj", "promosyon"],
    technicalNotes: [
      "Metalik etki için karıştırma ve uygulama standardı önemlidir.",
      "Yüzey parlaklığı nihai görünümü etkileyebilir.",
      "Numune baskı, ürün seçimini netleştirir.",
    ],
    featuredProducts: ["PVC Altın Yaldız Serigrafi Boyası", "PVC Gümüş Yaldız Serigrafi Boyası"],
    faq: [
      {
        question: "PVC yaldız boyası hangi işler için uygundur?",
        answer:
          "Dekoratif etiket, ambalaj, promosyon, suni deri ve premium görünüm istenen serigrafi baskılarda değerlendirilebilir.",
      },
      {
        question: "Altın ve gümüş yaldız arasında teknik fark var mı?",
        answer:
          "Görsel etki, pigment yapısı ve uygulama beklentisi farklılaşabilir; yüzeye göre deneme yapılması önerilir.",
      },
    ],
    relatedSlugs: ["pvc-serigrafi-boyalari", "ambalaj-baski-boyalari", "serigrafi-baski-boyalari"],
    relatedLandingSlugs: ["pvc-serigrafi-boyasi", "pvc-baski-boyasi", "promosyon-baski-boyasi"],
  },
  {
    slug: "tisort-baski-boyalari",
    title: "Tişört Baskı Boyaları | Plastisol ve Tekstil Serigrafi | Magellan Boya",
    description:
      "Tişört baskı boyaları, plastisol, su bazlı tekstil boya ve ipek baskı ürünleri için tedarik çözümleri.",
    h1: "Tişört Baskı Boyaları ve Tekstil Serigrafi Ürünleri",
    eyebrow: "Tişört Baskı",
    focusKeyword: "tişört baskı boyaları",
    intro:
      "Tişört baskı boyaları seçilirken kumaş türü, renk örtücülüğü, baskı hissi, yıkama dayanımı ve üretim adedi birlikte değerlendirilmelidir. Plastisol ve su bazlı seçenekler farklı sonuçlar verebilir.",
    buyerIntent:
      "Tişört baskısı yapan tekstil atölyeleri ve promosyon üreticilerinin ürün aramasını karşılar.",
    productGroups: ["Tişört baskı boyası", "Plastisol boya", "Su bazlı tekstil boyası", "İpek baskı boyası"],
    surfaces: ["tişört", "sweatshirt", "pamuklu kumaş", "bez çanta", "promosyon tekstili"],
    technicalNotes: [
      "Koyu kumaşlarda örtücülük daha belirleyicidir.",
      "Yıkama dayanımı uygulama ve fikse koşuluna bağlıdır.",
      "Renk standardı seri üretimde kayıt altına alınmalıdır.",
    ],
    featuredProducts: ["Plastisol Çeşitleri", "Su Bazlı Siyah Beyaz Boyalar"],
    faq: [
      {
        question: "Tişört baskısı için hangi boya tercih edilir?",
        answer:
          "Kumaş ve hedef etkiye göre plastisol veya su bazlı tekstil boyası değerlendirilebilir.",
      },
      {
        question: "Tişört baskı boyası toptan alınabilir mi?",
        answer:
          "Evet. Düzenli tüketim yapan atölyeler için ürün ve miktara göre toptan tedarik planı yapılabilir.",
      },
    ],
    relatedSlugs: ["tekstil-baski-boyalari", "plastisol-boyalari", "su-bazli-serigrafi-boyalari"],
    relatedLandingSlugs: ["tisort-baski-boyasi", "tekstil-baski-boyasi", "plastisol-boya"],
  },
  {
    slug: "serigrafi-baski-malzemeleri",
    title: "Serigrafi Baskı Malzemeleri | Boya, Emülsiyon, Ragle ve Kimyasal | Magellan Boya",
    description:
      "Serigrafi baskı malzemeleri; boya, emülsiyon, emülsiyon sökücü, inceltici, sertleştirici ve ragle ürünleri.",
    h1: "Serigrafi Baskı Malzemeleri ve Üretim Destek Ürünleri",
    eyebrow: "Malzemeler",
    focusKeyword: "serigrafi baskı malzemeleri",
    intro:
      "Serigrafi baskı malzemeleri boya ile sınırlı değildir. Kalıp hazırlama, baskı transferi, viskozite kontrolü, temizlik ve yüzey dayanımı için yardımcı malzemelerin doğru seçilmesi gerekir.",
    buyerIntent:
      "Serigrafi için boya yanında ekipman ve yardımcı malzeme arayan kullanıcıları Magellan ürünlerine yönlendirir.",
    productGroups: ["Serigrafi boya", "Emülsiyon", "Emülsiyon sökücü", "İnceltici", "Sertleştirici", "Ragle ve çekecek"],
    surfaces: ["tekstil", "ambalaj", "PVC", "plastik", "kalıp", "atölye ekipmanı"],
    technicalNotes: [
      "Boya ve kalıp kimyasalı uyumu baskı kararlılığını etkiler.",
      "Ragle baskı basıncı ve boya transferinde önemlidir.",
      "Yardımcı kimyasallar ölçülü kullanılmalıdır.",
    ],
    featuredProducts: ["Alüminyum Ragle ve Çekecekler", "Serigrafi Emülsiyonu", "Emülsiyon Sökücü", "İnceltici", "Sertleştirici"],
    faq: [
      {
        question: "Serigrafi baskı için hangi malzemeler gerekir?",
        answer:
          "Boya, kalıp/emülsiyon, ragle, inceltici veya yardımcı kimyasal, yüzeye göre uygun ürün ve temizlik ekipmanları gerekir.",
      },
      {
        question: "Serigrafi malzemesi tedariği yapılır mı?",
        answer:
          "Boya, emülsiyon, emülsiyon sökücü, inceltici, sertleştirici ve ragle gibi ürün grupları için tedarik desteği sunar.",
      },
    ],
    relatedSlugs: ["serigrafi-baski-boyalari", "serigrafi-yardimci-kimyasallari", "serigrafi-emulsiyonlari"],
    relatedLandingSlugs: ["serigrafi-yardimci-malzemeleri", "serigrafi-kimyasallari", "serigrafi-boyalari"],
  },
];

export const productCategoryPageMap = new Map(
  productCategoryPages.map((page) => [page.slug, page])
);

export const featuredProductCategoryPages = productCategoryPages.slice(0, 12);
