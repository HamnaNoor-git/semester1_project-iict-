// --- Vanilla JavaScript (js/script.js) ---

document.addEventListener('DOMContentLoaded', () => {
    // --- Existing Login Page Logic (Keep this) ---
    const loginForm = document.querySelector('.login-form');
    // ... (rest of the login form logic if needed)

    // --- New Contact Page Logic ---
    const appointmentLink = document.querySelector('.appointment-link');

    if (appointmentLink) {
        appointmentLink.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the link from navigating immediately
            
            // In a real application, this would redirect to a booking form
            // or trigger a modal window.
            
            alert('Redirecting to the booking page for Dr. Hamna Noor...');
            console.log('User clicked "Book your appointment now"');
            
            // window.location.href = 'booking.html'; // Example redirect
        });
    }

});