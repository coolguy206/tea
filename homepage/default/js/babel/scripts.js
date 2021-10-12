"use strict";

var addAlt = require('./alt.js');

var inview = require('./inview.js');

var addTracking = require('./tracking.js');

$(document).ready(function () {
  addAlt('.hp .c1 img', 'kids on a bike');
  addAlt('.hp .c2 .first img', 'girl in flower graphic dress');
  addAlt('.hp .c2 .second img', 'baby in yellow romper');
  addAlt('.hp .c2 .third img', 'girl in strip dress');
  addAlt('.hp .c3 .first img', 'kid in bike graphic tee');
  addAlt('.hp .c3 .second img', 'girl in rainbow top');
  addAlt('.hp .c4 .first img', 'baby in yellow dress');
  addAlt('.hp .c4 .second img', 'strawberry and rainbow PJs');
  addAlt('.hp .c4 .third img', 'baby in orange slice graphic oneies');
  addAlt('.hp .c5 .first img', 'boy in motorcycle graphic tee');
  addAlt('.hp .c5 .second img', 'fish & seahorse outfit');
  addAlt('.hp .c5 .third img', 'baby in strawberry graphic oneies');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'girl with toy horse on her head');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'siblings in Tea Collection clothes');
  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  $('img[usemap]').rwdImageMaps();
});
//# sourceMappingURL=scripts.js.map
