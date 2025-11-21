async function getPosts(){
  const url = `https://jsonplaceholder.typicode.com/posts`

  const res = await fetch(url);
  const posts = await res.json();

  console.log(posts.slice(0, 10));
}
getPosts().catch(err => {
  console.log('Something went wrong: ', err)
});