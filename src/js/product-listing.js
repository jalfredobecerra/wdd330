import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();
  const category = getParam("category");
  const dataSource = new ExternalServices();
  const element = document.querySelector(".product-list");
  const search = getParam("search");
  const searchTerm = category || search;
  const productList = new ProductList(searchTerm, dataSource, element);

  productList.init();
}

init();
