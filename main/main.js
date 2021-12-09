import { clothes } from "./../general/tiendaInfo.js";

const prendas = document.querySelector(".prendas");

const descriptionOuter = document.querySelector(".descriptionOuter");
const descriptionInside = document.querySelector(".descriptionInside");
const ejemploPrenda = document.querySelector(".ejemploPrenda");
const ejemploPrice = document.querySelector(".price");
const ejemploClotheName = document.querySelector(".clotheName");

const closeButtonDescription = document.querySelector(".btnToclose");

closeButtonDescription.addEventListener("click", function () {
  descriptionOuter.classList.toggle("invisible");
});

for (let [name, values] of Object.entries(clothes)) {
  const image = document.createElement("img");

  if (values.nuevo) {
    image.src = values.location;
    image.alt = values.name;

    prendas.appendChild(image);
  }

  image.addEventListener("click", function () {
    descriptionOuter.classList.toggle("invisible");
    ejemploPrenda.src = values.location;
    ejemploPrenda.style.width = "160px";
    ejemploPrenda.style.height = "210px";
    ejemploPrenda.style.margin = "0 25%";

    ejemploClotheName.innerHTML = values.name;
    ejemploPrice.innerHTML = values.price;
  });
}
