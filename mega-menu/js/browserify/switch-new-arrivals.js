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
      // promo1 = urls.promo1.sale.Promo;
      promo1 = _urls.urls.promo1.sale.girl;
      promo2 = _urls.urls.promo2.girl;
      clearance = _urls.urls.promo1.sale.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      // promo1 = urls.promo1.sale.Promo;
      promo1 = _urls.urls.promo1.sale.boy;
      promo2 = _urls.urls.promo2.boy;
      clearance = _urls.urls.promo1.sale.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.sale.baby.girl;
      promo2 = _urls.urls.promo2.baby.girl;
      clearance = _urls.urls.promo1.sale.baby.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.sale.baby.boy;
      promo2 = _urls.urls.promo2.baby.boy;
      clearance = _urls.urls.promo1.sale.baby.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      // promo1 = urls.promo1.sale.Promo;
      promo1 = _urls.urls.promo1.sale.toddler.girl;
      promo2 = _urls.urls.promo2.toddler.girl;
      clearance = _urls.urls.promo1.sale.toddler.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      // promo1 = urls.promo1.sale.Promo;
      promo1 = _urls.urls.promo1.sale.toddler.boy;
      promo2 = _urls.urls.promo2.toddler.boy;
      clearance = _urls.urls.promo1.sale.toddler.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = _urls.urls.promo1.sale.baby.newborn;
      promo2 = _urls.urls.promo2.baby.newborn;
      clearance = _urls.urls.promo1.sale.baby.newborn; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
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
  promo1: {
    Promo: "/swimwear",
    girl: "/girls-swimwear",
    boy: "/boys-swimwear",
    baby: {
      girl: "/baby-girl-swimwear",
      boy: "/baby-boy-swimwear",
      newborn: "/newborn-clothing/favorites/limited-time-sale"
    },
    toddler: {
      girl: "/toddler-girls-clothes/swim",
      boy: "/toddler-boys-clothes/swim"
    },
    sale: {
      girl: "/sale/girls-clothing/",
      boy: "/sale/boys-clothing/",
      baby: {
        girl: "/sale/baby-girl-clothes/",
        boy: "/sale/baby-boy-clothes/",
        newborn: "/sale/newborn-clothing/view-all"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/",
        boy: "/sale/toddler-boys-clothing/"
      }
    }
  },
  promo2: {
    girl: "/flashsale-girls",
    boy: "/flashsale-boys",
    baby: {
      girl: "/flashsale-baby-girl",
      boy: "/flashsale-baby-boy",
      newborn: "/flashsale-newborn"
    },
    toddler: {
      girl: "/flashsale-toddler-girls",
      boy: "/flashsale-toddler-boys"
    }
  }
};
exports.urls = urls;


},{}]},{},[1]);
