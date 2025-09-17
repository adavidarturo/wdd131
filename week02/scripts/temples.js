
// Hamburger menu 
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

// Hamburger toggle and icon change
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open'); // Toggle menu visibility
  hamburger.innerHTML = navMenu.classList.contains('open') ? '❌' : '☰'; // Change icon
});

// Close menu when a link is clicked (on small screens)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 700) { // Only close on small screens
      navMenu.classList.remove('open'); // Close menu
      hamburger.innerHTML = '☰'; // Reset icon
    }
  });
});






