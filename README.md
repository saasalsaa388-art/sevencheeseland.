# Warung Keju - Website Menu

## Struktur folder
```
menu-keju/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── mac-cheese-balls.jpg
    ├── cheese-cordon-bleu.jpg
    ├── mini-cheesecake.jpg
    ├── es-jeruk.jpg
    └── iced-latte.jpg
```

## Cara mengganti gambar
1. Masukkan foto kamu ke folder `images/` (jpg, png, webp, atau svg).
2. Buka `index.html`, cari kartu menunya, lalu ubah `src` pada tag `<img>`.
   Contoh: `<img src="images/foto-baru.jpg" alt="Nama Menu">`
3. Simpan, lalu buka `index.html` (di VS Code bisa pakai ekstensi Live Server).

## Cara mengubah menu
Semua data menu ada di `index.html`, di dalam tag `<button class="item">`:
nama (`.name`), harga (`.price`), dan deskripsi (atribut `data-desc`).
Hapus tag `<span class="badge">` kalau tidak mau lencana "Terlaris".

## Ganti warna
Edit variabel di bagian `:root` pada `css/style.css`.
