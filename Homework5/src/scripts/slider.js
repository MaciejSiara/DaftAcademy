import Swiper from "swiper";
import nextButton from "../assets/right-arrow.png";
import prevButton from "../assets/left-arrow.png";

export default function (products) {
  document.querySelector(".carousel").style.display = "flex";
  // button prev
  const prevButtonSlider = document.getElementById("swiper-button-prev");
  const prevButtonElem = document.createElement("img");
  prevButtonElem.src = prevButton;
  prevButtonSlider.appendChild(prevButtonElem);

  // button next
  const nextButtonSlider = document.getElementById("swiper-button-next");
  const nextButtonElem = document.createElement("img");
  nextButtonElem.src = nextButton;
  nextButtonSlider.appendChild(nextButtonElem);

  // slider images
  const sliderWrapper = document.getElementById("swiper-wrapper");

  products.forEach((el) => {
    let divElement = document.createElement("div");
    divElement.classList.add("swiper-slide");
    let itemImage = document.createElement("img");
    itemImage.src = `https://${el.image}`;
    divElement.appendChild(itemImage);
    let itemDescriptionElem = document.createElement("div");
    itemDescriptionElem.classList.add("swiper-slide__description");
    let itemNameElem = document.createElement("div");
    itemNameElem.classList.add("swiper-slide__description__name");
    itemNameElem.innerHTML = el.name;
    itemDescriptionElem.appendChild(itemNameElem);
    let itemNamePrice = document.createElement("div");
    itemNamePrice.classList.add("swiper-slide__description__price");
    itemNamePrice.innerHTML = `${el.price} ${el.priceCurrency}`;
    itemDescriptionElem.appendChild(itemNamePrice);
    divElement.appendChild(itemDescriptionElem);
    sliderWrapper.appendChild(divElement);
  });

  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 150,
      },
      711: {
        slidesPerView: 2,
        spaceBetween: 150,
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
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
