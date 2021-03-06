'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
      if(allLogins.includes(login)) {
          return false;
      }
      return true;
};

const addLogin = function(login) {
  if(isLoginValid(login)) {
      if(isLoginUnique(logins, login)){
          logins.push(login);
          console.log('Логин успешно добавлен');
      } else {
          console.log('Такой логин уже используется');
      }
  } else {
      console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'