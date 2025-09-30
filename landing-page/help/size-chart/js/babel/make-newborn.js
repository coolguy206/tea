"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
module.exports = function (cat, sheetDept, dept, sheetCatArr, val, i) {
  //? function to build the newborn tables

  //? hide the top table
  $('.size-chart-table .the-table').hide();

  //? split the selected categories into an array to loop through and change the string to match the sheetCatArr
  var nbCatArr = cat.split(',');
  $.each(nbCatArr, function (j, str) {
    if (str == " Booties" || str == " Bibs") {
      nbCatArr[j] = "all categories, accessories";
    } else if (str == " hats") {
      nbCatArr[j] = "all categories, hats";
    }
  });

  //? remove duplicates
  var uniqueNbCatArr = _toConsumableArray(new Set(nbCatArr));
  // console.log(uniqueNbCatArr);

  //? find the matching sheetDepts for newborn
  if (sheetDept == dept) {
    //? loop through uniqueNbCatArr and find matching data and output
    $.each(uniqueNbCatArr, function (j, nb) {
      if (nb == sheetCatArr) {
        var rows;

        //? change the headers for the newborn tables
        if (nb == "all categories, accessories") {
          nb = "Booties & Bibs";
        } else if (nb == "all categories, hats") {
          nb = "hats";
        }

        //? THIS MAKES THE MULTIPLE TABLES and table headers
        rows = makeTableHeader(i, val, dept, nb);

        //? output the tables and contents
        outputTable(i, val, rows);

        //? stop the function
        return false;
      }
    });
  }
};
