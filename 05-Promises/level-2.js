// level 2
// 1
const chainPromise = new Promise(resolve => {
  const num = 10;
  resolve(num);
});

chainPromise.then(value => {
  const double = value * 2;
  return double;
}).then(final => {
  console.log("Final value:", final);
})
