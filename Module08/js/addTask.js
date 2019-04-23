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
// const result = document.querySelector('.result');
// const add = document.querySelector('button[data-action="add"]');
// const num = Array.from(document.querySelectorAll('input'));
// const firstNum = num[0];
// const secondNum = num[1];
// const added = () => result.textContent = `${Number(firstNum.value) + Number(secondNum.value)}`;
// const err = () => alert('It\'s not a number');

// if(!isNaN(firstNum.value) && !isNaN(secondNum.value)) {
//     add.addEventListener('click', added);
// } else {
//     add.addEventListener('click', err); 
// }


//===========================Task 03=======================

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//   }
//   get increment() {
//     this.onChange(this.value += 1);
//   }
//   get decrement() {
//     this.onChange(this.value -= 1);
//   }
// }
// const value = document.querySelector('.value');
// const num = new Counter((result) => value.innerHTML = result);
// const chengeNum = ({target}) => target.dataset.action === 'add'?num.increment:num.decrement;
// document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', chengeNum));


//==================================Task 04=========================

// /*
//   Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
//   после чего нажимает кнопку "Submit" и происходит отправка формы.
  
//   При отправке формы:
//     - не должна перезагружаться страница
//     - необходимо получить выбранную опцию и вывести в параграф с классом .result
// */
// const button = document.querySelector('.btn');
// const result = document.querySelector('.result');
// button.addEventListener('click', getResult);
// const lable = document.querySelectorAll('input');
// function getResult(event) {
//   event.preventDefault();
//   lable.forEach(el => el.checked === true ? result.textContent = el.value : null);  
// }


//=========================Task 05=============================

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const images = document.querySelector('.images');
// images.addEventListener('click', getImagesSrc);

// function getImagesSrc(event) {
//   console.log(event.target.src);
// }


// =======================Task 06==========================

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector('.list');
// const elem = document.querySelector('[data-action="delete"]');
// list.addEventListener('click', delItem);

// function delItem({target}) {
//   const name = target.nodeName;
//   if(name !== 'BUTTON') return;
//   target.parentNode.remove();
// }

//=======================Task 07==============================

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const list = document.querySelector('.input-list');
const inputs = document.querySelectorAll('.input');
list.addEventListener('focusout', getValidation);

function getValidation() {
  const input = event.target;
  const len = input.getAttribute('data-length');
  if(input.value.length > 0) {
    if(input.value.length === Number(len)) {
      if(input.classList.contains('invalid')) {
        input.classList.remove('invalid');
      }
      input.classList.add('valid');
    } else {
      if(input.classList.contains('valid')) {
        input.classList.remove('valid');
      }
      input.classList.add('invalid');
    }
  }

  if(input.value.length === 0) {
    const hasValid = input.classList.contains('valid');
    const hasInvalid = input.classList.contains('invalid');
    hasValid ? input.classList.remove('valid') : null;
    hasInvalid ? input.classList.remove('invalid') : null;
  }
}

//==============Task 08======================================

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const message = document.querySelector('.message');
// const input = document.querySelector('.input');
// const show = document.querySelector('.input-value');
// input.addEventListener('focus', showFocus);
// input.addEventListener('blur', hiddenFocus);
// input.addEventListener('input', showText);

// function showText() {
//   show.textContent = input.value;
// }
// function showFocus() {
//   message.textContent = 'Input is in focus!';
// }
// function hiddenFocus() {
//   message.textContent = '';
// }

// =======================Task 09=================================

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const showModal = document.querySelector('.btn');
// const modal = document.querySelector('.js-modal-backdrop');
// const closeBtn = document.querySelector('.close-btn');
// const content = document.querySelector('.modal-content');
// showModal.addEventListener('click', showWindow);
// closeBtn.addEventListener('click', closeWindow);
// modal.addEventListener('click', closeWindow);

// function showWindow() {
//   modal.classList.remove('modal-hidden');
// }
// function closeWindow(event) {
//   const target = event.target;
//   if(target === closeBtn || target === modal) {
//     modal.classList.add('modal-hidden');
//   }
// }

//======================Task 10=======================================

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// const menu = document.querySelector('.js-menu');
// const links = menu.querySelectorAll('.menu-link');
// menu.addEventListener('click', getActive);

// function getActive(event) {
//   event.preventDefault();
//   if(event.target.nodeName !== 'A') return;
//   links.forEach(link => {
//     if(link !== event.target) {
//       link.classList.remove('active');
//     } else {
//     event.target.classList.add('active');
//   }
//   });
// }