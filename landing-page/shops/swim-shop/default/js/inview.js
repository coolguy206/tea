export const inview = function(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function(event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      let imgs = $(this).find('img');
      // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);
      $.each(imgs, function(i, val) {
        let src = $(val).attr('data-src');
        // console.log(src);
        if (src) {
          $(val).attr('src', src);
        }
        $(val).removeAttr('data-src');
      });

      $(this).css('visibility', 'visible');
    }
  });
};

// module.exports = function(elem) {
//   // console.log(`from inview.js`);
//   $(elem).on('inview', function(event, isInView) {
//     if (isInView) {
//       // element is now visible in the viewport
//       // console.log('in view');
//       let imgs = $(this).find('img');
//       // let width = $(window).width();
//       // console.log(imgs);
//       // console.log(width);
//       $.each(imgs, function(i, val) {
//         let src = $(val).attr('data-src');
//         // console.log(src);
//         if (src) {
//           $(val).attr('src', src);
//         }
//         $(val).removeAttr('data-src');
//       });
//     }
//   });
// };