// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';
import {
  tracking
} from './tracking.js';


$(document).ready(function() {
  alt('.hp .c1 img', 'girl in rainbow ice cream cone graphic dress');
  alt('.hp .c2 .first img', 'kids in special occasion clothes');
  alt('.hp .c2 .second img', 'family in PJs');
  alt('.hp .c2 .third img', 'baby girl in holiday outfit');
  alt('.hp .c3 .first img', 'baby in floral romper');
  alt('.hp .c3 .second img', 'baby girl in jelly fish dress');
  alt('.hp .c3 .second img', 'baby boy in shark romper');
  alt('.hp .c4 .first img', 'girl in poka dot dress');
  alt('.hp .c4 .second img', 'boy in pelican shirt');
  alt('.hp .c4 .third img', 'girl in floral thumb_loop');
  alt('.hp .c5 .first img', 'siblings in stripes');
  alt('.hp .c5 .second img', 'girl in cherry print outfit');
  alt('.hp .c5 .third img', 'baby in apple romper');
  alt('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  alt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  alt('.hp .c6 .second img', 'girls in striped dress and top');
  alt('.hp .c7 .first img', 'tea rewear');
  alt('.hp .c7 .second img', 'happy mom & son');
  alt('.hp .c7 .third img', 'learn how #teagivesback');
  alt('.hp .c7 .fourth img', 'girl in watermelon outfit');
  alt('.hp .swim img', 'watermelon graphic swimwear')

  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics');

  for (var i = 1; i < 8; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  // $('img[usemap]').rwdImageMaps();

});