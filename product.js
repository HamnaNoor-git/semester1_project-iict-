// --- Vanilla JavaScript (js/script.js) ---

document.addEventListener('DOMContentLoaded', () => {
    // Existing logic for other pages (login, skin type selection, contact) goes here...

    // --- New Products Page Logic ---
    const sortOptions = document.querySelectorAll('.sort-list li');
    const productGrid = document.querySelector('.product-grid');

    if (sortOptions.length > 0) {
        sortOptions.forEach(option => {
            option.addEventListener('click', (event) => {
                const sortBy = event.target.textContent;
                
                // In a real application, you would send an AJAX request to the server 
                // to fetch sorted data, or reorder the existing DOM elements.
                
                // For demonstration:
                alert(`Products sorted by: ${sortBy}`);
                console.log('Sorting triggered:', sortBy);
                
                // Example of visual feedback for the selected option
                sortOptions.forEach(o => o.style.fontWeight = 'normal');
                event.target.style.fontWeight = 'bold';
            });
        });
    }

    // You would add similar logic for the 'Filtering' options here.
});