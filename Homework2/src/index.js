import "./styles/style.scss";
import "./script.js"
import Swiper from "swiper";

(function swiperFcn() {
  new Swiper(".swiper-container", {
    // freeMode: false,
    // centeredSlides: true,

    slidesPerView: 1,
    spaceBetween: 10,
    init: true,
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
      500: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 40,
        
      },
    },
  });
})();
