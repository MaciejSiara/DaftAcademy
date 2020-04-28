// import Swiper from "swiper";
import sliderImage from "../assets/268x338.png";
import nextButton from "../assets/right-arrow.png";
import prevButton from "../assets/left-arrow.png";

export default function () {
  const sliderItems = [
    {
      image: sliderImage,
      name: "Example item name",
      price: 19.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 29.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 39.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 49.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 59.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 69.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 79.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 89.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 99.99,
    },
    {
      image: sliderImage,
      name: "Example item name",
      price: 109.99,
    },
  ];

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

  const Slider = (function () {
    return {
      createSlider: function (first, last, where) {
        let elements = sliderItems.slice(first, last);
        elements.forEach((el) => {
          let divElement = document.createElement("div");
          divElement.classList.add("swiper-slide");
          let itemImage = document.createElement("img");
          itemImage.src = el.image;
          divElement.appendChild(itemImage);
          let itemDescriptionElem = document.createElement("div");
          itemDescriptionElem.classList.add("swiper-slide__description");
          let itemNameElem = document.createElement("div");
          itemNameElem.classList.add("swiper-slide__description__name");
          itemNameElem.innerHTML = el.name;
          itemDescriptionElem.appendChild(itemNameElem);
          let itemNamePrice = document.createElement("div");
          itemNamePrice.classList.add("swiper-slide__description__price");
          itemNamePrice.innerHTML = el.price;
          itemDescriptionElem.appendChild(itemNamePrice);

          divElement.appendChild(itemDescriptionElem);

          // true == in the end
          // false  == in the begining
          if (where === true) {
            sliderWrapper.appendChild(divElement);
          } else if (where === false) {
            sliderWrapper.insertBefore(divElement, sliderWrapper.firstChild);
          }
        });
      },
    };
  })();

  let numOfItemsToDisplay;
  let counter = 0;
  let beginNumOfItems;
  const displaySlides = function () {
    counter = 0;
    numOfItemsToDisplay =
      1 + Math.floor(sliderWrapperWidth / (sliderItemWidth + 40)) + counter;
    beginNumOfItems = numOfItemsToDisplay;
    if (numOfItemsToDisplay > 1) {
      Slider.createSlider(0, beginNumOfItems, true);
    } else {
      Slider.createSlider(0, 1, true);
      beginNumOfItems=2;
    }
  };

  Slider.createSlider(0, 1, true);
  let sliderWrapperWidth = sliderWrapper.offsetWidth;
  let sliderItem = document.querySelector(".swiper-slide");
  let sliderItemWidth = sliderItem.offsetWidth;
  sliderWrapper.removeChild(sliderWrapper.childNodes[0]);
  displaySlides();

  window.addEventListener("resize", () => {
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = "translateX(0)";
    sliderWrapperWidth = sliderWrapper.offsetWidth;
    console.log(numOfItemsToDisplay);
    let child = sliderWrapper.lastElementChild;
    while (child) {
      sliderWrapper.removeChild(child);
      child = sliderWrapper.lastElementChild;
    }
    displaySlides();
  });

  const transitionTime = "0.4";

  nextButtonSlider.addEventListener("click", (e) => {
    console.log(numOfItemsToDisplay)
    console.log(beginNumOfItems)
      let temp = numOfItemsToDisplay;
      ++numOfItemsToDisplay;
    if(sliderWrapper.childElementCount < sliderItems.length){
        Slider.createSlider(temp, numOfItemsToDisplay, true);
    }

    if (counter+beginNumOfItems < sliderItems.length+1) {
      sliderWrapper.style.transition = "transform ease-in-out";
      sliderWrapper.style.transitionDuration = transitionTime + "s";
      counter++;
      sliderWrapper.style.transform =
        "translateX(" + (-sliderItemWidth - 20) * counter + "px)";
    }

  });

  prevButtonSlider.addEventListener("click", (e) => {
      
    if (counter > 0) {
      --counter;

      sliderWrapper.style.transition = "transform 0.4s ease-in-out";
      sliderWrapper.style.transform =
        "translateX(" + (-sliderItemWidth - 20) * counter + "px)";
      numOfItemsToDisplay--;
      console.log(counter);
    }
  });

  //   var mySwiper = new Swiper(".swiper-container", {
  //     direction: "horizontal",
  //     loop: true,
  //     slidesPerView: 5,
  //     spaceBetween: 20,
  //     autoplay: {
  //       delay: 1500,
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       992: {
  //         slidesPerView: 3,
  //         spaceBetween: 20,
  //       },
  //       1400: {
  //         slidesPerView: 4,
  //         spaceBetween: 40,
  //       },
  //       1720: {
  //         slidesPerView: 5,
  //       },
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // }
}
