'use strict';

// задание 2

let basket = [
    {product: 'hat', price: 50, count: 2},
    {product: 'shirt', price: 100, count: 3},
    {product: 'shoes', price: 150, count: 1},
    {product: 'pants', price: 130, count: 2},
];

function countBasketPrice() {
    let totalPrice = 0;
    let cart = document.querySelector('.cart');
    let text = document.createElement('p');

    cart.appendChild(text);

    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i].price * basket[i].count;
    }

    if (basket.length === 0) {
        text.textContent = 'Корзина пуста';
    } else {
        text.textContent = 'В корзине: ' + basket.length + ' товара(ов) на сумму ' + totalPrice + ' рублей';
    }

    return(totalPrice);
}

countBasketPrice();