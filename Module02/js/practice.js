'use strict'
const clients = ['Mango', 'Poly', 'Ajax', 'Romeo', 'Gringo'];
// clients.splice(0, 3); // Удалит все элементы с 0 по 3;
// console.log(clients);


// clients.splice(1, 0, 'Evhen', 'Artem'); // Добавляем эл. с индекса 1
// console.log(clients);


// clients.splice(1, 3, 'Python');
// console.log(clients);

const newClients = ['Adam', 'Franky'];
const newArr = clients.concat(newClients); //Создает новый масив из 2
console.log('newArr', newArr);
console.log(newArr.reverse()); //сортирует масив в обратную сторону
console.log('isArray:', Array.isArray(newArr)); //Проверка на тип "array"