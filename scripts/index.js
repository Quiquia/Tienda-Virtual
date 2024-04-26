import { filterProduct } from "./filterProducts.js";
import { generateNavNavigation, generateNavigationFooter } from "./layout.js";
import {
  prod0,
  prodFour,
  prodOne,
  prodThree,
  prodTwo,
  productOne,
} from "./products.js";

generateNavNavigation();
generateNavigationFooter();

filterProduct();

console.log(productOne);
console.log(prod0, prodOne, prodTwo);
console.log(prodOne.title, prodTwo.onsale);
console.log(prodThree.getSupplier);
prodThree.setSupplier = "New Supplier";
console.log(prodThree.getSupplier);
prodFour.sellUnits(10);
prodFour.sellUnits(5);

console.log(prodFour);
