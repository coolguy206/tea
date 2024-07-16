"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  new _glide["default"]('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
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
  new _glide["default"]('.shop-slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
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
  (0, _inview.inview)('.bts .c1, .bts .c2, .bts .c3, .bts .c4, .bts .c5, .bts .c6, .bts .c7, .bts .clothes, .bts .graphics, .bts .shop-slideshow, .bts .shop-slideshow-2');
});
//# sourceMappingURL=scripts.js.map
