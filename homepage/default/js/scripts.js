const addAlt = require('./alt.js');

addAlt('.hp .c1 img', 'girl in blue overalls');
addAlt('.hp .c2 .first img', 'baby girl in purple ddress');
addAlt('.hp .c2 .second img', 'baby girl pink romper');
addAlt('.hp .c2 .third img', 'baby boy in blue outfit');
addAlt('.hp .c3 .first img', 'girl in blue dress');
addAlt('.hp .c3 .second img', 'boy in blue outfit');
addAlt('.hp .c4 .first img', 'tea logo');
addAlt('.hp .c4 .second img', 'boy in PJs');
addAlt('.hp .c5 .first img', 'girl in purple dress');
addAlt('.hp .c5 .second img', 'clothes lay down');
addAlt('.hp .c5 .third img', 'sisters in matching pattern dress');
addAlt('.hp .c5 .fourth img', 'boy in blue athletic wear');
addAlt('.hp .c6 .first img', 'baby in pink rompers');
addAlt('.hp .c6 .second img', 'clearance');
addAlt('.hp .c7 .first img', 'girl making desserts');
addAlt('.hp .c7 .second img', 'family sitting together');
addAlt('.hp .c7 .third img', 'boy in blue outfit');

const inview = require('./inview.js');

inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

const addTracking = require('./tracking.js');

for (var i = 1; i < 8; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}