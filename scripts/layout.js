const $navSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas", linkTo: "#" },
  { title: "Cómo comprar", linkTo: "#" },
  { title: "Costos y tarifas", linkTo: "#" },
  { title: "Mis pedidos", linkTo: "cart.html" },
  { title: "Garantía", linkTo: "#" },
];

export function generateNavNavigation() {
  const $ul = document.createElement("ul");
  for (let option of options) {
    const $li = document.createElement("li");
    const $anchor = document.createElement("a");

    $anchor.textContent = option.title;
    $anchor.href = option.linkTo;

    $li.appendChild($anchor);
    $ul.appendChild($li);
  }

  $navSelector.appendChild($ul);
}

const $footerNav = document.getElementById("footer-columns");

const optionsFooter = [
  [
    { title: "OFERTAS", linkTo: "#" },
    { title: "Laptops", linkTo: "#" },
    { title: "Audio", linkTo: "#" },
    { title: "Auriculares", linkTo: "#" },
  ],
  [
    { title: "Cómo Comprar", linkTo: "#" },
    { title: "Formas de pago", linkTo: "#" },
    { title: "Envios", linkTo: "#" },
    { title: "Devoluciones", linkTo: "#" },
  ],
  [
    { title: "COSTO Y TARIFAS", linkTo: "#" },
    { title: "Impuestos", linkTo: "#" },
    { title: "Facturación", linkTo: "#" },
  ],
  [
    { title: "MIS PEDIDOS", linkTo: "#" },
    { title: "Pedir nuevamente", linkTo: "#" },
    { title: "Lista de deseos", linkTo: "#" },
  ],
  [{ title: "GARANTÍA DE ENTREGA", linkTo: "#" }],
];

export function generateNavigationFooter() {
  for (let optionsF of optionsFooter) {
    const $ul = document.createElement("ul");
    const $div = document.createElement("div");
    $div.className = "col";

    for (let option of optionsF) {
      const $li = document.createElement("li");
      const $a = document.createElement("a");

      $a.textContent = option.title;
      $a.href = option.linkTo;

      $li.appendChild($a);
      $ul.appendChild($li);
    }
    $div.appendChild($ul);
    $footerNav.appendChild($div);
  }
}
