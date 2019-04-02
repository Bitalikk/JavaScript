'use strict';

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

const input = document.querySelector("input");
const all = document.querySelector(".js-get-all");
const result = document.querySelector(".result");
all.addEventListener('click', getInfo);

// https://test-users-api.herokuapp.com/users/


function getInfo(evt) {
  evt.preventDefault();
  if(evt.target === all) getAllUsers();
}


function getAllUsers() {
  fetch('https://test-users-api.herokuapp.com/users/')
  .then(response => {
    if(response.ok) return response.json();

    throw new Error('error');
  })
  .then(arr => {
    return arr.data;
  })
  .then(data => {
    const users = data.reduce((acc, user) => acc + `<ul><li>Name: ${user.name}</li><li>id: ${user.id}</li><li>Age: ${user.age}</li></ul>`, '');
    result.insertAdjacentHTML('afterbegin', users);
  })
  .catch(err => console.error(err));
}

function getUserById(id) {

}