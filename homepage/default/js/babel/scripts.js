"use strict";

var _inview = require("./inview.js");
var _tracking = require("./tracking.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  // if (window.innerWidth < 431) {
  //   $(`.hp .promo1`).insertBefore(`.hp .c1`);
  // }

  // 23:59:59

  //? COUNTDOWN.JS
  // $("#countdown span").countdown("2024/07/07 23:59:59", function (event) {
  //   $(this).text(
  //     event.strftime('%-D days %H:%M:%S')
  //     // event.strftime('%-D %H:%M:%S')
  //   );
  // });

  new _glide["default"]('.c1 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0
    // swipeThreshold: false,
    // dragThreshold: false,
  }).mount();

  // new Glide('.c2 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 1000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount();

  new _glide["default"]('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 4000,
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

  // new Glide('.shop-slideshow2 .glide', {
  //   type: 'carousel',
  //   // autoplay: 500,
  //   animationDuration: 500,
  //   perView: 5,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     431: {
  //       perView: 2,
  //       perSwipe: '|',
  //     },
  //   }
  // }).mount();

  // new Glide('.shop-slideshow3 .glide', {
  //   type: 'carousel',
  //   // autoplay: 500,
  //   animationDuration: 500,
  //   perView: 5,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     431: {
  //       perView: 2,
  //       perSwipe: '|',
  //     },
  //   }
  // }).mount();

  // new Glide('.c6 .glide', {
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

  (0, _inview.inview)('.hp .promo1-skinny, .hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');
  for (var i = 1; i < 9; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  }
  (0, _tracking.tracking)('.hp .shop-slideshow a', 'shop-slideshow');
  (0, _tracking.tracking)('.hp .promo1 a', 'promo1');
  var a = $('.hp a');
  $(a).each(function (i, val) {
    var img = $(val).find('img');
    // console.log(img);
    if (img.length !== 0) {
      // var theClass = $(val).next().find('h2').text().replace(/ /g, '-').toLowerCase();
      if ($(img).attr('alt') !== undefined) {
        var theClass = 'img ' + $(img).attr('alt').replace(/ /g, '-').toLowerCase();
        // console.log(theClass);
        var oldClass = $(val).attr('class');
        if (oldClass !== undefined) {
          theClass = "".concat(oldClass, " ").concat(theClass);
          // console.log(theClass);
          $(val).attr('class', theClass);
        } else {
          $(val).attr('class', theClass);
        }
      }
    }
  });

  // $('img[usemap]').rwdImageMaps();
});
//# sourceMappingURL=scripts.js.map
