document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Prevent default form submission
    e.preventDefault();

    const form = this;
    const submitBtn = form.querySelector('button[type="submit"');

    // Hidden input
    const keyInput = document.createElement('input');
    keyInput.type = 'hidden';
    keyInput.name = 'access_key';
    keyInput.value = '01d5371a-c168-4c1b-b17e-d1ad425cdef4';

    // adding to form
    form.appendChild(keyInput);

    // Loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // trigger form redirect to web3forms
    form.submit();
})