const showPosts = document.querySelector('.showPosts');
const getPostsBtn = document.querySelector('.getPostsBtn');

async function getPosts(){
  const url = `https://jsonplaceholder.typicode.com/posts`

  try{
    const res = await fetch(url);
    const posts = await res.json();

    const tenPosts = posts.slice(0, 10);
    const postTitles = tenPosts.map(p => p.title);
    
    for(let i = 0; i < postTitles.length; i++){
      const li = document.createElement('li');
      li.textContent = `
        ${postTitles[i]}
      `;
      showPosts.appendChild(li);
    }
    
  } catch (err) {
    console.log('Something went wrong: ', err);
  }
}
getPostsBtn.addEventListener('click', () => getPosts());