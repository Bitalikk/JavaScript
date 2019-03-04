'use strict';
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
    this.getCustomerMoney = function(value) {
        this.customerMoney = value;
    };
    this.countTotalPrice = function(order) {
        let show;
        let summ = 0;
        for(let key in order) {
            show = order[key] * productDatabase[key];
            summ += show;
        }
        return summ;
    };
    this.countChange = function(totalPrice) {
        if(this.customerMoney <= totalPrice) {
            return this.customerMoney - totalPrice;
        } else {
            return null;
        }
    };
  }
  
  
  /* Пример использования */
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
  const change = mango.countChange();
  
  // Проверяем что нам вернул countChange
  console.log(change); // 190