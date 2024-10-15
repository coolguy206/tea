(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  //? FOR TESTING TO REMOVE BROWSEHISTORY LOCALSTORAGE
  //console.log(`remove browseHistory`);
  //localStorage.removeItem("browseHistory");

  var url = window.location.pathname;
  // console.log(`url: ${url}`);

  if (url !== '/product/EGIFTCARD-999-NS/tea-collection-gift-certificate-gift-card.html') {
    var pdpInfo = dataLayer;
    $(pdpInfo).each(function (i, val) {
      // console.log(i);
      // console.log(val);
      if (val.pdpEvent == 'pdp to local storage') {
        console.log("found it");
        console.log(val);
        pdpInfo = val;
      }
    });
    var json = "";
    var browseHistory = localStorage.getItem("browseHistory");
    if (browseHistory == null) {
      var obj = [pdpInfo];
      json = JSON.stringify(obj);
      console.log("no browseHistory");
      // console.log(obj);
      // console.log(json);
      localStorage.setItem("browseHistory", json);
    } else {
      console.log("browseHistory found");
      browseHistory = JSON.parse(browseHistory);
      console.log(browseHistory);
      if (browseHistory.length >= 16) {
        console.log("browseHistory at 16 remove 1st item");
        browseHistory.shift();
        browseHistory.push(pdpInfo);
        console.log(browseHistory);
      } else {
        browseHistory.push(pdpInfo);
      }

      //? CHECK IF ANY ARE NULL THEN REMOVE FROM ARRAY
      $(browseHistory).each(function (i, val) {
        if (val == null) {
          browseHistory.splice(i, 1);
        }
      });
      json = JSON.stringify(browseHistory);
      // console.log(browseHistory);
      // console.log(json);
      localStorage.setItem("browseHistory", json);
    }
  }
});


},{}]},{},[1]);
