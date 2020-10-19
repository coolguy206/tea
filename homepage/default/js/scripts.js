const addAlt = require('./alt.js');

addAlt('.hp .c1 img', 'girl and baby girl in dress');
addAlt('.hp .c2 .first img', 'baby in white romper');
addAlt('.hp .c2 .second img', 'baby girl red dress');
addAlt('.hp .c2 .third img', 'baby boy in holiday outfit');
addAlt('.hp .c3 .first img', 'girl in blue dress');
addAlt('.hp .c3 .second img', 'boy in train graphic tee');
addAlt('.hp .c4 .first img', 'plaid outfits');
// addAlt('.hp .c4 .second img', 'boy in PJs');
addAlt('.hp .c5 .first img', 'girl in green dress');
addAlt('.hp .c5 .second img', 'baby sets outfits');
addAlt('.hp .c5 .third img', 'red orange pajamas');
addAlt('.hp .c5 .fourth img', 'boy in stripe sweater');
addAlt('.hp .c6 .first img', 'girl in blue dress');
addAlt('.hp .c6 .second img', 'clearance');
addAlt('.hp .c7 .first img', 'girl with chicken top');
addAlt('.hp .c7 .second img', 'family sitting together');
addAlt('.hp .c7 .third img', 'two toddlers in pajamas');

const inview = require('./inview.js');

inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

const addTracking = require('./tracking.js');

for (var i = 1; i < 8; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}