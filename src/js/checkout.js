import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

async function init() {
  await loadHeaderFooter();

  const checkout = new CheckoutProcess("so-cart", ".order-summary");

  checkout.init();

  const zipCode = document.querySelector("#zipCode");

  zipCode.addEventListener("blur", () => {
    checkout.calculateOrderTotal();
  });

  const form = document.querySelector("#form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await checkout.checkout(form);
  });
}

init();
