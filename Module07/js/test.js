'use strict';
// //========== Самые верхние элементы дерева доступны напрямую из document

// // Это свойство ссылается на DOM-объект для тега html
// console.log("document.documentElement: ", document.documentElement); 
// // Cоответствует тегу body
// console.log("document.body: ", document.body);
// // Соответствует тегу head
// console.log("document.head: ", document.head); 


// //=========== Работаем с body
// const body = document.body;
// // выберет всех детей body включая текстовые узлы
// console.log("body.childNodes: ", body.childNodes);
// // выберет всех детей body которые являются элементами
// console.log("body.children: ", body.children); 

// // выберет первого ребенка родителя, включая тектовые узлы
// console.log("body.firstChild: ", body.firstChild); 
// // выберет первого ребенка родителя который является элементом, это и будет ul
// console.log("body.firstElementChild: ", body.firstElementChild); 

// //=============== Работаем со списком
// const list = body.firstElementChild;
// console.log("list.parentNode: ", list.parentNode);
// console.log("list.childNodes: ", list.childNodes);
// console.log("list.children: ", list.children);

// //================== Выберем второй li внутри ul
// const secondItem = list.children[1];
// console.log("secondItem: ", secondItem);

// // Родитель
// console.log("secondItem.parent:", secondItem.parent);

// // Дети
// console.log("secondItem.childNodes: ", secondItem.childNodes);
// console.log("secondItem.children:", secondItem.children);

// // Первые ребенок
// console.log("secondItem.firstChild:", secondItem.firstChild);
// console.log("secondItem.firstElementChild:", secondItem.firstElementChild);

// // Последний ребенок
// console.log("secondItem.lastChild:", secondItem.lastChild);
// console.log("secondItem.lastElementChild:", secondItem.lastElementChild);

// // Сосед слева
// console.log("secondItem.previousSibling: ", secondItem.previousSibling);
// console.log(
//   "secondItem.previousElementSibling: ",
//   secondItem.previousElementSibling
// );

// // Сосед справа
// console.log("secondItem.nextSibling: ", secondItem.nextSibling);
// console.log("secondItem.nextElementSibling: ", secondItem.nextElementSibling);




//===============================================================



// const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '2rem';
// console.log(selectedById); // ...

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // ...

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass); // ...

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = '#BF4E30';
// console.log(firstMenuItem); // ...


//===========================================================


