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

// level 3 - q 2
function checkAge(age){
  return new Promise((resolve, reject) => {
    if(age >= 18){
      resolve('You are an Adult');
    }else{
      reject('You are Underage');
    }
  })
}
checkAge(15).then(message => {
  console.log(message);
}).catch(error => {
  console.log(error);
})

// level 3 - q 3
function add(a, b){
  return a + b;
}
const resultPromise = Promise.resolve(add(2, 3));
resultPromise.then(value => {
  console.log('result is: ', value);
})

// level 3 - q 4
const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve('first');
  }, 1000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('second');
  }, 2000);
});

Promise.all([p1, p2]).then(value => {
  console.log(value);
})