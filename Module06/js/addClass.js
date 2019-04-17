'use strict';


// function DRAGON(name = 'only name', level = 0) {
//     this.name = name;
//     this.level = level;
// }

// DRAGON.prototype.getLevel = function(el) {
//     this.level += el;
// };

// const dragon = new DRAGON('Bond', 80);
// dragon.getLevel(20);


// function DoubleDragon(name, level, weapon) {
//     this.weapon = weapon;
//     DRAGON.call(this, name, level);
    
// }

// DoubleDragon.prototype.newName = function(value) {
//     this.name = value; 
// };

// const double = new DoubleDragon('Maks', 9999, 'falos');

// double.newName('Ben');
// console.log(double);


// const dragon2 = new DRAGON('Julia', 3);
// dragon2.getLevel(100);

// console.log(dragon);

// class MyClass {
//     constructor(name, xp, level) {
//         this.name = name;
//         this.xp = xp;
//         this.level = level;
//     }
//     getLevel() {
//         console.log(this.level);
//     }
//     minus(num) {
//         this.level -= num;
//     }
// }

// const bond = new MyClass('Max', 10, 100);
// console.log(bond);
// bond.getLevel();
// bond.minus(20);
// console.log(bond);



//==================================================================================


// Vovan, [16.03.19 15:46]
// // Part 1
// // Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// function Book(title, author, pages, price, curentPage) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this. price = price;
//     this.curentPage = curentPage;
// }
// // // Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Book.prototype.buy = function(arr) {
//     arr.push(this.price);
// }
// // // Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Book.prototype.read = function(num) {
//     this.curentPage += num;
// };
// // // Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// const pigmalion = new Book('Pigmalion', 'Bernard Show', 320, 150, 0);
// // pigmalion.buy(totalPrice);

// const margo =  new Book('Margo Queen', 'Alexandr Duma', 450, 280, 0);
// // margo.buy(totalPrice);
// const petr = new Book('Petr_1', 'Lev Tolstoy', 890, 450, 0);
// // petr.buy(totalPrice);

// // // Порахувати загальну вартість замовлення з масива order.
// const orderAll = [pigmalion, margo, petr];
// const orderPig = [pigmalion, petr];
// function buyBooks(arr) {
//     const totalPrice = [];
//     arr.map(el => el.buy(totalPrice));
//     return totalPrice.reduce((acc, price) => acc + price, 0);
// }
// console.log(buyBooks(orderAll));
// console.log(buyBooks(orderPig));


// // // Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// margo.read(50);
// margo.read(50);
// console.log(margo.curentPage);

// // //  Part 2
// // // Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.

// function EBook(fileSize, title, author, pages, price, curentPage) {
//     Book.call(this, title, author, pages, price, curentPage);
//     this.fileSize = fileSize;
// }
// EBook.prototype = Object.create(Book.prototype);
// // // Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
// EBook.prototype.download = function() {
//     console.log(`Book ${this.title} has been dowloaded, app was downloaded ${this.fileSize} kb`);
// };


// // // Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// const book = new EBook(452, 'Pigmalion', 'Bernard Show', 320, 150, 0);
// const book2 = new EBook(124, 'Margo', 'Alexandr Duma', 450, 80, 0);
// const order = [];
// book.buy(order);
// book2.buy(order);

// // // Викликати для них метод download()
// book.download();
// book2.download();

// // // Part 3 
// // // Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// function PapperBook(cover, title, author, pages, price, curentPage) {
//     Book.call(this, title, author, pages, price, curentPage);
//     this.cover = cover;
// }
// PapperBook.prototype = Object.create(Book.prototype);
// // // Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива order ту книгу для якої викликаємо цей метод.
// PapperBook.prototype.burn = function(arr) {
//     console.log(`Book ${this.title} has been burned`);
//     arr.splice(arr.indexOf(this), 1);
// };
// // // Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// const first = new PapperBook(452, 'Pigmalion', 'Bernard Show', 320, 150, 0);
// const second = new PapperBook(124, 'Margo', 'Alexandr Duma', 450, 80, 0);
// const third = new PapperBook(245, 'Petr_1', 'Lev Tolstoy', 890, 450, 0);

// const books = [first, second, third];
// // // Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива books
// first.burn(books);
// second.burn(books);
// console.log(books);


