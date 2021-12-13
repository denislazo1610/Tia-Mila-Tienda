import { clothes } from "./../general/tiendaInfo.js";
const codigoClothe = document.querySelector(".codigo");

const cart = document.querySelector(".cart");

cart.addEventListener("click", function () {
  console.log(clothes[codigoClothe.textContent]);
  //   localStorage.setItem(codigoClothe.textContent);
});
