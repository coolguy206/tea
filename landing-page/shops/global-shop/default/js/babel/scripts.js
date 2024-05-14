"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  new _glide["default"]('.slideshow .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount();
  (0, _inview.inview)('.wrapper .c1, .wrapper .c2, .wrapper .c3, .wrapper .clothes, .wrapper .slideshow');
});
//# sourceMappingURL=scripts.js.map
