
const person = {
  name: 'Adrian'
};

Object.freeze(person);

const a = 2;

console.log('hello!');

console.log(a);

let b = 2;

console.log(a);

console.log(person);

person.name = 'Ala';

console.log(person);

// person = {name: 'Ala'};

function fn1() {
  var a = 1;
  if (true) {
    var b = 2;
  }
  console.log(a, b);
}

let y = 7;

if (true) {
  let z = 8;
  console.log(z);
}

console.log(y);
// console.log(z);

console.log(x);

var x = 1;

console.log(x);

x = 2;

console.log(x);
