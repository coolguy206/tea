"use strict";

var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import {
//   inview
// } from './inview.js';

$(document).ready(function () {
  // $('.bf-slider.dresses').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.bf-slider.dresses li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.bf-slider.dresses .glide', {
      type: 'carousel',
      // autoplay: 4000,
      animationDuration: 500,
      perView: 5,
      hoverpause: true,
      gap: 0,
      bound: true,
      rewind: false,
      breakpoints: {
        821: {
          perView: 3,
          perSwipe: '|'
        },
        431: {
          perView: 2,
          perSwipe: '|'
        }
      }
    }).mount();

    //  $('.bf-slider.dresses').hide();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.bf-slider.dresses div[data-glide-el="controls"]').hide();
    $('.bf-slider.dresses ul').addClass('width-300');
  }

  // inview('.bf-slider.dresses');
});
//# sourceMappingURL=scripts.js.map
