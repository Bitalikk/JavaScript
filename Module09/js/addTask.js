'use strict';
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
//   ];
  
// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector('body');
// let timerId = null;
// let isActive = false;
// body.setAttribute('background-color', '');
// start.addEventListener('click', () => {
//   if(!isActive) {
//     timerId = setInterval(() =>
//     body.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length - 0 + 1))], 1000);
//     isActive = true;
//     console.log('start');
//   }
// });
// stop.addEventListener('click', () => {
//   clearInterval(timerId);
//   isActive = false;
//   console.log('finish');
// });

// =================Task 02============================

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   const date = new Date(time);
//   let minute = date.getMinutes();
//   let second = date.getSeconds();
//   const millisecond = date.getMilliseconds();
//   if(minute < 10) {
//     minute = "0" + minute;
//   }
//   if(second < 10) {
//     second = "0" + second;
//   }
//   return `${minute}:${second}:${parseInt(millisecond / 100)}`;
// }

// console.log(
//   getFormattedTime(1523621052858)
// ); // 04:12.8

// console.log(
//   getFormattedTime(1523621161159)
// ); // 06:01.1

// console.log(
//   getFormattedTime(1523621244239)
// ); // 07:24.2


//==========================Task 03============================


/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/
// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");
// let isActive = false;

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };
// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);

// function startTimer() {
//   if(!isActive) {
//     timer.startTime = Date.now();
//     isActive = true;
//     timer.id = setInterval(() => {
//       const currentTime = Date.now();
//       timer.deltaTime = currentTime - timer.startTime;
//       updateClockface(clockface, timer.deltaTime);
//     }, 4);
//   }
// }

// function stopTimer() {
//   clearInterval(timer.id);
//   timer.id = null;
//   timer.startTime = null;
//   clockface.textContent = '00:00.0';
//   isActive = false;
// }
// /*
// * Вспомогательные функции
// */

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function updateClockface(elem, time) {
//   function getFormattedTime(time) {
//     const date = new Date(time);
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     const millisecond = date.getMilliseconds();
//     if(minute < 10) {
//       minute = "0" + minute;
//     }
//     if(second < 10) {
//       second = "0" + second;
//     }
//     return `${minute}:${second}.${parseInt(millisecond / 100)}`;
//   }
//   elem.textContent = getFormattedTime(time);
// }

// /*
// * Подсветка активной кнопки
// */
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }

// ES6
// class Timer{
//   constructor() {
//     this.startTime = null;
//     this.deltaTime = null,
//     this.id = null,
//     this.clockface = document.querySelector('.js-clockface');
//     this.startBtn = document.querySelector('.js-timer-start');
//     this.stopBtn = document.querySelector(".js-timer-stop");
//     this.isActive = false;
//     this.startTimer = this.startTimer.bind(this);
//     this.stopTimer = this.stopTimer.bind(this);
//   }
//   updateClockface(elem, time) {
//     function getFormattedTime(time) {
//       const date = new Date(time);
//       let minute = date.getMinutes();
//       let second = date.getSeconds();
//       const millisecond = date.getMilliseconds();
//       if(minute < 10) {
//         minute = "0" + minute;
//       }
//       if(second < 10) {
//         second = "0" + second;
//       }
//       return `${minute}:${second}.${parseInt(millisecond / 100)}`;
//     }
//     elem.textContent = getFormattedTime(time);
//   }
//   startTimer() {
//     if(!this.isActive) {
//       this.startTime = Date.now();
//       this.isActive = true;
//       this.id = setInterval(() => {
//         const currentTime = Date.now();
//         this.deltaTime = currentTime - this.startTime;
//         this.updateClockface(this.clockface, this.deltaTime);
//       }, 100);
//     }
//   }
//   stopTimer() {
//     clearInterval(this.id);
//     this.id = null;
//     this.startTime = null;
//     this.clockface.textContent = '00:00.0';
//     this.isActive = false;
//   }
// }
// const timer = new Timer();

// timer.startBtn.addEventListener('click', timer.startTimer);
// timer.stopBtn.addEventListener('click', timer.stopTimer);




//==================================================================

// Часть 1
// ________________
// *События через атрибуты*
// 1. При нажатии на кнопку "Нажми на меня!" - через алерт вывести сообщение "Привет!"

// const buttonPush = document.querySelector('.js-btn-push');
// buttonPush.addEventListener('click', () => alert('Привет!'));

// 2. При наведении на кнопку "Наведи на меня!" - через алерт вывести сообщение "Привет!"

// const buttonActive = document.querySelector('.js-btn-active');
// buttonActive.addEventListener('mouseover', () => alert('Привет!'));

// 3. При двойном нажатии на кнопку "Двойной счелчок по мне!" - через алерт вывести сообщение "Привет!"

// const buttonDouble = document.querySelector('.js-btn-double');
// buttonDouble.addEventListener('dblclick', () => alert('Привет!'));

// 4. Есть текстовое поле в котором написано "Наведи на меня мышь - а потом убери!". Когда мышка выходит за пределы текстового поля - через алерт вывести сообщение "Привет!"

