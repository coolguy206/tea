(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (elem, alt) {
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

addAlt('.hp .c1 img', 'girl in pink dress');
addAlt('.hp .c2 .first img', 'baby girl in stripe ddress');
addAlt('.hp .c2 .second img', 'baby in green romper');
addAlt('.hp .c2 .third img', 'baby boy in camo pants');
addAlt('.hp .c3 .first img', 'boy in light blue shirt');
addAlt('.hp .c3 .second img', 'girls in pattern dresses');
addAlt('.hp .c4 .first img', 'newborn in yellow onesies');
addAlt('.hp .c4 .second img', 'baby blue pajamas');
addAlt('.hp .c5 .first img', 'sneak a peak at sale');
addAlt('.hp .c5 .second img', 'treasures from seasons past');
addAlt('.hp .c7 .first img', 'lama eating grass');
addAlt('.hp .c7 .second img', 'tea gives back 10% of profits to ensure a better world for kids everywher');
addAlt('.hp .c7 .third img', 'girls in pink dress');

var inview = require('./inview.js');

inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7');

var addTracking = require('./tracking.js');

for (var i = 1; i < 8; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}


},{"./alt.js":1,"./inview.js":2,"./tracking.js":4}],4:[function(require,module,exports){
"use strict";

module.exports = function (elem, id) {
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


},{}]},{},[3]);
