document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const usernameRegex = /^[A-Z][a-zA-Z0-9]*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else if (!usernameRegex.test(username)) {
        errorMessage.textContent = 'Username must start with a capital letter.';
    } else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
    } else if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must start with a capital letter, contain at least one special character, and include at least one number.';
    } else {
        errorMessage.textContent = '';
        alert('Login successful!');
    }
});

