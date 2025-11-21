// 1
async function myFunc(){
  return 10;
}
myFunc().then(result => console.log(result));

// 2
async function getNumber() {
  let result = await Promise.resolve(20);
  console.log(result); // 20
}

getNumber();

// 3
async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();
  console.log(user);
}
getUser();

// 4
async function loadData() {
  try {
    const res = await fetch('ahskdjhakjshd.com')
    const data = await res.json();
  } catch (err){
    console.log('Something Went Wrong:', err)
  }
}
loadData();