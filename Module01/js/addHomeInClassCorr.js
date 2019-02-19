//Проверить



const taba = 6;
const sharm = 15;
const hurgada = 25;

let hotel = "";

const requiredPlaces = prompt('Введите количество мест');
if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
  if (+requiredPlaces <= taba){
    hotel = "Taba";
  }
  else if (+requiredPlaces <= sharm) {
    hotel = "Sharm";
  }
  else if (+requiredPlaces <= hurgada) {
    hotel = "Hurgada";
  }
  if (hotel && confirm(`хотите ли вы остаться в ${hotel}?`)) {
    alert(`добро пожаловать в ${hotel}`);
  } else if(!hotel) {
    alert('Извините, столько мест нет ни в одной группе!');
  } else {
    alert ('Нам очень жаль, приходите еще!');
  }
} else if (!requiredPlaces) {
  alert ('Нам очень жаль, приходите еще!');
}