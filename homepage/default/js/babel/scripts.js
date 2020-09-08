"use strict";

var addAlt = require('./alt.js');

addAlt('.hp .c1 img', 'girl in pink dress');
addAlt('.hp .c2 .first img', 'baby girl in stripe ddress');
addAlt('.hp .c2 .second img', 'baby in green romper');
addAlt('.hp .c2 .third img', 'baby boy in camo pants');
addAlt('.hp .c3 .first img', 'boy in light blue shirt');
addAlt('.hp .c3 .second img', 'girls in pattern dresses');
addAlt('.hp .c4 .first img', 'newborn in yellow onesies');
addAlt('.hp .c4 .second img', 'baby blue pajamas');
addAlt('.hp .c5 .first img', 'sneak a peak at sale');
addAlt('.hp .c5 .second img', 'treasures from seasons past');
addAlt('.hp .c7 .first img', 'lama eating grass');
addAlt('.hp .c7 .second img', 'tea gives back 10% of profits to ensure a better world for kids everywher');
addAlt('.hp .c7 .third img', 'girls in pink dress');

var inview = require('./inview.js');

inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

var addTracking = require('./tracking.js');

for (var i = 1; i < 8; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}
//# sourceMappingURL=scripts.js.map
