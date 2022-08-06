const cardWrapper = document.querySelector('.cart-wrapper');


window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')){

        
        const Card = event.target.closest('.card');

        const productInfo ={
            id: Card.dataset.id,
            imgSrc: Card.querySelector('.product-img').getAttribute('src'),
            title: Card.querySelector('.item-title').innerText,
            itemsInBox: Card.querySelector('[data-items-in-box]').innerText,
            weight: Card.querySelector('.price__weight').innerText,
            prise: Card.querySelector('.price__currency').innerText,
            counter: Card.querySelector('[data-counter]').innerText,
        }

       const itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`)

       //Проверка наличия элементов
       if(itemInCard){
        const counterEl = itemInCard.querySelector('[data-counter]')
        counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter)
       }
       else{
            const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight"> ${productInfo.itemsInBox}/ ${productInfo.weight}.</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.prise}</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>`

        cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        };
        
        //Сброс счетчика
        Card.querySelector('[data-counter]').innerText = '1'


        //Отображение статуса корзины
        toggleCardStatus();

        //Пересчет доваров в корзине
        calcCartprise();


    }

        
   
})