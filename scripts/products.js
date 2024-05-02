/*export const productOne = {
  nombre: "Celular",
  precio: 20000,
  stock: 2,
};*/

/* Para agregar propiedades dentro de un objeto se agrega con un "." o
 con un ["..."]  dentro del [" se tiene que poner en comillas
 si es string pero si la clave es número no es necesario poner los corchetes"]*/

/*productOne.id = "id123";
productOne["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";*/

/*
export const products = [prodOne, prodTwo, prodThree, prodFour];

const lastProduct = products.length - 1;

const printProduct = products[lastProduct].title;

export function addArrayUnshiftPush() {
  // agregar al INICIO en una ARRAY : unshift y retorna el nuevo tamaño del array
  const firstProd = products.unshift(prodFive);
  console.log(firstProd);

  // agregar al FINAL en una ARRAY : push y retorna el nuevo tamaño del array
  const lastProd = products.push(prodSix);
  console.log(lastProd);
}

export function deleteArrayShiftPop() {
  // ELIMINA al INICIO en una ARRAY : shift y retorna el nuevo tamaño del array
  const firstProd = products.shift(prodFive);
  console.log(firstProd);

  const lastProd = products.pop(prodSix);
  // DELETE al FINAL en una ARRAY : pop y retorna el nuevo tamaño del array
  console.log(lastProd);
}
*/

class Product {
  constructor(
    id,
    title,
    description,
    price,
    discount,
    stock,
    img,
    onsale,
    supplier,
    colors,
    tax
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.stock = stock;
    this.img = img;
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.tax = tax;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
  sellUnits(units) {
    if (this.stock === 0 || this.stock - units <= 0) return;
    this.stock = this.stock - units;
  }
}

const listProduct = [];

const prodOne = new Product(
  "001",
  "Xiami 1",
  `Pantalla panorámica brillante o antirreflectante retroiluminada
  por LED de 15,4 pulgadas (en diagonal) capaz de reproducir
  millones de colores Resoluciones compatibles: 1.440 por 900
  (nativa), 1.280 por 800, 1.152 por 720, 1.024 por 640 y 800`,
  1000,
  50,
  5,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://postimg.cc/JDxY0vVh",
  ],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"],
  "Incluye Impuesto País y percepción AFIP"
);

listProduct.push(prodOne);

const prodTwo = new Product(
  "002",
  "MacBook 15'",
  "Phone is fine, small, the wiew is large and beautiful,Phone is fine, small, the wiew is large and beautiful",
  1000,
  60,
  5,
  ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://postimg.cc/JDxY0vVh"],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"],
  "Incluye Impuesto País y percepción AFIP"
);

listProduct.push(prodTwo);

const prodThree = new Product(
  "003",
  "Samsung 3",
  "Phone is fine, small, the wiew is large and beautiful",
  1000,
  40,
  5,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://postimg.cc/JDxY0vVh",
  ],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"],
  "Incluye Impuesto País y percepción AFIP"
);

listProduct.push(prodThree);

const prodFour = new Product(
  "004",
  "Alcatel 4",
  "Phone is fine, small, the wiew is large and beautiful",
  1000,
  60,
  5,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://postimg.cc/JDxY0vVh",
  ],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"],
  "Incluye Impuesto País y percepción AFIP"
);

listProduct.push(prodFour);

const prodFive = new Product(
  "005",
  "Chanchito 5",
  "Phone is fine, small, the wiew is large and beautiful",
  1000,
  90,
  5,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://postimg.cc/JDxY0vVh",
  ],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"],
  "Incluye Impuesto País y percepción AFIP"
);

listProduct.push(prodFive);

const prodSix = new Product(
  "006",
  "Phone 6",
  "Phone is fine, small, the wiew is large and beautiful",
  1000,
  30,
  5,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://postimg.cc/JDxY0vVh",
  ],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"],
  "Incluye Impuesto País y percepción AFIP"
);

listProduct.push(prodSix);

export { listProduct };
