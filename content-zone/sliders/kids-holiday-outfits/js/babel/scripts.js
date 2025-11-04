"use strict";

var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import {
//   inview
// } from './inview.js';

$(document).ready(function () {
  // $('.kids-holiday-outfits-slider').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.kids-holiday-outfits-slider li').length >= 5) {
    // console.log(Glide);
    new _glide["default"]('.kids-holiday-outfits-slider .glide', {
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

    // $('.kids-holiday-outfits-slider').hide();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.kids-holiday-outfits-slider div[data-glide-el="controls"]').hide();
    $('.kids-holiday-outfits-slider ul').addClass('width-300');
  }

  // inview('.kids-holiday-outfits-slider');
});
