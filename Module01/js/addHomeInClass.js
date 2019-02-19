const sharm = 15;
const hurgada = 25;
const taba = 6;

let hotel = "";

const requiredPlaces = prompt('Введите количество мест');
if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
  if (+requiredPlaces <= sharm){
    if (confirm('хотите ли вы остаться в Sharm?')) {
      alert('добро пожаловать в Sharm');
    } else {

      alert ('Нам очень жаль, приходите еще!');
    }
  }
  else if (+requiredPlaces <= hurgada) {
    if (confirm('хотите ли вы остаться в Hurgada?')) {
      alert('добро пожаловать в Hurgada');
    } else {

      alert ('Нам очень жаль, приходите еще!');
    }
  }
  else if (+requiredPlaces <= taba) {
    if (confirm('хотите ли вы остаться в Taba?')) {
      alert('добро пожаловать в Taba');
    } else {

      alert ('Нам очень жаль, приходите еще!');
    }
  }

} else if (!requiredPlaces) {
  alert ('Нам очень жаль, приходите еще!')
}