'use strict';

// задание 1

// var a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // c = 1 + a = 2
// d = b++; console.log(d);           // d = b = 1  , b = b + 1 = 2
// c = (2+ ++a);console.log(c);       // a = a + 1 = 3, c =  2 + a = 5
// d = (2+ b++);console.log(d);       // d = 2 + b = 4 , b = b + 1 = 3
// console.log(a);                    // 3
// console.log(b);                    // 3

// задание 2

// var a = 2;
// var x = 1 + (a *= 2);                 // x = 1 + (2 * 2) = 5

// задание 3

// let a = parseInt(prompt('Введите первое число', 0));
// let b = parseInt(prompt('Введите второе число', 0));
//
// if  (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else if (a < 0 && b >=0 || a >= 0 && b < 0) {
//     alert(a + b);
// }

// задание 4

// let a = parseInt(prompt('Введите число от 0 до 15', 0));
//
// switch (a) {
//     case 0:
//         console.log(a++);
//     case 1:
//         console.log(a++);
//     case 2:
//         console.log(a++);
//     case 3:
//         console.log(a++);
//     case 4:
//         console.log(a++);
//     case 5:
//         console.log(a++);
//     case 6:
//         console.log(a++);
//     case 7:
//         console.log(a++);
//     case 8:
//         console.log(a++);
//     case 9:
//         console.log(a++);
//     case 10:
//         console.log(a++);
//     case 11:
//         console.log(a++);
//     case 12:
//         console.log(a++);
//     case 13:
//         console.log(a++);
//     case 14:
//         console.log(a++);
//     case 15:
//         console.log(a);
//         break;
// }

// задание 5 + 6

// function sum(arg1, arg2) {
//     return arg1 + arg2;
// }
//
// function sub(arg1, arg2) {
//     return arg1 - arg2;
// }
//
// function mult(arg1, arg2) {
//     return arg1 * arg2;
// }
//
// function div(arg1, arg2) {
//     return arg1 / arg2;
// }
//
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'sum':
//             return sum(arg1, arg2);
//         case 'subtraction':
//             return sub(arg1, arg2);
//         case 'multiply':
//             return mult(arg1, arg2);
//         case 'divide':
//             return div(arg1, arg2);
//         default:
//             break;
//     }
// }
//
// let x = mathOperation(5, 6, 'multiply');
// console.log(x);

// задание 7

// null > 0 && null < 0; // false null = +0
// null == 0; // false возвращается как значение по умолчанию
// null >= 0; // true; т.к. сначала алгоритм проверил null < 0 = false, то получеатся, что null >= 0 = true

// задание 8

// function power(val, pow) {
//     if (val === 0) {
//         return 0;
//     } else if (pow === 0) {
//         return 1;
//     } else if (pow < 0) {
//         return power(1/val, -pow);
//     } else {
//         return val *  power(val, pow-1);
//     }
// }
//
// console.log(power(25,-2)); // =0.0016
