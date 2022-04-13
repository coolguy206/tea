(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  var overlay = "<div class=\"kidizen-overlay\"></div>";
  var content = "<div class=\"kidizen-content\">\n  <img class=\"kidizen-close\" src=\"/mas_assets/media/tea_collection/content-zone/email-sign-up/lightbox/2019/0724/v1/+.svg\">\n  <img class=\"tea-rewear-logo\" src=\"/mas_assets/media/tea_collection/content-zone/mega-menu/sub-nav/2022/0125/v0/tea-rewear.png\">\n    <p>Heads up! You\u2019re about to leave<br class=\"mobile\"> Tea to shop,<br class=\"desktop\"> sell, or trade in pre-<br class=\"mobile\">loved Tea on Tea Rewear.</p>\n    <a id=\"tea-rewear-leave\" class=\"a cta-border \" href=\"https://teacollection.kidizen.com/?utm_source=Tea+Collection&utm_medium=website&utm_campaign=Tea+Rewear\" target=\"_blank\">take me there</a>\n  </div>";
  var elem = overlay + content;
  $('body').on('click', '.kidizen-url', function (e) {
    e.preventDefault();
    var url = $(this).attr('data-url');
    console.log('clicked rewear');
    $('body').prepend(elem);

    if (url !== undefined) {
      $('#tea-rewear-leave').attr('href', url);
    }
  });
  $('body').on('click', '.kidizen-close, .kidizen-content a, .kidizen-overlay', function () {
    $('.kidizen-overlay, .kidizen-content').remove();
  });
});


},{}]},{},[1]);
