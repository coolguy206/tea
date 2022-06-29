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
import Glide from '@glidejs/glide'

$(document).ready(function() {

  new Glide('.glide', {
    type: 'carousel',
    //autoplay: 2000,
  }).mount()

  alt('.hp .promo1 img', 'the summer clearance event take up to 75% off sale items');
  alt('.hp .promo2 img', 'one day only $5 flash sale');
  alt('.hp .c1 img', 'girl in pineapple graphic outfit');
  alt('.hp .c2 .first img', 'family at the pool');
  alt('.hp .c2 .second img', 'kids in special occasion clothes');
  alt('.hp .c2 .third img', 'baby girl in holiday outfit');
  alt('.hp .c3 .first img', 'baby girl in monkey graphic romper');
  alt('.hp .c3 .second img', 'baby boy in jungle graphic tee');
  alt('.hp .c3 .second img', 'baby girl in orange slices graphic dress');
  alt('.hp .c4 .first img', 'girl in banana graphic dress');
  alt('.hp .c4 .second img', 'kids in animal graphic clothes');
  alt('.hp .c4 .third img', 'girl in butterfly graphic dress');
  alt('.hp .c5 .first img', 'girl in ice cream graphic PJs');
  // alt('.hp .c5 .first img', 'kids in shark and whale graphic PJs');
  alt('.hp .c5 .second img', 'girl in floral graphic dress');
  alt('.hp .c5 .third img', 'baby in floral romper');
  alt('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  alt('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  alt('.hp .c6 .second img', 'girls in striped dress and top');
  alt('.hp .c7 .first img', 'tea rewear');
  alt('.hp .c7 .second img', 'floral graphic');
  alt('.hp .c7 .third img', 'learn how #teagivesback');
  alt('.hp .c7 .fourth img', 'girl in floral graphic dress');
  alt('.hp .swim img', 'watermelon graphic swimwear');

  inview('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .year-20, .hp .give-back');

  for (var i = 1; i < 8; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  // $('img[usemap]').rwdImageMaps();

});