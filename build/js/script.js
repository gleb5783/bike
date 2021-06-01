'use strict';

var openMenuBtn = document.querySelector('.header__btn');
var menu = document.querySelector('.header__nav');
var closeMenuBtn = document.querySelector('.header__menu-close-btn');

function openMenu() {
  menu.classList.add('header__menu--active');
}

function closeMenu() {
  menu.classList.remove('header__menu--active');
}

menu.classList.remove('header__nav--nojs');
closeMenuBtn.addEventListener('click', closeMenu);
openMenuBtn.addEventListener('click', openMenu);
