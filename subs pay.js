document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Populate Amount from URL parameters (if linked from Subscription page)
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan'); // e.g., ?plan=Premium
    const price = urlParams.get('price'); // e.g., &price=799
    
    const amountInput = document.getElementById('amount');

    if (plan && price) {
        amountInput.value = `Amount: Rs. ${price} (${plan} Plan)`;
    } else {
        amountInput.value = "Amount: Rs. 799 (Premium Plan)"; // Default fallback
    }

    // 2. Format Card Number Input (Add spaces every 4 digits)
    const cardInput = document.getElementById('cardNumber');
    cardInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        value = value.match(/.{1,4}/g)?.join(' ') || value; // Add space every 4 chars
        e.target.value = value;
    });

    // 3. Handle Form Submission
    const paymentForm = document.getElementById('paymentForm');
    
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop actual page reload

        const submitBtn = document.querySelector('.custom-submit-btn');
        const originalText = submitBtn.textContent;

        // Visual Feedback
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";

        // Simulate Network Request (2 seconds)
        setTimeout(() => {
            alert("Payment Successful! \n\nThank you for subscribing to Glow Guide.");
            
            // Redirect to Home or Success page
            window.location.href = 'index.html'; 
            
            // Reset button (in case redirect fails/is removed)
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 2000);
    });
});