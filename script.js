// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to check the screen size and adjust the navigation bar
    function adjustNavbar() {
        const navList = document.getElementById('nav-list');
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            navList.style.flexDirection = 'column';
            navList.style.alignItems = 'center';
        } else {
            navList.style.flexDirection = 'row';
            navList.style.alignItems = 'center';
        }
    }

    // Adjust the navbar on initial load
    adjustNavbar();

    // Adjust the navbar on window resize
    window.addEventListener('resize', adjustNavbar);
});

// Create left footer element
const leftFooter = document.createElement('footer');
leftFooter.textContent = 'NAMMA NEWBIE CONNECT';
leftFooter.classList.add('footer-left'); // Add class for styling

// Create right footer element
const rightFooter = document.createElement('footer');
rightFooter.textContent = 'NAMMA NEWBIE CONNECT';
rightFooter.classList.add('footer-right'); // Add class for styling

// Append the footers to the document body
document.body.appendChild(leftFooter);
document.body.appendChild(rightFooter);

