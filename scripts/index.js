import { generateNavNavigation, generateNavigationFooter } from "./layout.js";
import { printCards } from "./productCards.js";
import { listProduct } from "./products.js";

generateNavNavigation();
generateNavigationFooter();

printCards(listProduct, "products");
