(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (dept, cat) {
  //? function to return cat if dept is baby

  //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change to match sheet because it does not match the measuring-tips.js array of objects
  if (dept == "baby girl") {
    if (cat == "dresses, tops, bottoms, swim, sweater + outerwear, pajamas") {
      cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
    }
  } else if (dept == "baby boy") {
    if (cat == "tees + shirts, bottoms, swim, sweater + outerwear, pajamas") {
      cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
    }
  }
  return cat;
};

},{}],2:[function(require,module,exports){
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

},{"./make-table-header.js":4,"./output-table.js":7}],3:[function(require,module,exports){
"use strict";

var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
module.exports = function (cat, sheetDept, dept, sheetCatArr, val, i) {
  //? function to make the shoes + accessories tables

  //? hide the top table
  $('.size-chart-table .the-table').hide();

  //? split the selected categories into an array
  var catArr = cat.split(',');

  //? loop through the array and check if any of the values match
  $.each(catArr, function (k, c) {
    // console.log(k,c);

    //? this var holds the actual category from the sheets because the format is shoes + accessories,brand
    var shoesAccess = sheetCatArr.split(',')[1];

    //? skip shoe + accessories but match the rest eg: socks & hats
    if (c !== 'shoes + accessories' && shoesAccess == c) {
      // console.log('match found');
      // console.log(shoesAccess, c);

      var rows;

      //? THIS MAKES THE MULTIPLE TABLES and table headers
      rows = makeTableHeader(i, val, dept, c);

      //? output the table contents
      outputTable(i, val, rows);

      //? stop the function
      return false;
    }
  });
};

},{"./make-table-header.js":4,"./output-table.js":7}],4:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');
module.exports = function (i, val, dept, subcat) {
  //? function to make table header because of shoes + accessories have multiple tables

  //? add new table
  $('.size-chart-table').append('<table data-num="' + i + '"><tr class="size-chart-header"><th>' + dept + ' ' + subcat + ' size chart</th></tr></table>');
  // console.log('rows: ', val);

  rows = val.merges[0].endColumnIndex - 1;

  //? if newborn change the colspan to 7 if all categories otherwise use the endColumnIndex
  if (subcat == "all categories" && dept == "newborn") {
    colspan = 7;
  } else {
    colspan = val.merges[0].endColumnIndex;
  }
  // console.log(colspan);

  //? add colspan to .size-chart-header
  $('.size-chart-table table[data-num="' + i + '"] th').attr('colspan', colspan);
  return rows;
};

},{"./make-td.js":6}],5:[function(require,module,exports){
"use strict";

var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
var checkIfBaby = require('./check-if-baby.js');
var makeNewborn = require('./make-newborn.js');
var makeShoeAccessories = require('./make-shoe-accessories.js');
module.exports = function (sheets) {
  //? function to create the tables
  //? show .the-table
  $('.size-chart-table .the-table').show();

  //? remove all <tr> except the 1st one
  var trs = $('.size-chart-table table tr');
  $.each(trs, function (i, val) {
    if ($(val).attr('class') !== 'size-chart-header') {
      $(val).remove();
    }
  });

  //? remove all the tables except the .the-table
  var tables = $('.size-chart-table table');
  $.each(tables, function (i, val) {
    if ($(val).attr('class') !== 'the-table') {
      $(val).remove();
    }
  });

  //? the selected values
  var dept = $('.size-chart-container select.department').val();
  var cat = $('.size-chart-container select.category').val();
  // console.log(dept,cat);

  var sheet = sheets;
  console.log('from make-table.js');
  console.log(sheet);

  //? loop through sheet and find the matched table
  $.each(sheet, function (i, val) {
    //? var to hold the sheet dept and cat
    var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
    //? split the sheetVal because it is in the format of dept:category
    var sheetArr = sheetVal.split(':');
    //? the dept var from the sheets
    var sheetDept = sheetArr[0];
    //? the cat var from the sheets
    var sheetCatArr = sheetArr[1];
    // console.log(sheetCatArr);

    //? if the sheet dept is baby change to array of baby girl and baby boy
    if (sheetDept == 'baby') {
      sheetDept = ['baby girl', 'baby boy'];
    }

    //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change to match sheet because it does not match the measuring-tips.js array of objects
    cat = checkIfBaby(dept, cat);

    //? if newborn show all the categories and tables
    if (dept == "newborn") {
      makeNewborn(cat, sheetDept, dept, sheetCatArr, val, i);
    } else if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
      //? all other departments NOT newborn

      //? if category is shoes + accessories
      if (cat.indexOf('shoes + accessories') !== -1) {
        makeShoeAccessories(cat, sheetDept, dept, sheetCatArr, val, i);
      } else if (cat.indexOf(sheetCatArr) !== -1) {
        //? all other categories that are not shoes + accessories and only have 1 table
        // console.log(i,val);
        var rows;
        var colspan;

        // console.log(`only activate`);

        rows = val.merges[0].endColumnIndex - 1;
        colspan = val.merges[0].endColumnIndex;

        //? add colspan to .size-chart-header
        $('.size-chart-header th').attr('colspan', colspan);

        //? output the table contents
        outputTable(i, val, rows);

        //? stop the function
        return false;
      }
    }
  });
};

},{"./check-if-baby.js":1,"./make-newborn.js":2,"./make-shoe-accessories.js":3,"./make-table-header.js":4,"./output-table.js":7}],6:[function(require,module,exports){
"use strict";

module.exports = function (k, row, rows, tableElem) {
  //? function to make the <td>

  // console.log(tableElem);
  // console.log(k, row, rows);

  //? add the data <td>
  $.each(row.values, function (l, td) {
    //? loop only to the rows variable
    if (l <= rows) {
      var content;
      var fraction;
      var theFraction;
      // console.log(l, rows, row);

      if (td.formattedValue !== undefined) {
        //? formatting to match design

        content = td.formattedValue;
        // console.log(content);
        content = content.toLowerCase();
        content = content.replace(' - ', '&ndash;');
        content = content.replace('months', 'mos');
        content = content.replace('years', 'yrs');
        if (content.indexOf('inches') !== -1 || content.indexOf('pounds') !== -1) {
          content = content.split('\n');
          // console.log(content);
          content = content[0] + '<span>' + content[1] + '</span>';
        }
        if (content == 'shoe size') {
          content = '<span class="shoe-size">' + content + '</span>';
        }
        fraction = td.formattedValue;
        // console.log('the fraction: ',fraction);

        //? for shoes + accessories if not L/XL
        if (fraction !== 'L/XL' && fraction !== '2T/2' && fraction !== '3T/3' && fraction !== '4T/4') {
          //? if cell has two fractions example 58 1/2 - 61 1/2
          if (fraction.indexOf('/') !== -1 && fraction.indexOf('-') !== -1) {
            fraction = fraction.split('-');
            var twoFrac = [];
            $.each(fraction, function (m, frac) {
              var fracArray = frac.split(' ');
              $.each(fracArray, function (n, num) {
                if (num !== '') {
                  twoFrac.push(num);
                }
              });
            });

            // console.log(twoFrac);

            //? output
            //? example 61 1/2 - 64
            if (twoFrac[1].indexOf('/') !== -1 && twoFrac[3] == undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + '</td>');
            }

            //? example 61 - 61 1/2
            else if (twoFrac[1].indexOf('/') == -1 && twoFrac[2].indexOf('/') !== -1) {
              var twoFracA = twoFrac[2].split('/');
              twoFrac[2] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' &ndash; ' + twoFrac[1] + ' ' + twoFrac[2] + '</td>');
            }

            //? example 58 1/2 - 61 1/2
            else if (twoFrac[1].indexOf('/') !== -1 && twoFrac[1] !== undefined && twoFrac[3].indexOf('/') !== -1 && twoFrac[3] !== undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              var twoFracB = twoFrac[3].split('/');
              twoFrac[3] = '<sup class="frac">' + twoFracB[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracB[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + ' ' + twoFrac[3] + '</td>');
            }
          } else {
            //? only one fraction

            fraction = fraction.split(' ');
            $.each(fraction, function (m, frac) {
              // console.log(m, frac);
              if (frac.indexOf('/') !== -1) {
                theFraction = frac;
                // console.log('theFraction: ',theFraction);
              }
            });

            //? output
            if (theFraction !== undefined && theFraction.indexOf('/') !== -1) {
              theFraction = theFraction.split('/');
              var htmlFraction = '<sup class="frac">' + theFraction[0] + '</sup>&frasl;<span class="frac denominator">' + theFraction[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction[0] + ' ' + htmlFraction + '</td>');
            } else {
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + content + '</td>');
            }
          }
        } else if (fraction == 'L/XL' || fraction == '2T/2' || fraction == '3T/3' || fraction == '4T/4') {
          //? output sizes 'L/XL','2T/2','3T/3','4T/4'

          // console.log('yo buddy: ', fraction);
          $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction + '</td>');
        }
      }
    }
  });
};

},{}],7:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');
module.exports = function (i, val, rows) {
  //? function to output the table contents

  //? output the table
  $.each(val.data[0].rowData, function (k, row) {
    //? add the row <tr>
    if (k > 2) {
      var tableLength = $('.size-chart-table table').length;
      // console.log(tableLength);

      //? check if the number of rows is even or odd then add class
      var tableNum = val.data[0].rowData.length - 4;

      //? if only one table (not shoes + accessories)
      if (tableLength == 1) {
        $('.size-chart-container .the-table').append('<tr data-num="' + k + '"></tr>');

        //? add the data <td>
        makeTd(k, row, rows, '.size-chart-container .the-table');
      } else if (tableLength > 1) {
        //? if multiple tables (shoes + accessories)
        // console.log(row.values[0].formattedValue);

        //? only make a row if the 1st td of the row has data
        if (row.values[0].formattedValue !== undefined) {
          $('.size-chart-table table[data-num="' + i + '"]').append('<tr data-num="' + k + '"></tr>');

          // console.log('more then one table\n this is the index\n' + i);

          //? add the data <td>
          makeTd(k, row, rows, '.size-chart-table table[data-num="' + i + '"]');
        }
      }
    }
  });
};

},{"./make-td.js":6}]},{},[5]);
