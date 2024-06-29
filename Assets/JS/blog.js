document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('toggleThemeBtn');
    const blogList = document.getElementById('blogList');
  
    // Check localStorage for existing blog posts
    const posts = JSON.parse(localStorage.getItem('blogPost')) || [];
  
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
      console.log(document.body.style.backgroundColor)
      // if(document.body.style.backgroundColor === "rgb(51, 51, 51)"){
      //   console.log("it is in dark mode")
      // }else{
      //   console.log("not workingn")
      // }
      // document.body.style.backgroundColor = "#333333"

    });
  });