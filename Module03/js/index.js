'use stricts';

// const showTestDays = function(name = 'Пользователь', days = 30) {
//     return `Имя - ${name}, использовано ${days} тестовых дня(ей)`;
// }

// console.log (showTestDays('Екатерина', 10));
// console.log (showTestDays('Михаил'));
// console.log (showTestDays());






// const arr = ['Hello', 'my', 'name', 'is', 'Kolya.'];

// console.log(toText(arr));

// function toText (data) {
//     const newText = data.join(' ');
//     return newText;
// }





// const summ  = function() {
//     const max = arguments.length;
//     let total = 0;

//     for (let i = 0; i < max; i +=1) {
//         total += arguments[i];
//     }

//     return total;
// };

// console.log(`sum = ${summ(1, 2, 3, 4, 5)}`);






// let a = 10;

// const fn = function () {
//   let value;
//   const ifValue = Number(value) || a;
//   if(!Number.isNaN(ifValue)) {
//      console.log(ifValue + 10);
//   } else {
//       console.log('value is NaN');
//   }
// };

// fn(); // 30



// let a = 10;
// const fn = function (value) {
//     // console.log('loaded'); // проверяем или функция вызвалась
//     const ifValue = Number(value) || a;
//     // console.log('ifValue', ifValue);   // проверяем что на выходе в константе ifValue
//     if(!Number.isNaN(ifValue)) {
//         // console.log('firstIf');     // проверяем или выполняется первое условие
//     console.log(ifValue + 10);
//     } else {
//         // console.log('secondIf');    // проверяем или выполняется второе условие 
//         console.log('value is NaN');
//    }
// }
// fn();




// const printMessage = function (callback) {
//     const message = callback();
//     console.log( message );
//   };
  
//   const getMessage = function () {
//     return "Welcome to the jungle!";
//   }

//   printMessage(getMessage); // "Welcome to the jungle!"







const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
  const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты
  
  // перебираем, входящий при вызове функции массив, записанный в аргумент arr. 
  // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
  // и записываем результат callback-функции в переменную result.
  // поседним этапом цикла - записываем result в новый массив, выходим из массива.
  // последним этапом функции map будет возврат(return) переменной resultArr.
  for(const element of arr) {
    const result = callback(element);
    resultArr.push(result);
  }
  return resultArr;
};

const double = val => val * 2;
const triple = val => val * 3;
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const tripledNumbers = map(numbers, triple);
console.log(tripledNumbers); // [3, 6, 9, 12, 15]





//===========================================

// HOMEWORK WRONG



// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// // let newLogin = prompt('Придумайте логин 4 - 16 символов');


// const isLoginValid = function(newLogin) {
//     const loginSize = newLogin !== null && newLogin.length >= 4 && newLogin.length <= 16;
//     if(loginSize) {
//       return true;
//   } else {
//       return false;
//   }
//   return;
// };


// const isLoginUnique = function(logins, newLogin) {
//   if(logins.includes(newLogin)) {
//       return false;
//   } else {
//       return true;
//   }
//   return;
// };

// const addLogin = function(logins, newLogin) {
//     if(isLoginValid()) {
//         if(isLoginUnique()) {
//             logins.push(newLogin);
//             console.log('Логин успешно добавлен');
//         } else {
//             console.log('Такой логин уже используется!');
//         }
//     } else {
//         alert('Ошибка! Логин должен быть от 4 до 16 символов');
//     }
//     return;
// };

// addLogin(logins, 'Poly');
// console.log(logins);





