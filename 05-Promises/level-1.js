const delayedPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello after 1 second');
  }, 1000)
})

delayedPromise.then(message => {
  console.log(message);
})