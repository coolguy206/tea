"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)

  $('.swim .shop-slideshow').append($('.the-swim-slider'));
  // $('.hp .shop-slideshow2').append($('.dresses.sliders'));
  // $('.hp .shop-slideshow3').append($('.leggings.sliders'));
  $('.swim .white-out').fadeOut();
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
  (0, _inview.inview)('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5, .swim .c6, .swim .c7, .swim .clothes, .swim .graphics, .swim .slideshow, .swim .reviews');
});
//# sourceMappingURL=scripts.js.map
