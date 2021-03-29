const addAlt = require('./alt.js');
const inview = require('./inview.js');
const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'girls in purple & pink dresses');
  addAlt('.hp .c2 .first img', 'boy in plaid shirt');
  addAlt('.hp .c2 .second img', 'baby in yellow romper');
  addAlt('.hp .c2 .third img', 'girl in glue green dress');
  addAlt('.hp .c3 .first img', 'kids in plaid clothes');
  addAlt('.hp .c3 .second img', 'boy in dark blue swimwear');
  addAlt('.hp .c4 .first img', 'plaid outfits');
  addAlt('.hp .c4 .second img', 'boy in PJs');
  addAlt('.hp .c5 .first img', 'girl in green dress');
  addAlt('.hp .c5 .second img', 'baby sets outfits');
  addAlt('.hp .c5 .third img', 'red orange pajamas');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in lion outfit');
  addAlt('.hp .c6 .second img', 'baby in blue striped dress');
  addAlt('.hp .c7 .first img', 'azulejo');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'boys in floral shirt and girl in floral dress');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

});