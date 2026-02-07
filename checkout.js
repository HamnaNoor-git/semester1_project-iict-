document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    const codBtn = document.getElementById('codBtn');
    const onlinePayBtn = document.getElementById('onlinePayBtn');

    // --- 1. Payment Method Selection ---
    
    // Function to handle button click
    function selectPaymentMethod(selectedBtn) {
        // Remove 'active' class from both buttons
        codBtn.classList.remove('active');
        onlinePayBtn.classList.remove('active');
        
        // Add 'active' class to the clicked button
        selectedBtn.classList.add('active');
    }

    codBtn.addEventListener('click', () => selectPaymentMethod(codBtn));
    onlinePayBtn.addEventListener('click', () => selectPaymentMethod(onlinePayBtn));


    // --- 2. Form Validation ---

    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default submission

        let isValid = true;
        const requiredInputs = checkoutForm.querySelectorAll('input[required]');
        
        // Check if all required fields are filled
        requiredInputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                // Add visual cue for error (e.g., Bootstrap validation class, custom red border)
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        
        // Simple Phone Number Validation (checks for minimum 8 digits)
        const phoneInput = document.getElementById('phone');
        const phoneValue = phoneInput.value.replace(/\D/g, '');
        if (phoneValue.length > 0 && phoneValue.length < 8) {
             alert('Please enter a valid phone number (at least 8 digits).');
             phoneInput.focus();
             phoneInput.classList.add('is-invalid');
             isValid = false;
        }


        if (isValid) {
            // Determine selected payment method
            let method = codBtn.classList.contains('active') ? 'Cash on Delivery' : 'Online Payment';
            
            // Simulation of successful order
            alert(`Order Confirmed! \nTotal: Rs 1,250 \nPayment Method: ${method}`);
            
            // Redirect or reset form
            checkoutForm.reset();
            // window.location.href = 'confirmation.html';
        } else {
             alert('Please fill out all required shipping information.');
        }
    });
});