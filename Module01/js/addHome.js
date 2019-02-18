let sharm = 15;
let hurgada = 25;
let taba = 6;

let place = prompt('Мест необходимо:');

if(place === null) {
    alert ('Нам очень жаль, приходите еще!');
}
else if(Number.isInteger(place) === false) {
    alert('Ошибка ввода');
}