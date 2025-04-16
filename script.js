// Kode untuk toggle menu (JavaScript vanilla)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuToggle.querySelector("i").classList.remove("fa-bars");
      menuToggle.querySelector("i").classList.add("fa-times");
    } else {
      menuToggle.querySelector("i").classList.remove("fa-times");
      menuToggle.querySelector("i").classList.add("fa-bars");
    }
  });

  // Tutup menu ketika klik di luar menu
  document.addEventListener("click", function (event) {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active");
      menuToggle.querySelector("i").classList.remove("fa-times");
      menuToggle.querySelector("i").classList.add("fa-bars");
    }
  });
});

// Kode untuk validasi form (jQuery)
$(document).ready(function () {
  // Validasi formulir saat submit
  $("#contact form").submit(function (e) {
    // e.preventDefault();
    let isValid = true;

    // Reset semua error
    $(".error-message").remove();
    $("input, textarea").removeClass("error-border");
    $(".form-group").removeClass("shake");
    $(".checkbox-group").removeClass("error");

    // Validasi First Name
    const firstName = $("#first-name").val().trim();
    if (firstName === "") {
      showError("#first-name", "First name is required");
      isValid = false;
    } else if (firstName.length > 30) {
      showError("#first-name", "Maximum 30 characters");
      isValid = false;
    }

    // Validasi Last Name
    const lastName = $("#last-name").val().trim();
    if (lastName === "") {
      showError("#last-name", "Last name is required");
      isValid = false;
    } else if (lastName.length > 30) {
      showError("#last-name", "Maximum 30 characters");
      isValid = false;
    }

    // Validasi Email
    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      showError("#email", "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError("#email", "Invalid email format");
      isValid = false;
    } else if (email.length > 30) {
      showError("#email", "Maximum 30 characters");
      isValid = false;
    }

    // Validasi Phone
    const phone = $("#phone").val().trim();
    const phoneRegex = /^[0-9]+$/;
    if (phone !== "" && !phoneRegex.test(phone)) {
      showError("#phone", "Only numbers allowed");
      isValid = false;
    } else if (phone !== "" && (phone.length < 10 || phone.length > 13)) {
      showError("#phone", "Phone must be 10-13 digits");
      isValid = false;
    }

    // Validasi Message
    const message = $("#message").val().trim();
    if (message === "") {
      showError("#message", "Message is required");
      isValid = false;
    } else if (message.length > 500) {
      showError("#message", "Maximum 500 characters");
      isValid = false;
    }

    // Validasi Checkbox
    if (!$("#terms").is(":checked")) {
      $(".checkbox-group")
        .addClass("error")
        .append('<span class="error-message">You must accept the terms</span>');
      isValid = false;
    }

    // Jika valid, submit form
    if (isValid) {
      // Animasi sukses
      $('button[type="submit"]').html(
        '<i class="fas fa-check"></i> Sending...'
      );

      // Simulasi pengiriman
      setTimeout(function () {
        $('button[type="submit"]').html(
          'Message Sent! <i class="fas fa-check"></i>'
        );
        // Reset form setelah 2 detik
        setTimeout(function () {
          $("#contact form")[0].reset();
          $('button[type="submit"]').html("Submit");
        }, 2000);
      }, 1500);
    } else {
      // Animasi shake untuk error
      $(".form-group").addClass("shake");
      setTimeout(function () {
        $(".form-group").removeClass("shake");
      }, 500);
    }
  });

  // Fungsi untuk menampilkan error
  function showError(selector, message) {
    $(selector)
      .addClass("error-border")
      .after('<span class="error-message">' + message + "</span>")
      .parent()
      .addClass("shake");
  }

  $("#first-name, #last-name").on("input", function () {
    const value = $(this).val().trim();
    $(this).removeClass("error-border");
    $(this).next(".error-message").remove();

    if (value.length > 30) {
      showError(this, "Maximum 30 characters");
    }
  });

  $("#email").on("input", function () {
    const email = $(this).val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $(this).removeClass("error-border");
    $(this).next(".error-message").remove();

    if (email.length > 30) {
      showError(this, "Maximum 30 characters");
    } else if (email !== "" && !emailRegex.test(email)) {
      showError(this, "Invalid email format");
    }
  });

  $("#phone").on("input", function () {
    const phone = $(this).val().trim();
    const phoneRegex = /^[0-9]+$/;

    $(this).removeClass("error-border");
    $(this).next(".error-message").remove();

    if (phone !== "" && !phoneRegex.test(phone)) {
      showError(this, "Only numbers allowed");
    } else if (phone !== "" && (phone.length < 10 || phone.length > 13)) {
      // Diubah dari 15 ke 13
      showError(this, "Phone must be 10-13 digits");
    }
  });

  $("#message").on("input", function () {
    const message = $(this).val().trim();

    $(this).removeClass("error-border");
    $(this).next(".error-message").remove();

    if (message.length > 500) {
      showError(this, "Maximum 500 characters");
    }
  });

  // Reset error saat checkbox dicentang
  $("#terms").change(function () {
    if ($(this).is(":checked")) {
      $(".checkbox-group").removeClass("error");
      $(".checkbox-group .error-message").remove();
    }
  });
});
