class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }
  
    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
      if(!this._toppings.includes(topping)) {
        this._toppings.push(topping);
      }
    }
  
    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
      if(this._toppings.includes(topping)) {
        this._toppings.splice(this._toppings.indexOf(topping), 1);
      }
    }
  
    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    getToppings() {
      return this._toppings;
    }
    get toppings() {
      return this._toppings;
    }
  
    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    getSize() {
      return this._size;
    }
    get size() {
      return this._size;
    }
  
    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */
    getStuffing() {
      return this._stuffing;
    }
    get stuffing() {
      return this._stuffing;
    }
  
    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    calculatePrice() {
      let summ = Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price;
      let toppingSumm;
      if(this._toppings.length > 0) {
        toppingSumm = this._toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].price, 0);
        return summ += toppingSumm;
      } else {
        return summ;
      }
    }
    get price() {
      let summ = Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price;
      let toppingSumm;
      if(this._toppings.length > 0) {
        toppingSumm = this._toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].price, 0);
        return summ += toppingSumm;
      } else {
        return summ;
      }
    }
  
    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
    calculateCalories() {
      let summ = Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
      let toppingSumm;
      if(this._toppings.length > 0) {
        toppingSumm = this._toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].calories, 0);
        return summ += toppingSumm;
      } else {
        return summ;
      }
    }
    get calories() {
      let summ = Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
      let toppingSumm;
      if(this._toppings.length > 0) {
        toppingSumm = this._toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].calories, 0);
        return summ += toppingSumm;
      } else {
        return summ;
      }
    }
  }
  
  /*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    },
  };
  
  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
  Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
  
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 35,
      calories: 15,
    },
  };
  
  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  
  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
    }
  };
  
  /* Вот как может выглядеть использование этого класса */
  
  // Маленький гамбургер с начинкой из сыра
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

  // Добавка из приправы
  hamburger.addTopping(Hamburger.TOPPING_SPICE);


  // Спросим сколько там калорий
  console.log("Calories: ", hamburger.calculateCalories());
  
  // Сколько стоит?
  console.log("Price: ", hamburger.calculatePrice());
  console.log(hamburger.price);
  
  // Я тут передумал и решил добавить еще соус
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  // А сколько теперь стоит?
  console.log("Price with sauce: ", hamburger.calculatePrice());
  
  // Проверить, большой ли гамбургер?
  console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
  
  // Убрать добавку
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);
  
  // Смотрим сколько добавок
  console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1