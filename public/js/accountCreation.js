const accountCreation = async (event) => {
    event.preventDefault();

    // Gather the data from the form elements on the page
    const name = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users/newuser', {
            method: 'Post',
            body: JSON.stringify({ name,email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('YOO Bros Your Account Creation has failed')
        }
    }
};


document.addEventListener('submit', newAccount)