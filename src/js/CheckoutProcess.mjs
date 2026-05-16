import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {

    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.list = [];
        this.itemTotal = 0;
        this.shipping = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }

    init() {
        this.list = getLocalStorage(this.key);
        this.calculateSubtotal();
    }

    calculateSubtotal() {
        this.subtotal = this.list.reduce((accumulator, item) => {
            return accumulator + item.FinalPrice;
        }, 0);
        document.querySelector(`${this.outputSelector} #subtotal`).textContent = `$${this.subtotal}`;
    }

    calculateOrderTotal() {
        this.tax = this.subtotal * 0.06;
        document.querySelector(`${this.outputSelector} #tax`).textContent = `$${this.tax}`;
        this.shipping = 10 + (2 * (this.list.length - 1));
        document.querySelector(`${this.outputSelector} #shippingEstimate`).textContent = `$${this.shipping}`;
        this.total = this.subtotal + this.tax + this.shipping;
        document.querySelector(`${this.outputSelector} #orderTotal`).textContent = `$${this.total}`;
    }
}