'use strict';

var below_hero_section = document.querySelector('#below-hero-wrapper');
var details_section = document.querySelector('.details-section');
var buy_now_highlighted_box = document.querySelector('.buy-now.highlighted');
var buy_now_box = document.querySelectorAll('.buy-now')[1];

window.onscroll = function () {

  if (isScrolledIntoView(below_hero_section)) below_hero_section.style.opacity = '1';else below_hero_section.style.opacity = '0';

  if (isScrolledIntoView(details_section)) details_section.style.opacity = '1';else details_section.style.opacity = '0';

  if (isScrolledIntoView(buy_now_highlighted_box)) buy_now_highlighted_box.style.transform = 'translateX(0)';else buy_now_highlighted_box.style.transform = 'translateX(-1200px)';

  if (isScrolledIntoView(buy_now_box)) buy_now_box.style.transform = 'translateX(0)';else buy_now_box.style.transform = 'translateX(1200px)';
};

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
}