export const productOne = {
  nombre: "Celular",
  precio: 20000,
  stock: 2,
};

/* Para agregar propiedades dentro de un objeto se agrega con un "." o
 con un ["..."]  dentro del [" se tiene que poner en comillas
 si es string pero si la clave es número no es necesario poner los corchetes"]*/

productOne.id = "id123";
productOne["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

class Product {
  constructor(id, title, price, stock, img, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.img = img;
    this.onsale = onsale;
    this._supplier = supplier;
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

export const prod0 = new Product();

export const prodOne = new Product("001", "Phone 1", 2000);

export const prodTwo = new Product(
  "002",
  "Phone 2",
  2000,
  4,
  ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],
  true
);

export const prodThree = new Product(
  "003",
  "Phone 3",
  2000,
  4,
  ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],
  true,
  "H&M"
);

export const prodFour = new Product(
  "004",
  "Phone 4",
  2000,
  12,
  ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],
  true,
  "International SA"
);
