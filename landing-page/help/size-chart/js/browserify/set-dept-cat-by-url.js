(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
module.exports = function (urlpara, elem1) {
  //? function to select the department & category based  url params

  //? onload check if parameters in url for department and category
  var urlParam = window.location.href;

  //? check if parameters if there are then split them into an array
  if (urlParam.indexOf('?') !== -1) {
    var paramArr = urlParam.split('?');

    //? split the parameters into an array
    paramArr = paramArr[1].split('&');

    //? loop through the array to find selectedDept & selectedCat then change the selected values from the dropdown
    var _iterator = _createForOfIteratorHelper(paramArr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var val = _step.value;
        var param = val.split('=');
        //? this finds the selectedDept and selectedCat url parameter
        console.log(param[0], param[1], urlpara);
        if (param[0] == urlpara) {
          var deptCat = param[1];

          //? if 20% in variable change to ' '
          deptCat = String(deptCat.replace(/%20/g, ' '));
          return deptCat;

          //?change the value selected from the dropdown
          // $(elem1).val(deptCat);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};

},{}]},{},[1]);
