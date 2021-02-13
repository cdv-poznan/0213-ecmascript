class Person {
  static counter = 0;
  #age;

  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.#age = age;
    Person.counter++;
  }

  get fullName() {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(fullName) {
    const [name, lastname] = fullName.split(' ');
    this.name = name;
    this.lastname = lastname;
  }

  static showCounter() {
    console.log(Person.counter);
  }

  showPersonAge() {
    console.log(this.#age);
  }
}

const p1 = new Person('John', 'Doe', 23);
const p2 = new Person('John', '2', 34);
const p3 = new Person('John', '3', 45);

console.log(p1);


class Student extends Person {
  constructor(name, lastname, age, indexNumber) {
    super(name, lastname, age);
    this.indexNumber = indexNumber;
  }

  enrollToCourse(courseId) {
    console.log('enrolling to', courseId);
  }
}

const s1 = new Student('John', 'Doe', 23, 001);
const s2 = new Student('John', '2', 45, 002);
const s3 = new Student('John', '3', 56, 003);
