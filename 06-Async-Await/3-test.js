const showPosts = document.querySelector('.showPosts');
const getPostsBtn = document.querySelector('.getPostsBtn');

async function getPosts(){
  const url = `https://jsonplaceholder.typicode.com/posts`

  showPosts.innerHTML = `<p>loading...</p>`;
  
  try{
    const res = await fetch(url);
    const posts = await res.json();
    
    setTimeout(() => {
      const tenPosts = posts.slice(0, 10);
      const postTitles = tenPosts.map(p => p.title);
      
      showPosts.innerHTML = `<p></p>`;
      
      for(let i = 0; i < postTitles.length; i++){
        const li = document.createElement('li');
        li.textContent = `
        ${postTitles[i]}
        `;
        showPosts.appendChild(li);
      }
    }, 1000);
  } catch (err) {
    showPosts.innerHTML = `<p>Something went wrong: ${err}</p>`
    console.log('Something went wrong: ', err);
  }
}
getPostsBtn.addEventListener('click', () => {
  getPosts();
});