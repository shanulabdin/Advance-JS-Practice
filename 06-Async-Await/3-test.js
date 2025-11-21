const showPosts = document.querySelector('.showPosts');
const getPostsBtn = document.querySelector('.getPostsBtn');

async function getPosts(){
  const url = `https://jsonplaceholder.typicode.com/posts`
  getPostsBtn.disabled = true;
  showPosts.innerHTML = `<p>loading...</p>`;
  
  try{
    const res = await fetch(url);
    const posts = await res.json();
    
    const tenPosts = posts.slice(0, 10);
    
    showPosts.innerHTML = `<p></p>`;
    
    tenPosts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = 'Title: ' + post.title;

      const p = document.createElement('p');
      p.textContent = 'Body: ' + post.body;

      showPosts.appendChild(li);
      li.appendChild(p);
    })
  } catch (err) {
    showPosts.innerHTML = `<p>Something went wrong :(</p>`
    console.log('Something went wrong: ', err);
  } finally {
    getPostsBtn.disabled = false;
  }
}
getPostsBtn.addEventListener('click', () => {
  getPosts();
});