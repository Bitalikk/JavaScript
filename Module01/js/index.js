'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let login = prompt('Введите логин');


if(login === null) {
    alert('Отменено пользоватедем');
} else if (login !== adminLogin) {
    alert('Доступ запрещен, неверный логин');
} else {
    let pass = prompt('Введите пароль');
    if(pass === null) {
        alert('Отменено пользователем');
    } else if(pass !== adminPassword) {
        alert('Доступ запрещен, неверный пароль');
    } else {
        alert('Добро пожаловать');
    }
}