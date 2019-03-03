'use stricts';


// let num = 0; 
// const users = ['Alex', 'Nikolay','Helen'];

// while(num < users.length) {
//     if(users[num] === 'Alex') {
//         console.log('Alex найден');
//     }
//     num += 1;
//     if(num === (users.length - 1)) {
//     console.log('Юзер не найден');
//     }
//     num += 1;
//     break;
// }





// let i = 0; 
// const users = ['Alex', 'Nikolay','Helen', 'Sveta'];

// do {
//     if(users[i] === 'Helen') {
//     i += 1;
//     continue
//     }
//     console.log('Hello', users[i]);
//     i += 1;
// } while(i < users.length)

//====================================================







// Напишите скрипт имитирующий авторизацию пользователя.
  
//   Есть массив паролей зарегистрированных пользователей passwords. 
  
//   При посещении страницы, необходимо попросить пользователя ввести свой пароль,
//   после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
//   Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
//   Подсказка: используйте цикл do...while.
//   Если был введен пароль который есть в массиве passwords, вывести alert 
//   с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
//   Если был введен не существующий пароль, отнять от лимита попыток единицу, 
//   вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
//   где n это оставшийся лимит. 
  
//   После того как пользователь закрыл alert, запросить пароль снова. 
//   Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
//   существующий пароль, не кончатся попытки или пока пользователь 
//   не нажмет Cancel в prompt.
//   Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
//   Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */

// const pass = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;

// let inputPass

// do {
//     inputPass = prompt('Enter password');
//     if (pass.includes(inputPass)) {
//         alert('Добро пожаловать');
//         break
//     } else {
//         attempts -=1;
//         if (attempts > 0) {
//             alert(`У вас осталось ${attempts} попыток!`);
//         } else {
//             alert('У вас закончились попытки, аккаунт заблокирован');
//         }
//     }
// } while (attempts > 0 || inputPass !== null);


//Готовое


// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;
// let inputPassword;

// do {
//   inputPassword = prompt('Enter password: ');
//   if (passwords.includes(inputPassword)) {
//     alert('Добро пожаловать!');
//     break;
//   }
//   else if (inputPassword !== null) {
//     attempts -= 1;
//     if(attempts > 0){
//       alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
//     }
//     else {
//       alert('У вас закончились попытки, аккаунт заблокирован!');
//     }
//   }
// } while (attempts > 0 && inputPassword !== null);

