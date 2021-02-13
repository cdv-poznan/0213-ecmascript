
const boolean1 = Boolean('asd');
const number1 = Number('123');
const string1 = String(false);

const symbol1 = Symbol('symbolX');
const symbol2 = Symbol('symbolX');

console.log(boolean1, number1, string1, symbol1, symbol2);

console.log(symbol1 === symbol2);

console.log(typeof boolean1);
console.log(typeof symbol1);

console.log(symbol1 === symbol1);

const keySymbol = Symbol('KEY');

const obj = {
  a: 1,
  1: 2,
  [Symbol('key')]: 3,
  [keySymbol]: 0,
}

console.log(obj[keySymbol]);

obj[Symbol('key')] = 4;
obj['a'] = 5;

obj[Symbol('key')] = 8;

obj[keySymbol] = 1;

console.log(obj[keySymbol]);


// Typ Symbol nie może być konwertowany do innych typów
// console.log('' + keySymbol);
// console.log(1 * keySymbol);
console.log(`${keySymbol.toString()}`);

console.clear();

const obj3 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol()]: 4,
  [Symbol()]: 5,
  [0]: 0,
  [6]: 6
}

console.log(obj3);
console.log(Object.keys(obj3));
