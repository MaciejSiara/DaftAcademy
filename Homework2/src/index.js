import "./styles/style.scss";
import Swiper from "swiper";


var swiper = new Swiper(".swiper-container", {
    freeMode: true,
    centeredSlides: true,
  slidesPerView: 5,
  initialSlide: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
loop: true,
  loopFillGroupWithBlank: true,
 

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});