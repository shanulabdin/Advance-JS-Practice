const firstPromise = new Promise((resolve, reject) => {
  const success = false;
  setTimeout(() => {
    if(success){
      resolve('done')
    } else{
      reject('Something went wrong')
    }
  }, 1000)
})

firstPromise.then(message => {
  console.log(message)
}).catch(message => {
  console.log(message)
})

const numberPromise = new Promise((resolve, reject) => {
  resolve(5);
});

numberPromise.then(value => {
  console.log(value * 5)
})