import {item} from './checkout/renderPaymentSummary.js';

export function renderCheckoutHeader(){

  let html = `
    <div class="checkout-header-middle-section js-checkout-middle-header-section">
      Checkout (<a class="return-to-home-link" href="amazon.html">${item} items</a>)
    </div>
  `;

  document.querySelector('.js-checkout-middle-header-section')
    .innerHTML = html;
}