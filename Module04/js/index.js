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









const users = [
    {id: 'user_id_111', name: 'Greengo'},
    {id: 'user_id_222', name: 'Riki'},
    {id: 'user_id_333', name: 'Floyd'},
    {id: 'user_id_444', name: 'Marchellos'},
  ];


  function getUserID(id) {
      let userIndex = '';
      for(let input of users) {
          if(input.id === id) {
              userIndex = users.indexOf(input);
          }
      }
      if(userIndex !== '') {
          return userIndex;
      } else {
          alert('User is not fined');
      }
      console.log(userIndex);
  }
  console.log(getUserID('user_id_111'));

  console.log(users[getUserID('user_id_222')].name);

  const deleteUser = userIndex => {
    users.splice(userIndex, 1);
  };
  deleteUser(2);
  console.log(users);
  console.log(deleteUser("user_id_111"));
  console.log(users);
  // -----------------------------------------
  const updateUser = function(index, name, arr) {
    arr[index] = name;
    return arr[index];
  };
  const update = updateUser(getUserID("user_id_4"), 'Max', users);
  console.log(getUserID("user_id_2"));
  console.log(users);