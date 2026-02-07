// --- Vanilla JavaScript (js/script.js) ---

document.addEventListener('DOMContentLoaded', () => {
    // Logic for the Skin Type Selection page
    const skinTypeLinks = document.querySelectorAll('.skin-type-link');

    if (skinTypeLinks.length > 0) {
        skinTypeLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevents the link from navigating immediately
                
                const skinType = event.currentTarget.getAttribute('data-skin-type');
                
                // In a real application, you would store this data (e.g., in localStorage) 
                // and then redirect the user to the next step (e.g., a product recommendations page).
                
                alert(`You selected: ${skinType.toUpperCase()} SKIN. Redirecting to recommendations...`);
                console.log('Selected Skin Type:', skinType);
                
                // Example: window.location.href = `recommendations.html?type=${skinType}`; 
            });
        });
    }

    // Keep other existing logic (login form, appointment link) if necessary for the project
});