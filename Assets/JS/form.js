document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
  
    blogForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form values
      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      // Check if any field is empty
      if (!username || !title || !content) {
        alert('Please complete all fields.');
        return;
      }
  
      // Store data in localStorage
      const postData = {
        username,
        title,
        content
      };
      localStorage.setItem('blogPost', JSON.stringify(postData));
  
      // Redirect to posts page (for demonstration, redirecting to a new page)
      window.location.href = 'blog.html';
    });
  });