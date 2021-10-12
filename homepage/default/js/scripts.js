const addAlt = require('./alt.js');
const inview = require('./inview.js');
const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'family kids in plaid');
  addAlt('.hp .c2 .first img', 'kids in holiday romper');
  addAlt('.hp .c2 .second img', 'baby boy in holiday outfit');
  addAlt('.hp .c2 .third img', 'baby girl in holiday outfit');
  addAlt('.hp .c3 .first img', 'girl in floral dress');
  addAlt('.hp .c3 .second img', 'boy in jumpsuit');
  addAlt('.hp .c3 .second img', 'girl in pink outfit');
  addAlt('.hp .c4 .first img', 'family in holiday outfit');
  addAlt('.hp .c4 .second img', 'kid in halloween outfit');
  addAlt('.hp .c4 .third img', 'strawberry & rainbow PJs');
  addAlt('.hp .c5 .first img', 'family in PJs');
  addAlt('.hp .c5 .second img', 'baby in dress');
  addAlt('.hp .c5 .third img', 'baby in floral romper');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'swedish pancakes');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'kid in holiday outfit');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  // $('img[usemap]').rwdImageMaps();

});