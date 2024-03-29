// script.js

// Get all buttons with class "details-btn"
const detailsButtons = document.querySelectorAll('.details-btn');

// Loop through each button and add click event listener
detailsButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Toggle the display of event details
        const details = this.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});
