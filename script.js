// script.js
// Add JavaScript code for dynamic features like form validation, AJAX requests, etc.
// For example, to validate the client name and email:

const clientNameInput = document.getElementById('client-name');
const clientEmailInput = document.getElementById('client-email');

clientNameInput.addEventListener('blur', () => {
    if (clientNameInput.value.trim() === '') {
        alert('Please enter a valid client name.');
    }
});

clientEmailInput.addEventListener('blur', () => {
    if (!isValidEmail(clientEmailInput.value)) {
        alert('Please enter a valid email address.');
    }
});

function isValidEmail(email) {
    // Implement email validation logic here
}
