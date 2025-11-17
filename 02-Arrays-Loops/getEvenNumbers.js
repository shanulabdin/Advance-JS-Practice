// getEvenNumbers
// 1
function getEvenNumbers(arr){
  let evenNums = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evenNums.push(arr[i]);
    }
  }
  return evenNums;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));