// const text = document.querySelector('.text');
// text.addEventListener('mouseout', () => alert('Привет!'));

// *Метод getElementById и работа с атрибутами*
// 5. Есть инпут и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке

// const input = document.querySelector('#push');
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', () => alert(input.value));

// 6. Есть фотография и кнопка "Нажми на меня". По нажатию на кнопку должна появляться другая картинка.
// const image = document.querySelector('.cartoon');
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', () => image.src = 'https://i.pinimg.com/originals/0f/44/05/0f44050711ef8b1e2ffb8b3b2dd41261.jpg');



//============================================================


// *Работа с this*
// 7. При нажатии на поле инпут "Нажми на меня!" - текст в инпуте меняеться на "Ой, я поменял текст!"

// const input = document.querySelector('#text');
// const button = document.querySelector('.js-btn');
// button.addEventListener('click', () => input.value = 'Ой, я поменял текст!');

// 8. При нажатии на поле инпут "Нажми на меня! - через алерт вывести сообщение "Привет!"

// const input = document.querySelector('#text');
// const button = document.querySelector('.js-btn');
// input.addEventListener('focus', () => alert('Привет!'));
// 9. есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "Ку-ку".

// const button = document.querySelector('#js-btn');
// button.addEventListener('click', () => button.value = 'Ку-ку');

// 10. есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "О, больше на меня не нажать", и кнопка должна стать не активна.
// const button = document.querySelector('#js-btn');
// function fix () {
//   button.value = 'О, больше на меня не нажать';
//   button.removeEventListener('click', fix);
// }
// button.addEventListener('click', fix);

// 11. Есть картинка. при наведении картина меняеться на другую, когда курсор мышки покидает пределы блока с картинкой, начинает отображаться изначальная картинка.

// const image = document.querySelector('.cartoon');
// image.addEventListener('mouseover', () => image.src = 'https://i.pinimg.com/originals/0f/44/05/0f44050711ef8b1e2ffb8b3b2dd41261.jpg');
// image.addEventListener('mouseout', () => image.src = 'https://i.pinimg.com/originals/41/ea/23/41ea235089f74581b64c560a6c2af7eb.jpg');


//=====================================================================

// *Работа с CSS*
// 12. Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке

// const input = document.querySelector('#text');
// const button = document.querySelector('.js-btn');
// button.addEventListener('click', () => alert(input.value));

// 13. Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!" и кнопка "Нажми потом на меня!". При нажатии на кнопку  "Нажми на меня!" - блок-инпут должен исчезать. Потом при нажатии на кнопку "Нажми потом на меня!" блок-инпут должен снова появляться.

// const input = document.querySelector('#text');
// const hidden = document.querySelector('.js-show-btn');
// const show = document.querySelector('.js-hidden-btn');
// hidden.addEventListener('click', () => input.classList.add('hidden'));
// show.addEventListener('click', () => input.classList.remove('hidden'));

// *Задачи*
// 14. *Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!".  При нажатии на кнопку "Нажми на меня!" - в блоке-инпут  должен меняться текст и цвет текста "Ой, я поменял свой текст и css!"

// const input = document.querySelector('#text');
// const button = document.querySelector('.js-btn');
// button.addEventListener('click', () => {input.value = 'Ой, я поменял свой текст и css!'; input.style.color = 'red';});

// 15. *Есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "О теперь на меня больше не нажать!", она становиться не активна, и появляется вторая кнопка с надписью "Нажми, что бы отблокировать элемент". При нажатии на  кнопку с надписью "Нажми, что бы отблокировать элемент" - эта кнопка исчезает, и на изначальной кнопке восстанавливаться надпись "Нажми на меня!" и она становиться активной.

// const block = document.querySelector('.block');
// const onblock = document.querySelector('.onblock');
// function setBlock() {
//   block.value = 'О теперь на меня больше не нажать!';
//   block.removeEventListener('click', setBlock);
//   onblock.classList.remove('hidden');
// }
// block.addEventListener('click', setBlock);
// onblock.addEventListener('click', () => {
//   onblock.classList.add('hidden');
//   block.value = 'Нажми на меня!';
//   block.addEventListener('click', setBlock);
// });


// 16. *Создать кнопку с текстом "0". Кнопка считает кол-во нажатий по ней.

// let count = 0;
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', () => {
//   btn.textContent = count;
//   count += 1;
// });

// 17. *Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!" и кнопка "Нажми потом на меня!". При нажатии на кнопку "Нажми на меня!" - в блоке-инпут должено появляться сообщение о том, какие классы были использованы, при создании этого инпута - "Мои css классы: eee www ddd".

// const input = document.querySelector('.eee');
// const button = document.querySelector('.js-btn');
// button.addEventListener('click', () => input.value = `Мои css классы: ${input.classList}`);


