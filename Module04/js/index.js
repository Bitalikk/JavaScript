'use strict';



// for(let input of users) {
//     if(input === 'Riki') {
//         userIndex = users.indexOf(input);
//     }
// }
// console.log(userIndex);

// Добавление нового пользователя
// let ask = prompt('Add new user');
// for(let user of users) {
//     let exist = false;
//     if (user === ask) {
//         exist = true;
//     }
//     if(exist === true) {
//         alert('This user has already')
//     } else {
//         users.push(ask);
//     }
// }

// if(!users.includes(ask)) {
//     users.push(ask);
// }


// Удаляем юзера по индексу

// users.splice(userIndex, 1);
// console.log(users);

// // Обновим юзера по индексу

// users[1] = 'Max';
// console.log(users);

// Добавляем











// const users = ['Greengo', 'Riki', 'Floyd', 'Marchellos'];
// let userIndex;
// let ask = 'aaa';

// function getUserID(name) {
//     let userIndex = '';
//     for(let input of users) {
//         if(input === name) {
//             userIndex = users.indexOf(input);
//         }
//     }
//     if(userIndex !== '') {
//         return userIndex;
//     } else {
//         alert('User is not defined');
//     }
//     console.log(userIndex);
// }


// const addUser = function(arr, name) {
//     if(arr.includes(name)) {
//         alert('User has already exist');
//     } else {
//         arr.push(name);
//     }
// };

// addUser(users, 'Ajax');
// addUser(users, 'Pablo');
// console.log(users);


// const deleteUser = (userIndex) => {
//     users.splice(userIndex, 1);
// };
// deleteUser(2);

// console.log(users);
// deleteUser(getUserID('Max'));
// console.log(users);


// const updateUser = function(index, name, arr) {
//     arr[index] = name;
//     return arr;
// };

// console.log(updateUser(getUserID('aaa'), 'Max', users));









// const users = [
//     {id: 'user_id_111', name: 'Greengo'},
//     {id: 'user_id_222', name: 'Riki'},
//     {id: 'user_id_333', name: 'Floyd'},
//     {id: 'user_id_444', name: 'Marchellos'},
//   ];


//   function getUserID(id) {
//       let userIndex = '';
//       for(let input of users) {
//           if(input.id === id) {
//               userIndex = users.indexOf(input);
//           }
//       }
//       if(userIndex !== '') {
//           return userIndex;
//       } else {
//           alert('User is not fined');
//       }
//       console.log(userIndex);
//   }
//   console.log(getUserID('user_id_111'));

//   console.log(users[getUserID('user_id_222')].name);

//   const deleteUser = userIndex => {
//     users.splice(userIndex, 1);
//   };
//   deleteUser(2);
//   console.log(users);
//   console.log(deleteUser("user_id_111"));
//   console.log(users);
//   // -----------------------------------------
//   const updateUser = function(index, name, arr) {
//     arr[index] = name;
//     return arr[index];
//   };
//   const update = updateUser(getUserID("user_id_4"), 'Max', users);
//   console.log(getUserID("user_id_2"));
//   console.log(users);




//===================================================================
// HOMEWORK

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };

  function Cashier(name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.getCustomerMoney = (value) => this.customerMoney = value;
    this.countTotalPrice = function(order) {
        let show;
        let sum = 0;
        for(let key in order) {
            show = order[key] * productDatabase[key];
            sum = sum += show;
        }
        return sum;
    };
    this.countChange = function(totalPrice) {
        let change;
        if(this.customerMoney > totalPrice) {
            change = this.customerMoney - totalPrice;
            return change;
        } else {
            return null;
        }
    };
    this.onSuccess = function(change) {
        return console.log(`Спасибо за покупку, ваша сдача ${change}!`);
    };
    this.onError = () => console.log('Очень жаль, вам не хватает денег на покупки');
    this.reset = () => this.customerMoney = 0;
}


const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);

// Проверяем что нам вернул countChange
console.log(change); // 190
// Проверяем результат подсчета денег
if(change !== null) {
    // При успешном обслуживании вызываем метод onSuccess
   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
 } else {
   // При неудачном обслуживании вызываем метод onError   
   mango.onError(); // Очень жаль, вам не хватает денег на покупки
 }
 
 // Вызываем reset при любом исходе обслуживания
 mango.reset();
 
 // Проверяем значения после reset
 console.log(mango.customerMoney); // 0