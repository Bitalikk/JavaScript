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

// const forward = document.querySelector('.forward');
// const back = document.querySelector('.back');
// const images = document.querySelectorAll('.images>img');
// let i = 0;

// forward.onclick = function() {
//     images[i].classList.remove('showed');
//     i++;
//     if(i === images.length) i = 0;
//     images[i].classList.add('showed');
// };
// back.onclick = function() {
//     images[i].classList.remove('showed');
//     i--;
//     if(i < 0) i = images.length - 1;
//     images[i].classList.add('showed');
// };


//===============================================================================

//=======================Task 01===============================================

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


// const list = document.querySelectorAll('.categories>li');
// const result = Array.from(list).reduce((acc, el) => acc + `Категория: ${el.firstChild.textContent.trim()}\nКоличество вложенных li: ${el.firstElementChild.childElementCount}\n`, '');

// console.log(result);


//=============================Task 02====================================

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';

//====================Task 03==============================================

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// function createList(arr) {
//     const list = document.querySelector('.list');
//     const item = arr.reduce((acc, el) => acc + `<li>${el}</li>`, '');
//     list.innerHTML = item;
// }
// createList(elements);

//============================Task 04=========================================

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
// ];


// function createGallery(arr) {
//     const gallery = document.querySelector('.gallery');
//     const item = arr.reduce((acc, el) => acc + `<li><img src = '${el.url}' alt = '${el.alt}' width = '300px'></li>`, '');
//     gallery.innerHTML = item;
// }
// createGallery(galleryItems);



//====================Task 05============================

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const check = document.querySelectorAll('input:checked');
// function collectInputData(inputs) {
//     console.log(Array.from(inputs).map(el => el.value));
// }
// collectInputData(check);


//=======================Task 06==========================
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// const cart = document.querySelector('.movie');
// const newCart = cart.cloneNode(true);
// document.body.appendChild(newCart);

//================== OR ============================================

// function createMoovieCard() {
//     const movie = document.createElement('div');
//     movie.classList.add('movie');

//     const img = document.createElement('img');
//     img.classList.add('movie_image');
//     img.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//     img.alt = 'movie image';

//     const body = document.createElement('div');
//     body.classList.add('movie__body');

//     const title = document.createElement('h2');
//     title.classList.add('movie__title');
//     title.textContent = 'The Godfather';
//     const description = document.createElement('p');
//     description.classList.add('movie__description');
//     description.textContent = `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//     would-be killers, launching a campaign of bloody revenge.`;
//     const date = document.createElement('p');
//     date.classList.add('movie__date');
//     date.textContent = 'Released: 1972-03-14';
//     const rating = document.createElement('p');
//     rating.classList.add('movie__rating');
//     rating.textContent = 'Rating: 8.6';
//     body.append(title, description, date, rating);
//     movie.append(img, body);
//     document.body.appendChild(movie);
// }

// createMoovieCard();


// =========================Task 07 ==================================

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// function createBoxes() {
//     const num = prompt('Enter your number');
//     const container = document.querySelector('#root');
//     const div = document.createElement('div');
//     for(let i = 0; i < num; i++) {
//         const box = document.createElement('div');
//         const rgb = `${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}` ;
//         const width = 30 + i * 10;
//         const height = width;
//         box.style.backgroundColor = `rgb(${rgb})`;
//         box.style.width = `${width}px`;
//         box.style.height = `${height}px`;
//         box.style.display = 'inline-block';
//         box.style.margin = '10px';
//         div.appendChild(box);
//     }
//     container.append(div);

// }
// createBoxes();



//=========================Homework=================================================


/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
  const container = document.querySelector('.container');

  function createPostCard(post) {
    const movie = document.createElement('div');
    movie.classList.add('movie');
    const image = document.createElement('img');
    image.classList.add('movie__image');
    image.src = post.img;
    image.alt = 'movie image';

    const body = document.createElement('div');
    body.classList.add('movie__body');

    const title = document.createElement('h2');
    title.classList.add('movie__title');
    title.textContent = post.title;
    const description = document.createElement('p');
    description.classList.add('movie__description');
    description.textContent = post.text;
    const link = document.createElement('a');
    link.classList.add('movie__link');
    link.href = post.link;
    link.textContent = post.link;
    body.append(title, description, link);
    movie.append(image, body);
    return movie;
  }

  function createCards(posts) {
    return posts.reduce((acc, el) => acc.concat(createPostCard(el)), []);
  }

const arr = createCards(posts);
container.append(...arr);
