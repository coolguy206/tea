
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'


$(document).ready(function() {

  new Glide('.slideshow .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration:2000,
    perView: 1,
    hoverpause:true,
    gap:0
  }).mount()

  inview('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5, .swim .c6, .swim .c7, .swim .clothes, .swim .graphics, .swim .dress-type, .swim .slideshow, .swim .reviews, .swim .leggings');

});