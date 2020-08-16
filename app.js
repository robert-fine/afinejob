const navLinks = document.querySelectorAll('.nav-link');
const toggler = document.querySelector('.toggler');

navLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

function closeNav() {
  toggler.checked = false;
}