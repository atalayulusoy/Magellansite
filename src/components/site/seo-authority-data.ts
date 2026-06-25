import type { SeoLandingPage } from "./seo-landing-data";

type NamedTopic = {
  slug: string;
  name: string;
  angle: string;
  surface: string;
};

type PaintSystem = NamedTopic & {
  chemistry: string;
  coreSlug: string;
};

type Variant = {
  slug: string;
  name: string;
  angle: string;
};

const hubSlugs = {
  academy: "magellan-akademi",
  paint: "boya-merkezi",
  applications: "serigrafi-kullanim-alanlari",
  technical: "teknik-bilgi-merkezi",
  chemical: "kimyasal-merkezi",
  calculators: "serigrafi-hesaplama-araclari",
  wiki: "serigrafi-wikipedia",
  tv: "magellan-tv",
  brand: "magellan-marka-merkezi",
  ai: "serigrafi-ai",
  comparisons: "boya-karsilastirmalari",
  pdf: "pdf-merkezi",
  osb: "organize-sanayi-bolgeleri",
} as const;

const evergreenSlugs = [
  "serigrafi-boyalari",
  "serigrafi-baski-boyalari",
  "serigrafi-boya-fiyatlari",
  "toptan-serigrafi-boya",
  "pvc-serigrafi-boyasi",
  "plastisol-boya",
  "uv-serigrafi-boyasi",
  "serigrafi-kimyasallari",
];

