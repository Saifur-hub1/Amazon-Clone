import {updateCart, initCartQuantity} from '../data/cart.js';
import { products } from '../data/products.js';
import {toastMessage} from '../script/toastMessage.js';


let productsHTML = '';

products.forEach((product)=>{
  productsHTML += `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars" src="/image/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="product-quantity-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="image/icon/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" 
    data-product-id="${product.id}"
    data-product-name="${product.name}"
    data-product-image="${product.image}"
    data-product-price="${(product.priceCents/100).toFixed(2)}">
      Add to Cart
    </button>
  </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = button.dataset.productId;
      const productName = button.dataset.productName;
      const productImage = button.dataset.productImage;
      const productPrice = Number(button.dataset.productPrice);
      const quantitySelector = document.querySelector(`.product-quantity-${productId}`);
      const quantityProd = Number(quantitySelector.value);

      updateCart(productId, quantityProd, productName,productImage, productPrice);
      toastMessage(productId);
      document.querySelector('.js-cart-quantity').innerHTML = initCartQuantity;

    });
  });


document.querySelector('.js-cart-quantity').innerHTML = initCartQuantity;
// const valueSet = 
// console.log(initCartQuantity);