const $createCartCard = document.querySelector(".container-carrito");
const keyListProduct = "productsCart";
let productCartListLocalStorage =
  JSON.parse(localStorage.getItem(keyListProduct)) || [];
const keyIsFavorite = "isFavorite";
let isFavorite = JSON.parse(localStorage.getItem(keyIsFavorite)) || false;

export function printCartCards() {
  const listProductCart = productCartListLocalStorage.map((product) => {
    return `
     <div class="container-cart" id="${product.id}">
          <div class="product-container-cart">
            <article class="product-cart">
              <div class="product-img-cart">
                <img src="${product.img}" alt="${product.title}-${product.id}" />
              </div>
              <div class="product-info-cart">
                <span class="product-title">${product.title}</span>
                <span class="product-color">${product.color}</span>
                <div class="product-price-description">
                  <span class="product-description">Space Gray</span>
                  <span class="price">Sub Total: $${product.subTotal}</span>
                </div>
                <div>
                <span>Cantidad:</span><span class="cantidad-product">${product.quantity} </span>
                </div>
                <div>
                <button class="button-favorite" data-id="${product.id}">
                <i class="fa-regular fa-heart"></i>
                </button>
                <button class="button-trash" data-id="${product.id}">
                <i class="fa-solid fa-trash"></i>
                </button>
                </div>
              </div>
            </article>
          </div>
        </div>
    `;
  });

  $createCartCard.innerHTML = listProductCart.join("");
  attachEventListeners();
}

function resumenCart() {
  const $cartTotal = document.querySelector("#cart-total");
  let priceTotal = 0;
  productCartListLocalStorage.forEach((product) => {
    priceTotal += product.subTotal;
  });

  $cartTotal.innerHTML = `$ ${priceTotal}`;
}

// Función para agregar los event listeners a los botones después de renderizar las tarjetas
function attachEventListeners() {
  let $buttonsFavorite = document.querySelectorAll(".button-favorite");
  let $buttonsTrash = document.querySelectorAll(".button-trash");

  $buttonsFavorite.forEach((button) =>
    button.addEventListener("click", (e) => {
      const productId = e.currentTarget.getAttribute("data-id");
      console.log("🚀 ~ button.addEventListener ~ productId:", productId);
      toggleFavorite(productId);
    })
  );

  $buttonsTrash.forEach((button) =>
    button.addEventListener("click", (e) => {
      const productId = e.currentTarget.getAttribute("data-id");
      removeProduct(productId);
    })
  );
}

// Función para alternar el estado de favorito
function toggleFavorite(productId) {
  console.log("🚀 ~ toggleFavorite ~ productId:", productId);
  productCartListLocalStorage = productCartListLocalStorage.map((product) => {
    if (product.id === productId) {
      product.isFavorite = !product.isFavorite;
    }

    return product;
  });
  localStorage.setItem(
    keyListProduct,
    JSON.stringify(productCartListLocalStorage)
  );
  printCartCards();
}

// Función para remover un producto del carrito
function removeProduct(productId) {
  productCartListLocalStorage = productCartListLocalStorage.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem(
    keyListProduct,
    JSON.stringify(productCartListLocalStorage)
  );
  printCartCards();
  resumenCart();
}

// Inicialización de la impresión del carrito y el resumen
printCartCards();
resumenCart();
