let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.nav-toggle');

function toogleMenu() {
  navMain.classList.toggle('main-nav--closed');

  if (navMain.classList.contains('main-nav--closed')) {
    navToggle.classList.remove('nav-toggle--close');
    navToggle.classList.add('nav-toggle--hamburger');
  } else {
    navToggle.classList.remove('nav-toggle--hamburger');
    navToggle.classList.add('nav-toggle--close');
  };
}

navToggle.classList.remove('nav-toggle--nojs');
toogleMenu();

navToggle.addEventListener('click', toogleMenu);
