(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  $('.new-arrivals-slider.boy').hide();
  $('.new-arrivals-slider.girl').hide();
  $('.new-arrivals-slider.baby').hide();
  $('.the-gender span').on('click', function () {
    var str = $(this).text().toLowerCase();
    $('.the-gender span').removeClass('selected');
    if (str == "girl") {
      $('.new-arrivals-slider.boy').hide();
      $('.new-arrivals-slider.all').hide();
      $('.new-arrivals-slider.baby').hide();
      $('.new-arrivals-slider.girl').show();
      $(this).addClass('selected');
    } else if (str == "boy") {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.all').hide();
      $('.new-arrivals-slider.baby').hide();
      $('.new-arrivals-slider.boy').show();
      $(this).addClass('selected');
    } else if (str == "all") {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.boy').hide();
      $('.new-arrivals-slider.baby').hide();
      $('.new-arrivals-slider.all').show();
      $(this).addClass('selected');
    } else if (str == "baby") {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.boy').hide();
      $('.new-arrivals-slider.all').hide();
      $('.new-arrivals-slider.baby').show();
      $(this).addClass('selected');
    }
  });
});


},{}]},{},[1]);
