export const displayToTopButton = (el) => {
  let Yposition, button;
  button = document.querySelector(el.toTopButton);
  window.onscroll = function () {
    Yposition = window.pageYOffset;
    if (Yposition >= window.innerHeight) {
      button.style.right = "1%";
    } else {
      button.style.right = "-100px";
    }
  };
};

export const goToTop = (el) => {
  document.querySelector(el.toTopButton).addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};
