(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.girl;
      promo2 = _urls.urls.promo.thePromo.girl;
      clearance = _urls.urls.promo.clearance.girl;
      $('.promo1-url.girl').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.boy;
      promo2 = _urls.urls.promo.thePromo.boy;
      clearance = _urls.urls.promo.clearance.boy;
      $('.promo1-url.boy').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.baby.girl;
      promo2 = _urls.urls.promo.thePromo.baby.girl;
      clearance = _urls.urls.promo.clearance.baby.girl;
      $('.promo1-url.baby-girl').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.baby.boy;
      promo2 = _urls.urls.promo.thePromo.baby.boy;
      clearance = _urls.urls.promo.clearance.baby.boy;
      $('.promo1-url.baby-boy').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.toddler.girl;
      promo2 = _urls.urls.promo.thePromo.toddler.girl;
      clearance = _urls.urls.promo.clearance.toddler.girl;
      $('.promo1-url.toddler-girl').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.toddler.boy;
      promo2 = _urls.urls.promo.thePromo.toddler.boy;
      clearance = _urls.urls.promo.clearance.toddler.boy;
      $('.promo1-url.toddler-boy').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      // promo1 = urls.promo.thePromo.promo;
      promo1 = _urls.urls.promo.thePromo.baby.newborn;
      promo2 = _urls.urls.promo.thePromo.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn; // $('.promo1-url.newborn').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();

      $('.promo1-url').hide(); // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/swim-shop':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.thePromo.girl;

      promo2 = _urls.urls.promo.promo;
      clearance = _urls.urls.promo.clearance.girl;
      $('.promo1-url.swim').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);
};

exports.switchNewArrivals = switchNewArrivals;


},{"./urls.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = {
  promo: {
    promo: "/swimwear",
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
    thePromo: {
      girl: "/girls-swimwear",
      boy: "/boys-swimwear",
      baby: {
        girl: "/baby-girl-swimwear",
        boy: "/baby-boy-swimwear",
        newborn: "/newborn-clothing"
      },
      toddler: {
        girl: "/toddler-girls-clothes/swim",
        boy: "/toddler-boys-clothes/swim"
      }
    },
    select: {
      family: "/select-styles/family",
      girl: "/girls-clothing/favorites/limited-time-sale",
      boy: "/boys-clothing/favorites/limited-time-sale",
      baby: {
        girl: "/baby-girl-clothes/favorites/limited-time-sale",
        boy: "/baby-boy-clothes/favorites/limited-time-sale",
        newborn: "/newborn-clothing"
      },
      toddler: {
        girl: "/select-styles/toddler-girls-clothes/favorites/limited-time-sale",
        boy: "/select-styles/toddler-boys-clothes/favorites/limited-time-sale"
      }
    },
    sale: {
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
    }
  }
};
exports.urls = urls;


},{}]},{},[1]);
