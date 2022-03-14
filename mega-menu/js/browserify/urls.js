(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