//==================================== Vovan, [16.03.19 15:47]======================================
// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// function Calc() {
//     this.numbers = [];
// }
// // // Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// // // Метод read() працює до тих пір поки користувач не натисне Cancel;
// Calc.prototype.read = function() {
//     let ask = null;
//     do {
//         ask = prompt('Enter your number');
//         if(ask === null) break;
//         this.numbers.push(Number(ask));
//     } while(ask !== null);
// };
// // // Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// // // Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Calc.prototype.sum = function() {
//     return this.numbers.reduce((acc, num) => acc + num, 0);
// };
// // // Метод addMethod(name, function) вчить калькулятор нової операції. 
// // // параметр name - назва нового метода
// // // параметр function - код нового метода.
// Calc.prototype.addMethod = function(name, func) {
//     Calc.prototype[name] = func;
// };

// // // За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();
// const calculator = new Calc();
// calculator.addMethod('minus', function(){return this.numbers[0] - this.numbers[1];});
// calculator.read();
// console.log(calculator.minus());

// Vovan, [16.03.19 15:48]
// Part 1
// Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
// name - імя
// life - житя =100
// level - рівень = 1
// хр - досвід = 0
// stamina - витривалість = 100
class Hero {
    constructor(name, life = 100, level = 1, xp = 0, stamina = 0) {
        this._name = name;
        this._life = life;
        this._level = level;
        this._xp = xp;
        this._stamina = stamina;
    }
    // Клас буде мати методи :
    // 1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
    // 2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу метод обнуляє поле до 0.
    // 3) walk - метод що виводить в консоль фразу "name walking"
    // 4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 
    riseLevel() {
        if(this._xp >= 1000) {
            this._level +=1;
            this.addXp(0);
        }
    }
    addXp(xp) {
        if(this._xp >= 1000) {
            this._xp -= 1000;
        }
        this._xp += xp;
    }
    walk() {
        console.log(`${this._name} walking`);
    }
    rest() {
        this._stamina = 100;
        console.log('Recovered');
    }
}
// Створити героя і викликати для нього метод addXp(50) і addXp(950)
// Далі викликати метод riseLevel() що збільшить рівень до 2.
// викликати метод walk.
const hero = new Hero('Wass', 100, 1, 0, 100);
hero.addXp(50);
hero.addXp(950);
hero.riseLevel();
hero.addXp(50); 
hero.addXp(1000);
hero.riseLevel();
hero.addXp(1000);
hero.riseLevel();



console.log(hero);
hero.walk();

// Part 2 
// Написати класи Людина, Гном, Маг які будуть насладувати все від класа Герой.
// Ці 3 класа будуть мати додаткову властивість race - раса.
// Людина додатково матиме поле - strength = 100
// Гном матиме додатково поле - rage = 100
// Маг матиме додаткове поле - mana = 100

// Для людини додати метод - wardenFight - який при кожному запуску зменьшує поле stamina на 20.
// Коли поле stamina стане 0 потрібно викликати метод rest() щоб відновити її значення.
function Human(name, life, level, xp, stamina) {
  Hero.call(this, name, life, level, xp, stamina);
  this.race = 'human';
  this.strength = 100;
}
Human.prototype = Object.create(Hero.prototype);
Human.prototype.wardenFight = function() {
  this._stamnia -= 20;
  if(this._stamnia === 0) this.rest();
};

// Для гнома додати метод berserk'sFury - який при кожному виклику збільшує поле 
// rage на 30. Якщо rage = 100 обнулити поле stamina і rage та викликати метод rest().

function Draft(name, life, level, xp, stamina) {
  Hero.call(this, name, life, level, xp, stamina);
  this.race = 'draft';
  this.rage = 100;
} 
Draft.prototype = Object.create(Hero.prototype);
Draft.prototype = function() {

};


// Для мага додати метод spell який при виклику зменьшує занчення на 25 і stamina на 25.
// Коли значення stamina стає 0 потрібно викликати метод rest(). 
// Додати метод reload() який оновлює поле mana до 100

// Створити по одному екземпляру кожного класу для кожного з них обнулити показник stamina викликом їхніх спеціальних методів, щоб в консолі зявилося повідомлення 'Recovered' 

// Part 3 

// Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
// skill - поле де додається навик 'fireball'
// Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();

// Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). після цього в консолі має зявитися напис 'Recovered'





//=====================================================================================


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
//     console.log(`Login: ${this.login}\nEmail: ${this.email}`);
// };

// const account = new Account('Mangozedog', 'mango@dog.woof');
// const account1 = new Account('Ajax', 'ajax@dog.woof');
// const account2 = new Account('Mila', 'mila@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// account1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// account2.getInfo(); // Login: Mangozedog, Email: mango@dog.woof



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

// class StringBuilder{
//     constructor(value) {
//         this._value = value;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {
//         this._value += str;
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



