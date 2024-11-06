// Task 6: Form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        document.getElementById('feedback').textContent = 'Please fill in all fields.';
        document.getElementById('feedback').style.color = 'red';
    } else {
        document.getElementById('feedback').textContent = 'Thank you for your message!';
        document.getElementById('feedback').style.color = 'green';

        // Reset form fields
        document.getElementById('contactForm').reset();
    }
});