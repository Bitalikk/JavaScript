'use strict';

const ourGroup = [];

// Конструктор студента через оператор new
// getSlogan -- девиз, метод нашего обьекта возвращает наш слоган в alert


const Student = function(name, birthday, slogan) {
    this.name = name;    // Передаем каждому ключу значение их параметров
    this.birthday = birthday;
    this.slogan = slogan;
    this.getSlogan = function() {
        alert(`${this.slogan}`);
    };
};

const newStudent = new Student('John', '02.08.2019', 'Winter is coming!');

console.log(newStudent); //  Выводит наш новый обьект студента
console.log(newStudent.name); //  выведет name студента
newStudent.getSlogan(); // вывод метода обьекта студента. Вернет alert c девизом