async function getPosts(){
  try {
    const urls = [
      `https://jsonplaceholder.typicode.com/posts/1`,
      `https://jsonplaceholder.typicode.com/posts/2`,
      `https://jsonplaceholder.typicode.com/posts/3`,
      `https://jsonplaceholder.typicode.com/posts/4`,
      `https://jsonplaceholder.typicode.com/posts/5`,
      `https://jsonplaceholder.typicode.com/posts/6`,
      `https://jsonplaceholder.typicode.com/posts/7`,
      `https://jsonplaceholder.typicode.com/posts/8`,
      `https://jsonplaceholder.typicode.com/posts/9`,
      `https://jsonplaceholder.typicode.com/posts/10`
    ]

    const responses = await Promise.all(urls.map(url => fetch(url)));
    const posts = await Promise.all(responses.map(post => post.json()));
    console.log(posts);
  } catch (err){
    console.log('something went wrong: ', err)
  }
}
getPosts();