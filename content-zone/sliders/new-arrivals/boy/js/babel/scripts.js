"use strict";

var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import {
//   inview
// } from './inview.js';

$(document).ready(function () {
  // $('.new-arrivals-slider.boy').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.new-arrivals-slider.boy li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.new-arrivals-slider.boy .glide', {
      type: 'carousel',
      // autoplay: 4000,
      animationDuration: 500,
      perView: 5,
      hoverpause: true,
      gap: 0,
      bound: true,
      rewind: false,
      breakpoints: {
        // 821: {
        //   perView: 4,
        //   perSwipe: '|',
        // },
        431: {
          perView: 2,
          perSwipe: '|'
        }
      }
    }).mount();

    // $('.new-arrivals-slider.boy').hide();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.new-arrivals-slider.boy div[data-glide-el="controls"]').hide();
    $('.new-arrivals-slider.boy ul').addClass('width-300');
  }

  // inview('.new-arrivals-slider.boy');
});
