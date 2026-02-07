document.addEventListener('DOMContentLoaded', () => {
    
    // Select all subscription buttons
    const subscribeButtons = document.querySelectorAll('.btn-subscribe');

    // Add click event listener to each button
    subscribeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            
            // Get data attributes from the clicked button
            const planName = event.target.getAttribute('data-plan');
            const planPrice = event.target.getAttribute('data-price');

            // Logic for handling the subscription
            if (planPrice === "0") {
                // Free Plan Logic
                alert(`You have selected the ${planName} Plan! \n\nSince it's free, your account has been updated successfully.`);
                // Example redirect: window.location.href = 'dashboard.html';
            } else {
                // Paid Plan Logic
                const confirmSubscription = confirm(`You have selected the ${planName} Plan for Rs. ${planPrice}/month. \n\nDo you want to proceed to payment?`);
                
                if (confirmSubscription) {
                    // Redirect to payment page (Example)
                    alert("Redirecting to secure payment gateway...");
                    // window.location.href = 'payment.html'; 
                }
            }
        });
    });

    // Optional: Cart Icon Counter Logic (Mockup)
    const cartCountElement = document.getElementById('cartCount');
    let cartCount = 0;
    // You can update this based on local storage if needed
});