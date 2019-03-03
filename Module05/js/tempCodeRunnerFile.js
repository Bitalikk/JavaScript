const numbers = [5, 16, 28, 37, 49, 56];
const numbersNew = [];


const map = function(array, transfer) {
    for(const el of numbers) {
        const elNew = el * 27.4;
        console.log(elNew);
        numbersNew.push(elNew);
    }
};
map(numbers);
console.log(numbersNew);