document.addEventListener('DOMContentLoaded', () => {
    // Update Cart Total based on quantity changes
    const updateCartTotal = () => {
        let total = 0;
        const cartItems = document.querySelectorAll('.cart-item');
        
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = item.querySelector('.item-quantity').value;
            const itemTotal = price * quantity;
            item.querySelector('.item-total').textContent = '$' + itemTotal.toFixed(2);
            total += itemTotal;
        });
        
        document.querySelector('#cart-total').textContent = '$' + total.toFixed(2);
    };

    // Event Listener for quantity change in the cart
    const quantityInputs = document.querySelectorAll('.item-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateCartTotal);
    });

    // Event Listener for removing cart item
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cartItem = e.target.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();  // Update total after removal
        });
    });

    // Handling form validation on the checkout page
    const checkoutForm = document.querySelector('#checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            const name = document.querySelector('#full-name').value;
            const email = document.querySelector('#email').value;
            const address = document.querySelector('#address').value;
            const city = document.querySelector('#city').value;
            const zip = document.querySelector('#zip').value;

            if (!name || !email || !address || !city || !zip) {
                e.preventDefault();  // Prevent form submission if validation fails
                alert('Please fill in all fields.');
            }
        });
    }

    // Optional: Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
