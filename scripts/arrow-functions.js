function add1(a, b) {
  return a + b;
}

console.log(add1(4, 6));

const add2 = function(a, b) {
  return a + b;
}

console.log(add2(4, 6));

const add3 = (a, b) => {
  return a + b;
}

console.log(add3(4, 6));

const add4 = (a, b) => a + b;

console.log(add4(4, 6));

/*----------------*/

const double1 = (n) => {
  return n * 2;
}

const double2 = (n) => n * 2;

const double3 = n => n * 2;

function double4(n) {
  return n * 2;
}

/* ----------------- */

const array1 = [1, 2, 3, 4];

console.log(array1.map(function(n) {
  return n * 2;
}));

console.log(array1.map(n => n * 2));

/* ------------ */

function Person1(name) {
  this.name = name;

  this.sayHello = function() {
    console.log(this);
  }

  this.sayGoodby = () => {
    console.log(this);
  }
}

const p1 = new Person1('P1');
const p2 = new Person1('P2');

p1.sayHello.bind(p1).call(p2);
p1.sayGoodby.call(p2);

function Mappers(factor) {
  this.factor = factor;

  this.multiply = (value) => value * this.factor;
}

const mappers = new Mappers(5);

const values = [1, 2, 3, 4, 5].map(mappers.multiply);

console.log(values);

/* ----------- */

function printArgs() {
  console.log(arguments);
}

/* BRAK DOSTĘPU DO `arguments` */
// const printArgsArrow = () => {
//   console.log(arguments);
// }

console.log(printArgs(1, 2, 4, 5));
// console.log(printArgsArrow(1, 2, 4, 5));

/* Arrow functions nie mogą być konstruktorami */
// const SomeClass = (name) => {
//   this.name = name;
// }

function SomeClass(name) {
  this.name = name;
}

const sc1 = new SomeClass('TEST');
