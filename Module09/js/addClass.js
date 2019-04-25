'use strict';
// ===================== Task 01 =============================================
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
  
//   let start = null;

//   function changeColors(evt) {
//     if(evt.target.dataset.action === 'start') {
//       start = setInterval(() => {
//         document.body.style.backgroundColor = colors[Math.floor((Math.random() * colors.length) + 1)];
//         evt.target.disabled = true;
//       }, 1000);
//     }
//      if(evt.target.dataset.action === 'stop') {
//        clearInterval(start);
//        evt.target.previousElementSibling.disabled = false;
//      }
//   }

//   document.body.addEventListener('click', changeColors);


// ============================= Task 02 ======================================


/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   const res = new Date(time);
//   const min = res.getMinutes() < 10 ? '0' + res.getMinutes() : res.getMinutes();
//   const sec = res.getSeconds() < 10 ? '0' + res.getSeconds(): res.getSeconds();
//   const mil = parseInt(res.getMilliseconds() / 100);
//   return `${min}:${sec}:${mil}`;
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




//============================= Task 03 ================================
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

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);

// function startTimer() {
//   timer.startTime = Date.now();
//   timer.id = setInterval(() => {
//     timer.deltaTime = Date.now() - timer.startTime;
//     updateClockface(clockface, timer.deltaTime);
//   }, 100);
// }

// function stopTimer() {
//   clearInterval(timer.id);
//   clockface.textContent = `00:00:00`;
//   timer.startTime = null;
//   timer.deltaTime = null;
//   timer.id = null;
//   console.log(timer);
// }
// /*
// * Вспомогательные функции
// */

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function updateClockface(elem, time) {
//   const res = new Date(time);
//   const min = res.getMinutes() < 10 ? '0' + res.getMinutes() : res.getMinutes();
//   const sec = res.getSeconds() < 10 ? '0' + res.getSeconds(): res.getSeconds();
//   const mil = parseInt(res.getMilliseconds() / 100);
//   elem.textContent = `${min}:${sec}:${mil}`;
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


//=============================== Task 04 ==================================================

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


// function processOrder(value) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(value <= quantity) {
//         resolve('Ваш заказ готов!');
//       } else if(value > quantity) {
//         resolve('К сожалению на складе не достаточно товаров!');
//       } else {
//         reject('Некорректный ввод!');
//       }
//     }, 500);
//   });
//   return promise;
// }
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


// ========================== Homework =============================


/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.js-time');
const laps = document.querySelector('.js-laps');
const timer = {
  startTime: null,
  deltaTime: null,
  id: null,
};
const arrLaps = [];
stopwatch.addEventListener('click', startTimer);



function startTimer(evt) {
  const target = evt.target;
  if(target.textContent === 'Start') {
    timer.startTime = Date.now();
    target.textContent = 'Pause';
    document.querySelector('.js-reset').disabled = false;
    timer.id = setInterval(() => {
      timer.deltaTime = Date.now() - timer.startTime;
      getFormattedTime(time, timer.deltaTime);
    }, 100);
  } else if(target.textContent === 'Pause') {
    target.textContent = 'Continue';
    clearInterval(timer.id);
  } else if(target.textContent === 'Continue') {
    timer.startTime = Date.now() - timer.deltaTime;
    target.textContent = 'Pause';
    timer.id = setInterval(() => {
      timer.deltaTime = Date.now() - timer.startTime;
      getFormattedTime(time, timer.deltaTime);
    }, 100);
  } else if(target.textContent === 'Reset') {
    clearInterval(timer.id);
    timer.startTime = null;
    timer.deltaTime = null;
    timer.id = null;
    document.querySelector('.js-start').textContent = 'Start';
    target.disabled = true;
    time.textContent = '00:00:00';
    Array.from(laps.children).forEach(el => el.remove());
  } else if(target.textContent === 'Lap') {
      const lap = time.textContent;
      arrLaps.push(lap);
      laps.insertAdjacentHTML('afterbegin', `<li>${lap}</li>`);
  } else {
    return;
  }
}
function getFormattedTime(elem, time) {
  const newTime = new Date(time);
  const minutes = newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes();
  const seconds = newTime.getSeconds() < 10 ? '0' + newTime.getSeconds() : newTime.getSeconds();
  const milliseconds = parseInt(newTime.getMilliseconds() / 100);
  elem.textContent = `${minutes}:${seconds}:${milliseconds}`;
}


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

class Stopwatch {
  constructor(parent) {
    this.parent = parent;
    this.startTime = null;
    this.deltaTime = null;
    this.id = null;
    this.bod = document.createElement('div');
    this.time = document.createElement('p');
    this.startBtn = document.createElement('button');
    this.lapBtn = document.createElement('button');
    this.resetBtn = document.createElement('button');
    this.laps = document.createElement('ul');
    this.arrLaps = [];
    this.createPage = this.createPage.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
    window.addEventListener('DOMContentLoaded', this.createPage);
  }

  createPage() {
    this.bod.classList.add('stopwatch');
    this.time.classList.add('time', 'js-time');
    this.time.textContent = '00:00:0';
    this.startBtn.classList.add('btn', 'js-start');
    this.startBtn.textContent = 'Start';
    this.lapBtn.classList.add('btn', 'js-take-lap');
    this.lapBtn.textContent = 'Lap';
    this.resetBtn.classList.add('btn', 'js-reset');
    this.resetBtn.textContent = 'Reset';
    this.resetBtn.disabled = true;
    this.laps.classList.add('laps', 'js-laps');
    this.bod.append(this.time, this.startBtn, this.lapBtn, this.resetBtn);
    this.parent.append(this.bod, this.laps);
    this.startTimer = this.startTimer.bind(this);
    this.bod.addEventListener('click', this.startTimer);
  }

  getFormattedTime(t) {
    const newTime = new Date(t);
    const minutes = newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes();
    const seconds = newTime.getSeconds() < 10 ? '0' + newTime.getSeconds() : newTime.getSeconds();
    const milliseconds = parseInt(newTime.getMilliseconds() / 100);
    this.time.textContent = `${minutes}:${seconds}:${milliseconds}`;
  }
  
  startTimer(evt) {
    const target = evt.target;
    if(target.textContent === 'Start') {
      this.startTime = Date.now();
      target.textContent = 'Pause';
      this.resetBtn.disabled = false;
      this.id = setInterval(() => {
        this.deltaTime = Date.now() - this.startTime;
        this.getFormattedTime(this.deltaTime);
      }, 100);
    } else if(target.textContent === 'Pause') {
      target.textContent = 'Continue';
      clearInterval(this.id);
    } else if(target.textContent === 'Continue') {
      this.startTime = Date.now() - this.deltaTime;
      target.textContent = 'Pause';
      this.id = setInterval(() => {
        this.deltaTime = Date.now() - this.startTime;
        this.getFormattedTime(this.deltaTime);
      }, 100);
    } else if(target.textContent === 'Reset') {
      clearInterval(this.id);
      this.startTime = null;
      this.deltaTime = null;
      this.id = null;
      this.startBtn.textContent = 'Start';
      target.disabled = true;
      this.time.textContent = '00:00:00';
      Array.from(this.laps.children).forEach(el => el.remove());
    } else if(target.textContent === 'Lap') {
        const lap = this.time.textContent;
        this.arrLaps.push(lap);
        this.laps.insertAdjacentHTML('afterbegin', `<li>${lap}</li>`);
    } else {
      return;
    }
  }
}

const box = document.querySelector('.stopwatch1');
const watch = new Stopwatch(box);

const sBox = document.querySelector('.stopwatch2');
const sWatch = new Stopwatch(sBox);

