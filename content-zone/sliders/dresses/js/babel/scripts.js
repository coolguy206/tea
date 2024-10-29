"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  $('.dresses').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.dresses li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.dresses .glide', {
      type: 'slider',
      // autoplay: 4000,
      animationDuration: 500,
      perView: 4,
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
          perView: 1,
          perSwipe: '|'
        }
      }
    }).mount();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.dresses div[data-glide-el="controls"]').hide();
    $('.dresses ul').addClass('width-300');
  }
  (0, _inview.inview)('.dresses');
});
//# sourceMappingURL=scripts.js.map
