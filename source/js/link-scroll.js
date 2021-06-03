'use strict';
import {openMenu} from './show-menu.js';

var anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.screen.width <= 1024) {
      openMenu();
    }
    else {
      document.body.classList.remove('body--noscroll');
    }

    var blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
