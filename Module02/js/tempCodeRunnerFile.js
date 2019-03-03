const string = "May the force be with you";
let longestWord;

const newString = string.split(' ');
longestWord = newString[0];
    for(let i = 0; i < newString.length; i++) {
        if(i.length > longestWord[0].length) {
            longestWord = i;
        }
}




// console.log(newString); // 'force'
console.log(longestWord); // 'force'