const keyIsFavorite = "isFavorite";

let isFavorite = JSON.parse(localStorage.getItem(keyIsFavorite)) || false;

export function createCard(product) {
  return `
          <article class="product-card">
            <a href="./details.html?id=${product.id}" >
              <img
               src="${product.img[0]}" alt="${product.id}
                class="product-img"
              />
              <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product._supplier}</span>
                <div class="product-price-block">
                  <span class="price"> $ ${product.price}</span>
                  <span class="discount">${product.discount}%</span>
                </div>
                <div class="product-tax-policy">
                  ${product.tax}
                </div>
                <button class="button-favorite" id="button-favorite">
                <i class="fa-regular fa-heart"></i>
                </button>
                <button class="button-trash" id="button-trash">
                <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </a>
          </article>
`;
}

export function printCards(arrayOfProducts, idSelector) {
  let productTemplate = "";

  for (let element of arrayOfProducts) {
    productTemplate = productTemplate + createCard(element);
  }
  const $productSelector = document.getElementById(idSelector);
  $productSelector.innerHTML = productTemplate;

  const $buttonFavorite = document.getElementById("button-favorite");
  const $iconHeart = $buttonFavorite.querySelector(".fa-solid");

  $buttonFavorite.addEventListener("click", () => {
    isFavorite = !isFavorite;
    if (isFavorite) {
      $iconHeart.classList.remove("fa-solid");
      $iconHeart.classList.add("fa-regular");
    } else {
      $iconHeart.classList.add("fa-solid");
      $iconHeart.classList.remove("fa-regular");
    }
  });
}
