import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

async function init() {
  await loadHeaderFooter();
  document
    .querySelector("#search")
    .addEventListener("submit", function (event) {
      const input = document.querySelector("#search-input");
      const searchTerm = input.value;
      event.preventDefault(); // stops the page from reloading
      window.location.href = `/product_listing/?search=${searchTerm}`;
    });

  const dataSource = new ProductData("tents");

  const element = document.querySelector(".product-list");

  const productList = new ProductList("Tents", dataSource, element);

  productList.init();
}

init();
