export function toastMessage(productId){
  const message = document.querySelector(`.js-added-to-cart-${productId}`);
  message.classList.add(`added-to-cart-visible`);
  setTimeout(() => {
    message.classList.remove(`added-to-cart-visible`);
  }, 1000);
}