# AktivitasKu

Aplikasi daftar kegiatan berbasis React yang membantu pengguna mengelola kegiatan kuliah, pribadi, dan organisasi dengan mudah.

## Identitas Mahasiswa

- **Nama:** Arham Mahasin Khawwas
- **NIM:** 1247050016
- **Mata Kuliah:** Pengembangan Aplikasi Web

## Teknologi yang Digunakan

- React
- Vite
- JavaScript (JSX)
- CSS

## Fitur Aplikasi

1. Menambahkan kegiatan baru.
2. Menampilkan daftar kegiatan.
3. Mengubah status kegiatan menjadi selesai atau belum selesai.
4. Menghapus kegiatan.
5. Mencari kegiatan berdasarkan nama.
6. Memfilter kegiatan berdasarkan status.
7. Menampilkan ringkasan jumlah seluruh kegiatan, kegiatan selesai, dan kegiatan belum selesai.

## Komponen React

Aplikasi ini menggunakan lima komponen React yang dipisahkan ke dalam file masing-masing:

| Komponen | Fungsi                                                          |
| -------- | --------------------------------------------------------------- |
| Navbar   | Menampilkan navigasi aplikasi.                                  |
| Header   | Menampilkan judul dan informasi aplikasi.                       |
| Summary  | Menampilkan ringkasan kegiatan menggunakan Props.               |
| TaskForm | Menangani input dan penambahan kegiatan.                        |
| TaskList | Menampilkan, mencari, memfilter, dan mengelola daftar kegiatan. |

## Konsep React yang Diterapkan

- **Component:** Membagi antarmuka menjadi komponen yang dapat digunakan kembali.
- **Props:** Mengirim data dan fungsi dari komponen induk ke komponen anak.
- **State:** Menggunakan `useState` untuk mengelola daftar kegiatan, pencarian, dan filter.
- **Event Handling:** Menangani interaksi pengguna seperti submit form, klik tombol, dan perubahan input.
- **Conditional Rendering:** Menampilkan pesan ketika daftar kegiatan kosong atau hasil pencarian tidak ditemukan.
- **List Rendering:** Menggunakan `map()` dan `key` untuk menampilkan daftar kegiatan.

## Cara Menjalankan Project

Pastikan Node.js sudah terpasang.

1. Clone repository:

   ```bash
   git clone https://github.com/ArhamMahasin/aplikasi-daftar-kegiatan.git
   ```

2. Masuk ke folder project:

   ```bash
   cd aplikasi-daftar-kegiatan
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

5. Buka alamat lokal yang ditampilkan oleh Vite di browser.

## Repository

[GitHub - AktivitasKu](https://github.com/ArhamMahasin/aplikasi-daftar-kegiatan)
