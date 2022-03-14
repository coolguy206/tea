const addAlt = require('./alt.js');
const inview = require('./inview.js');
const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'kids in resortwear');
  addAlt('.hp .c2 .first img', 'kids in special occasion clothes');
  addAlt('.hp .c2 .second img', 'family in PJs');
  addAlt('.hp .c2 .third img', 'baby girl in holiday outfit');
  addAlt('.hp .c3 .first img', 'baby in hedgehog romper');
  addAlt('.hp .c3 .second img', 'baby boy in plaid outfit');
  addAlt('.hp .c3 .second img', 'baby girl in bright dress');
  addAlt('.hp .c4 .first img', 'girl in flower graphic dress');
  addAlt('.hp .c4 .second img', 'boys in striped pants');
  addAlt('.hp .c4 .third img', 'girl in floral outfit');
  addAlt('.hp .c5 .first img', 'girl in swimwear');
  addAlt('.hp .c5 .second img', 'boy in tiger print hoodie');
  addAlt('.hp .c5 .third img', 'baby in floral romper');
  addAlt('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'kids in tea clothes');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'baby in pineapple romper');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  // $('img[usemap]').rwdImageMaps();

});