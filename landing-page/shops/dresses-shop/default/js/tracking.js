export const tracking = function(elem, id) {
  // console.log(`from tracking.js`);
  let a = $(elem);
  $.each(a, function(j, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
};

// module.exports = function(elem, id) {
//   // console.log(`from tracking.js`);
//   let a = $(elem);
//   $.each(a, function(j, val) {
//     $(val).addClass('hp-url').attr({
//       'data-page': 'home page',
//       'id': id
//     });
//   });
// };