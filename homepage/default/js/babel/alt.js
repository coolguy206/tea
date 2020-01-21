"use strict";

var addAlt = function addAlt(elem, alt) {
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', alt);
  });
};

addAlt('.hp .c1 .slide0 img', 'girl and boy');
addAlt('.hp .c1 .slide1 img', 'boy & girl');
addAlt('.hp .c1 .slide2 img', 'boy & girl in PJs'); // addAlt('.hp .c1 .slide3 img', 'girl & boy');
// addAlt('.hp .c1 .slide4 img', 'kids in pajamas');

addAlt('.hp .c2 img', 'tea gives back');
addAlt('.hp .c3 .first img', 'girl');
addAlt('.hp .c3 .second img', 'baby');
addAlt('.hp .c4 .second img', 'girl');
addAlt('.hp .c5 .first img', '2 girls');
addAlt('.hp .c5 .second img', 'baby clothes');
addAlt('.hp .c6 .second img', '2 girls');
addAlt('.hp .c7 img', 'Giving Tuesday: Giving Back for Good');
//# sourceMappingURL=alt.js.map
