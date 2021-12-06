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

const descriptionOuter = document.querySelector(".descriptionOuter");
const descriptionInside = document.querySelector(".descriptionInside");

const closeButtonDescription = document.querySelector(".btn-close");

closeButtonDescription.addEventListener('click', function(){
  while(descriptionInside.firstChild) descriptionInside.removeChild(descriptionInside.firstChild);
  descriptionOuter.classList.add('invisible');
  })

for (let [name, values] of Object.entries(clothes)) {
  const image = document.createElement("img");

  image.src = values.location;
  image.alt = values.name;

  prendas.appendChild(image);

  image.addEventListener('click', function(){
    console.log("clickinh");

    descriptionOuter.classList.toggle('invisible');
    image.style.width = '150px';
    image.style.margin = '0 100px';
    descriptionInside.appendChild(image);


  })


}
