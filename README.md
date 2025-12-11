# 🏨 Hotel Bozooğulları - Kurumsal Web Sitesi Geliştirme
Bu proje, Hotel Bozooğulları için profesyonel bir kurumsal web sitesi geliştirme çalışmasıdır.
Proje, otel sahiplerinden geri dönüş beklenmesi nedeniyle henüz canlıya alınmamış olsa da, gerçek bir müşteriye yönelik olarak hazırlanmıştır ve tamamen kullanıma hazır durumdadır.

---

### 1. Performans ve Akıcılık Odaklı Uygulamalar

* **Dinamik Galeri Sistemi:** `galeri.html` sayfasında bulunan resimler, kategoriye göre (Odalar, Restoran, Genel Alanlar) anlık olarak filtreleme yeteneğine sahiptir. Bu işlev tamamen **Vanilla JavaScript** kullanılarak kütüphanesiz bir şekilde geliştirilmiştir.
* **Intersection Observer API Kullanımı:** Sayfadaki kritik bileşenlerin (Özellik kartları, Galeri öğeleri) kullanıcı kaydırma yaptıkça (scroll) yumuşak bir animasyonla görünür hale gelmesi için modern bir tarayıcı API'si olan **Intersection Observer** kullanılmıştır. Bu, sadece estetik değil, aynı zamanda sayfa yükleme performansını optimize eder.
* **Akıllı Navigasyon (Sticky Header):** Sayfa kaydırma hareketine duyarlı olarak arka plan rengini değiştiren (şeffaftan beyaza) yapışkan (sticky) navigasyon çubuğu ile kullanıcı deneyimi artırılmıştır.

### 2. Tasarım ve Kullanılabilirlik (UI/UX)

* **Tamamen Duyarlı Tasarım (Responsive Design):** Site, tüm mobil, tablet ve masaüstü ekranlarında kusursuz bir görüntü ve kullanılabilirlik sunmak üzere detaylı `@media` sorguları ile düzenlenmiştir.
* **Kurumsal Kimlik ve Renk Paleti:** Otelin lüks ve davetkar imajını destekleyen, temiz ve profesyonel bir renk paleti kullanılmıştır.

---

## 🛠️ Kullanılan Teknolojiler

| Kategori | Teknolojiler | Kullanım Amacı |
| :--- | :--- | :--- |
| **Yapısal Dil** | **HTML5** | Semantik ve erişilebilir sayfa yapısı oluşturma. |
| **Stil Dili** | **CSS3** (Vanilla CSS) | Duyarlı Tasarım (Responsive Design) ve modern animasyonlar. |
| **Programlama** | **JavaScript** (Vanilla JS, ES6) | Dinamik galeri filtreleme ve scroll bazlı etkileşimleri yönetme. |
| **Versiyon Kontrol** | **Git & GitHub** | Projenin geliştirme sürecini ve dosya geçmişini yönetme. |

---

## 💻 Projeyi Yerel Ortamda Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için izlenecek adımlar:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/sena-nur-ozdemir/hotel-bozoogullari-website]
    ```
2.  **Klasöre Girin:**
    ```bash
    cd hotel-bozoogullari-website 
    ```
3.  **Çalıştırın:**
    * Proje klasörüne gidin ve **`index.html`** dosyasını herhangi bir internet tarayıcısında (Chrome, Firefox vb.) doğrudan açın.
    * *(Öneri: VS Code kullanıyorsanız, `index.html` dosyasını açtıktan sonra **Live Server** eklentisi ile çalıştırmanız en kolay yöntemdir.)*

---

## Proje Fotoğrafları

<img width="1917" height="911" alt="hotelfoto1" src="https://github.com/user-attachments/assets/c154f3a5-2d6f-4424-9bf8-c22e9f0d8b1b" />

<img width="1918" height="918" alt="hotelfoto3" src="https://github.com/user-attachments/assets/b3c8521a-6bf4-4871-ad41-4a503ee3df0c" />

<img width="1918" height="916" alt="hotelfoto4" src="https://github.com/user-attachments/assets/044289a4-46ce-43ed-a2de-c00a4f78aa59" />

<img width="1918" height="910" alt="hotelfoto5" src="https://github.com/user-attachments/assets/a8c72a80-f13a-4014-8684-628b5966d2da" />

<img width="1918" height="912" alt="hotelfoto6" src="https://github.com/user-attachments/assets/d103d78e-8125-416e-9a54-7a4783381ddc" />
