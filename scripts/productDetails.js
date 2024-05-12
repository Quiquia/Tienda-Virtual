import { listProduct } from "./products.js";

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const keyLocalStorage = "productsCart";

const $detailSelector = document.getElementById("details");

function changeMini(event) {
  const selectedSrc = event.target;
  const attribute = selectedSrc.getAttribute("src");

  const bigSelector = document.querySelector("#bigImg");
  bigSelector.src = attribute;
}

function printDetails(id) {
  const product = listProduct.find((item) => item.id === id);

  const detailsTemplate = `
         <div class="product-img-block">
            <div class="list-img">
            ${product.img.map((e) => `<img class="mini-img-${id}" src="${e}" alt="${product.title}" />`).join("")}
            </div>
            <div class="product-img"  >
              <img
                id="bigImg"
                src="${product.img[0]}"
                alt="MacBook Pro 15'4"
                width="236"
              />
            </div>
          </div>

          <div class="product-description-block">
            <h1 class="title-product">${product.title}</h1>
            <div class="select-color">
              <label class="subtitle" for="color">Color</label>
              <select type="text" placeholder="Selecciona un color" id="color-${id}">
                ${product.colors.map((e) => `<option value="${e}">${e}</option>`).join("")}
              </select>
            </div>
            <div class="description">
              <h3 class="subtitle">Descripción</h3>
              <div class="description-product">
              ${product.description}
              </div>
            </div>
          </div>
          <div class="product-detail-block">
            <span class="title">Total:</span>
            <span class="price">$ ${product.price}</span>
            <div class="product-tax-policy">
              ${product.tax}
            </div>
            <div class="product-send">
              <img src="./assets/truck.png" alt="truck" />
              <p>
                Agrega el producto al carrito para conocer los costos de envío.
              </p>
            </div>
            <div class="product-send">
              <img src="./assets/plane.png" alt="plane" />
              <p>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal.
              </p>
            </div>
            <div class="product-button">
              <input type="number" min="1" max="100" id="quantity-${id}"/>
              <button id="addToCart">Añadir al Carrito</button>
            </div>
          </div>
    `;

  $detailSelector.innerHTML = detailsTemplate;
}

printDetails(id);

const $listMiniImg = document.querySelectorAll(`.mini-img-${id}`);
$listMiniImg.forEach((e) => e.addEventListener("click", changeMini));

const $addTocart = document.getElementById("addToCart");
$addTocart.addEventListener("click", saveProduct);

function saveProduct() {
  const foundId = listProduct.find((item) => item.id === id);

  //Leer los datos del localStorage, sino hay data iniciar con array vacio []
  //json parse
  let productsCart = JSON.parse(localStorage.getItem(keyLocalStorage)) || [];

  //buscar el producto en los valores obtenidos del localstorage.
  const indexProduct = productsCart.findIndex((product) => product?.id === id);

  const quantity = Number(document.querySelector("#quantity-" + id).value);
  const color = document.querySelector("#color-" + id).value;
  const img = document.querySelector("#bigImg").getAttribute("src");

  // si existe, sacar el producto de la lista, hacer modificacaiones y volver agregar
  if (indexProduct >= 0) {
    productsCart = productsCart.with(indexProduct, {
      id: id,
      title: foundId.title,
      price: foundId.price,
      subTotal: quantity * foundId.price,
      img,
      color,
      quantity,
    });
  } else {
    //si no existe, agregar
    const product = {
      id: id,
      title: foundId.title,
      price: foundId.price,
      subTotal: quantity * foundId.price,
      img,
      color,
      quantity,
    };
    productsCart.push(product);
  }

  //Recordar que esto es una lista
  localStorage.setItem(keyLocalStorage, JSON.stringify(productsCart));
}

// const $changeSubtotal = document.querySelector(".change-subtotal");

// $changeSubtotal.addEventListener("onchange", changeSubtotal);

// function changeSubtotal() {}
