'use strict';

// // Замыкание функции

// function createCounter() {
//     let counter = 0;
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);







// let test = 'wass to up';
// console.log(test.indexOf('up'));

// let was = "How are you";
// console.log( was.includes("are") );

// let str = "Widget with id";

// alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
// alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
// alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр


// let ahoj = prompt('wass up');
// const test = typeof ahoj;
// console.log(test);
// console.log(ahoj);

// console.log( 0.1 + 0.2 === 0.3);

// console.log(0.1 + 0.2);

// // Сделать их целыми, умножив на 100,
// // сложить, а потом результат разделить на 100
// console.log( (0.1 * 100 + 0.2 * 100) / 100 );

// //Сложить, а затем округлить до разумного знака после запятой
// const result = 0.1 + 0.2;
// console.log( +result.toFixed(10) );

// const state = prompt('wass up');
// console.log(5 + state);

// const name1 = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name1} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + px;

// console.log(totalWidth); // '125px'







/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 
// let year = prompt('Какой сейчас год?');

// if(year === '2018') {
//     alert('Все верно')
// } else {
//     alert('Но ведь на дворе 2018!');
// }








/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 
// let num = prompt('Введите произвольное целое число');
// if(num === null) {
//     alert('Приходите еще!');
// } else if(Number.isInteger(Number(num))) {
//     alert('Спасибо!');
// } else {
//     alert('Необходимо было ввести целое число');
// }





/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/
// const num = Number.parseInt(Math.random() * 100);

// let type;

// if(num % 2 === 0) {
//     type = 'even';
// } else {
//     type = "odd";
// }

// console.log(`${num} is ${type}`);







/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;

//Решение

// if(hours < 10) {
//     hours = '0' + hours;
// }
// if(minutes < 10) {
//     minutes = '0' + minutes;
// }
// if(seconds < 10) {
//     seconds = '0' + seconds;
// }
// Решение через функцию
// function show (num) {
//     if(num < 10) {
//         num = '0' + num;
//         return num;
//     } else {
//         return num;
//     }
// }
// hours = show(hours);
// minutes = show(minutes);
// seconds = show(seconds);

// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time);









/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/



let searchNum = Number(prompt('Введите число от 1 до 5'));

let checkNum = !Number.isNaN(searchNum) && searchNum >= 1 && searchNum <= 5;

if(searchNum === 0) {
    alert('Очень жаль, приходите еще!');
} else if(checkNum) {
    switch(searchNum) {
        case 1:
            alert('Каталог хостелов');
            break;
        case 2:
            alert('Каталог бюджетных отелей');
            break;
        case 3:
            alert('Каталог отелей ***');
            break;
        case 4:
            alert('Каталог отелей ****');
            break;
        case 5:
            alert('Каталог лучших отелей');
            break;
    }
} else {
    alert('Неверный ввод, возможные варианты 1 - 5');
}