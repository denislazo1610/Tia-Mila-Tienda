const itemsCart = document.querySelector(".itemsCart");

let sum = 0;

if (!localStorage.length) {
  const vacio = document.createElement("h2");
  vacio.innerHTML = "No items in the cart";
  vacio.style.textAlign = "center";
  vacio.style.height = "300px";
  itemsCart.appendChild(vacio);
} else {
  checkingLocalstorage();
  const total = document.createElement("section");
  const oracion = document.createElement("h2");
  oracion.style.textAlign = "center";
  oracion.innerHTML = "Your total:";
  const totalNumber = document.createElement("span");
  totalNumber.innerHTML = sum + "$";
  oracion.appendChild(totalNumber);
  total.appendChild(oracion);
  itemsCart.appendChild(total);
}

function checkingLocalstorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const infoClothe = JSON.parse(localStorage.getItem(key));

    const itemPart = document.createElement("section");
    itemPart.style.margin = "0 auto 1rem";
    itemPart.style.paddingBottom = "1rem";
    itemPart.style.width = "80%";
    itemPart.style.border = "solid black";
    itemPart.style.textAlign = "center";

    const buttonCloses = document.createElement("button");
    buttonCloses.innerHTML = "Remove";
    const name = document.createElement("h3");
    const quantity = document.createElement("h4");
    quantity.style.margin = "0 auto";
    quantity.style.width = "85%";

    const price = document.createElement("h4");
    price.style.margin = "0 auto";
    price.style.width = "85%";

    name.innerHTML = infoClothe.name;

    quantity.innerHTML = "Quantity: " + infoClothe.quantity;

    price.innerHTML = "Price per unit: " + infoClothe.price + "$";

    itemPart.appendChild(buttonCloses);
    buttonCloses.addEventListener("click", function () {
      localStorage.removeItem(localStorage.key(i));
      location.reload();
    });
    itemPart.appendChild(name);
    itemPart.appendChild(quantity);
    itemPart.appendChild(price);

    itemsCart.appendChild(itemPart);
    const cantidad = infoClothe.quantity;
    const precio = Number(infoClothe.price);
    sum += precio * cantidad;
  }
}
