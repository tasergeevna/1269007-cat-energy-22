let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.nav-toggle');

navToggle.classList.remove('nav-toggle--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
});
