// unique
function unique(arr){
  let uniqueArray = [];
  for(let i = 0; i < arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
console.log(unique([1, 2, 2, 3, 3, 3]));
console.log(unique(["a", "b", "a", "c", "b"]));
console.log(unique([1, "1", 1, 2, "2"]));
console.log(unique([]));
console.log(unique([5, 5, 5, 5, 5]));
console.log(unique([1, 2, 3]));

// method unique
const uniqueMethod = (arr) => [...new Set(arr)];

console.log(uniqueMethod([1, 2, 2, 3, 3, 3]));
console.log(uniqueMethod(["a", "b", "a", "c", "b"]));
console.log(uniqueMethod([1, "1", 1, 2, "2"]));
console.log(uniqueMethod([]));
console.log(uniqueMethod([5, 5, 5, 5, 5]));
console.log(uniqueMethod([1, 2, 3]));