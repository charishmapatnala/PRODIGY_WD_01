// JavaScript file: script.js

// Function to check the scroll position and toggle the 'scrolled' class
function checkScroll() {
    const navMenu = document.getElementById('navMenu');
    if (window.scrollY > 0) {
        // If scrolled, add the 'scrolled' class
        navMenu.classList.add('scrolled');
    } else {
        // Otherwise, remove the 'scrolled' class
        navMenu.classList.remove('scrolled');
    }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', checkScroll);
