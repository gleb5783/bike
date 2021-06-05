'use strict';
(function () {
  var ESC_BUTTON = 'Esc';
  var ESCAPE_BUTTON = 'Escape';
  var openMenuBtn = document.querySelector('#open-menu');
  var menu = document.querySelector('.header__list-drop-menu');
  var headerLogo = document.querySelector('.header__link-logo--nojs');
  var mainBanner = document.querySelector('.main-content');
  var anchors = document.querySelectorAll('a[href*="#"]');

  menu.classList.remove('header__list-drop-menu--nojs');
  headerLogo.classList.remove('header__link-logo--nojs');
  mainBanner.classList.remove('main-content--nojs');
  openMenuBtn.classList.remove('header__button--nojs');
  openMenuBtn.classList.add('header__menu-close-button', 'header__menu-open-button');
  menu.classList.toggle('header__list-drop-menu--open');
  openMenuBtn.classList.toggle('header__menu-close-button');
  mainBanner.classList.toggle('main-content--open-mob-menu');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  function isEscEvent(evt) {
    return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
  }

  function closeEscMenu(evt) {
    if (isEscEvent(evt) && mainBanner.classList.value === 'main-content main-content--open-mob-menu') {
      openMenu();
      document.removeEventListener('click', closeClickMenu);
    }
  }

  function closeClickMenu(evt) {
    if (evt.target.classList.value === '' || evt.target.classList.value === 'main-content__info-heading' || evt.target.classList.value === 'main-content__info' || evt.target.classList.value === 'main-content__info-text' || evt.target.classList.value === 'main-content__form') {
      openMenu();
      document.removeEventListener('click', closeClickMenu);
    }
  }

  function openMenu() {
    openMenuBtn.classList.toggle('header__menu-close-button');
    mainBanner.classList.toggle('main-content--open-mob-menu');
    menu.classList.toggle('header__list-drop-menu--open');
    document.body.classList.toggle('body--noscroll');
    document.addEventListener('keydown', closeEscMenu);
    document.addEventListener('click', closeClickMenu);
    if (mainBanner.classList.value === 'main-content') {
      document.body.classList.remove('body--noscroll');
    }
  }

  openMenuBtn.addEventListener('click', openMenu);
})();

