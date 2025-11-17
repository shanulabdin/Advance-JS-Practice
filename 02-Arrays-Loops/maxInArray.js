// maxInArray
// 1
function maxInArray(array){
  let curr = array[0]
  for(let i = 1; i < array.length; i++){
    if(array[i] > curr){
      curr = array[i];
    }
  }
  return curr;
}
console.log(maxInArray([1, 5, 2, 9, 3]));