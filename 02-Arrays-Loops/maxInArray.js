// maxInArray
// 1
function maxInArray(array){
  if(array[0] === undefined){
    return null;
  }
  let curr = array[0]
  for(let i = 1; i < array.length; i++){
    if(array[i] > curr){
      curr = array[i];
    }
  }
  return curr;
}
console.log(maxInArray([1, 5, 2, 9, 3]));
console.log(maxInArray([-10, -5, -20]));
console.log(maxInArray([3, 7, 7, 2]));
console.log(maxInArray([]));