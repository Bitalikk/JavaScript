'use strict'


let num = [];
let ask
let sum = 0;


do {
    ask = Number(prompt('Введите число'));
    if(ask !== 0) {
        num.push(ask);
    }
    console.log(ask);
    console.log(num);
} while(ask);

if(num.lenght !== 0) {
    for(const result of num) {
        sum += result;
    }
}
console.log('Общая сумма чисел равна:', + sum);