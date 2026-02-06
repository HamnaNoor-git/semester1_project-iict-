// Glow Guide Functionality

// 1. Cart Management
let cart = [];
let cartCount = 0;

function updateCartDisplay() {
    const badge = document.getElementById('cartCount');
    badge.textContent = cartCount;
    // Simple "Pop" animation
    badge.style.transform = 'scale(1.2) translate(-50%, -50%)';
    setTimeout(() => {
        badge.style.transform = 'scale(1) translate(-50%, -50%)';
    }, 200);
}

// 2. Add to Cart Listeners
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-add-cart');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return;

            const name = this.getAttribute('data-product');
            const price = this.getAttribute('data-price');

            // Add item
            cart.push({ name, price });
            cartCount++;
            
            updateCartDisplay();
            
            alert(`${name} added to cart!`);
        });
    });
    document.addEventListener("DOMContentLoaded", function() {             //footer java
    
    // 1. Dynamic Year Update
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    
    // Only update if we are past 2025
    if (currentYear > 2025) {
        yearSpan.textContent = currentYear;
    }

    // 2. Console log for testing functional links
    const subLink = document.querySelector('.sub-banner-link');
    subLink.addEventListener('click', function() {
        console.log("Subscription banner clicked!");
    });
});