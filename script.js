// --- 1. LOGIKA TOMBOL PESAN DI PRODUK ---
function pesanProduk(namaProduk) {
    // Nomor HP yang bersih tanpa spasi
    const nomorHP = "6738627301"; 
    
    const pesan = `Halo, saya mau pesan bibit *${namaProduk}*. Apakah stok ready?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// --- 2. LOGIKA FORM KONTAK UTAMA ---
function kirimPesanUtama() {
    const nama = document.getElementById('custName').value;
    const bibit = document.getElementById('custBibit').value;
    
    const nomorHP = "6738627301"; 

    if (nama === "") {
        alert("Mohon isi nama Anda terlebih dahulu.");
        return;
    }

    const pesanLengkap = `Halo Admin KebunBibit, perkenalkan saya *${nama}*. Saya berminat untuk konsultasi/beli bibit *${bibit}*. Mohon infonya.`;
    
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesanLengkap)}`, '_blank');
}

// --- 3. HAMBURGER MENU (HP) ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// --- 4. LOGIKA INDIKATOR SLIDE (DOTS) ---
const sliders = document.querySelectorAll('.slider-track');

sliders.forEach(slider => {
    // Ambil elemen dots yang saudaranya slider ini
    const dots = slider.parentElement.querySelectorAll('.dot');

    // Cek kalau dots ada isinya (biar gak error kalau kosong)
    if(dots.length > 0) {
        slider.addEventListener('scroll', () => {
            const scrollPosition = slider.scrollLeft;
            const imageWidth = slider.offsetWidth;
            const activeIndex = Math.round(scrollPosition / imageWidth);

            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }
});