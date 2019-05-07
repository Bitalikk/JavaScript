'use strict';
// ================================= Task 01 ==========================================
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
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// form.addEventListener("submit", fetchCountryData);

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//   evt.preventDefault();
//   fetch(API_URL + input.value)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(user => {
//     const res = `<p>Country name: ${user[0].name}</p><p>Capital: ${user[0].capital}</p><p>Flag: </p><img src = '${user[0].flag}' width = '200px'>`;
//     result.insertAdjacentHTML('afterbegin', res);
//   })
//   .catch(err => console.log(err));
// }



// ========================= Task 02 =====================================


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

// form.addEventListener("submit", fetchUserData);

// /*
// @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//   evt.preventDefault();
//   const API_URL = `https://api.github.com/users/${input.value}`;
//   fetch(API_URL)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(user => {
//     console.log(user);
//     const res = `<p>Avatar: </p><img src = '${user.avatar_url} width = '100px'><p>Username: ${user.login}</p><p>Bio: ${user.bio}</p><p>Public repos: ${user.public_repos}</p>`;
//     result.insertAdjacentHTML('afterbegin', res);
//   })
//   .catch(err => console.error(err));
// }



// =============================== Task 03 ==================================


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
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(users => {
//     const title = document.createElement('tr');
//     const fullName = document.createElement('th');
//     fullName.textContent = 'Имя';
//     const mail = document.createElement('th');
//     mail.textContent = 'Почта';
//     const cityName = document.createElement('th');
//     cityName.textContent = 'Город';
//     const web = document.createElement('th');
//     web.textContent = 'Вебсайт';
//     const companyName = document.createElement('th');
//     companyName.textContent = 'Компания';
//     title.append(fullName, mail, cityName, web, companyName);
//     userTable.appendChild(title);
    
//     const res = users.reduce((acc, user) => 
//       acc + `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.address.city}</td><td>${user.website}</td><td>${user.company.name}</td></tr>`, '');
    
//     userTable.insertAdjacentHTML('beforeend', res);
//   })
//   .catch(err => console.error(err));
// }


// =========================== Task 04 =======================================

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
//   fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(user => {
//     const data = `<p>Name: ${user.name}</p><p>Username: ${user.username}</p><p>Email: ${user.email}</p><p>Address: ${user.address.street}</p><p>Phone: ${user.phone}</p><p>Company: ${user.company.name}</p>`;
//     result.insertAdjacentHTML('afterbegin', data);
//   })
//   .catch(err => {
//     result.insertAdjacentHTML('afterbegin', 'Ошибка! Пользователя с таким id не существует');
//     console.error(err);
//   });
// }


// ============================ Homework =================================================

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/


// const inputId = document.querySelector('#id');
// const inputName = document.querySelector('#name');
// const inputAge = document.querySelector('#age');
// const search = document.querySelector('.search-form');
// const result = document.querySelector('.result');
// const API_URL = 'https://test-users-api.herokuapp.com/users/';

// search.addEventListener('click', getResult);

// function getResult(evt) {
//   evt.preventDefault();
//   if(evt.target.classList.contains('getAllUsers')) {
//     getAllUsers();
//   } else if(evt.target.classList.contains('getById')) {
//     getUserById(inputId.value);
//   } else if(evt.target.classList.contains('addUser')) {
//     addUser(inputName.value, inputAge.value);
//   } else if(evt.target.classList.contains('removeUser')) {
//     removeUser(inputId.value);
//   } else if(evt.target.classList.contains('updateUser')) {

//     const newProp = {};

//     if(inputName.value) newProp.name = inputName.value;

//     if(inputAge.value) newProp.age = inputAge.value;

//     updateUser(inputId.value, newProp);
//   } else return;
// }

// function getAllUsers() {
//   fetch(API_URL)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(data => {
//     return data.data;
//   })
//   .then(users => {
//     result.innerHTML = `<ol>${users.map(el => `<li>${el.name} : ${el.id}</li>`).join(' ')}</ol>`;
//   })
//   .catch(err => console.error(err));
// }

// function getUserById(id) {
//   fetch(API_URL + id)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(data => {
//     return data.data;
//   })
//   .then(user => {
//     result.innerHTML = `<p>Name: ${user.name}</p><p>age: ${user.age}</p>  `;
//     search.reset();
//   })
//   .catch(err => console.error(err));
// }

// function addUser(name, age) {
//   const obj = {
//     'name': name,
//     'age': age,
//   };
//   fetch(API_URL, {
//     method: 'POST',
//     body: JSON.stringify(obj),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//   .then(() => {
//     search.reset();
//   })
//   .catch(err => console.error(err));
  
// }

// function removeUser(id) {
//   fetch(API_URL + id, {
//     method: 'DELETE'
//   })
//   .then((response) => {
//     if(response.ok) {
//       result.innerHTML = '<p>Done</p>';
//       return search.reset();
//     }
    
//     throw new Error('error');
//   })
//   .catch(err => console.error(err));
// }

// function updateUser(id, user) {
//   fetch(API_URL + id, {
//     method: 'PUT',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error('error');
//   })
//   .then(user => {
//     console.log(user.data);
//   })
//   .catch(err => console.error(err));
// }


//=========================== ES6 =========================================

class AppForREST {
  constructor() {
    this.inputId = document.querySelector('#id');
    this.inputName = document.querySelector('#name');
    this.inputAge = document.querySelector('#age');
    this.result = document.querySelector('.result');
    this.search = document.querySelector('.search-form');
    this.API_URL = 'https://test-users-api.herokuapp.com/users/';
    this.getResult = this.getResult.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.search.addEventListener('click', this.getResult);
    this.newProp = {};
  }
  getResult(evt) {
    evt.preventDefault();

    if(evt.target.classList.contains('getAllUsers')) {
      this.getAllUsers();
    } else if(evt.target.classList.contains('getById')) {
      this.getUserById(this.inputId.value);
    } else if(evt.target.classList.contains('addUser')) {
      this.addUser(this.inputName.value, this.inputAge.value);
    } else if(evt.target.classList.contains('removeUser')) {
      this.removeUser(this.inputId.value);
    } else if(evt.target.classList.contains('updateUser')) {
  
      if(this.inputName.value) this.newProp.name = this.inputName.value;
  
      if(this.inputAge.value) this.newProp.age = this.inputAge.value;
  
      this.updateUser(this.inputId.value, this.newProp);
    } else return;
  }
  getAllUsers() {
    fetch(this.API_URL)
    .then(response => {
      if(response.ok) return response.json();
  
      throw new Error('error');
    })
    .then(data => {
      return data.data;
    })
    .then(users => {
      this.result.innerHTML = `<ol>${users.map(el => `<li>${el.name} : ${el.id}</li>`).join(' ')}</ol>`;
    })
    .catch(err => console.error(err));
  }

  getUserById(id) {
    fetch(this.API_URL + id)
    .then(response => {
      if(response.ok) return response.json();
    
      throw new Error('error');
    })
    .then(data => {
      return data.data;
    })
    .then(user => {
      this.result.innerHTML = `<p>Name: ${user.name}</p><p>age: ${user.age}</p>  `;
      this.search.reset();
    })
    .catch(err => console.error(err));
  }

  addUser(name, age) {
    const obj = {
      'name': name,
      'age': age,
    };
    fetch(this.API_URL, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(() => {
      this.search.reset();
    })
    .catch(err => console.error(err)); 
  }

  removeUser(id) {
    fetch(this.API_URL + id, {
      method: 'DELETE'
    })
    .then((response) => {
      if(response.ok) {
        this.result.innerHTML = '<p>Done</p>';
        return this.search.reset();
      }
        
      throw new Error('error');
    })
    .catch(err => console.error(err));
  }

  updateUser(id, user) {
    fetch(this.API_URL + id, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(() => {
      this.search.reset();
    })
    .catch(err => console.error(err));
  }
}


const test = new AppForREST();