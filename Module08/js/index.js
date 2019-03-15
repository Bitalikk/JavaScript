'use strict';
//Задача №1
//Алерт по нажатию на кнопку.
//При нажатии на кнопку "Нажми на меня"
//выводиться сообщение 'Привет!

// const hello = document.querySelector('button');
// const handlClick = () => alert('Привет!');
// hello.addEventListener('click', handlClick);


//Задача №2
//Изменение текста в инпуте.
//По нажатию на кнопку - изменяеться текст в импуте

// const input = document.querySelector('#input');
// const button = document.querySelector('button');
// const text = () => input.value = 'Wass up!!!';
// button.addEventListener('click', text);


//==========Task 03=====================

//Задача №3
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута

// const input = document.querySelector('#input');
// const button = document.querySelector('button');
// const text = () => input.value = 'Wass up!!!';
// const alertOn = () => alert(`${input.value}`);
// button.addEventListener('click', text);
// button.addEventListener('click', alertOn);


//==============Task 04====================

//Задача №4
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат

// const input = document.querySelector('#input');
// const button = document.querySelector('button');
// const toPow = () => alert(Number(`${Math.pow(input.value, 2)}`));
// button.addEventListener('click', toPow);



//=====================Task 05========================

//Задача №5
// Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:

// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2');
// const button = document.querySelector('button');
// let buf;
// const x = () => {buf = input1.value; input1.value = input2.value;};
// const y = () => input2.value = buf;
// button.addEventListener('click', x);
// button.addEventListener('click', y);


//=====================Task 06=========================

// Задача. При нажатии на кнопку - поменяется ее текст:


// const input = document.querySelector('input');
// const change = () => input.value = 'Wass up!!!';
// input.addEventListener('click', change);


//==========================Task 07=========================
//Задача №7
// Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:

const button = Array.from(document.querySelectorAll('button'));
const block = button[0];
const unBlock =  button[button.length - 1];
const input = document.querySelector('#input');
const blocked = () => input.disabled = 'disabled';
const unBlocked = () => input.removeAttribute('disabled');
block.addEventListener('click', blocked);
unBlock.addEventListener('click', unBlocked);