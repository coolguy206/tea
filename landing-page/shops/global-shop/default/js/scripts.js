
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'


$(document).ready(function () {

  new Glide('.slideshow .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount()

  inview('.wrapper .c1, .wrapper .c2, .wrapper .c3, .wrapper .clothes, .wrapper .slideshow');

});