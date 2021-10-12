const addAlt = require('./alt.js');
const inview = require('./inview.js');
// const addTracking = require('./tracking.js');

$(document).ready(function() {
  addAlt('.hp .c1 img', 'kids in purple dresses');
  addAlt('.hp .c2 .first img', 'girl in yellow flower twirl dress');
  addAlt('.hp .c2 .second img', 'girl in purple graphic wrap neck dress');
  addAlt('.hp .c2 .third img', 'girl in pink cat t-shirt dress');
  addAlt('.hp .new-arrivals .first img', 'flower empire dress');
  addAlt('.hp .new-arrivals .second img', 'a-line pattern dress');
  addAlt('.hp .new-arrivals .third img', 'rainbow graphic midi dress');
  addAlt('.hp .new-arrivals .fourth img', 'stars rompers & jumpsuits');
  addAlt('.hp .c3 .first img', 'baby in building graphic long sleeve');
  addAlt('.hp .c3 .second img', 'girls in purple 3/4 sleeves');
  addAlt('.hp .c3 .third img', 'girl in poka dat short sleeves');
  addAlt('.hp .c4 .first img', 'girls holding hands in special occasion dresses');
  addAlt('.hp .c4 .second img', 'girl in green play dress');
  addAlt('.hp .c5 .first img', 'girl leggings');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'girl with toy horse on her head');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'siblings in Tea Collection clothes');

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .new-arrivals');

  // for (var i = 1; i < 8; i++) {
  //   addTracking('.hp .c' + i + ' a', 'c' + i);
  // }

  $('img[usemap]').rwdImageMaps();

});