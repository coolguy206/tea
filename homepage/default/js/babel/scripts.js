"use strict";

var addAlt = require('./alt.js');

var inview = require('./inview.js');

var addTracking = require('./tracking.js');

$(document).ready(function () {
  addAlt('.hp .c1 img', 'family on van in tea summer clothes');
  addAlt('.hp .c2 .first img', 'girl in green bird print dress');
  addAlt('.hp .c2 .second img', 'baby in rainbow stripe romper');
  addAlt('.hp .c2 .third img', 'boy in aqua shark tee and shorts');
  addAlt('.hp .c3 .first img', 'pineapple dress for baby girl and girl');
  addAlt('.hp .c3 .second img', 'boy in fish graphic shorts swimwear');
  addAlt('.hp .c4 .first img', 'plaid outfits');
  addAlt('.hp .c4 .second img', 'boy in PJs');
  addAlt('.hp .c5 .first img', 'girl in green dress');
  addAlt('.hp .c5 .second img', 'baby sets outfits');
  addAlt('.hp .c5 .third img', 'red orange pajamas');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'summer beach activity');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'boys in car graphic tee and pineapple shorts');
  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  $('img[usemap]').rwdImageMaps();
});
//# sourceMappingURL=scripts.js.map
