import {
  generateNavNavigation,
  generateNavigationFooter,
  generateNavigationSocial,
} from "./layout.js";

generateNavigationFooter()
  .then(() => {
    console.log("Footer generado exitosamente.");
  })
  .catch((error) => {
    console.error("Error al generar el footer:", error);
  });

generateNavNavigation();
generateNavigationSocial();
