"use strict";

var _alt = require("./alt.js");

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
  (0, _alt.alt)('.content-wrap .c1 > a img', 'babies');
  (0, _alt.alt)('.content-wrap .c1 .the-content img', 'rainbow');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="1"] img', 'rainbow romper');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="2"] img', 'newborn graphic outfit');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="3"] img', 'newborn graphic hats');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="4"] img', 'newborn graphic sets');
  (0, _alt.alt)('.content-wrap .c3 .cell1 img', 'baby in graphic outfit');
  (0, _alt.alt)('.content-wrap .c3 .cell2 img', 'baby in rainbow graphic romper');
  (0, _alt.alt)('.content-wrap .c3 .cell3 img', 'baby in strawberry graphic outfit');
  (0, _alt.alt)('.content-wrap .c3 .cell4 img', 'baby in flower graphic dress');
  (0, _alt.alt)('.content-wrap .c4 > a img', 'graphic baby outfits');
  (0, _alt.alt)('.content-wrap .c4 .the-content img', 'flower');
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .c7, .content-wrap .c8, .content-wrap .c9, .content-wrap .slideshow');
});
//# sourceMappingURL=scripts.js.map
