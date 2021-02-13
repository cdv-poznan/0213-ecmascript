/* SPREAD SYNTAX */

const numbers = [1, 2, 3, 4, 5];

function sum(a, b, c, d) {
  console.log(d);
  return a + b + c;
}

// ...number;

console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

// const concatenated = first.concat(second);
// const concatenated = [first[0], first[1], first[2], second[0], second[1], second[2]];
const concatenated = [...first, ...second, ...third];

console.log(concatenated);

const person = { name: 'Adrian', lastname: 'Juszczak' };
const company = { nip: '0001', regon: '3333' };

const entity = { ...person, ...company };

console.log(entity);

const a1 = [4, 5, 6];

const a2 = [...a1];

/* REST SYNTAX */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [n1, n2, ...rest] = array;

console.log(array);
console.log(n1, n2);
console.log(rest);

const [, , n3, , n5, ...other] = array;

console.log(n3, n5, other);

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

const {b, c, ...remaining} = obj;

console.log(obj);
console.log(remaining);