// 18.  *Есть инпут без текста и 4 кнопки.
// 1-я кнопка "Я добавляю+", при нажатии на которую в поле инпут появиться знак "+".
// 2-я кнопка "Я добавляю-", при нажатии на которую в поле инпут появиться знак "-".
// 3-я кнопка "Я добавляю/", при нажатии на которую в поле инпут появиться знак "/".
// 4-я кнопка "Я добавляю*", при нажатии на которую в поле инпут появиться знак "*".
// 5-я кнопка "1", при нажатии на которую в поле инпут появиться знак "1"
// ......
// 14-я кнопка "9", при нажатии на которую в поле инпут появиться знак "9"





// Часть 2
// ________________
// 1. Есть HTML-разметка: https://codepen.io/Foxy1337/pen/zpQNQm
// Написать скрипт: при нажатии на кнопку, добавлять в div с идентификатором «container» фрагмент разметки:
// <div class="item">
// <h3>Заголовок</h3>
// <p>текст текст текст</p>
// </div>

// const link = document.querySelector('a');
// const container = document.querySelector('#container');
// const htmlText = `<div class="item"> <h3>Заголовок</h3> <p>текст текст текст</p> </div>`;
// link.addEventListener('click', () => {
//   event.preventDefault();
//   container.innerHTML += htmlText;
// });


//=============================================================


// 2. При нажатии на ссылку, равномерно перемещать HTML-элемент с классом .play вправо - https://codepen.io/Foxy1337/pen/NXVjLQ

// const link = document.querySelector('a');
// const play = document.querySelector('.play');
// link.addEventListener('click', toRight);

// function toRight() {
//   let left = 0;
//   setInterval(() => {
//     play.style.left = `${left += 2}px`; 
//     console.log(left);
//   }, 1000);
// }


//=================================================================


// 3. * Создать скрипт, который при нажатии на гиперссылку «Добавить» будет показывать в нижней части окна браузера уведомление, подобно тем, которые появляются в социальных сетях при получении сообщения. - https://codepen.io/Foxy1337/pen/OzYgpJ

// const text = document.querySelector('#text');
// const link = document.querySelector('.link');
// link.addEventListener('click', showMessege);

// function showMessege() {
//   const box = document.createElement('div');
//   box.classList.add('box');
//   box.style.width = '200px';
//   box.style.height = '100px';
//   box.style.position = 'fixed';
//   box.style.bottom = '10px';
//   box.style.right = '20px';
//   box.style.border = '1px solid blue';
//   box.textContent = text.value;
//   document.body.appendChild(box);
//   const time = Date.now();
//   const int = setInterval(() => {
//     const currentTime = Date.now();
//     let timer = parseInt((currentTime - time) / 1000);
//     if(timer === 5) {
//       box.remove();
//       clearInterval(int);
//     }
//     console.log(timer);
//   }, 100);
// }


// 4. При нажатии на гиперссылку менять фоновый цвет элемента с классом .play на прозрачный. Примечание: используйте CSS-свойство opacity. -https://codepen.io/Foxy1337/pen/MrdoVE

// const circle = document.querySelector('.play');
// const link = document.querySelector('a');
// circle.style.opacity = '1';
// link.addEventListener('click', opac);

// function opac() {
//   if(Number(circle.style.opacity) === 1) {
//     const hid = setInterval(() => {
//       circle.style.opacity = circle.style.opacity -= 0.1;
//       if(Number(circle.style.opacity) === 0) {
//         clearInterval(hid);
//       }
//       if(Number(circle.style.opacity) === 0) {
//         let num = 0;
//         const show = setInterval(() => {
//           circle.style.opacity = `${num += 0.1}`;
//           if(Number(circle.style.opacity) === 1) {
//             clearInterval(show);
//           }
//         }, 100);
//       }
//     }, 100);
//   }
// }

// 5. * Познакомьтесь с компонентом Bootstrap — индикатором загрузки (Индикатор загрузки в Bootstrap, видео об индикаторе загрузки в Bootstrap). Создайте скрипт, который будет анимировать изменение показателя индикатора загрузки
// 6. * Создать скрипт, который при нажатии на гиперссылку анимировал движение элемента с классом .play по параболе в ветками вниз.


// const text = document.querySelector('#text');
// const button = document.querySelector('#jsstyle');

// button.addEventListener('click', chengeStyle);


// function chengeStyle() {
//   text.style.fontFamily = 'sans-serif';
//   text.style.fontSize = '30px';
//   text.style.color = 'blue';
// }

// const firstName = document.querySelector('[name="fname"]');
// const lastName = document.querySelector('[name="lname"]');

// function getFormvalue() {
//   console.log(`${firstName.value} ${lastName.value}`);
// }



// function changeContent(row, cell, cont) {
// const table = document.querySelector('#myTable > tbody');
// const first = table.children[row - 1];
// const second = first.children[cell - 1];
// second.textContent = cont;
// }



//=======================Task 04==================

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

// const DELAY = 1000;
// const quantity = 100;

// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!


//   function processOrder(value) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(value <= quantity) {
//         resolve('Ваш заказ готов!');
//       } 
//       if(value > quantity) {
//         resolve('К сожалению на складе недостаточно товаров!');
//       }
//       if(!Number.isNaN(value)) {
//         reject('Некорректный ввод!');
//       }
//     }, DELAY);
      
//   });
// }