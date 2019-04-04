const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 0;

// // // Разбить строку в массив, разделитель - пробел, и записать в переменную words
const words = message.split(' ');
// console.log(words);

// // // Выведи в консоли длину массива words
// console.log(words.length); // 8

// // // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// // console.log(price); // 80

// for(let el of words) {
//     price += 10;
// }

for(let i = 0, length = words.length; i < length; i++) {
    price += 10;
}
console.log(price);