const num = '754514';
const first = Number(num[0]) + Number(num[1]) + Number(num[2]);
const second = Number(num[num.length - 1]) + Number(num[num.length - 2]) + Number(num[num.length - 3]);
if(first === second) {
    console.log('Yes');
} else {
    console.log('No');
}