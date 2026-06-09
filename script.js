// ===========================================
// UJIAN TENGAH SEMESTER (UTS)
//
// Mata Kuliah    : Pemrograman Web I
// Dosen Pengampu : Riad Sahara, S.SI, MT.
//
// Nama Mahasiswa : Aditya Nanda
// NIM            : 250401010388
// Kelas          : IF207
// ===========================================



// 1. NAVBAR — BERUBAH WARNA SAAT DI-SCROLL

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {

  if (window.scrollY > 50) {
    // Halaman sudah discroll → navbar jadi gelap
    navbar.classList.add('navbar-gelap');
  } else {
    // Halaman masih di atas → navbar transparan
    navbar.classList.remove('navbar-gelap');
  }

});


// 2. TOMBOL KEMBALI KE ATAS

var tombolAtas = document.getElementById('backToTop');

// Pantau posisi scroll untuk tampilkan/sembunyikan tombol
window.addEventListener('scroll', function () {

  if (window.scrollY > 300) {
    tombolAtas.style.display = 'block'; // Tampilkan tombol
  } else {
    tombolAtas.style.display = 'none';  // Sembunyikan tombol
  }

});

// Ketika tombol diklik, scroll ke paling atas
tombolAtas.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Scroll dengan animasi mulus
  });
});


// 3. SEMUA LINK NAVBAR — SCROLL MULUS TANPA HASH

// Fungsi bersama: scroll ke posisi tertentu lalu bersihkan URL
function scrollTanpaHash(posisiTarget) {
  window.scrollTo({ top: posisiTarget, behavior: 'smooth' });
  history.replaceState(null, '', window.location.pathname);
}

var brandHome = document.getElementById('brandHome');
if (brandHome) {
  brandHome.addEventListener('click', function (e) {
    if (window.location.pathname.indexOf('index.html') !== -1 ||
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/CV-UTS/')) {
      e.preventDefault();
      scrollTanpaHash(0); // Posisi paling atas = 0
    }
  });
}

var navMenuLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
navMenuLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    var targetSection = document.getElementById(this.getAttribute('href').substring(1));
    if (targetSection) {
      e.preventDefault();
      var navbarHeight = navbar ? navbar.offsetHeight : 56;
      scrollTanpaHash(
        targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      );
    }
  });
});