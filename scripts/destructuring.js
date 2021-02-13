const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, c] = array;

console.log(a);
console.log(b);
console.log(c);

const person = {
  name: 'Adrian',
  age: 12
};

const {name, age} = person;
// const name = person.name;
// const age = person.age;

console.log(name, age);
console.log(person);


const {length: helloLength} = "hello!";
const {length: worldLength} = "world!";

console.log(helloLength, worldLength);


function getName(person) {
  const {name = 'N/A'} = person;
  return name;
}

console.log(getName({name: 'Adrian'}));
console.log(getName({}));


let first = 1;
let second = 2;

console.log(first, second);

[first, second] = [second, first];

console.log(first, second);
