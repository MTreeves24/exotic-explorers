// Inspiration: https://hummingbirdbakery.com/

//NAVBAR//
const ul = document.querySelector("ul");
const hamburgerToggle = document.querySelector(".menu-toggle");

hamburgerToggle.addEventListener("click", function () {
  ul.classList.toggle("opening");
  this.classList.toggle("open");
});

document.querySelectorAll("a").forEach((item) =>
  item.addEventListener("click", function () {
    ul.classList.remove("opening");
    hamburgerToggle.classList.remove("open");
  })
);

const panels = document.querySelectorAll(".panel");
function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
