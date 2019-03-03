'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введите число');
    if(userInput !== null) {
        if(Number.isNaN(Number(userInput))) {
            alert('Было введено не число');
        } else {
            numbers.push(Number(userInput));
        }
    }
} while (userInput !== null);

if(numbers.length > 0) {
    for(let key of numbers) {
        total += key;
    }
    alert(`Общая сумма равна ${total}`);
}

