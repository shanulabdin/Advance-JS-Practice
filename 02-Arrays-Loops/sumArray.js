// SumArray
// [1, 2, 3, 4] → 10
// [10, -5, 3] → 8

function sumArray(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, -5, 3]));

