'use strict';
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const button = document.querySelector('.button');
// const clickCount = () => {
//     let num  = Number(button.textContent);
//     button.textContent = num += 1;
// };
// button.addEventListener('click', clickCount);


// =============== Task 02 =======================================

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const numbers = document.querySelectorAll('.expression > input');
// const result = document.querySelector('.result');
// const add = document.querySelector('button');
// const plusNum = function() {
//     result.textContent = Array.from(numbers).reduce((acc, el) => acc + Number(el.value), 0);
// };
// add.addEventListener('click', plusNum);


// ======================== Task 03 ========================================


/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter{
//     constructor(onChange) {
//         this._value = 0;
//         this.onChange = onChange;
//     }
//     get increment() {
//         this.onChange(this._value += 1);
//     }
//     get decrement() {
//         this.onChange(this._value -= 1);
//     }
// }

// const value = document.querySelector('.value');
// const num = new Counter((result) => value.textContent = result);
// const changeNum = ({target}) => target.dataset.action === 'add' ? num.increment : num.decrement;
// document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', changeNum));


// ============================ Task 04 ===================================================

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const button = document.querySelector('.btn');
// const result = document.querySelector('.result');
// const lable = document.querySelectorAll('input');
// const getResult = function(evt) {
//     evt.preventDefault();
//     lable.forEach(el => el.checked ? result.textContent += el.value : null);
    
// };

// button.addEventListener('click', getResult);


//======================= Task 05 ========================================


/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const images = document.querySelector('.images');
// const getSrc = function(evt) {
//     if(!evt.target.src) return;
//     alert(evt.target.src);
// };
// images.addEventListener('click', getSrc);



//=================== Task 06 ===================================== 

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const list = document.querySelector('.list');
// const delElem = function(evt) {
//   if(evt.target.dataset.action === 'delete') {
//     evt.target.parentNode.remove();
//   }
// };
// list.addEventListener('click', delElem);




//========================= Task 07 =====================================

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const list = document.querySelector('.input-list');
// const checkLenght = function(evt) {
//   Array.from(list.children).find(el => {
//     el.classList.remove('valid');
//     el.classList.remove('invalid');
//   });
//   Number(evt.target.dataset.length) === evt.target.value.length ? evt.target.classList.add('valid') : evt.target.classList.add('invalid');
// };

// list.addEventListener('focusout', checkLenght);



//========================== Task 08 ===================================

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const message = document.querySelector('.message');
// const input = document.querySelector('.input');
// const val = document.querySelector('.input-value');

// const foc = function() {
//   message.textContent = 'Input is in focus!';
//   input.addEventListener('input', () => val.textContent = input.value);
//   input.addEventListener('focusout', () => message.textContent = '');
// };

// input.addEventListener('focusin', foc);


//================================ Task 09 ======================================

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

// const button = document.querySelector('.btn');
// const modal = document.querySelector('.js-modal-backdrop');
// const clo = document.querySelector('.close-btn');
// const openModal = function() {
//   modal.classList.remove('modal-hidden');
// };
// const closeModal = function(evt) {
//   evt.stopPropagation();
//   if(evt.target === modal || evt.target === clo) modal.classList.add('modal-hidden');
// };

// button.addEventListener('click', openModal);
// modal.addEventListener('click', closeModal);



// ======================= Task 10 ======================================


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
// const activeBtn = function(evt) {
//   evt.stopPropagation();
//   if(evt.target.nodeName === 'A') {
//     document.querySelectorAll('.menu-link').forEach(el => 
//       el !== evt.target ? el.classList.remove('active') : el.classList.add('active')
//     );
//   }
// };
// menu.addEventListener('click', activeBtn);


//================================== Homework =================================

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: './img/Photo-1.jpg', fullview: './img/Photo-1-large.jpg', alt: "alt text 1" },
  { preview: './img/Photo-2.jpg', fullview: './img/Photo-2-large.jpg', alt: "alt text 2" },
  { preview: './img/Photo-3.jpg', fullview: './img/Photo-3-large.jpg', alt: "alt text 3" },
  { preview: './img/Photo-4.jpg', fullview: './img/Photo-4-large.jpg', alt: "alt text 4" },
  { preview: './img/Photo-5.jpg', fullview: './img/Photo-5-large.jpg', alt: "alt text 5" },
  { preview: './img/Photo-6.jpg', fullview: './img/Photo-6-large.jpg', alt: "alt text 6" },
  { preview: './img/Photo-7.jpg', fullview: './img/Photo-7-large.jpg', alt: "alt text 7" },
  { preview: './img/Photo-8.jpg', fullview: './img/Photo-8-large.jpg', alt: "alt text 8" },
  { preview: './img/Photo-9.jpg', fullview: './img/Photo-9-large.jpg', alt: "alt text 9" },
];



