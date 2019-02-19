'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const canceled = 'Отменено пользователем!';
let log = prompt('Логин:');
let pass;
if(log === null) {
    alert(canceled);
} else if(log !== adminLogin) {
    alert('Доступ запрещен, неверный логин!');
} else {
    pass = prompt('Пароль:');
    if(pass === null) {
        alert(canceled);
    } else if(pass !== adminPassword) {
        alert('Доступ запрещен, неверный пароль!')
    } else {
        alert('Добро пожаловать!')
    }
}