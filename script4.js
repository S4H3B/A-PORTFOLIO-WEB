// 1. Dark / Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    // Check if dark theme is currently set
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    // Toggle theme
    if (isDark) {
        body.removeAttribute('data-theme');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// 2. Form Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual submission for demo
    let valid = true;

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";

    // Name Validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    // Email Validation
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Success Message
    if (valid) {
        alert("Thanks! Your message has been 'sent'.");
        form.reset();
    }
});

// 3. Button Click Console Log
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log("Button clicked!");
    });
});
