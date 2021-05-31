const openMenuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__nav');
const closeMenuBtn = document.querySelector('.header__menu-close-btn');

menu.classList.remove('header__nav-nojs');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('header__menu--active');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
});
