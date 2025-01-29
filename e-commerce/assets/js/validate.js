document.addEventListener('DOMContentLoaded', () => {
    // Function to validate an email address
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Function to validate if a string is not empty
    const isNotEmpty = (value) => {
        return value.trim() !== '';
    };

    // Function to validate the checkout form
    const validateCheckoutForm = () => {
        const fullName = document.querySelector('#full-name').value;
        const email = document.querySelector('#email').value;
        const address = document.querySelector('#address').value;
        const city = document.querySelector('#city').value;
        const zip = document.querySelector('#zip').value;
        let valid = true;

        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');

        // Full Name Validation
        if (!isNotEmpty(fullName)) {
            document.querySelector('#name-error').textContent = 'Full Name is required.';
            valid = false;
        }

        // Email Validation
        if (!isNotEmpty(email)) {
            document.querySelector('#email-error').textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(email)) {
            document.querySelector('#email-error').textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Address Validation
        if (!isNotEmpty(address)) {
            document.querySelector('#address-error').textContent = 'Address is required.';
            valid = false;
        }

        // City Validation
        if (!isNotEmpty(city)) {
            document.querySelector('#city-error').textContent = 'City is required.';
            valid = false;
        }

        // ZIP Code Validation
        if (!isNotEmpty(zip)) {
            document.querySelector('#zip-error').textContent = 'ZIP code is required.';
            valid = false;
        } else if (isNaN(zip)) {
            document.querySelector('#zip-error').textContent = 'Please enter a valid ZIP code.';
            valid = false;
        }

        return valid;
    };

    // Checkout Form Submission
    const checkoutForm = document.querySelector('#checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            if (!validateCheckoutForm()) {
                e.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    // Validate Login Form
    const validateLoginForm = () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        let valid = true;

        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');

        // Username Validation
        if (!isNotEmpty(username)) {
            document.querySelector('#username-error').textContent = 'Username is required.';
            valid = false;
        }

        // Password Validation
        if (!isNotEmpty(password)) {
            document.querySelector('#password-error').textContent = 'Password is required.';
            valid = false;
        }

        return valid;
    };

    // Login Form Submission
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            if (!validateLoginForm()) {
                e.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }
});
S