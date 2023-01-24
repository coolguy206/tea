(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var urls = {
  num10: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'boy',
    text: 'boy'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }, {
    url: 'baby-boy',
    text: 'baby boy'
  }],
  num12: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'boy',
    text: 'boy'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }, {
    url: 'baby-boy',
    text: 'baby boy'
  }],
  num15: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'boy',
    text: 'boy'
  }, {
    url: 'tween',
    text: 'tween'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }, {
    url: 'baby-boy',
    text: 'baby boy'
  }],
  num20: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'tween',
    text: 'tween'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }],
  numUndefined: [10, 12, 15, 20],
  girl: [10, 12, 15, 20],
  boy: [10, 12, 15],
  tween: [15, 20],
  baby: {
    girl: [10, 12, 15, 20],
    boy: [10, 12, 15] // newborn: [12, 15]

  },
  toddler: {
    girl: [10, 12, 15, 20],
    boy: [10, 12, 15]
  }
};


},{}]},{},[1]);
