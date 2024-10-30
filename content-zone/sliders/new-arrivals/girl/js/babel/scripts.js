"use strict";

var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import {
//   inview
// } from './inview.js';

$(document).ready(function () {
  // $('.new-arrivals-slider.girl').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.new-arrivals-slider.girl li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.new-arrivals-slider.girl .glide', {
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

    //  $('.new-arrivals-slider.girl').hide();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.new-arrivals-slider.girl div[data-glide-el="controls"]').hide();
    $('.new-arrivals-slider.girl ul').addClass('width-300');
  }

  // inview('.new-arrivals-slider.girl');
});
//# sourceMappingURL=scripts.js.map
