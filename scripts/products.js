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
    colors
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
  "Phone 1",
  "Phone is fine, small, the wiew is large and beautiful",
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
  ["Blue", "Red", "Yellow", "black"]
);

listProduct.push(prodOne);

const prodTwo = new Product(
  "002",
  "Phone 2",
  "Phone is fine, small, the wiew is large and beautiful",
  1000,
  60,
  5,
  ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://postimg.cc/JDxY0vVh"],
  true,
  "H&M",
  ["Blue", "Red", "Yellow", "black"]
);

listProduct.push(prodTwo);

const prodThree = new Product(
  "003",
  "Phone 3",
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
  ["Blue", "Red", "Yellow", "black"]
);

listProduct.push(prodThree);

const prodFour = new Product(
  "004",
  "Phone 4",
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
  ["Blue", "Red", "Yellow", "black"]
);

listProduct.push(prodFour);

const prodFive = new Product(
  "005",
  "Phone 5",
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
  ["Blue", "Red", "Yellow", "black"]
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
  ["Blue", "Red", "Yellow", "black"]
);

listProduct.push(prodSix);

export { listProduct };

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
