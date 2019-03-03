'use strict';

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
  


//   user.mood = 'happy';
//   console.log(user);
  
//   user.hobby = 'javascript';
//   console.log(user);

//   delete(user.premium);
//   console.log(user);

// for(let key in user) {
//  console.log(`${key} : ${user[key]}`);
// }


// let arr = Object.keys(user);
// console.log(arr);
// for(let key of arr) {
//     console.log(key, ":", user[key]);
// }


// let newArr = Object.entries(user);
// console.log(newArr);
//   for(let key of newArr) {
//     console.log(`${key[0]} : ${key[1]}`);
//   }



//=====================================


// /*
//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };
  let maxNum = 0;
  for(let key in tasksCompleted) {
    
  }


