/* MATH */

console.log(`
  Math.sign(123): ${Math.sign(123)}
  Math.sign(-23): ${Math.sign(-23)}
  ${Math.sign(-0)}
  ${Math.sign(0)}
`);

console.log(`
  ${Math.trunc(123.123)}
  ${Math.trunc(123.999)}
`);

console.log(`
  ${Math.log10(100)}
`);

console.log(`
  Math.hypot(3, 4): ${Math.hypot(3, 4)}
`);

[1, -2, -3, 4, -4, 5].map(n => Math.sign(n));

// [1, -2, -3, 4, -4, 5].map(n => {
//   if (n > 0) {
//   }
// });

/* NUMBERS */

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.123));

console.log(`
    123
  ${isNaN(123)}
  ${Number.isNaN(123)}

    'asd'

  ${typeof 'asd'}
  ${isNaN('asd')}
  ${Number.isNaN('asd')}
`);

console.log(Number.isFinite(123 / 0));

/* STRINGS */

console.log('hello'.startsWith('hell'));
console.log('hello'.startsWith('asd'));

console.log('hello'.endsWith('llo'));
console.log('hello'.endsWith('asd'));

console.log('hello'.includes('ll'));
console.log('hello'.includes('xx'));

console.log('hello '.repeat(3));
console.log('hello '.repeat(100));


/** ARRAYS **/

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array.includes(3, 4));
console.log(array.includes(9));

console.clear();

/** OBJECTS **/

const person = {name: 'John', lastname: 'Doe', age: 44};

console.log(person);

console.log(Object.keys(person));

console.log(Object.values(person));

const array2 = [6,5,6,7];

console.log(array2);
console.log(Object.keys(array2));
console.log(Object.keys(array2).map(n => typeof n));
