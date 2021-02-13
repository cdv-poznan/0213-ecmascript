/** generatory **/

function* testGenerator() {
  yield 'Hello!';
  yield 'World!';
}

const test = testGenerator();

// console.log(test);

for (let element of testGenerator()) {
  console.log(element);
}


function* naturalNumbers(from) {
  while (true) {
    yield from++;
  }
}

for (let num of naturalNumbers(0)) {
  if (num > 13) break;
  console.log(num);
}
