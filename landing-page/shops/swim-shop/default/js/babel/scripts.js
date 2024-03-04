"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  new _glide["default"]('.slideshow .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount();
  (0, _inview.inview)('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5, .swim .c6, .swim .c7, .swim .clothes, .swim .graphics, .swim .slideshow, .swim .reviews');
});
//# sourceMappingURL=scripts.js.map
