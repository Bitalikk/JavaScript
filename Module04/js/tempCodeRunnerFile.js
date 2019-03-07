function getNum(n) {
    let num = 0;
    let i = 0;
    do {
        if(n % 2 === 0) {
            console.log(`${n} / 2 = ${n / 2}`);
            n = n / 2;
            } else {
            console.log(`${n} * 3 + 1 = ${n * 3 + 1}`);
            n = n * 3 + 1;
        }
        i++;
        if(n > num) {
            num = n;}
    } while (n !== 1);
    console.log(n);
    console.log(i);
    console.log(num);
}
getNum(50);