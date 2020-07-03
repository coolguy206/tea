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

  switch (href) {
    case '/sale/girls-clothing/view-all':
      promo1 = _urls.urls.promo1.sale.girl;
      promo2 = _urls.urls.promo2.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/boys-clothing/view-all':
      promo1 = _urls.urls.promo1.sale.boy;
      promo2 = _urls.urls.promo2.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = _urls.urls.promo1.sale.baby.girl;
      promo2 = _urls.urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = _urls.urls.promo1.sale.baby.boy;
      promo2 = _urls.urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = _urls.urls.promo1.sale.toddler.girl;
      promo2 = _urls.urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = _urls.urls.promo1.sale.toddler.boy;
      promo2 = _urls.urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = _urls.urls.promo1.sale.baby.newborn;
      promo2 = _urls.urls.promo2.baby.newborn;
      $('.promo1-url').show();
      $('.promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/tween-girls-clothing/view-all':
      promo1 = _urls.urls.promo1.sale.tween;
      promo2 = _urls.urls.promo2.tween;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    default:
      break;
  }
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
    girl: "/girls-clothing/new-arrivals",
    boy: "/boys-clothing/new-arrivals",
    tween: "/tween-girls-clothing/favorites/new-arrivals",
    baby: {
      girl: "/baby-girl-clothes/new-arrivals",
      boy: "/baby-boy-clothes/new-arrivals",
      newborn: "/newborn-clothes/favorites/new-arrivals"
    },
    toddler: {
      girl: "/toddler-girls-clothes/favorites/new-arrivals",
      boy: "/toddler-boys-clothes/favorites/new-arrivals"
    },
    sale: {
      girl: "/sale/girls-clothing/view-all",
      boy: "/sale/boys-clothing/view-all",
      tween: "/sale/tween-girls-clothing/view-all",
      baby: {
        girl: "/sale/baby-girl-clothes/view-all",
        boy: "/sale/baby-boy-clothes/view-all",
        newborn: "/sale/newborn-clothing/view-all"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/view-all",
        boy: "/sale/toddler-boys-clothing/view-all"
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
