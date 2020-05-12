import { handleCSSAnimationPrev } from "../cssAnimation.js";
import { handleCSSAnimationNext } from "../cssAnimation.js";
import { handleCanvasAnimation } from "../canvasAnimation.js";
import { handleThreeAnimation } from "../threeAnimation.js";
import { SLIDES_COUNT } from "../utils.js";

const title = document.getElementById("title");

let slideIndex = 0;

const nextPrevSlide = () => {
  title.innerHTML = "";
  const text = document.createTextNode(`slide${slideIndex + 1}`);
  title.appendChild(text);

  
  handleCanvasAnimation(slideIndex);
};

export const nextSlide = () => {
  if (slideIndex >= SLIDES_COUNT) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  nextPrevSlide();
handleCSSAnimationNext();
  handleThreeAnimation(360);
};

export const prevSlide = () => {
  if (slideIndex === 0) {
    slideIndex = 2;
  } else {
    slideIndex--;
  }
  nextPrevSlide();

handleCSSAnimationPrev();
  handleThreeAnimation(-360);
};
