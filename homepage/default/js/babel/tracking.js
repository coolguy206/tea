"use strict";

module.exports = function (elem, id) {
  // console.log(`from tracking.js`);
  var a = $(elem);
  $.each(a, function (j, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
}; // const addTracking = (elem, id) => {
//   let a = $(elem);
//   $.each(a, function(j, val) {
//     $(val).addClass('hp-url').attr({
//       'data-page': 'home page',
//       'id': id
//     });
//   });
// };
// for (let i = 1; i < 9; i++) {
//   addTracking('.hp .c' + i + ' a', 'c' + i);
// }
//# sourceMappingURL=tracking.js.map
