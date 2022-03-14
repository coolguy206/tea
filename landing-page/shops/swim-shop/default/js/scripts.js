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
  alt('.swim .c1 img', 'girls in floral swimwear');
  alt('.swim .c2 .first img', 'boys in shark graphic swimwear');
  alt('.swim .c2 .second img', 'graphic swim trunks');
  alt('.swim .c2 .third img', 'baby girl in humming bird swimwear');
  alt('.swim .c3 .first img', 'girl in ice cream graphic swimwear');
  alt('.swim .c3 .second img', 'two piece swimwear');
  alt('.swim .c4 .first img', 'watermelon graphic swimwear');
  alt('.swim .c4 .second img', 'boys in shark graphic tops');
  alt('.swim .c5 .first img', 'girl in green dress');
  alt('.swim .c5 .second img', 'baby sets outfits');
  alt('.swim .c5 .third img', 'red orange pajamas');
  alt('.swim .c5 .fourth img', 'boy in stripe sweater');

  inview('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5');

  for (var i = 1; i < 8; i++) {
    tracking('.swim .c' + i + ' a', 'c' + i);
  }

});