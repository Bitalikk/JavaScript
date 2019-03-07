'use strict';

// const Dog = function (name = 'Poops', age, breed, color, male, vegetarian, facebook) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.color = color;
//     this.male = male;
//     this.vegetarian = vegetarian;
//     this.facebook = facebook;
//     this.yelp = function () {
//         return 'woooooooooooffff wwwwwwwwwwwwwwwwwwwwwwoooooo fff';
//     };
// };

// const dog = new Dog('Bolls', 3, 'чау-чау', 'red', 'femail', true, 'http://facebook.com.ua/poops/');
// console.log(dog);

// console.log(dog.yelp());
// dog.getAboutData = function () {
//     return `name: ${this.name}; age: ${this.age}; breed: ${this.breed}`;
// };
// console.log(dog.getAboutData());












// const numbers = [1, 2, 3, 4, 5]; //not our mass

// // const ourArray =(transfer,numbersClone) => {//new mass
// //   let newMass = []; //future mass
// //   for (const numbersCloneElement of numbersClone) { //iteration of new mass
// //     const newElement = transfer(numbersCloneElement); // rewrite transfer element
// //     newMass.push(newElement); // rewrite new mass
// //   }
// //   return newMass; // return parametrs in numbersclone
// // };

// const double = (number) => number *2; // our function

// const triple = (number) => number *3;
// // const triple = function (number) {     //our function
// //   return number * 3;
// // };
// // const doubledNumbers = ourArray(double, numbers); // we need results
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// // const tripledNumbers = ourArray(triple,numbers);
// // console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// const newMass = [];
// numbers.map(function(el){ return newMass.push(el*2) });
// newMass2 = [];
// numbers.map(function(el){
//   return newMass2.push(triple(el));
// });

// console.log(numbers);
// console.log(newMass);
// console.log(newMass2);



//======================================================================

// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0 ? true : false;
//     }
//   const schedule = {};
//   alert( isEmpty(schedule) ); // true 
//   schedule["8:30"] = "подъём";
//   alert( isEmpty(schedule) ); // false


// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

// Если объект пустой, то результат должен быть 0.

// Например:

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
//   };

//   function getSumm (obj) {
//       let summ = 0;
//       for(let key in obj) {
//         summ += obj[key];
//       }
//       return summ;
//   }
//   console.log(getSumm(salaries));
  
  //... ваш код выведет 650



//   Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
//   };
  
//   function getCost(arr) {
//       let max = 0;
//       let name;
//       for(let el of Object.entries(arr))  {
//           if(el[1] > max) {
//               max = el[1];
//               name = el[0];
//           }
//         }
//         return name;  
//   }
//   console.log(getCost(salaries));
  // ... ваш код выведет "Петя"


//   Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
// const menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric (arr, callback) { 
//     for(let key in arr) {
//         if(callback(arr[key])) {
//             arr[key] = arr[key] * 2;
//         }
//     } 
//   }
//   function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }
//   multiplyNumeric(menu, isNumeric);
//   console.log(menu);


// Задание 10 Найти последовательность Хэеса, то есть пользователь вводит число и в результате должно быть выдано сообщение, с самой последовательностью, количеством шагов,
// которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
// Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не
// будет равно 1.
// 9*3+1=28
// 28/2=14
// 14/2=7
// 7*3+1=22
// 22/2=11
// 11*3+1=34
// 34/2=17
// 17*3+1=52
// 52/2=26
// 26/2=13
// 13*3+1=40
// 40/2=20
// 20/2=10
// 10/2=5
// 5*3+1=16
// 16/2=8
// 8/2=4
// 4/2=2
// 2/2=1

// function getNum(n) {
//     let i = 0;
//     do {
//         if(n % 2 === 0) {
//             console.log(`${n} / 2 = ${n / 2}`);
//             n = n / 2;
//         } else {
//             console.log(`${n} * 3 + 1 = ${n * 3 + 1}`);
//             n = n * 3 + 1;
//         }
//         i++;
//     } while (n !== 1);
//     return n, i;
// }
// console.log(getNum(50));


function getNum(n) {
    let num = 0;
    let i = 0;
    do {
        if(n % 2 === 0) {
            console.log(`${n} / 2 = ${n / 2}`);
            n = n / 2;
            } else {
            console.log(`${n} * 3 + 1 = ${n * 3 + 1}`);
            n = n * 3 + 1;
        }
        i++;
        if(n > num) {
            num = n;}
    } while (n !== 1);
    console.log(n);
    console.log(i);
    console.log(num);
}
getNum(50);