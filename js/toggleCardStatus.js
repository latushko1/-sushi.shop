function toggleCardStatus () {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const alertSec = document.querySelector('[data-cart-empty]');
    const form = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0){
        alertSec.classList.toggle('none')
        form.classList.toggle('none')
    }else{
        alertSec.classList.toggle('none')
        form.classList.toggle('none')
    }
    
}