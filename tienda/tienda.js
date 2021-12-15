import { clothes } from "./../general/tiendaInfo.js";

const prendas = document.querySelector(".prendas");

const descriptionOuter = document.querySelector(".descriptionOuter");
const descriptionInside = document.querySelector(".descriptionInside");
const ejemploPrenda = document.querySelector(".ejemploPrenda");
const ejemploPrice = document.querySelector(".price");
const ejemploClotheName = document.querySelector(".clotheName");
const codigoClothe = document.querySelector(".codigo");

for (let [name, values] of Object.entries(clothes)) {
  const image = document.createElement("img");

  image.src = values.location;
  image.alt = values.name;

  prendas.appendChild(image);

  image.addEventListener("click", function () {
    codigoClothe.textContent = values.code;
    descriptionOuter.classList.toggle("invisible");
    ejemploPrenda.src = values.location;

    ejemploPrenda.style.width = "210px";
    ejemploPrenda.style.height = "300px";

    ejemploPrenda.style.margin = "1rem 20%";

    ejemploClotheName.innerHTML = values.name;
    ejemploPrice.innerHTML = values.price + "$";
  });
}
console.log(window.innerWidth);