// function createGallery(arr) {
//   const gallery = document.querySelector('.js-image-gallery');

//   const fullview = document.createElement('div');
//   fullview.classList.add('fullview');
//   const fullviewImg = document.createElement('img');
//   fullviewImg.src = arr[0].fullview;
//   fullviewImg.alt = arr[0].alt;
//   fullview.appendChild(fullviewImg);

//   const preview = document.createElement('ul');
//   preview.classList.add('preview');
//   arr.forEach(item => {
//     const li = document.createElement('li');
//     preview.appendChild(li);
//     const img = document.createElement('img');
//     img.src = item.preview;
//     img.alt = item.alt;
//     img.setAttribute('data-fullview', item.fullview);
//     li.appendChild(img);
//   });

//   gallery.append(fullview, preview);

// }
// createGallery(galleryItems);

// const list = document.querySelector('.preview');
// const addFocus = function(evt) {
//   if(evt.target.nodeName !== 'IMG') return;
//   const img = document.querySelector('.fullview>img');
//   list.querySelectorAll('img').forEach(el => el === evt.target ? el.classList.add('active') : el.classList.remove('active'));
//   img.src = evt.target.dataset.fullview;
//   img.alt = evt.target.alt;
// };

// list.addEventListener('click', addFocus);



/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

/* Далее плагин работает в автономном режиме */

class Gallery {
  constructor({items, parentNode, defaultActiveItem}) {
    this.gallery = parentNode;
    this.items = items;
    this.num = defaultActiveItem;
    this.fullview = document.createElement('div');
    this.fullviewImg = document.createElement('img');
    this.preview = document.createElement('ul');
    this.list = null;
    
    this.createPage = this.createPage.bind(this);
    this.addFocus = this.addFocus.bind(this);
    window.addEventListener('DOMContentLoaded', this.createPage);
  }
  createPage() {
    this.fullview.classList.add('fullview');
    this.fullviewImg.src = this.items[this.num - 1].fullview;
    this.fullviewImg.alt = this.items[this.num - 1].alt;
    this.fullview.appendChild(this.fullviewImg);

    this.preview.classList.add('preview');
    this.items.forEach(item => {
    const li = document.createElement('li');
    this.preview.appendChild(li);
    const img = document.createElement('img');
    img.src = item.preview;
    img.alt = item.alt;
    img.setAttribute('data-fullview', item.fullview);
    li.appendChild(img);
    });
    this.gallery.append(this.fullview, this.preview);
    this.list = document.querySelector('.preview');
    this.list.addEventListener('click', this.addFocus);
  }
  addFocus(evt) {
      if(evt.target.nodeName !== 'IMG') return;
      const img = document.querySelector('.fullview>img');
      Array.from(this.list.querySelectorAll('img')).forEach(el => el === evt.target ? el.classList.add('active') : el.classList.remove('active'));
      img.src = evt.target.dataset.fullview;
      img.alt = evt.target.alt;
    }
}

const gall = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 5
});


console.log(~300);
