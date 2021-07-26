"use strict";

var addAlt = require('./alt.js');

var inview = require('./inview.js');

var addTracking = require('./tracking.js');

$(document).ready(function () {
  addAlt('.hp .c1 img', 'kids in crab graphic tee');
  addAlt('.hp .c2 .first img', 'boy in shark graphic tee');
  addAlt('.hp .c2 .second img', 'baby in crab graphic romper');
  addAlt('.hp .c2 .third img', 'girl in strip dress');
  addAlt('.hp .c3 .first img', 'girls in pineapple graphic dress');
  addAlt('.hp .c3 .second img', 'girl in tiger swimwear');
  addAlt('.hp .c4 .first img', 'boy in motorcycle graphic tee');
  addAlt('.hp .c4 .second img', 'fish & seahorse outfit');
  addAlt('.hp .c5 .first img', 'boy in motorcycle graphic tee');
  addAlt('.hp .c5 .second img', 'fish & seahorse outfit');
  addAlt('.hp .c5 .third img', 'baby in strawberry graphic oneies');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'girls in poka dot & stripe dress');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'boys in stripe shirt');
  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  $('img[usemap]').rwdImageMaps();
});
//# sourceMappingURL=scripts.js.map
