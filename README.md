# Illusphere Bookshelf App

Illusphere Bookshelf App adalah aplikasi untuk mengelola daftar buku yang sudah atau belum selesai dibaca. Aplikasi ini memungkinkan pengguna untuk menambahkan buku, mencari buku berdasarkan judul, mengubah status buku (selesai atau belum selesai dibaca), serta menghapus buku dari rak buku.

## Ketentuan Pengerjaan Tugas

Ketentuan-ketentuan

- Anda dilarang mengedit atau menghapus atribut `data-testid` pada elemen-elemen HTML.
- Ini masih berkaitan dengan poin sebelumnya. Jika Anda memiliki kebutuhan seperti styling elemen dan perlu menambahkan atribut seperti class, itu tidak dilarang selama atribut `data-testid` beserta nilainya tidak diubah atau dihapus.
- Dalam menampilkan data-data buku, Anda wajib memberikan beberapa atribut pada setiap elemennya.

  - `data-bookid`: menampung nilai ID masing-masing buku.
  - `data-testid`: penanda jenis data buku yang ditampilkan. Berikut daftarnya.
    - `bookItem`: elemen kontainer yang menampung data-data buku.
    - `bookItemTitle`: judul buku
    - `bookItemAuthor`: penulis buku
    - `bookItemYear`: tahun rilis buku
    - `bookItemIsCompleteButton`: tombol untuk mengubah kondisi buku dari “Belum selesai dibaca” menjadi “Selesai dibaca” atau sebaliknya.
    - `bookItemDeleteButton`: tombol untuk menghapus buku.
    - `bookItemEditButton`: tombol untuk mengubah data buku.

## Deskripsi Aplikasi

Illusphere Bookshelf App adalah aplikasi berbasis web yang dibuat untuk mengelola rak buku pengguna. Aplikasi ini memanfaatkan **local storage** untuk menyimpan data buku dan memungkinkan pengguna untuk melakukan beberapa interaksi sebagai berikut:

1. **Menambahkan Buku**: Pengguna dapat memasukkan buku baru ke dalam rak buku mereka dengan memasukkan judul, penulis, tahun, dan status selesai dibaca.
2. **Mencari Buku**: Pengguna dapat mencari buku berdasarkan judul dengan menggunakan fitur pencarian.
3. **Menandai Buku Selesai Dibaca**: Pengguna dapat mengubah status buku antara "selesai dibaca" dan "belum selesai dibaca".
4. **Menghapus Buku**: Pengguna dapat menghapus buku dari rak mereka.
5. **Tampilan Responsif**: Aplikasi menggunakan **Bootstrap** untuk memberikan tampilan yang responsif dan ramah pengguna.

### Fitur Utama:
- Menambahkan buku dengan detail judul, penulis, tahun rilis, dan status selesai dibaca.
- Pencarian buku berdasarkan judul.
- Menandai buku sebagai selesai dibaca atau belum selesai dibaca.
- Menghapus buku dari rak.
- Menggunakan **local storage** untuk menyimpan data buku.

## Teknologi yang Digunakan

- **HTML5**: Struktur dan layout halaman aplikasi.
- **CSS3**: Styling untuk mempercantik tampilan aplikasi.
- **JavaScript (ES6)**: Fungsionalitas interaktif aplikasi, seperti penambahan buku, pencarian, dan perubahan status.
- **Bootstrap 5**: Framework CSS untuk desain responsif dan komponen UI yang siap pakai.
- **SweetAlert2**: Notifikasi popup untuk memberikan umpan balik kepada pengguna.

## Struktur Proyek
```
illusphere-bookshelf-app/ 
  │
  ├── index.html # Halaman utama dengan form dan tampilan rak buku
  |── style.css # File CSS untuk styling tampilan aplikasi
  ├── script.js # Logika JavaScript untuk interaksi dan penyimpanan data
  └── README.md # Dokumentasi proyek ini
```
### Penjelasan File

1. **index.html**: 
   - Halaman utama aplikasi yang berisi form untuk menambahkan buku dan bagian untuk menampilkan daftar buku yang sudah dan belum selesai dibaca.
   - Form pengisian terdiri dari input untuk judul, penulis, tahun, dan checkbox untuk menandai apakah buku sudah selesai dibaca atau belum.
   - Bagian pencarian buku juga tersedia untuk memudahkan pengguna mencari buku berdasarkan judul.

2. **style.css**: 
   - Menambahkan styling khusus untuk elemen-elemen dalam aplikasi seperti tombol pencarian, ikon hapus, dan tampilan notifikasi jika buku tidak ditemukan.

3. **script.js**: 
   - Logika interaktif yang mengatur penambahan buku, pencarian, pengubahan status selesai dibaca, penghapusan buku, dan penyimpanan data buku ke dalam **local storage**.
   - Fungsi utama yang digunakan adalah `saveToLocalStorage`, `getFromLocalStorage`, `displayBooks`, dan `addBook`.

## Instalasi

1. Clone repo ini ke komputer lokal Anda:
   ```bash
   git clone https://github.com/wafiyanwarul/illusphere-bookshelf-app.git
   ```
2. Buka `index.html` di browser favorit Anda untuk memulai aplikasi.

## Cara Menggunakan

Menambahkan Buku:

1. Isi form pada bagian `Tambahkan Buku Baru` dengan judul, penulis, dan tahun.
   - Pilih apakah buku sudah selesai dibaca atau belum dengan mencentang kotak `Selesai dibaca`.
   - Klik tombol "Masukkan Buku ke rak" untuk menambahkan buku.

2. Mencari Buku:
   - Gunakan kolom pencarian di bagian `Cari Buku` untuk mencari buku berdasarkan judul.
   - Buku yang sesuai dengan pencarian akan ditampilkan di rak yang sesuai (belum selesai dibaca atau selesai dibaca).

3. Mengubah Status Buku:
   - Klik tombol `Selesai Dibaca` atau `Belum Selesai Dibaca` untuk mengubah status buku.

4. Menghapus Buku:
   - Klik tombol `Hapus Buku` di bawah judul buku untuk menghapusnya dari rak.

## Link Website
Aplikasi ini sudah dideploy dan dapat diakses secara online melalui link berikut: 
[Illusphere Bookshelf App](https://wafiyanwarul.github.io/illusphere-bookshelf-app/)

## Lisensi
Proyek ini dibagikan di bawah lisensi MIT - lihat file [LICENSE](https://github.com/wafiyanwarul/illusphere-bookshelf-app/blob/main/LICENSE) untuk informasi lebih lanjut.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, Anda dapat mengikuti langkah-langkah berikut:
1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan yang ingin Anda kerjakan.
3. Kirim pull request dengan deskripsi jelas mengenai perubahan yang Anda buat.
