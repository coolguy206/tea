"use strict";

module.exports = function (elem, alt) {
  // console.log(`from alt.js`);
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', alt);
  });
}; // const addAlt = (elem, alt) => {
//   let img = $(elem);
//   $.each(img, function(i, val) {
//     $(val).attr('alt', alt);
//   });
// };
//
// addAlt('.hp .c1 img', '2 girls');
// addAlt('.hp .c2 img', 'tea gives back');
// addAlt('.hp .c3 .first img', 'girl');
// addAlt('.hp .c3 .second img', 'baby');
// addAlt('.hp .c4 .first img', '2 girls');
// addAlt('.hp .c4 .second img', 'baby');
// addAlt('.hp .c7 img', 'Giving Tuesday: Giving Back for Good');
//# sourceMappingURL=alt.js.map
