/* Promise */

function getData() {
  const requests = [
    fetch('https://api.github.com/users/juszczak'),
    fetch('https://api.github.com/users/imegoff'),
    fetch('https://api.github.com/users/cusspvz'),
  ];

  // Promise.all(requests).then(responses => {
  //   console.log(responses);
  // });

  Promise.race(requests).then(responses => {
    console.log(responses);
  });
}

getData();

function getAsyncData0() {
  fetch('https://api.github.com/users/juszczak123123123')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    }).catch((error) => {
      console.log('error occured', error)
    })
}

async function getAsyncData() {
  try {
    const response = await fetch('https://api.github.com/users/juszczak123123123');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('error occured', error);
  }
}

getAsyncData0();
getAsyncData();
