'use strict';
//=========================Task 06=================================
// function createMovieCard() {
//     const cart = document.querySelector('.movie');
//     const img = document.createElement('img');
//     img.classList.add('movie__image');
//     img.src = 'https://cdn.maggenta.com/media/product_feature_variant/1/thumb/33401.jpg?t=1521583591';
//     img.alt = 'movie image';
//     cart.appendChild(img);

//     const movieBody = document.createElement('div');
//     movieBody.classList.add('movie__body');
//     cart.appendChild(movieBody);
//     const title = document.createElement('h2');
//     title.classList.add('movie__title');
//     title.textContent = 'The Godfather';
//     movieBody.appendChild(title);
//     const description = document.createElement('p');
//     description.classList.add('movie__description');
//     description.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//     movieBody.appendChild(description);
//     const date = document.createElement('p');
//     date.classList.add('movie__date');
//     date.textContent = 'Released: 1972-03-14';
//     movieBody.appendChild(date);
//     const rating = document.createElement('p');
//     rating.classList.add('movie__rating');
//     rating.textContent = 'Rating: 8.6';
    // movieBody.appendChild(rating);
// }

// createMovieCard();



//=======================Task 07====================================


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

function createBoxes() {
  const ask = Number(prompt('Enter number'));
    const body = document.querySelector('#root');
    const box = document.createElement('div');
    for(let i = 0; i < ask; i++) {
        const div = document.createElement('div');
        const rgb = `${Math.floor(Math.random() * (255 - 0 + 1)) + 1},${Math.floor(Math.random() * (255 - 0 + 1)) + 1},${Math.floor(Math.random() * (255 - 0 + 1)) + 1}`;
        const width = 30 + 10 * i;
        const height = width;
        div.style.backgroundColor = `rgb(${rgb}`; 
        div.style.width = `${width}px`; 
        div.style.height = `${height}px`;
        div.style.display = 'inline-block';
        div.style.marginRight = '10px';
        box.append(div);
    }
    body.appendChild(box);
}

createBoxes();