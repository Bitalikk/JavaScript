const DELAY = 1000;
const quantity = 100;


function processOrder(value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(value <= quantity) {
        resolve('Ваш заказ готов!');
      } else if(value > quantity) {
        resolve('К сожалению на складе не достаточно товаров!');
      } else {
        reject('Некорректный ввод!');
      }
    }, 500);
  });
  return promise;
}
// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder("lorem")
  .then(console.log)
  .catch(console.log);