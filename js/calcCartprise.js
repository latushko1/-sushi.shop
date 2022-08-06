function calcCartprise(){
    let totalPrice = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    const prise = document.querySelector('.total-price')
    const delivery = document.querySelector('.delivery-cost');
    cartItems.forEach(function (item){
        const ammountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrise = parseInt(ammountEl.innerText) * parseInt(priceEl.innerText)

        totalPrice += currentPrise;
    })

    
    let delSale = parseInt(totalPrice) / 100

    prise.innerText = totalPrice + delSale;

    if (totalPrice > 500){
        delivery.innerText = `${delSale} ₽`
    }else{
        delivery.innerText = 'Бесплатно'
    }

}