const addAlt = require('./alt.js');
const inview = require('./inview.js');
const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'girl in cherry dress boy in plaid shirt girl twirl in blue flower dress');
  addAlt('.hp .c2 .first img', 'baby girl in blue dress');
  addAlt('.hp .c2 .second img', 'baby boy in yellow graphic tee');
  addAlt('.hp .c2 .third img', 'baby in blue striped romper');
  addAlt('.hp .c3 .first img', 'girls in PJs');
  addAlt('.hp .c3 .second img', 'boy in swimwear');
  addAlt('.hp .c4 .first img', 'plaid outfits');
  addAlt('.hp .c4 .second img', 'boy in PJs');
  addAlt('.hp .c5 .first img', 'girl in green dress');
  addAlt('.hp .c5 .second img', 'baby sets outfits');
  addAlt('.hp .c5 .third img', 'red orange pajamas');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'boy in banana graphic tee & girl in stripe top');
  addAlt('.hp .c6 .second img', 'clearance');
  addAlt('.hp .c7 .first img', 'boy in bird graphic tee');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'boy in graphic tee & girl in stripe dress');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

});