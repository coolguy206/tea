(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {

  hp: {
    name: 'default',
    ftp: {
      css: {
        src: 'default/css/uncss/',
        dest: 'homepage/2022/0414/css/v1/',
        file: 'styles.css'
      },
      js: {
        src: 'default/js/jsmin/',
        dest: 'homepage/2022/0414/js/v1/',
        file: 'scripts.min.js'
      }
    },
  },
  megaMenu: {
    ftp: {
      css: {
        src: 'css/',
        dest: 'mega-menu/2022/0414/css/v1/',
      },
      js: {
        src: 'js/jsmin/',
        dest: 'mega-menu/2022/0414/js/v1/',
      }
    },
  },
  cat: {
    name: 'default'
  },
  landing: {
    name: 'sweeps/20th-sweeps'
  },
  zone: {
    name: 'mega-menu/top-nav',
    ftp: {
      css: {
        src: 'mega-menu/top-nav/css/',
        dest: 'content-zone/mega-menu/top-nav/2022/0414/css/v0/',
      },
      js: {
        src: 'mega-menu/top-nav/js/jsmin/',
        dest: 'content-zone/mega-menu/top-nav/2022/0414/js/v0/',
      }
    },
  },
  promo: {
    name: 'default',
    ftp: {
      css: {
        src: 'default/css/',
        dest: 'promos/one-offs/2022/0414/css/v2/',
      },
      js: {
        src: 'default/js/jsmin/',
        dest: 'promos/one-offs/2022/0414/js/v2/',
      }
    },
  }

};
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alt = void 0;

var alt = function alt(elem, _alt) {
  // console.log(`from alt.js`);
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', _alt);
  });
}; // module.exports = function(elem, alt) {
//   // console.log(`from alt.js`);
//   let img = $(elem);
//   $.each(img, function(i, val) {
//     $(val).attr('alt', alt);
//   });
// };


exports.alt = alt;


},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;

var inview = function inview(elem) {
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
      $(this).css('visibility', 'visible');
    }
  });
}; // module.exports = function(elem) {
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


exports.inview = inview;


},{}],4:[function(require,module,exports){
"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
var config = require("./../../../../gruntConfig.js"); // var linkElem = `<link rel="stylesheet" href="/mas_assets/media/tea_collection/${config.hp.ftp.css.dest}${config.hp.ftp.css.file}">`;
// console.log(linkElem);
//
// $('.hp').after(linkElem);


$(document).ready(function () {
  (0, _alt.alt)('.hp .promo1 img', 'babies');
  (0, _alt.alt)('.hp .c1 img', 'kids on the beach');
  (0, _alt.alt)('.hp .c2 .first img', 'family at the pool');
  (0, _alt.alt)('.hp .c2 .second img', 'kids in special occasion clothes');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in leopard print tee');
  (0, _alt.alt)('.hp .c3 .second img', 'baby girl in pink dress');
  (0, _alt.alt)('.hp .c4 .first img', 'girl in watermelon graphic dress');
  (0, _alt.alt)('.hp .c4 .second img', 'kids in summer graphic clothes');
  (0, _alt.alt)('.hp .c4 .third img', 'girl in beach clothes');
  (0, _alt.alt)('.hp .c5 .first img', 'kids in shark and whale graphic PJs');
  (0, _alt.alt)('.hp .c5 .second img', 'girl in floral graphic dress');
  (0, _alt.alt)('.hp .c5 .third img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  (0, _alt.alt)('.hp .c6 .second img', 'girls in striped dress and top');
  (0, _alt.alt)('.hp .c7 .first img', 'tea rewear');
  (0, _alt.alt)('.hp .c7 .second img', 'happy mom & son');
  (0, _alt.alt)('.hp .c7 .third img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .fourth img', 'baby girl in rainbow graphic dress');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .give-back');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});


},{"./../../../../gruntConfig.js":1,"./alt.js":2,"./inview.js":3,"./tracking.js":5}],5:[function(require,module,exports){
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


},{}]},{},[4]);
