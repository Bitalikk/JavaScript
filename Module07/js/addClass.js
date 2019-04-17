'use strict';
// let textInput = document.querySelector('.text');
// let input = document.querySelector('.input');
// let btn = document.querySelector('.btn');

// console.log(btn);

// btn.onclick = function() {
//     textInput.textContent = input.value;
//     textInput.style.color = 'red';
//     textInput.style.transform = 'rotate(1000000deg)';
//     textInput.style.transition = '5s ease'; 
// };

const forward = document.querySelector('.forward');
const back = document.querySelector('.back');
const images = document.querySelectorAll('.images>img');
let i = 0;

forward.onclick = function() {
    images[i].classList.remove('showed');
    i++;
    if(i === images.length) i = 0;
    images[i].classList.add('showed');
};
back.onclick = function() {
    images[i].classList.remove('showed');
    i--;
    if(i < 0) i = images.length - 1;
    images[i].classList.add('showed');
};