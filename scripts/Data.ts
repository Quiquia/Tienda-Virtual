import { IProduct } from "./product";

class Product implements IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  img: string[];
  onsale: boolean;
  supplier: string;
  colors: string[];
  tax: string;

  constructor(
    id: string,
    title: string,
    description: string,
    price: number,
    discount: number,
    stock: number,
    img: string[],
    onsale: boolean,
    supplier: string,
    colors: string[],
    tax: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.stock = stock;
    this.img = img;
    this.onsale = onsale;
    this.supplier = supplier;
    this.colors = colors;
    this.tax = tax;
  }
  get getSupplier() {
    return this.supplier;
  }
  set setSupplier(newName) {
    this.supplier = newName;
  }
  sellUnits(units) {
    if (this.stock === 0 || this.stock - units <= 0) return;
    this.stock = this.stock - units;
  }
}

const listProduct = [
  new Product(
    "001",
    "Xiami 1",
    `Pantalla panorámica brillante o antirreflectante retroiluminada por LED de 15,4 pulgadas (en diagonal) capaz de reproducir millones de colores Resoluciones compatibles: 1.440 por 900 (nativa), 1.280 por 800, 1.152 por 720, 1.024 por 640 y 800`,
    1000,
    50,
    5,
    [
      "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
      "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    ],
    true,
    "H&M",
    ["Blue", "Red", "Yellow", "black"],
    "Incluye Impuesto País y percepción AFIP"
  ),

  new Product(
    "002",
    "MacBook 15'",
    "Phone is fine, small, the wiew is large and beautiful,Phone is fine, small, the wiew is large and beautiful",
    1000,
    60,
    5,
    ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],
    true,
    "H&M",
    ["Blue", "Red", "Yellow", "black"],
    "Incluye Impuesto País y percepción AFIP"
  ),

  new Product(
    "003",
    "Samsung 3",
    "Phone is fine, small, the wiew is large and beautiful",
    1000,
    40,
    5,
    [
      "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
      "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    ],
    true,
    "H&M",
    ["Blue", "Red", "Yellow", "black"],
    "Incluye Impuesto País y percepción AFIP"
  ),

  new Product(
    "004",
    "Alcatel 4",
    "Phone is fine, small, the wiew is large and beautiful",
    1000,
    60,
    5,
    [
      "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
      "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    ],
    true,
    "H&M",
    ["Blue", "Red", "Yellow", "black"],
    "Incluye Impuesto País y percepción AFIP"
  ),

  new Product(
    "005",
    "Carro",
    "Phone is fine, small, the wiew is large and beautiful",
    1000,
    90,
    5,
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-vK9hthvw1HKcEwyWPLyhTWyF1bnGswUQw&usqp=CAU",
      "https://cdn.buttercms.com/NGzDkznNSIuTY6yrKMxA",
    ],
    true,
    "H&M",
    ["Blue", "Grey"],
    "Incluye Impuesto País y percepción AFIP"
  ),

  new Product(
    "006",
    "Bicicleta",
    "Phone is fine, small, the wiew is large and beautiful",
    1000,
    30,
    5,
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXH8PGaZZt-HIQp2P3tRP_f0UfYX_p6rrbQ&usqp=CAU",
      "https://img.freepik.com/foto-gratis/juguete-bicicleta-vintage-metal-blanco-sobre-mesa-madera_155003-6411.jpg?w=826&t=st=1714985534~exp=1714986134~hmac=679fb1e60f36030ce8f2a2b9d5d2fceba22afb67628ab16c8be2c56edd1a700d",
    ],
    true,
    "H&M",
    ["Blue", "Red", "Yellow", "black"],
    "Incluye Impuesto País y percepción AFIP"
  ),
];

console.log(Product, listProduct);

export { Product, listProduct };
