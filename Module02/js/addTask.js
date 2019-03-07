'use strict';


//=====================
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax



//==========================


/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// users.shift();
// // Удалить из начала массива нулевой элемент
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// users.pop();
// // Удалить из конца массив последний элемент
// console.log(users); // ["Poly", "Ajax"]

// users.unshift('Rodion');
// // Добавить в начало массива любое имя
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// users.push('Vasa', 'Sergey');
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]





//=============================


/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string;
// let arr;

// string = prompt('Введите произвольную строку');
// arr = string.split(' ');

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length); 
// //  для перебора массива используте цикл
//     // Используя цикл, вывести в консоль все индексы массива arr
// for(let i = 0; i < arr.length; i++) {
//     // console.log(`${arr[i]} --> ${i}`);
//     console.log(i);
// }
// // Используя цикл, вывести в консоль все элементы массива arr
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(`Свойство: ${arr[i]} имеет индекс ${i}.`)
// }
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// console.log();


//==========================================

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let ask;
// do {
//     ask = Number(prompt('Введите число больше 100'));
// } while(ask === null || ask < 100);






//========================================================

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for(let i = min; i < max; i++) {
//     if((i % 5) === 0) {
//         console.log('Buzz');
//     } else if((i % 3) === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }





//==============================================================


/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];


// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > num) {
//         newArray.push(numbers[i]);
//     }  
// }
// console.log(newArray);





//===================================================

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;
// const newString = string.split(' ');
// longestWord = newString[0];

//     for(let i = 0; i < newString.length; i++) {
//         if(newString[i].length > longestWord.length) {
//             longestWord = newString[i];
//         }
// }
// // console.log(newString); // 'force'
// console.log(longestWord); // 'force'



//==================================================



/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let ask;
// const numbers = [];
// let sum = 0;

// do {
//     ask = Number(prompt('Введите числа'));
//         numbers.push(ask);
// } while (ask);

// if(numbers.length > 0) {
//     for(let i of numbers) {
//         sum += i;
//     }
// }
// console.log(sum);



//=============================================



/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];

let input = Number(prompt('Введите число между 1 и 50'));

if(!Number.isNaN(input)) {
    if(numbers.includes(input)) {
        alert('Поздравляем, вы угадали');
    } else {
        alert('Сожалеем, Вы не угадали!');
    }
} else {
    alert('Было введено не число');
}