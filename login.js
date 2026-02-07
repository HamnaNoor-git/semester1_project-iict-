// --- Vanilla JavaScript (js/script.js) ---

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the default form submission (page reload)
            event.preventDefault();

            // Simple client-side validation
            if (!emailInput.value || !passwordInput.value) {
                alert('Please enter both your email and password.');
                return; // Stop execution if validation fails
            }

            // In a real application, you would send this data to a server:
            // fetch('/api/login', {
            //     method: 'POST',
            //     body: JSON.stringify({ email: emailInput.value, password: passwordInput.value }),
            //     headers: { 'Content-Type': 'application/json' }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         window.location.href = 'index.html'; // Redirect to home on success
            //     } else {
            //         alert('Login failed: ' + data.message);
            //     }
            // })
            // .catch(error => console.error('Error:', error));


            // Placeholder for demonstration:
            console.log('Login attempt with:');
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordInput.value);
            alert('Login submitted! (See console for details. Redirecting to home...)');

            // Simulate a successful redirect after login
            // window.location.href = 'index.html'; 
        });
    }
});