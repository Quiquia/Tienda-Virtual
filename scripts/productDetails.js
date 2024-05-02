import { listProduct } from "./products.js";

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const $detailSelector = document.getElementById("details");

function printDetails(id) {
  const product = listProduct.find((item) => item.id === id);

  const detailsTemplate = `
         <div class="product-img-block">
            <div class="list-img">
            ${product.img.map((e) => `<img src="${e}" alt="${product.title}" />`).join("")}
            </div>
            <div class="product-img">
              <img
                src="./assets/mock2.jpg"
                alt="MacBook Pro 15'4"
                width="218"
              />
            </div>
          </div>

          <div class="product-description-block">
            <h1 class="title-product">${product.title}</h1>
            <div class="select-color">
              <label class="subtitle" for="color">Color</label>
              <select type="text" placeholder="Selecciona un color">
                <!-- Opciones de color aquí -->
                ${product.colors.map((e) => ` <option value="${e}">${e}</option>`).join("")}
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
              <span>1</span>
              <button>Añadir al Carrito</button>
            </div>
          </div>
    `;

  $detailSelector.innerHTML = detailsTemplate;
}

printDetails(id);
