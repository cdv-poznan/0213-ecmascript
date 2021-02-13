
const a = 'Hello!\n\n"123"';

const b = "World! '543' <<  \"asd\"    >> ";

console.log(a, b);

const template1 = `Hello World "123" '543'`;

console.log(template1);

const template2 = `Hello

World
  1
     3
        5
`;

console.log(template2);

const person = {name: 'Adrian', age: '34'}

const template3 = `
  Name: ${person.name}
  Age:  ${person.age}
  ${123}

`

console.log(template3);

function format(first, last) {
  return `
    Name:     ${first}
    Lastname: ${last}
  `;

  return '\n    Name:' + first + '\n    Lastname: ' + last + '\n  ';

}

console.log(format('Adrian', 'Juszczak'));
console.log(format('John', 'Doe'));


function getElementClassname(width, heigh) {
  const desktop = 500;
  const long = 400;

  return `element ${ width > desktop ? `${ heigh > long ? 'long' : 'short' }` : 'mobile' }`;
}

console.log(getElementClassname(200, 200));
console.log(getElementClassname(300, 300));
console.log(getElementClassname(600, 100));
