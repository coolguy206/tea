"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)

  $('.dresses .shop-slideshow').append($('.the-dresses-slider'));
  // $('.hp .shop-slideshow2').append($('.dresses.sliders'));
  // $('.hp .shop-slideshow3').append($('.leggings.sliders'));
  $('.dresses .white-out').fadeOut();
});
$(document).ready(function () {
  new _glide["default"]('.slideshow .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount();
  (0, _inview.inview)('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .clothes, .dresses .graphics, .dresses .dress-type, .dresses .slideshow, .dresses .reviews, .dresses .leggings, .dresses .trending');
});
//# sourceMappingURL=scripts.js.map
