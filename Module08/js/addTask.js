'use strict';
//=================Task 01========================

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const button = document.querySelector('.button');
// let i = 1;
// const num = () => button.textContent = `${i++}`;
// button.addEventListener('click', num);


//======================Task 02=========================


/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
const result = document.querySelector('.result');
const add = document.querySelector('button[data-action="add"]');
const num = Array.from(document.querySelectorAll('input'));
const firstNum = num[0];
const secondNum = num[1];
const added = () => result.textContent = `${Number(firstNum.value) + Number(secondNum.value)}`;
const err = () => alert('It\'s not a number');

if(!isNaN(firstNum.value) && !isNaN(secondNum.value)) {
    add.addEventListener('click', added);
} else {
    add.addEventListener('click', err); 
}