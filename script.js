document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const icon = menuToggle.querySelector("i");

  if (menuToggle && navMenu && icon) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }
});
