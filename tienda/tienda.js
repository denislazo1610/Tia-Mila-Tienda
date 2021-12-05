const clothes = {
  yellowBiker: {
    name: "Yellow Biker",
    price: "2$",
    color: "yellow",
    location: "../galeria/clothes/outfit_yellow_bicker.jpeg",
  },
  prendaAzul: {
    name: "Prenda Azul",
    price: "6$",
    color: "blue",
    location: "../galeria/clothes/prenda_azul.jpeg",
  },
  prendaRoja: {
    name: "Prenda Roja",
    price: "6$",
    color: "blue",
    location: "../galeria/clothes/prenda_roja.jpeg",
  },
  prendaRosada: {
    name: "Prenda Rosada con Flores",
    price: "6$",
    color: "blue",
    location: "../galeria/clothes/prenda_rosada_con_flores.jpeg",
  },
};

const prendas = document.querySelector(".prendas");

for (let [name, values] of Object.entries(clothes)) {
  const image = document.createElement("img");

  image.src = values.location;
  image.alt = values.name;

  prendas.appendChild(image);

  console.log(name, values);
}
