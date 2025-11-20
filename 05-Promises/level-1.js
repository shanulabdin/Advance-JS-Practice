const delayedPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello after 1 second');
  }, 1000)
})

delayedPromise.then(message => {
  console.log(message);
})

const randomPromise = new Promise((resolve, reject) => {
  const randomNum = Math.random();

  if(randomNum > 0.5){
    resolve('Success!');
  } else {
    reject('Failed!');
  }
});

randomPromise.then(message => {
  console.log(message);
}).catch(error => {
  console.error(error);
});
