/* used to execute JavaScript code only after the HTML document has been completely loaded */
document.addEventListener('DOMContentLoaded', function() {
    
  /* captures 'themeToggleBtn' and 'blogList' from HTML and assigns them to variables for later use */ 
    const themeToggleBtn = document.getElementById('toggleThemeBtn');
    const blogList = document.getElementById('blogList');
  
    /* retrieves data from the local storage under the key 'blogPost', parses it as JSON, and assigns it to the variable 'posts' */
    const posts = JSON.parse(localStorage.getItem('blogPost')) || [];
  
    /* Function to render blog posts */
    function renderBlogPosts() {
      blogList.innerHTML = '';
      posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p class="author">By: ${post.username}</p>
        `;
        blogList.appendChild(postElement);
      });
    }
  
   /* calls out the renderBlogPosts function */
    renderBlogPosts();
   
  
    /* functionality of 'DARK/LIGHT toggle button using event */
    themeToggleBtn.addEventListener('click', function() {
       document.body.classList.toggle('dark-theme');
      console.log(document.body.style.backgroundColor)
    });
  });