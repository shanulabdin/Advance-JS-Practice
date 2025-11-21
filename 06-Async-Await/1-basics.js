async function myFunc(){
  return 10;
}
myFunc().then(result => console.log(result));

async function getNumber() {
  let result = await Promise.resolve(20);
  console.log(result); // 20
}

getNumber();
