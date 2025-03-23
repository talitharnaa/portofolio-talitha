document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    // Tambahkan efek transformasi pada ikon hamburger
    if (navMenu.classList.contains("active")) {
      menuToggle.querySelector("i").classList.remove("fa-bars");
      menuToggle.querySelector("i").classList.add("fa-times"); // Ganti ikon menjadi "X"
    } else {
      menuToggle.querySelector("i").classList.remove("fa-times");
      menuToggle.querySelector("i").classList.add("fa-bars"); // Kembali ke ikon hamburger
    }
  });
});
