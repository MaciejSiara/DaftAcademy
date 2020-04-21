const displNone = document.getElementsByClassName("display-none");
const allProdutcsBtn = document.querySelector(".products-btn");
const newletterHeader = document.querySelector(".newsletter__header");
const policy = document.getElementsByClassName("policy");
const price = document.getElementsByClassName("price-shop");


let width = window.matchMedia("(max-width: 710px)");
myFunction(width); 
width.addListener(myFunction); 

function myFunction(width) {
  if (width.matches) {
    // If media query matches
    for (let i = 0; i < displNone.length; i++) {
      displNone[i].classList.add("to__card");
    }
    price[2].style.display = "block";
    allProdutcsBtn.innerHTML = "View All Products";
    newletterHeader.innerHTML = "NEWSLETTER";
    policy[1].innerHTML = "Track Your Order";
    policy[2].innerHTML = "Shipping & Delivery";
  } else {
    for (let i = 0; i < displNone.length; i++) {
      displNone[i].classList.remove("to__card");
    }
    displNone[2].classList.add("to__card");
    price[2].style.display = "none";
    allProdutcsBtn.innerHTML = "All products";
    newletterHeader.innerHTML = "Our newsletter";
    policy[1].innerHTML = "Privaty Policy";
    policy[2].innerHTML = "Privaty Policy";
  }
}