/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//     constructor({ maxSpeed = 0, price }) {
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//      this.speed = 0;
//      this.maxSpeed = maxSpeed;
//      this.running = false;
//      this.distance = 0;
//      this.price = price;
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       this.running = true;
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if(spd <= this.maxSpeed) {
//           this.speed = spd;
//       }
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if(spd <= this.maxSpeed && spd >= 0) {
//           this.speed = spd;
//       }
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if(this.running) {
//           this.distance = hours * this.speed;
//       }
//     }
//     static getSpecs({maxSpeed, speed, running, distance}) {
//         console.log(`maxSpeed: ${maxSpeed}\nspeed: ${speed}\nrunning: ${running}\ndistance: ${distance}`);
//     }
//     set value(val) {
//         this.price = val;
//     }
//     get value() {
//         return this.price;
//     }
//   }

  /*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000


//============================================================================


/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
// class Hamburger {
//     /**
//      * @constructor
//      * @param {String} size - Размер
//      * @param {String} stuffing - Начинка
//      */
//     constructor(size, stuffing) {
//       this._size = size;
//       this._stuffing = stuffing;
//       this._toppings = [];
//     }
  
//     /**
//      * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//      * @param {String} topping - Тип добавки
//      */
//     addTopping(topping) {
//         if(!this._toppings.includes(topping)) {
//             this._toppings.push(topping);
//         }
//     }
        
//     /**
//      * Убрать topping, при условии, что она ранее была добавлена
//      * @param {String} topping - Тип добавки
//      */
//     removeTopping(topping) {
//         if(this._toppings.includes(topping)) {
//             this._toppings.splice(this._toppings.indexOf(topping), 1);
//         }
//     }
  
//     /**
//      * Получить список toppings
//      * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//      */
//     get toppings() {
//         return this._toppings;
//     }
  
//     /**
//      * Узнать размер гамбургера
//      * @returns {String} - размер гамбургера
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//      */
//     get size() {
//         return this._size;
//     }
  
//     /**
//      * Узнать начинку гамбургера
//      * @returns {String} - начинка гамбургера
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//      */
//     get stuffing() {
//         return this._stuffing;
//     }
  
//     /**
//      * Узнать цену гамбургера
//      * @returns {Number} - Цена в деньгах
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//      */
//     get calculatePrice() {
//         let price = Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price;
//         if(this._toppings.length > 0) {
//             price += this._toppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].price, 0);
//         }
//         return price;
//     }
  
//     /**
//      * Узнать калорийность
//      * @returns {Number} - Калорийность в калориях
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//      */
//     get calculateCalories() {
//         let cal = Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
//         if(this._toppings.length > 0) {
//             cal += this._toppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].calories, 0);
//         }
//         return cal;
//     }
//   }
  
//   /*
//     Размеры, виды добавок и начинок объявите как статические поля класса.
//     Добавьте отсутсвующие поля по аналогии с примером.
//   */
//   Hamburger.SIZE_SMALL = 'SIZE_SMALL';
//   Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  
//   Hamburger.SIZES = {
//     [Hamburger.SIZE_SMALL]: {
//       price: 30,
//       calories: 50,
//     },
//     [Hamburger.SIZE_LARGE]: {
//         price: 50,
//         calories: 100,
//     },
//   };
  
//   Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
//   Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
//   Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
  
//   Hamburger.STUFFINGS = {
//     [Hamburger.STUFFING_CHEESE]: {
//       price: 15,
//       calories: 20,
//     },
//     [Hamburger.STUFFING_SALAD]: {
//         price: 20,
//         calories: 5,
//     },
//     [Hamburger.STUFFING_MEAT]: {
//         price: 35,
//         calories: 15,
//     },
//   };
  
//   Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
//   Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  
//   Hamburger.TOPPINGS = {
//     [Hamburger.TOPPING_SPICE]: {
//       price: 10,
//       calories: 0,
//     },
//     [Hamburger.TOPPING_SAUCE]: {
//         price: 15,
//         calories: 5,
//     },
//   };
  
//   /* Вот как может выглядеть использование этого класса */
  
//   // Маленький гамбургер с начинкой из сыра
//   const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
//   // Добавка из приправы
//   hamburger.addTopping(Hamburger.TOPPING_SPICE);
  
//   // Спросим сколько там калорий
//   console.log("Calories: ", hamburger.calculateCalories);
  
//   // Сколько стоит?
//   console.log("Price: ", hamburger.calculatePrice);
  
//   // Я тут передумал и решил добавить еще соус
//   hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
//   // А сколько теперь стоит?
//   console.log("Price with sauce: ", hamburger.calculatePrice);
  
//   // Проверить, большой ли гамбургер?
//   console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false
  
//   // Убрать добавку
//   hamburger.removeTopping(Hamburger.TOPPING_SPICE);
  
//   // Смотрим сколько добавок
//   console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1