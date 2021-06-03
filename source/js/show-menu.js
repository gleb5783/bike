'use strict';

var ESC_BUTTON = 'Esc';
var ESCAPE_BUTTON = 'Escape';
var openMenuBtn = document.querySelector('#tg');
var menu = document.querySelector('.header__list-drop-menu');
var mainBanner = document.querySelector('.main-banner');

document.body.classList.remove('body--noscroll');
menu.classList.remove('header__list-drop-menu--nojs');
openMenuBtn.classList.remove('header__menu-close-button');
mainBanner.classList.remove('main-banner--nojs');

function isEscEvent(evt) {
  return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

function closeEscMenu(evt) {
  if (isEscEvent(evt) && mainBanner.classList.value === 'main-banner main-banner--nojs') {
    openMenu();
  }
}

function openMenu() {
  document.addEventListener('keydown', closeEscMenu);
  document.body.classList.toggle('body--noscroll');
  openMenuBtn.classList.toggle('header__menu-close-button');
  mainBanner.classList.toggle('main-banner--nojs');
  menu.classList.toggle('header__list-drop-menu--nojs');
}

openMenuBtn.addEventListener('click', openMenu);

export {openMenu};
