"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
$(document).ready(function () {
  (0, _alt.alt)('.hp .c1 img', 'girl in rainbow ice cream cone graphic dress');
  (0, _alt.alt)('.hp .c2 .first img', 'kids in special occasion clothes');
  (0, _alt.alt)('.hp .c2 .second img', 'family in PJs');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c3 .second img', 'baby girl in jelly fish dress');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in shark romper');
  (0, _alt.alt)('.hp .c4 .first img', 'girl in poka dot dress');
  (0, _alt.alt)('.hp .c4 .second img', 'boy in pelican shirt');
  (0, _alt.alt)('.hp .c4 .third img', 'girl in floral thumb_loop');
  (0, _alt.alt)('.hp .c5 .first img', 'siblings in stripes');
  (0, _alt.alt)('.hp .c5 .second img', 'girl in cherry print outfit');
  (0, _alt.alt)('.hp .c5 .third img', 'baby in apple romper');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  (0, _alt.alt)('.hp .c6 .second img', 'girls in striped dress and top');
  (0, _alt.alt)('.hp .c7 .first img', 'happy mom & son');
  (0, _alt.alt)('.hp .c7 .second img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .third img', 'girl in watermelon outfit');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
