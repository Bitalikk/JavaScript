'use strict';
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
const start = document.querySelector('.js-start');
const save = document.querySelector('.js-laps');
const result = [];
let startTime = null;
let deltaTime = null;
let id = null;
stopwatch.addEventListener('click', startTimer);



function startTimer() {
  const target = event.target;
  if(target.textContent === 'Start') {
    startTime = Date.now();
    target.textContent = 'Pause';
    id = setInterval(() => {
      deltaTime = Date.now() - startTime;
      time.textContent = getFormatedTime(deltaTime);
    }, 100);
  } else if(target.textContent === 'Pause') {
      target.textContent = 'Continue';
      clearInterval(id);
  } else if(target.textContent === 'Continue') {
      target.textContent = 'Pause';
      startTime = Date.now() - deltaTime;
      id = setInterval(() => {
        deltaTime = Date.now() - startTime;
        time.textContent = getFormatedTime(deltaTime);
      }, 100);
  } else if (target.textContent === 'Reset') {
    if(start.textContent !== 'Start') {
      clearInterval(id);
      start.textContent = 'Start';
      time.textContent = '00:00.0';
      startTime = null;
      deltaTime = null;
      id = null;
    }
  } else if(target.textContent === 'Lap') {
      const item = document.createElement('li');
      result.push(getFormatedTime(deltaTime));
      item.textContent = result[result.length - 1];
      save.appendChild(item);
  } else if(target.textContent === 'Clear list') {
      document.querySelectorAll('.js-laps > li').forEach(el => el.remove());
  } else return;
}

function getFormatedTime(time) {
  const date = new Date(time);
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if(minute < 10) minute = `0${minute}`;
  if(second < 10) second = `0${second}`;
  const millisecond = parseInt(date.getMilliseconds() / 100);
  return(`${minute}:${second}.${millisecond}`);
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
    this.result = [];

    this.stopwatch = document.createElement('div');
    this.time = document.createElement('p');
    this.start = document.createElement('button');
    this.lap = document.createElement('button');
    this.reset = document.createElement('button');
    this.clear = document.createElement('button');
    this.list = document.createElement('ul');
    this.createPage = this.createPage.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  createPage() {
    this.stopwatch.classList.add('stopwatch');
    this.time.classList.add('time');
    this.time.classList.add('js-time');
    this.time.textContent = '00:00.0';
    this.start.classList.add('btnTimer');
    this.start.classList.add('js-start');
    this.start.textContent = 'Start';
    this.lap.classList.add('btnTimer');
    this.lap.classList.add('js-take-lap');
    this.lap.textContent = 'Lap';
    this.reset.classList.add('btnTimer');
    this.reset.classList.add('js-reset');
    this.reset.textContent = 'Reset';
    this.clear.classList.add('btnTimer');
    this.clear.classList.add('js-clear-btn');
    this.clear.textContent = 'Clear list';
    this.stopwatch.append(this.time, this.start, this.lap, this.reset, this.clear);
    this.list.classList.add('laps');
    this.list.classList.add('js-laps');
    this.parent.append(this.stopwatch, this.list);
  }
  startTimer() {
    const target = event.target;
    if(target.textContent === 'Start') {
      this.startTime = Date.now();
      target.textContent = 'Pause';
      this.id = setInterval(() => {
        this.deltaTime = Date.now() - this.startTime;
        this.time.textContent = this.getFormatedTime(this.deltaTime);
      }, 100);
    } else if(target.textContent === 'Pause') {
        target.textContent = 'Continue';
        clearInterval(this.id);
    } else if(target.textContent === 'Continue') {
        target.textContent = 'Pause';
        this.startTime = Date.now() - this.deltaTime;
        this.id = setInterval(() => {
          this.deltaTime = Date.now() - this.startTime;
          this.time.textContent = this.getFormatedTime(this.deltaTime);
        }, 100);
    } else if (target.textContent === 'Reset') {
      if(this.start.textContent !== 'Start') {
        clearInterval(this.id);
        this.start.textContent = 'Start';
        this.time.textContent = '00:00.0';
        this.startTime = null;
        this.deltaTime = null;
        this.id = null;
      }
    } else if(target.textContent === 'Lap') {
        const item = document.createElement('li');
        this.result.push(this.getFormatedTime(this.deltaTime));
        item.textContent = this.result[this.result.length - 1];
        this.list.appendChild(item);
        console.log(this.result);
    } else if(target.textContent === 'Clear list') {
        this.parent.querySelectorAll('.js-laps > li').forEach(el => el.remove());
    } else return;
  }
  getFormatedTime(time) {
    const date = new Date(time);
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if(minute < 10) minute = `0${minute}`;
    if(second < 10) second = `0${second}`;
    const millisecond = parseInt(date.getMilliseconds() / 100);
    return(`${minute}:${second}.${millisecond}`);
  }
}


const firstBox = document.querySelector('.firstTimer');
const secondBox = document.querySelector('.secondTimer');


const firstTimer = new Stopwatch(firstBox);
firstTimer.createPage();
firstBox.addEventListener('click', firstTimer.startTimer);

const secondTimer = new Stopwatch(secondBox);
secondTimer.createPage();
secondBox.addEventListener('click', secondTimer.startTimer);