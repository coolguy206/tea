"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var deptCat = require('./set-dept-cat.js');
var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
module.exports = function () {
  //function to create the tables
  //show .the-table
  $('.size-chart-table .the-table').show();

  //remove all <tr> except the 1st one
  var trs = $('.size-chart-table table tr');
  $.each(trs, function (i, val) {
    if ($(val).attr('class') !== 'size-chart-header') {
      $(val).remove();
    }
  });

  //remove all the tables except the .the-table
  var tables = $('.size-chart-table table');
  $.each(tables, function (i, val) {
    if ($(val).attr('class') !== 'the-table') {
      $(val).remove();
    }
  });

  //the selected values
  var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  // console.log(dept,cat);

  var sheet = sheets;
  console.log('from make-table.js');
  console.log(sheet);

  //loop through sheet and find the matched table
  $.each(sheet, function (i, val) {
    var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
    var sheetArr = sheetVal.split(':');
    var sheetDept = sheetArr[0];
    // var sheetCatArr = sheetArr[1].split(',');
    var sheetCatArr = sheetArr[1];
    // console.log(sheetCatArr);

    //if baby
    if (sheetDept == 'baby') {
      sheetDept = ['baby girl', 'baby boy'];
    }

    //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change cat to match sheet
    if (dept == "baby girl") {
      if (cat == "dresses, tops, bottoms, swim, sweater + outerwear, pajamas") {
        cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
      }
    } else if (dept == "baby boy") {
      if (cat == "tees + shirts, bottoms, swim, sweater + outerwear, pajamas") {
        cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
      }
    }
    if (dept == "newborn") {
      //? hide the top table
      $('.size-chart-table .the-table').hide();
      var nbCatArr = cat.split(',');
      $.each(nbCatArr, function (j, str) {
        if (str == " Booties" || str == " Bibs") {
          nbCatArr[j] = "all categories, accessories";
        } else if (str == " hats") {
          nbCatArr[j] = "all categories, hats";
        }
      });
      var uniqueNbCatArr = _toConsumableArray(new Set(nbCatArr));
      // console.log(uniqueNbCatArr);

      //? find the matching sheetDepts for newborn
      if (sheetDept == dept) {
        //? loop through uniqueNbCatArr and find matching data and output
        $.each(uniqueNbCatArr, function (j, nb) {
          if (nb == sheetCatArr) {
            var rows;
            var colspan;

            // rows = val.merges[0].endColumnIndex - 1;
            // if (nb == `all categories`) {
            //   colspan = 7;
            // } else {
            //   colspan = val.merges[0].endColumnIndex;
            // }

            //add colspan to .size-chart-header
            // $('.size-chart-header th').attr('colspan', colspan);

            //? change the headers for the newborn tables
            if (nb == "all categories, accessories") {
              nb = "Booties & Bibs";
            } else if (nb == "all categories, hats") {
              nb = "hats";
            }
            rows = makeTableHeader(i, val, dept, nb);

            //output the table contents
            outputTable(i, val, rows);

            //stop the function
            return false;
          }
        });
      }
    } else if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
      //check if cat matches
      // $.each(sheetCatArr, function (j, category) {
      // if (category == cat) {

      //? if category is shoes + accessories
      if (cat.indexOf('shoes + accessories') !== -1) {
        //? hide the top table
        $('.size-chart-table .the-table').hide();

        //? split the selected categories into an array
        var catArr = cat.split(',');

        //? loop through the array and check if any of the values match
        $.each(catArr, function (k, c) {
          // console.log(k,c);

          var shoesAccess = sheetCatArr.split(',')[1];

          //? skip shoe + accessories but match the rest eg: socks & hats
          if (c !== 'shoes + accessories' && shoesAccess == c) {
            console.log('match found');
            console.log(shoesAccess, c);
            var rows;
            var colspan;

            // rows = val.merges[0].endColumnIndex - 1;
            colspan = val.merges[0].endColumnIndex;

            //add colspan to .size-chart-header
            $('.size-chart-header th').attr('colspan', colspan);
            rows = makeTableHeader(i, val, dept, c);

            //output the table contents
            outputTable(i, val, rows);

            //stop the function
            return false;
          }
        });

        //? all other categories that are not shoes + accessories
      } else if (cat.indexOf(sheetCatArr) !== -1) {
        // console.log(i,val);
        var rows;
        var colspan;
        console.log("only activate");
        rows = val.merges[0].endColumnIndex - 1;
        colspan = val.merges[0].endColumnIndex;

        //add colspan to .size-chart-header
        $('.size-chart-header th').attr('colspan', colspan);

        //output the table contents
        outputTable(i, val, rows);

        //stop the function
        return false;
      }
      // });
    }
  });
};
