'use strict';

//==================Task 01===========================

/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", fetchCountryData);

// /*
// @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//     evt.preventDefault();
//     const API_URL = `https://restcountries.eu/rest/v2/name/${input.value}`;
//     fetch(API_URL)
//         .then(response => {
//             if(response.ok) return response.json();

//             throw new Error('error');
//         })
//         .then(data =>{
//             console.log(data),
//             result.innerHTML = `<p>Country name: ${data[0].name}</p><p>Capital: ${data[0].capital}</p><p>Main currency: ${data[0].currencies[0].code}</p><p>Flag: </p><img src = '${data[0].flag}' width = '300px'>`;
//         }
//     )
//     .catch(() => result.innerHTML = 'Страна в огне');
// }


// =====================Task 02==============================

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "";

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//     evt.preventDefault();
//     const API_URL = `https://api.github.com/users/${input.value}`;
//     fetch(API_URL)
//     .then(response => {
//         if(response.ok) return response.json();
//         throw new Error('error');
//     })
//     .then(date => {
//         // console.log(date);
//         result.innerHTML = `<p>Avatar: </p><img src = '${date.avatar_url}' width = '200px';><p>Username: ${date.login}</p><p>Bio: ${date.bio}</p><p>Public repos: ${date.public_repos}</p>`;
//     })
//     .catch(error => console.error(error));
// }


//====================Task 03===================================

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");

// form.addEventListener("submit", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//   evt.preventDefault();
//   fetch('https://jsonplaceholder.typicode.com/users/')
//   .then(response => {
//       if(response.ok) return response.json();
//       throw new Error('error');
//   })
//   .then(date => {
//     console.log(date);
//       const users = date.reduce((acc, user) => 
//         acc +`<tr><td>${user.name}</td><td>${user.email}</td><td>${user.address.city}</td><td>${user.website}</td><td>${user.company.name}</td></tr>`, '');
//       userTable.insertAdjacentHTML('afterbegin', users);
//   })
//   .catch(error => console.log(error));
// }



//===========================Task 04===============================

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");


// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//   evt.preventDefault();
//   const getId = input.value;
//   const API_URL = `https://test-users-api.herokuapp.com/users/${getId}`;
//   fetch(API_URL)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(data => {
//     result.insertAdjacentHTML('afterbegin', `<p>Name: ${data.data.name}</p><p>Age: ${data.data.age}</p>`);
//   })
//   .catch(error => result.insertAdjacentHTML('afterbegin', '<p>Ошибка! Пользователя с таким id не существует</p>'));
// }



