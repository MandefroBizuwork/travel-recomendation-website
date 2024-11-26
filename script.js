// Carousel Scroll Feature
const carousel = document.querySelector('.carousel');
carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
});

// Search Bar Functionality
document.querySelector('.search-bar').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    alert(`Searching for: ${searchInput}`);
});

// Preferences Form Handling
document.getElementById('preferencesForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const budget = document.getElementById('budget').value;
    const type = document.getElementById('type').value;
    alert(`Preferences Saved:\nBudget: ${budget}\nType: ${type}`);
});

// Contact Form Handling
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We'll get back to you soon.`);
    } else {
        alert('Please fill out all fields.');
    }
});
