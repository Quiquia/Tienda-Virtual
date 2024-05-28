const $cartProductFavorite = document.getElementById("product-favorites");

function favoriteProducts() {
  const templetaFavoriteProduct = `
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
              </div>
            </a>
          </article>
    `;
}
