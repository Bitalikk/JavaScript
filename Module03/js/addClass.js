'use strict';

//=============================== task 01 =======================

// Заполните массив 10-ю иксами с помощью цикла.

// const arr = [];
// for(let i = 0; i < 10; i++) {
//     arr.push('x');
// }
// console.log(arr);

//=============================== task 02 =======================

// Заполните массив числами от 1 до 10 с помощью цикла.

// const arr = [];
// for(let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);
//=============================== task 03 =======================

// Дана строка, например, '123456'. Сделайте из нее '214365'.

// const str = '123456';
// const arr = str.split('');
// for(let i = 0; i < arr.length; i += 2) {
//     let num = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = num;
// }

// const newStr = arr.join('');
// console.log(newStr);

//=============================== task 04 =======================

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(num) {
//     return num > 0 && num < 10;
// }
// console.log(isNumberInRange(12));

//=============================== task 05 =======================

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(num) {
//     return num % 2 === 0;
// }
// // console.log(isEven(6));

// //=============================== task 06 =======================

// // Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи

// const arr = [4, 6, 8, 3, 7, 9, 2, 6];
// const newArr = [];
// for(let el of arr) {
//     if(isEven(el)) {
//         newArr.push(el);
//     }
// }
// console.log(newArr);

//=============================== task 07 =======================

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой

// const str ='abcde abcde abcde';

// function ucfirst(str) {
//     const arr = str.split(' ');
//     const newArr = [];
//     for(let el of arr) {
//         const firstLetter = el[0].toUpperCase();
//         newArr.push(firstLetter + el.slice(1));
//     }
//     return newArr.join(' ');
// }
// console.log(ucfirst(str));




//=============================== task 08 =======================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false

// var str = 'яблоко';
// var arr = ['банан', 'яблоко', 'персик'];
// console.log(inArray(str, arr));

// function inArray(text, search) {
//   return search.includes(text);
// }



//=============================== task 09 =======================

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)

// function getDivisors(num) {
//   const arr = [];
//   for(let i = num; i > 0; i--) {
//     if(Number.isInteger(num / i)) arr.push(i);
//   }
//   return arr;
// }

// console.log(getDivisors(99));

//=============================== task 10 =======================


/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// function checkNumberType(num) {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// }


// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'




//=============================== task 11 =======================

/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/


// function formatString(str) {
//   return str.length > 40 ? str.slice(0, 40) + '...' : str;
// } 


// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка
  

//=============================== task 12 =======================


/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam(str) {
//   return str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



//=============================== task 13 =======================

/*  
  Написать функцию, getPx(str) 
  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// function getPx(str) {
//   return typeof str === 'string' ? Number.parseFloat(str) : null;
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null


//=============================== task 14 =======================

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

// function findLongestWord(str) {
//   return str.split(' ').reduce((acc, el) => el.length > acc.length ? el : acc, '');
// }

//==================OR===============================

// function findLongestWord(str) {
//   const arr = str.split(' ');
//   let word = '';
//   for(let el of arr) {
//     if(el.length > word.length) word = el;
//   }
//   return word;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // 'force'
    

//=============================== task 15 =======================


/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// function findLargestNumber(num) {
//   let result = null;
//   for(let el of num) {
//     // if(el > result) result = el;
//     //=============OR===================
//     result = Math.max(el, result);
//   }
//   return result;
// }
//====================OR=====================

// function findLargestNumber(numbers) {
//   return numbers.reduce((acc, num) => Math.max(acc, num), 0);
// }

// Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // 128
  

//=============================== task 16 =======================

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(...rest) {
//   for(let el of rest) {
//     if(uniqueNumbers.includes(el)) continue;
//     uniqueNumbers.push(el);
//   }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

//=============================== task 17 =======================

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr, ...rest) {
//   const newArr = [];
//   for(let num of arr) {
//     if(!rest.includes(num)) newArr.push(num);
//   }
//   return newArr;
// }; 

// // // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



//=============================== ***** task **** 18  =======================


/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if(isLoginValid(login)) {
    if(isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      console.log('Логин успешно добавлен!');
    } else {
        console.log('Такой логин уже используется!');
    }
  } else {
      console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
