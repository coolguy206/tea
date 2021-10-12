"use strict";

var addAlt = require('./alt.js');

var inview = require('./inview.js');

var addTracking = require('./tracking.js');

$(document).ready(function () {
  addAlt('.hp .c1 img', 'kids in blues & purples in a field of grass');
  addAlt('.hp .c2 .first img', 'baby girl in flower graphic romper');
  addAlt('.hp .c2 .second img', 'baby boy in blue romper');
  addAlt('.hp .c2 .third img', 'baby girl in yellow flower dress');
  addAlt('.hp .c3 .first img', 'girl in pink flower dress');
  addAlt('.hp .c3 .second img', 'kids in blue color outfits');
  addAlt('.hp .c4 .first img', 'halloween shop');
  addAlt('.hp .c4 .second img', 'baby in yellow flower dress');
  addAlt('.hp .c4 .third img', 'strawberry & rainbow PJs');
  addAlt('.hp .c5 .first img', 'boy in motorcycle graphic tee');
  addAlt('.hp .c5 .second img', 'fish & seahorse outfit');
  addAlt('.hp .c5 .third img', 'baby in strawberry graphic oneies');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'kids in apple graphic PJs with swedish pancakes');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'kid in green Tea Collection outfit');
  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  $('img[usemap]').rwdImageMaps();
});
//# sourceMappingURL=scripts.js.map
