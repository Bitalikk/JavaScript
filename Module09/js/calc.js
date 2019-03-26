'use strict';
const input = document.querySelector('#text');
const simbol = document.querySelector('.simbol');
const numbers = document.querySelector('.numbers');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const share = document.querySelector('.share');
const multiply = document.querySelector('.multiply');
const num = document.querySelectorAll('.num');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');
const sec4 = document.querySelector('.sec4');
const equel = document.querySelector('.equel');
const res = document.querySelector('.reset');

let firstNum = null;
let secondNum = null;
let summ = null;



numbers.addEventListener('click', getNum);
simbol.addEventListener('click', getSumm);
res.addEventListener('click', () => {
  firstNum = null;
  secondNum = null;
  summ = null;
  input.value = 0;
  numbers.addEventListener('click', getNum);
});


function getSumm(event) {
  const target = event.target;
  if(target === plus) {
    input.value += ' +';
    numbers.addEventListener('click', (event) => {
      event.stopPropagation();
      if(event.target === numbers || event.target === sec1 || event.target === sec2 || event.target === sec3 || event.target === sec4 || event.target === res) return;
      secondNum = Number(event.target.textContent);
      input.value += ` ${secondNum}`;
      equel.addEventListener('click', () => {
        summ = firstNum + secondNum;
        input.value = summ;
      });
    });
  }

}
function getNum(event) {
  if(event.target === numbers || event.target === sec1 || event.target === sec2 || event.target === sec3 || event.target === sec4 || event.target === res) return;
  firstNum = Number(event.target.textContent);
  input.value = firstNum;
  numbers.removeEventListener('click', getNum);
}