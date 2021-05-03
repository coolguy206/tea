(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (elem, alt) {
  console.log("from alt.js");
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
  console.log("from inview.js");
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

var inview = require('./inview.js');

var addTracking = require('./tracking.js');

$(document).ready(function () {
  addAlt('.swim .c1 img', 'girls in purple & pink dresses');
  addAlt('.swim .c2 .first img', 'boy in plaid shirt');
  addAlt('.swim .c2 .second img', 'baby in yellow romper');
  addAlt('.swim .c2 .third img', 'girl in glue green dress');
  addAlt('.swim .c3 .first img', 'kids in plaid clothes');
  addAlt('.swim .c3 .second img', 'boy in dark blue swimwear');
  addAlt('.swim .c4 .first img', 'plaid outfits');
  addAlt('.swim .c4 .second img', 'boy in PJs');
  addAlt('.swim .c5 .first img', 'girl in green dress');
  addAlt('.swim .c5 .second img', 'baby sets outfits');
  addAlt('.swim .c5 .third img', 'red orange pajamas');
  addAlt('.swim .c5 .fourth img', 'boy in stripe sweater');
  inview('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5');

  for (var i = 1; i < 8; i++) {
    addTracking('.swim .c' + i + ' a', 'c' + i);
  }
});


},{"./alt.js":1,"./inview.js":2,"./tracking.js":4}],4:[function(require,module,exports){
"use strict";

module.exports = function (elem, id) {
  console.log("from tracking.js");
  var a = $(elem);
  $.each(a, function (j, val) {
    $(val).addClass('swim-url').attr({
      'data-page': 'swim shop page',
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


},{}]},{},[3]);
