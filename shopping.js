document.addEventListener('DOMContentLoaded', () => {

    const cartCountElement = document.getElementById('cartCount');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const cartProductList = document.querySelector('.product-list');

    // Constants for fixed costs
    const SHIPPING_COST = 200; // Rs 200
    const TAX_RATE = 0.05; // 5% (5%)

    /**
     * Formats a number to a localized currency string (e.g., "Rs 1,250").
     */
    function formatCurrency(amount) {
        return `Rs ${Math.round(amount).toLocaleString('en-IN')}`;
    }

    /**
     * Calculates the total subtotal across ALL products in the cart.
     */
    function calculateFullSubtotal() {
        let cumulativeSubtotal = 0;
        // Target the single item input by its unique ID
        const quantityInput = document.getElementById('qty-1');
        
        if (quantityInput) {
            const price = parseFloat(quantityInput.getAttribute('data-price'));
            const quantity = parseInt(quantityInput.value);
            cumulativeSubtotal = price * quantity;
        }

        return cumulativeSubtotal;
    }

    /**
     * Updates the global cart summary (Subtotal, Tax, Total, and Header Count).
     */
    function updateCartSummary() {
        // 1. Calculate overall subtotal
        const subtotal = calculateFullSubtotal();
        
        // Determine shipping cost and total items (Header Count)
        let currentShipping = SHIPPING_COST;
        let totalItems = 0;
        
        const quantityInput = document.getElementById('qty-1');
        
        if (quantityInput) {
            totalItems = parseInt(quantityInput.value);
        }

        // 🛑 If subtotal is 0 (i.e., cart is empty), set shipping and totals to zero 🛑
        if (subtotal === 0) {
            currentShipping = 0;
            totalItems = 0;
        }

        // 2. Calculate Tax
        const tax = subtotal * TAX_RATE; 

        // 3. Calculate Total
        const total = subtotal + currentShipping + tax;
        
        // 4. Update DOM elements
        cartCountElement.textContent = totalItems;
        subtotalElement.textContent = formatCurrency(subtotal);
        shippingElement.textContent = formatCurrency(currentShipping);
        taxElement.textContent = formatCurrency(tax);
        totalElement.textContent = formatCurrency(total);
        
        if (subtotal === 0) {
             console.log("Cart is empty.");
        }
    }

    // --- Quantity Control (+ / -) ---
    document.querySelectorAll('.qty-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');
            const quantityInput = document.getElementById('qty-1');
            
            if (!quantityInput) return;

            let currentValue = parseInt(quantityInput.value);

            if (action === 'plus') {
                if (currentValue < 99) {
                    quantityInput.value = currentValue + 1;
                }
            } else if (action === 'minus') {
                if (currentValue > 1) { 
                    quantityInput.value = currentValue - 1;
                }
            }

            updateCartSummary();
        });
    });

    // --- Delete Button Functionality ---
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the closest parent element with the class 'cart-item'
            const cartItem = event.target.closest('.cart-item');
            
            if (cartItem) {
                // Remove the entire product row from the DOM
                cartItem.remove(); 
                
                // Recalculate summary after deletion
                updateCartSummary();
            }
        });
    });


    // --- Save for Later Button ---
    document.querySelector('.heart-btn').addEventListener('click', (event) => {
        const heartIcon = event.currentTarget.querySelector('i');
        
        if (heartIcon.classList.contains('far')) { 
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas'); 
            heartIcon.classList.add('text-danger'); 
            alert('Item saved for later!');
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.remove('text-danger');
            heartIcon.classList.add('far');
            alert('Item removed from "Save for later".');
        }
    });

    // Initialize the cart summary and cart count when the page loads
    updateCartSummary();
});