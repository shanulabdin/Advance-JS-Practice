async function myFunc(){
  return 10;
}
myFunc().then(result => console.log(result));

async function myFunc(){
  let result = await Promise.resolve(10);
  console.log(result);
}
myFunc()