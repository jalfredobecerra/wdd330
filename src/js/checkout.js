import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

const checkout = new CheckoutProcess();

checkout.calculateSubtotal();

const zipCode = document.querySelector("#zipCode");

zipCode.addEventListener("blur", () => {
  checkout.calculateOrderTotal();
});

loadHeaderFooter();
