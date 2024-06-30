/* attaches an event listener to the DOMContentLoaded event of the document object */
document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

       /* retrieves stored blog post data from localStorage and assigns it to the variable 'posts' */
    const posts = JSON.parse(localStorage.getItem('blogPost')) || [];
  
    /* makes submit button functional */
    blogForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      /* gets form values */
      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      /* if the field is empty then an alert will tell user to complete the fields */
      if (!username || !title || !content) {
        alert('Please complete all fields.');
        return;
      }
      
      /* creates 'postData' object */
      const postData = {
        username,
        title,
        content
      };

      /* pushes postData object to the posts array and then stored in localstorage */
      posts.push(postData)
      localStorage.setItem('blogPost', JSON.stringify(posts));
  
      /* redirects to blog page */
      window.location.href = 'blog.html';
    });
  });