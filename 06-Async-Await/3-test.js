async function getPosts(){
  const url = `https://jsonplaceholder.typicode.com/posts`

  try{
    const res = await fetch(url);
    const posts = await res.json();

    console.log(posts.slice(0, 10));
  } catch (err) {
    console.log('Something went wrong: ', err);
  }
}
getPosts();