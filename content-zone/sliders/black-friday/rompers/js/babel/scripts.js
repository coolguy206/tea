"use strict";

var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import {
//   inview
// } from './inview.js';

$(document).ready(function () {
  // $('.bf-slider.rompers').css('opacity', 1);

  $($(".bf-slider.rompers .lgw-thumb")[6]).before($('.bf-slider.rompers .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER

  if ($('.bf-slider.rompers li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.bf-slider.rompers .glide', {
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

    //  $('.bf-slider.rompers').hide();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.bf-slider.rompers div[data-glide-el="controls"]').hide();
    $('.bf-slider.rompers ul').addClass('width-300');
  }

  // inview('.bf-slider.rompers');
});
//# sourceMappingURL=scripts.js.map
