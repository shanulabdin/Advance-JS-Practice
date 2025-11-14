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


function getEvenNumbers(arr){
  let evenNums = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evenNums.push(arr[i]);
    }
  }
  return evenNums;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

function unique(arr){
  let uniqueArray = [];

  for(let i = 0; i< arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
console.log(unique([1, 2, 2, 3, 3, 3])); // [1, 2, 3]