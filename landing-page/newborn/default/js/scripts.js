import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';

$(document).ready(function() {
  alt('.content-wrap .c1 > a img', 'babies');
  alt('.content-wrap .c1 .the-content img', 'rainbow');
  alt('.content-wrap .c2 a[data-num="1"] img', 'rainbow romper');
  alt('.content-wrap .c2 a[data-num="2"] img', 'newborn graphic outfit');
  alt('.content-wrap .c2 a[data-num="3"] img', 'newborn graphic hats');
  alt('.content-wrap .c2 a[data-num="4"] img', 'newborn graphic sets');
  alt('.content-wrap .c3 .cell1 img', 'baby in graphic outfit');
  alt('.content-wrap .c3 .cell2 img', 'baby in rainbow graphic romper');
  alt('.content-wrap .c3 .cell3 img', 'baby in strawberry graphic outfit');
  alt('.content-wrap .c3 .cell4 img', 'baby in flower graphic dress');
  alt('.content-wrap .c4 > a img', 'graphic baby outfits');
  alt('.content-wrap .c4 .the-content img', 'flower');

  inview('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .c7, .content-wrap .c8, .content-wrap .c9');
});