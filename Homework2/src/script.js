const displNone = document.getElementsByClassName("display-none");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    for (let i = 0; i < displNone.length; i++) {
      displNone[i].classList.add("to__card");
    }
  } else {
    for (let i = 0; i < displNone.length; i++) {
      displNone[i].classList.remove("to__card");
    }
  }
}

var x = window.matchMedia("(max-width: 710px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
