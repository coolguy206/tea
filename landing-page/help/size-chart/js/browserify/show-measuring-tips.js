(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (urlDept) {
  //? hide measure tips if any of these depts
  // if (urlDept == `newborn` || urlDept == `adult unisex` || urlDept == `women` || urlDept == `men`) {
  //     $('.measure-content').removeClass('active');
  //     return;
  // }

  //? remove class active from all
  $('.measure-content .category-headers a, .measure-content .measure-container, .measure-content').removeClass('active');

  //? set the measuring tips dept
  var headers = $('.measure-content .category-headers a');
  headers.map(function (i, val) {
    // console.log($(val).text());
    if ($(val).text() == urlDept) {
      $(val).addClass('active');
    }
  });

  //? add class active to measure-container with matching header
  var m = $('.measure-content .measure-container');
  for (var i = 0; i < m.length; i++) {
    var theClass = $(m[i]).attr('class').split('measure-container')[1].replace(/ /, '');
    console.log($(m[i]));
    console.log(theClass);
    if (theClass == urlDept) {
      $(m[i]).addClass('active');
      break;
    }
  }

  //? add class active to show the measuring tips entire container
  $('.measure-content').addClass('active');
};

},{}]},{},[1]);
