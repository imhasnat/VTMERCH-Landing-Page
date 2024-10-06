document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const dropdownMenu = document.getElementById("dropdownMenu");

  hamburger.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !hamburger.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
