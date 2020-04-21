import "./styles/style.scss";
// import "./script.js";
import Swiper from "swiper";

(function swiperFcn() {
  new Swiper(".swiper-container", {
    freeMode: true,
    // centeredSlides: true,

    slidesPerView: 2,
    spaceBetween: 200,
    // init: true,
    loop: true,

    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },

    breakpoints: {
      405: {
        slidesPerView: 2,
        spaceBetween: 200,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      610: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      711: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 250,
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
      1090: {
        slidesPerView: 4,
        spaceBetween: 280,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 150,
      },
      1800: {
        slidesPerView: 5,
        spaceBetween: 150,
      },
    },
  });
})();
