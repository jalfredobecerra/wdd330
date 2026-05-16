import { loadHeaderFooter } from "./utils.mjs";

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
}

init();
