"use strict";

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

var _glide = _interopRequireDefault(require("@glidejs/glide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(document).ready(function () {
  new _glide["default"]('.c1 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 500,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount();
  new _glide["default"]('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 500,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|'
      }
    }
  }).mount();
  new _glide["default"]('.c2 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 500,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount(); // new Glide('.c6 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount()
  // var imgs = $('.memorial-day-shop').find('img');
  // imgs.map(function (i, val) {
  //   var href = $(val).closest('span').attr('data-href');
  //   $(val).addClass('memorial-day').attr('data-href', href);
  //   $(val).next().addClass('memorial-day').attr('data-alt', $(val).attr('alt')).attr('data-href', href);
  // });
  // $('.furoshiki .see-details').fancybox({
  //   helpers: {
  //     overlay: null
  //   }
  // });

  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .why-tea');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
