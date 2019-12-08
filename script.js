'use strict';

// задание 1

// let obj = {
//     единицы: null,
//     десятки: null,
//     сотни: null,
// };
//
// function toObject(number) {
//     if (number > 999) {
//         console.log('Выбранное число больше 999');
//         return obj;
//     }
//
//     if (number < 0) {
//         console.log('Выбранное число меньше 0');
//         return obj;
//     }
//
//     if ((number / 100) >= 1) {
//         obj.сотни = parseInt(number / 100);
//     } else {
//         obj.сотни = 0;
//     }
//
//     if (number >= 100) {
//         obj.десятки = parseInt((number - (obj.сотни * 100)) / 10);
//     } else {
//         obj.десятки = parseInt(number / 10);
//     }
//
//     if (number >= 10) {
//         obj.единицы = parseInt(number - 10 * obj.десятки - 100 * obj.сотни);
//     } else {
//         obj.единицы = number;
//     }
//
//     return obj;
// }
//
// toObject(512);
// console.log(obj);

// задание 2

// let basket = [
//     {product: 'hat', price: 50, count: 2},
//     {product: 'shirt', price: 100, count: 3},
//     {product: 'shoes', price: 150, count: 1},
//     {product: 'pants', price: 130, count: 2},
// ];
//
// function countBasketPrice() {
//     let totalPrice = 0;
//     for (let i = 0; i < basket.length; i++) {
//         totalPrice += basket[i].price * basket[i].count;
//     }
//     return(totalPrice);
// }
//
// countBasketPrice();

