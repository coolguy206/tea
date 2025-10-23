"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchNewArrivals = void 0;
var _urls = require("./urls.js");
var switchNewArrivals = exports.switchNewArrivals = function switchNewArrivals(href) {
  var promo1 = href;
  var promo2 = href;
  var promo3 = href;
  var clearance = href;
  var showPromo1 = true;
  var showPromo2 = false;
  var showPromo3 = false;
  var promo1Elem = ".promo1-url";
  var promo2Elem = ".promo2-url";
  var promo3Elem = ".promo3-url";
  var girl = "";
  var boy = "";
  var babyGirl = "";
  var babyBoy = "";
  var toddlerGirl = "";
  var toddlerBoy = "";
  var swim = "";
  var dress = "";

  // let girl = `.promo1-url.girl`;
  // let boy = `.promo1-url.boy`;
  // let babyGirl = `.promo1-url.baby-girl`;
  // let babyBoy = `.promo1-url.baby-boy`;

  // let toddlerGirl = `.promo1-url.toddler-girl`;
  // let toddlerBoy = `.promo1-url.toddler-boy`;
  // let toddlerGirl = `.promo1-url.girl`;
  // let toddlerBoy = `.promo1-url.boy`;

  var newborn = "";
  // let newborn = `.promo1-url.newborn`;
  var showNewborn = false;

  // let swim = `.promo1-url.girl`;
  // let dress = `.promo1-url.girl`;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = _urls.urls.promo.girl;
      promo2 = _urls.urls.promo.select.girl;
      promo3 = _urls.urls.promo.sale.girl;
      clearance = _urls.urls.promo.clearance.girl;
      if (showPromo1) {
        if (girl !== "") {
          $(girl).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (boy !== "") {
          $(boy).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (babyGirl !== "") {
          $(babyGirl).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (babyBoy !== "") {
          $(babyBoy).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (toddlerGirl !== "") {
          $(toddlerGirl).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (toddlerBoy !== "") {
          $(toddlerBoy).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = _urls.urls.promo.baby.newborn;
      promo2 = _urls.urls.promo.select.baby.newborn;
      promo3 = _urls.urls.promo.sale.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn;
      if (showPromo1) {
        if (newborn !== "") {
          $(newborn).show();
        } else if (showNewborn) {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (swim !== "") {
          $(swim).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
      if (showPromo1) {
        if (dress !== "") {
          $(dress).show();
        } else {
          $(promo1Elem).show();
        }
      }
      if (showPromo2) {
        $(promo2Elem).show();
      }
      if (showPromo3) {
        $(promo3Elem).show();
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
