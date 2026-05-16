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
}

init();
