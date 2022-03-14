(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
      clearance = _urls.urls.promo1.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.boy;
      promo2 = _urls.urls.promo1.boy;
      clearance = _urls.urls.promo1.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = _urls.urls.promo1.baby.girl;
      promo2 = _urls.urls.promo1.baby.girl;
      clearance = _urls.urls.promo1.baby.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = _urls.urls.promo1.baby.boy;
      promo2 = _urls.urls.promo1.baby.boy;
      clearance = _urls.urls.promo1.baby.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.girl;
      promo2 = _urls.urls.promo1.toddler.girl;
      clearance = _urls.urls.promo1.toddler.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.boy;
      promo2 = _urls.urls.promo1.toddler.boy;
      clearance = _urls.urls.promo1.toddler.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = _urls.urls.promo1.baby.newborn;
      promo2 = _urls.urls.promo1.baby.newborn;
      clearance = _urls.urls.promo1.baby.newborn; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/tween-girls-clothing/view-all':
      promo1 = _urls.urls.promo1.tween;
      promo2 = _urls.urls.promo1.tween;
      clearance = _urls.urls.promo1.tween;
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
  $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);
};

exports.switchSale = switchSale;


},{"./urls.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = {
  promo1: {
    babyPromo: "/black-friday",
    girl: "/girls-clothing/favorites/limited-time-sale",
    boy: "/boys-clothing/favorites/limited-time-sale",
    tween: "/tween-girls-clothing",
    baby: {
      girl: "/baby-girl-clothes/favorites/limited-time-sale",
      boy: "/baby-boy-clothes/favorites/limited-time-sale",
      newborn: "/newborn-clothing/favorites/limited-time-sale"
    },
    toddler: {
      girl: "/select-styles/toddler-girls-clothes/favorites/limited-time-sale",
      boy: "/select-styles/toddler-boys-clothes/favorites/limited-time-sale"
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
    girl: "/girls-clothing/favorites/limited-time-sale",
    boy: "/boys-clothing/favorites/limited-time-sale",
    tween: "/sale/tween-girls-clothing/clearance",
    baby: {
      girl: "/baby-girl-clothes/favorites/limited-time-sale",
      boy: "/baby-boy-clothes/favorites/limited-time-sale",
      newborn: "/warehousesale-newborn"
    },
    toddler: {
      girl: "/select-styles/toddler-girls-clothes/favorites/limited-time-sale",
      boy: "/select-styles/toddler-boys-clothes/favorites/limited-time-sale"
    }
  }
};
exports.urls = urls;


},{}]},{},[1]);
