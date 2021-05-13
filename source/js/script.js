let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.nav-toggle');

navToggle.classList.remove('nav-toggle--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
});

if (navMain.classList.contains('main-nav--closed')) {
  navToggle.classList.remove('nav-toggle--closed');
  navToggle.classList.add('nav-toggle--hamburger');
};
