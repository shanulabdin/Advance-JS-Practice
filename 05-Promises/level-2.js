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
const chainPromise2 = Promise.resolve(3)

chainPromise2.then(value => {
  return value * 2;
}).then(() => {
  throw new Error("Something broke");
}).catch(error => {
    console.log(error);
});