(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _switchNewArrivals = require("./switch-new-arrivals.js");

var _switchSale = require("./switch-sale.js");

$(document).ready(function () {
  // $('.menu .swimwear').text('$15 Swim');
  $('.dept-girl, .dept-baby').hover(function () {
    $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

    $('.promo2-url').hide();
    $('.clearance-url').hide();
  }, function () {});
  $('.dept-sale').hover(function () {
    $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

    $('.promo2-url').hide(); // $('.clearance-url').hide();
  }, function () {});
  $('.dept-boy').hover(function () {
    $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

    $('.promo2-url').hide();
    $('.clearance-url').hide();
  }, function () {});
  $('.site-nav-submenu .bar>div').hover(function () {
    var href = $(this).find('a').first().attr('href'); // console.log(href);

    $('.promo1-url, .promo2-url, .clearance-url').hide();

    if (href.indexOf('sale') == -1) {
      (0, _switchNewArrivals.switchNewArrivals)(href);
    } else {
      (0, _switchSale.switchSale)(href);
    }
  }, function () {});
});


},{"./switch-new-arrivals.js":2,"./switch-sale.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchNewArrivals = void 0;

var _urls = require("./urls.js");

var switchNewArrivals = function switchNewArrivals(href) {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.girl;
      promo2 = _urls.urls.promo1.girl;
      clearance = _urls.urls.promo2.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/boys-clothing/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.boy;
      promo2 = _urls.urls.promo1.boy;
      clearance = _urls.urls.promo2.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.baby.girl;
      promo2 = _urls.urls.promo1.baby.girl;
      clearance = _urls.urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.baby.boy;
      promo2 = _urls.urls.promo1.baby.boy;
      clearance = _urls.urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.girl;
      promo2 = _urls.urls.promo1.toddler.girl;
      clearance = _urls.urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.boy;
      promo2 = _urls.urls.promo1.toddler.boy;
      clearance = _urls.urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = _urls.urls.promo1.baby.newborn;
      promo2 = _urls.urls.promo1.baby.newborn;
      clearance = _urls.urls.promo2.baby.newborn;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    case '/tween-girls-clothing/favorites/new-arrivals':
      promo1 = _urls.urls.promo1.tween;
      promo2 = _urls.urls.promo1.tween;
      clearance = _urls.urls.promo2.tween;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.clearance-url').attr('href', clearance);
};

exports.switchNewArrivals = switchNewArrivals;


},{"./urls.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSale = void 0;

var _urls = require("./urls.js");

var switchSale = function switchSale(href) {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {
    case '/sale/girls-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.girl;
      promo2 = _urls.urls.promo1.girl;
      clearance = _urls.urls.promo2.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.boy;
      promo2 = _urls.urls.promo1.boy;
      clearance = _urls.urls.promo2.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = _urls.urls.promo1.baby.girl;
      promo2 = _urls.urls.promo1.baby.girl;
      clearance = _urls.urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = _urls.urls.promo1.baby.boy;
      promo2 = _urls.urls.promo1.baby.boy;
      clearance = _urls.urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.girl;
      promo2 = _urls.urls.promo1.toddler.girl;
      clearance = _urls.urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.boy;
      promo2 = _urls.urls.promo1.toddler.boy;
      clearance = _urls.urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = _urls.urls.promo1.baby.newborn;
      promo2 = _urls.urls.promo1.baby.newborn;
      clearance = _urls.urls.promo2.baby.newborn;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/sale/tween-girls-clothing/view-all':
      promo1 = _urls.urls.promo1.tween;
      promo2 = _urls.urls.promo1.tween;
      clearance = _urls.urls.promo2.tween;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();
      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.clearance-url').attr('href', clearance);
};

exports.switchSale = switchSale;


},{"./urls.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = {
  promo1: {
    babyPromo: "/baby-clothes",
    girl: "/girls-pajamas-sleepwear",
    boy: "/boys-pajamas-sleepwear",
    tween: "/tween-girls-clothing",
    baby: {
      girl: "/baby-girl-pajamas",
      boy: "/baby-boy-pajamas",
      newborn: "/newborn-clothes/favorites/new-arrivals"
    },
    toddler: {
      girl: "/toddler-girls-clothes/pajamas",
      boy: "/toddler-boys-clothes/pajamas"
    },
    sale: {
      girl: "/sale/girls-clothing/",
      boy: "/sale/boys-clothing/",
      tween: "/sale/tween-girls-clothing/",
      baby: {
        girl: "/sale/baby-girl-clothes/",
        boy: "/sale/baby-boy-clothes/",
        newborn: "/sale/newborn-clothing/"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/",
        boy: "/sale/toddler-boys-clothing/"
      }
    }
  },
  promo2: {
    girl: "/sale/girls-clothing/clearance",
    boy: "/sale/boys-clothing/clearance",
    tween: "/sale/tween-girls-clothing/clearance",
    baby: {
      girl: "/sale/baby-girl-clothes/clearance",
      boy: "/sale/baby-boy-clothes/clearance",
      newborn: "/sale/newborn-clothing/clearance"
    },
    toddler: {
      girl: "/sale/toddler-girls-clothing/clearance",
      boy: "/sale/toddler-boys-clothing/clearance"
    }
  }
};
exports.urls = urls;


},{}]},{},[1]);
