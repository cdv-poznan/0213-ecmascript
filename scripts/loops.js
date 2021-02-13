/* for */

const array1 = [1, 2, 3, 4, 5];
const obj1 = { a: 1, b: 2, c: 3, d: 4, [Symbol()]: 5, [0]: 6 };

for (let i = 0; i < array1.length; i++) {
  console.log(i, array1[i]);
}

const obj1keys = Object.keys(obj1);
for (let i = 0; i < obj1keys.length; i++) {
  console.log(i, obj1keys[i], obj1[obj1keys[i]]);
}

/* for in */

for (let key in obj1) {
  console.log(key, obj1[key]);
}

// nie powinno się iterować pętlą for in po tablicach
// for (let key in array1) {
//   console.log(typeof key);
// }


/* for of */

for (let item of array1) {
  console.log(item);
}

const set = new Set();
const objHW = { hello: 'World' };
set.add(1);
set.add(2);
set.add('Hello!');
set.add(objHW);


for (let item of set) {
  console.log(item);
}

const map = new Map();
const keyObj = { hello: 'World' };
map.set(1, 'one').set('second', { name: 'John' }).set(keyObj, 3);

for (let element of map) {
  console.log(typeof element, Array.isArray(element), element);
}

console.clear();

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}
