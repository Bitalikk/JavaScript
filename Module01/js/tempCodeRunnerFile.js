const ask =  Number(prompt('Введите свой стаж'));
console.log(typeof(ask));

if(ask >= 0 && ask < 3) {
  console.log('Надбавка за стаж 0%');
} else if(ask >= 3 && ask < 10) {
  console.log('Надбавка за стаж 10%');
} else if(ask >= 10 && ask < 20) {
  console.log('Надбавка за стаж 20%');
} else if(ask >= 20) {
  console.log('Надбавка за стаж 25%');
}else {
  console.log('Некорректный ввод');
}