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

  $('.furoshiki .see-details').fancybox({
    helpers: {
      overlay: null
    }
  });

  alt('.hp .promo1 img', 'end of season sale Up to 65% off off sale styles');
  alt('.hp .promo2 img', 'end of season sale Up to 65% off off sale styles');
  alt('.hp .c1 img', 'kids in cuddly sherpa jackets');
  alt('.hp .c2 .first img', 'Baby Essentials');
  alt('.hp .c2 .second img', 'baby in outfit');
  alt('.hp .c2 .third img', 'baby girl in holiday outfit');
  alt('.hp .c3 .first img', 'baby girl in Party & Play');
  alt('.hp .c3 .second img', 'baby boy in romper');
  alt('.hp .c3 .third img', 'baby boy in Cute & Cuddly');
  alt('.hp .c4 .first img', 'girls in Twirl Famous');
  alt('.hp .c4 .second img', 'girl in Mix, Match, Relax');
  alt('.hp .c4 .third img', 'boy in Winning Combos');
  alt('.hp .hello-kitty .first img', 'girl in Hello Kitty x TEA clothes');
  alt('.hp .hello-kitty .second img', 'siblings in Happy Together');
  alt('.hp .c5 .first img', 'sweaters in Cozy Time');
  // alt('.hp .c5 .first img', 'kids in shark and whale graphic PJs');
  alt('.hp .c5 .second img', 'baby girl in graphic dress');
  alt('.hp .c5 .third img', 'girl in graphic dress');
  alt('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  alt('.hp .c6 .first img', 'girls in Light Up with Love');
  alt('.hp .c6 .second img', 'family in Slumber Party');
  alt('.hp .c7 .first img', 'tea rewear');
  alt('.hp .c7 .second img', 'clothes in make an origami bat');
  alt('.hp .c7 .third img', 'learn how #teagivesback');
  alt('.hp .c7 .fourth img', 'follow us on instagram');
  alt('.hp .swim img', 'watermelon graphic swimwear');

  inview('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .year-20, .hp .give-back, .hp .gift-guide, .hp .furoshiki, .hp .hello-kitty, .hp .hello-kitty-full, .hp .v-day' );

  for (var i = 1; i < 8; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  // $('img[usemap]').rwdImageMaps();

});