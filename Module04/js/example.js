const users = ['Greengo', 'Riki', 'Floyd', 'Marchellos'];
let userIndex;
  
// Написать цыкл для поиска игрока за именем. Для примера давайте найдем Riki и
// сохраним его индекс в userIndex;
// for(let input of users) {
//   if (input === 'Riki') {
//     userIndex = users.indexOf(input);
//   }
// }
// console.log(userIndex)

let ask = 'aaa';

// for (let user of users){
  //   let hasUser;
  //   console.log(hasUser);
  //   if (ask === user) {
    //     hasUser = true;
    //   };
    //   if (hasUser === true) {
      //     alert ('This user has allready created');
      //     console.log (hasUser);
      //   }else {
        //     users.push(ask);
        //   }
        // }
        // console.log (users);
        
// let ask = prompt ("Add a new user");

// Дальше давайте добавим нового юзера, в конец массива
if (!users.includes(ask)) {
  users.push(ask);
}


// Удалим юзера по индексу userIndex
users.splice(userIndex,1);
console.log(users);


// Обновим юзера по индексу
users[1] = 'Max';
console.log(users);


// Дальше давайте перепишем каждый шаг в отдельную функцию getUserID(id),
// addUser('string'), deleteUser(id), updateUser(id)
function getUserID(name) {
  let userIndex = '';
  for(let input of users) {
    if (input === name) {
      userIndex = users.indexOf(input);
    }

  }
  if (userIndex !== '') {
    return userIndex;
  } else {
    alert('user is not finded');
  }
  console.log(userIndex);
}


console.log(getUserID('aabbbba')); // если юзера нет "user is not defined"


const addUser = function(arr, name) {
    if (arr.includes(name)) {
      alert('user has already exist');
    } else {
      arr.push(name);
    }
  }
  addUser(users, 'Ajax');
  addUser(users, 'Pablo');
  console.log(users);
  
  
  const deleteUser = (userIndex) => {
    users.splice(userIndex,1)
  }
  deleteUser(2); 
  
  console.log ('aftedDelete', users);
  deleteUser(getUserID('Max'));
  console.log(users);