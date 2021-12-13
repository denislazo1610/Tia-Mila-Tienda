import { clothes } from "./../general/tiendaInfo.js";

const carousel = document.querySelector(".carousel-inner");
const descriptionOuter = document.querySelector(".descriptionOuter");
const descriptionInside = document.querySelector(".descriptionInside");
const ejemploPrenda = document.querySelector(".ejemploPrenda");
const ejemploPrice = document.querySelector(".price");
const ejemploClotheName = document.querySelector(".clotheName");
var codigoClothe = document.querySelector(".codigo");

const closeButtonDescription = document.querySelector(".btnToclose");

closeButtonDescription.addEventListener("click", function () {
  descriptionOuter.classList.toggle("invisible");
});

for (let [name, values] of Object.entries(clothes)) {
  if (values.nuevo) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    // carouselItem.classList.add("");
    const carouselPhoto = document.createElement("img");
    carouselPhoto.classList.add("d-block");
    carouselPhoto.classList.add("photo-slide");
    carouselPhoto.alt = values.name;
    carouselPhoto.src = values.location;

    console.log(values.code);

    carouselPhoto.addEventListener("click", function () {
      descriptionOuter.classList.toggle("invisible");
      ejemploPrenda.src = values.location;
      codigoClothe.textContent = values.code;

      ejemploPrenda.style.width = "200px";
      ejemploPrenda.style.height = "250px";
      ejemploPrenda.style.margin = "0 25%";
      ejemploClotheName.innerHTML = values.name;
      ejemploPrice.innerHTML = values.price;
    });

    carouselItem.appendChild(carouselPhoto);
    carousel.appendChild(carouselItem);
  }
}
carousel.children[0].classList.add("active");

const clothesDiscounts = document.querySelector(".prendasDiscounts");

for (let [name, values] of Object.entries(clothes)) {
  if (values.discount) {
    const image = document.createElement("img");

    image.src = values.location;
    image.alt = values.name;

    clothesDiscounts.appendChild(image);

    image.addEventListener("click", function () {
      codigoClothe.textContent = values.code;
      descriptionOuter.classList.toggle("invisible");
      ejemploPrenda.src = values.location;
      ejemploPrenda.style.width = "160px";
      ejemploPrenda.style.height = "210px";
      ejemploPrenda.style.margin = "0 25%";

      ejemploClotheName.innerHTML = values.name;
      ejemploPrice.innerHTML = values.price;
    });
  }
}
