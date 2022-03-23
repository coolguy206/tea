import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';


$(document).ready(function() {
  alt('.dresses .c1 img', 'kids in pattern dresses');
  alt('.dresses .c2 .first img', 'girl in flower twirl dress');
  alt('.dresses .c2 .second img', 'girl in star fish graphic wrap neck dress');
  alt('.dresses .c2 .third img', 'girl in heart graphic t-shirt dress');
  alt('.dresses .new-arrivals .first img', 'star fish empire dress');
  alt('.dresses .new-arrivals .second img', 'cherry graphic pattern dress');
  alt('.dresses .new-arrivals .third img', 'flower graphic midi dress');
  alt('.dresses .new-arrivals .fourth img', 'lemons rompers & jumpsuits');
  alt('.dresses .c3 .first img', 'girl in strawberry graphic short sleeve dress');
  alt('.dresses .c3 .second img', 'girls in flower graphic 3/4 sleeves dress');
  alt('.dresses .c3 .third img', 'girl in flower graphic long sleeves dress');
  alt('.dresses .c4 .first img', 'special occasion dresses');
  alt('.dresses .c4 .second img', 'girl in cherry graphic play dress');
  alt('.dresses .c5 .first img', 'girl leggings');
  alt('.dresses .graphics .first img', 'floral prints');
  alt('.dresses .graphics .second img', 'animal prints');
  alt('.dresses .graphics .third img', 'stripes & dots prints');
  alt('.dresses .graphics .fourth img', 'holiday prints');

  inview('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .new-arrivals, .dresses .graphics, .dresses .give-back');

});