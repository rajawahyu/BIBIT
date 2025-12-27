// --- 1. LOGIKA TOMBOL PESAN DI PRODUK (TOMBOL KECIL) ---
function pesanProduk(namaProduk) {
    // GANTI NOMOR HP DI BAWAH INI DENGAN NOMOR KAMU (Format: 628...)
    const nomorHP = "+673 862 7301"; 
    
    const pesan = `Halo, saya mau pesan bibit *${namaProduk}*. Apakah stok ready?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// --- 2. LOGIKA FORM KONTAK UTAMA (TOMBOL BESAR DI BAWAH) ---
function kirimPesanUtama() {
    // Ambil data dari inputan
    const nama = document.getElementById('custName').value;
    const bibit = document.getElementById('custBibit').value;
    
    // GANTI NOMOR HP DI BAWAH INI JUGA
    const nomorHP = "+673 862 7301"; 

    // Cek kalau nama kosong
    if (nama === "") {
        alert("Mohon isi nama Anda terlebih dahulu.");
        return;
    }

    // Susun pesan
    const pesanLengkap = `Halo Admin KebunBibit, perkenalkan saya *${nama}*. Saya berminat untuk konsultasi/beli bibit *${bibit}*. Mohon infonya.`;
    
    // Kirim ke WA
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesanLengkap)}`, '_blank');
}

// --- 3. LOGIKA HAMBURGER MENU (UNTUK HP) ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Cek apakah elemen menu ada (biar gak error)
if (menuToggle) {
    // Kalau tombol garis tiga diklik -> Buka/Tutup Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Kalau salah satu link diklik -> Tutup Menu
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// --- LOGIKA INDIKATOR SLIDE (DOTS) ---

// Cari semua slider track di halaman
const sliders = document.querySelectorAll('.slider-track');

sliders.forEach(slider => {
    // Ambil elemen dots yang saudaranya slider ini
    const dots = slider.parentElement.querySelectorAll('.dot');

    // Pasang 'pendengar' saat gambar discroll/digeser
    slider.addEventListener('scroll', () => {
        // Hitung kita lagi di gambar keberapa?
        // Rumus: Posisi Scroll dibagi Lebar Gambar
        const scrollPosition = slider.scrollLeft;
        const imageWidth = slider.offsetWidth;
        
        // Math.round biar hasilnya bulat (0, 1, atau 2)
        const activeIndex = Math.round(scrollPosition / imageWidth);

        // Update warna titik sesuai posisi
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active'); // Nyalakan titik
            } else {
                dot.classList.remove('active'); // Matikan titik
            }
        });
    });
});