/* Array */

const array1 = [1, 2];
const array2 = new Array();

console.log(array1);

// Array.from();

/* Map */

const map = new Map();

const keyObj = { hello: 'World' };

/*
map.set(1, 'one');
map.set('second', 2);
map.set(keyObj, 3);
*/

map.set(1, 'one').set('second', { name: 'John' }).set(keyObj, 3);

console.log(map);

console.log(map.size);

const value = map.get(keyObj);
console.log(value);

console.log(map.has(1));
console.log(map.has(keyObj));

console.log(map.has(8));
console.log(map.has('hello'));

// map.delete('second');

map.forEach((value, key) => console.log(key, value));

map.entries();
map.keys();
map.values();

/* Set */

const set = new Set();

const objHW = { hello: 'World' };

set.add(1);
set.add(2);
set.add('Hello!');
set.add(objHW);

set.add(1);
set.add('Hello!');
set.add(objHW);

// set.delete(1);
// set.delete(objHW);

console.log(set);
console.log(set.size);

console.clear();

set.forEach((key, value) => console.log(key, value));

// set.clear();

set.entries();
set.keys();
set.values();

/* Serializacja */
var serialized = JSON.stringify(Array.from(map));
var newMap = new Map(JSON.parse(serialized));

var newSet = new Set(JSON.parse(JSON.stringify(Array.from(set))))
