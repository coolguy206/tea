(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    girl: "/girls-swimwear",
    boy: "/boys-swimwear",
    tween: "/tween-girls-clothing/category/swimwear",
    baby: {
      girl: "/baby-girl-swimwear",
      boy: "/baby-boy-swimwear",
      newborn: "/sale/newborn-clothing/clearance"
    },
    toddler: {
      girl: "/toddler-girls-clothes/swim",
      boy: "/toddler-boys-clothes/swim"
    }
  }
};
exports.urls = urls;


},{}]},{},[1]);
