"use strict";

var addAlt = require('./alt.js');

var inview = require('./inview.js');

var addTracking = require('./tracking.js');

$(document).ready(function () {
  addAlt('.swim .c1 img', 'girls in purple & pink dresses');
  addAlt('.swim .c2 .first img', 'boy in plaid shirt');
  addAlt('.swim .c2 .second img', 'baby in yellow romper');
  addAlt('.swim .c2 .third img', 'girl in glue green dress');
  addAlt('.swim .c3 .first img', 'kids in plaid clothes');
  addAlt('.swim .c3 .second img', 'boy in dark blue swimwear');
  addAlt('.swim .c4 .first img', 'plaid outfits');
  addAlt('.swim .c4 .second img', 'boy in PJs');
  addAlt('.swim .c5 .first img', 'girl in green dress');
  addAlt('.swim .c5 .second img', 'baby sets outfits');
  addAlt('.swim .c5 .third img', 'red orange pajamas');
  addAlt('.swim .c5 .fourth img', 'boy in stripe sweater');
  inview('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5');

  for (var i = 1; i < 8; i++) {
    addTracking('.swim .c' + i + ' a', 'c' + i);
  }
});
//# sourceMappingURL=scripts.js.map