function slugify(value: string) {
  const normalized = value
    .replace(/Ç/g, "C")
    .replace(/Ğ/g, "G")
    .replace(/İ/g, "I")
    .replace(/Ö/g, "O")
    .replace(/Ş/g, "S")
    .replace(/Ü/g, "U")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u");

  return normalized
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function lower(value: string) {
  return value.toLocaleLowerCase("tr-TR");
}

function uniq(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function page(input: SeoLandingPage): SeoLandingPage {
  return input;
}

const paintSystems: PaintSystem[] = [
  {
    slug: "pvc",
    name: "PVC",
    angle: "PVC, suni deri, etiket ve plastik yüzeylerde güçlü tutunma isteyen serigrafi işleri",
    surface: "PVC, suni deri, etiket, ambalaj, promosyon ve teknik plastik parçalar",
    chemistry: "solvent dengesi, yüzey temizliği ve kontrollü kuruma",
    coreSlug: "pvc-serigrafi-boyasi",
  },
  {
    slug: "uv",
    name: "UV",
    angle: "UV ışıkla hızlı kürlenen, parlak ve seri üretime uygun baskı süreçleri",
    surface: "etiket, ambalaj, plastik, cam, metal ve parlak promosyon yüzeyleri",
    chemistry: "lamba gücü, hat hızı, film kalınlığı ve tam kürlenme kontrolü",
    coreSlug: "uv-serigrafi-boyasi",
  },
  {
    slug: "plastisol",
    name: "Plastisol",
    angle: "tekstil serigrafisinde canlı renk, yüksek örtücülük ve yıkama dayanımı isteyen işler",
    surface: "tişört, sweatshirt, bez çanta, iş kıyafeti ve promosyon tekstili",
    chemistry: "fikse sıcaklığı, baskı kalınlığı, kumaş tipi ve elastikiyet dengesi",
    coreSlug: "plastisol-boya",
  },
  {
    slug: "naylobek",
    name: "Naylobek",
    angle: "naylon, çanta, teknik kumaş ve esnek sentetik yüzeylere yönelik baskı ihtiyaçları",
    surface: "naylon çanta, sentetik kumaş, spor ekipmanı, promosyon tekstili ve aksesuarlar",
    chemistry: "esneklik, tutunma, yüzey enerjisi ve kullanım sonrası dayanım",
    coreSlug: "tekstil-baski-boyasi",
  },
  {
    slug: "su-bazli",
    name: "Su Bazlı",
    angle: "tekstil yüzeylerde yumuşak tuşe, doğal his ve kontrollü kuruma isteyen uygulamalar",
    surface: "pamuklu kumaş, bez çanta, tişört, promosyon tekstili ve moda ürünleri",
    chemistry: "kumaş emiciliği, su bazlı akış, fikse koşulu ve kalıp temizliği",
    coreSlug: "su-bazli-serigrafi-boyasi",
  },
  {
    slug: "solvent-bazli",
    name: "Solvent Bazlı",
    angle: "plastik, PVC, metal ve endüstriyel yüzeylerde hızlı tutunma isteyen baskılar",
    surface: "PVC, ABS, metal, cam, sert plastik, etiket ve teknik parça yüzeyleri",
    chemistry: "solvent buharlaşması, viskozite, yüzey ön hazırlığı ve kuruma hızı",
    coreSlug: "serigrafi-baski-boyasi",
  },
  {
    slug: "tekstil",
    name: "Tekstil",
    angle: "kumaş üstü baskıda renk canlılığı, esneklik ve yıkama performansı hedefleyen işler",
    surface: "pamuk, polyester karışım, tişört, sweatshirt, bez çanta ve iş kıyafeti",
    chemistry: "kumaş tipi, fikse, esneklik, tuşe ve opaklık dengesi",
    coreSlug: "tekstil-baski-boyasi",
  },
  {
    slug: "endustriyel",
    name: "Endüstriyel",
    angle: "cihaz, panel, uyarı levhası ve teknik parçalarda okunabilir ve dayanıklı baskılar",
    surface: "metal panel, plastik gövde, elektronik panel, uyarı levhası ve makine etiketi",
    chemistry: "çizilme dayanımı, yüzey uyumu, teknik işaretleme ve kalite kontrol",
    coreSlug: "endustriyel-serigrafi-boyasi",
  },
];

const paintVariants: Variant[] = [
  { slug: "siyah", name: "Siyah", angle: "yüksek okunurluk ve net logo baskısı" },
  { slug: "beyaz", name: "Beyaz", angle: "opak zemin, alt baskı ve kontrast ihtiyacı" },
  { slug: "kirmizi", name: "Kırmızı", angle: "marka rengi, uyarı vurgusu ve canlı ton beklentisi" },
  { slug: "sari", name: "Sarı", angle: "dikkat rengi, uyarı baskısı ve yüksek görünürlük" },
  { slug: "mavi", name: "Mavi", angle: "kurumsal ton, teknik etiket ve seri üretim standardı" },
  { slug: "yesil", name: "Yeşil", angle: "ambalaj, promosyon ve ürün ayrıştırma baskıları" },
  { slug: "turuncu", name: "Turuncu", angle: "yüksek görünürlük ve promosyon baskısı" },
  { slug: "altin", name: "Altın", angle: "premium ambalaj, yaldız efekti ve dekoratif vurgu" },
  { slug: "gumus", name: "Gümüş", angle: "metalik etki, teknik görünüm ve premium marka baskısı" },
  { slug: "florasan", name: "Florasan", angle: "güçlü görünürlük ve özel efekt beklentisi" },
  { slug: "metalik", name: "Metalik", angle: "parlak efekt, dekoratif yüzey ve marka ayrışması" },
  { slug: "mat", name: "Mat", angle: "düşük yansıma, sade görünüm ve teknik panel baskısı" },
  { slug: "parlak", name: "Parlak", angle: "canlı renk, yüksek parlaklık ve vitrin etkisi" },
  { slug: "opak", name: "Opak", angle: "koyu zeminde örtücülük ve net renk alma" },
  { slug: "transparan", name: "Transparan", angle: "şeffaf katman, efekt ve ince ayar uygulamaları" },
  { slug: "hizli-kuruyan", name: "Hızlı Kuruyan", angle: "seri üretim ve kısa istifleme süresi" },
  { slug: "gec-kuruyan", name: "Geç Kuruyan", angle: "kalıp tıkanmasını azaltma ve sıcak ortam kontrolü" },
  { slug: "esnek", name: "Esnek", angle: "bükülen, katlanan ve hareketli yüzeylerde dayanım" },
  { slug: "sert-yuzey", name: "Sert Yüzey", angle: "cam, metal ve sert plastik gibi yüzeylerde tutunma" },
  { slug: "dis-mekan", name: "Dış Mekan", angle: "ışık, sürtünme ve kullanım dayanımı beklentisi" },
];

const academyTopics: NamedTopic[] = [
  ["serigrafi-nedir", "Serigrafi Nedir?", "serigrafi baskının temel mantığı, boya geçişi ve yüzey uyumu", "tekstil, PVC, plastik, cam, metal ve ambalaj"],
  ["serigrafi-tarihi", "Serigrafi Tarihi", "ipek baskıdan endüstriyel serigrafiye uzanan gelişim", "grafik baskı, tekstil ve sanayi üretimi"],
  ["serigrafi-nasil-yapilir", "Serigrafi Nasıl Yapılır?", "kalıp hazırlama, boya seçimi, rakle kullanımı ve kurutma adımları", "atölye, yarı otomatik ve seri üretim hatları"],
  ["serigrafi-baski-teknikleri-rehberi", "Serigrafi Baskı Teknikleri", "manuel, yarı otomatik ve teknik baskı yöntemlerinin karşılaştırılması", "tekstil, ambalaj ve teknik parça üretimi"],
  ["serigrafi-makinesi-secimi", "Serigrafi Makinesi Seçimi", "baskı adedi, yüzey formatı ve ürün grubuna göre makine tercihi", "düz yüzey, tekstil, silindirik ürün ve etiket"],
  ["serigrafi-baski-hatalari-rehberi", "Serigrafi Baskı Hataları", "akma, soyulma, kuruma, kabarma ve tutunma problemlerinin okunması", "PVC, plastisol, UV ve su bazlı uygulamalar"],
  ["serigrafi-terimleri", "Serigrafi Terimleri", "mesh, shore, rakle, emülsiyon, viskozite ve kürlenme kavramları", "kalıp hazırlama ve baskı süreci"],
  ["serigrafi-sozlugu", "Serigrafi Sözlüğü", "serigrafi alanındaki teknik kavramları sade ve anlaşılır biçimde açıklama", "eğitim, satın alma ve teknik destek"],
  ["serigrafi-egitimi", "Serigrafi Eğitimi", "başlangıçtan üretim standardına kadar serigrafi öğrenme yolu", "atölye kurulum, kalite kontrol ve ürün seçimi"],
  ["serigrafi-kalip-nedir", "Serigrafi Kalıp Nedir?", "emülsiyon, elek, pozlama ve desen aktarımının rolü", "tekstil ve endüstriyel baskı kalıpları"],
  ["serigrafi-elek-numarasi", "Serigrafi Elek Numarası", "mesh seçiminin boya geçişi, detay ve örtücülük üzerindeki etkisi", "ince detay, opak baskı ve tekstil yüzeyler"],
  ["serigrafi-ragle-acisi", "Serigrafi Ragle Açısı", "rakle açısı ve baskı basıncının renk yoğunluğu ile çizgi netliğine etkisi", "manuel ve yarı otomatik baskı"],
  ["serigrafi-viskozite-nedir", "Serigrafi Viskozite Nedir?", "boya akışı, inceltici kullanımı ve baskı kararlılığı", "PVC, UV, plastisol ve su bazlı boya"],
  ["serigrafi-kurutma-yontemleri", "Serigrafi Kurutma Yöntemleri", "hava kurutma, fırın, fikse ve UV kürlenme farkları", "tekstil, plastik, ambalaj ve etiket"],
  ["serigrafi-renk-eslestirme", "Serigrafi Renk Eşleştirme", "kurumsal ton, numune baskı ve parti standardı oluşturma", "marka baskısı, ambalaj ve tekstil"],
  ["serigrafi-numune-baski", "Serigrafi Numune Baskı", "seri üretim öncesi küçük denemenin teknik ve ticari değeri", "yeni yüzey, yeni renk ve yüksek adetli sipariş"],
  ["serigrafi-kalite-kontrol", "Serigrafi Kalite Kontrol", "tutunma, renk, kuruma, çizilme ve tekrar edilebilirlik kontrolü", "üretim hattı ve tedarik süreci"],
  ["serigrafi-fire-azaltma", "Serigrafi Fire Azaltma", "doğru boya, doğru kalıp ve doğru kurutma ile fireyi düşürme", "tekstil, ambalaj ve plastik üretimi"],
  ["serigrafi-atolye-kurulumu", "Serigrafi Atölye Kurulumu", "temel ekipman, boya grubu ve proses akışını planlama", "küçük atölye ve seri üretim başlangıcı"],
  ["serigrafi-urun-secimi", "Serigrafi Ürün Seçimi", "yüzey, adet, renk ve dayanım beklentisine göre ürün grubu belirleme", "profesyonel baskı işletmeleri"],
  ["serigrafi-boya-karistirma", "Serigrafi Boya Karıştırma", "homojen karışım, pigment dağılımı ve üretim standardı", "renkli, yaldızlı ve opak baskılar"],
  ["serigrafi-boya-depolama", "Serigrafi Boya Depolama", "raf ömrü, kapak kapatma, sıcaklık ve parti takibi", "stoklu çalışan atölyeler"],
  ["serigrafi-boya-raf-omru-rehberi", "Serigrafi Boya Raf Ömrü", "ürün kararlılığı ve kullanım öncesi kontrol adımları", "toptan boya tedariği"],
  ["serigrafi-iletisim-formu-rehberi", "Serigrafi Teklif Bilgileri", "doğru teklif için yüzey, adet, renk ve dayanım bilgisini hazırlama", "satın alma ve teknik destek"],
  ["serigrafi-yuzey-hazirligi", "Serigrafi Yüzey Hazırlığı", "temizlik, yağ alma, yüzey enerjisi ve test baskısı", "PVC, PP, PE, cam ve metal"],
  ["serigrafi-tutunma-testi", "Serigrafi Tutunma Testi", "bant testi, çizilme kontrolü ve kullanım simülasyonu", "endüstriyel baskı yüzeyleri"],
  ["serigrafi-yikama-dayanimi", "Serigrafi Yıkama Dayanımı", "tekstil baskıda fikse ve ürün seçiminin dayanım etkisi", "tişört, sweatshirt ve iş kıyafeti"],
  ["serigrafi-opaklik", "Serigrafi Opaklık", "koyu zeminde örtücülük ve renk yoğunluğu sağlama", "tekstil ve plastik yüzeyler"],
  ["serigrafi-ince-detay-baski", "Serigrafi İnce Detay Baskı", "ince çizgi, küçük yazı ve yüksek mesh kullanımı", "etiket, panel ve teknik işaretleme"],
  ["serigrafi-yaldiz-baski", "Serigrafi Yaldız Baskı", "altın, gümüş ve metalik efektlerde uygulama standardı", "premium ambalaj, etiket ve tekstil"],
  ["serigrafi-transfer-baski", "Serigrafi Transfer Baskı", "transfer uygulamalarında boya, taşıyıcı ve fikse ilişkisi", "tekstil ve promosyon ürünleri"],
  ["serigrafi-etiket-baski", "Serigrafi Etiket Baskı", "etiket yüzeylerinde okunurluk, kuruma ve çizilme dayanımı", "PVC, folyo ve rulo etiket"],
  ["serigrafi-ambalaj-baski", "Serigrafi Ambalaj Baskı", "ambalajda marka görünürlüğü ve hızlı üretim dengesi", "kağıt, karton, plastik ve PVC ambalaj"],
  ["serigrafi-promosyon-baski", "Serigrafi Promosyon Baskı", "farklı yüzeylerde logo netliği ve numune testinin önemi", "kalem, çanta, bardak ve plastik ürün"],
  ["serigrafi-elektronik-panel-baski", "Serigrafi Elektronik Panel Baskı", "ikon, yazı ve teknik işaretlemede dayanıklı baskı", "membran switch, cihaz paneli ve plastik gövde"],
  ["serigrafi-medikal-baski", "Serigrafi Medikal Baskı", "okunurluk, temizlik ve yüzey uyumu gerektiren teknik baskılar", "medikal ekipman, etiket ve plastik parça"],
  ["serigrafi-cam-baski-rehberi", "Serigrafi Cam Baskı", "cam yüzeylerde tutunma, kuruma ve çizilme kontrolü", "şişe, panel ve dekoratif cam"],
  ["serigrafi-metal-baski-rehberi", "Serigrafi Metal Baskı", "metal yüzeylerde ön hazırlık ve dayanım beklentisi", "etiket, panel, levha ve endüstriyel parça"],
  ["serigrafi-pleksi-baski", "Serigrafi Pleksi Baskı", "pleksi ve akrilik yüzeylerde parlaklık, tutunma ve renk standardı", "tabela, dekoratif ürün ve promosyon"],
  ["serigrafi-deri-baski", "Serigrafi Deri Baskı", "deri ve suni deri yüzeylerde esneklik ve sürtünme dayanımı", "ayakkabı, çanta ve etiket"],
  ["serigrafi-ayakkabi-baski", "Serigrafi Ayakkabı Baskı", "ayakkabı ve terlik yüzeylerinde esneklik ve tutunma", "PVC, suni deri, tekstil ve kauçuk benzeri yüzeyler"],
  ["serigrafi-poset-baski", "Serigrafi Poşet Baskı", "poşet yüzeylerinde logo okunurluğu, kuruma ve seri üretim", "kraft, plastik, PE ve PVC poşet"],
  ["serigrafi-katalog-hazirlama", "Serigrafi Katalog Hazırlama", "ürün, teknik bilgi ve kullanım alanlarını doğru organize etme", "satış ekibi ve bayilik yapısı"],
  ["serigrafi-satin-alma-rehberi", "Serigrafi Satın Alma Rehberi", "fiyat, kalite, tedarik ve teknik destek dengesini kurma", "atölye, matbaa ve fabrika satın alma"],
  ["serigrafi-imalatci-secimi", "Serigrafi İmalatçı Seçimi", "üretici firma ile tedarikçi arasındaki farkları değerlendirme", "kurumsal ve toptan alım"],
  ["serigrafi-boya-sertlestirici", "Serigrafi Sertleştirici Kullanımı", "dayanım beklentisi olan yüzeylerde yardımcı kimyasal seçimi", "cam, metal, PVC ve endüstriyel baskı"],
  ["serigrafi-inceltici-orani", "Serigrafi İnceltici Oranı", "akış, viskozite ve tutunmayı bozmadan inceltme planı", "solvent bazlı ve PVC boya"],
  ["serigrafi-geciktirici-kullanimi", "Serigrafi Geciktirici Kullanımı", "sıcak ortam, kalıp tıkanması ve çalışma süresi yönetimi", "PVC, solvent bazlı ve teknik baskı"],
  ["serigrafi-emulsiyon-secimi", "Serigrafi Emülsiyon Seçimi", "boya sistemi, pozlama ve kalıp dayanımına göre emülsiyon tercihi", "tekstil, UV ve solvent bazlı baskı"],
  ["serigrafi-pozlama-suresi", "Serigrafi Pozlama Süresi", "desen netliği ve kalıp dayanımı için pozlama standardı", "ince detay ve uzun tiraj baskıları"],
  ["serigrafi-film-hazirlama", "Serigrafi Film Hazırlama", "tram, çizgi, opaklık ve pozlama uyumu", "kalıp hazırlama süreçleri"],
  ["serigrafi-mesh-secimi", "Serigrafi Mesh Seçimi", "elek numarası ve boya geçişini doğru eşleştirme", "opak, ince detay ve yaldız baskı"],
  ["serigrafi-shore-secimi", "Serigrafi Shore Seçimi", "rakle sertliğinin boya transferine etkisi", "tekstil ve endüstriyel baskı"],
  ["serigrafi-kurumsal-renk", "Serigrafide Kurumsal Renk", "marka rengini farklı yüzeylerde tekrar edilebilir hale getirme", "ambalaj, tekstil ve etiket"],
  ["serigrafi-uretim-planlama", "Serigrafi Üretim Planlama", "stok, termin, numune ve kalite kontrol akışı", "seri üretim yapan firmalar"],
  ["serigrafi-boya-standardi", "Serigrafi Boya Standardı", "ürün reçetesi, uygulama notu ve tekrar sipariş disiplini", "kurumsal tedarik süreçleri"],
  ["serigrafi-teknik-destek", "Serigrafi Teknik Destek", "sorunu doğru tanımlama ve ürün grubunu birlikte seçme", "matbaa, tekstil ve ambalaj firmaları"],
  ["serigrafi-ihracat-uretim", "Serigrafi İhracat Üretimi", "dökümantasyon, kalite tekrarları ve düzenli tedarik", "ihracat odaklı üreticiler"],
  ["serigrafi-bayi-rehberi", "Serigrafi Bayi Rehberi", "bayilik, stok planı ve ürün ailesi oluşturma", "bölgesel tedarik ve dağıtım"],
].map(([slug, name, angle, surface]) => ({ slug, name, angle, surface }));

const applicationAreas: NamedTopic[] = [
  ["kumanda-baskisi", "Kumanda Baskısı", "tuş takımı, ikon ve küçük yazılarda okunurluk", "ABS, PVC, polikarbon ve elektronik plastik"],
  ["beyaz-esya-baskisi", "Beyaz Eşya Baskısı", "panel, logo ve teknik işaretlemede dayanım", "metal, plastik panel ve kaplamalı yüzey"],
  ["oyuncak-baskisi", "Oyuncak Baskısı", "renkli plastik parçalarda net ve güvenli baskı", "ABS, PP, PE ve PVC oyuncak yüzeyleri"],
  ["promosyon-baskisi", "Promosyon Baskısı", "farklı yüzeylerde hızlı logo uygulaması", "kalem, çanta, bardak, plastik ve tekstil"],
  ["kalem-baskisi", "Kalem Baskısı", "silindirik veya düz küçük yüzeylerde okunurluk", "plastik, metal ve kaplamalı kalem gövdesi"],
  ["poset-baskisi", "Poşet Baskısı", "marka logosu ve seri ambalaj üretimi", "kraft, PE, PP, PVC ve kağıt poşet"],
  ["ambalaj-baskisi", "Ambalaj Baskısı", "raf görünürlüğü, hızlı kuruma ve renk standardı", "karton, plastik, etiket ve şeffaf ambalaj"],
  ["elektronik-baskisi", "Elektronik Baskısı", "ikon, panel ve teknik yazıların dayanıklı basılması", "polikarbon, polyester, ABS ve metal panel"],
  ["medikal-baskisi", "Medikal Baskı", "okunurluk ve yüzey uyumu gereken teknik işaretleme", "plastik, metal, etiket ve cihaz paneli"],
  ["cam-baskisi", "Cam Baskı", "parlak yüzeyde tutunma ve çizilme dayanımı", "cam şişe, panel, kavanoz ve dekoratif cam"],
  ["metal-baskisi", "Metal Baskı", "kaplamalı veya çıplak metalde kalıcı işaretleme", "alüminyum, sac, panel ve levha"],
  ["pleksi-baskisi", "Pleksi Baskı", "parlak akrilik yüzeyde net ve dekoratif baskı", "pleksi tabela, panel ve dekoratif parça"],
  ["pvc-baskisi", "PVC Baskı", "PVC yüzeylerde tutunma ve hızlı üretim", "PVC etiket, suni deri, ambalaj ve promosyon"],
  ["abs-baskisi", "ABS Baskı", "teknik plastik parçalarda dayanıklı logo ve ikon", "ABS gövde, cihaz kapağı ve oyuncak"],
  ["pp-baskisi", "PP Baskı", "düşük yüzey enerjili plastiklerde testli ürün seçimi", "PP kutu, kapak, ambalaj ve promosyon"],
  ["pe-baskisi", "PE Baskı", "esnek plastik yüzeylerde tutunma kontrolü", "PE poşet, şişe, kapak ve ambalaj"],
  ["ps-baskisi", "PS Baskı", "sert plastik yüzeylerde net logo baskısı", "PS kap, panel ve teknik parça"],
  ["pet-baskisi", "PET Baskı", "şeffaf ve parlak yüzeylerde temiz baskı", "PET etiket, ambalaj ve film"],
  ["deri-baskisi", "Deri Baskı", "esnek yüzeylerde sürtünme ve tutunma dengesi", "deri, suni deri, etiket ve aksesuar"],
  ["tekstil-baskisi", "Tekstil Baskı", "yıkama dayanımı ve esnek baskı karakteri", "tişört, sweatshirt, bez çanta ve iş kıyafeti"],
  ["ayakkabi-baskisi", "Ayakkabı Baskı", "ayakkabı parçalarında esneklik ve tutunma", "suni deri, tekstil, PVC ve kauçuk benzeri yüzey"],
  ["terlik-baskisi", "Terlik Baskı", "esnek yüzeylerde marka baskısı ve dayanım", "PVC, EVA, tekstil ve suni deri"],
  ["etiket-baskisi", "Etiket Baskı", "küçük yazı, barkod ve logo okunurluğu", "PVC, folyo, kağıt ve rulo etiket"],
  ["sticker-baskisi", "Sticker Baskı", "renk netliği ve yüzey uyumu", "PVC, folyo, kağıt ve şeffaf film"],
  ["tabela-baskisi", "Tabela Baskı", "dış mekan okunurluğu ve yüzey dayanımı", "pleksi, metal, PVC ve kompozit panel"],
  ["uyari-levhasi-baskisi", "Uyarı Levhası Baskısı", "teknik işaretleme ve yüksek görünürlük", "metal, plastik, PVC ve levha"],
  ["membran-switch-baskisi", "Membran Switch Baskısı", "ikon, tuş alanı ve teknik panel baskısı", "polikarbon, polyester ve yapışkanlı film"],
  ["kozmetik-ambalaj-baskisi", "Kozmetik Ambalaj Baskısı", "premium görünüm ve çizilme dayanımı", "cam, plastik, etiket ve kutu"],
  ["plastik-kutu-baskisi", "Plastik Kutu Baskısı", "kapak, kutu ve teknik ambalajlarda net baskı", "PP, PE, ABS, PVC ve PS"],
  ["rulo-etiket-baskisi", "Rulo Etiket Baskısı", "seri etiket üretiminde okunurluk ve kuruma", "PVC, kağıt, folyo ve PET etiket"],
  ["kraft-poset-baskisi", "Kraft Poşet Baskısı", "kağıt yüzeyde logo görünürlüğü", "kraft kağıt, karton ve ambalaj"],
  ["bez-canta-baskisi", "Bez Çanta Baskısı", "tekstil promosyon ürünlerinde logo netliği", "pamuk, kanvas ve karışım kumaş"],
  ["tisort-baskisi", "Tişört Baskısı", "canlı renk ve yıkama dayanımı", "pamuklu kumaş ve karışım tekstil"],
  ["sweatshirt-baskisi", "Sweatshirt Baskısı", "kalın kumaşta opak ve esnek baskı", "pamuklu ve karışım kalın kumaş"],
  ["is-kiyafeti-baskisi", "İş Kıyafeti Baskısı", "dayanım ve tekrar yıkama performansı", "polyester, pamuk ve karışım tekstil"],
  ["otomotiv-parca-baskisi", "Otomotiv Parça Baskısı", "teknik parçada dayanıklı işaretleme", "ABS, PP, metal ve kaplamalı yüzey"],
  ["savunma-sanayi-baskisi", "Savunma Sanayi Baskısı", "teknik okunurluk ve kalite standardı", "metal, plastik, panel ve etiket"],
  ["mobilya-aksesuar-baskisi", "Mobilya Aksesuar Baskısı", "aksesuar ve dekoratif yüzeylerde marka baskısı", "plastik, metal, deri ve PVC"],
  ["reklam-urunleri-baskisi", "Reklam Ürünleri Baskısı", "görsel etki ve hızlı tedarik", "tabela, promosyon, tekstil ve plastik"],
  ["ambalaj-kutusu-baskisi", "Ambalaj Kutusu Baskısı", "kutu üzerinde marka ve teknik bilgi baskısı", "karton, plastik ve kaplamalı kutu"],
  ["sise-baskisi", "Şişe Baskısı", "silindirik veya düz şişe yüzeylerinde tutunma", "cam, PET, PP ve PE şişe"],
  ["kapak-baskisi", "Kapak Baskısı", "küçük alanda net logo ve renk standardı", "plastik, metal ve kaplamalı kapak"],
  ["panel-baskisi", "Panel Baskısı", "teknik panelde ikon ve yazı dayanımı", "metal, plastik, polikarbon ve pleksi"],
  ["endustriyel-etiket-baskisi", "Endüstriyel Etiket Baskısı", "seri numara, uyarı ve teknik veri okunurluğu", "metalize etiket, PVC ve folyo"],
  ["promosyon-canta-baskisi", "Promosyon Çanta Baskısı", "farklı çanta yüzeylerinde logo baskısı", "bez, PVC, suni deri ve nonwoven"],
].map(([slug, name, angle, surface]) => ({ slug, name, angle, surface }));

const technicalProblems = [
  ["boya-neden-kurumaz", "Boya Neden Kurumaz?", "kuruma sistemi, ortam sıcaklığı, boya kalınlığı ve yardımcı kimyasal oranı"],
  ["boya-neden-catlar", "Boya Neden Çatlar?", "esneklik uyumsuzluğu, fazla sertleşme, yüzey hareketi ve yanlış ürün seçimi"],
  ["boya-neden-soyulur", "Boya Neden Soyulur?", "yüzey temizliği, tutunma, kürlenme ve yanlış boya grubu"],
  ["boya-neden-kabarir", "Boya Neden Kabarır?", "yüzey nemi, solvent hapsi, fazla katman ve kuruma dengesizliği"],
  ["boya-neden-yapismaz", "Boya Neden Yapışmaz?", "düşük yüzey enerjisi, yağ, toz ve uyumsuz ürün seçimi"],
  ["rakle-izi-neden-olur", "Rakle İzi Neden Olur?", "rakle sertliği, basınç, açı, elek ve viskozite uyumsuzluğu"],
  ["balik-gozu-neden-olur", "Balık Gözü Neden Olur?", "silikon, yağ, kir, yüzey gerilimi ve boya akış problemi"],
  ["portakal-kabugu-neden-olur", "Portakal Kabuğu Neden Oluşur?", "viskozite, kuruma hızı, yüzey gerilimi ve uygulama kalınlığı"],
  ["kalip-neden-tikanir", "Kalıp Neden Tıkanır?", "hızlı kuruma, yanlış inceltici, yüksek sıcaklık ve bekleme süresi"],
  ["renk-neden-farkli-cikar", "Renk Neden Farklı Çıkar?", "karıştırma, zemin rengi, baskı kalınlığı ve parti standardı"],
  ["baski-neden-akar", "Baskı Neden Akar?", "fazla inceltme, düşük viskozite, yüksek basınç ve yüzey uyumsuzluğu"],
  ["boya-neden-kopar", "Boya Neden Kopar?", "yetersiz tutunma, esnek yüzey ve yanlış kürlenme"],
  ["boya-neden-parlamaz", "Boya Neden Parlamaz?", "mat yüzey etkisi, ürün tipi, kuruma ve film kalınlığı"],
  ["boya-neden-soluk-cikar", "Boya Neden Soluk Çıkar?", "pigment yoğunluğu, zemin etkisi ve yetersiz boya geçişi"],
  ["baski-neden-bulasir", "Baskı Neden Bulaşır?", "kuruma süresi, istifleme, yüzey temas ve boya kalınlığı"],
  ["emulsiyon-neden-acilmaz", "Emülsiyon Neden Açılmaz?", "fazla pozlama, film opaklığı ve yıkama basıncı"],
  ["emulsiyon-neden-dokulur", "Emülsiyon Neden Dökülür?", "yetersiz pozlama, nem, yağlı elek ve kurutma hatası"],
  ["baski-neden-puslu-cikar", "Baskı Neden Puslu Çıkar?", "kalıp netliği, mesh seçimi, boya yayılması ve yüzey etkisi"],
  ["ince-yazi-neden-doluyor", "İnce Yazı Neden Doluyor?", "mesh, emülsiyon kalınlığı, viskozite ve rakle basıncı"],
  ["yaldiz-boya-neden-kararir", "Yaldız Boya Neden Kararır?", "pigment karışımı, yüzey etkisi, kuruma ve saklama koşulu"],
  ["uv-boya-neden-kurlenmez", "UV Boya Neden Kürlenmez?", "lamba gücü, hat hızı, boya kalınlığı ve yüzey gölgelemesi"],
  ["plastisol-neden-yikamada-cikar", "Plastisol Neden Yıkamada Çıkar?", "yetersiz fikse, kumaş uyumu ve baskı kalınlığı"],
  ["pvc-boya-neden-yapiskan-kalir", "PVC Boya Neden Yapışkan Kalır?", "solvent çıkışı, fazla kalın uygulama ve ortam koşulu"],
  ["serigrafide-elektriklenme-neden-olur", "Serigrafide Elektriklenme Neden Olur?", "film, plastik yüzey, ortam nemi ve toz çekme davranışı"],
  ["baski-neden-cizilir", "Baskı Neden Çizilir?", "yetersiz dayanım, yanlış sertleştirici ve yüzey kullanım şartı"],
  ["baski-neden-kokar", "Baskı Neden Kokar?", "solvent dengesi, kuruma eksikliği ve havalandırma yetersizliği"],
  ["boya-neden-topaklanir", "Boya Neden Topaklanır?", "depolama, karıştırma, raf ömrü ve kontaminasyon"],
  ["baski-neden-golgelenir", "Baskı Neden Gölgelenir?", "rakle basıncı, kalıp teması, boya geçişi ve yüzey düzlüğü"],
  ["baski-neden-dalgalanir", "Baskı Neden Dalgalanır?", "viskozite, elek gerilimi, rakle hareketi ve yüzey formu"],
  ["baski-neden-gec-kurur", "Baskı Neden Geç Kurur?", "boya tipi, yardımcı kimyasal, ortam ve katman kalınlığı"],
];

const chemicalItems = [
  "İnceltici",
  "Emülsiyon",
  "Sertleştirici",
  "Geciktirici",
  "G2",
  "G3",
  "G4",
  "Rakle",
  "Rakle Lastiği",
  "Film",
  "Pozlama",
  "Emülsiyon Sökücü",
  "Kalıp Açıcı",
  "Yıkama Kimyasalı",
  "Viskozite Düzenleyici",
];

const chemicalAngles = [
  ["nedir", "Nedir?", "ürünün ne işe yaradığını ve serigrafi prosesindeki yerini açıklar"],
  ["nasil-kullanilir", "Nasıl Kullanılır?", "doğru oran, uygulama sırası ve güvenli kullanım notlarını toplar"],
  ["secimi", "Seçimi", "boya tipi, yüzey ve üretim hızına göre doğru seçimi anlatır"],
];

const glossaryTerms = [
  "ABS",
  "PVC",
  "PET",
  "PP",
  "PE",
  "PS",
  "Mesh",
  "Shore",
  "Rakle",
  "Emülsiyon",
  "Viskozite",
  "Kürlenme",
  "UV",
  "Pigment",
  "Binder",
  "Catalyst",
  "Fikse",
  "Tuşe",
  "Opaklık",
  "Transparan",
  "Yaldız",
  "Plastisol",
  "Su Bazlı",
  "Solvent Bazlı",
  "Naylobek",
  "Pozlama",
  "Film",
  "Kalıp",
  "Elek",
  "Şablon",
  "Densite",
  "Tram",
  "Pantone",
  "Renk Eşleştirme",
  "Sertleştirici",
  "Geciktirici",
  "İnceltici",
  "Tiksotropi",
  "Yüzey Enerjisi",
  "Korona",
  "Aderans",
  "Çizilme Dayanımı",
  "Yıkama Dayanımı",
  "Bant Testi",
  "Kenar Netliği",
  "Boya Geçişi",
  "Rakle Açısı",
  "Rakle Basıncı",
  "Elek Gerilimi",
  "Kuruma",
  "Hava Kurutma",
  "Fırın Kurutma",
  "UV Lamba",
  "Hat Hızı",
  "Film Kalınlığı",
  "Alt Baskı",
  "Koyu Zemin",
  "Açık Zemin",
  "Metalik Pigment",
  "Florasan Pigment",
  "Yüzey Temizliği",
  "Yağ Alma",
  "Numune Baskı",
  "Seri Üretim",
  "Toptan Tedarik",
  "Teknik Destek",
  "Kalite Kontrol",
  "Raf Ömrü",
  "Parti Takibi",
  "Ambalaj",
  "Etiket",
  "Promosyon",
  "Membran Switch",
  "Polikarbon",
  "Pleksi",
  "Suni Deri",
  "Kraft Poşet",
  "Rulo Etiket",
  "Endüstriyel Baskı",
  "Transfer Baskı",
  "Flock Baskı",
];

const comparisonPairs = [
  ["PVC", "UV"],
  ["PVC", "Plastisol"],
  ["Su Bazlı", "Solvent Bazlı"],
  ["Naylobek", "PVC"],
  ["Plastisol", "Su Bazlı"],
  ["UV", "Solvent Bazlı"],
  ["PVC", "Akrilik"],
  ["PP", "PE"],
  ["ABS", "PVC"],
  ["PET", "PVC"],
  ["Mat", "Parlak"],
  ["Opak", "Transparan"],
  ["Altın Yaldız", "Gümüş Yaldız"],
  ["Hızlı Kuruyan", "Geç Kuruyan"],
  ["İnceltici", "Geciktirici"],
  ["Emülsiyon", "Film"],
  ["Mesh", "Shore"],
  ["Plastisol", "Transfer Baskı"],
  ["UV", "Etiket Baskı"],
  ["PVC", "Suni Deri"],
  ["Su Bazlı", "Plastisol"],
  ["Solvent Bazlı", "Su Bazlı"],
  ["Tekstil Boyası", "PVC Boya"],
  ["Endüstriyel Boya", "Tekstil Boyası"],
  ["Yaldız Boya", "Metalik Boya"],
];

const calculatorTopics = [
  ["murekkep-hesaplayici", "Mürekkep Hesaplayıcı", "baskı alanı, adet ve tahmini film kalınlığına göre tüketim planı"],
  ["inceltici-hesaplayici", "İnceltici Hesaplayıcı", "boya miktarı ve hedef oran üzerinden inceltici ihtiyacı"],
  ["viskozite-hesaplayici", "Viskozite Hesaplayıcı", "akış kontrolü ve uygulama aralığını düzenleme"],
  ["alan-hesaplayici", "Alan Hesaplayıcı", "baskı eni, boyu ve adet üzerinden toplam alan"],
  ["baski-alani-hesaplayici", "Baskı Alanı Hesaplayıcı", "ürün üzerindeki net baskı alanını tahmin etme"],
  ["boya-tuketimi-hesaplayici", "Boya Tüketimi Hesaplayıcı", "fire ve tekrar baskı payını dahil ederek tüketim hesabı"],
  ["kuruma-suresi-hesaplayici", "Kuruma Süresi Hesaplayıcı", "boya tipi, ortam ve katman kalınlığına göre süre planı"],
  ["mesh-secim-araci", "Mesh Seçim Aracı", "detay, opaklık ve boya tipine göre elek seçimi"],
];

const brandTopics = [
  ["magellan-hakkimizda", "Magellan Hakkımızda", "markanın serigrafi boya üretimindeki uzmanlık ve tedarik yaklaşımı"],
  ["magellan-fabrikamiz", "Magellan Fabrikamız", "üretim alanı, stok düzeni ve kalite kontrol disiplini"],
  ["magellan-uretim-sureci", "Magellan Üretim Süreci", "renk, karışım, dolum, kontrol ve sevkiyat akışı"],
  ["magellan-kalite-kontrol", "Magellan Kalite Kontrol", "renk, viskozite, tutunma ve parti standardı"],
  ["magellan-ar-ge", "Magellan Ar-Ge", "yüzey uyumu, özel renk ve teknik çözüm geliştirme"],
  ["neden-magellan", "Neden Magellan?", "ürün sürekliliği, teknik destek ve üretici firma avantajı"],
  ["magellan-sertifikalar", "Magellan Sertifikalar", "dokümantasyon ve kalite güveni için hazırlanan merkez"],
  ["magellan-bayilik", "Magellan Bayilik", "bölgesel satış, stok planı ve bayi destek modeli"],
  ["magellan-distributorluk", "Magellan Distribütörlük", "yurt içi ve yurt dışı dağıtım için iş ortaklığı"],
  ["magellan-ihracat", "Magellan İhracat", "uluslararası tedarik, paketleme ve dokümantasyon"],
  ["magellan-referanslar", "Magellan Referanslarımız", "farklı sektörlerde kullanılan ürün grupları"],
  ["magellan-basari-hikayeleri", "Magellan Başarı Hikayeleri", "teknik problemi çözen ürün ve süreç örnekleri"],
  ["magellan-musteri-hikayeleri", "Magellan Müşteri Hikayeleri", "atölye, matbaa ve üreticiler için çözüm yaklaşımı"],
  ["magellan-basinda-biz", "Magellan Basında Biz", "marka görünürlüğü ve sektörel iletişim"],
  ["magellan-etkinlikler", "Magellan Etkinlikler", "eğitim, demo ve sektör buluşmaları"],
  ["magellan-fuarlar", "Magellan Fuarlar", "serigrafi ve baskı sektöründe fuar katılımı"],
  ["magellan-kataloglar", "Magellan Kataloglar", "ürün grupları, TDS ve kullanım kılavuzlarına erişim"],
  ["magellan-renk-laboratuvari", "Magellan Renk Laboratuvarı", "numune, ton eşleştirme ve özel renk geliştirme"],
];

const tvTopics = [
  "Serigrafi Eğitimleri",
  "Ürün Tanıtımları",
  "Üretim Videoları",
  "Müşteri Videoları",
  "Makine Videoları",
  "Boya Testleri",
  "Kalite Kontrol Videoları",
  "Yüzey Testleri",
  "Renk Eşleştirme Videoları",
  "Kalıp Hazırlama Videoları",
  "Rakle Kullanımı Videoları",
  "OSB Ziyaretleri",
];

const pdfTopics = [
  "PVC Boya TDS",
  "PVC Boya MSDS",
  "UV Boya TDS",
  "UV Boya MSDS",
  "Plastisol Boya TDS",
  "Plastisol Boya MSDS",
  "Su Bazlı Boya TDS",
  "Su Bazlı Boya MSDS",
  "İnceltici TDS",
  "İnceltici MSDS",
  "Emülsiyon Kullanım Kılavuzu",
  "Sertleştirici Kullanım Kılavuzu",
  "Geciktirici Kullanım Kılavuzu",
  "Boya Teknik Veri",
  "Serigrafi Kullanım Kılavuzu",
  "Renk Kartelası PDF",
  "Ürün Kataloğu PDF",
  "Bayilik Dosyası PDF",
  "İhracat Teknik Dosya",
  "Kalite Kontrol Formu",
];

const osbTopics = [
  "İkitelli OSB",
  "Dudullu OSB",
  "Aykosan",
  "İMES",
  "Tekstilkent",
  "İvedik OSB",
  "OSTİM",
  "DOSAB",
  "NOSAB",
  "Gebze OSB",
  "Tuzla OSB",
  "Beylikdüzü OSB",
  "Hadımköy Sanayi",
  "Çorlu OSB",
  "Çerkezköy OSB",
  "Dilovası OSB",
  "Kocaeli OSB",
  "Bursa OSB",
  "Nilüfer OSB",
  "Kayapa OSB",
  "Manisa OSB",
  "İzmir Atatürk OSB",
  "Kemalpaşa OSB",
  "Ege Serbest Bölge",
  "Ankara Sincan OSB",
  "Konya OSB",
  "Kayseri OSB",
  "Adana Hacı Sabancı OSB",
  "Gaziantep OSB",
  "Mersin Tarsus OSB",
  "Antalya OSB",
  "Denizli OSB",
  "Sakarya OSB",
  "Eskişehir OSB",
  "Balıkesir OSB",
  "Samsun OSB",
  "Trabzon OSB",
  "Malatya OSB",
  "Kahramanmaraş OSB",
  "Diyarbakır OSB",
  "Şanlıurfa OSB",
  "Erzurum OSB",
  "Sivas OSB",
  "Afyon OSB",
  "Uşak OSB",
  "Karaman OSB",
  "Aydın OSB",
  "Muğla OSB",
  "Çanakkale OSB",
  "Tekirdağ OSB",
];

const academyPages = academyTopics.map((topic) =>
  page({
    slug: topic.slug,
    title: `${topic.name} | Magellan Akademi`,
    description: `${topic.name} konusunda serigrafi boya, kalıp, yüzey, kuruma ve üretim standardını sade teknik dille anlatan Magellan Akademi rehberi.`,
    h1: topic.name,
    eyebrow: "Magellan Akademi",
    focusKeyword: topic.name.replace("?", ""),
    relatedKeywords: [
      "serigrafi eğitimi",
      "serigrafi rehberi",
      "serigrafi baskı",
      "serigrafi teknik bilgi",
    ],
    productFocus: `${topic.angle}; Magellan Boya ürün ailesiyle birlikte ele alınan öğretici serigrafi konusu`,
    audience:
      "serigrafi öğrenenler, baskı atölyeleri, satın alma ekipleri, matbaalar ve teknik üretim sorumluları",
    surfaceExamples: topic.surface,
    processNote:
      "konunun temel tanımı, uygulama adımları, boya ve yardımcı kimyasal ilişkisi, kalite kontrol ve sık yapılan hatalar birlikte okunur",
    qualityNote:
      "doğru kavram bilgisi, daha az deneme maliyeti, daha iyi yüzey uyumu ve üretimde tekrarlanabilir sonuç",
    priceNote:
      "teknik bilgi doğru kurulduğunda yanlış ürün seçimi ve gereksiz fire azalır; toplam satın alma maliyeti daha sağlıklı değerlendirilir",
    ctaNote:
      "öğrenmek istediğiniz yüzeyi, baskı tipini ve yaşadığınız problemi paylaşarak Magellan Boya'dan teknik yönlendirme alabilirsiniz",
    relatedSlugs: uniq([hubSlugs.academy, hubSlugs.technical, hubSlugs.wiki, ...evergreenSlugs.slice(0, 5)]),
  })
);

const paintCenterPages = paintSystems.flatMap((system) =>
  paintVariants.map((variant) =>
    page({
      slug: `${system.slug}-${variant.slug}-boya`,
      title: `${system.name} ${variant.name} Boya | Boya Merkezi | Magellan Boya`,
      description: `${system.name} ${variant.name} boya için yüzey uyumu, kullanım alanı, kuruma, tutunma ve teknik seçim bilgilerini inceleyin.`,
      h1: `${system.name} ${variant.name} Boya Seçimi ve Serigrafi Kullanımı`,
      eyebrow: "Boya Merkezi",
      focusKeyword: `${system.name} ${variant.name} boya`,
      relatedKeywords: [
        `${system.name} boya`,
        `${system.name} serigrafi boyası`,
        `${variant.name} serigrafi boya`,
        "serigrafi boya çeşitleri",
      ],
      productFocus: `${system.angle}; ${variant.angle} için doğru reçete ve uygulama yaklaşımı`,
      audience:
        "serigrafi atölyeleri, üretici firmalar, ambalaj ve promosyon işletmeleri, tekstil ve endüstriyel baskı ekipleri",
      surfaceExamples: system.surface,
      processNote: `${system.chemistry}, hedef renk, baskı adedi, elek yapısı, rakle sertliği ve kurutma koşulu birlikte değerlendirilir`,
      qualityNote:
        "renk tekrarı, yüzey tutunması, dengeli viskozite, kontrollü kuruma ve seri üretimde stabil baskı",
      priceNote:
        "boya fiyatı sistem, renk, ambalaj miktarı, teknik beklenti ve düzenli tüketim planına göre netleştirilir",
      ctaNote:
        "baskı yüzeyinizi, hedef rengi ve aylık tüketim miktarınızı ileterek uygun ürün grubu için teklif alabilirsiniz",
      relatedSlugs: uniq([hubSlugs.paint, system.coreSlug, hubSlugs.comparisons, hubSlugs.pdf, ...evergreenSlugs]),
    })
  )
);

const applicationPages = applicationAreas.map((topic) =>
  page({
    slug: `${topic.slug}-serigrafi-boyasi`,
    title: `${topic.name} İçin Serigrafi Boyası | Magellan Boya`,
    description: `${topic.name} için doğru serigrafi boyası, yüzey uyumu, kuruma, tutunma ve teknik seçim rehberi.`,
    h1: `${topic.name} İçin Doğru Serigrafi Boyası Nasıl Seçilir?`,
    eyebrow: "Kullanım Alanları",
    focusKeyword: `${lower(topic.name)} serigrafi boyası`,
    relatedKeywords: [
      `${lower(topic.name)} baskı boyası`,
      "kullanım alanına göre serigrafi boya",
      "yüzeye göre baskı boyası",
      "endüstriyel serigrafi boya",
    ],
    productFocus: `${topic.angle}; doğru boya sistemi, yardımcı kimyasal ve test baskısı planı`,
    audience:
      "ürün baskısı yapan imalatçılar, fason baskı atölyeleri, kurumsal satın alma ekipleri ve teknik üretim sorumluları",
    surfaceExamples: topic.surface,
    processNote:
      "yüzey malzemesi, kullanım ortamı, baskı detayı, renk standardı, dayanım beklentisi ve üretim adedi birlikte değerlendirilir",
    qualityNote:
      "okunabilir baskı, güçlü tutunma, yüzeye uygun esneklik, çizilme dayanımı ve tekrarlanabilir üretim standardı",
    priceNote:
      "uygulama alanına göre boya seçimi doğru yapıldığında numune tekrarı, fire ve yeniden baskı maliyeti düşer",
    ctaNote:
      "ürün yüzeyini, baskı görselini ve beklenen dayanımı paylaşarak uygun Magellan boya grubuna yönlenebilirsiniz",
    relatedSlugs: uniq([hubSlugs.applications, hubSlugs.ai, hubSlugs.paint, hubSlugs.technical, ...evergreenSlugs]),
  })
);

const technicalPages = paintSystems.slice(0, 5).flatMap((system) =>
  technicalProblems.slice(0, 12).map(([slug, question, cause]) =>
    page({
      slug: `${system.slug}-${slug}`,
      title: `${system.name} ${question} | Teknik Bilgi Merkezi`,
      description: `${system.name} baskıda ${lower(question.replace("?", ""))} sorusunun olası nedenleri ve çözüm adımları.`,
      h1: `${system.name} ${question}`,
      eyebrow: "Teknik Bilgi Merkezi",
      focusKeyword: `${system.name} ${question.replace("?", "")}`,
      relatedKeywords: [
        `${system.name} baskı hatası`,
        "serigrafi baskı hataları",
        "boya tutunma problemi",
        "teknik serigrafi çözümü",
      ],
      productFocus: `${system.name} sisteminde ${cause} başlıklarının sistemli kontrolü`,
      audience:
        "baskı hatasını çözmek isteyen atölyeler, kalite kontrol ekipleri ve teknik satın alma sorumluları",
      surfaceExamples: system.surface,
      processNote:
        "hata önce yüzey, boya, kalıp, rakle, yardımcı kimyasal, kurutma ve ortam koşulu sırasıyla ayrıştırılır",
      qualityNote:
        "neden analizi, daha az duruş, daha düşük fire, daha iyi tutunma ve daha kararlı seri üretim",
      priceNote:
        "doğru teknik teşhis, gereksiz ürün değişimi ve tekrar baskı maliyetini azaltır",
      ctaNote:
        "yaşadığınız hatayı fotoğraf, yüzey bilgisi, kullanılan boya ve kurutma koşuluyla paylaşarak teknik destek alabilirsiniz",
      relatedSlugs: uniq([hubSlugs.technical, system.coreSlug, hubSlugs.chemical, hubSlugs.ai, ...evergreenSlugs]),
    })
  )
);

const chemicalPages = chemicalItems.flatMap((chemical) =>
  chemicalAngles.map(([suffix, label, angle]) =>
    page({
      slug: `${slugify(chemical)}-${suffix}`,
      title: `${chemical} ${label} | Kimyasal Merkezi | Magellan Boya`,
      description: `${chemical} ${label.toLocaleLowerCase("tr-TR")} Serigrafi kimyasal seçiminde kullanım, oran, yüzey ve kalite notları.`,
      h1: `${chemical} ${label}`,
      eyebrow: "Kimyasal Merkezi",
      focusKeyword: `${chemical} ${label.replace("?", "")}`,
      relatedKeywords: [
        `${lower(chemical)} serigrafi`,
        "serigrafi kimyasalları",
        "serigrafi yardımcı malzemeleri",
        "serigrafi teknik destek",
      ],
      productFocus: `${chemical} için ${angle}; boya sistemi ve uygulama koşulu ile uyumlu teknik kullanım`,
      audience:
        "kalıp hazırlayan, boya akışını ayarlayan, kuruma kontrolü yapan ve üretimi standardize etmek isteyen atölyeler",
      surfaceExamples:
        "PVC baskı, tekstil baskı, UV baskı, kalıp hazırlama, etiket ve ambalaj uygulamaları",
      processNote:
        "boya tipi, yüzey, ortam sıcaklığı, üretim hızı, karışım oranı ve beklenen dayanım birlikte değerlendirilir",
      qualityNote:
        "dengeli akış, temiz kalıp, doğru kuruma, daha az tıkanma ve kontrollü ürün performansı",
      priceNote:
        "yardımcı kimyasal doğru seçildiğinde ana boya tüketimi ve fire maliyeti daha sağlıklı yönetilir",
      ctaNote:
        "kullandığınız boya grubunu ve yaşadığınız uygulama sorununu ileterek doğru yardımcı kimyasalı seçebilirsiniz",
      relatedSlugs: uniq([hubSlugs.chemical, hubSlugs.technical, "serigrafi-yardimci-kimyasallari", ...evergreenSlugs]),
    })
  )
);

const glossaryPages = glossaryTerms.map((term) =>
  page({
    slug: `${slugify(term)}-nedir`,
    title: `${term} Nedir? | Serigrafi Wikipedia | Magellan Boya`,
    description: `${term} nedir, serigrafi baskıda ne işe yarar ve ürün seçimini nasıl etkiler? Magellan Serigrafi Wikipedia açıklaması.`,
    h1: `${term} Nedir?`,
    eyebrow: "Serigrafi Wikipedia",
    focusKeyword: `${term} nedir`,
    relatedKeywords: [
      `${term} serigrafi`,
      "serigrafi terimleri",
      "serigrafi sözlüğü",
      "teknik baskı terimleri",
    ],
    productFocus: `${term} kavramının serigrafi boya, yüzey uyumu, kalıp ve kalite kontrol içindeki rolü`,
    audience:
      "serigrafi öğrenenler, teknik satın alma ekipleri, atölyeler ve üretim kalite sorumluları",
    surfaceExamples:
      "tekstil, PVC, plastik, metal, cam, etiket, ambalaj ve endüstriyel baskı yüzeyleri",
    processNote:
      "terimin tanımı, pratik karşılığı, ürün seçimine etkisi, yanlış anlaşılan noktalar ve kontrol adımları birlikte açıklanır",
    qualityNote:
      "ortak teknik dil, daha doğru ürün seçimi, daha hızlı problem çözümü ve ekipler arası net iletişim",
    priceNote:
      "kavramların doğru anlaşılması, yanlış ürün veya yanlış uygulama kaynaklı maliyeti azaltmaya yardımcı olur",
    ctaNote:
      "anlamını netleştirmek istediğiniz terimi ve uygulama bağlamını paylaşarak Magellan Boya'dan teknik açıklama alabilirsiniz",
    relatedSlugs: uniq([hubSlugs.wiki, hubSlugs.academy, hubSlugs.technical, hubSlugs.paint, ...evergreenSlugs]),
  })
);

const comparisonPages = comparisonPairs.map(([first, second]) =>
  page({
    slug: `${slugify(first)}-vs-${slugify(second)}`,
    title: `${first} vs ${second} | Boya Karşılaştırmaları | Magellan Boya`,
    description: `${first} ve ${second} farkları; yüzey uyumu, kuruma, dayanım, fiyat ve kullanım alanı açısından karşılaştırma.`,
    h1: `${first} vs ${second}: Hangi Serigrafi Çözümü Ne Zaman Seçilir?`,
    eyebrow: "Boya Karşılaştırmaları",
    focusKeyword: `${first} vs ${second}`,
    relatedKeywords: [
      `${first} ${second} farkı`,
      "serigrafi boya karşılaştırma",
      "hangi boya seçilmeli",
      "yüzeye göre boya seçimi",
    ],
    productFocus: `${first} ve ${second} seçeneklerinin yüzey, üretim hızı, dayanım ve maliyet açısından değerlendirilmesi`,
    audience:
      "iki ürün grubu arasında karar veren satın alma ekipleri, baskı atölyeleri ve üretim sorumluları",
    surfaceExamples:
      "tekstil, PVC, plastik, etiket, ambalaj, cam, metal ve promosyon ürünleri",
    processNote:
      "yüzey, renk, kurutma sistemi, adet, dayanım beklentisi ve numune test sonucu birlikte karşılaştırılır",
    qualityNote:
      "doğru ürün tercihi, daha net baskı, daha az fire, daha stabil kalite ve daha güvenilir tedarik",
    priceNote:
      "karşılaştırma yalnızca litre fiyatıyla değil toplam üretim maliyeti, fire ve tekrar baskı riskiyle yapılmalıdır",
    ctaNote:
      "karar vermek istediğiniz iki boya grubunu ve baskı yüzeyinizi paylaşarak teknik öneri alabilirsiniz",
    relatedSlugs: uniq([hubSlugs.comparisons, hubSlugs.ai, hubSlugs.paint, hubSlugs.technical, ...evergreenSlugs]),
  })
);

const calculatorPages = calculatorTopics.map(([slug, name, angle]) =>
  page({
    slug,
    title: `${name} | Serigrafi Hesaplama Araçları | Magellan Boya`,
    description: `${name} ile ${angle}; serigrafi boya tüketimi, alan ve üretim planlama için pratik rehber.`,
    h1: `${name}`,
    eyebrow: "Serigrafi Hesaplama Araçları",
    focusKeyword: name,
    relatedKeywords: [
      "serigrafi hesaplama",
      "boya tüketimi hesaplama",
      "baskı alanı hesaplama",
      "serigrafi maliyet hesabı",
    ],
    productFocus: `${angle}; boya seçimi ve teklif hazırlama sürecini daha ölçülebilir hale getiren araç yaklaşımı`,
    audience:
      "teklif hazırlayan atölyeler, üretim planlama ekipleri, satın alma sorumluları ve teknik destek ekipleri",
    surfaceExamples:
      "tekstil, PVC, plastik, etiket, ambalaj, poşet ve endüstriyel baskı işleri",
    processNote:
      "baskı eni, boyu, adet, fire payı, boya sistemi, yüzey ve hedef kalınlık birlikte değerlendirilir",
    qualityNote:
      "daha gerçekçi tüketim tahmini, daha doğru teklif, daha iyi stok planı ve daha az üretim sürprizi",
    priceNote:
      "hesaplama araçları, ürün fiyatından bağımsız olarak toplam maliyet ve tüketim miktarını öngörmeye yardımcı olur",
    ctaNote:
      "ölçü, adet ve yüzey bilgisini paylaşarak Magellan Boya'dan daha net tüketim ve ürün önerisi alabilirsiniz",
    relatedSlugs: uniq([hubSlugs.calculators, hubSlugs.ai, hubSlugs.paint, "serigrafi-boya-maliyet-hesabi", ...evergreenSlugs]),
  })
);

const brandPages = brandTopics.map(([slug, name, angle]) =>
  page({
    slug,
    title: `${name} | Magellan Marka Merkezi`,
    description: `${name}: ${angle}. Magellan Boya'nın serigrafi boya üretimi, teknik destek ve kurumsal tedarik yaklaşımı.`,
    h1: name,
    eyebrow: "Magellan Marka Merkezi",
    focusKeyword: name,
    relatedKeywords: [
      "Magellan Boya",
      "serigrafi boya üreticisi",
      "serigrafi boya imalatçısı",
      "kurumsal boya tedariki",
    ],
    productFocus: `${angle}; serigrafi boya, yardımcı kimyasal, kalite kontrol ve düzenli tedarik yapısının marka tarafı`,
    audience:
      "kurumsal müşteriler, bayiler, distribütörler, satın alma ekipleri ve uzun vadeli tedarik arayan üreticiler",
    surfaceExamples:
      "tekstil, PVC, plastik, ambalaj, etiket, cam, metal, deri ve endüstriyel baskı müşterileri",
    processNote:
      "ihtiyaç analizi, ürün seçimi, numune, kalite kontrol, dökümantasyon, sevkiyat ve satış sonrası teknik destek birlikte yönetilir",
    qualityNote:
      "marka güveni, ürün sürekliliği, teknik uzmanlık, parti standardı ve şeffaf iletişim",
    priceNote:
      "kurumsal tedarikte fiyat, kalite standardı, stok güvenliği ve uzun vadeli iş ortaklığı birlikte değerlendirilir",
    ctaNote:
      "bayilik, ihracat, teknik tedarik veya ürün grubu hakkında bilgi almak için Magellan Boya ile doğrudan iletişime geçebilirsiniz",
    relatedSlugs: uniq([hubSlugs.brand, hubSlugs.pdf, hubSlugs.tv, "serigrafi-boya-imalatcisi", ...evergreenSlugs]),
  })
);

const tvPages = tvTopics.map((name) =>
  page({
    slug: `magellan-tv-${slugify(name)}`,
    title: `${name} | Magellan TV`,
    description: `${name} için serigrafi boya, yüzey testi, ürün tanıtımı ve üretim videosu içerik merkezi.`,
    h1: `${name} Video Merkezi`,
    eyebrow: "Magellan TV",
    focusKeyword: name,
    relatedKeywords: [
      "Magellan TV",
      "serigrafi video",
      "serigrafi eğitim videosu",
      "boya test videosu",
    ],
    productFocus: `${name} ile ürün seçimi, uygulama adımı ve kalite kontrol sürecini görsel olarak anlatan içerikler`,
    audience:
      "görerek öğrenmek isteyen atölyeler, teknik ekipler, satış ekipleri ve ürün karşılaştırması yapan müşteriler",
    surfaceExamples:
      "PVC, plastisol, UV, su bazlı boya, kimyasal, kalıp ve farklı baskı yüzeyleri",
    processNote:
      "video konusu, ürün grubu, yüzey, uygulama adımı, test sonucu ve sık yapılan hata başlıkları birlikte planlanır",
    qualityNote:
      "daha anlaşılır teknik bilgi, daha hızlı ürün seçimi, daha iyi eğitim ve daha az uygulama hatası",
    priceNote:
      "video içerikleri satın alma öncesi doğru ürünü seçmeye yardımcı olarak deneme maliyetini azaltır",
    ctaNote:
      "görmek istediğiniz ürün testi veya yüzey uygulamasını paylaşarak Magellan TV içerik önerisi iletebilirsiniz",
    relatedSlugs: uniq([hubSlugs.tv, hubSlugs.academy, hubSlugs.brand, hubSlugs.paint, ...evergreenSlugs]),
  })
);

const pdfPages = pdfTopics.map((name) =>
  page({
    slug: `${slugify(name)}-merkezi`,
    title: `${name} | PDF Merkezi | Magellan Boya`,
    description: `${name} için teknik veri, güvenlik dokümanı, kullanım kılavuzu ve ürün bilgi merkezi.`,
    h1: `${name} Doküman Merkezi`,
    eyebrow: "PDF Merkezi",
    focusKeyword: name,
    relatedKeywords: [
      "TDS",
      "MSDS",
      "serigrafi teknik veri",
      "ürün kullanım kılavuzu",
    ],
    productFocus: `${name} dokümanı; ürün seçimi, güvenli kullanım, kalite kontrol ve satın alma sürecini destekler`,
    audience:
      "satın alma ekipleri, kalite kontrol sorumluları, ihracat ekipleri, bayiler ve teknik uygulama ekipleri",
    surfaceExamples:
      "PVC, UV, plastisol, su bazlı boya, inceltici, emülsiyon, sertleştirici ve yardımcı kimyasallar",
    processNote:
      "ürün adı, kullanım alanı, teknik veri, güvenlik notu, uygulama koşulu ve kalite beklentisi birlikte değerlendirilir",
    qualityNote:
      "daha net dokümantasyon, daha güvenli kullanım, daha kolay tekrar sipariş ve kurumsal satın alma uyumu",
    priceNote:
      "teknik dokümanlar, ürünün gerçek kullanım değerini ve toplam tedarik maliyetini daha doğru okumayı sağlar",
    ctaNote:
      "ihtiyacınız olan TDS, MSDS veya kullanım kılavuzu bilgisini paylaşarak Magellan Boya'dan döküman desteği alabilirsiniz",
    relatedSlugs: uniq([hubSlugs.pdf, hubSlugs.brand, hubSlugs.paint, "magellan-kataloglar", ...evergreenSlugs]),
  })
);

const osbPages = osbTopics.map((name) =>
  page({
    slug: `${slugify(name)}-serigrafi-boya`,
    title: `${name} Serigrafi Boya Tedariği | Magellan Boya`,
    description: `${name} ve çevresindeki üreticiler için serigrafi boya, plastisol, PVC, UV, emülsiyon ve kimyasal tedarik rehberi.`,
    h1: `${name} İçin Serigrafi Boya ve Teknik Tedarik`,
    eyebrow: "OSB Sistemi",
    focusKeyword: `${name} serigrafi boya`,
    relatedKeywords: [
      `${name} baskı boyası`,
      "OSB serigrafi boya",
      "organize sanayi boya tedariki",
      "toptan serigrafi boya",
    ],
    productFocus: `${name} bölgesindeki tekstil, ambalaj, plastik, metal, reklam ve promosyon üreticileri için ürün grubu planlama`,
    audience:
      "organize sanayi bölgesinde üretim yapan atölyeler, fabrikalar, matbaalar, ambalaj ve promosyon firmaları",
    surfaceExamples:
      "PVC, plastik, tekstil, etiket, ambalaj, metal, cam, deri, poşet ve teknik ürün yüzeyleri",
    processNote:
      "bölgedeki üretim profili, ürün grubu, stok ihtiyacı, sevkiyat planı, numune ve teknik destek birlikte değerlendirilir",
    qualityNote:
      "hızlı tedarik, düzenli stok, teknik yönlendirme, daha az üretim duruşu ve güvenilir tekrar sipariş",
    priceNote:
      "OSB odaklı düzenli alımda fiyat, miktar, sevkiyat sıklığı ve ürün çeşitliliği birlikte netleştirilir",
    ctaNote:
      "OSB bölgenizi, üretim alanınızı ve ihtiyaç duyduğunuz ürün grubunu paylaşarak tedarik planı oluşturabilirsiniz",
    relatedSlugs: uniq([hubSlugs.osb, hubSlugs.paint, hubSlugs.applications, "toptan-serigrafi-boya", ...evergreenSlugs]),
  })
);

const hubPages = [
  page({
    slug: hubSlugs.academy,
    title: "Magellan Akademi | Serigrafi Eğitim ve Rehber Merkezi",
    description:
      "Magellan Akademi; serigrafi nedir, nasıl yapılır, baskı teknikleri, hata çözümleri ve terimleri için öğretici bilgi merkezi.",
    h1: "Magellan Akademi: Serigrafi Eğitim ve Rehber Merkezi",
    eyebrow: "Magellan Akademi",
    focusKeyword: "Magellan Akademi",
    relatedKeywords: ["serigrafi eğitimi", "serigrafi rehberi", "serigrafi nedir", "serigrafi sözlüğü"],
    productFocus:
      "serigrafi sektörünün temel kavramlarını, boya seçimini, kalıp hazırlamayı ve üretim standardını öğretici bir yapıda toplar",
    audience:
      "serigrafi öğrenenler, atölye sahipleri, satın alma ekipleri, teknik personel ve üretim yöneticileri",
    surfaceExamples:
      "tekstil, PVC, plastik, ambalaj, etiket, cam, metal, deri, pleksi ve promosyon yüzeyleri",
    processNote:
      "konular başlangıç bilgisi, teknik detay, avantaj, dezavantaj, uygulama, hata, çözüm ve SSS mantığıyla organize edilir",
    qualityNote:
      "topical authority, iç link mimarisi, arama niyeti uyumu ve pratik teknik değer",
    priceNote:
      "doğru bilgi mimarisi yanlış ürün seçimi ve tekrar deneme maliyetini azaltır",
    ctaNote:
      "hangi serigrafi konusunu öğrenmek istediğinizi paylaşarak doğru rehbere yönlenebilirsiniz",
    relatedSlugs: uniq([...academyPages.map((item) => item.slug), hubSlugs.wiki, hubSlugs.technical]),
  }),
  page({
    slug: hubSlugs.paint,
    title: "Boya Merkezi | PVC, UV, Plastisol ve Serigrafi Boyaları",
    description:
      "Boya Merkezi; PVC, UV, plastisol, su bazlı, solvent bazlı, naylobek ve endüstriyel serigrafi boya varyasyonlarını toplar.",
    h1: "Boya Merkezi: Serigrafi Boya Sistemleri ve Renk Varyasyonları",
    eyebrow: "Boya Merkezi",
    focusKeyword: "Boya Merkezi",
    relatedKeywords: ["PVC boya", "UV boya", "plastisol boya", "serigrafi boya çeşitleri"],
    productFocus:
      "boya tiplerini renk, efekt, kuruma, yüzey ve kullanım alanı üzerinden organize eden kapsamlı ürün bilgi haritası",
    audience:
      "serigrafi boya satın alan atölyeler, matbaalar, tekstil üreticileri, ambalaj firmaları ve endüstriyel baskı yapan işletmeler",
    surfaceExamples:
      "PVC, ABS, PP, PE, PET, tekstil, cam, metal, deri, etiket, ambalaj ve promosyon ürünleri",
    processNote:
      "boya sistemi, renk, yüzey enerjisi, kuruma şekli, dayanım beklentisi ve üretim hızı birlikte değerlendirilir",
    qualityNote:
      "doğru boya ailesi, daha güçlü tutunma, renk tutarlılığı, daha az fire ve daha kontrollü üretim",
    priceNote:
      "fiyat boya tipi, renk, ambalaj miktarı, performans beklentisi ve düzenli tüketim planına göre değişir",
    ctaNote:
      "yüzey ve renk ihtiyacınızı paylaşarak doğru boya sistemine hızlıca yönlenebilirsiniz",
    relatedSlugs: uniq([...paintCenterPages.map((item) => item.slug), hubSlugs.comparisons, hubSlugs.pdf]),
  }),
  page({
    slug: hubSlugs.applications,
    title: "Serigrafi Kullanım Alanları | Sektör ve Yüzey Rehberi",
    description:
      "Kumanda, beyaz eşya, oyuncak, promosyon, poşet, ambalaj, elektronik, medikal, cam, metal, PVC ve tekstil için kullanım alanları.",
    h1: "Serigrafi Kullanım Alanları: Yüzeye ve Sektöre Göre Boya Seçimi",
    eyebrow: "Kullanım Alanları",
    focusKeyword: "serigrafi kullanım alanları",
    relatedKeywords: ["serigrafi nerelerde kullanılır", "yüzeye göre boya", "sektöre göre baskı boyası", "endüstriyel serigrafi"],
    productFocus:
      "her sektör ve yüzey için boya sistemi, dayanım, tutunma ve numune testini ayrı ayrı değerlendiren kullanım alanı haritası",
    audience:
      "farklı ürün yüzeylerine baskı yapan üreticiler, fason atölyeler, marka sahipleri ve teknik satın alma ekipleri",
    surfaceExamples:
      "kumanda, beyaz eşya, oyuncak, kalem, poşet, ambalaj, elektronik panel, medikal ürün, cam, metal ve tekstil",
    processNote:
      "sektör, malzeme, kullanım ortamı, baskı detayı, renk standardı ve dayanım beklentisi birlikte okunur",
    qualityNote:
      "yüzeye uygun ürün seçimi, daha az tutunma sorunu, daha net baskı ve daha güvenilir seri üretim",
    priceNote:
      "uygulama alanını doğru tanımlamak ürün maliyeti kadar fire, test ve teslimat maliyetini de etkiler",
    ctaNote:
      "baskı yapılacak ürününüzü ve yüzey malzemesini paylaşarak doğru ürün grubunu seçebilirsiniz",
    relatedSlugs: uniq([...applicationPages.map((item) => item.slug), hubSlugs.ai, hubSlugs.paint]),
  }),
  page({
    slug: hubSlugs.technical,
    title: "Teknik Bilgi Merkezi | Serigrafi Baskı Hataları ve Çözümleri",
    description:
      "Boya kuruma, çatlama, soyulma, kabarma, yapışma, rakle izi, balık gözü ve portakal kabuğu sorunları için teknik merkez.",
    h1: "Teknik Bilgi Merkezi: Serigrafi Problemleri ve Çözüm Rehberleri",
    eyebrow: "Teknik Bilgi Merkezi",
    focusKeyword: "serigrafi teknik bilgi merkezi",
    relatedKeywords: ["serigrafi baskı hataları", "boya neden kurumaz", "boya neden soyulur", "serigrafi çözüm rehberi"],
    productFocus:
      "baskı hatalarını neden, kontrol adımı, çözüm ve ürün seçimi mantığıyla organize eden teknik bilgi merkezi",
    audience:
      "üretim sırasında hata yaşayan atölyeler, kalite kontrol ekipleri, operatörler ve teknik satın alma sorumluları",
    surfaceExamples:
      "PVC, UV, plastisol, su bazlı, solvent bazlı, tekstil, plastik, etiket, ambalaj ve metal yüzeyler",
    processNote:
      "hata; yüzey, boya, kalıp, rakle, viskozite, kuruma ve ortam koşulu sıralamasıyla analiz edilir",
    qualityNote:
      "daha hızlı teşhis, daha düşük fire, daha az üretim duruşu ve daha istikrarlı baskı kalitesi",
    priceNote:
      "teknik problem doğru çözüldüğünde ürün değişimi, tekrar baskı ve müşteri iadesi maliyeti azalır",
    ctaNote:
      "yaşadığınız baskı hatasını detaylarıyla paylaşarak teknik çözüm önerisi alabilirsiniz",
    relatedSlugs: uniq([...technicalPages.map((item) => item.slug), hubSlugs.chemical, hubSlugs.ai]),
  }),
  page({
    slug: hubSlugs.chemical,
    title: "Kimyasal Merkezi | İnceltici, Emülsiyon, Sertleştirici",
    description:
      "Serigrafi kimyasal merkezi; inceltici, emülsiyon, sertleştirici, geciktirici, rakle, film, pozlama ve yardımcı ürün rehberleri.",
    h1: "Kimyasal Merkezi: Serigrafi Yardımcı Ürünleri ve Kullanım Rehberleri",
    eyebrow: "Kimyasal Merkezi",
    focusKeyword: "serigrafi kimyasal merkezi",
    relatedKeywords: ["inceltici", "emülsiyon", "sertleştirici", "geciktirici", "serigrafi yardımcı kimyasalları"],
    productFocus:
      "boya performansını tamamlayan kimyasalları kullanım amacı, oran, yüzey ve teknik problem üzerinden açıklar",
    audience:
      "kalıp hazırlayan, boya akışını ayarlayan, kuruma kontrolü yapan ve üretimi standardize etmek isteyen işletmeler",
    surfaceExamples:
      "kalıp, elek, tekstil, PVC, plastik, UV baskı, ambalaj ve etiket uygulamaları",
    processNote:
      "yardımcı ürün seçimi boya sistemi, ortam, yüzey, baskı hızı, kuruma ve dayanım beklentisine göre yapılır",
    qualityNote:
      "dengeli viskozite, temiz kalıp, kontrollü kuruma, daha az tıkanma ve daha güvenilir uygulama",
    priceNote:
      "yardımcı ürünler doğru kullanıldığında ana boya verimliliği artar ve toplam üretim maliyeti düşer",
    ctaNote:
      "kullandığınız ürün grubunu ve yaşadığınız sorunu paylaşarak uygun kimyasal desteği alabilirsiniz",
    relatedSlugs: uniq([...chemicalPages.map((item) => item.slug), hubSlugs.technical, hubSlugs.paint]),
  }),
  page({
    slug: hubSlugs.calculators,
    title: "Serigrafi Hesaplama Araçları | Boya ve Alan Hesaplayıcı",
    description:
      "Mürekkep, inceltici, viskozite, alan, baskı alanı ve boya tüketimi için serigrafi hesaplama araçları merkezi.",
    h1: "Serigrafi Hesaplama Araçları",
    eyebrow: "Hesaplama Araçları",
    focusKeyword: "serigrafi hesaplama araçları",
    relatedKeywords: ["mürekkep hesaplayıcı", "inceltici hesaplayıcı", "viskozite hesaplayıcı", "boya tüketimi hesaplayıcı"],
    productFocus:
      "teklif, üretim planı, boya tüketimi ve stok hesabını daha ölçülebilir hale getiren serigrafi araçları",
    audience:
      "teklif hazırlayan atölyeler, üretim planlama ekipleri, satın alma sorumluları ve teknik destek ekipleri",
    surfaceExamples:
      "tekstil, PVC, plastik, poşet, ambalaj, etiket, cam, metal ve endüstriyel baskı işleri",
    processNote:
      "baskı alanı, adet, fire, boya tipi, film kalınlığı, inceltici oranı ve yüzey bilgisi birlikte değerlendirilir",
    qualityNote:
      "daha net teklif, daha doğru stok planı, daha düşük fire ve daha ölçülebilir üretim",
    priceNote:
      "hesap araçları fiyat teklifinin tüketim tarafını netleştirmeye yardımcı olur",
    ctaNote:
      "ölçü, adet ve yüzey bilgisini paylaşarak Magellan Boya'dan tüketim hesabı desteği alabilirsiniz",
    relatedSlugs: uniq([...calculatorPages.map((item) => item.slug), hubSlugs.ai, hubSlugs.paint]),
  }),
  page({
    slug: hubSlugs.wiki,
    title: "Serigrafi Wikipedia | Serigrafi Terimleri ve Sözlüğü",
    description:
      "ABS, PVC, PET, PP, PE, PS, mesh, shore, rakle, emülsiyon, viskozite, kürlenme, UV ve pigment terimleri.",
    h1: "Serigrafi Wikipedia: Terimler, Malzemeler ve Teknik Kavramlar",
    eyebrow: "Serigrafi Wikipedia",
    focusKeyword: "serigrafi wikipedia",
    relatedKeywords: ["serigrafi sözlüğü", "serigrafi terimleri", "mesh nedir", "rakle nedir"],
    productFocus:
      "serigrafi alanındaki teknik terimleri arama niyetine göre açıklayan, ürün seçimini kolaylaştıran sözlük yapısı",
    audience:
      "serigrafi öğrenenler, teknik satın alma ekipleri, satış ekipleri, operatörler ve kalite kontrol sorumluları",
    surfaceExamples:
      "tüm serigrafi boya, kimyasal, kalıp, yüzey ve uygulama süreçleri",
    processNote:
      "her kavram tanım, pratik kullanım, ürün seçimine etkisi ve sık yapılan karışıklıklar açısından açıklanır",
    qualityNote:
      "ortak teknik dil, daha hızlı karar, daha doğru tedarik ve daha verimli teknik destek",
    priceNote:
      "terimlerin doğru anlaşılması yanlış ürün seçimi maliyetini azaltır",
    ctaNote:
      "açıklanmasını istediğiniz teknik terimi paylaşarak sözlük kapsamını genişletebilirsiniz",
    relatedSlugs: uniq([...glossaryPages.map((item) => item.slug), hubSlugs.academy, hubSlugs.technical]),
  }),
  page({
    slug: hubSlugs.tv,
    title: "Magellan TV | Serigrafi Eğitim, Ürün ve Test Videoları",
    description:
      "Magellan TV; serigrafi eğitimleri, ürün tanıtımları, üretim videoları, müşteri videoları, makine videoları ve boya testleri.",
    h1: "Magellan TV: Serigrafi Video ve Test Merkezi",
    eyebrow: "Magellan TV",
    focusKeyword: "Magellan TV",
    relatedKeywords: ["serigrafi eğitim videosu", "boya testleri", "ürün tanıtımları", "üretim videoları"],
    productFocus:
      "serigrafi ürünlerinin nasıl seçildiğini, nasıl test edildiğini ve uygulamada nasıl davrandığını video mantığıyla açıklar",
    audience:
      "görerek öğrenmek isteyen atölyeler, satış ekipleri, operatörler, bayiler ve teknik satın alma ekipleri",
    surfaceExamples:
      "PVC, UV, plastisol, su bazlı boya, emülsiyon, inceltici, rakle ve farklı uygulama yüzeyleri",
    processNote:
      "video başlıkları eğitim, ürün tanıtımı, test, üretim, müşteri örneği ve makine uygulaması olarak sınıflandırılır",
    qualityNote:
      "daha anlaşılır teknik bilgi, güven veren marka deneyimi ve daha doğru ürün seçimi",
    priceNote:
      "uygulama videosu satın alma öncesi teknik riski ve numune deneme maliyetini azaltır",
    ctaNote:
      "görmek istediğiniz ürün testi veya uygulama videosunu paylaşabilirsiniz",
    relatedSlugs: uniq([...tvPages.map((item) => item.slug), hubSlugs.academy, hubSlugs.brand]),
  }),
  page({
    slug: hubSlugs.brand,
    title: "Magellan Marka Merkezi | Fabrika, Kalite, Ar-Ge ve İhracat",
    description:
      "Magellan Marka Merkezi; hakkımızda, fabrikamız, üretim süreci, kalite kontrol, Ar-Ge, bayilik, distribütörlük ve ihracat sayfaları.",
    h1: "Magellan Marka Merkezi",
    eyebrow: "Marka Merkezi",
    focusKeyword: "Magellan Marka Merkezi",
    relatedKeywords: ["Magellan Boya", "serigrafi boya üreticisi", "serigrafi boya imalatçısı", "bayilik"],
    productFocus:
      "Magellan Boya'nın üretim, kalite, Ar-Ge, dokümantasyon, bayilik ve ihracat tarafını arama motorlarına açık şekilde anlatır",
    audience:
      "kurumsal müşteriler, bayiler, distribütörler, ihracat müşterileri ve güvenilir üretici arayan satın alma ekipleri",
    surfaceExamples:
      "serigrafi boya, plastisol, PVC, UV, su bazlı, kimyasal ve endüstriyel baskı müşterileri",
    processNote:
      "marka bilgisi üretim kabiliyeti, kalite kontrol, teknik destek, referans, doküman ve satış kanalı olarak organize edilir",
    qualityNote:
      "EEAT, marka güveni, kurumsal açıklık, uzmanlık ve tedarik sürekliliği",
    priceNote:
      "marka güveni, uzun vadeli tedarikte fiyat kadar stok ve kalite standardı açısından da değer yaratır",
    ctaNote:
      "bayilik, distribütörlük, ihracat veya teknik tedarik talebinizi Magellan Boya ile paylaşabilirsiniz",
    relatedSlugs: uniq([...brandPages.map((item) => item.slug), hubSlugs.pdf, hubSlugs.tv]),
  }),
  page({
    slug: hubSlugs.ai,
    title: "Serigrafi AI | Yüzeye Göre Boya Öneri Merkezi",
    description:
      "Serigrafi AI; yüzey, malzeme, baskı şekli ve makine bilgisine göre uygun boya grubu seçimini anlatan öneri merkezi.",
    h1: "Serigrafi AI: Yüzeyden Boya Önerisine Akıllı Seçim Rehberi",
    eyebrow: "Serigrafi AI",
    focusKeyword: "Serigrafi AI",
    relatedKeywords: ["boya öneri aracı", "yüzeye göre boya", "malzemeye göre serigrafi boya", "hangi boya kullanılır"],
    productFocus:
      "yüzey seç, malzeme seç, baskı şekli seç, makine seç ve uygun boya ailesini teknik gerekçeyle öner mantığı",
    audience:
      "hangi boya kullanacağını bilmeyen müşteriler, satış ekipleri, teknik destek ve satın alma sorumluları",
    surfaceExamples:
      "PVC, ABS, PP, PE, PET, tekstil, cam, metal, deri, pleksi, ambalaj ve promosyon ürünleri",
    processNote:
      "malzeme, yüzey enerjisi, kuruma sistemi, dayanım beklentisi, adet, renk ve mevcut makine birlikte değerlendirilir",
    qualityNote:
      "daha hızlı ürün seçimi, daha az yanlış sipariş, daha düşük numune maliyeti ve daha iyi teknik yönlendirme",
    priceNote:
      "öneri sistemi doğru ürün ailesine yönlendirerek toplam satın alma ve deneme maliyetini azaltır",
    ctaNote:
      "yüzey, malzeme, baskı şekli ve makine bilgisini paylaşarak uygun boya önerisi alabilirsiniz",
    relatedSlugs: uniq([hubSlugs.applications, hubSlugs.paint, hubSlugs.technical, hubSlugs.comparisons, ...applicationPages.slice(0, 24).map((item) => item.slug)]),
  }),
  page({
    slug: hubSlugs.comparisons,
    title: "Boya Karşılaştırmaları | PVC vs UV, Plastisol vs Su Bazlı",
    description:
      "PVC vs UV, PVC vs plastisol, su bazlı vs solvent, naylobek vs PVC ve diğer serigrafi boya karşılaştırmaları.",
    h1: "Boya Karşılaştırmaları",
    eyebrow: "Karşılaştırmalar",
    focusKeyword: "boya karşılaştırmaları",
    relatedKeywords: ["PVC vs UV", "PVC vs plastisol", "su bazlı vs solvent", "naylobek vs PVC"],
    productFocus:
      "iki ürün grubu arasındaki farkı yüzey, kuruma, dayanım, maliyet ve üretim temposu açısından açıklar",
    audience:
      "ürün grupları arasında karar veren satın alma ekipleri, atölyeler, marka sahipleri ve teknik üreticiler",
    surfaceExamples:
      "tekstil, PVC, plastik, ambalaj, etiket, cam, metal ve promosyon ürünleri",
    processNote:
      "karşılaştırma yüzey, kullanım alanı, kuruma sistemi, numune testi, fiyat ve tedarik güvenliği üzerinden yapılır",
    qualityNote:
      "daha doğru ürün tercihi, daha az fire ve daha yüksek üretim güveni",
    priceNote:
      "karşılaştırma, en ucuz ürün yerine toplam üretim maliyetini düşük tutan ürünü bulmaya yardım eder",
    ctaNote:
      "karşılaştırmak istediğiniz ürünleri ve baskı yüzeyinizi paylaşarak teknik öneri alabilirsiniz",
    relatedSlugs: uniq([...comparisonPages.map((item) => item.slug), hubSlugs.ai, hubSlugs.paint]),
  }),
  page({
    slug: hubSlugs.pdf,
    title: "PDF Merkezi | TDS, MSDS ve Serigrafi Teknik Dokümanları",
    description:
      "Her ürün için TDS, MSDS, kullanım kılavuzu, teknik veri, katalog, kalite kontrol ve ihracat doküman merkezi.",
    h1: "PDF Merkezi: TDS, MSDS, Katalog ve Teknik Veri",
    eyebrow: "PDF Merkezi",
    focusKeyword: "PDF Merkezi",
    relatedKeywords: ["TDS", "MSDS", "serigrafi katalog", "teknik veri"],
    productFocus:
      "ürün dokümantasyonu, güvenlik bilgisi, kullanım kılavuzu ve satın alma dosyalarını tek merkezde organize eder",
    audience:
      "kalite kontrol, satın alma, ihracat, bayi, distribütör ve teknik uygulama ekipleri",
    surfaceExamples:
      "PVC, UV, plastisol, su bazlı, inceltici, emülsiyon, sertleştirici ve yardımcı kimyasal ürünleri",
    processNote:
      "doküman türü, ürün grubu, kullanım alanı, güvenlik notu, teknik veri ve uygulama talimatı birlikte düzenlenir",
    qualityNote:
      "kurumsal güven, daha kolay satın alma, güvenli kullanım ve düzenli tekrar sipariş",
    priceNote:
      "dokümantasyon doğru olduğunda satın alma ve kalite onay süreci hızlanır",
    ctaNote:
      "ihtiyacınız olan ürün dokümanını paylaşarak TDS, MSDS veya kullanım kılavuzu desteği alabilirsiniz",
    relatedSlugs: uniq([...pdfPages.map((item) => item.slug), hubSlugs.brand, hubSlugs.paint]),
  }),
  page({
    slug: hubSlugs.osb,
    title: "Organize Sanayi Bölgeleri | OSB Serigrafi Boya Tedariği",
    description:
      "Türkiye'deki OSB, sanayi sitesi ve üretim bölgeleri için serigrafi boya, plastisol, PVC, UV ve kimyasal tedarik sayfaları.",
    h1: "OSB Sistemi: Türkiye Organize Sanayi Bölgeleri İçin Serigrafi Boya",
    eyebrow: "OSB Sistemi",
    focusKeyword: "OSB serigrafi boya",
    relatedKeywords: ["organize sanayi serigrafi boya", "OSB boya tedariki", "sanayi sitesi serigrafi boya", "toptan baskı boyası"],
    productFocus:
      "şehir, ilçe, OSB ve sanayi sitesi bazında serigrafi boya tedarik ihtiyacını teknik içerikle eşleştirir",
    audience:
      "OSB içindeki üreticiler, ambalaj firmaları, tekstil atölyeleri, plastik üreticileri, reklam ve promosyon işletmeleri",
    surfaceExamples:
      "PVC, plastik, tekstil, ambalaj, etiket, cam, metal, deri, poşet ve teknik parça yüzeyleri",
    processNote:
      "bölge, sektör, ürün grubu, stok ihtiyacı, teslimat planı ve teknik destek birlikte değerlendirilir",
    qualityNote:
      "bölgesel erişim, düzenli tedarik, hızlı teklif ve teknik ürün yönlendirmesi",
    priceNote:
      "OSB bazlı düzenli alımda fiyat, miktar, teslimat sıklığı ve ürün çeşitliliği birlikte değerlendirilir",
    ctaNote:
      "bulunduğunuz OSB ve ihtiyaç duyduğunuz ürün grubunu paylaşarak tedarik planı oluşturabilirsiniz",
    relatedSlugs: uniq([...osbPages.map((item) => item.slug), hubSlugs.paint, hubSlugs.applications]),
  }),
];

export const generatedAuthorityPages: SeoLandingPage[] = uniquePages([
  ...hubPages,
  ...academyPages,
  ...paintCenterPages,
  ...applicationPages,
  ...technicalPages,
  ...chemicalPages,
  ...glossaryPages,
  ...comparisonPages,
  ...calculatorPages,
  ...brandPages,
  ...tvPages,
  ...pdfPages,
  ...osbPages,
]);

function uniquePages(pages: SeoLandingPage[]) {
  const seen = new Set<string>();

  return pages.filter((item) => {
    if (seen.has(item.slug)) {
      return false;
    }

    seen.add(item.slug);
    return true;
  });
}
