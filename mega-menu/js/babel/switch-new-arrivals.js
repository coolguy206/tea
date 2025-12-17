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
