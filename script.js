// 1. Fungsi untuk tombol kecil "Pesan" di setiap produk
function pesanProduk(namaProduk) {
    const nomorHP = "6738627301"; // GANTI NOMOR HP KAMU
    const pesan = `Halo kak, saya mau pesan bibit *${namaProduk}*. Apakah stok ready?`;
    
    // Buka WhatsApp di tab baru
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// 2. Fungsi untuk Form Besar "Chat WhatsApp Sekarang"
function kirimPesanUtama() {
    // Ambil nilai dari inputan
    const nama = document.getElementById('custName').value;
    const bibit = document.getElementById('custBibit').value;
    const nomorHP = "6738627301"; // GANTI NOMOR HP KAMU DISINI JUGA
    
    // Validasi sederhana: kalau nama kosong, kasih peringatan
    if (nama === "") {
        alert("Mohon isi nama Anda terlebih dahulu.");
        return;
    }

    // Susun pesan
    const pesanLengkap = `Halo Admin KebunBibit, perkenalkan saya *${nama}*. Saya berminat untuk konsultasi/beli bibit *${bibit}*. Mohon infonya.`;
    
    // Kirim
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesanLengkap)}`, '_blank');
}

// --- LOGIKA HAMBURGER MENU ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// 1. Saat tombol garis tiga diklik -> Buka/Tutup Menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Saat salah satu menu diklik (misal 'Produk') -> Tutup Menu otomatis
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});