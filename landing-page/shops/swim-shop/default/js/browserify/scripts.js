(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
};

exports.alt = alt;


},{}],2:[function(require,module,exports){
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
    }
  });
};

exports.inview = inview;


},{}],3:[function(require,module,exports){
"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

$(document).ready(function () {
  (0, _alt.alt)('.swim .c1 img', 'girls in floral swimwear');
  (0, _alt.alt)('.swim .c2 .first img', 'boys in shark graphic swimwear');
  (0, _alt.alt)('.swim .c2 .second img', 'graphic swim trunks');
  (0, _alt.alt)('.swim .c2 .third img', 'baby girl in humming bird swimwear');
  (0, _alt.alt)('.swim .c3 .first img', 'girl in ice cream graphic swimwear');
  (0, _alt.alt)('.swim .c3 .second img', 'two piece swimwear');
  (0, _alt.alt)('.swim .c4 .first img', 'watermelon graphic swimwear');
  (0, _alt.alt)('.swim .c4 .second img', 'boys in shark graphic tops');
  (0, _alt.alt)('.swim .c5 .first img', 'girl in green dress');
  (0, _alt.alt)('.swim .c5 .second img', 'baby sets outfits');
  (0, _alt.alt)('.swim .c5 .third img', 'red orange pajamas');
  (0, _alt.alt)('.swim .c5 .fourth img', 'boy in stripe sweater');
  (0, _inview.inview)('.swim .c1, .swim .c2, .swim .c3, .swim .c4, .swim .c5');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.swim .c' + i + ' a', 'c' + i);
  }
});


},{"./alt.js":1,"./inview.js":2,"./tracking.js":4}],4:[function(require,module,exports){
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
};

exports.tracking = tracking;


},{}]},{},[3]);
