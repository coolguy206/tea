import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';


$(document).ready(function() {
  alt('.dresses .c1 img', 'kids in pattern dresses');
  alt('.dresses .c2 .first img', 'girl in flower twirl dress');
  alt('.dresses .c2 .second img', 'girl in fish graphic empire dress');
  alt('.dresses .c2 .third img', 'girl in floral graphic wrap neck dress');
  alt('.dresses .clothes .first img', 't-shirt dress');
  alt('.dresses .clothes .second img', 'a-line dress');
  alt('.dresses .clothes .third img', 'midi dress');
  alt('.dresses .clothes .fourth img', 'rompers & jumpsuits');
  alt('.dresses .c3 .first img', 'girl in stripe graphic short sleeve dress');
  alt('.dresses .c3 .second img', 'girl in flower graphic play dress');
  alt('.dresses .c3 .third img', 'girl in special occasion dress');
  alt('.dresses .c4 .first img', 'girl in floral graphic long sleeve dress');
  alt('.dresses .c4 .second img', 'girl leggings');
  alt('.dresses .c5 .first img', 'girl leggings');
  alt('.dresses .graphics .first img', 'floral prints');
  alt('.dresses .graphics .second img', 'animal prints');
  alt('.dresses .graphics .third img', 'fruit prints');
  alt('.dresses .graphics .fourth img', 'rainbow & stars prints');

  inview('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .clothes, .dresses .graphics, .dresses .dress-type');

});