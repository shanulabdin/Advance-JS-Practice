// 1
const delayedPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello after 1 second');
  }, 1000)
})

delayedPromise.then(message => {
  console.log(message);
})

// 2
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

// 3
const arrayPromise = new Promise((resolve => {
  resolve([1, 2, 3])
}));

arrayPromise.then(array => {
  console.log(array.length)
  
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  console.log(sum)
})

// 4
const rejectPromise = Promise.reject('Oops, error');

rejectPromise.catch(message => {
  console.error("Caught an error:", message)
});