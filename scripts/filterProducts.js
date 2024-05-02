import { printCards } from "./productCards.js";
import { listProduct } from "./products.js";

const $inputSearch = document.getElementById("search-input");

function filterProducts(listProduct) {
  printCards(listProduct, "products");

  $inputSearch.addEventListener("keyup", (event) => {
    const eventTarget = event.target.value.toUpperCase();
    const valueSearch = eventTarget || "";

    const productFiltered = listProduct.filter((product) =>
      product.title.toUpperCase().includes(valueSearch)
    );

    printCards(productFiltered, "products");
  });
}

filterProducts(listProduct);
