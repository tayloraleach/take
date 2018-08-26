'use strict';

var below_hero_section = document.querySelector('#below-hero-wrapper');
var details_section = document.querySelector('.details-section');

window.onscroll = function () {

  if (isScrolledIntoView(below_hero_section)) below_hero_section.style.opacity = '1';else below_hero_section.style.opacity = '0';

  if (isScrolledIntoView(details_section)) details_section.style.opacity = '1';else details_section.style.opacity = '0';
};

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
}