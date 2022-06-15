const loginFormHandler = async (e) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    e.preventDefault();
    const name = document.querySelector('').value.trim();
    const ingredients = document.querySelector('').value.trim();
    const steps = document.querySelector('').value.trim();
    const meal = document.querySelector('').value.trim();

    if (name && ingredients && steps && meal) {
        const response = await fetch('/api/posts/newpost', {
            method: 'POST',
            body: JSON.stringify({ name, ingredients, steps, meal }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to Post')
        }
    }
};
