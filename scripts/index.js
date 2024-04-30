import { filterProducts } from "./filterProducts.js";
import { generateNavNavigation, generateNavigationFooter } from "./layout.js";
import { listProduct } from "./products.js";

generateNavNavigation();
generateNavigationFooter();

filterProducts(listProduct);
