// ex 1
function waitOneSecond(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done!');
    }, 1000)
  })
}
waitOneSecond().then(response => {
  console.log(response)
});

async function run(){
  const result = await waitOneSecond();
  console.log(result);
}
run()

// practice
function waitTwoSeconds(){
  return new Promise(resolve => {
   setTimeout(() => {
    resolve('Done after 2 seconds');
   }, 2000); 
  })
}
waitTwoSeconds().then(response => {
  console.log(response);
});

async function run2(){
  let res = await waitTwoSeconds();
  console.log(res);
}
run2();