const addAlt = require('./alt.js');

addAlt('.hp .c1 img', 'two girls');
addAlt('.hp .c2 .first img', 'three boys');
addAlt('.hp .c2 .second img', 'two girls');
addAlt('.hp .c3 img', 'girls in swimwear');
addAlt('.hp .c4 .first img', 'baby girl');
addAlt('.hp .c4 .second img', 'two girls in pjs');
addAlt('.hp .c7 .first img', 'two girls');
addAlt('.hp .c7 .second img', 'tea gives back 10% of profits to ensure a better world for kids everywhere');
addAlt('.hp .c7 .third img', 'boy and guitar');

const inview = require('./inview.js');

inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

const addTracking = require('./tracking.js');

for (var i = 1; i < 8; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}