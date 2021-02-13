const name = 'Adrian';
const age = 123;

const person = {
  name: name,
  age: age,
};

console.log(person);

const person1 = {
  name,
  age,
};

console.log(person1);

function createObject(name, data) {
  return { name: name, data: data };
}

const createObject2 = (name, data) => {
  return {
    name,
    data,
  };
};

console.log(createObject2('John2', []));

const createObject3 = (name, data) => ({ name, data });

console.log(createObject3('John3', []));

console.log(
  ['a', 'b', 'c'].map(function (letter, index) {
    return {
      letter: letter,
      index: index,
    };
  }),
);

console.log(['a', 'b', 'c'].map((letter, index) => ({ letter, index })));



function sayHello(person = {name: 'Stranger'}) {
  console.log(`Hello ${person.name}!`);
}

sayHello();
sayHello(person1);
