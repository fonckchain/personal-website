// let name = 'Fonck';
// let age = [25, 30];
// let person = {
//    name: 'Lilia',
//    age: 28
// };
// console.log(person);
// console.log(age[1]);

 function greet (name) {
     console.log("I'm gonna visit your aussie ass once $GME pops " + name + " , I hope you're ready");
 }

// function MOASS(shares) {
//     return shares * 1181561516548191515651618948498;
// }

// let shares = MOASS(2);
// console.log(' 2 shares sold for $' + MOASS(2));

let shares = 3;
let loan = 2;
let price = 40;

let x = shares;
x = x + 5;
x += 5;

console.log(shares * price);
console.log(shares - loan);
console.log(shares ** loan);
console.log(shares % loan);
console.log(loan + shares * price);
console.log(shares > loan);

let type = shares > 3 ? 'whale' : 'fish';
console.log(type);

// for (let i = 1; i <= shares; i++)
// console.log(greet('Sgnt'));

let i = 1;
while (i <= shares) {
console.log(greet('Sgnt'));
i++;
}