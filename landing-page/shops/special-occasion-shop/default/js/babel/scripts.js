"use strict";

var _inview = require("./inview.js");

var _glide = _interopRequireDefault(require("@glidejs/glide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(document).ready(function () {
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .clothes, .content-wrap .slideshow-1, .content-wrap .slideshow-2, .content-wrap .slideshow-3');
  new _glide["default"]('.slideshow-1 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();
  new _glide["default"]('.slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount(); // new Glide('.slideshow-3 .glide', {
  //   type: 'carousel',
  //   // autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 2,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     430: {
  //       perView: 1
  //     }
  //   }
  // }).mount();
});
//# sourceMappingURL=scripts.js.map
