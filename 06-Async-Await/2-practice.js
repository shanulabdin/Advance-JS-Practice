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

// ex 2
function run3(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function waitFunc() {
  await run3(1000);
  console.log('one');

  await run3(2000);
  console.log('two');

  await run3(1000);
  console.log('three')
}
waitFunc();

// 3
async function exercise3(){
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const post = await res.json();
    console.log(post);
    console.log(post.title);
    console.log(post.body);
  } catch(err) {
    console.log('Something Went wrong!', err)
  }
}
exercise3();

// ex 4
async function parallelOne(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const post = await res.json();
  return post;
}

async function parallelTwo() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  const post = await res.json();
  return post;
}

async function run4 (){
  const [post1, post2] = await Promise.all([
    parallelOne(),
    parallelTwo()
  ]);

  console.log('Post 1 title: ', post1.title)
  console.log('Post 2 title: ', post2.title)
}
run4();