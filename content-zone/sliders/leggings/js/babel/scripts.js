"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  $('.leggings').css('opacity', 1);
  $($(".leggings .lgw-thumb")[6]).before($('.leggings .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.leggings li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.leggings .glide', {
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
    $('.leggings div[data-glide-el="controls"]').hide();
    $('.leggings ul').addClass('width-300');
  }
  (0, _inview.inview)('.leggings');
});
//# sourceMappingURL=scripts.js.map
