import "./styles/style.scss";
import createItemsContent from "./scripts/shop";
// import Swiper from "swiper";
// import slider from "./scripts/slider";
import slider from "./scripts/slider";


// INITIALIZE MAIN APP CONTROLLER AFTER DOM LOADED
window.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM fully loaded and parsed");
  controller.init();
});

const controller = (function () {
  const DOMstrings = {
    toTopButton: ".to-top",
    moreButton: ".products-btn",
    moreItems: ".more",
    copyright: ".copyright",
  };

  const setupListeners = function () {

    // custom simple slider
    slider();

    // DISPLAYING ITEMS IN SHOP
    // ALL PRODUCTS BUTTON
    createItemsContent();

    // GO TO TOP BUTTON
    displayToTopButton(window.pageYOffset);
    goToTop();

    // MORE PRODUCTS
    // viewMore();

    // AUTO UPGRADE FOOTER YEAR
    updateFooterYear();
  };

  const displayToTopButton = function () {
    let Yposition, button;
    button = document.querySelector(DOMstrings.toTopButton);
    window.onscroll = function () {
      Yposition = window.pageYOffset;
      if (Yposition >= window.innerHeight) {
        button.style.right = "1%";

      } else {
        button.style.right = "-100px"
      }
    };
  };

  const goToTop = function () {
    document
      .querySelector(DOMstrings.toTopButton)
      .addEventListener("click", (e) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
  };

  const updateFooterYear = function () {
    let currentYear = new Date().getFullYear();
    let copyright = document.querySelector(DOMstrings.copyright).innerHTML;
    let cprWithYear = copyright.replace("%CurrentYear%", currentYear);
    document.querySelector(DOMstrings.copyright).innerHTML = cprWithYear;
  };

  return {
    init: function () {
      console.log("js working");
      setupListeners();
    },
  };
})();