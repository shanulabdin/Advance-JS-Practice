// level 2
// 1
const chainPromise = Promise.resolve(10);

chainPromise.then(value => {
  const double = value * 2;
  return double;
}).then(final => {
  console.log("Final value:", final);
})

// 2
