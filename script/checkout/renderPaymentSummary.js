import {cart} from '../../data/cart.js';
import {getProducts} from '../../data/products.js';
import { formateCurrency } from '../money/utils.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import { renderCheckoutHeader } from '../checkoutHeader.js';
export let item;
export function renderPaymentSummary(){
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  item = 0;
  cart.forEach((cartItem)=>{
    item+=cartItem.quantity;
    const product = getProducts(cartItem.productId);
    productPriceCents += product.priceCents*cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents+=deliveryOption.priceCents;
  });
  renderCheckoutHeader()

  
  const totalBeforeTax = productPriceCents+shippingPriceCents;
  const totalTax = totalBeforeTax*0.1;
  const totalCents = totalBeforeTax+totalTax;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Items (${item}):</div>
      <div class="payment-summary-money">$${formateCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formateCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formateCurrency(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formateCurrency(totalTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money ">$${formateCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary">Place your order</button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}