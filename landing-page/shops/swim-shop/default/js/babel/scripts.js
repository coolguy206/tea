"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

$(document).ready(function () {
  (0, _alt.alt)('.swim .c1 img', 'girls in floral swimwear');
  (0, _alt.alt)('.swim .c2 .first img', 'boys in shark graphic swimwear');
  (0, _alt.alt)('.swim .c2 .second img', 'graphic swim trunks');
  (0, _alt.alt)('.swim .c2 .third img', 'baby girl in humming bird swimwear');
  (0, _alt.alt)('.swim .c3 .first img', 'girl in ice cream graphic swimwear');
  (0, _alt.alt)('.swim .c3 .second img', 'two piece swimwear');
  (0, _alt.alt)('.swim .c4 .first img', 'watermelon graphic swimwear');
  (0, _alt.alt)('.swim .c4 .second img', 'boys in shark graphic tops');
  (0, _alt.alt)('.swim .c5 .first img', 'girl in green dress');
  (0, _alt.alt)('.swim .c5 .second img', 'baby sets outfits');
  (0, _alt.alt)('.swim .c5 .third img', 'red orange pajamas');
  (0, _alt.alt)('.swim .c5 .fourth img', 'boy in stripe sweater');
  (0, _inview.inview)('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.swim .c' + i + ' a', 'c' + i);
  }
});
//# sourceMappingURL=scripts.js.map
