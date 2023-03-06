import {
  alt
} from './alt.js';
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


  alt('.dresses .c1 img', 'kids in pattern swimwear');
  alt('.dresses .c2 .first img', 'girl in flower twirl dress');
  alt('.dresses .c2 .second img', 'girl in fish graphic empire dress');
  alt('.dresses .c2 .third img', 'girl in floral graphic wrap neck dress');
  alt('.dresses .clothes .first img', 'one pieces');
  alt('.dresses .clothes .second img', 'two pieces');
  alt('.dresses .clothes .third img', 'rash guards');
  alt('.dresses .clothes .fourth img', 'swim trunks');
  alt('.dresses .clothes .fifth img', 'baby swim');
  alt('.dresses .clothes .sixth img', 'famiily swim');
  alt('.dresses .c3 .first img', 'girl in stripe graphic short sleeve dress');
  alt('.dresses .c3 .second img', 'girl in flower graphic play dress');
  alt('.dresses .c3 .third img', 'girl in special occasion dress');
  alt('.dresses .c4 .first img', 'girl in floral graphic long sleeve dress');
  alt('.dresses .c4 .second img', 'girl leggings');
  alt('.dresses .c5 .first img', 'girl leggings');
  alt('.dresses .leggings img', 'family swim');
  alt('.dresses .graphics .first img', 'floral prints');
  alt('.dresses .graphics .second img', 'animal prints');
  alt('.dresses .graphics .third img', 'fruit prints');
  alt('.dresses .graphics .fourth img', 'rainbow & stars prints');

  inview('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .clothes, .dresses .graphics, .dresses .dress-type, .dresses .slideshow, .dresses .reviews, .dresses .leggings');

});