console.log('Metaprogramming');

class Person {
  sayHellog() {
    return `Hello ${this.name}!`;
  }
}

const person = {
  name: 'John',
};

const personPrototype = Reflect.getPrototypeOf(person);

console.log(person);
console.log(personPrototype);

Reflect.setPrototypeOf(person, Person.prototype);

console.log(person);

// Reflect.preventExtensions(person);

console.log(Reflect.isExtensible(person));

person.lastname = 'Doe';

console.log(person);

const nameDescriptor = Reflect.getOwnPropertyDescriptor(person, 'name');

console.log(nameDescriptor);

const lastNamePropDescriptor = {
  configurable: false,
  enumerable: true,
  value: 'Doe',
  writable: false,
};

Reflect.defineProperty(person, 'lastname', lastNamePropDescriptor);

console.log(person);

const agePropDescriptor = {
  configurable: false,
  enumerable: false,
  get: function () {
    return Math.round(Math.random() * 40);
  },
  set: function () {
    throw new Error('Property "age" is read-only');
  },
};

Reflect.defineProperty(person, 'age', agePropDescriptor);

console.log(Reflect.has(person, 'name'));
console.log(Reflect.has(person, 'job'));

console.log(Reflect.get(person, 'name'));

const key = Symbol('personKey');
Reflect.set(person, key, 123);

console.log(Reflect.get(person, key));

console.log(Object.keys(person));
console.log(Reflect.ownKeys(person));

const handler = {
  get: function (target, name) {
    if (target[name] === undefined) {
      throw new Error(`There is no ${name} in this object`);
    }
    return target[name] + ' from Proxy';
  },
};

const proxy = new Proxy(person, handler);

console.log(person);
console.log(proxy);
