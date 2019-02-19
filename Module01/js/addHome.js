//Переделать




const taba = 6;
const sharm = 15;
const hurgada = 25;


const requirePlaces = prompt('Введите колличество мест:');

if(Number.isInteger(+requirePlaces)  && +requirePlaces) {
    if(requirePlaces <= sharm) {
        if(+requirePlaces <= taba) {
            if(confirm('Хотите ли вы остаться в Таба')) {
                alert('Добро пожаловать в Табу')
            } else {
                alert('Нам очень жаль, приходите еще');
                }
        } else if(confirm('Хотите ли вы остаться в Шарм')) {
            alert('Добро пожаловать в Шарм')
            } else {
            alert('Нам очень жаль, приходите еще');
            }
        } else if(+requirePlaces <= hurgada) 
        if(confirm('Хотите ли вы остаться в Хургаде')) {
            alert('Добро пожаловать в Хургаду')
        } else {
            alert('Нам очень жаль, приходите еще');
            }
        } 
 else if (!requirePlaces) {
    alert('Нам очень жаль, приходите еще!');
} else {
    alert('Извините, столько мест нет ни в одной группе')
}