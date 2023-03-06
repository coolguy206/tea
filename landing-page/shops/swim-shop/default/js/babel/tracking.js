"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracking = void 0;

var tracking = function tracking(elem, id) {
  // console.log(`from tracking.js`);
  var a = $(elem);
  $.each(a, function (j, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
}; // module.exports = function(elem, id) {
//   // console.log(`from tracking.js`);
//   let a = $(elem);
//   $.each(a, function(j, val) {
//     $(val).addClass('hp-url').attr({
//       'data-page': 'home page',
//       'id': id
//     });
//   });
// };


exports.tracking = tracking;
//# sourceMappingURL=tracking.js.map
