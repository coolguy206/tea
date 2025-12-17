(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;
var inview = exports.inview = function inview(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img');
      // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);
      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-set');
        // console.log(src);
        if (src) {
          $(val).attr('src', src);
        }
        $(val).removeAttr('data-set');
      });
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

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promoVars = void 0;
var promoVars = exports.promoVars = {
  showPromo1: true,
  showPromo2: false,
  showPromo3: false,
  promo1Elem: '.promo1-url',
  promo2Elem: '.promo2-url',
  promo3Elem: '.promo3-url',
  girl: '',
  boy: '',
  // girl: '.promo1-url.girl',
  // boy: '.promo1-url.boy',

  babyGirl: '',
  babyBoy: '',
  // babyGirl: `.promo1-url.baby-girl`,
  // babyBoy: `.promo1-url.baby-boy`,
  // babyGirl: '.promo1-url.girl',
  // babyBoy: '.promo1-url.boy',

  toddlerGirl: '',
  toddlerBoy: '',
  // toddlerGirl: `.promo1-url.toddler-girl`,
  // toddlerBoy: `.promo1-url.toddler-boy`,
  // toddlerGirl: '.promo1-url.girl',
  // toddlerBoy: '.promo1-url.boy',

  newborn: '',
  // newborn:`.promo1-url.newborn`,
  showNewborn: false,
  swim: "",
  dress: ""
  // swim: '.promo1-url.girl',
  // dress: '.promo1-url.girl'
};

},{}],3:[function(require,module,exports){
"use strict";

var _switchNewArrivals = require("./switch-new-arrivals.js");
var _switchSale = require("./switch-sale.js");
var _inview = require("./inview.js");
$(document).ready(function () {
  // $('.menu .swimwear').text('$15 Swim');

  (0, _inview.inview)('.mega-img-container, .mega-img-bf');
  $('.dept-girl').hover(function () {
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    // $('.promo1-url.girl').show();
    $('.promo1-url').show();
    // $('.promo2-url').show();
    //  $('.promo3-url').show();
    //  $('.clearance-url').show();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo2-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-boy').hover(function () {
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    // $('.promo1-url.boy').show();
    $('.promo1-url').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo2-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-sale').hover(function () {
    // $('.promo1-url.girl').show();
    $('.promo1-url').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
    // $('.promo1-url.girl').show();
    // $('.promo2-url.girl').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-swim, .dept-dress').hover(function () {
    // $('.promo1-url.swim').show();
    // $('.promo1-url.girl').show();
    $('.promo1-url').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-baby').hover(function () {
    // $('.promo1-url.baby-girl').show();
    // $('.promo1-url.baby-boy').show();
    // $('.promo1-url.girl').show();
    $('.promo1-url').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.site-nav-submenu .bar>div').hover(function () {
    var href = $(this).find('a').first().attr('href');
    // console.log(href);

    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    if (href.indexOf('sale') == -1) {
      (0, _switchNewArrivals.switchNewArrivals)(href);
    } else {
      (0, _switchSale.switchSale)(href);
    }
  }, function () {});
});

},{"./inview.js":1,"./switch-new-arrivals.js":4,"./switch-sale.js":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchNewArrivals = void 0;
var _urls = require("./urls.js");
var _promoVars = require("./promo-vars.js");
var switchNewArrivals = exports.switchNewArrivals = function switchNewArrivals(href) {
  var promo1 = href;
  var promo2 = href;
  var promo3 = href;
  var clearance = href;
  var showPromo1 = _promoVars.promoVars.showPromo1,
    showPromo2 = _promoVars.promoVars.showPromo2,
    showPromo3 = _promoVars.promoVars.showPromo3,
    promo1Elem = _promoVars.promoVars.promo1Elem,
    promo2Elem = _promoVars.promoVars.promo2Elem,
    promo3Elem = _promoVars.promoVars.promo3Elem,
    girl = _promoVars.promoVars.girl,
    boy = _promoVars.promoVars.boy,
    babyGirl = _promoVars.promoVars.babyGirl,
    babyBoy = _promoVars.promoVars.babyBoy,
    toddlerGirl = _promoVars.promoVars.toddlerGirl,
    toddlerBoy = _promoVars.promoVars.toddlerBoy,
    newborn = _promoVars.promoVars.newborn,
    showNewborn = _promoVars.promoVars.showNewborn,
    swim = _promoVars.promoVars.swim,
    dress = _promoVars.promoVars.dress;
  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = _urls.urls.promo.girl;
      promo2 = _urls.urls.promo.select.girl;
      promo3 = _urls.urls.promo.sale.girl;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.girl !== "") {
          $(_promoVars.promoVars.girl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/boys-clothing/new-arrivals':
      promo1 = _urls.urls.promo.boy;
      promo2 = _urls.urls.promo.select.boy;
      promo3 = _urls.urls.promo.sale.boy;
      clearance = _urls.urls.promo.clearance.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.boy !== "") {
          $(_promoVars.promoVars.boy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/baby-girl-clothes/new-arrivals':
      promo1 = _urls.urls.promo.baby.girl;
      promo2 = _urls.urls.promo.select.baby.girl;
      promo3 = _urls.urls.promo.sale.baby.girl;
      clearance = _urls.urls.promo.clearance.baby.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.babyGirl !== "") {
          $(_promoVars.promoVars.babyGirl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/baby-boy-clothes/new-arrivals':
      promo1 = _urls.urls.promo.baby.boy;
      promo2 = _urls.urls.promo.select.baby.boy;
      promo3 = _urls.urls.promo.sale.baby.boy;
      clearance = _urls.urls.promo.clearance.baby.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.babyBoy !== "") {
          $(_promoVars.promoVars.babyBoy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/toddler-girls-clothes/favorites/new-arrivals':
      promo1 = _urls.urls.promo.toddler.girl;
      promo2 = _urls.urls.promo.select.toddler.girl;
      promo3 = _urls.urls.promo.sale.toddler.girl;
      clearance = _urls.urls.promo.clearance.toddler.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.toddlerGirl !== "") {
          $(_promoVars.promoVars.toddlerGirl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/toddler-boys-clothes/favorites/new-arrivals':
      promo1 = _urls.urls.promo.toddler.boy;
      promo2 = _urls.urls.promo.select.toddler.boy;
      promo3 = _urls.urls.promo.sale.toddler.boy;
      clearance = _urls.urls.promo.clearance.toddler.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.toddlerBoy !== "") {
          $(_promoVars.promoVars.toddlerBoy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      // promo1 = urls.promo.baby.newborn;
      promo1 = _urls.urls.promo.promo;
      promo2 = _urls.urls.promo.select.baby.newborn;
      promo3 = _urls.urls.promo.sale.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.newborn !== "") {
          $(_promoVars.promoVars.newborn).show();
        } else if (_promoVars.promoVars.showNewborn) {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/swim-shop':
      // promo1 =  urls.promo.select.swim;
      promo1 = _urls.urls.promo.promo;
      promo2 = _urls.urls.promo.select.promo;
      promo3 = _urls.urls.promo.sale.promo;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.swim !== "") {
          $(_promoVars.promoVars.swim).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/dresses':
      // promo1 =  urls.promo.select.swim;
      promo1 = _urls.urls.promo.promo;
      promo2 = _urls.urls.promo.select.promo;
      promo3 = _urls.urls.promo.sale.promo;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.dress !== "") {
          $(_promoVars.promoVars.dress).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    default:
      break;
  }
  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo3);
  // $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);
};

},{"./promo-vars.js":2,"./urls.js":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSale = void 0;
var _urls = require("./urls.js");
var _promoVars = require("./promo-vars.js");
// import { promoVars } from './promo-sale-vars.js';

var switchSale = exports.switchSale = function switchSale(href) {
  var promo1 = href;
  var promo2 = href;
  var promo3 = href;
  var clearance = href;
  var showPromo1 = _promoVars.promoVars.showPromo1,
    showPromo2 = _promoVars.promoVars.showPromo2,
    showPromo3 = _promoVars.promoVars.showPromo3,
    promo1Elem = _promoVars.promoVars.promo1Elem,
    promo2Elem = _promoVars.promoVars.promo2Elem,
    promo3Elem = _promoVars.promoVars.promo3Elem,
    girl = _promoVars.promoVars.girl,
    boy = _promoVars.promoVars.boy,
    babyGirl = _promoVars.promoVars.babyGirl,
    babyBoy = _promoVars.promoVars.babyBoy,
    toddlerGirl = _promoVars.promoVars.toddlerGirl,
    toddlerBoy = _promoVars.promoVars.toddlerBoy,
    newborn = _promoVars.promoVars.newborn,
    showNewborn = _promoVars.promoVars.showNewborn,
    swim = _promoVars.promoVars.swim,
    dress = _promoVars.promoVars.dress;
  switch (href) {
    case '/sale/girls-clothing/view-all':
      promo1 = _urls.urls.promo.girl;
      promo2 = _urls.urls.promo.select.girl;
      promo3 = _urls.urls.promo.sale.girl;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.girl !== "") {
          $(_promoVars.promoVars.girl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/boys-clothing/view-all':
      promo1 = _urls.urls.promo.boy;
      promo2 = _urls.urls.promo.select.boy;
      promo3 = _urls.urls.promo.sale.boy;
      clearance = _urls.urls.promo.clearance.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.boy !== "") {
          $(_promoVars.promoVars.boy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/baby-girl-clothes/view-all':
      promo1 = _urls.urls.promo.baby.girl;
      promo2 = _urls.urls.promo.select.baby.girl;
      promo3 = _urls.urls.promo.sale.baby.girl;
      clearance = _urls.urls.promo.clearance.baby.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.babyGirl !== "") {
          $(_promoVars.promoVars.babyGirl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/baby-boy-clothes/view-all':
      promo1 = _urls.urls.promo.baby.boy;
      promo2 = _urls.urls.promo.select.baby.boy;
      promo3 = _urls.urls.promo.sale.baby.boy;
      clearance = _urls.urls.promo.clearance.baby.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.babyBoy !== "") {
          $(_promoVars.promoVars.babyBoy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/toddler-girls-clothing/view-all':
      promo1 = _urls.urls.promo.toddler.girl;
      promo2 = _urls.urls.promo.select.toddler.girl;
      promo3 = _urls.urls.promo.sale.toddler.girl;
      clearance = _urls.urls.promo.clearance.toddler.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.toddlerGirl !== "") {
          $(_promoVars.promoVars.toddlerGirl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/toddler-boys-clothing/view-all':
      promo1 = _urls.urls.promo.toddler.boy;
      promo2 = _urls.urls.promo.select.toddler.boy;
      promo3 = _urls.urls.promo.sale.toddler.boy;
      clearance = _urls.urls.promo.clearance.toddler.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.toddlerBoy !== "") {
          $(_promoVars.promoVars.toddlerBoy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/newborn-clothing/view-all':
      // promo1 = urls.promo.baby.newborn;
      promo1 = _urls.urls.promo.promo;
      promo2 = _urls.urls.promo.select.baby.newborn;
      promo3 = _urls.urls.promo.sale.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.newborn !== "") {
          $(_promoVars.promoVars.newborn).show();
        } else if (_promoVars.promoVars.showNewborn) {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      //  $('.promo2-url.newborn').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    default:
      break;
  }
  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo3);
  $('.clearance-url').attr('href', clearance);
};

},{"./promo-vars.js":2,"./urls.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = exports.urls = {
  promo: {
    promo: "/clothing-sale",
    swim: "/swimwear",
    girl: "/girls-clothes",
    boy: "/boys-clothes",
    baby: {
      girl: "/baby-girl-clothes",
      boy: "/baby-boy-clothes",
      newborn: "/newborn-clothing"
    },
    toddler: {
      girl: "/toddler-girls-clothes",
      boy: "/toddler-boys-clothes"
    },
    "new": {
      girl: "/girls-clothing/new-arrivals",
      boy: "/boys-clothing/new-arrivals",
      baby: {
        girl: "/baby-girl-clothes/new-arrivals",
        boy: "/baby-boy-clothes/new-arrivals",
        newborn: "/newborn-clothes/favorites/new-arrivals"
      },
      toddler: {
        girl: "/toddler-girls-clothes/favorites/new-arrivals",
        boy: "/toddler-boys-clothes/favorites/new-arrivals"
      }
    },
    thePromo: {
      girl: "/girls-pajamas-sleepwear",
      boy: "/boys-pajamas-sleepwear",
      baby: {
        girl: "/baby-girl-pajamas",
        boy: "/baby-boy-pajamas",
        newborn: "/newborn-clothing"
      },
      toddler: {
        girl: "/toddler-girls-clothes/pajamas",
        boy: "/toddler-boys-clothes/pajamas"
      }
    },
    select: {
      promo: "/select-styles",
      family: "/select-styles/family",
      girl: "/girls-clothing/favorites/limited-time-sale",
      boy: "/boys-clothing/favorites/limited-time-sale",
      baby: {
        // girl: `/baby-girl-clothes/favorites/limited-time-sale`,
        girl: "/baby-girl-clothes/limited-time-sale",
        // boy: `/baby-boy-clothes/favorites/limited-time-sale`,
        boy: "/baby-boy-clothes/limited-time-sale",
        newborn: "/newborn-clothing/favorites/limited-time-sale",
        newborn2: "/select-styles/newborn"
      },
      toddler: {
        girl: "/select-styles/toddler-girls-clothes/favorites/limited-time-sale",
        boy: "/select-styles/toddler-boys-clothes/favorites/limited-time-sale"
      }
    },
    select2: {
      promo: "/select-styles",
      family: "/select-styles/family",
      girl: "/select-styles?gender%5B%5D=girl",
      boy: "/select-styles?gender%5B%5D=boy",
      baby: {
        girl: "/select-styles?gender%5B%5D=girl&gender%5B%5D=baby%20girl&size%5B%5D=0%20to%203%20months&size%5B%5D=3%20to%206%20months&size%5B%5D=6%20to%209%20months&size%5B%5D=9%20to%2012%20months&size%5B%5D=12%20to%2018%20months&size%5B%5D=18%20to%2024%20months&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D=",
        boy: "/select-styles?gender%5B%5D=boy&gender%5B%5D=baby%20boy&size%5B%5D=0%20to%203%20months&size%5B%5D=3%20to%206%20months&size%5B%5D=6%20to%209%20months&size%5B%5D=9%20to%2012%20months&size%5B%5D=12%20to%2018%20months&size%5B%5D=18%20to%2024%20months&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D=",
        newborn: "/newborn-clothing/favorites/limited-time-sale",
        newborn2: "/select-styles/newborn"
      },
      toddler: {
        girl: "/select-styles?gender%5B%5D=girl&gender%5B%5D=baby%20girl&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D=",
        boy: "/select-styles?gender%5B%5D=boy&gender%5B%5D=baby%20boy&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D="
      }
    },
    sale: {
      promo: "/clothing-sale",
      girl: "/sale/girls-clothing/view-all ",
      boy: "/sale/boys-clothing/view-all",
      baby: {
        girl: "/sale/baby-girl-clothes/view-all",
        boy: "/sale/baby-boy-clothes/view-all",
        newborn: "/sale/newborn-clothing/view-all"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/view-all",
        boy: "/sale/toddler-boys-clothing/view-all"
      }
    },
    clearance: {
      promo: "/sale/clearance",
      girl: "/sale/girls-clothing/clearance",
      boy: "/sale/boys-clothing/clearance",
      baby: {
        girl: "/sale/baby-girl-clothes/clearance",
        boy: "/sale/baby-boy-clothes/clearance",
        newborn: "/sale/newborn-clothing/clearance"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/clearance",
        boy: "/sale/toddler-boys-clothing/clearance"
      }
    },
    warehouse: {
      promo: "/warehousesale",
      girl: "/warehousesale-girls",
      boy: "/warehousesale-boys",
      baby: {
        girl: "/warehousesale-baby-girl",
        boy: "/warehousesale-baby-boy",
        newborn: "/warehousesale-newborn"
      },
      toddler: {
        girl: "/warehousesale-toddler-girls",
        boy: "/warehousesale-toddler-boys"
      }
    },
    blackFriday: {
      promo: "/black-friday",
      girl: "/black-friday?gender%5B%5D=girl",
      boy: "/black-friday?gender%5B%5D=boy",
      baby: {
        girl: "/black-friday?gender%5B%5D=girl&gender%5B%5D=baby%20girl&size%5B%5D=0%20to%203%20months&size%5B%5D=3%20to%206%20months&size%5B%5D=6%20to%209%20months&size%5B%5D=9%20to%2012%20months&size%5B%5D=12%20to%2018%20months&size%5B%5D=18%20to%2024%20months&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D=",
        boy: "/black-friday?gender%5B%5D=boy&gender%5B%5D=baby%20boy&size%5B%5D=0%20to%203%20months&size%5B%5D=3%20to%206%20months&size%5B%5D=6%20to%209%20months&size%5B%5D=9%20to%2012%20months&size%5B%5D=12%20to%2018%20months&size%5B%5D=18%20to%2024%20months&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D=",
        newborn: "/newborn-clothing"
      },
      toddler: {
        girl: "/black-friday?gender%5B%5D=girl&gender%5B%5D=baby%20girl&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D=",
        boy: "/black-friday?gender%5B%5D=boy&gender%5B%5D=baby%20boy&size%5B%5D=2t&size%5B%5D=3t&size%5B%5D=4t&size%5B%5D=2%20years&size%5B%5D=3%20years&size%5B%5D=4%20years&size%5B%5D=xs&size%5B%5D=s&store_price%5B%5D="
      }
    }
  }
};

},{}]},{},[3]);
