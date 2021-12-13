import { clothes } from "./../general/tiendaInfo.js";
const codigoClothe = document.querySelector(".codigo");
const quantity = document.querySelector("#quantity");

const cart = document.querySelector(".cart");

cart.addEventListener("click", function () {
  clothes[codigoClothe.textContent].quantity = Number(quantity.value);
  localStorage.setItem(
    codigoClothe.textContent,
    JSON.stringify(clothes[codigoClothe.textContent])
  );
});

const descriptionOuter = document.querySelector(".descriptionOuter");
const closeButtonDescription = document.querySelector(".btnToclose");

closeButtonDescription.addEventListener("click", function () {
  quantity.value = 0;
  descriptionOuter.classList.toggle("invisible");
});
