const addAlt = require('./alt.js');
const inview = require('./inview.js');
const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'Pajama Party');
  addAlt('.hp .c2 .first img', 'baby girl in pengquin tee');
  addAlt('.hp .c2 .second img', 'baby in romper');
  addAlt('.hp .c2 .third img', 'baby boy in holiday outfit');
  addAlt('.hp .c3 .first img', 'girl in blue & yellow dress');
  addAlt('.hp .c3 .second img', 'boy in helmet graphic tee');
  addAlt('.hp .c4 .first img', 'plaid outfits');
  addAlt('.hp .c4 .second img', 'boy in PJs');
  addAlt('.hp .c5 .first img', 'girl in green dress');
  addAlt('.hp .c5 .second img', 'baby sets outfits');
  addAlt('.hp .c5 .third img', 'red orange pajamas');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'boy in banana graphic tee & girl in stripe top');
  addAlt('.hp .c6 .second img', 'clearance');
  addAlt('.hp .c7 .first img', 'boy in dessert');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'boy in graphic tee & girl in stripe dress');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

});