function scrollWin() {
  const reveal = [...document.querySelectorAll(".reveal")];
  const windowOuterHeight = window.outerHeight;
  console.log(windowOuterHeight);

  for (let i in reveal) {
    let coordinatesReveal = reveal[i].getBoundingClientRect();

    if (coordinatesReveal.top < windowOuterHeight) {
      reveal[i].classList.add("reveal_active");
    }
  }
}

window.addEventListener("scroll", scrollWin);