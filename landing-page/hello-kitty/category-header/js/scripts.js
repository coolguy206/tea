import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';

$(document).ready(function() {
  alt('.content-wrap .c1 .first img', 'tea x hello kitty logo');
  alt('.content-wrap .c1 .second img', 'girl in hello kitty dress');
  alt('.content-wrap .c1 .third img', 'baby in hello kitty romper');
  //
  inview('.content-wrap .c1, .content-wrap .c2');

  $('.load-more-wrap').after($('.content-wrap .c2'));

  $('.c2')[1].remove()


});