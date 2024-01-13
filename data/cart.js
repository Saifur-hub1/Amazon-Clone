export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[];
}
export function makeEmpty(){
  cart = [];
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem(`cart`,JSON.stringify(cart));
}

export let initCartQuantity = localStorage.getItem('initcartquantity');
export function updateCart(productId, quantityProd, productName, productImage, productPrice){
  let matchingItem;
  let cartQuantity = 0;
  cart.forEach((item) =>{
    if (item.productId === productId) {
      matchingItem = item;
    }
    cartQuantity += item.quantity;
  });
  if (matchingItem) {
    matchingItem.quantity+=quantityProd;
  } 
  else {
    cart.push({
      productId: productId,
      productName: productName,
      productImage: productImage,
      productPrice: productPrice,
      quantity: quantityProd,

      deliveryOptionId: '3'
    });
  }
  cartQuantity+=quantityProd;
  initCartQuantity=cartQuantity;
  localStorage.setItem('initcartquantity',initCartQuantity);
  // document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  saveToStorage();
};

export function deleteProduct(prodId){
  let newCart=[];
  let cartQuantity=0;
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==prodId){
      newCart.push(cartItem);
      cartQuantity+=cartItem.quantity;
    }
  });
  initCartQuantity = cartQuantity;
  localStorage.setItem('initcartquantity',initCartQuantity);
  cart = newCart;
  saveToStorage();
};

export function new_update(inpString, prodId){
    const inpValue = Number(inpString);
    let temp;
    let cartQuantity=0;
    cart.forEach((cartItem)=>{
      if(cartItem.productId===prodId){
        cartItem.quantity = inpValue;
        temp = cartItem.quantity;
      }
      cartQuantity+=cartItem.quantity;
    });
    localStorage.setItem('initcartquantity',cartQuantity);
    // console.log(temp);
    localStorage.setItem(`cart`,JSON.stringify(cart));
}

export function updateDeliveryOptionId(productId, deliveryOptionId){
  console.log('hello');
  let matchingId;
  cart.forEach((cartItem)=>{
    if(cartItem.productId===productId){
      matchingId = cartItem;
    }
  });
  matchingId.deliveryOptionId = deliveryOptionId;
  localStorage.setItem('cart', JSON.stringify(cart));
}