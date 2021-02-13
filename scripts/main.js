// import { sayHello, someValue } from './module.js';
// import { pageTitle } from './about.js';
// import def from './default.js';

// sayHello();

// console.log(pageTitle);
// console.log(def);

async function loadAsyncModule() {
  const {someFunction} = await import('./some-script.js');

  someFunction();

  // const modulePromise = import('./some-script.js');
  // modulePromise.then(mod => {
  //   const {someFunction} = mod;
  //   console.log(mod);
  //   someFunction();
  // });
}

document.querySelector('#load-module').addEventListener('click', () => {
  loadAsyncModule();
});
