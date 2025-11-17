// flatten
function flatten(arr){
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i]) === true){
      for(let j = 0; j < arr[i].length; j++){
        newArray.push(arr[i][j])
      };
    } else {newArray.push(arr[i])}
  }
  return newArray;
}

console.log(flatten([1, [2, 3], [4], 5]));

const nested = [1, [2, 3], [4], 5];
console.log(Array.isArray(nested[3]))