document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('toggleThemeBtn');
    const blogList = document.getElementById('blogList');
  
    // Check localStorage for existing blog posts
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    // Function to render blog posts
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
  
    // Initial rendering of blog posts
    renderBlogPosts();
  
    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
    });
  });