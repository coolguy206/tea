"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
$(document).ready(function () {
  // $('.the-gift-shop-slider').css('opacity', 1);

  $($(".the-gift-shop-slider .lgw-thumb")[6]).before($('.the-gift-shop-slider .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.the-gift-shop-slider li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.the-gift-shop-slider .glide', {
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
        //   perView: 3,
        //   perSwipe: '|',
        // },
        431: {
          perView: 2,
          perSwipe: '|'
        }
      }
    }).mount();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.the-gift-shop-slider div[data-glide-el="controls"]').hide();
    $('.the-gift-shop-slider ul').addClass('width-300');
  }
  (0, _inview.inview)('.the-gift-shop-slider');
});
