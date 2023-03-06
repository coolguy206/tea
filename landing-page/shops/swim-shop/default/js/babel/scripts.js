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
  (0, _alt.alt)('.dresses .c1 img', 'kids in pattern swimwear');
  (0, _alt.alt)('.dresses .c2 .first img', 'girl in flower twirl dress');
  (0, _alt.alt)('.dresses .c2 .second img', 'girl in fish graphic empire dress');
  (0, _alt.alt)('.dresses .c2 .third img', 'girl in floral graphic wrap neck dress');
  (0, _alt.alt)('.dresses .clothes .first img', 'one pieces');
  (0, _alt.alt)('.dresses .clothes .second img', 'two pieces');
  (0, _alt.alt)('.dresses .clothes .third img', 'rash guards');
  (0, _alt.alt)('.dresses .clothes .fourth img', 'swim trunks');
  (0, _alt.alt)('.dresses .clothes .fifth img', 'baby swim');
  (0, _alt.alt)('.dresses .clothes .sixth img', 'famiily swim');
  (0, _alt.alt)('.dresses .c3 .first img', 'girl in stripe graphic short sleeve dress');
  (0, _alt.alt)('.dresses .c3 .second img', 'girl in flower graphic play dress');
  (0, _alt.alt)('.dresses .c3 .third img', 'girl in special occasion dress');
  (0, _alt.alt)('.dresses .c4 .first img', 'girl in floral graphic long sleeve dress');
  (0, _alt.alt)('.dresses .c4 .second img', 'girl leggings');
  (0, _alt.alt)('.dresses .c5 .first img', 'girl leggings');
  (0, _alt.alt)('.dresses .leggings img', 'family swim');
  (0, _alt.alt)('.dresses .graphics .first img', 'floral prints');
  (0, _alt.alt)('.dresses .graphics .second img', 'animal prints');
  (0, _alt.alt)('.dresses .graphics .third img', 'fruit prints');
  (0, _alt.alt)('.dresses .graphics .fourth img', 'rainbow & stars prints');
  (0, _inview.inview)('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .clothes, .dresses .graphics, .dresses .dress-type, .dresses .slideshow, .dresses .reviews, .dresses .leggings');
});
//# sourceMappingURL=scripts.js.map
