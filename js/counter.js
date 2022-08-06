window.addEventListener('click', function(event){
    
    let counter;
    let counterWrapper;

    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    };

    
    if(event.target.dataset.action === 'plus'){
        counter.innerHTML = ++ counter.innerHTML 
    };

    if(event.target.dataset.action === 'minus'){

        if(parseInt(counter.innerHTML) > 1){
            counter.innerHTML = -- counter.innerHTML 
        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) == 1){
            event.target.closest('.cart-item').remove(); 

            toggleCardStatus();

            calcCartprise();
        }
    };

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper') ){
        calcCartprise();
    }
});



