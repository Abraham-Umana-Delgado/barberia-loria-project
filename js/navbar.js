const toggleButton = document.getElementById('nav_menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
});

const menuLinks = document.querySelectorAll('.navbar-nav--menu a[href^=\"#\"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function () {
    navWrapper.classList.remove('show');
    toggleButton.classList.toggle('close')
  })
})
