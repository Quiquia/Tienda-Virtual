const $createCartCard = document.querySelector(".container-carrito");
const keyListProduct = "productsCart";
const productCartListLocalStorage =
  JSON.parse(localStorage.getItem(keyListProduct)) || [];

function printCartCards() {
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
              </div>
            </article>
          </div>
        </div>
    `;
  });

  $createCartCard.innerHTML = listProductCart.join("");
}

printCartCards();

function resumenCart() {
  const $cartTotal = document.querySelector("#cart-total");
  let priceTotal = 0;
  productCartListLocalStorage.forEach((product) => {
    priceTotal += product.subTotal;
  });

  $cartTotal.innerHTML = `$ ${priceTotal}`;
}

resumenCart();
