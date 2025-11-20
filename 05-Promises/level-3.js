// level 3 - q 1
// 1st step
const finalyPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Done Loading.');
  }, 1500);
})

finalyPromise.then(message => {
  console.log(message);
  return message;
}).finally(() => {
  console.log('Promise finished success');
})

// 2nd step
const finalyPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Failed Loading.')
  }, 1500);
})

finalyPromise2.catch(message => {
  console.log(message);
  return message;
}).finally(() => {
  console.log('Promise finished fail');
})