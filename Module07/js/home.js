'use strict';
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
    },
  ];
  function createCard(obj) {
    const cart = document.querySelector('body');
    const movieCart = document.createElement('div');
    movieCart.classList.add('movie');
    cart.appendChild(movieCart);
    const img = document.createElement('img');
    img.classList.add('movie__image');
    img.src = `${obj.img}`;
    img.alt = 'movie image';
    movieCart.appendChild(img);

    const movieBody = document.createElement('div');
    movieBody.classList.add('movie__body');
    movieCart.appendChild(movieBody);
    const title = document.createElement('h2');
    title.classList.add('movie__title');
    title.textContent = `${obj.title}`;
    const description = document.createElement('p');
    description.classList.add('movie__description');
    description.textContent = `${obj.text}`;
    const date = document.createElement('a');
    date.classList.add('movie__date');
    date.href = `${obj.link}`;
    date.style.textDecoration = 'none';
    date.style.color = 'green';
    date.textContent = 'link';
    movieBody.append(title, description, date);
}
const box = [];
function createCards(arr, callback) {
  arr.forEach(cart => {callback(cart); box.push(cart);});
}
createCards(posts, createCard);


