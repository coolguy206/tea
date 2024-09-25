"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  $('.best-sellers').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.best-sellers li').length >= 5 || window.innerWidth < 431) {
    new _glide["default"]('.best-sellers .glide', {
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
    $('.best-sellers div[data-glide-el="controls"]').hide();
    $('.best-sellers ul').addClass('width-300');
  }
  (0, _inview.inview)('.best-sellers');
});
//# sourceMappingURL=scripts.js.map
