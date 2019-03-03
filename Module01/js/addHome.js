'use strict';

const sharm = 15;
const hurgada = 25;
const taba = 6;

let ask = prompt('Введите необходимое колличество мест');

if(Number.isInteger(Number(ask)) && ask > 0) {
    let city;
    let agree;
    if(ask <= taba) {
        city = 'Таба';
        agree = confirm(`Есть место в группе Таба! Вы согласны?`);
    } else if( ask <= sharm) {
        city = 'Шарм';
        agree = confirm(`Есть место в группе Шарм! Вы согласны?`);
    } else if(ask <= hurgada) {
        city = 'Хургада';
        agree = confirm(`Есть место в группе Хургада! Вы согласны?`);
    } else {
        alert('Извините, столько мест нет ни в одной группе!');
    }
    if(agree) {
        alert(`Приятного путешествия в группе ${city}`);
    } else {
        alert('Нам очень жаль, приходите еще');
    }
} else if(ask !== null) {
    alert('Ошибка ввода');
}else {
    alert('Нам очень жаль, приходите еще');
}