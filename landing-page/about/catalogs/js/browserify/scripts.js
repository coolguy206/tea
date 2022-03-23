(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var showCatalog = require('./showCatalog.js'); //   RUN NODE ISSUU.JS FIRST!!!!


$(document).ready(function () {
  //load the first catalog
  var firstThumb = $('.navigation-catalog ul li:first-of-type').attr('data-name');
  var firstDesc = $('.navigation-catalog ul li:first-of-type').attr('data-desc');
  showCatalog(firstThumb, 1000, firstDesc); //click thumb change the flipbook

  $('.navigation-catalog ul li').click(function () {
    // console.log('li clicked');
    var name = $(this).attr('data-name');
    var desc = $(this).attr('data-desc');
    $('#flipBook').children().remove();
    $('.loading').show();
    showCatalog(name, 1000, desc);
    window.scrollTo(0, 140);
  });
});


},{"./showCatalog.js":2}],2:[function(require,module,exports){
"use strict";

// const vars = require('./vars.js');
module.exports = function (name, width, desc) {
  var url = name;
  url = "https://issuu.com/teacollection/docs/".concat(url);
  url = encodeURIComponent(url);
  $.get("https://issuu.com/oembed?url=".concat(url, "&format=json&maxwidth=").concat(width), function (data) {
    // console.log(data);
    $('#flipBook').append(data.html);
    $('#flipBook').append("<p> ".concat(desc, "</p>"));
    $('.loading').hide();
  });
};


},{}]},{},[1]);
