(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  // girl: '',
  // boy: '',
  girl: '.promo1-url.girl',
  boy: '.promo1-url.boy',
  // babyGirl: '',
  // babyBoy: '',
  // babyGirl: `.promo1-url.baby-girl`,
  // babyBoy: `.promo1-url.baby-boy`,
  babyGirl: '.promo1-url.girl',
  babyBoy: '.promo1-url.boy',
  // toddlerGirl: '',
  // toddlerBoy: '',
  // toddlerGirl: `.promo1-url.toddler-girl`,
  // toddlerBoy: `.promo1-url.toddler-boy`,
  toddlerGirl: '.promo1-url.girl',
  toddlerBoy: '.promo1-url.boy',
  newborn: '',
  // newborn:`.promo1-url.newborn`,
  showNewborn: false,
  // swim: ``,
  // dress: ``,
  swim: '.promo1-url.girl',
  dress: '.promo1-url.girl'
};

},{}]},{},[1]);
