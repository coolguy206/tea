(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (urlpara, elem1) {
  //? function to select the department & category based  url params

  //? Check if the URL has parameters
  var searchParams = new URLSearchParams(window.location.search);

  //? Retrieve the value of the specified parameter
  var paramValue = searchParams.get(urlpara);
  if (paramValue !== null) {
    //? Decode URL-encoded characters
    return decodeURIComponent(paramValue);
  }
  return null; // or handle the case where the parameter isn't present

  /*
  //? onload check if parameters in url for department and category
  var urlParam = window.location.href;
    //? check if parameters if there are then split them into an array
  if (urlParam.indexOf('?') !== -1) {
      var paramArr = urlParam.split('?');
      //? split the parameters into an array
    paramArr = paramArr[1].split('&');
      //? loop through the array to find selectedDept & selectedCat then return the values and stop the loop
    for (let val of paramArr) {
        var param = val.split('=');
      //? this finds the selectedDept and selectedCat url parameter
      // console.log(param[0], param[1], urlpara);
        if (param[0] == urlpara) {
          var deptCat = param[1];
        //? if 20% in variable change to ' '
        deptCat = String(deptCat.replace(/%20/g, ' '));
          return deptCat;
        }
      }
    }
  */
};

},{}]},{},[1]);
