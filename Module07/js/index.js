'use strict';
const title = document.createElement('h1');
title.classList.add('red-text');
title.textContent = 'Welcome';
const div = document.querySelector('.first');
div.append(title);
div.innerHTML += '<ul class= "myList"><li><p>Ochen</p></li><li><p>stranno</p></li></ul>';
const myList = document.querySelector('.myList');
myList.style.listStyle = 'none';
myList.style.textTransform = 'uppercase';
div.insertAdjacentHTML('afterend', '<p class="green">Lorem ipsum dollor dgdrgdgdf dfgdfgdfg ihoa4jpo</p>');
const text = document.lastElementChild;
console.log(text);
// text.classList.add('green');
const textGreen = document.querySelector('.green');
// textGreen.style.color = '#00ff00';
textGreen.style.color = 'green';

const image = document.createElement('img');
image.src = 'https://pbs.twimg.com/profile_images/688278292030357505/oXzWMJIo_400x400.jpg';
div.after(image);