import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';
// import {
//   tracking
// } from './tracking.js';

$(document).ready(function() {
  alt('.hp .c1 img', 'kids in pattern dresses');
  alt('.hp .c2 .first img', 'girl in flower twirl dress');
  alt('.hp .c2 .second img', 'girl in star fish graphic wrap neck dress');
  alt('.hp .c2 .third img', 'girl in heart graphic t-shirt dress');
  alt('.hp .new-arrivals .first img', 'star fish empire dress');
  alt('.hp .new-arrivals .second img', 'cherry graphic pattern dress');
  alt('.hp .new-arrivals .third img', 'flower graphic midi dress');
  alt('.hp .new-arrivals .fourth img', 'lemons rompers & jumpsuits');
  alt('.hp .c3 .first img', 'girl in strawberry graphic short sleeve dress');
  alt('.hp .c3 .second img', 'girls in flower graphic 3/4 sleeves dress');
  alt('.hp .c3 .third img', 'girl in flower graphic long sleeves dress');
  alt('.hp .c4 .first img', 'special occasion dresses');
  alt('.hp .c4 .second img', 'girl in cherry graphic play dress');
  alt('.hp .c5 .first img', 'girl leggings');
  alt('.hp .graphics .first img', 'floral prints');
  alt('.hp .graphics .second img', 'animal prints');
  alt('.hp .graphics .third img', 'stripes & dots prints');
  alt('.hp .graphics .fourth img', 'holiday prints');


  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .new-arrivals, .hp .graphics');

  // for (var i = 1; i < 8; i++) {
  //   addTracking('.hp .c' + i + ' a', 'c' + i);
  // }

  // $('img[usemap]').rwdImageMaps();

});