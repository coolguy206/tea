(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//? CODE REFRENCE FOR PUTTING PROMO IN FOOTER ON MOBILE AND SHOW ON SCROLL

//? on mobile clone the promo & put in the footer. when scroll show it
$('.the-banner-footer-container').prepend($('.promos').clone());
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  // console.log(scrollTop);

  if (scrollTop > 216) {
    $('.the-banner-footer-container .promos').addClass('show-the-banner');
  } else {
    $('.the-banner-footer-container .promos').removeClass('show-the-banner');
  }
});

},{}]},{},[1]);
