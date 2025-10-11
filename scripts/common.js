// Hamburger menu 
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');
const closeNavBtn = document.getElementById('close-nav');

if (hamburgerBtn && mobileNav && closeNavBtn) {
  hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('show');
  });
  closeNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show');
  });
  // Close menu "click"
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('show'));
  });
}

/*
 - The links also close the Hamburger 
*/
