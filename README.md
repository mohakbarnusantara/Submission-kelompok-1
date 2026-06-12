# Quality Distro - Website E-Commerce 👕

Website e-commerce katalog produk dan profil untuk toko pakaian lokal (distro) "Quality Distro". Website ini dirancang dengan gaya modern, mengusung tema *Dark Mode* dengan aksen merah yang kuat, dan dibangun murni tanpa *framework* berat.

## 👥 Tim Pengembang (Kelompok 1)
Proyek website ini dikembangkan oleh **Kelompok 1** sebagai bagian dari *submission* tugas, di bawah bimbingan mentor kami:
* **Mentor:** Arief
* **Anggota Kelompok:**
  1. Moh. Akbar Nusantara
  2. Muhamad Algifahri

---

## 🎨 Desain Visual (Warna & Tipografi)
Website ini menggunakan palet warna dan tipografi yang dirancang khusus untuk menonjolkan identitas *streetwear*:

**1. Tipografi (Font)**
* **Bebas Neue:** Digunakan untuk semua judul (*heading*) dan logo untuk memberikan kesan tegas, berani, dan kekinian[cite: 1, 2, 3, 4, 5, 6].
* **Montserrat:** Digunakan untuk teks paragraf, deskripsi, dan menu navigasi agar bersih dan sangat mudah dibaca (*legible*)[cite: 1, 2, 3, 4, 5, 6].

**2. Palet Warna (Color Palette)**
Sistem warna diatur secara terpusat menggunakan *CSS Variables*[cite: 4, 5, 6]:
* ⬛ **Latar Utama (`#121212`):** Hitam pekat untuk bagian utama konten[cite: 4, 5, 6].
* ◼️ **Latar Sekunder (`#1A1A1A`):** Abu-abu sangat gelap untuk *navbar*, *footer*, dan kartu produk[cite: 4, 5, 6].
* ⬜ **Teks Utama (`#E0E0E0`):** Putih keabu-abuan agar teks nyaman dibaca dan tidak menyilaukan mata[cite: 4, 5, 6].
* 🟥 **Aksen Merah (`#E3000F`):** Merah menyala untuk menonjolkan elemen penting seperti tombol, status aktif, dan efek *hover*[cite: 4, 5, 6].

---

## 🚀 Fitur Utama (Features)
* **Desain Responsif (Mobile-Friendly):** Tampilan otomatis menyesuaikan dengan ukuran layar perangkat (HP, Tablet, PC) dilengkapi dengan *Hamburger Menu* interaktif untuk navigasi *mobile*[cite: 4, 5, 6, 7].
* **Filter Produk Dinamis:** Pengunjung dapat menyortir produk berdasarkan kategori (Semua, Pakaian, Aksesoris) secara instan tanpa perlu memuat ulang (*reload*) halaman[cite: 2, 7].
* **Performa Cepat & Ringan:** Dibuat menggunakan SVG Ikon murni (Inline SVG) tanpa bergantung pada *library* ikon pihak ketiga, sehingga *loading* website sangat cepat[cite: 1, 2, 3].
* **Modern Layouting:** Menggunakan sistem CSS Flexbox dan CSS Grid untuk memastikan elemen seperti kartu produk, tata letak footer, dan statistik tersusun rapi dan simetris[cite: 4, 5, 6].

## 💻 Teknologi yang Digunakan (Tech Stack)
* **HTML5:** Struktur semantik website[cite: 1, 2, 3].
* **CSS3:** *Styling* (Murni/Vanilla CSS) menggunakan *CSS Variables*, *Flexbox*, *Grid*, dan animasi transisi/hover[cite: 4, 5, 6].
* **JavaScript (Vanilla JS):** Logika untuk sistem filter kategori produk dan interaksi tombol *hamburger menu*[cite: 7].
* **Ikon:** Phosphor Icons (Format SVG Inline).

## 📂 Struktur Direktori (Folder Structure)
```text
📁 submission-kelompok-1
 ├── 📁 assets        # Berisi gambar produk, logo, dan aset visual lainnya
 ├── 📁 css           # Berisi file stylesheet (home.css, Produk.css, tentang.css)
 ├── 📁 js            # Berisi logika interaksi (script.js)
 ├── 📄 index.html    # Halaman Utama (Beranda)
 ├── 📄 Produk.html   # Halaman Katalog & Filter Produk
 └── 📄 Tentang.html  # Halaman Profil Toko, Lokasi, dan Kontak
