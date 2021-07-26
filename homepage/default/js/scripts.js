const addAlt = require('./alt.js');
const inview = require('./inview.js');
const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'kids holding hands walking on grass');
  addAlt('.hp .c2 .first img', 'girls holding hands in dresses and leggings');
  addAlt('.hp .c2 .second img', 'kids in graphic tees and stripe pants');
  addAlt('.hp .c2 .third img', 'girl in strip dress');
  addAlt('.hp .c3 .first img', 'baby in floral romper');
  addAlt('.hp .c3 .second img', 'girl in ladybug graphic tee');
  addAlt('.hp .c4 .first img', 'fish pattern on clothes');
  addAlt('.hp .c4 .second img', 'baby boy in crocodile graphic tee');
  addAlt('.hp .c4 .third img', 'clothes with fish patterns');
  addAlt('.hp .c5 .first img', 'boy in motorcycle graphic tee');
  addAlt('.hp .c5 .second img', 'fish & seahorse outfit');
  addAlt('.hp .c5 .third img', 'baby in strawberry graphic oneies');
  addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
  addAlt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'girl with toy horse on her head');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'sibling in Tea Collection clothes');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

  for (var i = 1; i < 8; i++) {
    addTracking('.hp .c' + i + ' a', 'c' + i);
  }

  $('img[usemap]').rwdImageMaps();

});