import "./styles/style.scss";
import createItemsContent from "./scripts/shop";
import slider from "./scripts/slider";
import { displayToTopButton, goToTop } from "./scripts/toTopButton";
import updateFooterYear from "./scripts/footerYear";
import getProducts from "./scripts/APICall";
import shopNow from "./scripts/shopNow";
import hideLoader from "./scripts/hideLoader";
import displayError from "./scripts/APIFailed";

const controller = (function () {
  const DOMstrings = {
    toTopButton: ".to-top",
    moreButton: ".products-btn",
    moreItems: ".more",
    copyright: ".copyright",
  };

  // INITIALIZE MAIN APP CONTROLLER AFTER DOM LOADED
  window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM fully loaded and parsed");
    controller.init();
  });

  const setupListeners = function () {
    getProducts()
      .then((res) => {
        slider(res.slice(0, 10));
        createItemsContent(res);
        shopNow(res.slice(0, 4));
      })
      .catch((error) => {
        displayError();
        console.log(error);
      })
      .finally(() => hideLoader());

    // GO TO TOP BUTTON
    displayToTopButton(DOMstrings);
    goToTop(DOMstrings);

    // AUTO UPDATE FOOTER YEAR
    updateFooterYear(DOMstrings);
  };

  return {
    init: function () {
      console.log("js working");
      setupListeners();
    },
  };
})();
