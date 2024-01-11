import { cart, deleteProduct, new_update, updateDeliveryOptionId} from "../../data/cart.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProducts } from "../../data/products.js";
import { formateCurrency } from "../money/utils.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummary } from "./renderPaymentSummary.js";

document.querySelector('.js-reset').addEventListener('click', ()=>{
  localStorage.removeItem('cart');
  localStorage.setItem('initcartquantity',0);
  document.querySelector(".js-order-summary").innerHTML = ``;
  renderPaymentSummary();
  // renderUpdate();
});

export function renderUpdate(){
  let cartSummaryHTML = ``;
  cart.forEach((cartItem)=>{
  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
  const deliveryDateString = deliveryDate.format('dddd MMMM D');

  const product = getProducts(cartItem.productId);
  cartSummaryHTML+=`
  <div class="cart-item-container js-cart-item-container-${cartItem.productId}">
  <div class="delivery-date">
    Delivery date: ${deliveryDateString}
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image" src="${cartItem.productImage}">
    
    <div class="cart-item-details">
      <div class="product-name">
        ${cartItem.productName}
      </div>
      <div class="product-price">
        $${formateCurrency(product.priceCents)}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <span class="update-quantity-link update-${cartItem.productId} link-primary" data-product-identity="${cartItem.productId}">
          Update
        </span>
        <span class="update-new-${cartItem.productId}"></span>
        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${cartItem.productId}">
          Delete
        </span>
      </div>
    </div>

    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      
      ${deliveryOptionHTML(cartItem)}
      
      
    </div>
  </div>
</div>
  `;
}); 
document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delivery-option')
.forEach((element)=>{
element.addEventListener('click', ()=>{
  const productId = element.dataset.productId;
  const deliveryOptionId = element.dataset.deliveryOptionId;
  updateDeliveryOptionId(productId, deliveryOptionId);
  
  renderUpdate();
  renderPaymentSummary();
});
});


document.querySelectorAll('.js-delete-link')
  .forEach((link)=>{
    // console.log(link);
    link.addEventListener('click', ()=>{
      // console.log(`delete ${id}`);
      const prodId = link.dataset.productId;
      deleteProduct(prodId);
      const container = document.querySelector(`.js-cart-item-container-${prodId}`);
      container.remove();
      localStorage.setItem('cart',JSON.stringify(cart));
      renderPaymentSummary();
    });
});


document.querySelectorAll('.update-quantity-link')
  .forEach((updt)=>{
    // console.log(updt);
    updt.addEventListener('click',()=>{
      const prodId = updt.dataset.productIdentity;
        const rep = document.querySelector(`.update-${prodId}`);
        rep.remove();
        document.querySelector(`.update-new-${prodId}`).innerHTML = `<input type="Number" class="css-update css-update-inp"> <span class="link-primary js-save-btn">Save</span>`;
        const saveBtn = document.querySelector('.js-save-btn');
        saveBtn.addEventListener('click', ()=>{
          const inpString = document.querySelector('.css-update-inp').value;
          new_update(inpString, prodId);
          renderPaymentSummary();
          renderUpdate();
        });
    });
});

function isWeekend(dayNav){
  return dayNav.format('dddd')==='Saturday'||dayNav.format('dddd')==='Sunday';
}

function deliveryOptionHTML(cartItem){
  let html='';
  deliveryOptions.forEach((deliveryOption)=>{
    let dayNav = dayjs();
    let remainingDay = deliveryOption.deliveryDays;
    while(remainingDay>0){
      dayNav = dayNav.add(1, 'day');
      if(!(isWeekend(dayNav))) remainingDay--;
    }
    
    const priceCent = deliveryOption.priceCents===0? 'FREE - Shipping': `$${formateCurrency(deliveryOption.priceCents)} - Shipping`;
    const isCheked = deliveryOption.id===cartItem.deliveryOptionId;
    const dateString = dayNav.format('dddd MMMM D');
    html += `
      <div class="delivery-option js-delivery-option" 
        data-product-id="${cartItem.productId}"
        data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" ${isCheked?'checked':''}
            class="delivery-option-input" name="delivery-option-${cartItem.productId}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceCent}
            </div>
          </div>
      </div>
    `;
  });

  return html;
}

}

renderUpdate();



// console.log(cartSummaryHTML);








