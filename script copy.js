// DOM Elements
const navLinks = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.content-section');

// Handle navigation
navLinks.forEach(item => {
    item.addEventListener('click', () => {
        // Update active nav item
        navLinks.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Scroll to corresponding section
        const sectionId = item.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
