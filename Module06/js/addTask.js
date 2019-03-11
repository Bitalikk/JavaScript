'use strict';

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// function Account(login, email) {
//     this.login = login;
//     this.email = email;
// }
// Account.prototype.getInfo = function() {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof



//===================Task 02=======================================



/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/
// class StringBuilder {
//     constructor(string) {
//         this._value = string;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {
//         this._value = this._value + str;
//     }
//     prepend(str) {
//         this._value = str + this._value;
//     }
//     pad(str) {
//         this._value = str + this._value + str;
//     }
// }
// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='


//===============Task 03====================================


/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//     constructor({ maxSpeed = 0 }) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//     turnOn() {
//         this.running = true;
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//         this.running = false;
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
  
//     accelerate(spd) {
//         spd < this.maxSpeed ? this.speed = spd : null;
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
  
//     decelerate(spd) {
//         spd < this.maxSpeed && spd > 0 ? this.speed = spd : null;
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {
//         this.running ? this.distance = hours * this.speed : null;
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
//   }
  
//   const car = new Car({ maxSpeed: 100 });

//   car.turnOn();
//   car.accelerate(50);
//   car.drive(5);



//===========================Task 04===================


/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/
// class Car {
//     constructor({ maxSpeed = 0 }) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//     }
  
//     turnOn() {
//         this.running = true;
//     }
  
//     turnOff() {
//         this.running = false;
//     }
  
//     accelerate(spd) {
//         spd <= this.maxSpeed ? this.speed = spd : null;
//     }
  
//     decelerate(spd) {
//         spd <= this.maxSpeed && spd >= 0 ? this.speed = spd : null;
//     }
  
//     drive(hours) {
//         this.running ? this.distance = hours * this.speed : null;
//     }
//     static getSpecs(obj) {
//         console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`);
//     }
//   }

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100



//=========================Task 05======================


// class Car {
//     constructor({ maxSpeed = 0, price }) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//         this.price = price;
//     }
  
//     turnOn() {
//         this.running = true;
//     }
  
//     turnOff() {
//         this.running = false;
//     }
  
//     accelerate(spd) {
//         spd <= this.maxSpeed ? this.speed = spd : null;
//     }
  
//     decelerate(spd) {
//         spd <= this.maxSpeed && spd >= 0 ? this.speed = spd : null;
//     }
  
//     drive(hours) {
//         this.running ? this.distance = hours * this.speed : null;
//     }
//     static getSpecs(obj) {
//         console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`);
//     }
//     get value() {
//         return this.price;
//     }
//     set value(price) {
//         this.price = price;
//     }
//   }

// // const car = new Car({ maxSpeed: 100 });
// // car.turnOn();
// // car.accelerate(50);
// // car.drive(2);

// // Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000
// /*
// * Добавь классу Car свойство цены автомобиля, назови его сам.
// * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
// */
// car.value = 4000;
// console.log(car.value); // 4000



