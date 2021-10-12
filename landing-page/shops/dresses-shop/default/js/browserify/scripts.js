(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
"use strict";

module.exports = function (elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img'); // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);

      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-src'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-src');
      });
    }
  });
}; // $('.hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8').on('inview', function(event, isInView) {
//   if (isInView) {
//     // element is now visible in the viewport
//     // console.log('in view');
//     let imgs = $(this).find('img');
//     let width = $(window).width();
//     // console.log(imgs);
//     // console.log(width);
//     $.each(imgs, function(i, val) {
//       let src = $(val).attr('data-src');
//       // console.log(src);
//       if (src) {
//         $(val).attr('src', src);
//       }
//       $(val).removeAttr('data-src');
//     });
//   }
// });
// $('.hp .c1').on('inview', function(event, isInView) {
//   if (isInView) {
//     // element is now visible in the viewport
//     // console.log('in view');
//     let imgs = $(this).find('img');
//     let width = $(window).width();
//     // console.log(imgs);
//     // console.log(width);
//
//     $.each(imgs, function(i, val) {
//       let theClass = $(val).attr('class');
//       let src = $(val).attr('data-src');
//       // console.log(src);
//       $(val).attr('src', src);
//     });
//   }
// });


},{}],3:[function(require,module,exports){
"use strict";

var addAlt = require('./alt.js');

var inview = require('./inview.js'); // const addTracking = require('./tracking.js');


$(document).ready(function () {
  addAlt('.hp .c1 img', 'kids in purple dresses');
  addAlt('.hp .c2 .first img', 'girl in yellow flower twirl dress');
  addAlt('.hp .c2 .second img', 'girl in purple graphic wrap neck dress');
  addAlt('.hp .c2 .third img', 'girl in pink cat t-shirt dress');
  addAlt('.hp .new-arrivals .first img', 'flower empire dress');
  addAlt('.hp .new-arrivals .second img', 'a-line pattern dress');
  addAlt('.hp .new-arrivals .third img', 'rainbow graphic midi dress');
  addAlt('.hp .new-arrivals .fourth img', 'stars rompers & jumpsuits');
  addAlt('.hp .c3 .first img', 'baby in building graphic long sleeve');
  addAlt('.hp .c3 .second img', 'girls in purple 3/4 sleeves');
  addAlt('.hp .c3 .third img', 'girl in poka dat short sleeves');
  addAlt('.hp .c4 .first img', 'girls holding hands in special occasion dresses');
  addAlt('.hp .c4 .second img', 'girl in green play dress');
  addAlt('.hp .c5 .first img', 'girl leggings');
  addAlt('.hp .c6 .second img', 'girls in striped dress and top');
  addAlt('.hp .c7 .first img', 'girl with toy horse on her head');
  addAlt('.hp .c7 .second img', 'learn how #teagivesback');
  addAlt('.hp .c7 .third img', 'siblings in Tea Collection clothes');
  inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .new-arrivals'); // for (var i = 1; i < 8; i++) {
  //   addTracking('.hp .c' + i + ' a', 'c' + i);
  // }

  $('img[usemap]').rwdImageMaps();
});


},{"./alt.js":1,"./inview.js":2}]},{},[3]);
