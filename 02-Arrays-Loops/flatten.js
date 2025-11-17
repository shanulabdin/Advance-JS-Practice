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
console.log(flatten([1, 2, 3]));
console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([1, [], 2, [3, 4], []]));

// flatten using flat method
const flatMethod = (arr) => {
  return arr.flat();
};
console.log(flatMethod([1, [2, 3], [4], 5]));
console.log(flatMethod([1, 2, 3]));
console.log(flatMethod([[1, 2], [3, 4]]));
console.log(flatMethod([1, [], 2, [3, 4], []]));


// flatten using reduce method
const flatReduce = (array) => {
  return array.reduce((accumulator, currentValue) => {
    if(Array.isArray(currentValue) === true){
      accumulator.push(...currentValue);
    } else {accumulator.push(currentValue)}
    return accumulator;
  }, [])
}
console.log('flatReduce', flatReduce([1, [2, 3], [4], 5]));
console.log('flatReduce', flatReduce([1, 2, 3]));
console.log('flatReduce', flatReduce([[1, 2], [3, 4]]));
console.log('flatReduce', flatReduce([1, [], 2, [3, 4], []]));