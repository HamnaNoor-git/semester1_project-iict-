document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting normally

        let isValid = true;
        
        // Simple Email Validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            isValid = false;
        }

        // Simple Phone Number Validation (checks for minimum 8 digits)
        const phoneValue = phoneInput.value.replace(/\D/g, ''); // Remove all non-digit characters
        if (phoneValue.length < 8) {
            alert('Please enter a valid phone number (at least 8 digits).');
            phoneInput.focus();
            isValid = false;
        }

        // If validation passes, simulate submission
        if (isValid) {
            // In a real application, you would send data to the server here using Fetch API.
            alert('Thank you for your message! We will get back to you soon. (Simulated)');
            contactForm.reset();
        }
    });
});