const obj1 = { 0 : 'a', 1 : 'b' };
const obj2 = { 2 : 'c', 3 : 'd', 0 : 'x' };

function mergeObj(obj1, obj2){
  let merged = {};

  Object.keys(obj1).forEach(key => {
    merged[key] = obj1[key];
  })
  Object.keys(obj2).forEach(key => {
    merged[key] = obj2[key];
  })

  return merged;
}
console.log(mergeObj(obj1, obj2));
