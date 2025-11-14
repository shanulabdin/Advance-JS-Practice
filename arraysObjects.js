function sumArray(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum; 
}
console.log(sumArray([1, 2, 3, 4])); // 10

// short version
function shortSumArray(arr){
  const sum = arr.reduce((acc, crr) => acc += crr, 0);
  return sum;
}
console.log(shortSumArray([1, 2, 3, 4])); // 10

