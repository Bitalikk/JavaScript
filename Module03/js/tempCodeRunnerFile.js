const mass = [1, [2, 3, [4, [5]], 6], [7, [8, [9]]], 10];

const newMass = function self (arr) {
  let newArr = [];
  
  for(let el of arr) {
    const isArr = Array.isArray(el);
    if(isArr) {
      newArr = newArr.concat(self(el));
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};
console.log(newMass(mass));