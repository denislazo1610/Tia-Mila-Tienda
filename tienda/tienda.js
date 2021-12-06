const clothes = {
  prenda1: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/flor_ombligo.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda2: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/flor_vestido.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda3: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/jogger_rojo.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda4: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/ombligo_rayas.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda5: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/outfit_yellow_bicker.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda6: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/prenda_azul.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda7: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/prenda_roja.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda8: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/prenda_rosada_con_flores.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda9: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/punto_0manga_prenda.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda10: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/Rojo_un_brazo.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda11: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/rosado_fuerte_ombligo.jpeg",
    category: "",
    nuevo: false,
    discount: 0
  },
  prenda12: {
    name: "Flor Ombligo",
    price: "$",
    color: "",
    location: "../galeria/clothes/rosado_princesa.jpeg",
    category: "",
    nuevo: false,
    discount: 0
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
