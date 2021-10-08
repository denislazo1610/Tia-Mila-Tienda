const option = document.querySelector(".option");

const overlay = document.querySelector(".overlay");
const bar = document.querySelector(".bar");

option.addEventListener("click", function () {
  overlay.classList.toggle("invisible");
  bar.classList.toggle("invisible");
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("invisible");
  bar.classList.toggle("invisible");
});
