const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    const blog_title = document.querySelector('#post-title').value.trim();
    const blog_content = document.querySelector('#post-content').value.trim();
}