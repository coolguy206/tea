"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alt = void 0;
var alt = exports.alt = function alt(elem, _alt) {
  // console.log(`from alt.js`);
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', _alt);
  });
};

// module.exports = function(elem, alt) {
//   // console.log(`from alt.js`);
//   let img = $(elem);
//   $.each(img, function(i, val) {
//     $(val).attr('alt', alt);
//   });
// };
//# sourceMappingURL=alt.js.map
