(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// import {
//   switchNewArrivals
// } from './switch-new-arrivals.js';
// import {
//   switchSale
// } from './switch-sale.js';
$(document).ready(function () {
  // $('.menu .swimwear').text('$15 Swim');
  $('.dept-girl, .dept-baby').hover(function () {
    $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

    $('.promo2-url').hide();
    $('.clearance-url').hide();
  }, function () {});
  $('.dept-sale').hover(function () {
    $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

    $('.promo2-url').hide();
    $('.clearance-url').hide();
  }, function () {});
  $('.dept-boy').hover(function () {
    $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();

    $('.promo2-url').hide();
    $('.clearance-url').hide();
  }, function () {}); // $('.site-nav-submenu .bar>div').hover(function() {
  //   var href = $(this).find('a').first().attr('href');
  //   // console.log(href);
  //
  //   $('.promo1-url, .promo2-url, .clearance-url').hide();
  //
  //   if (href.indexOf('sale') == -1) {
  //     switchNewArrivals(href);
  //   } else {
  //     switchSale(href);
  //   }
  //
  // }, function() {
  //
  // });
});


},{}]},{},[1]);
