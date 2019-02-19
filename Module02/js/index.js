'use strict'

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
// clients[3] = 'Alex';
// console.log(clients[3]);
// clients.length = 2;
// console.log(clients.length);
// console.log(clients);



// const massage = 'Welcome to Bahams!';
// console.log(massage.split(' '));



const clients = ['Mango', 'Poly', 'Ajax'];
console.log(clients.join(' '));

console.log(clients.indexOf('Poly'));
console.log(clients.indexOf('Monkong'));

console.log(clients.includes('Poly'));
console.log(clients.includes('Monkong'));


clients.push('Margo');
clients.unshift('Sergio');

console.log(clients);

clients.pop();
clients.shift();

console.log(clients);

const bests = clients.slice(0, 3);
console.log('bests', bests);

// clients.splice(0, 3)
// console.log (clients);

clients.splice(1, 0, 'Wass');
console.log(clients);