const tombolFilter = document.querySelectorAll('.btn-filter');
const kartuProduk = document.querySelectorAll('.kartu-produk');

tombolFilter.forEach(tombol => {
    
    tombol.addEventListener('click', function() {
        
        tombolFilter.forEach(btn => btn.classList.remove('aktif'));
        
        this.classList.add('aktif');

        const kategoriPilihan = this.getAttribute('data-filter');

        kartuProduk.forEach(kartu => {
            const kategoriProduk = kartu.getAttribute('data-kategori');

            if (kategoriPilihan === 'semua' || kategoriPilihan === kategoriProduk) {
                kartu.classList.remove('sembunyi'); 
            } else {
                kartu.classList.add('sembunyi'); 
            }
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-links');
const tombolTutup = document.getElementById('tombol-tutup'); 

hamburger.addEventListener('click', function() {
    navMenu.classList.add('aktif');
});

tombolTutup.addEventListener('click', function() {
    navMenu.classList.remove('aktif');
});