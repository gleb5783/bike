'use strict';

var ESC_BUTTON = 'Esc';
var ESCAPE_BUTTON = 'Escape';
var openMenuBtn = document.querySelector('#open-menu');
var menu = document.querySelector('.header__list-drop-menu');
var mainBanner = document.querySelector('.main-banner');

menu.classList.toggle('header__list-drop-menu--nojs');
openMenuBtn.classList.toggle('header__menu-close-button');
mainBanner.classList.toggle('main-banner--nojs');

function isEscEvent(evt) {
  return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

function closeEscMenu(evt) {
  if (isEscEvent(evt) && mainBanner.classList.value === 'main-banner main-banner--nojs') {
    openMenu();
    document.removeEventListener('keydown', closeEscMenu);
  }
}

function openMenu() {
  openMenuBtn.classList.toggle('header__menu-close-button');
  mainBanner.classList.toggle('main-banner--nojs');
  menu.classList.toggle('header__list-drop-menu--nojs');
  document.addEventListener('keydown', closeEscMenu);
  document.body.classList.toggle('body--noscroll');
}

openMenuBtn.addEventListener('click', openMenu);

export {openMenu};
