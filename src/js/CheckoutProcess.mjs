import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {

    constructor() {
        this.cartItems = getLocalStorage("so-cart");
    }

    calculateSubtotal() {
        this.subtotal = this.cartItems.reduce((accumulator, item) => {
            return accumulator + item.FinalPrice;
        }, 0);
        document.querySelector("#subtotal").textContent = `$${this.subtotal}`;
    }

    calculateOrderTotal() {
        this.tax = this.subtotal * 0.06;
        document.querySelector("#tax").textContent = `$${this.tax}`;
        this.shipping = 10 + (2 * (this.cartItems.length - 1));
        document.querySelector("#shippingEstimate").textContent = `$${this.shipping}`;
        this.total = this.subtotal + this.tax + this.shipping;
        document.querySelector("#orderTotal").textContent = `$${this.total}`;
    }
}