// SumArray 
// 1
function sumArray(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, -5, 3]));

// 2
console.log(sumArray([]));
console.log(sumArray([5]));

// 3
console.log(sumArray([0, 0, 0]));
console.log(sumArray([0, 1, 2, 3]));

// 4
const list = [
  [1, 2],
  [5, 5, 5],
  [10, -3, 2]
];

console.log(sumArray(list[0]));
console.log(sumArray(list[1]));
console.log(sumArray(list[2]));

// 5 - sumArray without a for loop
// const array = [1, 2, 3, 4];
// const sumArrayMethod = array.reduce((acc, curr) => acc + curr, 0);
// console.log('sumArrayMethod:', sumArrayMethod)

function sumArrayMethod(array){
  return array.reduce((acc, curr) => acc + curr, 0);
}
console.log('sumArrayMethod:', sumArrayMethod([1, 2, 3, 4]))